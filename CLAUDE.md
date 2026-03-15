# CLAUDE.md — StemCyte Website Project Brief

## What This Is
Next.js website for StemCyte, a cord blood banking company based in Baldwin Park, CA. Migrated from 6 static HTML pages. Deployed on Vercel via GitHub (mst4-alt/stemcyte). Currently using dangerouslySetInnerHTML to render page content — will incrementally refactor into proper React components.

---

## CRITICAL CONTENT RULES — DO NOT VIOLATE
- **MaxCell processing does NOT exist.** Never reference MaxCell in any StemCyte content.
- **Public Bank Access is NOT free or included with plans.** It is a separate paid add-on ($299, or free with Cord Blood & Tissue). Never describe as "included" or "free" unless specifically noting the CB&T bundle.
- Do NOT say "standard-of-care" or "FDA-approved standard-of-care treatments" for cord blood diseases.
- StemCyte-sponsored clinical trials: **3** (Post-COVID, acute stroke, spinal cord injury). Not 7.
- No "FDA-approved StemCyte trials" language.

---

## BRAND & DESIGN SYSTEM

### Colors
- Primary: #6C1A55 (deep plum)
- Page bg: #FAF7F2 (warm sandy cream)
- Alt section bg: #F3F0F8 (light lavender)
- Testimonial bg: #EDE8F5 (deeper lavender)
- Footer: #3D0F31 (deep plum)

### CSS Token Palette
```
--plum-50:#FBF5F9; --plum-100:#F0E0EB; --plum-200:#E8A0D0; --plum-400:#C06AA5;
--plum-500:#6C1A55; --plum-600:#5A1548; --plum-700:#3D0F31;
--sand-50:#FAF7F2; --sand-200:#E8E2DC; --sand-500:#8A857A; --sand-800:#2C2A26;
--sage-50:#F0F7F4; --sage-100:#D4E8DC; --sage-400:#3D8B6A; --sage-600:#2A6B4F;
--blue-50:#EDF5FF; --blue-100:#D4E4FF; --blue-400:#3B6DC4;
--gold-50:#FDF5EB; --gold-400:#C4943E;
--lav:#F3F0F8; --lav-deep:#EDE8F5;
```
**NOTE:** Do NOT use var() CSS variables in HTML/CSS — use hex values directly. var() caused rendering failures in the static build.

### Typography
- Body: Lato (300, 400, 700, 900)
- Headlines: Playfair Display (400, 500, 600, 700)
- Numbers/stats: Source Serif 4 (weight 400)
- All loaded via Google Fonts in app/layout.js

