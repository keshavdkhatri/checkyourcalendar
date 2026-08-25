# Testing Strategy

## Testing Philosophy
- **VERIFIED FACT**: Calendar accuracy is high-trust functionality — errors affect real-world decisions.
- **RECOMMENDATION**: Test calculations against verified reference dates, not invented data.
- **RECOMMENDATION**: Automate what can be automated, document what requires manual verification.

## Testing Stack
- **Unit/Integration**: Vitest (Vite-native, fast, Astro-compatible)
- **Component**: Astro Container API (`experimental_AstroContainer` for `.astro` components)
- **E2E**: Playwright (Chromium, WebKit, Firefox)
- **Accessibility**: `@axe-core/playwright` (integrated into E2E tests)
- **Performance**: Lighthouse CI
- **Configuration**: `vitest.config.ts` using Astro's `getViteConfig()` helper

## Test Categories

### Calendar Conversion Tests
- Known-date reference tests: Verified Gregorian ↔ [Calendar] conversions
- Leap year boundary tests
- Calendar epoch/era boundary tests
- Month boundary tests
- Year boundary tests (especially lunisolar calendars where year length varies)
- **CRITICAL**: DO NOT invent test vectors — use authoritative reference dates.

### Observance Matching Tests
- Fixed-date observances resolve correctly
- Calendar-dependent observances resolve to correct Gregorian dates
- Location-dependent observances handle timezone correctly
- Regional variation handling

### Content Tests
- Content Collection schema validation (Zod)
- Required frontmatter fields present
- Source references valid
- Internal links resolve
- No orphaned content

### E2E Tests (Playwright)
- Homepage loads and displays today's date
- Calendar navigation works
- Date pages show correct multi-calendar dates
- Observance pages load with content
- Story pages display editorial content
- Navigation breadcrumbs work
- Mobile responsive layout

### Accessibility Tests
- `axe-core` automated checks on all page types
- Keyboard navigation through calendar components
- Screen reader landmark navigation
- Color contrast compliance
- Focus management
- ARIA attribute correctness

### SEO Tests
- Structured data validation (JSON-LD)
- Meta tags present and correct
- Canonical URLs correct
- Sitemap validity
- `robots.txt` correctness
- Open Graph tags present

### Performance Tests
- Lighthouse CI with thresholds: Performance ≥90, Accessibility ≥95, SEO ≥95, Best Practices ≥95
- LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.10
- Bundle size monitoring
- Zero unnecessary JS shipped

## Reference Date Sources
- Hebcal.com for Hebrew ↔ Gregorian verification
- Islamic calendar authorities for Hijri ↔ Gregorian verification
- Government sources for national holidays
- USNO (US Naval Observatory) for astronomical data
- **CRITICAL**: DO NOT use competitor websites as sole verification source.

## CI/CD Integration
- Run Vitest on every PR
- Run Playwright E2E on every PR (against preview build)
- Run Lighthouse CI on every PR
- Calendar accuracy regression suite runs on main branch
