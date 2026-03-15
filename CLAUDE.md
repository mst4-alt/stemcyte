## PROJECT: StemCyte Website Redesign

I'm redesigning stemcyte.com — a cord blood banking company based in Baldwin Park, CA. I've been working on this across a long chat session and I'm continuing here. I'm uploading a zip of all 6 HTML page files we've built so far. These are static HTML files now — we'll migrate to Next.js/Vercel later.

---

## TECH STACK (future)
- Framework: Next.js + Vercel (free tier)
- Payments: Stripe (native NetSuite connector)
- CRM: Consolidating Salesforce → HubSpot
- Integrations: NetSuite, HubSpot API/webhooks

---

## AESTHETIC DIRECTION & INSPIRATION
Simple, warm, trustworthy, and grown-up. Respects the parent's intelligence. No visual noise, no gimmicks — just clear information presented beautifully so the right things get attention. Not cold clinical, not cutesy baby brand.

Inspiration references:
- **Apple** — minimalism, whitespace, intuitive focus on what matters, nothing unnecessary. Human interface guidelines thinking — design that gets out of the way and lets content lead.
- **Babylist** — warm, parent-friendly, approachable without being childish. Knows the audience is expecting mothers making a real decision.
- **One Medical** — modern healthcare that doesn't feel like healthcare. Clean and trustworthy. Medical authority without the sterile hospital aesthetic.
- **Aesop** — restrained, typographic, lets the content breathe. Color used sparingly and intentionally.

Key design principles:
- Plum/cream/lavender palette is warm but sophisticated — deliberately not the sterile whites and blues every other medical company uses
- Generous whitespace and section spacing (80px) so nothing feels crowded
- Playfair Display for headlines, Lato for body — grown-up and readable
- Source Serif 4 for numbers/stats — authoritative without being heavy
- Cinematic hero photos with radial vignettes
- Subtle shadows, pill-shaped buttons, content-first layouts
- No decoration for decoration's sake

---

## CRITICAL CONTENT RULES — DO NOT VIOLATE
- **MaxCell processing does NOT exist anymore.** Never reference MaxCell in any StemCyte content.
- **Public Bank Access is NOT free or included with plans.** It is a separate paid add-on ($299, or free with Cord Blood & Tissue). Never describe as "included" or "free" unless specifically noting the CB&T bundle.
- Do NOT say "standard-of-care" or "FDA-approved standard-of-care treatments" for cord blood diseases.
- StemCyte-sponsored clinical trials: **3** (Post-COVID, acute stroke, spinal cord injury). Not 7.
- No "FDA-approved StemCyte trials" language.

---

## LOCKED DESIGN DECISIONS

### Brand
- Primary: #6C1A55 (deep plum)
- Body font: Lato
- Headlines: Playfair Display
- Numbers: Source Serif 4 weight 400
- Page bg: #FAF7F2 (warm sandy cream)
- Alt section bg: #F3F0F8 (light lavender)
- Testimonial bg: #EDE8F5 (deeper lavender)

