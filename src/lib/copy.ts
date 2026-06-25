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
  taglineLead: "Stop arguing about pay.",
  taglineAccent: "Start delivering.",
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
    "Zigbert is a reward intelligence platform from TwentySix Consulting. It answers the two questions every organisation wrestles with — are we paying the right rate, and is our benefits offer competitive? — in one simple dashboard, grounded in real market data and checked by a reward specialist before it reaches you.",
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
      oneLiner: "Where your benefits stand, category by category.",
      body:
        "See how your benefits compare against the market, from overall coverage and strength by category through to exactly where you over- or under-provide.",
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
  title: "A few details. One clear market rate.",
  body:
    "We've distilled the methodology behind the major salary surveys into a streamlined process. Tell us a few details about each role, and we do the rest, with your dashboard ready within 48 hours of uploading your roles.",
  steps: [
    {
      n: "01",
      eyebrow: "Step 01",
      title: "Tell us about the role",
      body: "Job title, function and level, entered in our simple form or uploaded from your own spreadsheet. This shows us exactly what each role is and where it sits in the organisation.",
      bullets: [
        "Job title, function and level",
        "Our simple form or your own spreadsheet",
        "Private and secure",
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
        "Every dashboard specialist-reviewed",
      ],
    },
    {
      n: "03",
      eyebrow: "Step 03",
      title: "It all lands in your dashboard",
      body: "You don't just get a number back. Every role sits in your own private dashboard, with the market rate, quartile position, trends and specialist commentary explaining what it means and what to do next. Pop out any chart to share with your board or leadership team.",
      bullets: [
        "A living dashboard, not a one-off report",
        "Specialist commentary and analysis",
        "Board-ready charts you can export and share",
      ],
    },
  ],
  result: "A clear market rate for every role, in a dashboard reviewed and signed off by a reward specialist.",
  benefits: {
    eyebrow: "Benefits work the same way",
    body: "Share your benefits, we compare them against the market, and your dashboard shows exactly where you sit, plus what's standard, emerging and worth watching for benefits in your sector.",
  },
};

