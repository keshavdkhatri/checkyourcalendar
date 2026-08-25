# Calendar Engine Architecture

## Calendar Types
- **Solar calendars**: Gregorian, Persian/Jalali
- **Lunar calendars**: Islamic/Hijri variants
- **Lunisolar calendars**: Hebrew, Chinese, Hindu/Indian
- **Astronomical calendars**: Hindu calculations (some depend on actual planetary positions)
- **Rule-based calendars**: Japanese imperial eras
- **Location-dependent calendars**: Hindu calendars vary by region; Islamic calendars may depend on moon sighting authority

## Architecture: Adapter Pattern
Every calendar must implement the following adapter interface to ensure consistent integration into the CheckYourCalendar system:

```typescript
interface CalendarAdapter {
  readonly id: string;           // e.g., 'gregorian', 'islamic-umalqura', 'hebrew'
  readonly name: string;         // Display name
  readonly type: 'solar' | 'lunar' | 'lunisolar' | 'other';
  
  // Convert from internal representation to this calendar's date
  fromGregorian(date: GregorianDate): CalendarDate;
  
  // Convert from this calendar's date to Gregorian
  toGregorian(date: CalendarDate): GregorianDate;
  
  // Format a date in this calendar system
  format(date: CalendarDate, options?: FormatOptions): string;
  
  // Get today's date in this calendar
  today(timezone?: string): CalendarDate;
  
  // Metadata
  getMonths(): MonthInfo[];
  getEras?(): EraInfo[];
}
```

### CalendarDate Interface
```typescript
interface CalendarDate {
  calendar: string;    // adapter id
  era?: string;
  year: number;
  month: number;
  day: number;
  // Optional extended info
  monthName?: string;
  dayOfWeek?: number;
}
```

## Internal Date Representation
- **[DECISION]** Use Gregorian as the internal pivot format.
- All conversions go through Gregorian: `CalendarA → Gregorian → CalendarB`.
- Store dates internally as ISO 8601 Gregorian strings.
- Convert to display calendars at render time based on the active adapter.

## Implementation Strategy Per Calendar

1. **Gregorian**: Native JavaScript `Date` / `Intl.DateTimeFormat`.
2. **Islamic (Hijri)**: `@internationalized/date` `IslamicUmalquraCalendar` + `Intl.DateTimeFormat('ar-SA', {calendar: 'islamic-umalqura'})`. 
   - *Note*: Multiple Islamic calendar variants exist (civil, tabular, Umm al-Qura, moon-sighting). We will default to Umm al-Qura for predictable calculation but explicitly document the differences in the UI.
3. **Hebrew**: `@hebcal/core` for calculations + `Intl.DateTimeFormat('he', {calendar: 'hebrew'})` for formatting.
   - *Note*: Hebrew calendar is lunisolar with complex leap year rules (Metonic cycle). Hebcal is authoritative.
4. **Indian National (Saka)**: `Intl.DateTimeFormat` with `{calendar: 'indian'}`.
   - *Note*: This is the CIVIL calendar, different from the traditional Hindu Panchang.
5. **Chinese**: `Intl.DateTimeFormat` with `{calendar: 'chinese'}`.
   - *Note*: Chinese calendar is lunisolar, requires astronomical calculation for accurate month determination.
6. **Persian (Jalali/Solar Hijri)**: `Intl.DateTimeFormat` with `{calendar: 'persian'}`.

## Hindu/Gujarati Calendar Challenge
**[WARNING]** This is the HARDEST calendar to implement correctly.
- **Complexity**: Multiple regional systems (Vikram Samvat, Shaka Samvat, etc.).
- **Lunar months**: Amanta vs Purnimanta systems.
- **Tithi**: A lunar day is NOT a fixed 24-hour period.
- **Variations**: Month names vary by region. Festival dates depend on tithi, nakshatra, and sometimes astronomical events.
- **Location-dependent**: Sunrise-based day boundaries mean a festival might fall on different days in different timezones.
- **API limitations**: No simple `Intl` API support for traditional Hindu calendar.
- **[OPEN QUESTION]**: Should we use pre-computed tables for specific years or runtime calculation (e.g., `panchangam-js`)?
- **[RISK]**: High complexity; accuracy is critical for religious observance dates. Errors lead to massive user distrust.

## Timezone and Location Handling
- Calendar dates may differ based on timezone.
- Some calendars have sunrise-based day boundaries (Hindu).
- Some calendars depend on sunset (Hebrew, Islamic).
- Location affects astronomical calculations.
- **[DECISION]**: Accept timezone as input, default to the user's browser timezone (`Intl.DateTimeFormat().resolvedOptions().timeZone`).

## Accuracy Requirements
- Calendar conversions must be verified against authoritative sources.
- Known reference dates should be maintained as test fixtures.
- Hindu/Vedic calculations require higher precision than simple date math.
- Islamic dates may have a 1-day uncertainty depending on moon sighting vs calculation.

## Candidate Libraries Summary Table

| Library | Package | License | Weekly Downloads | Supported Calendars | Maintenance Status | Accuracy Notes |
|---------|---------|---------|-----------------|-------------------|--------------------|----------------|
| Intl.DateTimeFormat | Built-in | N/A | N/A | 18 natively | Stable (Browser) | Good for formatting, lacks math |
| @internationalized/date | `@internationalized/date` | Apache-2.0 | 8.6M | Gregorian, Islamic, Hebrew, etc. | Active (Adobe) | Robust immutable date manipulation |
| Temporal API Polyfill | `temporal-polyfill` | MIT | 3.4M | Gregorian + calendar math | Active | Standardized future API |
| Hebcal Core | `@hebcal/core` | ISC | 70K | Hebrew | Active | Highly authoritative for Hebrew |
| Date Holidays | `date-holidays` | ISC | 813K | 100+ Countries | Active | Great for public/national holidays |

## Future Calendar Expansion
**Workflow for adding new calendars**:
1. Create a new adapter implementing `CalendarAdapter`.
2. Register the adapter in the central calendar registry.
3. Add relevant calendar metadata to the Content System.
4. Add robust unit tests with known reference dates to ensure conversion accuracy.
