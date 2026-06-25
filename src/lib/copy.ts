// Centralised copy for the Zigbert waitlist site.
// Narrative drawn from "Introducing Zigbert: Reward Intelligence You Can Trust".
// Edit here to tweak any wording. Components read from this file.

export const brand = {
  name: "Zigbert",
  parent: "TwentySix Consulting",
  parentUrl: "https://twentysixconsulting.co.uk",
  linkedinUrl: "https://uk.linkedin.com/company/twentysixreward",
  email: "consultants@twentysixconsulting.co.uk",
  demoUrl: "https://twentysixconsulting.github.io/demo-client-dashboard/",
  endorsement: "by TwentySix Consulting · 20 years of reward expertise",
  launch: "Launching September 2026",
};

// ── Launch announcement (top bar) ───────────────────────────────────
export const launch = {
  badge: "Launching September 2026",
  banner: "Zigbert launches September 2026.",
  bannerStrong: "Join the waitlist now, it takes seconds.",
  cta: "Sign Up Now",
};

export const hero = {
  eyebrow: "Reward intelligence · Launching September 2026",
  headline: "Know what to pay.",
  headlineAccent: "And trust the answer.",
  subhead:
    "Zigbert gives you a clear market rate for every role, drawn from our database of over 1.5 million UK salary records and reviewed by our reward specialists. No complexity, no confusion, no second-guessing the data.",
  ctaPrimary: "Join The Waitlist",
  ctaSecondary: "See How It Works",
  note: "Sign up takes seconds. We'll email you once before launch, then that's it.",
};

// ── What is Zigbert? (explainer, two co-equal pillars) ──────────────
export const whatIsZigbert = {
  eyebrow: "What is Zigbert?",
  title: "Your pay and benefits, through the market's eyes",
  lede:
    "Zigbert is a reward intelligence platform from TwentySix Consulting. It answers two questions every organisation wrestles with, in one simple dashboard: are we paying the right rate, and is our benefits offer competitive? Every answer is drawn from real market data and signed off by a reward specialist.",
  period: "Q2 2026",
  pillars: [
    {
      num: "01",
      tag: "Pay",
      title: "Pay",
      oneLiner: "Where you sit on pay, role by role.",
      body:
        "A clear market rate for every role you give us, with quartile position, market trends and hotspots. See exactly where each role sits and where you have room to move.",
      points: [
        "A clear market rate for every role",
        "Quartile position, role by role",
        "Market trends and pay hotspots",
      ],
    },
    {
      num: "02",
      tag: "Benefits",
      title: "Benefits",
      oneLiner: "Your benefits offer, through the market's eyes.",
      body:
        "See how your benefits compare against the market: total coverage, strength by reward category, and exactly where you over- or under-provide.",
      points: [
        "Total coverage vs the market",
        "Provision by reward category",
        "Where you over- or under-provide",
      ],
    },
  ],
};

// ── The problem (slide 2) ───────────────────────────────────────────
export const problem = {
  eyebrow: "When guessing isn't good enough",
  title: "“How much should we be paying?”",
  body:
    "Today you get one of two things: simple salary checkers where you've no idea if the data is any good, or complex portals packed with raw data that's overwhelming for anyone who isn't a reward specialist.",
  need:
    "What most teams actually need is a clear, confident answer to one question. Are we paying this role at the right rate? No jargon, no endless filtering, no second-guessing the results.",
  cards: [
    {
      tag: "Option A",
      title: "Basic salary checkers",
      body: "Quick, but you can't tell if the number is trustworthy or where it came from.",
    },
    {
      tag: "Option B",
      title: "Complex data portals",
      body: "Powerful, but overwhelming, with endless filtering and raw data to interpret yourself.",
    },
    {
      tag: "Zigbert",
      title: "One confident answer",
      body: "A clear market rate per role, reviewed by an expert. The reassurance you're getting it right.",
      highlight: true,
    },
  ],
  costStats: [
    {
      value: "£10,000",
      body: "Overpaying by just 1% costs £10,000 for every £1m of payroll. Getting pay right is one of the simplest ways to protect and grow your profit.",
    },
    {
      value: "6–9 months",
      body: "Underpay your best people and they leave. Replacing someone typically costs six to nine months of their salary in hiring, onboarding and lost productivity, so paying fairly is one of the cheapest ways to keep them.",
    },
  ],
};

