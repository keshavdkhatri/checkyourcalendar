import { describe, it, expect } from 'vitest';
import { observanceRules } from '../engines/observance/rules';
import { localizedObservances, getLocalizedObservance } from './observanceTranslations';
import { localizedCalendars, getLocalizedCalendarInfo, formatLocalizedCalendarDate } from './calendarTranslations';
import { getLocalizedPath, getCleanPath, getHreflangLinks, useTranslations, LOCALES } from './utils';

describe('i18n Observance Translations', () => {
  it('should have complete translations for every single observance in the engine dataset', () => {
    expect(observanceRules.length).toBe(58);
    for (const rule of observanceRules) {
      const trans = localizedObservances[rule.id];
      expect(trans, `Missing translation entry for observance ID: ${rule.id}`).toBeDefined();
      
      expect(trans.name.en, `Missing English name for ${rule.id}`).toBeTruthy();
      expect(trans.name.hi, `Missing Hindi name for ${rule.id}`).toBeTruthy();
      expect(trans.name.gu, `Missing Gujarati name for ${rule.id}`).toBeTruthy();

      expect(trans.shortDescription.en, `Missing English description for ${rule.id}`).toBeTruthy();
      expect(trans.shortDescription.hi, `Missing Hindi description for ${rule.id}`).toBeTruthy();
      expect(trans.shortDescription.gu, `Missing Gujarati description for ${rule.id}`).toBeTruthy();

      // Test helper function
      const hiObs = getLocalizedObservance(rule.id, 'hi');
      expect(hiObs?.name).toBe(trans.name.hi);
      expect(hiObs?.shortDescription).toBe(trans.shortDescription.hi);

      const guObs = getLocalizedObservance(rule.id, 'gu');
      expect(guObs?.name).toBe(trans.name.gu);
      expect(guObs?.shortDescription).toBe(trans.shortDescription.gu);
    }
  });
});

describe('i18n Calendar Translations', () => {
  it('should have complete translations for all 8 active calendar systems', () => {
    expect(localizedCalendars.length).toBe(8);
    for (const cal of localizedCalendars) {
      expect(cal.name.en).toBeTruthy();
      expect(cal.name.hi).toBeTruthy();
      expect(cal.name.gu).toBeTruthy();

      expect(cal.type.en).toBeTruthy();
      expect(cal.type.hi).toBeTruthy();
      expect(cal.type.gu).toBeTruthy();

      expect(cal.description.en).toBeTruthy();
      expect(cal.description.hi).toBeTruthy();
      expect(cal.description.gu).toBeTruthy();
    }
  });

  it('should format Vikram Samvat with authentic localized terms and Paksha', () => {
    const dateSud = { calendar: 'hindu-vikram', year: 2083, month: 1, day: 1, monthName: 'Kartak' };
    const dateVad = { calendar: 'hindu-vikram', year: 2083, month: 10, day: 23, monthName: 'Shravan' };

    expect(formatLocalizedCalendarDate(dateSud, 'en')).toBe('Kartak Sud 1, 2083 VS');
    expect(formatLocalizedCalendarDate(dateSud, 'hi')).toContain('कार्तिक शुक्ल पक्ष १, २०८३ वि.सं.');
    expect(formatLocalizedCalendarDate(dateSud, 'gu')).toContain('કાર્તક સુદ ૧, ૨૦૮૩ વિ.સં.');

    expect(formatLocalizedCalendarDate(dateVad, 'en')).toBe('Shravan Vad 8, 2083 VS');
    expect(formatLocalizedCalendarDate(dateVad, 'hi')).toContain('श्रावण कृष्ण पक्ष ८, २०८३ वि.सं.');
    expect(formatLocalizedCalendarDate(dateVad, 'gu')).toContain('શ્રાવણ વદ ૮, ૨૦૮૩ વિ.સં.');
  });
});

describe('i18n URL & Path Helpers', () => {
  it('should correctly strip locale prefix with getCleanPath', () => {
    expect(getCleanPath('/')).toBe('/');
    expect(getCleanPath('/hi')).toBe('/');
    expect(getCleanPath('/gu/')).toBe('/');
    expect(getCleanPath('/hi/calendars')).toBe('/calendars');
    expect(getCleanPath('/gu/date/2026-08-24')).toBe('/date/2026-08-24');
    expect(getCleanPath('/calendar/hindu-vikram')).toBe('/calendar/hindu-vikram');
  });

  it('should correctly build localized paths', () => {
    expect(getLocalizedPath('/', 'en')).toBe('/');
    expect(getLocalizedPath('/', 'hi')).toBe('/hi');
    expect(getLocalizedPath('/', 'gu')).toBe('/gu');

    expect(getLocalizedPath('/date/2026-08-24', 'hi')).toBe('/hi/date/2026-08-24');
    expect(getLocalizedPath('/hi/date/2026-08-24', 'gu')).toBe('/gu/date/2026-08-24');
    expect(getLocalizedPath('/gu/date/2026-08-24', 'en')).toBe('/date/2026-08-24');

    // De-scoped fallback check
    expect(getLocalizedPath('/stories', 'hi')).toBe('/hi');
    expect(getLocalizedPath('/story/janmashtami', 'gu')).toBe('/gu');
    expect(getLocalizedPath('/stories', 'en')).toBe('/stories');
  });

  it('should build 4 hreflang entries for standard routes', () => {
    const links = getHreflangLinks('/date/2026-08-24');
    expect(links.length).toBe(4);
    expect(links.find(l => l.lang === 'en')?.href).toBe('https://checkyourcalendar.com/date/2026-08-24');
    expect(links.find(l => l.lang === 'hi')?.href).toBe('https://checkyourcalendar.com/hi/date/2026-08-24');
    expect(links.find(l => l.lang === 'gu')?.href).toBe('https://checkyourcalendar.com/gu/date/2026-08-24');
    expect(links.find(l => l.lang === 'x-default')?.href).toBe('https://checkyourcalendar.com/date/2026-08-24');
  });

  it('should provide complete UI dictionary for all locales', () => {
    for (const loc of LOCALES) {
      const dict = useTranslations(loc);
      expect(dict.nav.today).toBeTruthy();
      expect(dict.nav.calendars).toBeTruthy();
      expect(dict.nav.observances).toBeTruthy();
      expect(dict.hero.featuredDate).toBeTruthy();
      expect(dict.common.yesterday).toBeTruthy();
      expect(dict.common.tomorrow).toBeTruthy();
    }
  });
});
