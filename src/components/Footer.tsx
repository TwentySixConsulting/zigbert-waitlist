import Wordmark from "./Wordmark";
import { brand } from "../lib/copy";

export default function Footer() {
  const year = 2026;
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Wordmark onDark />
          <p className="mt-2 max-w-sm text-sm text-white/60">{brand.endorsement}</p>
        </div>
        <nav className="flex flex-wrap gap-x-7 gap-y-2 text-sm text-white/70">
          <a href="#waitlist" className="transition-colors hover:text-white">
            Join The Waitlist
          </a>
          <a href={`mailto:${brand.email}`} className="transition-colors hover:text-white">
            {brand.email}
          </a>
          <a
            href={brand.parentUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            twentysixconsulting.co.uk
          </a>
          <a
            href={brand.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            LinkedIn
          </a>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-white/45">
          © {year} TwentySix Consulting. Zigbert is a TwentySix Consulting product. {brand.launch}.
        </p>
      </div>
    </footer>
  );
}
