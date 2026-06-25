import { founder } from "../lib/copy";
import Reveal from "./Reveal";

const asset = (file: string) => `${import.meta.env.BASE_URL}${file}`;

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 9.67H5.67V18h2.67V9.67zM7 6.33a1.55 1.55 0 1 0 0 3.1 1.55 1.55 0 0 0 0-3.1zM18.33 18v-4.57c0-2.45-1.31-3.59-3.06-3.59-1.41 0-2.04.78-2.39 1.32v-1.13h-2.67V18h2.67v-4.65c0-1.23.83-1.5 1.13-1.5.3 0 1.32.27 1.32 1.5V18h2.67z" />
    </svg>
  );
}

export default function FounderNote() {
  const initials = founder.name
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <section id="founder" className="bg-surface/60 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal as="div" className="card p-7 sm:p-10">
          <span className="eyebrow">{founder.eyebrow}</span>

          <div className="mt-6 grid gap-8 md:grid-cols-[auto_1fr] md:gap-10">
            {/* byline column */}
            <div className="flex flex-row items-center gap-4 md:w-44 md:flex-col md:items-start md:text-left">
              {founder.photo ? (
                <img
                  src={asset(founder.photo)}
                  alt={founder.name}
                  className="h-20 w-20 shrink-0 rounded-2xl object-cover ring-2 ring-line md:h-28 md:w-28"
                />
              ) : (
                <span className="accent-gradient flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl text-xl font-bold text-white md:h-28 md:w-28">
                  {initials}
                </span>
              )}
              <div className="min-w-0 md:mt-4">
                <p className="display text-lg font-bold leading-tight text-ink">{founder.name}</p>
                <p className="mt-1 text-sm leading-snug text-muted">{founder.role}</p>
                {founder.linkedin && (
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${founder.name} on LinkedIn`}
                    className="btn-ghost mt-3 !px-3 !py-1.5 text-sm"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>

            {/* letter */}
            <div className="space-y-4 leading-relaxed text-muted">
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
      </div>
    </section>
  );
}
