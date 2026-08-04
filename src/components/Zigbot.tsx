import { useEffect, useMemo, useRef, useState } from "react";
import { buildBrain, type Entry } from "../lib/zigbotBrain";
import { faq, zigbot } from "../lib/copy";

/* Zigbot — the FAQ assistant on /faq. The matching itself lives in
   ../lib/zigbotBrain.ts; this file is the chat window around it.

   To edit what Zigbot knows, edit `faq.items` or `zigbot.extras` in
   ../lib/copy.ts. Nothing here needs touching. */

type Msg = {
  role: "bot" | "user" | "typing";
  text: string;
  /** Questions offered as clickable chips under a bot message. */
  suggestions?: string[];
};

export default function Zigbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [text, setText] = useState("");

  const launchRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const msgsRef = useRef<HTMLDivElement>(null);
  const greeted = useRef(false);

  const entries: Entry[] = useMemo(
    () => [
      ...faq.items.map((i) => ({ q: i.q, a: i.a, kw: i.kw ?? "" })),
      ...zigbot.extras,
    ],
    []
  );
  const brain = useMemo(() => buildBrain(entries), [entries]);

  function respondTo(question: string) {
    setMsgs((m) => [...m, { role: "user", text: question }, { role: "typing", text: zigbot.typing }]);

    window.setTimeout(() => {
      // A chip is a question we already hold, so answer it directly rather
      // than putting our own wording back through the matcher.
      const exact = entries.find((e) => e.q === question);
      const reply = exact
        ? ({ kind: "answer", text: exact.a } as const)
        : brain.ask(question, {
            greeting: zigbot.greeting,
            fallback: zigbot.fallback,
            unsure: zigbot.unsure,
            ambiguous: zigbot.ambiguous,
          });

      setMsgs((m) => [
        ...m.filter((x) => x.role !== "typing"),
        {
          role: "bot",
          text: reply.text,
          suggestions: reply.kind === "suggest" ? reply.suggestions : undefined,
        },
      ]);
    }, 300);
  }

  function openPanel() {
    setOpen(true);
    if (!greeted.current) {
      greeted.current = true;
      setMsgs([{ role: "bot", text: zigbot.hello, suggestions: zigbot.starters }]);
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
    respondTo(q);
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
            <div key={i} className="zigbot-turn">
              <div className={`zigbot-msg ${m.role === "typing" ? "bot typing" : m.role}`}>
                {m.text}
              </div>
              {m.suggestions?.length ? (
                <div className="zigbot-chips">
                  {m.suggestions.map((s) => (
                    <button key={s} type="button" className="zigbot-chip" onClick={() => respondTo(s)}>
                      {s}
                    </button>
                  ))}
                </div>
              ) : null}
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
