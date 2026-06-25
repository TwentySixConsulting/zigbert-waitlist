import type { ReactNode } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { Heart, Coins, CalendarDays, GraduationCap, Users } from "lucide-react";

// Zigbert palette (recharts needs literal colours, not Tailwind classes).
const INK = "#121c2b";
const MUTED = "#4b5563";
const CLAY = "#c9785a";
const CLAY_DEEP = "#b0603f";
const CLAY_BRIGHT = "#dda288";
const SLATE = "#7285a5";
const SLATE_TINT = "#d9e0ea";
const STEEL = "#4b5563";
const CREAM = "#f8f6f1";

// Shared card shell, styled to match the site's .card.
export function PreviewShell({
  eyebrow,
  title,
  children,
  footer,
  className = "",
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`card flex h-full flex-col overflow-hidden ${className}`}>
      <div className="border-b border-line px-5 pb-3 pt-4">
        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-clay-deep">
          {eyebrow}
        </p>
        <h3 className="mt-1 text-sm font-semibold leading-tight text-ink">{title}</h3>
      </div>
      <div className="flex-1 overflow-hidden p-4">{children}</div>
      {footer && (
        <div className="border-t border-line px-5 py-2 text-[0.7rem] text-muted">{footer}</div>
      )}
    </div>
  );
}

// ── 1. Where a role sits across the quartiles ───────────────────────
export function QuartilePositionPreview() {
  const lq = 68000;
  const median = 76000;
  const uq = 84000;
  const current = 72000;
  const positionPct = ((current - lq) / (uq - lq)) * 100;

  return (
    <PreviewShell eyebrow="Role-by-role" title="Senior Software Engineer" footer="Positioned lower-mid, room to grow">
      <div className="space-y-3">
        <div className="flex items-baseline justify-between">
          <p className="display text-2xl font-bold text-ink">£{current.toLocaleString("en-GB")}</p>
          <p className="text-[0.7rem] text-muted">Median £{median.toLocaleString("en-GB")}</p>
        </div>
        <div>
          <div
            className="relative h-2.5 overflow-hidden rounded-full"
            style={{
              background: `linear-gradient(90deg, ${SLATE_TINT} 0%, ${CLAY_BRIGHT} 50%, ${CLAY_DEEP} 100%)`,
            }}
          >
            <div
              className="absolute top-1/2 h-4 w-1 -translate-y-1/2 rounded-full"
              style={{ left: `${positionPct}%`, background: INK }}
            />
          </div>
          <div className="mt-1.5 flex justify-between text-[0.6rem] font-medium text-muted">
            <span>LQ £{(lq / 1000).toFixed(0)}k</span>
            <span>Med £{(median / 1000).toFixed(0)}k</span>
            <span>UQ £{(uq / 1000).toFixed(0)}k</span>
          </div>
        </div>
        <div className="rounded-lg bg-clay-tint/40 px-3 py-2 text-[0.72rem] leading-snug text-ink">
          <span className="font-semibold">Competitive,</span> with room to move toward the median to
          improve retention.
        </div>
      </div>
    </PreviewShell>
  );
}

// ── 2. Market movement trend (area) ─────────────────────────────────
const trendData = [
  { month: "Jan", v: 3.4 },
  { month: "Feb", v: 3.8 },
  { month: "Mar", v: 4.0 },
  { month: "Apr", v: 4.1 },
  { month: "May", v: 4.0 },
  { month: "Jun", v: 4.2 },
  { month: "Jul", v: 4.3 },
  { month: "Aug", v: 4.2 },
];

export function PayTrendPreview() {
  return (
    <PreviewShell eyebrow="Market trends" title="Average pay movement, last 8 months" footer="Predicted next cycle: 3.8%">
      <div className="mb-1 flex items-baseline justify-between">
        <p className="display text-2xl font-bold text-ink">4.2%</p>
        <p className="text-[0.72rem] font-semibold text-clay-deep">▲ 0.4pp on Q3</p>
      </div>
      <ResponsiveContainer width="100%" height={92}>
        <AreaChart data={trendData} margin={{ top: 4, right: 4, bottom: 0, left: -28 }}>
          <defs>
            <linearGradient id="zigTrend" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={CLAY} stopOpacity={0.42} />
              <stop offset="100%" stopColor={CLAY} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" tick={{ fontSize: 9, fill: MUTED }} axisLine={false} tickLine={false} />
          <YAxis hide domain={[3, 5]} />
          <Area type="monotone" dataKey="v" stroke={CLAY_DEEP} strokeWidth={2} fill="url(#zigTrend)" />
        </AreaChart>
      </ResponsiveContainer>
    </PreviewShell>
  );
}

