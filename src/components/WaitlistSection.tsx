import { brand } from "../lib/copy";
import Reveal from "./Reveal";
import WaitlistForm from "./WaitlistForm";

export default function WaitlistSection() {
  return (
    <section id="waitlist" className="canvas-glow relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="display text-3xl font-bold leading-tight sm:text-4xl">
            {brand.taglineLead}
            <br />
            <span className="accent-text">{brand.taglineAccent}</span>
          </h2>
        </Reveal>
        <WaitlistForm />
      </div>
    </section>
  );
}
