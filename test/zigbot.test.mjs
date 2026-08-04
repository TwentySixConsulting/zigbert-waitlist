/* Zigbot matcher tests.
 *
 *   npm run test:zigbot
 *
 * Every case is a question phrased the way a visitor would actually type it,
 * paired with a fragment of the FAQ question it should land on (or `null`
 * where Zigbot should admit it doesn't know rather than bluff). A "did you
 * mean" reply counts as a pass as long as the right question is among the
 * options offered.
 *
 * The number that matters most is CONFIDENTLY WRONG: a wrong answer stated as
 * fact is the failure this matcher exists to avoid. Suggesting options when
 * unsure is working as intended, not a defect. Keep that count at zero.
 *
 * Add a case whenever you add or reword a question in src/lib/copy.ts.
 */
import { execFileSync } from "node:child_process";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const out = mkdtempSync(join(tmpdir(), "zigbot-test-"));
const esbuild = join(root, "node_modules", ".bin", "esbuild");

for (const mod of ["copy", "zigbotBrain"]) {
  execFileSync(esbuild, [
    join(root, "src", "lib", `${mod}.ts`),
    "--bundle",
    "--format=esm",
    `--outfile=${join(out, `${mod}.mjs`)}`,
    "--log-level=error",
  ]);
}

const { faq, zigbot } = await import(join(out, "copy.mjs"));
const { buildBrain } = await import(join(out, "zigbotBrain.mjs"));

const brain = buildBrain([
  ...faq.items.map((i) => ({ q: i.q, a: i.a, kw: i.kw ?? "" })),
  ...zigbot.extras,
]);

const CASES = [
  // ── getting a benchmark ──────────────────────────────────────────
  ["how to get benchmark?", "How do I get a salary benchmark"],
  ["i want a benchmark", "How do I get a salary benchmark"],
  ["how do i get a benchmark", "How do I get a salary benchmark"],
  ["how does it work", "How do I get a salary benchmark"],
  ["what do i need to provide", "What information do I need"],
  ["what do you need from me", "What information do I need"],

  // ── pricing, launch and access ───────────────────────────────────
  ["how much does it cost?", "How much will Zigbert cost"],
  ["what's the price", "How much will Zigbert cost"],
  ["is it expensive", "How much will Zigbert cost"],
  ["how much is a subscription", "How much will Zigbert cost"],
  ["whats the cost per month", "How much will Zigbert cost"],
  ["do i have to pay yearly", "How much will Zigbert cost"],
  ["is there a minimum contract", "How much will Zigbert cost"],
  ["when does it launch", "When does Zigbert launch"],
  ["when can i start using it", "When does Zigbert launch"],
  ["is it live yet", "When does Zigbert launch"],
  ["is there a free trial", "Is there a free trial or demo"],
  ["can i get a demo", "Is there a free trial or demo"],
  ["can i see a sample dashboard", "Is there a free trial or demo"],
  ["how do i join the waitlist", "How do I join the waitlist"],
  ["how do i sign up", "How do I join the waitlist"],
  ["sign me up", "How do I join the waitlist"],

  // ── where the data comes from ────────────────────────────────────
  ["where does your data come from", "Where does Zigbert's salary data come from"],
  ["what is your data source", "Where does Zigbert's salary data come from"],
  ["scraped from job boards?", "Where does Zigbert's salary data come from"],
  ["do you use ONS data", ["official data sources like ONS", "Why not just use ONS data directly"]],
  ["why not use ONS directly", "Why not just use ONS data directly"],
  ["how many records do you have", "How many salary records"],
  ["how big is the dataset", "How many salary records"],
  ["is the data checked by a person", "checked by a human or fully automated"],
  ["who checks the numbers", ["checked by a human or fully automated", "How accurate is Zigbert's benchmarking data"]],
  ["who reviews the dashboards", ["checked by a human or fully automated", "How accurate is Zigbert's benchmarking data"]],
  ["how often is the data refreshed", "How often is Zigbert's data updated"],
  ["is the data up to date", "How often is Zigbert's data updated"],
  ["how current are the salaries", "How often is Zigbert's data updated"],
  ["can i trust advert data", "Can I trust benchmarks built from job-advert data"],
  ["what if a job advert has no salary", "roles with no advertised salary"],
  ["how accurate is it", "How accurate is Zigbert's benchmarking data"],
  ["what about outliers", ["misleading figure", "How accurate is Zigbert's benchmarking data"]],
  ["how does the classification work", "which roles to compare"],
  ["how do you pick comparators", "which roles to compare"],

  // ── how it compares ──────────────────────────────────────────────
  ["how are you different from glassdoor", "free tools like Glassdoor"],
  ["why not just use payscale", "free tools like Glassdoor"],
  ["is glassdoor not good enough", "free tools like Glassdoor"],
  ["what makes you better than the free sites", "free tools like Glassdoor"],
  ["how is this different to a salary survey", "traditional salary survey"],
  ["we already buy a salary survey", ["traditional salary survey", "running my own salary survey"]],
  ["should i run my own survey instead", "running my own salary survey"],

  // ── scope and coverage ───────────────────────────────────────────
  ["what is zigbert", "What is Zigbert"],
  ["who is behind this", "Who is behind Zigbert"],
  ["who owns zigbert", "Who is behind Zigbert"],
  ["tell me about the company behind it", "Who is behind Zigbert"],
  ["who is it for", "Who is Zigbert for"],
  ["is this for hr teams", "Who is Zigbert for"],
  ["do you cover benefits too", "benchmark benefits as well as pay"],
  ["do you include bonuses", ["benchmark benefits as well as pay", "competitive benefits package"]],
  ["what is pay and benefits intelligence", "Pay and Benefits Intelligence"],
  ["do you work with small companies", "small companies or only large"],
  ["we are a 40 person startup", "small companies or only large"],
  ["do you cover my industry", "cover my industry and region"],
  ["do you do charities", "cover my industry and region"],
  ["is london pay different", "cover my industry and region"],
  ["is it just england or all of the uk", "cover my industry and region"],
  ["can you do our whole pay structure", "whole pay structure"],
  ["can you benchmark 200 roles", "whole pay structure"],
  ["do you handle very senior roles", "not work well"],
  ["what if the role is really niche", "not work well"],
  ["what are the limitations", "not work well"],

  // ── using it day to day ──────────────────────────────────────────
  ["am i paying my team enough", "paying a role competitively"],
  ["are my staff paid below market", ["team is underpaid versus the market", "paying a role competitively"]],
  ["is my team underpaid", "team is underpaid versus the market"],
  ["i need to justify a pay rise to my board", ["paying a role competitively", "team is underpaid versus the market"]],
  ["what should i offer a new hire", "How much should I offer for a new hire"],
  ["how do i price a job offer", "How much should I offer for a new hire"],
  ["how do i build a salary band", "set a salary range for a new role"],
  ["setting pay bands", "set a salary range for a new role"],
  ["what counts as good benefits", ["competitive benefits package", "benchmark benefits as well as pay"]],
  ["is my data confidential", "kept confidential"],
  ["are you gdpr compliant", "kept confidential"],
  ["will my competitors see my data", "kept confidential"],
  ["how fast do i get results", "How quickly do I get a result"],
  ["turnaround time", "How quickly do I get a result"],
  ["how long until i see results", "How quickly do I get a result"],

  // ── outside what Zigbot covers: admit it, don't guess ────────────
  ["what's the weather in paris", null],
  ["do you sell insurance", null],
  ["can you write my performance review policy", null],
  ["can you do my payroll", null],
  ["book me a flight", null],
  ["what is the capital of france", null],
];

