import { cadence } from "../lib/copy";
import Reveal from "./Reveal";

export default function Cadence() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <Reveal>
            <span className="eyebrow">{cadence.eyebrow}</span>
            <h2 className="display mt-3 text-3xl font-bold sm:text-4xl">{cadence.title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{cadence.body}</p>

            {/* annual vs monthly contrast */}
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-cream px-4 py-2 text-sm text-muted line-through decoration-clay/50">
                Once a year
              </span>
              <span className="btn-primary cursor-default text-sm">12 refreshes a year</span>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {cadence.points.map((p, i) => (
              <Reveal as="div" key={p.title} stagger index={i} className="card flex items-start gap-4 p-5">
                <span className="accent-gradient mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-semibold text-ink">{p.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
