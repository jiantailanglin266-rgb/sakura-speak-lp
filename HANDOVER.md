# Sakura Speak — Delivery & Handover

Thank you. This package contains the delivered Sakura Speak build (design +
front-end + launch-ready backend wiring). Everything runs today in a built-in
**demo mode** and switches to real Supabase + Stripe by setting env values
(no code changes).

## Package contents

```
sakura-speak/
├─ source/        Full project source (Next.js 15, TypeScript, Tailwind v4)
├─ build/         Production static export — host these files on any static host
├─ docs/          PDFs: proposal, quotation, development report (EN/JA)
└─ HANDOVER.md    This file
```
Backend setup guide and DB schema live in `source/docs/backend-setup.md` and
`source/supabase/schema.sql`.

## Requirements
- Node.js 18+ (LTS recommended)

## Run locally (development)
```bash
cd source
npm install
npm run dev          # http://localhost:3000
```

## Build (static site)
```bash
cd source
npm run build        # outputs to source/out/  (same as the included build/)
```
The output is fully static — no server required.

## Deploy
Upload the contents of `build/` (or `source/out/`) to any static host
(your own server, Netlify, Vercel static, Cloudflare Pages, S3+CloudFront, etc.).
- Hosting at a **domain root** (e.g. `https://app.example.com/`): use as-is.
- Hosting under a **sub-path** (e.g. `/sakura/`): set `basePath` in
  `source/next.config.mjs` and rebuild.

## Going live (real auth, database & payments)
See **`source/docs/backend-setup.md`** for the full guide. In short:
1. Create a Supabase project; run `source/supabase/schema.sql`.
2. Create Stripe Payment Links per plan; set the after-payment redirect.
3. Set the values in `.env.local` (see `source/.env.local.example`) and rebuild.
4. Add a Stripe webhook to mark members as subscribed.

Items to be provided on your side to go live: design image assets (incl. the
official Meemi artwork), domain & server/hosting, Stripe account + webhook,
and the backend accounts (Supabase + an email/SMTP sender).

## Demo mode (current default)
With no env set, the app uses a localStorage mock so it works fully offline of any
backend. Inputs/purchases are demo behavior (no real charges or data).

Demo logins (mock only):
- Admin: `admin@sakura.dev` / `password`
- Or register on `/auth/`, or tap "Continue as guest".

## Tech stack
Next.js 15 (App Router, static export) · React 19 · TypeScript · Tailwind CSS v4 ·
Supabase (auth + DB, optional) · Stripe Payment Links (optional) ·
browser SpeechSynthesis for audio · parametric SVG mascot ("Meemi").

## Notes
- The Meemi mascot is a custom SVG placeholder, structured to swap for official art.
- Ownership of the delivered materials transfers per the agreement upon final payment.