### Components
- Buttons: Full pill (border-radius: 100px)
- Cards: Shadow only (0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03))
- Card hover: Glow for selectable/plan cards, Lift for clickable/navigable
- Section dividers: Hairline (1px solid #E8E2DC)
- Section spacing: 80px
- CTA banner: Plum gradient linear-gradient(160deg, #6C1A55, #3D0F31)
- Footer: Deep plum #3D0F31

### CSS Tokens
```
--plum-50:#FBF5F9; --plum-100:#F0E0EB; --plum-200:#E8A0D0; --plum-400:#C06AA5;
--plum-500:#6C1A55; --plum-600:#5A1548; --plum-700:#3D0F31;
--sand-50:#FAF7F2; --sand-200:#E8E2DC; --sand-500:#8A857A; --sand-800:#2C2A26;
--sage-50:#F0F7F4; --sage-100:#D4E8DC; --sage-400:#3D8B6A; --sage-600:#2A6B4F;
--blue-50:#EDF5FF; --blue-100:#D4E4FF; --blue-400:#3B6DC4;
--gold-50:#FDF5EB; --gold-400:#C4943E;
--lav:#F3F0F8; --lav-deep:#EDE8F5;
```
NOTE: Do NOT use var() CSS variables in the HTML files — use hex values directly. var() caused rendering failures.

### Hero
- Cinematic full-width photo, radial-center-clear vignette
- Nav: Transparent on hero → solid frosted glass on scroll

### Nav (LOCKED)
- Logo left: Stem**Cyte** (Playfair Display, bold on "Cyte" in plum)
- Links right (margin-left:auto): The Science · Why StemCyte · Pricing · Patient Stories · FAQ
- Enroll now CTA pill button (24px gap from FAQ link)
- No phone number in nav
- Same nav on every page, with current page highlighted as .active

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

## NAVIGATION (5 pages + homepage)
The Science · Why StemCyte · Pricing · Patient Stories · FAQ
(How It Works page was removed — steps section embedded in Homepage and Pricing instead)

---

## REAL STEMCYTE CONTENT

### Key differentiators
- 2,303+ transplant units shipped (1 in every 26 worldwide)
- 350+ transplant hospitals, 35 countries
- Only private bank offering Public Bank Access (paid add-on)
- LifeSaver Guarantee: refund all fees + $50K + replacement unit if engraftment fails
- Triple accredited: FACT + AABB + FDA
- Both private AND public cord blood bank
- 3 StemCyte-sponsored clinical trials (Post-COVID, acute stroke, spinal cord injury)
- Founded 1997, Baldwin Park CA

### Real pricing (cord blood only)
- Annual: $725 processing + $200/yr storage
- 18-year prepaid: $3,560 (saves $765 vs annual)
- Lifetime: $5,625 (saves $2,300 vs annual)

### Real pricing (cord blood + tissue)
- Annual: $995 processing + $400/yr storage
- 18-year prepaid: $6,665 (saves $1,530 vs annual)
- Lifetime: $10,795 (saves $4,600 vs annual)

### Add-on pricing
- PBA (Public Bank Access): $299 (FREE with CB&T)
- PBA+: $699
- HLA Matching: $295 regular / $195 prepaid (save $100 with prepaid)
- NGA: $399

### Payment plans
- Pay in full, 6 monthly payments, or 12 monthly payments (placeholder logic — split evenly for now, may add fee later)

---

## THE 6 PAGES — CURRENT STATE

All 6 are built, reviewed, and functional HTML files. I'm uploading them as a zip.

### 1. Homepage (homepage-final.html)
- Cinematic hero with badge, headline, subtitle, two CTA buttons
- 4 stat cards (2,303+, 350+, 35, 80+) with number counters
- StemCyte Advantage section (3 cards: PBA, transplant experience, accreditations)
- How It Works V2 steps on lavender (Enroll · Collect · Store)
- Pricing CTA section on lavender ("Cord blood banking starts at $725" with "Build your plan" button driving to Pricing page — replaced the old static pricing cards)
- LifeSaver Guarantee split section
- Testimonials (Gabrielle Stone, Dr. Ghadir)
- FAQ preview (4 questions)
- CTA banner
- Footer

### 2. The Science (why-bank-v4.html)
- Hero with "The Science" label
- 5 color zones stacked:
  1. Blue zone (#EDF5FF) — "What are stem cells?" narrative + key facts card
  2. Plum zone (#FBF5F9) — "Cord blood" with 4 fact cards + stat block (80+, 60K+, 1988, 100%, 75%)
  3. Plum deep zone (#F3E8EE) — "What these 80+ diseases actually are" with 4 color-coded disease blocks + hover tooltips
  4. Sage zone (#F0F7F4) — "Cord tissue" comparison cards (cord blood vs cord tissue)
  5. Sage deep zone (#DFF0E6) — "Active clinical research" with trial cards + 3 stat cards (35+ countries, 500+ trials, 3 StemCyte-sponsored)

### 3. Why StemCyte (why-stemcyte-final.html)
- Hero
- 4 stat cards (2,303+, 1 in 26, 350+, 1997)
- Public Bank Access split section
- Transplant experience split section (reversed)
- Quality & Protection: 4 feature cards (LifeSaver Guarantee, Proprietary processing, 24/7 courier, Expanded access)
- Accreditations: 4 badges (FACT, AABB, FDA, cGMP)
- Clinical trials section on lavender (8 trial tags)
- Timeline: 12 milestones from 1997 to Today
- CTA banner

### 4. Pricing (plans-pricing-final.html)
- Compact plum gradient hero (not full-screen — gets to builder fast, per conversion research)
- **Product builder** — 6-step interactive enrollment flow:
  1. Product: Cord blood ($725) or CB&T ($995)
  2. Plan: Annual, 18-year, Lifetime (with dynamic pricing based on product)
  3. Add-ons: PBA, PBA+, HLA, NGA (with smart badges — "Free with CB&T", "Save $100 with prepaid")
  4. Payment plan: Pay in full, 6 monthly, 12 monthly
  5. Info: Name, email, phone, due date, relationship, address, hospital, additional parent checkbox, surrogate checkbox
  6. Payment: Credit/debit card, Apple Pay, Google Pay (mock checkout)
- Sticky summary sidebar that updates in real time with total, savings badge, and line items
- How It Works V2 steps below builder
- Discount programs (Sibling Donor, Military, Medical professional) with "Contact us →" links
- CTA banner (contact/support focused: "Have questions? We're here to help")

### 5. Patient Stories (stories-final.html)
- Hero with "Patient Stories" label
- 3 patient stories as horizontal cards with image placeholder on left:
  - Bailey (Perinatal Stroke, used her own stem cells)
  - Ryden (Cerebral Palsy, used his brother's stem cells)
  - Itzel (ALL Leukemia, used donated stem cells)
- Featured Gabrielle Stone quote (centered, large italic)
- Physician & parent quotes: Dr. Ghadir, Gretchen Rossi (2-column)
- PBA stories on deeper lavender: Jennifer B., Nikki, Sam M. (3-column)
- CTA banner

### 6. FAQ (faq-final.html)
- Hero
- 4 FAQ categories with smooth accordion:
  - About cord blood banking (6 Qs)
  - About the process (4 Qs)
  - About pricing (3 Qs)
  - About StemCyte (4 Qs)
- "Still have questions?" contact box (no CTA banner — per research, FAQ page visitors are in info-gathering mode, so contact box is more appropriate)
- Categories have 64px spacing between them

---

## CRITICAL BUILD RULES (learned the hard way)
- **ALWAYS edit files in /home/claude/, then cp to /mnt/user-data/outputs/.** Never edit output files directly with sed/str_replace — this causes truncation.
- **ALWAYS use expanded CSS/JS** (one rule per line, not minified). Minified files break on edits.
- **Use HTML entities** (&mdash; &amp; &reg; &copy; &middot;) instead of raw special characters.
- **No var() CSS variables in HTML files** — use hex values directly.
- **No Cloudflare injection** — never include `<script data-cfasync="false" src="/cdn-cgi/...">` tags.
- **Use div elements for decorative circles**, not ::after pseudo-elements.
- **overflow:visible on disease blocks** so hover tooltips don't clip.
- **Always verify file ends with </html>** after any edit.

---

## WHAT'S LEFT TO DO
- Verify footer links are consistent across all 6 pages (The Science, Why StemCyte, Patient Stories, FAQ, Pricing)
- Clean up old/superseded files from outputs directory
- Mobile testing pass across all pages
- Real photography replacing Unsplash placeholders
- Add real photo images to Patient Stories cards (currently have lavender placeholder divs)
- Stripe integration on the product builder (currently mock checkout)
- Apple Pay / Google Pay integration
- Connect nav links to actual page URLs (currently all href="#")
- Next.js/Vercel migration
- HubSpot form integration for "Contact us" links on discount programs