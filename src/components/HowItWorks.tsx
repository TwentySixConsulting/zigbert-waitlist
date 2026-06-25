import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { howItWorks } from "../lib/copy";
import Reveal from "./Reveal";
import { RoleInputVisual, BenchmarkVisual, ResultVisual } from "./howItWorksVisuals";

const AUTO_MS = 7000;
const ease = [0.32, 0.72, 0, 1] as const;
const visuals = [<RoleInputVisual />, <BenchmarkVisual />, <ResultVisual />];

export default function HowItWorks() {
  const steps = howItWorks.steps;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dir, setDir] = useState<1 | -1>(1);
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { amount: 0.35 });

  const goTo = useCallback(
    (next: number) => {
      const total = steps.length;
      const n = ((next % total) + total) % total;
      setDir(((n - index + total) % total === 1 ? 1 : -1) as 1 | -1);
      setIndex(n);
    },
    [index, steps.length],
  );
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // Always (re)start from step 1 when the section scrolls into view.
  useEffect(() => {
    if (inView) {
      setDir(1);
      setIndex(0);
    }
  }, [inView]);

  // Auto-advance only while the section is on screen.
  useEffect(() => {
    if (!inView || paused || reduce) return;
    const id = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        setDir(1);
        setIndex((i) => (i + 1) % steps.length);
      }
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [inView, paused, reduce, steps.length]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60) next();
    else if (info.offset.x > 60) prev();
  };

  const current = steps[index];
  const variants = useMemo(
    () => ({
      enter: (d: 1 | -1) => ({ opacity: 0, x: reduce ? 0 : d * 36 }),
      center: { opacity: 1, x: 0 },
      exit: (d: 1 | -1) => ({ opacity: 0, x: reduce ? 0 : -d * 36 }),
    }),
    [reduce],
  );

  return (
    <section ref={sectionRef} id="how" className="scroll-mt-24 bg-surface/60 py-20 md:py-28">
      <div
        className="mx-auto max-w-6xl px-5"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <Reveal className="max-w-2xl">
          <span className="eyebrow">{howItWorks.eyebrow}</span>
          <h2 className="display mt-3 text-3xl font-bold sm:text-4xl">{howItWorks.title}</h2>
          <p className="mt-4 text-lg text-muted">{howItWorks.body}</p>
        </Reveal>

        <Reveal className="mt-10" delay={0.05}>
          <div className="relative" aria-live="polite">
            <AnimatePresence mode="wait" custom={dir} initial={false}>
              <motion.div
                key={index}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease }}
                drag={reduce ? false : "x"}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.16}
                onDragEnd={onDragEnd}
                className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14"
              >
                {/* text */}
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="accent-gradient flex h-11 w-11 items-center justify-center rounded-2xl text-base font-bold text-white">
                      {current.n}
                    </span>
                    <span className="eyebrow">{current.eyebrow}</span>
                  </div>
                  <h3 className="display text-2xl font-bold leading-tight sm:text-3xl">
                    {current.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{current.body}</p>
                  <ul className="mt-6 space-y-3">
                    {current.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-ink sm:text-base">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* visual */}
                <div className="flex select-none items-center justify-center pt-3">
                  {visuals[index]}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* controls */}
            <div className="mt-10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to step ${i + 1}`}
                    onClick={() => goTo(i)}
                    className="h-2 rounded-full transition-all duration-300"
                    style={{
                      width: i === index ? 32 : 8,
                      background: i === index ? "var(--color-clay)" : "var(--color-line)",
                    }}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous step"
                  className="btn-ghost h-10 w-10 !p-0"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next step"
                  className="btn-primary h-10 w-10 !p-0"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* result line */}
            <p className="mt-8 rounded-[1.25rem] bg-ink px-6 py-4 text-center text-sm font-medium text-white sm:text-base">
              <span className="eyebrow !text-clay-bright">The result&nbsp;&nbsp;</span>
              {howItWorks.result}
            </p>
          </div>
        </Reveal>

        {/* benefits follow the same process */}
        <Reveal className="mx-auto mt-6 max-w-3xl" delay={0.1}>
          <div className="card flex items-start gap-3 border-l-4 border-clay px-6 py-5">
            <div>
              <p className="font-semibold text-clay-deep">{howItWorks.benefits.eyebrow}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                {howItWorks.benefits.body}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
