# Pre-Launch Checklist — CheckYourCalendar

> This checklist is specific to CheckYourCalendar. Every item has a reason tied to this project's product, architecture, and audience. Generic filler items have been deliberately excluded.

---

## A. Architecture & Functionality

- [ ] Production build (`npm run build`) completes without errors
- [ ] All static pages pre-render successfully at build time
- [ ] On-demand routes (`export const prerender = false`) respond correctly on Cloudflare Workers
- [ ] Calendar Engine: All active calendar adapters implement `CalendarAdapter` interface correctly
- [ ] Observance Engine: Date rules resolve to correct Gregorian dates for all active observances
- [ ] Content System: All Content Collection schemas (stories, observances, calendars) validate via Zod
- [ ] "Today" page displays the current date across all active calendar systems
- [ ] Date pages convert Gregorian input to all active calendar systems correctly
- [ ] Observance pages display editorial content, not just name and date
- [ ] Story pages display full "Story Behind the Day" content with source citations
- [ ] Bidirectional navigation works: Date → Observance → Story AND Story → Observance → Date
- [ ] No placeholder content, Lorem ipsum, or unfinished pages remain on any indexable route

---

## B. Navigation & UX

### Global Navigation
- [ ] Clear global navigation reaches: Today, Calendars, Observances, Stories, About
- [ ] Mobile navigation is usable (hamburger/drawer or equivalent pattern)
- [ ] Keyboard-accessible navigation (Tab, Enter, Escape)
- [ ] Active/current page state indicated in navigation

### Breadcrumbs
- [ ] Breadcrumbs present on all deep pages (observance, story, date, calendar detail)
- [ ] Breadcrumbs are semantically correct (`<nav aria-label="Breadcrumb">` + ordered list)
- [ ] BreadcrumbList JSON-LD structured data matches visible breadcrumbs
- [ ] Breadcrumb trail reflects actual page hierarchy

### Custom 404 Page
- [ ] Custom 404 page exists and is styled consistently with the site
- [ ] 404 page provides helpful navigation: links to Today, Calendars, Observances, Stories
- [ ] 404 page returns HTTP 404 status code (not 200)
- [ ] 404 page suggests what the user might have been looking for (or offers search when available)

### Above-the-Fold Primary Action
- [ ] Homepage immediately communicates "What is today?" above the fold
- [ ] Primary action helps users check today's date, explore calendars, or discover today's observances
- [ ] No generic marketing CTA or sales-oriented language — the action is the product's core utility

### Internal Linking
- [ ] Today page links to relevant observances occurring today
- [ ] Observance pages link to their associated story
- [ ] Story pages link back to the observance and its calendar dates
- [ ] Calendar pages link to observances associated with that calendar system
- [ ] Date pages link to observances occurring on that date
- [ ] "Related observances" section on story pages
- [ ] No artificial or keyword-stuffed internal links

---

## C. SEO

### Page Titles & Metadata
- [ ] Every indexable page has a unique, meaningful `<title>`
- [ ] Title format consistent: "[Page Topic] | CheckYourCalendar"
- [ ] Every indexable page has a unique meta description
- [ ] Calendar, date, observance, and story page templates generate distinct titles (no duplicates)
- [ ] No pages with missing or default/placeholder titles

### Canonical URLs
- [ ] Every indexable page has a `<link rel="canonical">` tag
- [ ] Canonical URL matches the actual page URL (no trailing slash mismatches)
- [ ] No duplicate content between `/` and `/today/` (resolve via canonical or redirect)

### Sitemap & Robots
- [ ] `sitemap.xml` generated and accessible at `/sitemap.xml`
- [ ] Sitemap includes all indexable static pages
- [ ] Custom sitemap endpoint covers on-demand rendered routes if any
- [ ] `robots.txt` accessible at `/robots.txt`
- [ ] `robots.txt` references sitemap location
- [ ] No accidental `noindex` on public content pages
- [ ] No accidental indexing of utility/internal pages

### Structured Data (JSON-LD)
- [ ] Article schema on all story pages (headline, image, datePublished, author, publisher, dateModified)
- [ ] DefinedTerm schema on observance definition pages
- [ ] BreadcrumbList schema on all deep pages
- [ ] WebSite schema on homepage (with SearchAction when search is implemented)
- [ ] Organization schema for publisher info
- [ ] DO NOT use Event schema for observances without physical locations
- [ ] Structured data validates in Google Rich Results Test

### Open Graph & Social
- [ ] `og:title`, `og:description`, `og:image`, `og:url`, `og:type` on all pages
- [ ] `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image` on all pages
- [ ] Social preview image renders correctly when URL is shared
- [ ] Social preview image exists and is meaningful (not broken/missing)

### Content Quality for SEO
- [ ] No thin pages: every indexable page provides real user value
- [ ] No date pages created for dates with no observances or meaningful content
- [ ] No mass AI-generated filler content
- [ ] No duplicate stories or observance pages
- [ ] Observance pages have real editorial content, not just a name and date
- [ ] Story pages are substantial (researched, sourced, culturally respectful)

