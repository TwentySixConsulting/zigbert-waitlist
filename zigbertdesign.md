# Zigbert — Design System Reference

The brand of **Zigbert**, the Reward Intelligence product by **TwentySix Consulting**.
Use this as the single source of truth when building any Zigbert-branded product, page, or asset.

> Direction: **trusted but fresh** — serious and credible enough for pay decisions, warm enough to feel human. A **logo-blue** drives actions, a **warm clay** carries brand highlights, deep navy carries text and structure, all on a near-white warm canvas. (The old gold palette is retired — no gold anywhere.)

> This doc mirrors the live tokens in `src/index.css` (Tailwind v4 `@theme`). If the two ever disagree, `src/index.css` wins.

---

## 1. Colour palette

Three accents, each with a clear job:
- **Logo blue** → **actions** (buttons/CTAs, the launch bar). It's the logo's own blue, so actions feel on-brand.
- **Clay** → **brand highlights**, used sparingly (accent words, big stat numbers, eyebrows, badges, quote panels).
- **Steel** → a quiet **cool secondary** for data/UI (chart accents, benefits marks, secondary icons).

Navy carries text and structure; slate is the logo's top-dot tone (also used in chart bands).

| Token | Hex | Role |
|---|---|---|
| **Ink** (navy) | `#121C2B` | Primary text, headings, structure, dark sections |
| **Cream** (canvas) | `#FBFBF8` | Near-white warm page background |
| **Surface** | `#FFFFFF` | Cards, panels |
| **Muted** | `#4B5563` | Secondary / body-supporting text |
| **Line** | `#E9E3D8` | Warm hairline borders, dividers |
| **Clay** ⭐ | `#C9785A` | Brand accent — highlights, active marks, accent fills |
| **Clay deep** | `#B0603F` | Hover / end of clay gradient; clay text on light |
| **Clay bright** | `#DDA288` | Lighter clay for use on dark/navy backgrounds |
| **Clay tint** | `#E8D8CE` | Soft clay fills (tags, badges, quote panels) |
| **Slate** (logo blue) | `#7285A5` | The logo's top dot; base of the action blue; chart marks |
| **Slate tint** | `#D9E0EA` | Soft slate fills (e.g. benchmark range bands) |
| **Steel** | `#4B5563` | Cool blue-grey secondary accent (charts, benefits, quiet marks) |
| **Steel bright** | `#8794A6` | Lighter steel for dark backgrounds |
| **Steel tint** | `#E4E7EC` | Soft steel fills |

### Action blue (buttons / CTAs / launch bar)
Applied via component styles (`.btn-primary`, `.blue-gradient`), not a `@theme` colour token:
- **Solid CTA:** `#5E7191`  ·  **hover:** `#54657F`  (a deeper shade of the logo slate)
- **Shadow:** `0 12px 26px -10px rgba(94,113,145,.55)`
- **Announcement-bar gradient:** `linear-gradient(135deg, #8497B5 0%, #7285A5 52%, #5E7191 100%)`

### Logo dot colours
- Top dot (slate / logo blue): `#7285A5`
- Bottom dot (clay / terracotta): `#C9785A`
- Bars & wordmark (navy): `#121C2B`

### Signature gradients
- **Clay gradient** (decorative fills, badges, small accents):
  `linear-gradient(135deg, #D88A6B 0%, #C9785A 52%, #B0603F 100%)` — class `.accent-gradient`
- **Clay text gradient** (big numbers / accent words, readable on light or dark):
  `linear-gradient(135deg, #DDA288 0%, #C9785A 52%, #B0603F 100%)` with `background-clip: text` — class `.accent-text`
- **Blue gradient** (launch/announcement bar): as above — class `.blue-gradient`

### Usage rules
- **Do**: use **logo blue for anything clickable/primary**; let **clay** earn attention as a rare highlight (accent words, big figures, eyebrows); use **steel/slate** as calm secondaries for data and support; keep generous near-white space; use ink for text/structure.
- **Don't**: no gold anywhere; don't recolour the logo; don't make clay a second "button" colour (blue owns actions); don't put clay text on clay fill (contrast fails); don't scatter accents across many elements at once.
- **Contrast**: ink `#121C2B` and clay-deep `#B0603F` on the near-white canvas both pass WCAG AA for text. White on the solid CTA blue `#5E7191` is fine for buttons. On navy sections use white text with **clay-bright** eyebrows/accents.

---

## 2. Typography

| Use | Font | Weights | Notes |
|---|---|---|---|
| **Display / headings** | **Poppins** | 500, 600, 700, 800 | Geometric, rounded — matches the logo wordmark |
| **Body / UI** | **Inter** | 400, 500, 600, 700 | Clean, neutral, highly legible |

- Both are Google Fonts. Load:
  `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap`
- Display headings: tighten tracking to `-0.02em`, line-height ~`1.04` (class `.display`).
- Eyebrows / kickers: Poppins, uppercase, `letter-spacing: 0.2em`, ~`0.72rem`, weight 600, **clay-deep** (clay-bright on dark) — class `.eyebrow`.
- Stacks: `"Poppins", ui-sans-serif, system-ui, sans-serif` and `"Inter", ui-sans-serif, system-ui, sans-serif`.
- The **logo wordmark** is set in / matched to **Poppins** (SemiBold–Bold). Note the logo ships as a PNG (font baked in); there is no vector master in the repo, so Poppins is the intended match rather than a guaranteed original.

---

## 3. Logo

**Wordmark + mark lockup.** The mark is a benchmark / "divide" glyph: a slate dot, two offset navy bars, and a clay dot — balanced, suggesting comparison and where you sit on a range.

