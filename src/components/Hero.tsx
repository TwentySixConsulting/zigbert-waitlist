import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { hero } from "../lib/copy";
import { ScrollingShowcase } from "./ScrollingShowcase";
import {
  QuartilePositionPreview,
  BenefitsProvisionPreview,
  PayTrendPreview,
  BenefitsCategoryPreview,
  DistributionPreview,
} from "./charts";

const ease = [0.22, 1, 0.36, 1] as const;

const trustChips = [
  "Curated from 1.5M+ salary records",
  "Every dashboard expert-reviewed",
  "Refreshed monthly",
];

// Mixed pay + benefits cards for the hero's scrolling opener.
const heroCards: ReactNode[] = [
  <QuartilePositionPreview />,
  <BenefitsProvisionPreview />,
  <PayTrendPreview />,
  <BenefitsCategoryPreview />,
  <DistributionPreview />,
].map((node, i) => (
  <div key={i} className="h-[214px] w-[300px]">
    {node}
  </div>
));

export default function Hero() {

  return (
    <section className="canvas-glow relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-16 md:grid-cols-[1.05fr_0.95fr] md:pb-28 md:pt-24">
        <div>
          <motion.span
            className="eyebrow inline-flex max-w-full items-center gap-2 whitespace-normal rounded-full border border-line bg-surface/70 px-3.5 py-1.5 leading-snug shadow-sm backdrop-blur"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <span className="accent-gradient h-1.5 w-1.5 shrink-0 rounded-full" />
            {hero.eyebrow}
          </motion.span>

          <motion.h1
            className="display mt-5 font-bold text-[clamp(1.65rem,7vw,3.85rem)]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.05 }}
          >
            {hero.headline}
            <br />
            <span className="accent-text">{hero.headlineAccent}</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.12 }}
          >
            {hero.subhead}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.18 }}
          >
            <a href="#waitlist" className="btn-primary">
              {hero.ctaPrimary}
            </a>
            <a href="#how" className="btn-ghost">
              {hero.ctaSecondary}
            </a>
          </motion.div>

          <motion.p
            className="mt-4 text-sm text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {hero.note}
          </motion.p>

          {/* trust row — quiet proof points under the fold-line */}
          <motion.ul
            className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-line/70 pt-6 text-sm text-muted"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.36 }}
          >
            {trustChips.map((c, idx) => (
              <li key={c} className="flex items-center gap-2">
                <span className={`h-1.5 w-1.5 rounded-full ${idx === 1 ? "bg-steel" : "bg-clay"}`} />
                {c}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.15 }}
        >
          {/* scrolling opener — real pay & benefits cards drifting upward */}
          <ScrollingShowcase
            items={heroCards}
            id="hero"
            axis="y"
            durationSeconds={32}
            className="mx-auto h-[440px] w-[300px] lg:h-[520px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
