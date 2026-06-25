import { about, founder } from "../lib/copy";
import Reveal from "./Reveal";

const asset = (file: string) => `${import.meta.env.BASE_URL}${file}`;

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 9.67H5.67V18h2.67V9.67zM7 6.33a1.55 1.55 0 1 0 0 3.1 1.55 1.55 0 0 0 0-3.1zM18.33 18v-4.57c0-2.45-1.31-3.59-3.06-3.59-1.41 0-2.04.78-2.39 1.32v-1.13h-2.67V18h2.67v-4.65c0-1.23.83-1.5 1.13-1.5.3 0 1.32.27 1.32 1.5V18h2.67z" />
    </svg>
  );
}

export default function AboutFounder() {
  const initials = founder.name
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1fr_1.5fr] lg:items-start lg:gap-14">
        {/* Rachel's founder note — main column (right on desktop) */}
        <Reveal as="div" className="order-2 lg:order-2">
          <div className="card p-7 sm:p-9">
            <span className="eyebrow">{founder.eyebrow}</span>

            <div className="mt-5 flex items-center gap-4">
              {founder.photo ? (
                <img
                  src={asset(founder.photo)}
                  alt={founder.name}
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-line"
                />
              ) : (
                <span className="accent-gradient flex h-14 w-14 items-center justify-center rounded-full text-base font-bold text-white">
                  {initials}
                </span>
              )}
              <div className="min-w-0">
                <p className="display text-lg font-bold text-ink">{founder.name}</p>
                <p className="text-sm text-muted">{founder.role}</p>
              </div>
              {founder.linkedin && (
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${founder.name} on LinkedIn`}
                  className="btn-ghost ml-auto !px-3 !py-2"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
              )}
            </div>

            <div className="mt-7 space-y-4 leading-relaxed text-muted">
              {founder.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}

              <p className="font-medium text-ink">{founder.pointsLead}</p>
              <ul className="space-y-3">
                {founder.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-ink">
                    <span aria-hidden="true" className="mt-0.5 font-semibold text-clay">
                      →
                    </span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {founder.outro.map((p) => (
                <p key={p}>{p}</p>
              ))}

              <p className="text-lg font-semibold text-ink">{founder.closing}</p>
            </div>
          </div>
        </Reveal>

        {/* TwentySix overview — sticky sidebar (left on desktop) */}
        <Reveal as="div" className="order-1 lg:order-1 lg:sticky lg:top-24">
          <span className="eyebrow">{about.eyebrow}</span>
          <h2 className="display mt-3 text-3xl font-bold sm:text-4xl">{about.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted">{about.lede}</p>

          <ul className="mt-6 space-y-3.5">
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

          <p className="mt-5 text-sm leading-relaxed text-muted">{about.more}</p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            <a href={about.links.site.url} target="_blank" rel="noreferrer" className="btn-primary text-sm">
              {about.links.site.label}
            </a>
            <a href={about.links.email.url} className="btn-ghost text-sm">
              {about.links.email.label}
            </a>
            <a href={about.links.linkedin.url} target="_blank" rel="noreferrer" className="btn-ghost text-sm">
              {about.links.linkedin.label}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
