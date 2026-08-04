/* ==========================================================
   Zigbot's brain — 100% in-browser, no API, no server, no key.

   Scores a visitor's question against the knowledge base and
   returns either a confident answer, a short "did you mean"
   list when two entries are genuinely close, or a fallback
   with the nearest questions to pick from.

   Kept as a pure module so it can be tested without a browser.
   ========================================================== */

export type Entry = { q: string; a: string; kw: string };

export type Reply =
  | { kind: "answer"; text: string; suggestions?: never }
  | { kind: "suggest"; text: string; suggestions: string[] };

/* ── Tokenising ───────────────────────────────────────────────────────
   Only genuine noise is dropped. Words like "how", "get", "want" and
   "much" carry the visitor's intent, so they stay — term rarity below
   is what stops common words dominating, not a blunt stop list. */
const STOP = new Set(
  (
    "a an the this that these those there here it its is are was were be been being am " +
    "i me my we us our you your he she they them their of to in on at by for from with as " +
    "and or but if so just also not please thanks thank hi hello hey ok okay yeah yes " +
    // auxiliaries: they open half the questions in the knowledge base and
    // carry no intent of their own
    "do does did done has have had can could would should will shall may might must " +
    "about"
  ).split(" ")
);

/* A trailing "s" only comes off when it really is a plural: "benchmarks" →
   "benchmark", but "does", "business" and "analysis" are left alone. */
function stem(t: string): string {
  if (t.length <= 3) return t;
  if (/(ss|us|is|as|os)$/.test(t)) return t;
  if (t.endsWith("ies")) return `${t.slice(0, -3)}y`;
  if (/(ch|sh|x|z|s)es$/.test(t)) return t.slice(0, -2);
  if (t.endsWith("s")) return t.slice(0, -1);
  return t;
}

export function tokenize(s: string): string[] {
  return (String(s).toLowerCase().match(/[a-z0-9]+/g) || [])
    .filter((t) => t.length >= 2 && !STOP.has(t))
    .map(stem);
}

/* ── Index ────────────────────────────────────────────────────────────
   Question and keyword hits weigh more than answer-body hits, and every
   hit is scaled by how rare the word is across the knowledge base. A
   word in nearly every entry ("benchmark", "pay") barely discriminates;
   a word in one or two ("cost", "gdpr") is decisive. */
const FIELD_Q = 3; // matched in the question or its keywords
const FIELD_A = 1; // matched only in the answer body
const BIGRAM_BONUS = 2.5; // an adjacent word pair matched in the question
const ANCHOR_MISS = 0.5; // penalty for missing the rarest word in the query
const WHOLE_QUESTION = 4; // the visitor typed out one of the questions itself

type Indexed = {
  entry: Entry;
  weight: Map<string, number>; // token → field weight
  pairs: Set<string>; // adjacent token pairs from question + keywords
};

export type Phrases = {
  /** Nothing but pleasantries in the message. */
  greeting?: string;
  /** Outside what Zigbot covers. */
  fallback?: string;
  /** On topic, but too vague to answer outright. */
  unsure?: string;
  /** Two readings, both plausible. */
  ambiguous?: string;
};

export type Brain = {
  ask(query: string, opts?: Phrases): Reply;
  /** Exposed for tests: the ranked entries behind a query. */
  rank(query: string): { entry: Entry; score: number }[];
};

