# Project: CheckYourCalendar

## Overview
**Project Name:** CheckYourCalendar
**Repository:** checkyourcalendar
**Planned Domain:** checkyourcalendar.com (not purchased yet)

**Vision:** "Check your calendar — and understand what today means"

**Positioning:** A global date-and-culture discovery platform connecting **DATE → CALENDAR → OBSERVANCE → MEANING → STORY → SOURCES**.

## What This Project is NOT
- **NOT** a generic calendar app for scheduling meetings.
- **NOT** a simple holiday list dump.
- **NOT** a mere date converter without context.
- **NOT** a Panchang clone or a purely religious calendar clone.
- **NOT** a site filled with mass AI-generated, thin, or copied content.

## Tech Stack & Tooling
**VERIFIED FACT:** The following technologies will be used to build the platform:
- **Framework:** Astro (`output: 'static'` default; individual routes opt into on-demand rendering via `export const prerender = false` only where genuinely required)
- **Language:** TypeScript
- **Hosting/Infrastructure:** Cloudflare Workers with Static Assets
- **Version Control:** GitHub

**AI Tooling Setup:**
- Google Antigravity 2.0
- StitchMCP
- Astro Docs MCP
- permissioned-github

## Constraints & Business Model
- **Cost Constraint:** Only the `.com` domain should cost money. Free/open-source tools for everything else. No paid APIs or paid infrastructure tiers.
- **Access Constraint:** No user accounts required for core functionality.
- **Team Context:** Solo developer using AI-assisted development.
- **Future Monetization (ASSUMPTION):** Potentially Google AdSense, but *only* after the product is validated, maintains high-quality content, and has established organic traffic.

## Launch Philosophy
- Start small with verified, highly accurate data.
- Expand continuously.
- **Quality over quantity:** It is better to have 3 deeply researched calendar systems with cultural context than 50 shallow, mathematically generated calendar conversions.

## Open Questions
- **OPEN QUESTION:** How frequently should the static "Today" page be rebuilt? Daily via a GitHub Actions cron job, or on every content change?