// ── How it works (slide 6) ──────────────────────────────────────────
export const howItWorks = {
  eyebrow: "How it works",
  title: "Three inputs. One clear market rate.",
  body:
    "We've distilled the methodology behind the major salary surveys into a streamlined process. Tell us three things about a role, and we do the rest.",
  steps: [
    {
      n: "01",
      eyebrow: "Step 01",
      title: "Tell us about the role",
      body: "Job title, function and level. This shows us exactly what the role is and where it sits in the organisation.",
      bullets: [
        "Job title, function and level",
        "Takes under a minute per role",
        "No spreadsheets to wrangle",
      ],
    },
    {
      n: "02",
      eyebrow: "Step 02",
      title: "We benchmark it against the market",
      body: "Your role is matched against our database of over 1.5 million UK salary records, adjusted for your industry, location and organisation size, then reviewed by a reward specialist.",
      bullets: [
        "1.5M+ salary records in our database",
        "Adjusted for industry, location and size",
        "Every benchmark specialist-reviewed",
      ],
    },
    {
      n: "03",
      eyebrow: "Step 03",
      title: "Get a clear rate and the charts",
      body: "See a single market rate for the role, where it sits across the quartiles, and the trends behind it. Ready to drop straight into your pay review.",
      bullets: [
        "One clear market rate per role",
        "Quartile position and market trends",
        "Charts you can share with leaders",
      ],
    },
  ],
  result: "A single market rate for the role, reviewed and signed off by a reward specialist.",
};

// ── Why you can trust it (slides 3 + 13) ────────────────────────────
export const trust = {
  eyebrow: "Reward intelligence you can trust",
  title: "No more “mad results”",
  body:
    "The real risk with self-service pay platforms is results that simply don't look right: outliers, mismatched job levels, or data drawn from the wrong comparator group. Without expert knowledge, it's hard to know what to trust.",
  quote: "“Yes, that's good.”",
  quoteSub: "Every Zigbert benchmark is reviewed by a specialist who confirms it makes sense before you ever see it.",
  points: [
    { title: "Curated data", body: "Not aggregated noise. Every benchmark is specialist-reviewed and quality-assured before publication." },
    { title: "Monthly cadence", body: "Monthly updates keep you ahead of the market, not catching up with it." },
    { title: "Clear outputs", body: "A single market rate per role, with no ambiguity and no interpretation required." },
    { title: "Instant access", body: "Cloud-based and always available. Add or change roles any time." },
  ],
};

// ── What's included (slides 7 + 10) ─────────────────────────────────
export const included = {
  eyebrow: "What's included",
  title: "Pay and benefits, in one dashboard.",
  body:
    "We're not leaving you to fight through raw data. Every role benchmarked by our experts, your benefits offer compared against the market, all the graphs you need to analyse and explain, plus market trends and human support if you get stuck.",
  items: [
    {
      tag: "Pay",
      title: "Up-to-date rates for every role",
      body: "See how your pay compares all year round, in an easy-to-read format with graphs you can pop out for business leaders.",
    },
    {
      tag: "Benefits",
      title: "Your benefits, benchmarked",
      body: "See how your benefits offer stacks up against the market by category, and where you over- or under-provide.",
    },
    {
      tag: "Trends",
      title: "Market hotspots & trends",
      body: "We'll tell you what the market is doing and when your skills are in demand, to support your reward reviews.",
    },
    {
      tag: "Flexible",
      title: "Add or change roles any time",
      body: "Restructuring or growing? Understand the likely salary cost of new and changing roles instantly.",
    },
  ],
};

// ── Always current (slide 9) ────────────────────────────────────────
export const cadence = {
  eyebrow: "Always current",
  title: "Updated every month, not every year",
  body:
    "Market rates move with inflation, talent scarcity and sector trends. A tool that refreshes once a year can't keep pace. Zigbert updates monthly, so your decisions always reflect the market right now and support your reward cycle all year round.",
  points: [
    {
      title: "Never out of date",
      body: "By the time an annual survey is published, the market has already moved. Zigbert never lets your numbers drift more than a month behind.",
    },
    {
      title: "Right for every cycle",
      body: "Pay reviews, new-hire offers, budget planning. Whenever your reward cycle lands, the data is already current.",
    },
    {
      title: "Catch shifts early",
      body: "Month-on-month movement shows you where pay is heating up before it costs you the hire, not six months too late.",
    },
  ],
};