const PHRASES = {
  greeting: zigbot.greeting,
  fallback: zigbot.fallback,
  unsure: zigbot.unsure,
  ambiguous: zigbot.ambiguous,
};

let pass = 0;
const wrong = [];
const soft = [];

for (const [query, expected] of CASES) {
  const reply = brain.ask(query, PHRASES);
  const top = brain.rank(query)[0];
  const wants = expected === null ? null : [].concat(expected);

  const ok =
    wants === null
      ? reply.kind === "suggest" && reply.text === zigbot.fallback
      : (reply.kind === "answer" && top && wants.some((w) => top.entry.q.includes(w))) ||
        (reply.kind === "suggest" &&
          reply.text !== zigbot.fallback &&
          reply.suggestions.some((s) => wants.some((w) => s.includes(w))));

  if (ok) pass++;
  else if (reply.kind === "answer" && top) wrong.push(`  "${query}"\n     answered: ${top.entry.q}`);
  else
    soft.push(
      `  "${query}"\n     wanted: ${expected ?? "(no confident answer)"}\n     got:    ${
        reply.suggestions?.join(" | ") || reply.text.slice(0, 60)
      }`
    );
}

console.log(`\nZigbot: ${pass}/${CASES.length} matched`);
console.log(`Confidently wrong: ${wrong.length}${wrong.length ? "" : "  ✓"}`);
wrong.forEach((w) => console.log(w));

if (soft.length) {
  console.log(`\nOffered options instead of the expected answer (${soft.length}):`);
  soft.forEach((s) => console.log(s));
}

// Only a confidently wrong answer fails the build. Degrading to suggestions is
// the designed behaviour when the question is genuinely ambiguous.
process.exit(wrong.length ? 1 : 0);
