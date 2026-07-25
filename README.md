# Ritula SEO — Astro pSEO Starter

Working proof-of-pipeline: 2 topic pages + 1 roadmap page, generated from `src/content/topics/topics.json`.
Already builds clean (`npm run build` produces 4 static pages + sitemap).

## Tonight's steps

### 1. Prerequisites (check you have these)
```bash
node -v   # need 22.12+
git --version
```
If missing: install Node from nodejs.org (LTS), Git from git-scm.com.

### 2. Get it running locally
Unzip this folder, then:
```bash
cd ritula-seo
npm install
npm run dev
```
Open http://localhost:4321 — you should see the homepage listing the 3 example pages.

### 3. Fill in your real content
Open `src/content/topics/topics.json` and replace every `"REPLACE..."` string with real
content from your actual corpus (STATION_PACKS lines, station notes). Add more entries
using the same shape — `type: "topic"` or `type: "transition"`.

### 4. Push to GitHub
```bash
# still inside ritula-seo/
git add -A
git commit -m "Initial Ritula pSEO scaffold"
```
Then on github.com: New repository → name it (e.g. `ritula-seo`) → don't initialize with
a README (you already have one) → copy the commands it shows you, e.g.:
```bash
git remote add origin https://github.com/YOUR_USERNAME/ritula-seo.git
git branch -M main
git push -u origin main
```

### 5. Deploy — Cloudflare Pages (recommended, from earlier discussion)
1. Go to the Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git
2. Pick your `ritula-seo` repo
3. Build settings: framework preset "Astro", build command `npm run build`, output
   directory `dist` — Cloudflare usually auto-detects these
4. Deploy. You'll get a `*.pages.dev` preview URL immediately

### 6. Once your domain is bought
- In `astro.config.mjs`, change `site: 'https://ritula.app'` if the final domain differs
- In Cloudflare Pages → your project → Custom domains → add `ritula.app`
- Follow Cloudflare's DNS instructions (if you registered elsewhere, you'll add the
  domain's nameservers or a CNAME record depending on setup)

## Project structure
```
src/
  content.config.ts        — schema for the topics collection
  content/topics/topics.json — your data source (this is what scales)
  layouts/Layout.astro     — shared theme (light grey bg, coral accent)
  pages/
    index.astro            — homepage, lists all generated pages
    topics/[slug].astro    — topic page template
    roadmap/[slug].astro   — transition/roadmap page template
```

## Adding your next wave of pages
Just add more entries to `topics.json` — no new code needed. That's the whole point
of the pattern: one template, data does the multiplying. Keep waves to ~15–30 pages
at a time per the rollout plan discussed earlier, and quality-check each one before
it goes in the file.
