import { about } from "../lib/copy";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">{about.eyebrow}</span>
          <h2 className="display mt-3 text-3xl font-bold sm:text-4xl">{about.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">{about.lede}</p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {/* What we do */}
          <Reveal as="div" stagger index={0} className="card p-7">
            <h3 className="display text-lg font-bold text-ink">What we do</h3>
            <ul className="mt-5 space-y-4">
              {about.services.map((s) => (
                <li key={s.title} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-clay" />
                  <div>
                    <p className="font-semibold text-ink">{s.title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted">{s.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Approach + Payography + Trusted by */}
          <Reveal as="div" stagger index={1} className="flex flex-col gap-5">
            <div className="card p-7">
              <h3 className="display text-lg font-bold text-ink">{about.approach.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{about.approach.body}</p>
            </div>
            <div className="card border-steel/30 p-7">
              <h3 className="display text-lg font-bold text-steel">{about.payography.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{about.payography.body}</p>
            </div>
            <div className="rounded-[1.25rem] bg-ink p-7 text-white">
              <p className="eyebrow !text-clay-bright">{about.clients.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/80">{about.clients.body}</p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-8 flex flex-wrap items-center gap-3">
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
