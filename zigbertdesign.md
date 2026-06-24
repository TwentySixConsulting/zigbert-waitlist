# Zigbert — Design System Reference

The brand of **Zigbert**, the Reward Intelligence product by **TwentySix Consulting**.
Use this as the single source of truth when building any Zigbert-branded product, page, or asset.

> Direction: **trusted but fresh** — serious and credible enough for pay decisions, warm enough to feel human. Warm clay accent on an off-white canvas, deep navy for structure. Off gold (the old gold palette is retired).

---

## 1. Colour palette

The "one lively accent" rule: **clay is the only accent** — use it sparingly (one key action or highlight per view). Navy carries text and structure; slate is a quiet supporting tone (it lives in the logo mark).

| Token | Hex | Role |
|---|---|---|
| **Ink** (navy) | `#121C2B` | Primary text, headings, structure, dark sections |
| **Cream** (canvas) | `#F4F1EA` | Warm off-white page background |
| **Surface** | `#FFFFFF` | Cards, panels |
| **Muted** | `#4B5563` | Secondary / body-supporting text |
| **Line** | `#E7E0D4` | Warm hairline borders, dividers |
| **Clay** ⭐ | `#C9785A` | **The accent** — primary CTAs, key highlights, active marks |
| **Clay deep** | `#B0603F` | Hover state / end of clay gradient |
| **Clay bright** | `#DDA288` | Lighter clay for use on dark/navy backgrounds |
| **Clay tint** | `#E8D8CE` | Soft clay fills (tags, badges, quote panels) |
| **Slate** | `#7285A5` | Supporting tone (the logo's top dot); secondary data marks |
| **Slate tint** | `#D9E0EA` | Soft slate fills (e.g. benchmark range bands) |

### Logo dot colours
- Top dot (slate): `#7285A5`
- Bottom dot (clay / terracotta): `#C9785A`
- Bars & wordmark (navy): `#121C2B`

### Signature gradients
- **Clay gradient** (buttons, accent fills):
  `linear-gradient(135deg, #D88A6B 0%, #C9785A 52%, #B0603F 100%)`
- **Clay text gradient** (big numbers / accent words, readable on light or dark):
  `linear-gradient(135deg, #DDA288 0%, #C9785A 52%, #B0603F 100%)` with `background-clip: text`

### Usage rules
- **Do**: let clay earn attention by being rare; use ink for text/structure; keep generous cream space; use slate as a calm secondary, never as a second accent shouting for attention.
- **Don't**: no gold anywhere; no clay text on clay fill (contrast fails); don't scatter the accent across many elements; don't recolour the logo.
- **Contrast**: ink `#121C2B` on cream `#F4F1EA`, and clay `#B0603F` (deep) on cream, both pass WCAG AA for text. On navy backgrounds use white text and **clay-bright** for accents.

---

## 2. Typography

| Use | Font | Weights | Notes |
|---|---|---|---|
| **Display / headings** | **Poppins** | 500, 600, 700, 800 | Geometric, rounded — matches the logo wordmark |
| **Body / UI** | **Inter** | 400, 500, 600, 700 | Clean, neutral, highly legible |

- Both are Google Fonts. Load:
  `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap`
- Display headings: tighten tracking to `-0.02em`, line-height ~`1.04`.
- Eyebrows / kickers: Poppins, uppercase, `letter-spacing: 0.2em`, ~`0.72rem`, clay-deep (clay-bright on dark).
- Stacks: `"Poppins", ui-sans-serif, system-ui, sans-serif` and `"Inter", ui-sans-serif, system-ui, sans-serif`.

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
| `favicon.png` | Mark on a cream rounded square (64×64) | Browser tab / app icon |
| `favicon.svg` | Vector fallback of the mark | Scalable favicon |

All PNGs have transparent backgrounds. Lockup aspect ratio ≈ **3.33 : 1**; mark ≈ **0.74 : 1**.

### Logo rules
- **Never distort.** Always lock the aspect ratio (set height, let width auto). In flex containers add `align-self: flex-start` so it isn't stretched.
- On dark backgrounds use the `-light` variants (navy parts become cream; the slate + clay dots stay).
- Keep clear cream space around it; don't recolour, outline, add gradients to, or rotate the logo.
- Pair with the descriptor **"Pay & Benefits Intelligence"** (or "Reward Intelligence") where buyers are cold.

### Source file
Master logo image: `~/Downloads/zigbertnew.png` (white background, contains lockup + standalone mark side by side). The transparent assets above were cropped and background-removed from it. **If a vector (SVG) master exists, prefer it** for crisp scaling.

---

## 4. Brand voice & positioning

- **Product name:** Zigbert · **Parent:** TwentySix Consulting
- **Strapline:** *"Reward Intelligence You Can Trust"* (also: "Pay Benchmarking, Simplified")
- **One-liner:** A clear market rate for every role — drawn from ~2M UK salaries a year and reviewed by reward specialists.
- **Endorsement line (quiet, once per page):** *"by TwentySix Consulting · 20 years of reward expertise"*
- **Core promise:** the expert-reviewed difference — *"Yes, that's good."* No "mad results".
- **Tone:** professional yet approachable; plain English; non-bureaucratic; confident, not hypey.

### Links
- Site: https://twentysixconsulting.co.uk
- LinkedIn: https://uk.linkedin.com/company/twentysixreward
- Product demo: https://twentysixconsulting.github.io/demo-client-dashboard/

---

## 5. UI tokens & component patterns

These mirror the Tailwind v4 `@theme` setup in `src/index.css` — reuse them for consistency.

- **Corner radius:** cards/panels `1.25rem` (`--radius-xl2`); inputs `0.85rem`; pills/buttons fully rounded (`9999px`).
- **Card:** white surface, `1px` line border, soft shadow:
  `box-shadow: 0 1px 2px rgba(18,28,43,.04), 0 18px 46px -28px rgba(18,28,43,.26)`
- **Primary button:** clay gradient, white text, rounded-full, shadow `0 12px 26px -10px rgba(176,96,63,.6)`; on hover lift `-1px` + slight brightness.
- **Ghost button:** white, `1px` line border, ink text; hover border → clay.
- **Input focus:** clay border + ring `0 0 0 3px rgba(201,120,90,.22)`.
- **Canvas glow** (hero/feature backdrops): soft radial clay + slate glows on cream.
- **Dark sections:** ink `#121C2B` background, white text, clay-bright eyebrows, clay-text gradient for big numbers; a faint mark watermark at ~6% opacity adds depth.

### Tailwind v4 note
Tokens are declared in CSS with `@theme { --color-clay: #c9785a; ... }` (no `tailwind.config.ts`). They auto-generate utilities like `bg-clay`, `text-ink`, `border-line`, `bg-clay-tint`, `text-clay-deep`, etc. Fonts via `--font-display` / `--font-sans`.

---

## 6. Quick copy-paste (CSS variables)

```css
:root {
  /* core */
  --color-ink:        #121C2B;
  --color-cream:      #F4F1EA;
  --color-surface:    #FFFFFF;
  --color-muted:      #4B5563;
  --color-line:       #E7E0D4;
  /* accent */
  --color-clay:       #C9785A;
  --color-clay-deep:  #B0603F;
  --color-clay-bright:#DDA288;
  --color-clay-tint:  #E8D8CE;
  /* supporting */
  --color-slate:      #7285A5;
  --color-slate-tint: #D9E0EA;
  /* type */
  --font-display: "Poppins", ui-sans-serif, system-ui, sans-serif;
  --font-sans:    "Inter", ui-sans-serif, system-ui, sans-serif;
}
```
