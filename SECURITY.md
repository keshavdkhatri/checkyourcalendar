# Security Strategy

## Principles
- **RECOMMENDATION**: Minimal attack surface (static site + edge Workers).
- **VERIFIED FACT**: No user accounts (initially) = no auth to compromise.
- **VERIFIED FACT**: No database (initially) = no SQL injection.
- **VERIFIED FACT**: No user-generated content (initially) = no XSS from users.

## Secrets Management
- No secrets in Git repository.
- Use Cloudflare Workers environment variables for any secrets.
- `.env` files in `.gitignore`.
- No API keys in client-side code.
- **ASSUMPTION**: Currently no secrets required (free APIs, no auth).

## Content Security
- Content Security Policy (CSP) headers via Cloudflare Workers.
- Strict CSP: `default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'`
- Adjust CSP when/if ads are added (will need to allow Google ad domains).
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

## Input Validation
- Date parameters validated against expected formats.
- Calendar system identifiers validated against known list.
- URL path parameters sanitized.
- No `eval()` or dynamic code execution.
- No user-supplied HTML rendering.

## Dependency Security
- `npm audit` in CI/CD pipeline.
- Dependabot or Renovate for automated dependency updates.
- Minimal dependency tree.
- Prefer well-maintained packages with large user bases.
- Review new dependencies before adding.

## Deployment Security
- **VERIFIED FACT**: Cloudflare provides DDoS protection on free tier.
- HTTPS enforced by Cloudflare.
- No exposed admin interfaces.
- Build artifacts are immutable.

## Rate Limiting
- Not needed initially (static site).
- If API endpoints are added later, use Cloudflare rate limiting.

## Privacy
- No cookies required for core functionality.
- No user tracking (initially).
- If analytics added later, use privacy-respecting approach.
- If ads added later, comply with GDPR/CCPA requirements.
- Privacy policy page required before any tracking/ads.

## OPEN QUESTIONS
- Whether to implement Subresource Integrity (SRI) for any external scripts.
- CSP adjustments needed for Google AdSense (future).
- Whether Cloudflare Web Analytics (free, privacy-first) should be used.
