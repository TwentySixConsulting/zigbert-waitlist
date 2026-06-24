import type { ComponentType, ReactNode } from "react";
import { CheckCircle2, LineChart, Gift, CalendarClock } from "lucide-react";
import { whatIsZigbert, launch } from "../lib/copy";
import Reveal from "./Reveal";
import { ScrollingShowcase } from "./ScrollingShowcase";
import {
  QuartilePositionPreview,
  DistributionPreview,
  PayTrendPreview,
  BonusPreview,
  BenefitsProvisionPreview,
  BenefitsCategoryPreview,
  BenefitsComparisonPreview,
  BenefitsStrengthsPreview,
} from "./charts";

// Fixed-size wrapper so the marquee cards keep their shape.
const box = (node: ReactNode, i: number) => (
  <div key={i} className="h-[228px] w-[270px]">
    {node}
  </div>
);

const payCards = [
  <QuartilePositionPreview />,
  <DistributionPreview />,
  <PayTrendPreview />,
  <BonusPreview />,
].map(box);

const benefitsCards = [
  <BenefitsProvisionPreview />,
  <BenefitsCategoryPreview />,
  <BenefitsComparisonPreview />,
  <BenefitsStrengthsPreview />,
].map(box);

const icons: ComponentType<{ className?: string }>[] = [LineChart, Gift];
const showcases = [
  <ScrollingShowcase items={payCards} id="pay" durationSeconds={48} />,
  <ScrollingShowcase items={benefitsCards} id="benefits" durationSeconds={48} reverse />,
];

export default function WhatIsZigbert() {
  return (
    <section id="what" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="mb-6">
            <a
              href="#waitlist"
              className="blue-gradient inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-md transition-[filter] hover:brightness-105"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/90" />
              {launch.badge}
            </a>
          </div>
          <span className="eyebrow">{whatIsZigbert.eyebrow}</span>
          <h2 className="display mt-3 text-3xl font-bold sm:text-4xl">{whatIsZigbert.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">{whatIsZigbert.lede}</p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {whatIsZigbert.pillars.map((p, i) => {
            const Icon = icons[i];
            const blue = i === 1; // Pay = clay, Benefits = blue accent
            return (
              <Reveal as="div" key={p.tag} stagger index={i} className="card flex min-w-0 flex-col p-6 sm:p-8">
                {/* header row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                        blue ? "bg-steel-tint text-steel" : "bg-clay-tint text-clay-deep"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className={`eyebrow ${blue ? "!text-steel" : ""}`}>
                      {p.num} — {p.tag}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-[0.68rem] font-medium text-muted">
                    <CalendarClock className="h-3 w-3" />
                    {whatIsZigbert.period}
                  </span>
                </div>

                <h3 className="display mt-5 text-4xl font-bold sm:text-5xl">{p.title}</h3>
                <p className={`mt-3 text-lg font-medium ${blue ? "text-steel" : "text-clay-deep"}`}>
                  {p.oneLiner}
                </p>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{p.body}</p>

                {/* scrolling graphics strip */}
                <div className="-mx-6 mt-6 sm:-mx-8">
                  {showcases[i]}
                </div>

                <ul className="mt-6 space-y-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-ink">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
