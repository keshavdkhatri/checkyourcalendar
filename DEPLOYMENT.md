# Deployment Architecture

> **CRITICAL INSTRUCTION**: Do NOT deploy anything during planning.

## Recommended Architecture: Cloudflare Workers with Static Assets

### Why Workers (not Pages)
- **VERIFIED FACT**: `@astrojs/cloudflare` v14+ has removed Cloudflare Pages support entirely.
- **VERIFIED FACT**: Cloudflare officially recommends Workers for all new projects.
- Workers provides unified backend/frontend, edge rendering, and access to Durable Objects/KV/D1 if needed later.
- Workers Static Assets serves pre-rendered content from Cloudflare's CDN.

### Rendering Strategy
```text
┌─────────────────────────────────────────┐
│           Cloudflare CDN/Edge           │
├─────────────────────────────────────────┤
│                                         │
│  Static Assets (pre-rendered at build)  │
│  ├── / (homepage/today)                 │
│  ├── /calendar/* (calendar pages)       │
│  ├── /observance/* (observance pages)   │
│  ├── /story/* (story pages)             │
│  ├── /about, /methodology, etc.         │
│  └── assets (CSS, JS, images, fonts)    │
│                                         │
│  Worker (on-demand rendering)           │
│  ├── /date/[YYYY-MM-DD]/ (arbitrary     │
│  │    date lookup with conversion)      │
│  └── Future: search, personalization    │
│                                         │
└─────────────────────────────────────────┘
```

### What Gets Pre-Rendered (Static)
- Homepage / today page (rebuilt daily or on content change)
- All story pages
- All observance pages
- Calendar system index pages
- Calendar month/year pages for current ± 2 years
- About, methodology, privacy, terms pages
- Sitemap, robots.txt

### What Uses On-Demand Rendering (Worker)
- Arbitrary date lookup (`/date/[YYYY-MM-DD]/`): Converting any date to multiple calendars and finding observances requires computation.
- Future: Search functionality.
- Future: Location-based content personalization.

### Configuration
```jsonc
// wrangler.jsonc
{
  "name": "checkyourcalendar",
  "main": "@astrojs/cloudflare/entrypoints/server",
  "compatibility_date": "2026-08-01",
  "assets": {
    "binding": "ASSETS",
    "directory": "./dist"
  }
}
```

```javascript
// astro.config.mjs
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'static', // All pages pre-rendered by default
  adapter: cloudflare(), // Required for any on-demand routes
});

// Individual routes that genuinely need on-demand rendering
// opt in by adding this to the page's frontmatter:
//
//   export const prerender = false
//
// Example: src/pages/date/[date].astro
```

### Build & Deploy Pipeline
1. Developer pushes to GitHub.
2. GitHub Actions triggers build.
3. `npm run build` compiles Astro project.
4. `npx wrangler deploy` deploys to Cloudflare Workers.
5. Static assets served from CDN, dynamic routes handled by Worker.

### Daily Rebuild Strategy
- The "Today" page and date-sensitive content should be rebuilt daily.
- Options:
  a. GitHub Actions cron job (runs `build` + `deploy` daily at midnight UTC).
  b. Cloudflare Cron Triggers (Worker-based scheduled rebuild).
- **RECOMMENDATION**: GitHub Actions cron (simpler, free, already in pipeline).

### Free Tier Limits (Cloudflare Workers)
- 100,000 requests/day (free plan).
- 10ms CPU time per request.
- 1MB Worker size.
- Static assets: unlimited bandwidth on free plan.
- **ASSUMPTION**: Initial traffic will be well within free tier.

### Staging/Preview
- Use Cloudflare Workers preview deployments for PR review.
- Or: Separate staging Worker (e.g., `staging.checkyourcalendar.workers.dev`).

### Domain Setup (Future)
- `checkyourcalendar.com` → Cloudflare DNS → Workers route.
- HTTPS automatic via Cloudflare.
- **CRITICAL**: Do NOT set this up yet — domain not purchased.

### OPEN QUESTIONS
- **RESOLVED:** Use `output: 'static'` with per-route `export const prerender = false` opt-in for on-demand routes. No full-app SSR.
- Whether GitHub Actions or Cloudflare Cron Triggers is better for daily rebuilds.
- How to handle the build time if the site has thousands of pre-rendered date pages.
- Whether to use Cloudflare KV for caching computed calendar data.
