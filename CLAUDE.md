# CLAUDE.md — Toitures Vitalis Website Rules

## Project Context
- **Business:** Toitures Vitalis — nano roof-coating protection company (GoNano-certified), Greater Montreal.
- **Goal:** A premium, multi-page, SEO-dominant website in **Québécois French**. SEO is priority #1 — this site must rank #1 locally.
- **Stack:** **Next.js (App Router) + Tailwind CSS**, deployed on Vercel. This is a MULTI-PAGE site, not a single HTML file.
- **Language:** All content in French (Québec). Keep the honest, non-overselling tone defined in `content/`.

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.
- **Read `brand_assets/brand-guidelines.md`** for exact colors, fonts, sizes, and layout rules.
- **Read the relevant file in `content/`** for the page you're building (copy + SEO meta). Never invent copy — use what's in `content/`.

## Content & Brand Sources (READ THESE)
- `brand_assets/brand-guidelines.md` → colors (`#1B3A5C` navy, `#4A90E0` blue), fonts (Archivo Black + Inter), sizes, hero style, buttons. Use these EXACT values. Never invent brand colors or fonts.
- `brand_assets/logo.svg` → the logo. Use it in nav (dark logo) and footer (white/inverted). Favicon = icon only.
- `content/00-seo-strategy.md` → sitemap, URL structure, per-page meta titles/descriptions, target keywords, schema rules.
- `content/01-home.md`, `02-comment-ca-fonctionne.md`, `04-garantie.md`, `07-faq.md`, `08-secteurs.md`, `03-05-06-09-...md` → the actual page copy.

## Reference Design
- **Visual reference: the Summit Solutions roofing site style** (dark hero with roof photo + navy overlay, huge bold heading with one keyword in blue + a period, two CTAs, floating white nav, trust bar).
- Match that LAYOUT, SPACING, and FEEL — but use OUR brand (logo, `#1B3A5C`/`#4A90E0`, Archivo Black, French copy from `content/`).
- Do NOT copy Summit's text, logo, or photos. Only the structure/look.
- Use real assets from `brand_assets/` and real copy from `content/`. Placeholder images only where no real photo exists yet (`https://placehold.co/`), and label them clearly.

## Site Structure (build these pages)
```
/                          (content/01-home.md)
/comment-ca-fonctionne     (content/02-comment-ca-fonctionne.md)
/services                  (content/03-...)
/garantie                  (content/04-garantie.md)
/prix                      (content/05 in 03-05-06-09 file)
/a-propos                  (content/06 in 03-05-06-09 file)
/galerie
/faq                       (content/07-faq.md)
/contact
/blogue
/secteurs/montreal /laval /laurentides /rive-nord /rive-sud   (content/08-secteurs.md)
```
Build the homepage first, get approval, then the rest page by page.

## SEO Rules (PRIORITY #1 — apply on every page)
- **Unique `<title>` (50-60 chars) and `<meta name="description">` (150-160 chars) per page** — use the exact values from `content/00-seo-strategy.md`.
- **One `<h1>` per page**, containing the primary keyword. Correct heading hierarchy (h1→h2→h3, never skip).
- **JSON-LD schema:**
  - Every page: `LocalBusiness` (name, address, phone, `areaServed`, RBQ number, hours).
  - `/faq`: `FAQPage` (each Q/A as an item — this drives Google rich snippets).
  - Service pages: `Service`. Blog posts: `Article`.
- **Descriptive `alt` text on ALL images** (natural keywords).
- Generate `sitemap.xml` and `robots.txt`.
- Clean French URLs with hyphens (as above). One canonical tag per page.
- Open Graph + Twitter Card meta on every page.
- Internal links between pages (home ↔ secteurs ↔ contact).
- Use Next.js `metadata` export per page for all of the above.

## Performance (Core Web Vitals — SEO factor)
- Next.js `<Image>` for all images (WebP, explicit width/height, lazy-load below the fold).
- Keep JS light. Mobile-first (most roofing traffic is mobile).
- No heavy unused libraries.

## Local Server & Screenshot Workflow
- Run the Next.js dev server (`npm run dev`, usually `http://localhost:3000`). Never screenshot a `file:///` URL. If the server is already running, don't start a second instance.
- Puppeteer paths: **[REPLACE WITH YOUR WINDOWS USER PATH]** — e.g. `C:/Users/mohamedwafi/AppData/Local/Temp/puppeteer-test/` and cache `C:/Users/mohamedwafi/.cache/puppeteer/`. If Puppeteer isn't installed, install it.
- Screenshot from localhost: `node screenshot.mjs http://localhost:3000/PAGE`. Saves to `./temporary screenshots/screenshot-N.png` (auto-incremented). Optional label: `node screenshot.mjs URL label`.
- After screenshotting, read the PNG with the Read tool and analyze it directly.
- Compare against the Summit reference + `brand-guidelines.md`. Be specific: "hero H1 is 40px but should be ~68px", "keyword not in blue", "nav not floating". Do **at least 2 comparison rounds**. Stop only when it matches or the user says so.

## Brand & Design Rules (from brand-guidelines.md)
- **Colors:** ONLY the brand palette — navy `#1B3A5C`, blue `#4A90E0`, white, deep navy `#0F1B2A` (overlays), grey `#5A6B7B`, light grey `#F4F6F8`. Never default Tailwind blue/indigo. 60-30-10 (navy / white / blue accent).
- **Typography:** Headings = **Archivo Black** (Google Fonts). Body/UI = **Inter**. Two sans-serifs by design — do NOT force a serif. Tight tracking (`-0.02em`) on big headings, line-height `1.7` on body. Hero H1 ~60-76px desktop, ~40-48px mobile, white with the key word in `#4A90E0` and a period.
- **Hero:** roof photo + navy overlay (`#0F1B2A` ~55%) + big Archivo Black H1 + subtitle + two buttons (solid blue primary + outlined phone).
- **Buttons:** primary = `#4A90E0` bg, white text, radius 8px, hover `#3A78C2`, blue-tinted low-opacity shadow. Secondary = outlined.
- **Shadows:** layered, color-tinted (navy/blue), low opacity. Never flat `shadow-md`.
- **Animations:** only `transform` and `opacity`, spring easing. Never `transition-all`.
- **Interactive states:** every clickable element needs hover, focus-visible, active.
- **Images:** navy gradient overlay + subtle `mix-blend-multiply` treatment for chromatic unity.
- **Depth:** layering system (base → elevated → floating), consistent spacing tokens.

## Tone / Content Rules (legal + brand)
- Honest, confident, Québécois. **Never oversell.** Never promise the roof will "last X years" as a guarantee, never claim it repairs leaks. Frame as "protect and extend."
- Do NOT invent testimonials or fake reviews. Use placeholders clearly marked until real ones exist.
- Display RBQ number and "Certifié GoNano / Assuré" in footer and relevant pages. RBQ number placeholder: **5879-4868-01**.

## Hard Rules
- Do not add sections/content not in the reference or `content/` files.
- Do not "improve" the reference design — match it.
- Do not stop after one screenshot pass.
- Do not use `transition-all`.
- Do not use default Tailwind blue/indigo as primary color.
- Do not invent brand colors, fonts, copy, or testimonials.
- Build one page at a time; get approval on the homepage before continuing.