# Internationalization Architecture

## Current Scope
- Initial language: English (en)
- Initial calendars: Multiple (Gregorian, Islamic, Hebrew, Indian, Chinese, Persian)
- Calendar names and dates will be displayed in their native scripts where appropriate using Intl API

## Future Language Priorities
1. English (en) — launch language
2. Gujarati (gu) — primary Indian language audience
3. Hindi (hi) — broad Indian audience
4. Arabic (ar) — Islamic calendar audience
5. Hebrew (he) — Hebrew calendar audience
6. Persian/Farsi (fa) — Persian calendar audience
7. Chinese (zh) — Chinese calendar audience
8. Japanese (ja) — Japanese calendar audience
9. Spanish (es) — large global audience

## Astro i18n Configuration
```javascript
// astro.config.mjs
i18n: {
  defaultLocale: 'en',
  locales: ['en'],  // Start with English only
  routing: {
    prefixDefaultLocale: false,  // English at root: /about/ not /en/about/
    redirectToDefaultLocale: false
  }
}
```
- Future: Add locales as translations become available
- Future: Consider domain mapping for major languages

## URL Strategy
- English: `/observance/diwali/`
- Gujarati: `/gu/observance/diwali/`
- Hindi: `/hi/observance/diwali/`
- Arabic: `/ar/observance/diwali/`
- etc.

## Translation Strategy
- UI strings: JSON translation files per locale
- Content (stories, observances): Separate content entries per locale in Content Collections
- Calendar names/dates: `Intl.DateTimeFormat` with locale parameter
- Do NOT auto-translate cultural/religious content with AI — requires human review

## Right-to-Left (RTL) Support
- Arabic, Hebrew, Persian require RTL layout
- Use CSS logical properties (`margin-inline-start` instead of `margin-left`)
- Use `dir="rtl"` on html element for RTL locales
- Test bidirectional text rendering

## Calendar Script Display
- `Intl.DateTimeFormat` automatically handles script rendering:
  - Arabic numerals for Islamic dates in Arabic locale
  - Hebrew characters for Hebrew dates in Hebrew locale
  - Devanagari numerals for Indian dates in Hindi locale
- Ensure font stack supports: Latin, Devanagari, Arabic, Hebrew, CJK

## hreflang Implementation
- As documented in SEO.md
- Astro's `getAbsoluteLocaleUrl()` for generating alternate URLs
- Self-referential + bidirectional + x-default tags in `<head>`

## OPEN QUESTIONS
- Whether to launch with English-only UI but show calendar dates in native scripts
- Whether machine translation is acceptable for UI strings (not content)
- Priority order for adding languages
- Whether to use a translation management platform
