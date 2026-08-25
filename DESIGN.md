# Design Direction

## Design Philosophy
- "I came here to check a date, but I discovered something interesting about today"
- Balance UTILITY with DISCOVERY
- Modern, trustworthy, editorial, warm, clean, global, culturally respectful
- Mobile-first, accessible, fast

## Visual Direction
- NOT copying any competitor's visual style
- Editorial/magazine feel rather than utility dashboard
- Clean typography as primary design element
- Warm, inviting color palette that feels global (not tied to any single culture)
- Generous whitespace (contrast with DrikPanchang's density)
- Card-based observance presentation
- Progressive disclosure (simple first, detail available)

## Layout Concepts
- Homepage: Today-centric feed, not a calendar grid
- Date pages: Multi-calendar display + observance cards + story teasers
- Story pages: Long-form editorial with clear sections, source citations
- Calendar pages: Clean month/year navigation with observance highlights
- Observance pages: Hero + essential info + story link + related dates

## Typography
- Clean, readable system/web font stack
- Strong typographic hierarchy (headlines, subheads, body, captions)
- Support for non-Latin scripts (Devanagari, Arabic, Hebrew, Chinese) in future

## Color
- Neutral base palette (not religious-coded)
- Accent colors for different content types (festivals, fasts, international days, etc.)
- High contrast for accessibility (WCAG AA minimum, AAA target)
- Dark mode support planned for future

## Responsive Design
- Mobile-first breakpoint strategy
- Touch-friendly interaction targets (minimum 44x44px)
- No horizontal scrolling
- Readable without zooming

## Component Patterns
- Observance card (name, type, calendar, region, short description)
- Calendar date display (multi-system, compact and expanded)
- Story teaser card
- Breadcrumb navigation
- Calendar navigation (month/year picker)
- Search (future)

## Cultural Sensitivity
- No imagery that could be seen as trivializing traditions
- Neutral iconography (avoid religious symbols as decorative elements)
- Respectful color associations
- Content tone: informative and respectful, not promotional

## StitchMCP Integration
- StitchMCP will be used for design system creation and screen generation
- Design system should be created before component implementation
- Iterate on design through StitchMCP before coding
