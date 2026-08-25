# Accessibility Strategy

## Target Standards
- WCAG 2.2 Level AA (minimum)
- WCAG 2.2 Level AAA (target for key pages)
- Follow WAI-ARIA Authoring Practices where applicable

## Key Accessibility Requirements

### Perceivable
- Color contrast: minimum 4.5:1 for normal text, 3:1 for large text (AA), target 7:1 / 4.5:1 (AAA)
- Text alternatives for all non-decorative images
- Calendar information must not rely solely on color
- Responsive text sizing (no fixed pixel sizes for body text)
- Support prefers-reduced-motion
- Support prefers-contrast

### Operable
- Full keyboard navigation
- Visible focus indicators
- Skip navigation link
- No keyboard traps
- Calendar navigation accessible via keyboard
- Touch targets minimum 44x44px
- No time-limited content (unless configurable)

### Understandable
- Clear language (reading level appropriate for general audience)
- Consistent navigation
- Error identification and suggestions (for any future forms)
- Page language declared in html lang attribute
- Content language changes marked with lang attribute

### Robust
- Valid HTML
- ARIA roles and properties used correctly
- Works with screen readers (NVDA, JAWS, VoiceOver)
- Works with browser zoom up to 200%
- Works with text-only zoom

## Calendar-Specific Accessibility
- Calendar grids must use proper table semantics or grid ARIA role
- Date navigation must be keyboard accessible
- Screen readers must announce calendar context (month, year, calendar system)
- Observance information must be programmatically associated with dates
- Multi-calendar display must be clearly structured for screen readers

## Testing Strategy
- Automated: @axe-core/playwright in E2E tests
- Manual: Screen reader testing (NVDA on Windows)
- Lighthouse accessibility audit (target 100)
- Browser DevTools accessibility inspector
- Keyboard-only navigation testing

## Internationalization Accessibility
- Proper dir="rtl" for Arabic, Hebrew, Persian content
- Appropriate lang attributes for non-English content
- Unicode support for all calendar scripts
