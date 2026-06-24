import type { ReactNode } from "react";

interface ScrollingShowcaseProps {
  items: ReactNode[];
  /** Lower = faster. Seconds for one full loop. */
  durationSeconds?: number;
  /** Unique id so multiple rows can run different keyframes/directions. */
  id?: string;
  /** Reverse the scroll direction. */
  reverse?: boolean;
  /** "x" = horizontal marquee (default), "y" = vertical marquee. */
  axis?: "x" | "y";
  /** Container sizing/extra classes (e.g. a fixed height for vertical). */
  className?: string;
}

/**
 * Infinite marquee. The track renders the items twice and translates -50%
 * on a linear loop, so the seam is invisible. Pauses on hover and respects
 * prefers-reduced-motion. Edges are softly masked. Supports horizontal or
 * vertical scrolling. (Pattern from the TwentySix Pay & Benefits dashboard.)
 */
export function ScrollingShowcase({
  items,
  durationSeconds = 55,
  id = "showcase",
  reverse = false,
  axis = "x",
  className = "",
}: ScrollingShowcaseProps) {
  const doubled = [...items, ...items];
  const trackClass = `showcase-track-${id}`;
  const vertical = axis === "y";
  const from = reverse ? "-50%" : "0";
  const to = reverse ? "0" : "-50%";
  const maskAngle = vertical ? "180deg" : "90deg";

  return (
    <div
      className={`relative overflow-hidden ${vertical ? "" : "w-full min-w-0"} ${className}`}
      style={{
        WebkitMaskImage: `linear-gradient(${maskAngle}, transparent 0%, black 7%, black 93%, transparent 100%)`,
        maskImage: `linear-gradient(${maskAngle}, transparent 0%, black 7%, black 93%, transparent 100%)`,
      }}
    >
      <div
        className={`flex gap-4 ${vertical ? "h-max w-full flex-col items-center" : "w-max"} ${trackClass}`}
        style={{ animation: `${trackClass}-marquee ${durationSeconds}s linear infinite` }}
      >
        {doubled.map((item, i) => (
          <div key={i} className="shrink-0" aria-hidden={i >= items.length}>
            {item}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes ${trackClass}-marquee {
          from { transform: translate3d(${vertical ? `0, ${from}` : `${from}, 0`}, 0); }
          to   { transform: translate3d(${vertical ? `0, ${to}` : `${to}, 0`}, 0); }
        }
        .${trackClass}:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .${trackClass} { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
