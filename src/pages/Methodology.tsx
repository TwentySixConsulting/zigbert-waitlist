import { useEffect } from "react";
import { Link } from "wouter";
import { methodology, stats } from "../lib/copy";

export default function Methodology() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="mx-auto max-w-3xl px-5 py-16 md:py-24">
      <Link href="/" className="text-sm font-medium text-clay-deep hover:underline">
        ← Back to Zigbert
      </Link>

      <header className="mt-6">
        <span className="eyebrow">Methodology</span>
        <h1 className="display mt-3 text-4xl font-bold sm:text-5xl">{methodology.intro.title}</h1>
        <p className="mt-5 text-xl leading-relaxed text-muted">{methodology.intro.lede}</p>
      </header>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="card p-4">
            <div className="display text-lg font-bold text-ink">{s.value}</div>
            <div className="mt-1 text-xs text-muted">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-14 space-y-14">
        {methodology.sections.map((sec) => (
          <section key={sec.heading}>
            <div className="flex items-center gap-3">
              <span className="accent-gradient h-6 w-1.5 rounded-full" />
              <h2 className="display text-2xl font-bold">{sec.heading}</h2>
            </div>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
              {sec.paragraphs.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="card mt-16 p-8 text-center sm:p-10">
        <h2 className="display text-2xl font-bold">{methodology.cta.title}</h2>
        <p className="mx-auto mt-3 max-w-md text-muted">{methodology.cta.body}</p>
        <Link href="/#waitlist" className="btn-primary mt-6">
          {methodology.cta.button}
        </Link>
      </div>
    </article>
  );
}
