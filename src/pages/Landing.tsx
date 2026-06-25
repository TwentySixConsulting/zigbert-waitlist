import Hero from "../components/Hero";
import WhatIsZigbert from "../components/WhatIsZigbert";
import Problem from "../components/Problem";
import HowItWorks from "../components/HowItWorks";
import StatsBand from "../components/StatsBand";
import Slides from "../components/Slides";
import Cadence from "../components/Cadence";
import Scope from "../components/Scope";
import AboutFounder from "../components/AboutFounder";
import Trust from "../components/Trust";
import MethodologyTeaser from "../components/MethodologyTeaser";
import WaitlistSection from "../components/WaitlistSection";
import StickyCTA from "../components/StickyCTA";

export default function Landing() {
  return (
    <>
      <WhatIsZigbert />
      <Hero />
      <Problem />
      <HowItWorks />
      <StatsBand />
      <Slides />
      <Cadence />
      <Scope />
      <AboutFounder />
      <Trust />
      <MethodologyTeaser />
      <WaitlistSection />
      <StickyCTA />
    </>
  );
}
