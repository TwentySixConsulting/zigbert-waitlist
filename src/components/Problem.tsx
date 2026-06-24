import { problem } from "../lib/copy";
import Reveal from "./Reveal";

export default function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">{problem.eyebrow}</span>
        <h2 className="display mt-3 text-3xl font-bold sm:text-4xl">{problem.title}</h2>
        <p className="mt-5 text-lg leading-relaxed text-muted">{problem.body}</p>
        <p className="mt-4 text-lg font-medium leading-relaxed text-ink">{problem.need}</p>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {problem.cards.map((c, i) => (
          <Reveal
            as="div"
            key={c.title}
            stagger
            index={i}
            className={
              c.highlight
                ? "relative rounded-[1.25rem] border border-clay/40 bg-surface p-6 shadow-[0_18px_46px_-26px_rgba(176,96,63,0.5)] ring-1 ring-clay/20"
                : "card p-6"
            }
          >
            <span
              className={
                c.highlight
                  ? "inline-flex rounded-full bg-clay px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-white"
                  : "inline-flex rounded-full bg-cream px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-muted"
              }
            >
              {c.tag}
            </span>
            <h3 className="display mt-4 text-lg font-semibold">{c.title}</h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{c.body}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12" delay={0.05}>
        <div className="flex flex-col items-center gap-5 rounded-[1.25rem] bg-ink px-8 py-8 text-center sm:flex-row sm:text-left md:px-12">
          <div className="display accent-text text-5xl font-bold sm:text-6xl">
            {problem.costStat.value}
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-white/80">{problem.costStat.body}</p>
        </div>
      </Reveal>
    </section>
  );
}
