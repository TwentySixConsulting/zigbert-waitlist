import { trust } from "../lib/copy";
import Reveal from "./Reveal";

export default function Trust() {
  return (
    <section id="trust" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-center">
        <Reveal>
          <span className="eyebrow">{trust.eyebrow}</span>
          <h2 className="display mt-3 text-3xl font-bold sm:text-4xl">{trust.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">{trust.body}</p>

          <figure className="mt-7 rounded-[1.25rem] border-l-4 border-clay bg-clay-tint/40 p-6">
            <blockquote className="display text-2xl font-bold text-ink">{trust.quote}</blockquote>
            <figcaption className="mt-2 text-[0.95rem] leading-relaxed text-muted">
              {trust.quoteSub}
            </figcaption>
          </figure>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {trust.points.map((p, i) => (
            <Reveal as="div" key={p.title} stagger index={i} className="card p-5">
              <span className="display flex h-9 w-9 items-center justify-center rounded-xl bg-steel-tint text-sm font-bold text-steel">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-semibold text-ink">{p.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
