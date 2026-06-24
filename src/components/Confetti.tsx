import { motion, useReducedMotion } from "framer-motion";

// Brand-coloured confetti for the waitlist success celebration.
const COLORS = ["#c9785a", "#7285a5", "#dda288", "#5e7191", "#121c2b", "#b0603f"];

export default function Confetti({ count = 44 }: { count?: number }) {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 0.25;
        const duration = 1.7 + Math.random() * 1.3;
        const drift = (Math.random() - 0.5) * 140;
        const rotate = Math.random() * 720 - 360;
        const w = 5 + Math.random() * 6;
        const color = COLORS[i % COLORS.length];
        return (
          <motion.span
            key={i}
            className="absolute top-0 block"
            style={{ left: `${left}%`, width: w, height: w * 0.55, background: color, borderRadius: 1 }}
            initial={{ y: "-15%", x: 0, opacity: 0, rotate: 0 }}
            animate={{ y: "130%", x: drift, opacity: [0, 1, 1, 0], rotate }}
            transition={{ duration, delay, ease: "easeOut" }}
          />
        );
      })}
    </div>
  );
}