// ── Honest about scope (slide 11) ───────────────────────────────────
export const scope = {
  eyebrow: "Honest about scope",
  title: "Great for most roles, and honest when it isn't",
  body:
    "The dashboard works exceptionally well for the majority of roles. But we believe in being honest about where it fits, and where a deeper, bespoke review serves you better.",
  bestWhen: {
    title: "The dashboard is ideal when",
    items: [
      "The role has a reasonably industry-standard skill set",
      "Your organisation sits clearly within a defined sector",
      "You need a reliable market rate quickly and cost-effectively",
      "You don't have an in-house reward specialist on hand",
    ],
  },
  bespokeWhen: {
    title: "Consider bespoke benchmarking when",
    items: [
      "Roles are highly complex, hybrid, or genuinely unusual",
      "Your organisation sits on the cusp of multiple sectors",
      "You need fully-evidenced analysis for senior or board-level roles",
    ],
  },
};

// ── Stats band (slides 4 / 8 / 13) ──────────────────────────────────
export const stats = [
  { value: "1.5M+", label: "records in our UK salary database" },
  { value: "Monthly", label: "data refresh, never stale" },
  { value: "1 rate", label: "clear market rate per role" },
  { value: "Expert", label: "every benchmark specialist-reviewed" },
];

// ── Live charts showcase (adapted from the TwentySix dashboard) ──────
export const charts = {
  eyebrow: "Straight from the dashboard",
  title: "The charts you'll actually use",
  body:
    "Every benchmark lands in a clean, shareable view. Here's a taste of what you'll see inside Zigbert, pulled from real dashboard components. Switch between pay and benefits.",
  payLabel: "Pay",
  benefitsLabel: "Benefits",
};

// ── Who's behind Zigbert: TwentySix Consulting ──────────────────────
export const about = {
  eyebrow: "Who's behind Zigbert",
  title: "Built by TwentySix Consulting",
  lede:
    "Zigbert is built by TwentySix Consulting, a UK reward and HR consultancy specialising in intelligent pay benchmarking. For two decades we've helped organisations of every size get pay and benefits right, combining serious market data with the judgement of people who do reward for a living.",
  services: [
    {
      title: "Pay & benefits benchmarking",
      body: "Market intelligence, from a single role to your whole organisation.",
    },
    {
      title: "Reward consulting",
      body: "Reward strategy, salary structures and pay reviews that fit your business.",
    },
    {
      title: "Reward frameworks",
      body: "Frameworks built for diverse workforces, from 10 to 10,000+ people.",
    },
    {
      title: "Job levelling & evaluation",
      body: "Role mapping and grading structures you can stand behind.",
    },
  ],
  more: "Need more than benchmarks? Our consultants turn the data into pay structures, salary bands and clear messaging. And this is just the start: benefits, full grading structures, skills-based benchmarking and a Zigbert MCP for real-time reward are on the way.",
  links: {
    site: { label: "Visit twentysixconsulting.co.uk", url: "https://twentysixconsulting.co.uk" },
    email: { label: "consultants@twentysixconsulting.co.uk", url: "mailto:consultants@twentysixconsulting.co.uk" },
    linkedin: { label: "Connect on LinkedIn", url: "https://uk.linkedin.com/company/twentysixreward" },
  },
};

// ── Founder note (a personal letter from Rachel Crafts) ─────────────
// TODO(Millie): drop a square headshot at public/rachel.jpg and set photo: "rachel.jpg".
export const founder = {
  eyebrow: "A note from our founder",
  name: "Rachel Crafts",
  role: "Managing Director · TwentySix Consulting",
  linkedin: "https://uk.linkedin.com/in/rachelcrafts",
  photo: "rachel.jpg",
  intro: [
    "Employee pay is the biggest single cost for most businesses — and after 30 years in reward, I know how daunting it is to get right. Pay too little and you can't recruit. Pay too much and the wrong people stay put forever. And pay review season burns hours of management time going round in circles, rarely doing much for motivation.",
    "I've spent my career demystifying reward — as a Director of Reward, an ACAS Independent Expert in Equal Value, and an adviser to organisations across the whole spectrum, from tiny grassroots charities to global corporations. For the last 20 years I've done this through TwentySix Consulting, where my team and I give businesses the data, tools and framework to manage pay and benefits simply and cost-effectively.",
  ],
  pointsLead: "Time and again, I've seen two things:",
  points: [
    "Reward made more complex than it needs to be — bamboozling the people team and infuriating line managers.",
    "Managers left without the tools to have proper conversations about pay with their teams.",
  ],
  outro: [
    "This hits hardest in growing businesses — the ones without a reward team, where HR or finance is juggling pay alongside everything else, recruiting and restructuring at pace. Good pay data is exactly the management information they need, and it's the piece too many are missing.",
    "So I built Zigbert: simple pay benchmarking for growing companies. Share your roles, we match them against live UK salary data and check every number ourselves before it reaches you, and you get a clear dashboard showing exactly how your pay and benefits compare — refreshed every month, with real experts behind it. The evidence managers need to have honest, confident conversations about pay. No jargon, no reward specialist on your payroll.",
  ],
  closing: "If you're trying to get pay right without the guesswork, I'd love to help.",
};