export function buildBrain(entries: Entry[]): Brain {
  const indexed: Indexed[] = entries.map((entry) => {
    const weight = new Map<string, number>();
    const put = (str: string, w: number) =>
      tokenize(str).forEach((t) => {
        if ((weight.get(t) ?? 0) < w) weight.set(t, w);
      });
    put(entry.q, FIELD_Q);
    put(entry.kw, FIELD_Q);
    put(entry.a, FIELD_A);

    const head = [...tokenize(entry.q), ...tokenize(entry.kw)];
    const pairs = new Set<string>();
    for (let i = 0; i < head.length - 1; i++) pairs.add(`${head[i]} ${head[i + 1]}`);

    return { entry, weight, pairs };
  });

  // Inverse document frequency, so ubiquitous words count for little.
  const n = indexed.length;
  const df = new Map<string, number>();
  indexed.forEach(({ weight }) =>
    weight.forEach((_, t) => df.set(t, (df.get(t) ?? 0) + 1))
  );
  const idf = (t: string) => Math.log(1 + n / (1 + (df.get(t) ?? 0)));

  /** Ranked entries, plus whether the query gave us enough to answer outright. */
  function score(query: string): {
    ranked: { entry: Entry; score: number }[];
    weak: boolean;
    /** Whether the question is mostly made of words we actually know. */
    onTopic: boolean;
  } {
    const tokens = tokenize(query);
    const unique = [...new Set(tokens)];
    if (!unique.length) return { ranked: [], weak: true, onTopic: false };

    // Best score this query could achieve, so the threshold means the same
    // thing for a two-word question as for a twenty-word one. Words the
    // knowledge base has never seen are left out: an unknown word is not
    // something any entry could have matched, so counting it would unfairly
    // push every entry below the threshold.
    const known = unique.filter((t) => (df.get(t) ?? 0) > 0);
    if (!known.length) return { ranked: [], weak: true, onTopic: false };
    const ceiling = known.reduce((sum, t) => sum + FIELD_Q * idf(t), 0) || 1;

    const pairsInQuery: string[] = [];
    for (let i = 0; i < tokens.length - 1; i++) pairsInQuery.push(`${tokens[i]} ${tokens[i + 1]}`);

    // The rarest word the visitor used is usually the point of the question.
    // If they said "payscale", an answer that ignores "payscale" is probably
    // the wrong one, however many common words it happens to share.
    const anchor = known.reduce((a, b) => (idf(a) >= idf(b) ? a : b));

    // Is there anything distinctive to go on at all? A question resting
    // entirely on words that appear all over the knowledge base ("what",
    // "review") carries no real signal, and guessing from it produces the
    // confident-but-wrong answers this is meant to avoid.
    const distinctive = known.some((t) => (df.get(t) ?? 0) <= Math.max(2, n * 0.2));

    // And is the question mostly about things we know about at all? "Can you
    // write my performance review policy" shares one word with the knowledge
    // base and nothing else; matching on that word alone is how a bot ends up
    // answering a question nobody asked.
    //
    // Two bars, because an unrecognised word is often the whole point of the
    // question: "is there a minimum contract" is about the contract, not the
    // minimum. Below the higher bar we may still suggest, but we won't assert.
    const coverage = known.length / unique.length;
    const inVocab = coverage >= 0.4;
    const understood = coverage >= 0.6;

    const asked = new Set(tokens);
    let sawWholeQuestion = false;

    const ranked = indexed
      .map(({ entry, weight, pairs }) => {
        let score = unique.reduce((sum, t) => sum + (weight.get(t) ?? 0) * idf(t), 0);

        pairsInQuery.forEach((p) => {
          if (pairs.has(p)) {
            // Scored on the rarer-is-better half of the pair, so a distinctive
            // phrase like "job advert" counts for far more than a stock opener
            // like "why use", which would otherwise drag every question that
            // happens to start the same way to the top.
            const [x, y] = p.split(" ");
            score += BIGRAM_BONUS * Math.min(idf(x), idf(y));
          }
        });

        if (!weight.has(anchor)) score *= ANCHOR_MISS;

        // Someone typing out (nearly) the question as written wants that
        // question, even when every word in it is a common one.
        const q = new Set(tokenize(entry.q));
        if (asked.size >= 2 && [...asked].every((t) => q.has(t))) {
          score += WHOLE_QUESTION;
          sawWholeQuestion = true;
        }

        return { entry, score: score / ceiling };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score);

    // Too little to go on. We still keep the ranking — it makes for far better
    // suggestions than a fixed list — but we won't state any of it as an answer.
    const weak = !sawWholeQuestion && !(distinctive && understood);
    return { ranked, weak, onTopic: inVocab };
  }

  const rank = (query: string) => score(query).ranked;

  const CONFIDENT = 0.42; // below this we don't claim to know
  const CLEAR_WIN = 0.14; // lead over the runner-up needed to answer outright
  const WORTH_OFFERING = 0.3; // close enough to put forward as a suggestion

  function ask(query: string, opts: Phrases = {}): Reply {
    // "hello" and "thanks" reduce to nothing at all, and deserve a greeting.
    // A real question about something we've never heard of does not — that
    // gets the fallback, with a few questions we can actually answer.
    if (!tokenize(query).length) {
      return { kind: "answer", text: opts.greeting ?? "" };
    }

    const { ranked, weak, onTopic } = score(query);
    if (weak || !ranked.length) {
      // Too vague to answer outright. If the question was at least made of
      // words we know, the ranking is worth offering as suggestions; if it
      // wasn't, this is simply outside what Zigbot covers and saying so is
      // more use than a list of guesses.
      const plausible = onTopic
        ? ranked.filter((r) => r.score >= WORTH_OFFERING).slice(0, 3)
        : [];
      if (plausible.length) {
        return {
          kind: "suggest",
          text: opts.unsure ?? "",
          suggestions: plausible.map((r) => r.entry.q),
        };
      }
      return {
        kind: "suggest",
        text: opts.fallback ?? "",
        suggestions: entries.slice(0, 3).map((e) => e.q),
      };
    }

    const [best, second] = ranked;
    // Worth putting on the shortlist even if it wouldn't have been answered
    // on its own — a runner-up a hair behind the winner is exactly the case
    // where picking one and asserting it goes wrong.
    const near = ranked.filter((r) => r.score >= WORTH_OFFERING).slice(0, 3);

    // Nothing scored well enough — offer the closest questions instead of guessing.
    if (best.score < CONFIDENT) {
      return {
        kind: "suggest",
        text: opts.fallback ?? "",
        suggestions: ranked.slice(0, 3).map((r) => r.entry.q),
      };
    }

    // Two plausible readings — ask rather than pick one and be wrong.
    if (second && second.score >= WORTH_OFFERING && best.score - second.score < CLEAR_WIN) {
      return {
        kind: "suggest",
        text: opts.ambiguous ?? "",
        suggestions: near.map((r) => r.entry.q),
      };
    }

    return { kind: "answer", text: best.entry.a };
  }

  return { ask, rank };
}
