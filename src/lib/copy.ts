// Centralised copy for the Zigbert marketing site.
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
  launch: "Now live!",
  taglineLead: "Stop arguing about pay.",
  taglineAccent: "Start delivering.",
};

// ── Launch announcement (top bar) ───────────────────────────────────
export const launch = {
  badge: "Zigbert is now live!",
  banner: "Zigbert is now live!",
  bannerStrong: "Book a demo and see your own roles benchmarked.",
  cta: "Get In Touch",
};

export const hero = {
  eyebrow: "Reward intelligence · Now live!",
  headline: "Know what to pay.",
  headlineAccent: "And trust the answer.",
  subhead:
    "Zigbert gives you a clear market rate for every role, drawn from our database of over 1.5 million UK salary records and reviewed by our reward specialists. No complexity, no confusion, no second-guessing the data.",
  ctaPrimary: "Get In Touch",
  ctaSecondary: "See How It Works",
  note: "Tell us a little about your organisation and we'll set up a demo built around your roles.",
};

// ── What is Zigbert? (explainer, two co-equal pillars) ──────────────
export const whatIsZigbert = {
  eyebrow: "What is Zigbert?",
  title: "Your pay and benefits, through the market's eyes",
  lede:
    "Zigbert is a reward intelligence platform from TwentySix Consulting. It answers the two questions every organisation wrestles with — are we paying the right rate, and is our benefits offer competitive? — in one simple dashboard, grounded in real market data and checked by a reward specialist before it reaches you.",
  period: "Available now",
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

// ── Contact / demo request (slide 15) ───────────────────────────────
export const contact = {
  eyebrow: "Now live! · Book a demo",
  title: "Talk to us about Zigbert",
  body: "Zigbert is now live and taking on new organisations. Leave your details and one of our reward specialists will come back to you with a walkthrough, pricing, and a demo built around the roles you care about.",
  reassure: "Not sure it's the right fit yet? Ask us anything. We are happy to talk it through and show you the dashboard before you commit to anything.",
  contactLead: "Prefer to talk first? Get in touch to find out more:",
  perk:
    "Want to see it on your own data? Send us your 5–10 hardest roles and we'll show you the market rate, how confident the benchmark is, and where your pay sits.",
  success: {
    title: "Thank you, we've got your details!",
    body: "One of our reward specialists will be in touch shortly to arrange your demo and talk you through pricing.",
  },
  successReturning: {
    title: "You're already on our list!",
    body: "We already have your details, so there's no need to do anything else. Someone will be in touch shortly about your demo and pricing.",
  },
  fields: {
    name: "Your name",
    company: "Company",
    email: "Work email",
    size: "Company size (optional)",
    role: "Your role (optional)",
  },
  sizes: ["1–49", "50–99", "100–149", "150–199", "200–249", "250–299", "300–499", "500+"],
  submit: "Get In Touch",
  submitting: "Sending…",
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
        "A salary figure only means something next to genuinely comparable roles. So every posting is classified on three dimensions: its function (what the role actually does), its industry (the sector it sits in), and its job level (how senior the role is, for example manager or senior), using a classification built specifically for the UK labour market, with a clear definition for every category.",
        "Function, industry and job level together define the comparator group. A finance role in investment banking is measured against a different market than a finance role in a charity, even for a similar job. The classification runs on our own model, which our data scientist continues to train and build on, and produces a confidence score for every record; anything uncertain is routed to a specialist to check before it is used.",
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
    body: "Zigbert is now live! Get in touch and we'll walk you through it with your own roles in front of you.",
    button: "Get In Touch",
  },
};

