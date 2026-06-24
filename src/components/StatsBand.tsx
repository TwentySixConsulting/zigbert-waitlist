import { stats } from "../lib/copy";
import { Mark } from "./Wordmark";
import Reveal from "./Reveal";

export default function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-white md:py-20">
      <Mark
        onDark
        className="pointer-events-none absolute -right-6 -top-10 h-64 w-auto opacity-[0.06]"
      />
      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="eyebrow !text-clay-bright">Grounded in real data</p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal as="div" key={s.label} stagger index={i}>
              <div className="display accent-text text-3xl font-bold sm:text-4xl">{s.value}</div>
              <div className="mt-2 text-sm text-white/70">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
