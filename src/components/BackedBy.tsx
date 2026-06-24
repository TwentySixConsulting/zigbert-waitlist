import { backedBy, brand } from "../lib/copy";
import Reveal from "./Reveal";

export default function BackedBy() {
  return (
    <section id="backed" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <Reveal>
          <span className="eyebrow">{backedBy.eyebrow}</span>
          <h2 className="display mt-3 text-3xl font-bold sm:text-4xl">{backedBy.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">{backedBy.body}</p>
          <a
            href={brand.parentUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost mt-7"
          >
            About TwentySix Consulting →
          </a>
        </Reveal>

        <div className="grid gap-4">
          {backedBy.points.map((p, i) => (
            <Reveal as="div" key={p.title} stagger index={i} className="card flex items-start gap-4 p-5">
              <span className="display mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-clay-tint text-sm font-bold text-clay-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-semibold text-ink">{p.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
