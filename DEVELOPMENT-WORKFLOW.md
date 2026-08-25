# Development Workflow

## AI-Assisted Development
- **Primary tool**: Google Antigravity 2.0
- **Design**: StitchMCP for design system and screen generation
- **Astro guidance**: Astro Docs MCP for framework documentation
- **Git**: permissioned-github skill for repository operations
- **Cloudflare MCP**: NOT currently authorized, not required

## Git Workflow
- Main branch: `main` (production)
- Feature branches: `feature/[description]`
- Fix branches: `fix/[description]`
- Documentation branches: `docs/[description]`
- PR-based workflow with review before merge

## Branch Naming Convention
- `feature/calendar-engine`
- `feature/observance-engine`
- `feature/content-system`
- `feature/homepage-today`
- `feature/story-pages`
- `fix/islamic-calendar-accuracy`
- `docs/add-research-notes`

## Commit Message Convention
- `feat: [description]` — New feature
- `fix: [description]` — Bug fix
- `docs: [description]` — Documentation change
- `test: [description]` — Test addition/change
- `refactor: [description]` — Code refactor
- `style: [description]` — Formatting/style change
- `chore: [description]` — Build/tooling change

## Development Phases

### Phase 0: Planning (CURRENT)
- Create project documentation.
- Research competitors and technology.
- Define architecture and data models.
- **CRITICAL**: NO implementation.

### Phase 1: Foundation
- Initialize Astro project.
- Configure TypeScript.
- Configure Cloudflare adapter.
- Set up Vitest and Playwright.
- Create base layout and design system (via StitchMCP).
- Implement Gregorian calendar adapter.
- Create Content Collections schemas.

### Phase 2: Core Engine
- Implement calendar adapters (start with 3-5 calendars).
- Implement observance matching engine.
- Create content collection entries for initial observances.
- Write calendar conversion unit tests.

### Phase 3: Pages & Content
- Build homepage/today experience.
- Build date pages.
- Build observance pages.
- Build story pages.
- Write initial story content (5-10 well-researched stories).
- SEO implementation (structured data, meta, sitemap).

### Phase 4: Polish & Launch
- Accessibility audit and fixes.
- Performance optimization.
- E2E test suite.
- Deploy to Cloudflare Workers (staging).
- Content review and expansion.
- Purchase domain when ready.
- Launch.

### Phase 5: Growth (Post-Launch)
- Add more calendar systems.
- Add more observances and stories.
- Add more languages.
- Add search functionality.
- Consider analytics and monetization.

## Code Quality Standards
- TypeScript strict mode.
- ESLint + Prettier.
- No `any` types without justification.
- Meaningful variable/function names.
- Comments for non-obvious logic (especially calendar calculations).
- JSDoc for public interfaces.

## Documentation Standards
- Keep project `.md` files updated as architecture evolves.
- Document all calendar calculation sources and algorithms.
- Document all observance date rules with sources.
- Update `RESEARCH-NOTES.md` with new findings.

## OPEN QUESTIONS
- Whether to use a monorepo or single package.
- Whether to extract calendar engine as separate npm package.
- Whether to use GitHub Projects for task tracking or keep it simple.
- Exact CI/CD pipeline configuration.
