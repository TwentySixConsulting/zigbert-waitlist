import { launch } from "../lib/copy";

// Prominent, site-wide launch banner. Clay gradient so it reads first.
export default function AnnouncementBar() {
  return (
    <a
      href={`${import.meta.env.BASE_URL}#waitlist`}
      className="blue-gradient group block text-white transition-[filter] hover:brightness-[1.05]"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-2 gap-y-1 px-5 py-2 text-center text-sm font-medium">
        <span className="inline-flex h-1.5 w-1.5 animate-pulse rounded-full bg-white/90" />
        <span className="font-semibold">{launch.banner}</span>
        <span className="text-white/90">{launch.bannerStrong}</span>
        <span className="ml-1 inline-flex items-center gap-1 font-semibold underline decoration-white/40 underline-offset-2 group-hover:decoration-white">
          {launch.cta}
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </div>
    </a>
  );
}
