import { useEffect, useMemo, useRef, useState } from "react";
import { faq, zigbot } from "../lib/copy";

/* ==========================================================
   Zigbot's brain — 100% in-browser, no API, no server.
   It matches the visitor's question against the FAQ content:
   the questions shown on the FAQ page PLUS the extra Q&As in
   `zigbot.extras`. To add knowledge, drop another {q, a, kw}
   entry into that list in src/lib/copy.ts.
   ========================================================== */

type Entry = { q: string; a: string; kw: string };

const STOP: Record<string, 1> = {};
(
  "the a an is are do does did i my me we our you your to of for in on at by and or it its " +
  "what how when where who why can could should will would with as be been being this that " +
  "these those than not no vs versus about get got use using use them they their there here " +
  "if so just only also more most any some hi hello hey thanks thank ok okay please zigbert zigbot"
)
  .split(" ")
  .forEach((w) => {
    STOP[w] = 1;
  });

function tokenize(s: string): string[] {
  return (String(s).toLowerCase().match(/[a-z0-9]+/g) || [])
    .map((t) => (t.length > 3 && t.charAt(t.length - 1) === "s" ? t.slice(0, -1) : t))
    .filter((t) => t.length >= 2 && !STOP[t]);
}

// Precompute a token→weight bag for each entry
// (question/keywords weigh more than the answer body).
function buildBag(e: Entry): Record<string, number> {
  const bag: Record<string, number> = {};
  const add = (str: string, w: number) =>
    tokenize(str).forEach((t) => {
      if (!bag[t] || bag[t] < w) bag[t] = w;
    });
  add(e.q, 3);
  add(e.kw, 3);
  add(e.a, 1);
  return bag;
}

type Msg = { role: "bot" | "user" | "typing"; text: string };

export default function Zigbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [text, setText] = useState("");

  const launchRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const msgsRef = useRef<HTMLDivElement>(null);
  const greeted = useRef(false);

  // Knowledge base: the on-page FAQ questions + the extras.
  const kb = useMemo(() => {
    const entries: Entry[] = [
      ...faq.items.map((i) => ({ q: i.q, a: i.a, kw: "" })),
      ...zigbot.extras,
    ];
    return entries.map((e) => ({ entry: e, bag: buildBag(e) }));
  }, []);

  function reply(query: string): string {
    const seen: Record<string, 1> = {};
    const qt: string[] = [];
    tokenize(query).forEach((t) => {
      if (!seen[t]) {
        seen[t] = 1;
        qt.push(t);
      }
    });
    if (!qt.length) return zigbot.greeting;

    let best: Entry | null = null;
    let bestScore = 0;
    kb.forEach(({ entry, bag }) => {
      let s = 0;
      qt.forEach((t) => {
        if (bag[t]) s += bag[t];
      });
      if (s > bestScore) {
        bestScore = s;
        best = entry;
      }
    });
    return bestScore >= 3 && best ? (best as Entry).a : zigbot.fallback;
  }

  function openPanel() {
    setOpen(true);
    if (!greeted.current) {
      greeted.current = true;
      setMsgs([{ role: "bot", text: zigbot.hello }]);
    }
  }

  function closePanel() {
    setOpen(false);
    launchRef.current?.focus();
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = text.trim();
    if (!q) return;
    setText("");
    setMsgs((m) => [...m, { role: "user", text: q }, { role: "typing", text: zigbot.typing }]);
    window.setTimeout(() => {
      setMsgs((m) => [...m.filter((x) => x.role !== "typing"), { role: "bot", text: reply(q) }]);
    }, 300);
  }

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const el = msgsRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [msgs]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && open) closePanel();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        ref={launchRef}
        className={`zigbot-launch${open ? " is-open" : ""}`}
        aria-label={`Ask ${zigbot.name} a question`}
        onClick={openPanel}
      >
        <span className="mark" aria-hidden="true" />
        {zigbot.launch}
      </button>

      <div
        className="zigbot-panel"
        role="dialog"
        aria-label={`Chat with ${zigbot.name}`}
        hidden={!open}
      >
        <div className="zigbot-head">
          <div className="zigbot-head-id">
            <span className="zigbot-avatar" aria-hidden="true" />
            <div>
              <strong>{zigbot.name}</strong>
              <span className="sub">{zigbot.role}</span>
            </div>
          </div>
          <button className="zigbot-close" aria-label="Close chat" onClick={closePanel}>
            ×
          </button>
        </div>

        <div className="zigbot-msgs" ref={msgsRef} aria-live="polite">
          {msgs.map((m, i) => (
            <div key={i} className={`zigbot-msg ${m.role === "typing" ? "bot typing" : m.role}`}>
              {m.text}
            </div>
          ))}
        </div>

        <form className="zigbot-input" onSubmit={onSubmit}>
          <input
            ref={inputRef}
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={zigbot.placeholder}
            autoComplete="off"
          />
          <button type="submit" aria-label="Send message">
            →
          </button>
        </form>
      </div>
    </>
  );
}
