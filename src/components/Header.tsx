import { Link } from "wouter";
import Wordmark from "./Wordmark";
import { brand } from "../lib/copy";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <Link href="/" className="flex flex-col items-start leading-none">
          <Wordmark className="h-9 w-auto" />
          <span className="ml-[1.9rem] mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-muted">
            Pay &amp; Benefits Intelligence
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-muted md:flex">
          <a href={`${import.meta.env.BASE_URL}#what`} className="transition-colors hover:text-ink">
            What Is Zigbert
          </a>
          <a href={`${import.meta.env.BASE_URL}#how`} className="transition-colors hover:text-ink">
            How It Works
          </a>
          <a href={`${import.meta.env.BASE_URL}#about`} className="transition-colors hover:text-ink">
            About
          </a>
          <Link href="/methodology" className="transition-colors hover:text-ink">
            Methodology
          </Link>
        </nav>

        <a href={`${import.meta.env.BASE_URL}#waitlist`} className="btn-primary text-sm">
          Join The Waitlist
        </a>
      </div>
      <p className="border-t border-line/60 bg-surface/40 py-1.5 text-center text-[0.7rem] font-medium tracking-wide text-muted">
        {brand.endorsement}
      </p>
    </header>
  );
}
