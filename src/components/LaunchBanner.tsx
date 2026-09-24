import { motion } from "framer-motion";
import { launch } from "../lib/copy";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * The launch moment. A full-width navy band at the very top of the landing
 * page announcing that Zigbert is live. Deliberately loud: this replaces the
 * small pill badge the pre-launch site used.
 */
export default function LaunchBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      {/* warm clay glow, mirrored on the cool side, so the band has depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(42rem 22rem at 78% -20%, rgba(201,120,90,0.45), transparent 62%)," +
            "radial-gradient(38rem 20rem at 8% 120%, rgba(114,133,165,0.42), transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:py-16 md:py-20">
        <motion.span
          className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] backdrop-blur"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-clay-bright opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-clay-bright" />
          </span>
          {launch.chip}
        </motion.span>

        <motion.p
          className="display mt-6 font-bold text-[clamp(2.25rem,8vw,4.75rem)]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.08 }}
        >
          {launch.headlineLead}{" "}
          <span className="bg-gradient-to-br from-[#f0b193] via-[#dda288] to-[#c9785a] bg-clip-text text-transparent">
            {launch.headlineAccent}
          </span>
        </motion.p>

        <motion.p
          className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.16 }}
        >
          {launch.sub}
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.24 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-ink shadow-[0_16px_34px_-14px_rgba(0,0,0,0.6)] transition-transform hover:-translate-y-0.5"
          >
            {launch.ctaPrimary}
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="#how"
            className="inline-flex items-center justify-center rounded-full border border-white/35 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:border-white/70 hover:bg-white/10"
          >
            {launch.ctaSecondary}
          </a>
        </motion.div>

        <motion.p
          className="mt-7 text-sm text-white/55"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.34 }}
        >
          {launch.foot}
        </motion.p>
      </div>
    </section>
  );
}