// ── Methodology teaser (links to /methodology) ──────────────────────
export const methodologyTeaser = {
  eyebrow: "For the curious",
  title: "How the numbers are built",
  body:
    "No black box. Zigbert draws on a current database of over 1.5 million UK salary records, captured from job boards nationwide and classified by role, level and region. Then every benchmark is reviewed by a specialist. Here's exactly how.",
  cta: "Read The Full Methodology",
};

// ── Waitlist (slide 15) ─────────────────────────────────────────────
export const waitlist = {
  eyebrow: "Be first in · Launching September 2026",
  title: "Join the Zigbert waitlist",
  body: "Sign up now and we'll invite you the moment Zigbert opens in September 2026. It only takes a few seconds, and early sign-ups get first access and launch pricing.",
  perk:
    "Want a taste now? Once you're on the list, send us your 5–10 hardest roles and we'll show you the market rate, how confident the benchmark is, and where your pay sits.",
  success: {
    title: "Thank you for signing up!",
    body: "You're on the Zigbert waitlist. We'll reach out before launch in September 2026 with your early access and launch pricing. A confirmation email is on its way to your inbox.",
  },
  successReturning: {
    title: "You're already on the list!",
    body: "Good news, you're already signed up. We'll be in touch before launch in September 2026 with your early access and launch pricing. No need to do anything else.",
  },
  fields: {
    name: "Your name",
    company: "Company",
    email: "Work email",
    size: "Company size (optional)",
    role: "Your role (optional)",
  },
  sizes: ["1–49", "50–199", "200–999", "1,000–10,000", "10,000+"],
  submit: "Join The Waitlist",
  submitting: "Joining…",
  error: "Something went wrong. Please try again, or email us directly.",
};

// ── Methodology page — long-form, publish-safe ──────────────────────
export const methodology = {
  intro: {
    title: "How Zigbert builds its numbers",
    lede:
      "Good pay decisions need data you can trust. Here's where Zigbert's market rates come from, how they're produced, and why every one is reviewed by a person before it reaches you.",
  },
  sections: [
    {
      heading: "The data",
      paragraphs: [
        "Zigbert draws on a current database of over 1.5 million UK job salary records, captured directly from job boards nationwide and growing all the time. Every posting is dissected for its responsibilities, organisational context, job level and function, so we're always comparing like with like, not just matching on a job title.",
        "That unparalleled dataset places each role in the context of the wider market: how salaries are moving and which skills are most in demand right now. The result is a clear lower-quartile, median and upper-quartile picture for each role, and a single market rate you can act on.",
      ],
    },
    {
      heading: "Three inputs, one rate",
      paragraphs: [
        "We've distilled the methodology used by the major salary surveys into a streamlined process. You tell us three things about a role: its title, function and level; your industry and location; and your organisation size. Zigbert returns the market rate.",
        "Those three inputs do a lot of work: they pin down exactly what the role is, account for sector norms and regional variation across the UK, and make sure you're compared with organisations that genuinely look like yours.",
      ],
    },
    {
      heading: "Expert review",
      paragraphs: [
        "This is what sets Zigbert apart. Self-service pay tools can produce results that simply don't look right: outliers, mismatched levels, or data drawn from the wrong comparator group. Without expert knowledge, it's hard to know what to trust.",
        "Every Zigbert benchmark is reviewed by one of our reward specialists, who confirms it makes sense before publication. You get the speed of a dashboard with the reassurance that an expert has looked at the number and said, “Yes, that's good.”",
      ],
    },
    {
      heading: "Refreshed monthly",
      paragraphs: [
        "Market rates move with inflation, talent scarcity and sector trends, so a benchmarking tool that refreshes once a year can't keep pace. Zigbert updates every month, bringing in newly validated data across roles, levels and industries.",
        "That means whether you're setting a new-hire offer or reviewing your entire pay structure, you're acting on what the market looks like now, not six months ago.",
      ],
    },
  ],
  cta: {
    title: "Want this for your organisation?",
    body: "Zigbert opens in September 2026. Join The Waitlist for first access and launch pricing.",
    button: "Join The Waitlist",
  },
};
