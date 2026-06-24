import { scope } from "../lib/copy";
import Reveal from "./Reveal";

export default function Scope() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <Reveal className="max-w-2xl">
        <span className="eyebrow">{scope.eyebrow}</span>
        <h2 className="display mt-3 text-3xl font-bold sm:text-4xl">{scope.title}</h2>
        <p className="mt-4 text-lg leading-relaxed text-muted">{scope.body}</p>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Reveal as="div" stagger index={0} className="card border-clay/30 p-7">
          <h3 className="display text-lg font-bold text-ink">{scope.bestWhen.title}</h3>
          <ul className="mt-4 space-y-3">
            {scope.bestWhen.items.map((it) => (
              <li key={it} className="flex items-start gap-3 text-[0.95rem] text-ink">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-clay text-xs text-white"
                >
                  ✓
                </span>
                {it}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="div" stagger index={1} className="card p-7">
          <h3 className="display text-lg font-bold text-ink">{scope.bespokeWhen.title}</h3>
          <ul className="mt-4 space-y-3">
            {scope.bespokeWhen.items.map((it) => (
              <li key={it} className="flex items-start gap-3 text-[0.95rem] text-muted">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-steel/50 text-xs text-steel"
                >
                  →
                </span>
                {it}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-muted">
            Highly complex or board-level roles? TwentySix's consultants can take it from here.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
