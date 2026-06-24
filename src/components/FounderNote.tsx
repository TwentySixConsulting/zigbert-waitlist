import { founder } from "../lib/copy";
import Reveal from "./Reveal";
import { Mark } from "./Wordmark";

export default function FounderNote() {
  const initials = founder.name
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <Reveal as="div" className="card relative overflow-hidden p-8 sm:p-12">
        <Mark
          onDark={false}
          className="pointer-events-none absolute -right-8 -top-8 h-44 w-auto opacity-[0.05]"
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="eyebrow">{founder.eyebrow}</span>
          <blockquote className="display mt-5 text-2xl font-semibold leading-snug text-ink sm:text-[1.75rem]">
            <span className="accent-text">“</span>
            {founder.quote}
            <span className="accent-text">”</span>
          </blockquote>

          <figcaption className="mt-7 flex items-center justify-center gap-3">
            {founder.photo ? (
              <img
                src={founder.photo}
                alt={founder.name}
                className="h-12 w-12 rounded-full object-cover ring-2 ring-clay-tint"
              />
            ) : (
              <span className="accent-gradient flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white">
                {initials}
              </span>
            )}
            <span className="text-left">
              <span className="block font-semibold text-ink">{founder.name}</span>
              <span className="block text-sm text-muted">{founder.role}</span>
            </span>
          </figcaption>
        </div>
      </Reveal>
    </section>
  );
}