// ── FAQ page ────────────────────────────────────────────────────────
// The questions shown on /faq, as a flat list of accordions.
// Zigbot also reads these as part of its knowledge base.
export const faq = {
  titleLead: "Frequently asked",
  titleAccent: "questions",
  lede: "Everything you might want to know about Zigbert — what it is, where its data comes from, how it compares, and how to use it.",
  footLead: "Still need help? Email us at",
  items: [
    {
      q: "What is Zigbert?",
      kw: "what is overview product platform summary",
      a: "Zigbert is a UK pay and benefits benchmarking platform — the Reward Intelligence product from TwentySix Consulting. It gives employers a clear market rate for every role, drawn from over 1.5 million UK salary records and checked by a reward specialist before it reaches you.",
    },
    {
      q: "Who is behind Zigbert?",
      kw: "who behind made makes company founder owner owns runs built created team twentysix consultancy",
      a: "Zigbert is made by TwentySix Consulting, a UK reward consultancy with 20 years of experience. That advisory heritage is why every dashboard is reviewed by a reward specialist rather than served straight from an algorithm — the expertise sits behind the product, not just alongside it.",
    },
    {
      q: "Where does Zigbert's salary data come from?",
      kw: "where source sources data database origin come from adverts advertised scraped scraping collected gathered job boards postings listings methodology method",
      a: "Zigbert draws on a database of over 1.5 million UK salary records, built from live job adverts and supplemented with official sources including the ONS Annual Survey of Hours and Earnings (ASHE). Because it reads pay from adverts as they're posted, it reflects what employers are offering now, not figures volunteered months ago.",
    },
    {
      q: "How accurate is Zigbert's benchmarking data?",
      kw: "accurate accuracy reliable quality trust confidence correct right precise checks checked numbers figures verified validated outliers",
      a: "Every Zigbert dashboard is reviewed by a reward specialist before it reaches you, and each figure carries a confidence indicator so you can see how strong the underlying data is. Rather than return a raw average, Zigbert screens out misleading outliers and applies expert judgement — the step that stops you acting on a mad result.",
    },
    {
      q: "How is Zigbert different from free tools like Glassdoor or Payscale?",
      kw: "glassdoor payscale indeed reed totaljobs linkedin free crowdsourced self reported tools sites compare different better than versus good enough",
      a: "Unlike free crowd-sourced tools, Zigbert's data is reviewed by a reward specialist, compared on a genuine like-for-like basis, and screened for misleading outliers. Free tools rely largely on self-reported figures with little quality control, which is why their numbers can be so wide or skewed.",
    },
    {
      q: "How is Zigbert different from a traditional salary survey?",
      kw: "survey surveys traditional annual yearly participate buy purchase subscribe already different versus compare better than",
      a: "A traditional salary survey collects figures once a year from employers who choose to take part; Zigbert reads pay from live job adverts, so its data moves with the market in near real time. That makes it both more current and far broader than a survey that depends on voluntary participation.",
    },
    {
      q: "How often is Zigbert's data updated?",
      kw: "often updated refresh refreshed frequency monthly current recent new latest up to date stale old fresh real time",
      a: "The underlying salary data is updated continuously as new job adverts are published, and your dashboard refreshes monthly. This means your benchmarks track the market as it moves, rather than being fixed to a single annual snapshot.",
    },
    {
      q: "Does Zigbert benchmark benefits as well as pay?",
      kw: "benefits perks package cover covers include included bonus bonuses holiday pension healthcare car total reward as well besides also good",
      a: "Yes — Zigbert benchmarks benefits alongside base pay, giving you a view of total reward rather than salary alone. It's Pay & Benefits Intelligence: two roles on the same salary can offer very different overall packages.",
    },
    {
      q: "How does Zigbert decide which roles to compare?",
      kw: "compare comparator comparators comparison group peer pick choose select decide match matched matching similar like for like classification classified classify methodology method",
      a: "Zigbert builds a comparator group from three things: the role's function, the industry, and the job level. This makes sure you're compared against genuinely similar roles, not anything that happens to share a job title.",
    },
    {
      q: "What information do I need to get a benchmark?",
      kw: "information details need needed provide give required require input supply submit from me send upload",
      a: "You provide the role title, its function and level, the industry, the location, and your organisation's size. Those details let Zigbert assemble a like-for-like comparator group and return a market rate specific to your situation.",
    },
    {
      q: "Is Zigbert available now, and how is it priced?",
      kw: "launch launching launched release released available live now yet ready start using when date soon priced pricing buy subscribe",
      a: "Yes, Zigbert is now live! It runs as a monthly subscription covering pay and benefits benchmarking, ongoing data updates, and support. Get in touch and we'll talk you through pricing for your organisation and set up a demo.",
    },
    {
      q: "Can I trust benchmarks built from job-advert data?",
      kw: "trust trustworthy reliable advert adverts advertised job postings listings valid credible real",
      a: "Yes — advertised pay is what employers are genuinely offering to compete for talent, which makes it a strong, current signal of the live market. Zigbert strengthens it further with outlier screening and a reward specialist's review of every dashboard, so you're never relying on raw advert data alone.",
    },
  ],
};