### Components
- Buttons: Full pill (border-radius: 100px)
- Cards: Shadow only (0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03))
- Card hover: Glow for selectable/plan cards, Lift for clickable/navigable
- Section dividers: Hairline (1px solid #E8E2DC)
- Section spacing: 80px
- CTA banner: Plum gradient linear-gradient(160deg, #6C1A55, #3D0F31)

### Hero
- Cinematic full-width photo, radial-center-clear vignette
- Nav: Transparent on hero → solid frosted glass on scroll
- Pricing page uses compact plum gradient hero (not full-screen)

### Nav (LOCKED)
- Logo left: Stem**Cyte** (Playfair Display, bold on "Cyte" in plum)
- Links right: The Science · Why StemCyte · Pricing · Patient Stories · FAQ
- Enroll now CTA pill button (24px gap from FAQ link)
- No phone number in nav
- Same nav on every page, active state auto-detected from URL path
- Transparent on pages with hero → frosted glass on scroll
- Pricing page: starts as solid/scrolled (no transparent hero)

### Steps Component (V2)
- 3 separate white cards on lavender background
- Chip + bold header inline: chip left, header right on same line
- Desaturated connector line (#D8D0E0) between cards
- One-word headers: **Enroll · Collect · Store**
- Header font-size: 20px

### Animations
- Scroll entrance: Fade up, 150ms delay
- Number counters: Last-few-ticks variable speed
- FAQ: Smooth max-height accordion

---

## SITE ARCHITECTURE

### Pages (6 routes)
| Route | File | Description |
|-------|------|-------------|
| / | app/page.js | Homepage — hero, stats, advantages, steps, pricing CTA, guarantee, testimonials, FAQ preview |
| /the-science | app/the-science/page.js | 5 color zones: stem cells, cord blood, diseases, cord tissue, clinical research |
| /why-stemcyte | app/why-stemcyte/page.js | Stats, PBA, transplant experience, quality, accreditations, trials, timeline |
| /pricing | app/pricing/page.js | Compact hero, 6-step interactive product builder, sticky sidebar, discount programs |
| /patient-stories | app/patient-stories/page.js | 3 patient stories, featured quote, physician quotes, PBA stories |
| /faq | app/faq/page.js | 4 category accordion, contact box (no CTA banner) |

### Shared Components
- `components/Nav.js` — Client component with scroll behavior, active states from usePathname()
- `components/Footer.js` — Server component with all links wired
- `components/PageContent.js` — Client component that renders page-specific CSS/HTML/JS via dangerouslySetInnerHTML

### Key Files
- `app/layout.js` — Root layout with Google Fonts, Footer
- `app/globals.css` — Shared nav/footer styles + responsive breakpoints
- `public/images/` — Empty, ready for real photography

---

## REAL PRICING

### Cord Blood Only
- Annual: $725 processing + $200/yr storage
- 18-year prepaid: $3,560 (saves $765)
- Lifetime: $5,625 (saves $2,300)

### Cord Blood & Tissue
- Annual: $995 processing + $400/yr storage
- 18-year prepaid: $6,665 (saves $1,530)
- Lifetime: $10,795 (saves $4,600)

### Add-ons
- PBA (Public Bank Access): $299 (FREE with CB&T only)
- PBA+: $699
- HLA Matching: $295 regular / $195 prepaid (save $100 with prepaid)
- NGA: $399

### Payment Plans
- Pay in full, 6 monthly, or 12 monthly (placeholder — split evenly, may add fee later)

---

## KEY DIFFERENTIATORS
- 2,303+ transplant units shipped (1 in every 26 worldwide)
- 350+ transplant hospitals, 35 countries
- Only private bank offering Public Bank Access (paid add-on)
- LifeSaver Guarantee: refund all fees + $50K + replacement unit if engraftment fails
- Triple accredited: FACT + AABB + FDA
- Both private AND public cord blood bank
- 3 StemCyte-sponsored clinical trials
- Founded 1997, Baldwin Park CA

---

## TECH STACK
- Framework: Next.js 14 (App Router)
- Hosting: Vercel (free tier)
- Repo: github.com/mst4-alt/stemcyte
- Future: Stripe payments, HubSpot forms/CRM, NetSuite integration

---

## BUILD RULES
- Use expanded CSS/JS (one rule per line, not minified) — minified code breaks on edits
- Use HTML entities (&mdash; &amp; &reg; &copy; &middot;) instead of raw special characters
- No var() CSS variables — use hex values directly
- No Cloudflare injection scripts
- Use div elements for decorative circles, not ::after pseudo-elements
- overflow:visible on disease blocks so hover tooltips don't clip

---

## WHAT'S LEFT TO DO
- [ ] Mobile responsiveness pass across all pages
- [ ] Real photography replacing Unsplash placeholders
- [ ] Patient Stories: real photos for story cards (currently lavender placeholder divs)
- [ ] Stripe integration on pricing product builder (currently mock checkout)
- [ ] Apple Pay / Google Pay integration
- [ ] HubSpot form integration for "Contact us" links on discount programs
- [ ] Incremental refactor: convert dangerouslySetInnerHTML pages into proper React components
- [ ] Add hamburger menu for mobile nav
- [ ] Next.js Image optimization (next/image) when adding real photos
