# SEO Strategy

## URL Architecture
Proposed URL structure (document rationale for each):
- `/` — Homepage (Today experience)
- `/today/` — Today's date across all calendars (may redirect to / or be canonical)
- `/calendar/` — Calendar systems index
- `/calendar/[system]/` — e.g., `/calendar/gregorian/`, `/calendar/islamic/`, `/calendar/hebrew/`
- `/calendar/[system]/[year]/` — Year view
- `/calendar/[system]/[year]/[month]/` — Month view
- `/date/[YYYY-MM-DD]/` — Gregorian date page (what happened/happens on this date)
- `/observance/` — Observances index
- `/observance/[slug]/` — Individual observance page
- `/story/` — Stories index
- `/story/[slug]/` — Individual story page ("Story Behind the Day")
- `/about/` — About page
- `/methodology/` — How calculations work, sources
- `/privacy/` — Privacy policy
- `/terms/` — Terms of service

## Structured Data Strategy
- DO NOT use Event schema for general observances without physical locations (Google forbids this)
- Use Article schema (JSON-LD) for story pages with headline, image, datePublished, author, publisher, dateModified
- Use DefinedTerm for observance definition pages
- Use BreadcrumbList on all pages
- Use WebSite schema on homepage with SearchAction for sitelinks search
- Use Organization schema for publisher info
- Consider ItemList for observance index pages

## Metadata Strategy
- Unique title and meta description for every page
- Title format: "[Page Topic] | CheckYourCalendar"
- Open Graph tags (og:title, og:description, og:image, og:url, og:type)
- Twitter Card tags (twitter:card, twitter:title, twitter:description, twitter:image)
- Canonical URLs on every page
- No duplicate content between `/today/` and `/` if they show similar content

## Sitemap Strategy
- Use `@astrojs/sitemap` for static pre-rendered routes
- Custom sitemap endpoint for on-demand rendered date pages (routes using `export const prerender = false`)
- Separate sitemaps by content type (calendar pages, observance pages, story pages)
- Sitemap index file
- Submit to Google Search Console

## robots.txt
- Allow all public content
- Disallow admin/internal paths if any
- Reference sitemap location

## Internal Linking
- Every date page links to relevant observances
- Every observance page links to its story
- Every story links back to the observance and calendar dates
- Breadcrumbs on every page
- Related observances section on story pages
- "Upcoming" and "Recent" observance navigation

## Thin Content Prevention
- Do NOT create date pages for dates with no observances or meaningful content
- Calendar month/year pages must have substantial utility (not just a grid)
- Every observance page must have real editorial content, not just a name and date
- Story pages are the primary content — they must be substantial
- Programmatic pages (date conversions) are acceptable IF they provide genuine utility

## Duplicate Content Prevention
- Canonical URLs prevent duplicate indexing
- Same observance appearing on multiple date pages: canonical to the observance page
- hreflang for multilingual versions
- Pagination with `rel=next/prev` if applicable

## International SEO / hreflang
- Initial language: English (en)
- Future languages: Gujarati (gu), Hindi (hi), Arabic (ar), Hebrew (he), Persian (fa), Chinese (zh), Japanese (ja)
- Astro i18n routing with `prefixDefaultLocale: false` (English at root)
- hreflang tags in `<head>` using `getAbsoluteLocaleUrl()`
- x-default pointing to English version
- Bidirectional and self-referential hreflang links

## Core Web Vitals Targets
- LCP ≤ 2.5 seconds
- INP ≤ 200 milliseconds  
- CLS ≤ 0.10
- Strategy: Static pages, minimal JS, optimized images, Cloudflare CDN

## E-E-A-T for Cultural/Religious Content
- Experience: Community input and cultural context
- Expertise: Cited authoritative sources, methodological transparency
- Authoritativeness: Clear editorial identity, about page, methodology page
- Trustworthiness: Accurate dates, transparent sources, no sectarian bias, update timestamps