### Assets (in this repo's `public/`)
| File | What it is | Use on |
|---|---|---|
| `zigbert-logo.png` | Full lockup (mark + "Zigbert"), navy | Light backgrounds (cream / white) |
| `zigbert-logo-light.png` | Full lockup, navy recoloured to cream (dots kept) | Dark / navy backgrounds |
| `zigbert-mark.png` | Standalone mark, navy | Light backgrounds, watermarks |
| `zigbert-mark-light.png` | Standalone mark, cream | Dark backgrounds, watermarks |
| `favicon.png` | Mark centred on a cream rounded tile | Browser tab / app icon |
| `og-cover.png` | 1200×630 social share image (centred lockup + headline) | Link previews (OG/Twitter) |

All logo PNGs have transparent backgrounds. Lockup aspect ratio ≈ **3.33 : 1**; mark ≈ **0.74 : 1**.

### Logo rules
- **Never distort.** Always lock the aspect ratio (set height, let width auto). In flex containers add `align-self: flex-start` so it isn't stretched.
- On dark backgrounds use the `-light` variants (navy parts become cream; the slate + clay dots stay).
- Keep clear space around it; don't recolour, outline, add gradients to, or rotate the logo.
- In code, prefix asset paths with `import.meta.env.BASE_URL` so they resolve on the domain (see `Wordmark.tsx`).
- Pair with the descriptor **"Pay & Benefits Intelligence"** where buyers are cold.

---

## 4. Brand voice & positioning

- **Product name:** Zigbert · **Parent:** TwentySix Consulting (a UK reward consultancy)
- **Hero headline:** *"Know what to pay. And trust the answer."*
- **Tagline (sign-off / contact):** *"Stop arguing about pay. Start delivering."*
- **One-liner:** A clear market rate for every role — drawn from a database of **over 1.5 million UK salary records** and checked by a reward specialist before it reaches you.
- **Endorsement line (quiet, once per page):** *"by TwentySix Consulting · 20 years of reward expertise"*
- **Core promise:** the expert-reviewed difference — *"Yes, that's good."* No "mad results". (Claim **"every dashboard is specialist-reviewed"**, not "every benchmark".)
- **Status:** Live since September 2026 · monthly subscription (pay + benefits + updates + support).
- **Tone:** professional yet approachable; plain English; non-bureaucratic; confident, not hypey.

### Links
- Site: https://twentysixconsulting.co.uk
- Contact: consultants@twentysixconsulting.co.uk
- LinkedIn: https://uk.linkedin.com/company/twentysixreward
- Live product site: https://zigbert.co.uk

---

## 5. UI tokens & component patterns

These mirror the Tailwind v4 `@theme` setup in `src/index.css` — reuse them for consistency.

- **Corner radius:** cards/panels `1.25rem` (`--radius-xl2`); inputs `0.85rem`; pills/buttons fully rounded (`9999px`).
- **Card:** white surface, `1px` line border, soft shadow:
  `box-shadow: 0 1px 2px rgba(18,28,43,.04), 0 18px 46px -28px rgba(18,28,43,.26)`
- **Primary button (`.btn-primary`):** **solid logo-blue `#5E7191`**, white text, rounded-full, shadow `0 12px 26px -10px rgba(94,113,145,.55)`; on hover darken to `#54657F` + lift `-1px`.
- **Ghost button (`.btn-ghost`):** white, `1px` line border, ink text; hover border → clay, text → clay-deep.
- **Announcement / launch bar:** full-width `.blue-gradient`, white text.
- **Input focus (`.field`):** clay border + ring `0 0 0 3px rgba(201,120,90,.22)`.
- **Focus-visible ring:** `2px solid` clay, offset `2px` (keyboard only).
- **Canvas glow (`.canvas-glow`):** soft radial clay (16%) + slate (12%) glows on the near-white canvas (hero / waitlist backdrops).
- **Dark sections:** ink `#121C2B` background, white text, **clay-bright** eyebrows, clay text-gradient for big numbers; a faint mark watermark at ~6% opacity adds depth.
- **Motion:** scroll-reveal (fade + rise) via the `Reveal` wrapper; all animation respects `prefers-reduced-motion`.

### Tailwind v4 note
Tokens are declared in CSS with `@theme { --color-clay: #c9785a; ... }` (no `tailwind.config.ts`). They auto-generate utilities like `bg-clay`, `text-ink`, `border-line`, `bg-clay-tint`, `text-clay-deep`, `text-slate`, `bg-steel-tint`, `text-steel`, etc. Fonts via `--font-display` / `--font-sans`. The action blue (`#5E7191`) and `.blue-gradient` live as component styles, not colour tokens.

---

## 6. Quick copy-paste (CSS variables)

```css
:root {
  /* core */
  --color-ink:         #121C2B;
  --color-cream:       #FBFBF8;  /* near-white warm canvas */
  --color-surface:     #FFFFFF;
  --color-muted:       #4B5563;
  --color-line:        #E9E3D8;
  /* clay — brand highlight accent */
  --color-clay:        #C9785A;
  --color-clay-deep:   #B0603F;
  --color-clay-bright: #DDA288;
  --color-clay-tint:   #E8D8CE;
  /* slate — logo blue / chart bands */
  --color-slate:       #7285A5;
  --color-slate-tint:  #D9E0EA;
  /* steel — cool secondary */
  --color-steel:       #4B5563;
  --color-steel-bright:#8794A6;
  --color-steel-tint:  #E4E7EC;
  /* action blue (buttons / launch bar — component styles) */
  --cta-blue:          #5E7191;
  --cta-blue-hover:    #54657F;
  /* type */
  --font-display: "Poppins", ui-sans-serif, system-ui, sans-serif;
  --font-sans:    "Inter", ui-sans-serif, system-ui, sans-serif;
}
```
