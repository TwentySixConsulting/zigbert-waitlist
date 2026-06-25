import { about } from "../lib/copy";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <span className="eyebrow">{about.eyebrow}</span>
          <h2 className="display mt-3 text-3xl font-bold sm:text-4xl">{about.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">{about.lede}</p>
        </Reveal>

        {/* what we do — brief */}
        <div className="mt-10 grid gap-4 text-left sm:grid-cols-2">
          {about.services.map((s, i) => (
            <Reveal as="div" key={s.title} stagger index={i} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-clay" />
              <div>
                <p className="font-semibold text-ink">{s.title}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-9 flex flex-wrap justify-center gap-3">
          <a href={about.links.site.url} target="_blank" rel="noreferrer" className="btn-primary">
            {about.links.site.label}
          </a>
          <a href={about.links.email.url} className="btn-ghost">
            {about.links.email.label}
          </a>
          <a href={about.links.linkedin.url} target="_blank" rel="noreferrer" className="btn-ghost">
            {about.links.linkedin.label}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