### URL Structure
- [ ] URLs are clean, descriptive, and consistent with documented URL architecture
- [ ] No broken internal links (404s within the site)
- [ ] All redirects return appropriate status codes (301 for permanent, 302 for temporary)

### Search Engine Readiness
- [ ] Google Search Console can be connected (verification meta tag or DNS record ready)
- [ ] Sitemap ready for submission
- [ ] Important pages are internally linked and crawlable
- [ ] No pages blocked unintentionally by robots.txt or meta robots

---

## D. Accessibility

### Semantic HTML
- [ ] Proper heading hierarchy (single `<h1>` per page, logical `<h2>`–`<h6>` nesting)
- [ ] Landmark regions: `<header>`, `<nav>`, `<main>`, `<footer>`
- [ ] Lists used for list-like content
- [ ] Tables used for tabular data (calendar grids) with proper `<th>` and scope

### Keyboard Navigation
- [ ] All interactive elements reachable via Tab key
- [ ] Visible focus indicators on all focusable elements
- [ ] Skip-to-main-content link present
- [ ] No keyboard traps
- [ ] Calendar navigation (month/year switching) accessible via keyboard

### Visual Accessibility
- [ ] Color contrast meets WCAG 2.2 AA: 4.5:1 for normal text, 3:1 for large text
- [ ] Information not conveyed by color alone (e.g., observance types have labels, not just color)
- [ ] `prefers-reduced-motion` respected (no essential information in animations)
- [ ] `prefers-contrast` handled where applicable
- [ ] Site usable at 200% browser zoom

### Images & Alt Text
- [ ] All meaningful images have descriptive alt text
- [ ] Decorative images use `alt=""` or are CSS backgrounds
- [ ] No keyword stuffing in alt text
- [ ] Social preview / Open Graph images have appropriate alt text where rendered

### Screen Reader Compatibility
- [ ] Page language declared: `<html lang="en">`
- [ ] Content language changes marked with `lang` attribute where applicable
- [ ] ARIA roles and properties used correctly (no ARIA is better than bad ARIA)
- [ ] Calendar dates announced with appropriate context (month, year, calendar system)
- [ ] Tested with at least one screen reader (NVDA on Windows recommended)

### Forms (if applicable)
- [ ] All form inputs have associated `<label>` elements
- [ ] Error messages are programmatically associated with inputs
- [ ] Form validation errors are announced to screen readers

---

## E. Content & Trust

### Cultural Content Quality
- [ ] All cultural/religious content is source-attributed
- [ ] Factual claims verified against authoritative references
- [ ] Culturally respectful language throughout
- [ ] No unsupported religious claims or fabricated history
- [ ] Clear distinction between calculated dates and editorial/interpretive content
- [ ] Regional and traditional differences represented where relevant
- [ ] No content copied from competitor websites

### Content Completeness
- [ ] No placeholder or stub pages accessible to users
- [ ] No "Coming Soon" pages indexed by search engines
- [ ] Every published observance has at minimum: name, type, calendar, date rule, short description
- [ ] Every published story has at minimum: overview, significance, history, sources
- [ ] Verification status tracked: verified / provisional / unverified

### Trust Pages
- [ ] About page explains what CheckYourCalendar is, why it exists, and the date→meaning→story concept
- [ ] About page describes how calendar calculations work at a high level
- [ ] About page explains how cultural information is researched and verified
- [ ] Methodology page documents calculation sources and editorial standards
- [ ] Privacy Policy page exists (required before any analytics or ads)
- [ ] Contact method provided (email, form, or similar)
- [ ] Terms of Service page if appropriate for the launch scope

### Reviews & Testimonials
- [ ] No fabricated reviews or testimonials anywhere on the site
- [ ] If user feedback is collected later, only verified/permissioned testimonials are displayed

---

## F. Performance

### Core Web Vitals
- [ ] LCP (Largest Contentful Paint) ≤ 2.5 seconds
- [ ] INP (Interaction to Next Paint) ≤ 200 milliseconds
- [ ] CLS (Cumulative Layout Shift) ≤ 0.10
- [ ] Measured on real device / Lighthouse / PageSpeed Insights

