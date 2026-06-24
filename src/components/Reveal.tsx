import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Scroll-triggered reveal. Fades + rises into view once, respecting
 * prefers-reduced-motion (in which case content simply appears).
 *
 * Wrap a group in <Reveal stagger> and give children `index` for a
 * staggered cascade, or use a single <Reveal> for one element.
 */
export default function Reveal({
  children,
  className,
  index = 0,
  y = 18,
  delay = 0,
  as = "div",
  stagger = false,
  amount = 0.3,
}: {
  children: ReactNode;
  className?: string;
  index?: number;
  y?: number;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "span";
  stagger?: boolean;
  amount?: number;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease,
        delay: delay + (stagger ? index * 0.09 : 0),
      },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </MotionTag>
  );
}
