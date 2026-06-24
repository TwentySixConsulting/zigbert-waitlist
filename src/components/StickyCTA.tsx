import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Mobile-only sticky "Join the waitlist" bar. Appears once the hero is
 * scrolled away and hides whenever the waitlist form itself is on screen.
 */
export default function StickyCTA() {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [waitlistVisible, setWaitlistVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolledPastHero(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Hide the bar whenever the waitlist form or the footer is on screen.
    const targets = [
      document.getElementById("waitlist"),
      document.querySelector("footer"),
    ].filter(Boolean) as Element[];
    if (!targets.length) return;

    const seen = new Map<Element, boolean>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => seen.set(e.target, e.isIntersecting));
        setWaitlistVisible([...seen.values()].some(Boolean));
      },
      { rootMargin: "0px 0px -40% 0px" }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  const show = scrolledPastHero && !waitlistVisible;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-cream/90 px-4 py-3 backdrop-blur-md md:hidden"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm font-semibold text-ink">
              Launching Sept 2026
              <span className="block text-xs font-normal text-muted">First access + launch pricing</span>
            </span>
            <a href="#waitlist" className="btn-primary text-sm">
              Join The Waitlist
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
