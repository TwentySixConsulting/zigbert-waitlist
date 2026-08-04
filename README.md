# Zigbert — Waitlist Site

Pre-launch waitlist landing page for **Zigbert**, TwentySix Consulting's pay & benefits
intelligence dashboard (launching September 2026). Captures name + company + email into
Supabase, explains the product via scroll-snap slides, and has dedicated
[methodology](/methodology) and [FAQ](/faq) pages.

## Stack

- React + TypeScript + Vite
- Tailwind CSS v4 (`@theme` tokens in `src/index.css`, no JS config)
- Framer Motion (animation)
- Wouter (routing)
- Supabase (`@supabase/supabase-js`) for waitlist sign-ups
- Deploys to **Vercel**

## Brand

Near-white warm canvas, **clay** accent with a **logo-blue** (`#7285A5`) used for CTAs and the
Benefits pillar, deep-navy ink text. Poppins (display) + Inter (body). All copy lives in
`src/lib/copy.ts` — edit there.

## FAQ page and Zigbot

`/faq` is a flat list of accordion questions ([`src/pages/FAQ.tsx`](src/pages/FAQ.tsx)), with
**Zigbot** ([`src/components/Zigbot.tsx`](src/components/Zigbot.tsx)) floating bottom-right.

Zigbot runs entirely in the browser: no API, no server, no key. The matching lives in
[`src/lib/zigbotBrain.ts`](src/lib/zigbotBrain.ts), which scores the visitor's question
against a knowledge base built from the FAQ questions on the page plus the extra Q&As in
`zigbot.extras`. It weighs rare words far above common ones (in a knowledge base about pay
benchmarking, "benchmark" tells you almost nothing and "gdpr" tells you almost everything),
gives adjacent word pairs a bonus, and penalises any answer that ignores the rarest word in
the question.

**It would rather ask than guess.** Where two answers are genuinely close, or the question
is too vague, or it leans on a word the knowledge base has never seen, Zigbot offers the
nearest questions as clickable options instead of stating something wrong. A wrong answer
delivered confidently is the failure mode worth designing against.

To edit the questions or teach Zigbot something new, edit `faq.items` or `zigbot.extras` in
[`src/lib/copy.ts`](src/lib/copy.ts). Both take `{ q, a, kw }`, where `kw` is a
space-separated list of words a visitor might actually type — synonyms, plain English, and
concrete examples (sectors, places, sizes). `kw` is never displayed; it only widens what
that question will match. Keywords are cheap and are the main way to improve Zigbot.

Two things to avoid in `kw`: filler words ("about", "explain"), which pull unrelated
questions onto that entry, and words that only make sense as part of a phrase — "flight"
from "flight risk" once had Zigbot answering "book me a flight".

### Testing it

```bash
npm run test:zigbot
```

89 real-world phrasings checked against the question each should reach.
[`test/zigbot.test.mjs`](test/zigbot.test.mjs) fails the run only on a *confidently wrong*
answer; falling back to offering options is the designed behaviour, and is reported
separately. Add a case whenever you add or reword a question.

## Local development

```bash
npm install
cp .env.example .env.local   # fill in your Supabase URL + anon key
npm run dev                  # http://localhost:5173
```

Without Supabase env vars the page still runs; the form shows a "not configured yet" note
instead of writing.

## Supabase setup

1. In your Supabase project, open the SQL editor and run [`supabase/waitlist.sql`](supabase/waitlist.sql).
   It creates the `waitlist` table with **insert-only** RLS for the anon role (the public
   site can write sign-ups but cannot read them back).
2. Copy the project URL and **anon public** key into `.env.local` (and into Vercel env vars).

| Env var | Where to find it |
| --- | --- |
| `VITE_SUPABASE_URL` | Project Settings → API → Project URL |
| `VITE_SUPABASE_ANON_KEY` | Project Settings → API → anon public key |

Sign-ups land in the `waitlist` table — view/export them from the Supabase Table editor.
On success the form fires a confetti celebration and a "Thank you for signing up!" message.

## Confirmation email (optional)

When someone joins, a branded confirmation email can be sent automatically via the
[`supabase/functions/send-confirmation`](supabase/functions/send-confirmation/index.ts) Edge Function (uses [Resend](https://resend.com)).

1. Verify a sender domain in Resend and create an API key.
2. Set the function secrets:
   ```bash
   supabase secrets set RESEND_API_KEY=re_xxx FROM_EMAIL="Zigbert <hello@twentysixconsulting.co.uk>"
   supabase functions deploy send-confirmation
   ```
3. In Supabase → Database → Webhooks, add a webhook on `public.waitlist` for **INSERT**
   that calls the `send-confirmation` function. Each new sign-up then receives the email.

## Deploy (Vercel)

1. Push to GitHub and import the repo in Vercel (framework preset: **Vite**).
2. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in Project → Settings → Environment Variables.
3. Build command `npm run build`, output `dist`. `vercel.json` handles SPA routing so
   `/methodology` resolves correctly.

## Build

```bash
npm run build      # type-checks then builds to dist/
npm run preview    # preview the production build
```