// ── 3. How your roles sit vs market (donut) ─────────────────────────
const distributionData = [
  { name: "Below market", value: 2, color: SLATE_TINT },
  { name: "Lower quartile", value: 3, color: SLATE },
  { name: "At median", value: 4, color: CLAY_BRIGHT },
  { name: "Upper quartile", value: 3, color: CLAY },
  { name: "Above market", value: 1, color: CLAY_DEEP },
];

export function DistributionPreview() {
  return (
    <PreviewShell
      eyebrow="Distribution"
      title="How your roles sit vs market"
      footer="See where each role lands across the market"
    >
      <div className="flex h-full items-center gap-3">
        <ResponsiveContainer width="48%" height="100%">
          <PieChart>
            <Pie
              data={distributionData}
              dataKey="value"
              innerRadius={30}
              outerRadius={48}
              paddingAngle={2}
              startAngle={90}
              endAngle={-270}
            >
              {distributionData.map((entry, i) => (
                <Cell key={i} fill={entry.color} stroke={CREAM} strokeWidth={1.5} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="flex-1 space-y-1.5">
          {distributionData.map((d) => (
            <div key={d.name} className="flex items-center gap-2 text-[0.66rem] text-ink">
              <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: d.color }} />
              <span className="flex-1 truncate">{d.name}</span>
              <span className="font-semibold tabular-nums">{d.value}</span>
            </div>
          ))}
        </div>
      </div>
    </PreviewShell>
  );
}

// ── 4. Target bonus % by level (bar) ────────────────────────────────
const bonusData = [
  { level: "Director", median: 35 },
  { level: "Head of / VP", median: 25 },
  { level: "Senior Manager", median: 18 },
  { level: "Senior IC", median: 12 },
  { level: "Mid-level", median: 8 },
  { level: "Graduate", median: 5 },
];

export function BonusPreview() {
  return (
    <PreviewShell eyebrow="Bonus" title="Target bonus % by level" footer="Market median across the UK">
      <ResponsiveContainer width="100%" height={172}>
        <BarChart data={bonusData} layout="vertical" margin={{ top: 0, right: 10, bottom: -8, left: 6 }} barCategoryGap={5}>
          <XAxis type="number" domain={[0, 40]} hide />
          <YAxis
            dataKey="level"
            type="category"
            width={84}
            tick={{ fontSize: 9, fill: INK }}
            axisLine={false}
            tickLine={false}
          />
          <Bar dataKey="median" radius={[0, 4, 4, 0]}>
            {bonusData.map((_, i) => (
              <Cell key={i} fill={i < 2 ? CLAY_DEEP : CLAY} fillOpacity={1 - i * 0.07} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </PreviewShell>
  );
}

// ── 5. Risk heatmap (semantic colours kept) ─────────────────────────
export function RiskHeatPreview() {
  const risks = [
    { label: "Snr Engineering", level: "high" as const },
    { label: "Product", level: "med" as const },
    { label: "Design", level: "low" as const },
    { label: "Data", level: "high" as const },
    { label: "Marketing", level: "low" as const },
    { label: "Operations", level: "med" as const },
  ];
  const colors = { high: "#c0492f", med: "#cf8a3a", low: "#4f8a6b" };
  return (
    <PreviewShell eyebrow="Risk view" title="Where you're out of step with market" footer="2 high-risk functions to review">
      <div className="grid grid-cols-2 gap-1.5">
        {risks.map((r) => (
          <div
            key={r.label}
            className="flex items-center justify-between rounded-lg px-2.5 py-2"
            style={{ background: `${colors[r.level]}15`, border: `1px solid ${colors[r.level]}33` }}
          >
            <span className="truncate text-[0.66rem] font-medium text-ink">{r.label}</span>
            <span className="text-[0.58rem] font-semibold uppercase tracking-wide" style={{ color: colors[r.level] }}>
              {r.level}
            </span>
          </div>
        ))}
      </div>
    </PreviewShell>
  );
}

// ── BENEFITS PREVIEWS ───────────────────────────────────────────────

// 6. Total benefits coverage (donut)
export function BenefitsProvisionPreview() {
  const data = [
    { name: "Provided", value: 24, color: STEEL },
    { name: "Not yet", value: 12, color: "#d8dbe1" },
  ];
  return (
    <PreviewShell eyebrow="Provision" title="Total benefits coverage" footer="Above market median (62%)">
      <div className="flex h-full items-center gap-3">
        <div className="relative">
          <ResponsiveContainer width={104} height={104}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={34}
                outerRadius={50}
                paddingAngle={1}
                startAngle={90}
                endAngle={-270}
              >
                {data.map((d, i) => (
                  <Cell key={i} fill={d.color} stroke={CREAM} strokeWidth={1.5} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="display text-lg font-bold text-ink">67%</p>
          </div>
        </div>
        <div className="flex-1 space-y-2 text-[0.7rem] text-ink">
          <div className="flex items-baseline gap-2">
            <span className="h-2 w-2 rounded-full" style={{ background: STEEL }} />
            <span className="flex-1">Provided</span>
            <span className="font-semibold">24</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="h-2 w-2 rounded-full" style={{ background: "#c2c6cd" }} />
            <span className="flex-1">Not yet</span>
            <span className="font-semibold">12</span>
          </div>
          <div className="mt-1 rounded-md px-2 py-1.5 text-[0.66rem]" style={{ background: "#e4e7ec" }}>
            <span className="font-semibold" style={{ color: STEEL }}>+5%</span> above peers
          </div>
        </div>
      </div>
    </PreviewShell>
  );
}

// 7. Provision by reward area (icon + bars)
export function BenefitsCategoryPreview() {
  const cats = [
    { name: "Health", pct: 92, icon: Heart },
    { name: "Financial", pct: 78, icon: Coins },
    { name: "Time off", pct: 85, icon: CalendarDays },
    { name: "Learning", pct: 64, icon: GraduationCap },
    { name: "Family", pct: 71, icon: Users },
  ];
  return (
    <PreviewShell eyebrow="By category" title="Provision by reward area" footer="Health leads at 92%">
      <div className="space-y-2">
        {cats.map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.name} className="flex items-center gap-2">
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md" style={{ background: "#e4e7ec" }}>
                <Icon className="h-3 w-3" style={{ color: STEEL }} />
              </div>
              <span className="w-[52px] truncate text-[0.66rem] font-medium text-muted">{c.name}</span>
              <div className="h-1.5 flex-1 overflow-hidden rounded-full" style={{ background: "#e6e8ec" }}>
                <div className="h-full rounded-full" style={{ width: `${c.pct}%`, background: STEEL }} />
              </div>
              <span className="w-8 text-right text-[0.66rem] font-semibold tabular-nums text-ink">{c.pct}%</span>
            </div>
          );
        })}
      </div>
    </PreviewShell>
  );
}

// 8. Your offer vs market (overlay bars)
export function BenefitsComparisonPreview() {
  const rows = [
    { label: "Private medical", market: 84, you: 100 },
    { label: "Enhanced pension", market: 68, you: 90 },
    { label: "Hybrid working", market: 92, you: 100 },
    { label: "Mental health", market: 56, you: 80 },
  ];
  return (
    <PreviewShell eyebrow="Comparison" title="Your offer vs market" footer="You lead on 3 of 4">
      <div className="space-y-2.5">
        {rows.map((b) => (
          <div key={b.label}>
            <div className="mb-0.5 flex items-baseline justify-between">
              <span className="truncate text-[0.66rem] font-medium text-ink">{b.label}</span>
              <span className="text-[0.62rem] text-muted">You {b.you}%</span>
            </div>
            <div className="relative h-2 rounded-full" style={{ background: "#e6e8ec" }}>
              <div className="absolute left-0 top-0 h-full rounded-full" style={{ width: `${b.market}%`, background: "#c2c6cd" }} />
              <div
                className="absolute left-0 top-0 h-full rounded-full"
                style={{ width: `${b.you}%`, background: STEEL, mixBlendMode: "multiply" }}
              />
            </div>
          </div>
        ))}
      </div>
    </PreviewShell>
  );
}

// 9. Strengths & areas to watch (two columns)
export function BenefitsStrengthsPreview() {
  return (
    <PreviewShell eyebrow="Strengths & watch" title="Where you stand out" footer="1 clear development area">
      <div className="grid h-full grid-cols-2 gap-2">
        <div className="rounded-lg p-2.5" style={{ background: "#e3ece6" }}>
          <p className="mb-1.5 text-[0.58rem] font-semibold uppercase tracking-wide" style={{ color: "#3f7d6a" }}>
            Strengths
          </p>
          <ul className="space-y-1 text-[0.66rem] text-ink">
            <li>Pension 10%, top quartile</li>
            <li>Private medical, all staff</li>
            <li>Enhanced parental leave</li>
          </ul>
        </div>
        <div className="rounded-lg p-2.5" style={{ background: "#f1e0d8" }}>
          <p className="mb-1.5 text-[0.58rem] font-semibold uppercase tracking-wide text-clay-deep">To watch</p>
          <ul className="space-y-1 text-[0.66rem] text-ink">
            <li>Wellbeing budget below median</li>
            <li>No share scheme yet</li>
          </ul>
        </div>
      </div>
    </PreviewShell>
  );
}
