import { included } from "../lib/copy";
import Reveal from "./Reveal";

export default function Slides() {
  return (
    <section id="product" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:py-28">
      <Reveal className="max-w-2xl">
        <span className="eyebrow">{included.eyebrow}</span>
        <h2 className="display mt-3 text-3xl font-bold sm:text-4xl">{included.title}</h2>
        <p className="mt-4 text-lg text-muted">{included.body}</p>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {included.items.map((s, i) => (
          <Reveal
            as="article"
            key={s.title}
            stagger
            index={i}
            className="card flex flex-col p-6 transition-shadow hover:shadow-lg"
          >
            <span className="self-start rounded-full bg-clay-tint px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-clay-deep">
              {s.tag}
            </span>
            <h3 className="display mt-4 text-lg font-semibold">{s.title}</h3>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{s.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
