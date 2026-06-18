@AGENTS.md

# Handyman Auto Repair — project guide

A one-page marketing site for Handyman Auto Repair, a local auto shop in
Cupertino, CA. This is part of a local website business: the goal is a site that
looks professional and intentional enough to turn the owner into a paying client,
then becomes the real site if he buys.

Built to be shown to the owner on a phone, so it is **mobile-first**. Test at
375px width.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (tokens via `@theme` in `src/app/globals.css`)
- `lucide-react` for icons
- `src/` directory layout, import alias `@/*` → `./src/*`

## How to run

```bash
npm run dev     # local dev at http://localhost:3000
npm run build   # production build — must pass before shipping
npm run start   # serve the production build
npm run lint    # eslint
```

Deploy: push to the connected Vercel project (the owner-facing flow is deploy
from VS Code to Vercel). No environment variables are required for the demo.

## File structure

```
src/
  app/
    layout.tsx     Root layout: fonts, SEO metadata, viewport, JSON-LD
    page.tsx       Composes the sections in order
    globals.css    Tailwind import + design tokens (@theme)
    favicon.ico
  components/       One file per section + small shared pieces
    Container.tsx, SectionHeading.tsx, CallButton.tsx, StarRating.tsx
    Header.tsx, Hero.tsx, Services.tsx, WhyUs.tsx,
    Reviews.tsx, HoursLocation.tsx, Contact.tsx, ContactForm.tsx, Footer.tsx
  lib/
    business.ts    SINGLE SOURCE OF TRUTH for all business facts
    jsonLd.ts       LocalBusiness (AutoRepair) structured data, SITE_URL
    cn.ts           tiny className joiner
public/
  images/          Branded SVG placeholders + README listing photos to add
```

**`src/lib/business.ts` is the single source of truth.** Every section reads
facts (name, phone, address, hours, rating, services, payments, links) from it.
Do not duplicate or hardcode these facts anywhere else.

## No invented facts

Never invent business facts. No prices, no certifications, no years in business,
no extra services, no fake reviews or customer names. If a fact is unknown, leave
a `// TODO: confirm with owner` and a clear placeholder. Reviews on the page are
paraphrased in our own words and marked as placeholders — never paste real Google
or Yelp text.

## Design system (rules for any new work)

Mood: dependable, honest, hands-on, modern. A local shop you trust, not a flashy
chain. Avoid the generic AI look — no everything-centered layouts, no three
identical pastel cards with emoji, no clip-art. Use a real grid, clear hierarchy,
and varied section rhythm (the page alternates light / mist / dark bands).

All tokens live in `src/app/globals.css` under `@theme`. Use the generated
utilities; do not introduce off-token colors.

**Color tokens**
- `paper` `#ffffff` — page background
- `mist` `#f4f3f0` — light section background (warm off-white)
- `line` `#e5e2dc` — hairline borders
- `ink` `#14161b` — darkest; dark sections, headings, primary text
- `graphite` `#20252e` — dark surface variant
- `steel` `#545b66` — muted / secondary text
- `accent` `#df6c1c` — burnt amber, the one strong accent
- `accent-strong` `#b95711` — darker amber for accent text and hovers

Contrast rule: amber is for fills and large elements. Primary buttons are
**dark text on amber** (`bg-accent text-ink`). For small accent text use
`text-accent-strong`, not `text-accent`.

**Fonts** (loaded with `next/font` in `layout.tsx`)
- Display / headings: **Archivo** → `font-display` (also applied to h1–h3 by default)
- Body: **Inter** → `font-sans` (the default body font)

**Radius** — keep it consistent: inputs and cards `rounded-xl`, large panels
`rounded-2xl`, pill buttons and CTAs `rounded-full`, small chips `rounded-lg`.
Canonical value is the `--radius` token.

**Spacing** — Tailwind's scale. Section padding `py-16 sm:py-20 lg:py-24`.
Page gutter and max width come from the `Container` component — use it.

**Motion** — subtle only. `transition duration-200`, small hover lifts
(`hover:-translate-y-0.5` / `-translate-y-1`) and shadow on cards and buttons.
A reduced-motion media query is already in `globals.css`; do not fight it.

**Accessibility** — semantic HTML, real `alt` text, labelled form fields,
visible focus (amber ring), keyboard friendly. Decorative icons get
`aria-hidden`. Keep it working at 375px.

## Copy voice (write all site text this way)

Plain English. Short sentences. Active voice. No adverbs. No em dashes. Calm and
confident. No buzzwords. No sales hype. Sound like a trustworthy local shop, not
a brochure.

## Turn the demo into the real site (go-live TODO)

- [x] Phone number confirmed: (408) 876-7716.
- [x] Owner name confirmed: Dai Nguyen.
- [x] Hours confirmed: 8 to 4 every day except Sunday.
- [x] Email: shop has none. Placeholder kept; email options are hidden until a
      real address is set in `business.ts` (`hasPublicEmail` handles this).
- [ ] Confirm the **service list and groupings** with the owner.
- [ ] Confirm the **current review count** before going live.
- [ ] Add **real photos** (see `public/images/README.md`); once all SVG
      placeholders are replaced, remove `dangerouslyAllowSVG` from `next.config.ts`.
- [ ] Paste the **Formspree endpoint** into `FORMSPREE_ENDPOINT` in
      `src/components/ContactForm.tsx` (currently `REPLACE_ME`; the form will not
      send until this is set).
- [ ] Replace testimonials in `Reviews.tsx` with **real approved reviews**.
- [ ] Set `SITE_URL` in `src/lib/jsonLd.ts` and connect a **custom domain**.
- [ ] **Claim the Google Business Profile** and update the listing link in
      `business.ts` (`links.googleListing`).
- [x] Footer credit set: Website by Ankur Barde (`siteCreditName` in `business.ts`).

## House rules

- Keep components small, one section per file in `src/components/`.
- Read every business fact from `src/lib/business.ts`. Never hardcode facts.
- Match the design tokens. No off-token colors, fonts, or radii.
- Keep the build passing: run `npm run build` and fix every error before shipping.
- Never invent facts.
