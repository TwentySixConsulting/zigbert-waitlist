import { Linkedin } from "lucide-react";
import { founder } from "../lib/copy";
import Reveal from "./Reveal";

const asset = (file: string) => `${import.meta.env.BASE_URL}${file}`;

export default function FounderNote() {
  const initials = founder.name
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <section id="founder" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal as="div" className="card p-7 sm:p-10">
          <span className="eyebrow">{founder.eyebrow}</span>

          {/* author */}
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
                <Linkedin className="h-4 w-4" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            )}
          </div>

          {/* letter */}
          <div className="mt-7 space-y-4 text-[1.02rem] leading-relaxed text-muted">
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
        </Reveal>
      </div>
    </section>
  );
}