// ── Why you can trust it (slides 3 + 13) ────────────────────────────
export const trust = {
  eyebrow: "Reward intelligence you can trust",
  title: "No more “mad results”",
  body:
    "The real risk with self-service pay platforms is results that simply don't look right: outliers, mismatched job levels, or data drawn from the wrong comparator group. Without expert knowledge, it's hard to know what to trust.",
  quote: "“Yes, that's good.”",
  quoteSub: "Every Zigbert dashboard is reviewed by a specialist who confirms it makes sense before you ever see it.",
  points: [
    { title: "Curated data", body: "Not aggregated noise. Every dashboard is specialist-reviewed and quality-assured before you see it." },
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
      body: "See what the market is doing and when your skills are in demand, alongside the wider economic picture, CPI, employment trends, interest rates and more, to support your reward reviews.",
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
    "Market rates move with inflation, talent scarcity and sector trends. A tool that refreshes once a year can't keep pace. Zigbert updates monthly, so your decisions always reflect the market right now and support your reward cycle all year round. It's all one simple monthly subscription, with pay, benefits, updates and expert support included.",
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
    {
      title: "Track your progress over time",
      body: "Because the data refreshes every month, you can watch how your pay position moves and how your overall paybill is tracking against the market, turning benchmarking into an ongoing measure of progress rather than a once-a-year snapshot.",
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
  { value: "Expert", label: "every dashboard specialist-reviewed" },
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
    "Zigbert is built by TwentySix Consulting, a UK reward consultancy specialising in intelligent pay benchmarking. For two decades we've helped organisations of every size get pay and benefits right, combining serious market data with the judgement of people who do reward for a living.",
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
  closing: "If you're trying to get pay right without the guesswork, we'd love to help.",
};

// ── Methodology teaser (links to /methodology) ──────────────────────
export const methodologyTeaser = {
  eyebrow: "For the curious",
  title: "How the numbers are built",
  body:
    "No black box. Zigbert draws on a current database of over 1.5 million UK salary records, captured from job boards nationwide and classified by role, level and region. Then every dashboard is reviewed by a specialist. Here's exactly how.",
  cta: "Read The Full Methodology",
};

// ── Waitlist (slide 15) ─────────────────────────────────────────────
export const waitlist = {
  eyebrow: "Be first in · Launching September 2026",
  title: "Join the Zigbert waitlist",
  body: "Sign up now and we'll invite you the moment Zigbert opens in September 2026. It only takes a few seconds, and early sign-ups get first access and launch pricing.",
  contactLead: "Prefer to talk first? Get in touch to find out more:",
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
      heading: "Real, live job postings",
      paragraphs: [
        "Zigbert is built on real job adverts, collected every day from dozens of UK job boards, both the big generalist platforms and specialist boards.",
        "Each posting we capture records the job title, employer, location, full description, advertised salary where it's disclosed, employment type and date. That adds up to a current database of over 1.5 million UK salary records, growing every day. Where the same role is advertised in several locations, we keep each one, so genuine regional pay differences are captured rather than averaged away.",
        "Because it is built from live adverts rather than an annual survey, the picture moves with the market in real time. Traditional salary surveys rely on a smaller pool of employers volunteering figures once a year, so they are often months out of date by the time they are published. Zigbert reflects what employers are actually offering right now, across far more roles and organisations, so you can see pay shifting before it costs you a hire.",
        "Long before any of this was automated, our team built the dataset by hand, so it reaches back over the past decade rather than only today's market. That history lets us see how pay has actually moved over time, not just take a snapshot.",
      ],
    },
    {
      heading: "Cleaned, checked and monitored",
      paragraphs: [
        "Raw adverts are messy, so every record is standardised before it is used. Salaries are parsed from the many formats employers use (ranges, hourly or annual, vague wording), locations are standardised, duplicate adverts are removed, and thin or low-quality postings are filtered out.",
        "From there the dataset is continuously checked and monitored for quality, so anything that doesn't look right is caught and corrected before it can affect the data behind your dashboard.",
      ],
    },
    {
      heading: "Classified to compare like with like",
      paragraphs: [
        "A salary figure only means something next to genuinely comparable roles. So every posting is classified on two dimensions: its function (what the role actually does) and its industry (the sector it sits in), using a classification built specifically for the UK labour market, with a clear definition for every category.",
        "Function and industry together define the comparator group. A finance role in investment banking is measured against a different market than a finance role in a charity, even for a similar job. The classification runs on our own model, which our data scientist continues to train and build on, and produces a confidence score for every record; anything uncertain is routed to a specialist to check before it is used.",
      ],
    },
    {
      heading: "Grounded in official data",
      paragraphs: [
        "Our own data is supplemented with authoritative external sources, including ONS ASHE earnings figures, sector employment data, regional wage indices and broader economic indicators such as inflation and interest rates.",
        "That keeps every benchmark anchored to the wider economy, not just to whatever happens to be advertised this week, and lets your dashboard set pay in the context of what the market is actually doing.",
      ],
    },
    {
      heading: "A few details, one rate",
      paragraphs: [
        "For all of that depth, getting a benchmark is simple. You tell us a few details about a role, its title, function and level, your industry and location, your organisation size and a little more where it helps, and Zigbert returns the market rate.",
        "Those details do a lot of work: they pin down exactly what the role is, account for sector norms and regional variation across the UK, and make sure you are compared with organisations that genuinely look like yours.",
      ],
    },
    {
      heading: "Expert review",
      paragraphs: [
        "This is what sets Zigbert apart. Self-service pay tools can produce results that simply don't look right: outliers, mismatched roles, or data drawn from the wrong comparator group. Without expert knowledge, it's hard to know what to trust.",
        "Every Zigbert dashboard is reviewed by one of our reward specialists, who confirms it makes sense before publication. Behind the scenes, accuracy is measured continuously and by category, records are reviewed daily and weekly, and the classification is refreshed and version-controlled on a regular cycle.",
        "You get the speed of a dashboard with the reassurance that an expert has looked at it and said, “Yes, that's good.”",
      ],
    },
    {
      heading: "Refreshed monthly",
      paragraphs: [
        "Market rates move with inflation, talent scarcity and sector trends, so a benchmarking tool that refreshes once a year can't keep pace. The underlying data updates continuously, and your dashboard refreshes every month with newly validated data across roles and industries.",
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
