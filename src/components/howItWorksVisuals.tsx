import { ShieldCheck, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { PayTrendPreview, QuartilePositionPreview } from "./charts";

function WindowChrome({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 border-b border-line bg-cream px-5 py-3">
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-clay/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
      </div>
      <div className="flex flex-1 justify-center">
        <span className="inline-flex items-center gap-1.5 rounded-md border border-line bg-surface px-3 py-1 text-[0.62rem] text-muted">
          <Sparkles className="h-3 w-3 text-clay" />
          {label}
        </span>
      </div>
      <div className="w-12" />
    </div>
  );
}

// ── Step 1: tell us about the role ──────────────────────────────────
const inputs = [
  { label: "Job title, function & level", value: "Senior Software Engineer · Eng · L4" },
  { label: "Industry & location", value: "Technology · Manchester" },
  { label: "Organisation size", value: "200–999 employees" },
];

export function RoleInputVisual() {
  return (
    <div className="card mx-auto w-full max-w-[480px] overflow-hidden">
      <WindowChrome label="zigbert.app / new benchmark" />
      <div className="space-y-3 p-5">
        {inputs.map((f, i) => (
          <div key={f.label}>
            <p className="mb-1 text-[0.62rem] font-semibold uppercase tracking-wide text-muted">
              {f.label}
            </p>
            <div className="flex items-center justify-between rounded-xl border border-line bg-surface px-3.5 py-2.5">
              <span className="text-sm font-medium text-ink">{f.value}</span>
              <span className="text-[0.6rem] font-semibold uppercase tracking-wide text-clay-deep">
                {i === 0 ? "Role" : i === 1 ? "Context" : "Size"}
              </span>
            </div>
          </div>
        ))}
        <button
          type="button"
          tabIndex={-1}
          className="btn-primary mt-1 w-full justify-center text-sm"
        >
          Get the market rate
          <ArrowRight className="h-4 w-4" />
        </button>
        <p className="flex items-center justify-center gap-1.5 text-[0.66rem] text-muted">
          <ShieldCheck className="h-3 w-3 text-slate" />
          Takes under a minute per role
        </p>
      </div>
    </div>
  );
}

// ── Step 2: we benchmark it against the market ──────────────────────
export function BenchmarkVisual() {
  return (
    <div className="card mx-auto w-full max-w-[480px] overflow-hidden">
      <WindowChrome label="Matching against the market" />
      <div className="space-y-3 p-5">
        <div className="grid grid-cols-3 gap-3">
          {[
            { v: "1.5M+", l: "Salary records" },
            { v: "Verified", l: "By a specialist" },
            { v: "Monthly", l: "Refreshed" },
          ].map((s) => (
            <div key={s.l} className="rounded-xl bg-cream px-3 py-2.5 text-center">
              <p className="display text-base font-bold text-ink">{s.v}</p>
              <p className="mt-0.5 text-[0.58rem] font-semibold uppercase tracking-wide text-clay-deep">
                {s.l}
              </p>
            </div>
          ))}
        </div>
        <PayTrendPreview />
        <p className="flex items-center justify-center gap-1.5 text-[0.66rem] text-muted">
          <CheckCircle2 className="h-3 w-3 text-clay" />
          Adjusted for your industry, location and size
        </p>
      </div>
    </div>
  );
}

// ── Step 3: get a clear rate and the charts ─────────────────────────
export function ResultVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[480px]">
      <div className="absolute -top-3 left-1/2 z-10 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-[0.66rem] font-semibold text-white shadow-lg">
        <span className="accent-gradient flex h-3.5 w-3.5 items-center justify-center rounded-full text-[0.55rem]">
          ✓
        </span>
        “Yes, that's good.” Specialist-reviewed
      </div>
      <div className="card overflow-hidden pt-4">
        <WindowChrome label="your-rate.zigbert.app" />
        <div className="p-4">
          <QuartilePositionPreview />
        </div>
      </div>
    </div>
  );
}
