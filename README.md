# Holiday in Goa Tour & Travels — Website

A lightweight, mobile-first marketing/booking website for a Goa tours & activities brand.

## Tech stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first config with design tokens in `app/globals.css`)
- **next/font** self-hosted variable fonts (Sora for display, Inter for body)
- **next/image** for optimized, lazy-loaded imagery
- CSS-only scroll animations (`animation-timeline: view()`), glassmorphism, `color-mix()`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm start       # serve the production build
```

## Design system

Brand palette (defined as tokens in `app/globals.css`):

| Token           | Hex       | Use                     |
| --------------- | --------- | ----------------------- |
| `--color-emerald`  | `#10897b` | Primary brand / buttons |
| `--color-sea-deep` | `#0b5e5a` | Headings, footer        |
| `--color-mint`     | `#6fcf97` | Accents, highlights     |
| `--color-foam`     | `#f6fbf9` | Page background         |
| `--color-sand`     | `#fbf7ef` | Alternate sections      |
| `--color-ink`      | `#12332f` | Body text               |

## Project structure

```
app/
  globals.css      # Tailwind v4 import + design tokens + utilities
  layout.tsx       # fonts, metadata, viewport
  page.tsx         # assembles all homepage sections
components/
  Header.tsx       # sticky glass header + mobile menu (client)
  Hero.tsx         # hero + glass search card + trust chips
  Categories.tsx   # popular experience tiles
  FeaturedTours.tsx# bestseller tour cards (horizontal rail)
  WhyUs.tsx        # trust/feature strip
  OfferBand.tsx    # seasonal offer band
  MoodGrid.tsx     # experiences by mood
  Reviews.tsx      # testimonial cards
  BlogTeaser.tsx   # travel-guide blog cards
  FinalCTA.tsx     # closing call-to-action
  Footer.tsx       # deep sea-green footer
  FloatingWhatsApp.tsx
  ui.tsx           # Button, Card, Chip, Stars, Section primitives
  icons.tsx        # inline SVG icon set
  SectionHead.tsx  # shared section heading
lib/
  data.ts          # placeholder tours, categories, reviews, posts
```

## Notes

- Content, prices and reviews are placeholder data in `lib/data.ts`.
- Images load from Unsplash (allow-listed in `next.config.ts`); swap for real,
  optimized assets (e.g. Cloudinary) before launch.
- This is the homepage prototype only — booking flow, tour detail pages,
  payments (Razorpay) and admin are future phases per the project plan.
```
