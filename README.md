# Zigbert — Waitlist Site

Pre-launch waitlist landing page for **Zigbert**, TwentySix Consulting's pay & benefits
intelligence dashboard (launching September 2026). Captures name + company + email into
Supabase, explains the product via scroll-snap slides, and has a dedicated
[methodology page](/methodology).

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