// ── Zigbot (FAQ chat assistant) ─────────────────────────────────────
// Zigbot's knowledge base is the FAQ items above PLUS the extras below.
// To teach it something new, add another { q, a, kw } entry to `extras`.
// `kw` is a space-separated list of words a visitor might use for that
// question; it is weighted as heavily as the question itself.
export const zigbot = {
  launch: "Ask Zigbot",
  name: "Zigbot",
  role: "FAQ assistant · here to help",
  placeholder: "Ask about Zigbert…",
  hello:
    "Hi, I'm Zigbot 👋 Ask me anything about Zigbert — what it does, where our data comes from, or how to get a benchmark.",
  typing: "Zigbot is typing…",
  greeting:
    "Happy to help! Ask me about Zigbert — what it is, where the data comes from, how it compares, or how to get a benchmark.",
  fallback:
    "I don't have a specific answer to that one. The questions above cover the essentials — or a Zigbert specialist can help directly at consultants@twentysixconsulting.co.uk. Zigbert is now live! Get in touch at zigbert.co.uk to arrange a demo.",
  // Shown instead of guessing when the question is on topic but too vague,
  // or when two answers are both plausible.
  unsure: "I'm not certain I've understood. Is one of these what you're after?",
  ambiguous: "I can help with that — which did you mean?",
  // Offered when the chat first opens, to show what Zigbot is good for.
  starters: [
    "Where does your data come from?",
    "How much does it cost?",
    "How is this different from Glassdoor?",
  ],
  extras: [
    {
      q: "Who is Zigbert for?",
      kw: "who for audience users customers hr founder hiring manager reward team",
      a: "Zigbert is built for employers making pay decisions — HR teams, reward managers, founders, and hiring managers who need a defensible market rate rather than a guess. It's designed to be usable whether or not you have a dedicated reward function.",
    },
    {
      q: "What does Pay and Benefits Intelligence mean?",
      kw: "reward intelligence meaning term total package",
      a: "It means Zigbert benchmarks the whole package — base pay and benefits — not just salary in isolation. Two roles on the same salary can offer very different total reward, and Zigbert is built to show that.",
    },
    {
      q: "How many salary records is Zigbert based on?",
      kw: "many number size dataset database big large million records volume scale how big",
      a: "Over 1.5 million UK salary records. That scale is what lets Zigbert build a meaningful comparator group even for more specific roles.",
    },
    {
      q: "Does Zigbert use official data sources like ONS?",
      kw: "ons official government ashe source sources statistics",
      a: "Yes. Alongside live job-advert data, Zigbert draws on official sources including the ONS Annual Survey of Hours and Earnings (ASHE) to ground its figures.",
    },
    {
      q: "Is Zigbert's data checked by a human or fully automated?",
      kw: "human automated automatic algorithm checks checked checking review manual robot ai who person specialist numbers figures",
      a: "Both — the data is gathered and processed automatically at scale, then a reward specialist reviews every dashboard before it reaches you. That human review is the core of the “yes, that's a sensible number” promise.",
    },
    {
      q: "Is Zigbert better than running my own salary survey?",
      kw: "own diy survey surveys run myself build better already buy purchase instead",
      a: "For most employers, yes — a DIY survey is slow, depends on who's willing to share, and dates quickly. Zigbert gives you a broader, continuously refreshed dataset with expert review built in, without the legwork.",
    },
    {
      q: "What's the difference between advertised pay data and survey data?",
      kw: "advertised advert survey difference live",
      a: "Advertised pay reflects what employers are offering right now to attract candidates; survey data reflects what people were paid when the survey was run, often months earlier. Zigbert uses advertised data so your benchmark reflects the market you're actually hiring in.",
    },
    {
      q: "Why not just use ONS data directly?",
      kw: "ons directly just national average",
      a: "ONS data is authoritative but broad and lagging — great for national averages, less so for a specific role in a specific sector today. Zigbert uses ONS to ground its figures but layers live, role-level advert data on top so the answer is specific and current.",
    },
    {
      q: "How do I get a salary benchmark from Zigbert?",
      kw: "how get benchmark work works working process steps run start use want need obtain request",
      a: "You enter a few details about the role — its title, function and level, the industry, the location, and your organisation's size — and Zigbert returns a market rate with its supporting range. The result comes as a specialist-reviewed dashboard, not a bare number.",
    },
    {
      q: "How do I know if I'm paying a role competitively?",
      kw: "paying competitively competitive fair enough underpaying overpaying right rate market rate justify justifying case evidence board pay rise increase",
      a: "Benchmark the role in Zigbert and compare your current pay against the market range for that function, level, industry and region. If you're sitting below the range, you're at risk on retention and hiring — and Zigbert shows exactly where you fall.",
    },
    {
      q: "How much should I offer for a new hire?",
      kw: "offer offering new hire hiring candidate recruit recruiting starting salary price a job job offer package how much pay",
      a: "Run the role through Zigbert to get the current market rate and range, then position your offer within it based on the candidate's experience and how competitive you need to be. Because the data is advert-based, it reflects what other employers are offering right now.",
    },
    {
      q: "How do I set a salary range for a new role?",
      kw: "set setting range ranges band bands pay bands minimum maximum midpoint grade grades new role structure",
      a: "Zigbert gives you the market rate plus the supporting range for the role, which you can use to set a sensible minimum, midpoint and maximum — anchored to real market data rather than internal precedent alone.",
    },
    {
      q: "How do I check if my team is underpaid versus the market?",
      kw: "team underpaid below market retention risk leaving leave quit staff employees people paid",
      a: "Benchmark each team member's role and compare their pay to the market range Zigbert returns. Anyone consistently below range is a retention risk you can now evidence and act on.",
    },
    {
      q: "What's a competitive benefits package in the UK?",
      kw: "competitive benefits package perks total reward cover include good counts typical standard normal",
      a: "Zigbert benchmarks benefits alongside pay, so you can see how your package compares on total reward rather than salary alone — helping you spot where you're competitive and where you're quietly behind.",
    },
    {
      q: "What stops Zigbert producing a misleading figure?",
      kw: "misleading wrong mistake error mad result inaccurate outlier outliers weird strange odd skewed",
      a: "Two things: automated screening that removes outliers and thin data, and a reward specialist who reviews every dashboard before it reaches you. That combination is designed specifically to avoid the mad result that erodes trust in automated tools.",
    },
    {
      q: "Where does Zigbert's data not work well?",
      kw: "limitations limits weakness rare unusual obscure very senior senior executive director niche bespoke specialist gaps confidence weak edge cases",
      a: "Zigbert is strongest where roles are commonly advertised; for very rare, senior or highly bespoke roles, advert data thins out — and the confidence indicator tells you when that's the case. Being upfront about this is part of how Zigbert earns trust.",
    },
    {
      q: "How much does Zigbert cost?",
      kw: "cost costs price pricing expensive cheap subscription fee plan much money budget afford monthly yearly annual per month per year contract commitment minimum term notice cancel paying for",
      a: "Zigbert is a monthly subscription covering pay and benefits benchmarking, ongoing data updates, and support. The exact price depends on what you need, so get in touch at zigbert.co.uk or email consultants@twentysixconsulting.co.uk and we'll give you a figure.",
    },
    {
      q: "How do I get started with Zigbert?",
      kw: "get started start sign up signup join buy subscribe onboard set up setup register interested contact speak talk",
      a: "Get in touch at zigbert.co.uk or email consultants@twentysixconsulting.co.uk. We'll arrange a demo, talk through pricing and get you set up.",
    },
    {
      q: "Can I see a demo of Zigbert?",
      kw: "free trial demo try test preview sample see it walkthrough tour show me",
      a: "Yes. Get in touch at zigbert.co.uk or email consultants@twentysixconsulting.co.uk and we'll walk you through the dashboard, using roles relevant to you so you can see exactly what you'd get.",
    },
    {
      q: "Is my data kept confidential when I use Zigbert?",
      kw: "confidential confidentiality privacy private secure security gdpr compliant dpa data protection safe kept competitors others see shared",
      a: "We take data handling seriously. For the full detail on how your data is stored and used, contact consultants@twentysixconsulting.co.uk and we'll talk you through it.",
    },
    {
      q: "Does Zigbert cover my industry and region?",
      kw: "cover covers industry industries sector sectors charity charities nonprofit housing retail tech finance healthcare manufacturing region regional location area geography uk england scotland wales britain national london manchester north south city local",
      a: "Zigbert covers a broad range of UK industries and adjusts for regional pay differences across the country. To check coverage for a specific sector or location, contact consultants@twentysixconsulting.co.uk.",
    },
    {
      q: "Can Zigbert benchmark a whole pay structure, not just one role?",
      kw: "whole structure multiple many roles jobs bulk batch framework grades all entire every our roles headcount",
      a: "For details on benchmarking multiple roles or a full pay structure, contact consultants@twentysixconsulting.co.uk and we'll talk through how best to cover it.",
    },
    {
      q: "Does Zigbert work for small companies or only large ones?",
      kw: "small large company size sme startup scaleup enterprise big only person people employees headcount staff team size",
      a: "Zigbert asks for your organisation's size precisely so it can benchmark fairly for companies of different scales — so it isn't just for large employers.",
    },
    {
      q: "How quickly do I get a result?",
      kw: "quickly fast speed turnaround lead time long how long wait waiting instant days hours",
      a: "Every dashboard is reviewed by a reward specialist before it reaches you, so turnaround depends on how many roles you're benchmarking. Get in touch at zigbert.co.uk and we'll give you a timescale for your list of roles.",
    },
    {
      q: "How does Zigbert handle roles with no advertised salary?",
      kw: "advertised undisclosed hidden missing blank stated advert job salary without none unstated",
      a: "Where a role's pay isn't stated in an advert, it doesn't drag the benchmark — Zigbert works from the records where pay is disclosed and flags where data is thinner via the confidence indicator.",
    },
  ],
};
