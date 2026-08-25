# Data and API Strategy

This document outlines the dependencies, data sources, and API integrations powering CheckYourCalendar.

## Data Strategy: Offline-First
- **[DECISION]** Prefer local/static calculation over API calls wherever possible.
- Pre-compute common dates at build time via Astro for extremely fast static delivery.
- Perform client-side calculation for user-specific timezone adjustments.
- Fall back to API calls only for data that cannot be calculated locally or statically.

## Calendar Libraries Evaluation

| Library | Package | License | Downloads/wk | Calendars | Status | Notes |
|---------|---------|---------|-------------|-----------|--------|-------|
| `Intl.DateTimeFormat` | Built-in | N/A | N/A | 18 calendars | Stable | **PRO:** Native. **CON:** Formatting only, no math. |
| `@internationalized/date` | `@internationalized/date` | Apache-2.0 | 8.6M | Gregorian, Buddhist, Islamic variants, Hebrew, Indian, Japanese, Persian, etc. | Active (Adobe) | **PRO:** Full date math + manipulation. |
| Temporal Polyfill | `temporal-polyfill` | MIT | 3.4M | Gregorian + calendar arithmetic | Active | **PRO:** TC39 Stage 3, future-proof. |
| Hebcal Core | `@hebcal/core` | ISC | 70K | Hebrew | Active | **PRO:** Authoritative Hebrew calendar. |
| date-holidays | `date-holidays` | ISC | 813K | Multi-country | Active | **PRO:** Offline holiday calculations for 100+ countries. |

## Holiday/Observance Data Sources
- **Nager.Date API** (`https://date.nager.at/`): Free, no auth required, no API key. Covers 100+ countries via REST API. MIT licensed.
- **date-holidays npm package**: Comprehensive internal holiday calculation. ISC license. Fully offline capable.
- **Manual curation**: Required for cultural/religious observances not captured in public standard APIs.

## Public/Government Sources (For Verification)
- National government holiday proclamations.
- UN international days list.
- UNESCO cultural heritage designations.

## Reference Sources for Content
- **Encyclopedia Britannica**: Primary educational reference.
- **Wikipedia/Wikidata**: Useful for cross-referencing and discovery, but *not* to be used as a primary factual source.
- **Academic publications**.
- **Government cultural ministry publications**.
- **Religious authority publications** (where universally appropriate and non-sectarian).

## Licensing Summary
- Ensure full compatibility with Open Source requirements.
- `@internationalized/date` (Apache-2.0), `temporal-polyfill` (MIT), and Nager.Date (MIT) are fully compatible with free/open-source constraints.
- `date-holidays` and `@hebcal/core` use the permissive ISC license.

## What We Will NOT Use
- **[CONSTRAINT]** Paid APIs (e.g., Calendarific, TimeAndDate API) — strict zero-cost infrastructure constraint.
- **[CONSTRAINT]** Scraped data from competitor websites — strict ethical and legal boundaries.
- **[CONSTRAINT]** Unverified crowd-sourced data without internal editorial review.

## OPEN QUESTIONS
- **Library Sufficiency**: Is `@internationalized/date` sufficient for the Hindu/Gujarati calendar, or do we need a highly specialized library like `panchangam-js`?
- **Computation Strategy**: For complex calendars (like Hindu tithi calculation), should we pre-compute tables at build time or calculate purely at runtime in the browser?
- **API Fetching**: Should we use the Nager.Date API primarily at build time (pre-fetch via Astro) or client-side?
- **Authority Declarations**: How do we systematically handle Islamic dates that are declared dynamically by local moon sighting authorities?
