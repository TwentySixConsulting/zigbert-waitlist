import WaitlistForm from "./WaitlistForm";

export default function WaitlistSection() {
  return (
    <section id="waitlist" className="canvas-glow relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <WaitlistForm />
      </div>
    </section>
  );
}
