# RS Consultants & E Solutions

> Your Trusted Partner in Government & Private Tender Consultancy.

A modern, single-page marketing website for **RS Consultants & E Solutions**, a professional consultancy specializing in Government and Private e-tendering, GeM portal, and bid-management services across India.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS**, styled with a deep-navy editorial aesthetic inspired by the Financy financial-consultant theme.

---

## ✨ Features

- **Single-page scrolling site** with sticky navbar + smooth anchor navigation
- **Hero** featuring the consultant's photo, headline, and trust chips
- **Animated stats bar** (count-up on scroll)
- **Services** — 6 expandable category cards (Govt Tenders, GeM, Bid Management, Vendor Registration, DSC, Consultancy)
- **Why Choose Us**, **Industries We Serve**, **7-step Work Process**, **Mission**, and **Commitment** sections
- **Contact section** with a working form (visual success state) and contact details
- Fully **responsive** (mobile hamburger menu, fluid grids)
- Subtle scroll/hover animations via **Framer Motion**
- **Static export** ready (`output: 'export'`) — deploys to any static host with zero backend
- SEO metadata + Open Graph tags configured

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| [Next.js 14](https://nextjs.org/) | React framework (App Router, static export) |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| react-icons | Icons |
| next/font | Plus Jakarta Sans + Inter |

## 🚀 Getting Started

```bash
# install dependencies
npm install

# start the dev server
npm run dev
# → http://localhost:3000

# build the static site for production
npm run build
# → output is generated in /out
```

> **Note:** The dev server runs on port 3000 by default. If that port is already in use (e.g. by another local project), use `npx next dev -p 3001`.

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx        # fonts, metadata/SEO, root layout
│   ├── page.tsx          # assembles all sections
│   └── globals.css       # Tailwind + base styles
├── components/           # Navbar, Hero, Services, Contact, Footer, ...
├── lib/
│   └── content.ts        # ⭐ ALL website copy & data — edit in one place
├── public/
│   └── consultant.png    # consultant photo
├── tailwind.config.ts    # navy/blue theme
├── next.config.mjs       # static export enabled
└── package.json
```

## ✏️ Easy Customization

**All text content lives in [`lib/content.ts`](lib/content.ts)** — company info, services, contact details, stats, etc. Update it in one place and the changes flow through the whole site.

Look for `TODO_EDIT` comments to find placeholders that need real values:

| Field | Currently |
|-------|-----------|
| Consultant name / title | `RS` — Founder & Lead Consultant |
| Phone | `+91-XXXXXXXXXX` |
| Social links (LinkedIn/Facebook/WhatsApp) | `#` |
| Stats (years, tenders, etc.) | Indicative figures |
| Logo | "RS" monogram (swap in `components/Logo.tsx`) |

## 🌐 Deployment

The site is configured for static export. After `npm run build`, the `out/` folder can be uploaded to any static host (Netlify, Vercel, GitHub Pages, cPanel, etc.) and served at `www.rsconsultants.in`.

The contact form currently shows a success state only (no backend). To make it send emails, wire it to a form service (Formspree, Resend, etc.) in `components/Contact.tsx`.

---

© RS Consultants & E Solutions · Government & Private Tender Consultants
