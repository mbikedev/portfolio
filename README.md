# studio/dev — Next.js Portfolio

A dark, developer-focused Next.js 15 portfolio designed to attract clients
for website & application builds. Features:

- ⚡ **Next.js 15 + React 19** (App Router, TypeScript)
- 🎨 **Dark, techy aesthetic** — acid-lime accent, monospace details, serif display type
- 🎞️ **Framer Motion** page & scroll animations
- 🎯 **Sections**: Hero · Services · Projects · Contact
- 📱 **Fully responsive** with mobile-first layout
- 🔤 **Distinctive typography** — Geist + JetBrains Mono + Instrument Serif
- 🌐 **SEO-ready** with OpenGraph metadata

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000
```

Build for production:

```bash
npm run build
npm run start
```

---

## Project structure

```
portfolio/
├── app/
│   ├── layout.tsx         # Root layout, fonts, metadata
│   ├── page.tsx           # Home page (imports all sections)
│   └── globals.css        # Tailwind + custom CSS (grid, noise, glow)
├── components/
│   ├── Navbar.tsx         # Sticky nav with scroll blur effect
│   ├── Hero.tsx           # Main headline + CTAs + meta grid
│   ├── Marquee.tsx        # Infinite tech-stack scroller
│   ├── Services.tsx       # 2×2 service grid
│   ├── Projects.tsx       # Case-study list with hover gradients
│   ├── Contact.tsx        # Form + direct contact info
│   └── Footer.tsx         # Giant wordmark + legal
├── lib/
│   └── utils.ts           # className helper (cn)
├── tailwind.config.ts     # Custom colors, fonts, animations
├── next.config.mjs
├── tsconfig.json
├── postcss.config.js
└── package.json
```

---

## Customization guide

### 1. Your identity
Search & replace these across the project:

| Placeholder | Where |
|---|---|
| `studio/dev` | Navbar, Footer wordmark, metadata |
| `hello@studiodev.com` | Contact section |
| `github.com/studiodev`, `linkedin.com/in/studiodev` | Contact social links |
| `Brussels, BE` | Hero meta grid, Footer |

### 2. Services
Edit the `services` array in `components/Services.tsx`. Each item has:
`{ id, icon, title, description, tags }`. Icons come from `lucide-react` — browse at [lucide.dev](https://lucide.dev).

### 3. Projects
Edit the `projects` array in `components/Projects.tsx`. For real case studies,
consider making each `href` link to a dedicated page at `app/work/[slug]/page.tsx`.

The `gradient` field controls the hover color — it accepts any Tailwind
`bg-gradient-to-br` color classes.

### 4. Contact form
The form in `components/Contact.tsx` currently simulates submission. To make
it real, create an API route at `app/api/contact/route.ts` using your service
of choice:

- **Resend** (recommended): `npm i resend`
- **Formspree**: no backend, just change the form's action
- **Supabase / Postgres**: log to a database

### 5. Colors & fonts
All design tokens live in `tailwind.config.ts`. The accent color is `#c6ff3d`
(acid lime). Change `colors.accent.DEFAULT` to shift the whole brand.

Fonts are loaded from Google Fonts in `app/globals.css`:
- **Display**: Instrument Serif (headings)
- **Sans**: Geist (body)
- **Mono**: JetBrains Mono (labels, meta)

### 6. Metadata & SEO
Update `app/layout.tsx`:
- Page title
- Description
- OpenGraph image (add `/public/og.png` — 1200×630)

---

## Deploy

### Vercel (one-click)
```bash
# If not yet initialized as a git repo
git init && git add . && git commit -m "initial portfolio"
# Push to GitHub, then import at vercel.com/new
```

Alternatively, use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

### Other hosts
The project is a standard Next.js app — it deploys anywhere that supports
Node.js (Netlify, Cloudflare Pages, Railway, Render, self-hosted with Docker).

---

## Adding more sections

Common additions if you want to expand:

- **About / Process** — A lean "how we work" section (discovery → design → build → ship)
- **Testimonials** — Pull-quote cards from past clients
- **Case studies** — Dedicated project pages at `/work/[slug]`
- **Blog** — MDX-powered writing at `/journal` using `contentlayer` or `next-mdx-remote`
- **Pricing packages** — 3-tier grid (Sprint / Project / Retainer)

Each of these slots naturally between `Projects` and `Contact` in `app/page.tsx`.

---

## License

You're free to use this as a starting point for your own portfolio. No attribution required, but a ⭐ is appreciated.
