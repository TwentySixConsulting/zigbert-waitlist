import { about } from "../lib/copy";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 pt-20 pb-6 md:pt-28 md:pb-8">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{about.eyebrow}</span>
          <h2 className="display mt-3 text-3xl font-bold sm:text-4xl">{about.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">{about.lede}</p>
        </Reveal>

        {/* what we do — a neat row of cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {about.services.map((s, i) => (
            <Reveal as="div" key={s.title} stagger index={i} className="card p-5">
              <span className="accent-gradient block h-1.5 w-8 rounded-full" />
              <p className="mt-3 font-semibold text-ink">{s.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.body}</p>
            </Reveal>
          ))}
        </div>

        {/* links — one spaced-out row */}
        <Reveal className="mt-9 flex flex-wrap items-center justify-center gap-4 sm:gap-7">
          <a href={about.links.site.url} target="_blank" rel="noreferrer" className="btn-primary text-sm">
            {about.links.site.label}
          </a>
          <a href={about.links.email.url} className="btn-ghost text-sm">
            {about.links.email.label}
          </a>
          <a href={about.links.linkedin.url} target="_blank" rel="noreferrer" className="btn-ghost text-sm">
            {about.links.linkedin.label}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