### Asset Optimization
- [ ] Images optimized (appropriate format, sizing, compression)
- [ ] Fonts loaded efficiently (subset, `font-display: swap` or `optional`)
- [ ] CSS minimized
- [ ] Zero JavaScript shipped by default on content pages (Astro's default)
- [ ] Client-side JS added only where genuinely needed (timezone detection, calendar interaction)

### Caching & Delivery
- [ ] Static assets served via Cloudflare CDN with appropriate cache headers
- [ ] No blocking third-party scripts unless justified
- [ ] Compression enabled (Brotli/gzip via Cloudflare)

### Mobile Performance
- [ ] Pages load acceptably on mid-range mobile devices
- [ ] No layout shifts on mobile during page load
- [ ] Touch targets minimum 44×44px

---

## G. Analytics & Privacy

### Analytics
- [ ] Privacy-conscious analytics configured (Cloudflare Web Analytics preferred)
- [ ] Analytics script loads without blocking page render
- [ ] Analytics is actually receiving data (verify in dashboard before launch)
- [ ] No unnecessary tracking pixels, heatmaps, or third-party analytics scripts

### Privacy
- [ ] Identify what cookies/tracking the site actually uses
- [ ] If analytics is cookie-free (Cloudflare Web Analytics is): no cookie banner needed
- [ ] If cookie-based tracking or ads are added later: reassess consent requirements
- [ ] Privacy Policy accurately reflects actual data collection practices
- [ ] No user-identifiable data collected without disclosure

---

## H. Legal / Basic Trust Pages

- [ ] Privacy Policy published and linked from footer/navigation
- [ ] About page published
- [ ] Contact information or contact page available
- [ ] Methodology / Sources page published
- [ ] Terms of Service if appropriate
- [ ] Clear ownership / maintainer information (at minimum on About page)
- [ ] No unlicensed content, images, or data

---

## I. Technical Deployment

### Build & Deploy
- [ ] Production build (`npm run build`) succeeds cleanly
- [ ] `npx wrangler deploy` succeeds to Cloudflare Workers
- [ ] Site accessible at Workers subdomain (e.g., `checkyourcalendar.workers.dev`)
- [ ] All static pages render correctly in production
- [ ] On-demand routes respond correctly in production

### Domain (when purchased)
- [ ] Domain DNS configured in Cloudflare
- [ ] HTTPS works (automatic via Cloudflare)
- [ ] www vs root domain behavior is intentional (redirect one to the other)
- [ ] No staging/preview URLs accidentally indexed

### Security Headers
- [ ] Content-Security-Policy header configured
- [ ] X-Content-Type-Options: nosniff
- [ ] X-Frame-Options: DENY (or SAMEORIGIN if embedding is needed)
- [ ] Referrer-Policy: strict-origin-when-cross-origin
- [ ] No secrets, API keys, or credentials committed to repository
- [ ] Environment variables used for any sensitive configuration
- [ ] `npm audit` shows no critical vulnerabilities

### Favicon & Icons
- [ ] Favicon present and renders in browser tab
- [ ] Appropriate icon sizes for bookmarks/home screen (apple-touch-icon, etc.)
- [ ] Open Graph / social preview image configured and renders correctly

---

## J. Final QA

### Calendar Accuracy
- [ ] Known-date reference tests pass for all active calendar systems
- [ ] Leap year boundary dates tested
- [ ] Calendar epoch / era boundary dates tested
- [ ] Timezone-sensitive calculations produce correct results
- [ ] Location-sensitive calculations (sunrise/sunset-dependent) handled correctly where applicable
- [ ] Observance dates cross-referenced against authoritative sources
- [ ] Regional variations documented and handled where relevant
- [ ] Calculation methodology documented on Methodology page

### Cross-Browser Testing
- [ ] Tested in Chrome, Firefox, Safari (at minimum)
- [ ] Tested on mobile (iOS Safari, Android Chrome at minimum)
- [ ] No critical layout or functionality issues

### Automated Tests
- [ ] Vitest unit tests pass (calendar conversions, observance matching)
- [ ] Playwright E2E tests pass (page loads, navigation, date display)
- [ ] @axe-core/playwright accessibility tests pass
- [ ] Lighthouse CI thresholds met (Performance ≥90, Accessibility ≥95, SEO ≥95, Best Practices ≥95)

### Manual Verification
- [ ] Walk through the entire user journey: Homepage → Calendar → Date → Observance → Story
- [ ] Walk through reverse journey: Story → Observance → Calendar → Date
- [ ] Verify "Today" page shows correct current date
- [ ] Verify all internal links work (no 404s within the site)
- [ ] Verify 404 page renders correctly for invalid URLs
- [ ] Review all published content for accuracy, tone, and completeness

---

## K. Optional / Future Items

> These items are NOT required for initial launch but should be planned for.

- [ ] **Search functionality**: On-site search for dates, observances, festivals
- [ ] **Calendar export**: ICS download for observances (Google Calendar / Apple Calendar)
- [ ] **Dark mode**: Respect `prefers-color-scheme` and/or manual toggle
- [ ] **Additional languages**: Gujarati, Hindi, Arabic, Hebrew, Persian, Chinese, Japanese
- [ ] **RTL layout**: For Arabic, Hebrew, Persian locales
- [ ] **Google AdSense**: Only after product is validated with high-quality content and organic traffic
- [ ] **Cookie consent**: Only if cookie-based tracking or ads are introduced
- [ ] **User feedback mechanism**: Verified testimonials or observance correction suggestions
- [ ] **Hindu/Gujarati traditional calendar**: Deferred from MVP due to complexity
- [ ] **Push notifications**: For upcoming observances (future consideration)
- [ ] **PWA / offline support**: Service worker for offline access (future consideration)
- [ ] **API**: Public calendar conversion API (future consideration, evaluate abuse risk)

---

> **Note:** This checklist should be reviewed and updated as the project evolves. Items marked as "Optional / Future" should be reassessed before each major release.
