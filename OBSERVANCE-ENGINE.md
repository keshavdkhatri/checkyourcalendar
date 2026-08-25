# Observance Engine Architecture

The Observance Engine determines **what** is being observed on a given date across the various calendar systems.

## Observance Data Model
```typescript
interface Observance {
  id: string;                    // unique slug
  name: string;                  // display name
  type: ObservanceType;          // see enum below
  calendar: string;              // which calendar system determines the date
  dateRule: DateRule;            // how the date is calculated
  regions: string[];             // ISO country codes or region identifiers
  traditions: string[];          // e.g., ['hindu-vaishnav', 'hindu-shaiv']
  communities: string[];         // e.g., ['gujarati', 'marathi']
  isPublicHoliday: boolean;
  countries: string[];           // countries where it's a public holiday
  verificationStatus: 'verified' | 'provisional' | 'unverified';
  sources: Source[];
  storyRef?: string;             // reference to story content
  relatedObservances: string[];  // IDs of related observances
  shortDescription: string;
  tags: string[];
}

enum ObservanceType {
  FESTIVAL = 'festival',
  FAST = 'fast',
  HOLY_DAY = 'holy_day',
  NATIONAL_HOLIDAY = 'national_holiday',
  INTERNATIONAL_DAY = 'international_day',
  COMMEMORATION = 'commemoration',
  SEASONAL = 'seasonal',
  ASTRONOMICAL = 'astronomical',
}

interface DateRule {
  type: 'fixed-gregorian' | 'fixed-calendar' | 'calculated' | 'astronomical' | 'authority-declared';
  // For fixed-gregorian: month + day
  month?: number;
  day?: number;
  // For fixed-calendar: calendar + month + day (e.g., 15th of Sha'ban)
  calendar?: string;
  calendarMonth?: number;
  calendarDay?: number;
  // For calculated: reference to calculation function
  calculationRef?: string;
  // For authority-declared: no pre-calculation possible
  authorityNote?: string;
  // Timezone/location dependency
  locationDependent: boolean;
  sunriseDependent: boolean;
  sunsetDependent: boolean;
}

interface Source {
  name: string;
  url?: string;
  type: 'academic' | 'government' | 'religious-authority' | 'cultural-org' | 'encyclopedia' | 'other';
  accessDate?: string;
}
```

## Date Rule Types

1. **Fixed Gregorian**: Always falls on a specific Gregorian date. 
   - *Examples*: Christmas (Dec 25), US Independence Day (Jul 4).
2. **Fixed Calendar**: Always falls on a specific date in a specific non-Gregorian calendar.
   - *Examples*: Eid al-Fitr (1 Shawwal in Islamic calendar), Yom Kippur (10 Tishrei in Hebrew calendar).
3. **Calculated**: Follows a mathematical or rule-based formula that requires runtime evaluation.
   - *Examples*: Easter (complex lunisolar rule based on spring equinox and moon phase), Ekadashi (11th tithi of each lunar fortnight in Hindu calendar).
4. **Astronomical**: Determined purely by planetary/solar events.
   - *Examples*: Makar Sankranti (sun enters Capricorn), equinoxes/solstices.
5. **Authority-declared**: Cannot be perfectly calculated in advance; requires official decree.
   - *Examples*: Certain Islamic observances dependent on official localized moon sighting announcements.

## Observance Matching Algorithm

- **Input**: A Gregorian date + optional location/timezone data.
- **Process**:
  1. Convert the input Gregorian date to all supported internal calendars via the Calendar Engine.
  2. Filter `Observance` database against these calendar dates based on their `dateRule`.
  3. Execute any `calculated` or `astronomical` references for dynamic date matching.
- **Output**: List of `Observance` objects valid for that date, with metadata and `storyRef` references for UI population.

## Regional Variations
- Same observance may have different names in different regions (e.g., Diwali / Deepavali).
- Same observance may be celebrated on different days due to timezone/sunrise boundary differences.
- Different traditions within the same religion may follow different calculation methods.
- **[DECISION]**: The system must model these variations as separate entries or contextual aliases without assuming a single "correct" version.

## Relationship to Content System
- Each observance can optionally reference a story via `storyRef`.
- **Stories** provide meaning, history, and cultural context.
- **Observances** provide the raw data: dates, rules, calendar anchors.
- **[ARCHITECTURAL DECISION]**: This separation of concerns allows the same rich historical story to be linked from multiple date occurrences (e.g., regional variations of a festival pointing to the same core article).

## Data Sources for Observances
- **Nager.Date API**: Free, no auth, 100+ countries, public holidays.
- **date-holidays npm package**: 813K downloads, highly comprehensive calculation engine for public holidays.
- **Manual Curation**: Needed for deep cultural/religious observances not included in standard global APIs.

## Verification Requirements
- All observance dates must be cross-referenced with authoritative sources (listed in `sources`).
- Provisional/unverified observances must be clearly marked in the UI to manage user expectations.
- Future roadmap includes a community feedback mechanism to correct location-specific variances.
