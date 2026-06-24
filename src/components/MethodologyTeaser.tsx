import { Link } from "wouter";
import { methodologyTeaser } from "../lib/copy";
import Reveal from "./Reveal";

export default function MethodologyTeaser() {
  return (
    <section id="methodology" className="mx-auto max-w-6xl px-5 pb-8">
      <Reveal as="div" className="card relative overflow-hidden p-8 sm:p-10">
        <div
          aria-hidden
          className="accent-gradient pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-15 blur-2xl"
        />
        <div className="relative max-w-2xl">
          <span className="eyebrow">{methodologyTeaser.eyebrow}</span>
          <h2 className="display mt-3 text-2xl font-bold sm:text-3xl">
            {methodologyTeaser.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">{methodologyTeaser.body}</p>
          <Link href="/methodology" className="btn-primary mt-7">
            {methodologyTeaser.cta} →
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
