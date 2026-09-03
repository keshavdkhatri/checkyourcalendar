import { describe, it, expect } from 'vitest';
import { CalendarRegistry } from './registry';
import type { GregorianDate } from './types';

describe('Calendar Engine Verification', () => {
  // Target Reference Date: August 24, 2026
  const refDate1: GregorianDate = { year: 2026, month: 8, day: 24 };
  
  // Target Reference Date: August 21, 2026
  const refDate2: GregorianDate = { year: 2026, month: 8, day: 21 };

  it('should correctly convert Gregorian August 24, 2026 to other systems', () => {
    const conversions = CalendarRegistry.convert(refDate1);
    
    // Hebrew: 11 Elul 5786
    expect(conversions['hebrew'].year).toBe(5786);
    expect(conversions['hebrew'].monthName).toBe('Elul');
    expect(conversions['hebrew'].day).toBe(11);
    
    // Hijri: Rabi' I 11, 1448
    expect(conversions['islamic-civil'].year).toBe(1448);
    expect(conversions['islamic-civil'].month).toBe(3); // Rabi' al-Awwal (3rd month)
    expect(conversions['islamic-civil'].day).toBe(11);

    // Saka: Bhadra 2, 1948 Saka
    expect(conversions['indian-saka'].year).toBe(1948);
    expect(conversions['indian-saka'].monthName).toBe('Bhadra');
    expect(conversions['indian-saka'].day).toBe(2);

    // Persian: Shahrivar 2, 1405 AP
    expect(conversions['persian'].year).toBe(1405);
    expect(conversions['persian'].monthName).toBe('Shahrivar');
    expect(conversions['persian'].day).toBe(2);

    // Vikram Samvat: Shravan Sud 12, 2082 VS
    expect(conversions['hindu-vikram'].year).toBe(2082);
    expect(conversions['hindu-vikram'].monthName).toBe('Shravan');
    expect(conversions['hindu-vikram'].day).toBe(12); // Sud 12 = Day 12 of lunar cycle
  });

  it('should correctly convert Gregorian August 21, 2026 to other systems', () => {
    const conversions = CalendarRegistry.convert(refDate2);
    
    // Hebrew: 8 Elul 5786
    expect(conversions['hebrew'].year).toBe(5786);
    expect(conversions['hebrew'].monthName).toBe('Elul');
    expect(conversions['hebrew'].day).toBe(8);

    // Hijri: Rabi' I 8, 1448
    expect(conversions['islamic-civil'].year).toBe(1448);
    expect(conversions['islamic-civil'].month).toBe(3);
    expect(conversions['islamic-civil'].day).toBe(8);

    // Saka: Sravana 30, 1948 Saka
    expect(conversions['indian-saka'].year).toBe(1948);
    expect(conversions['indian-saka'].monthName).toBe('Sravana');
    expect(conversions['indian-saka'].day).toBe(30);

    // Persian: Mordad 30, 1405 AP
    expect(conversions['persian'].year).toBe(1405);
    expect(conversions['persian'].monthName).toBe('Mordad');
    expect(conversions['persian'].day).toBe(30);

    // Vikram Samvat: Shravan Sud 9, 2082 VS
    expect(conversions['hindu-vikram'].year).toBe(2082);
    expect(conversions['hindu-vikram'].monthName).toBe('Shravan');
    expect(conversions['hindu-vikram'].day).toBe(9);
  });

  it('should perform round-trip conversion successfully', () => {
    const adapters = CalendarRegistry.getActiveAdapters();
    for (const adapter of adapters) {
      if (adapter.id === 'gregorian') continue;
      
      const converted = adapter.fromGregorian(refDate1);
      const roundTrip = adapter.toGregorian(converted);
      
      expect(roundTrip.year).toBe(refDate1.year);
      expect(roundTrip.month).toBe(refDate1.month);
      expect(roundTrip.day).toBe(refDate1.day);
    }
  });

  it('should handle leap-year boundaries correctly (e.g. Feb 29, 2024)', () => {
    const leapDate: GregorianDate = { year: 2024, month: 2, day: 29 };
    const conversions = CalendarRegistry.convert(leapDate);
    
    expect(conversions['gregorian'].month).toBe(2);
    expect(conversions['gregorian'].day).toBe(29);
    
    // Saka leap year (Chaitra starts Mar 21 instead of Mar 22)
    const sakaDate = conversions['indian-saka'];
    const formatted = CalendarRegistry.format(sakaDate);
    expect(formatted).toBeDefined();
  });

  describe('Future Years & Advanced Panchang Cases', () => {
    it('should correctly calculate Gujarati New Year 2030 (Kartak Sud 1)', () => {
      const gDate: GregorianDate = { year: 2030, month: 10, day: 27 };
      const conversions = CalendarRegistry.convert(gDate);
      const vikram = conversions['hindu-vikram'];
      
      expect(vikram.year).toBe(2087);
      expect(vikram.month).toBe(1); // Kartak
      expect(vikram.monthName).toBe('Kartak');
      expect(vikram.day).toBe(1); // Sud 1
    });

    it('should correctly calculate Diwali 2028 (Aaso Vad 30)', () => {
      const gDate: GregorianDate = { year: 2028, month: 10, day: 18 };
      const conversions = CalendarRegistry.convert(gDate);
      const vikram = conversions['hindu-vikram'];
      
      expect(vikram.year).toBe(2084);
      expect(vikram.month).toBe(12); // Aaso
      expect(vikram.monthName).toBe('Aaso');
      expect(vikram.day).toBe(30); // Vad 15 (mapped to 30 internally)
    });

    it('should handle skipped tithis (Kshaya Tithi) at sunrise in 2028', () => {
      // Shukla Pratipada was skipped between Oct 18 (Vad 30) and Oct 19 (Sud 2) in 2028
      const gDate1: GregorianDate = { year: 2028, month: 10, day: 18 };
      const gDate2: GregorianDate = { year: 2028, month: 10, day: 19 };
      
      const conv1 = CalendarRegistry.convert(gDate1)['hindu-vikram'];
      const conv2 = CalendarRegistry.convert(gDate2)['hindu-vikram'];
      
      expect(conv1.day).toBe(30); // Amavasya (Vad 30)
      expect(conv2.day).toBe(2); // Shukla Dwitiya (Sud 2)
    });

    it('should handle repeated tithis (Adhika Tithi) at sunrise in 2028', () => {
      // Shukla Dwadashi repeated on Oct 29 and Oct 30, 2028
      const gDate1: GregorianDate = { year: 2028, month: 10, day: 29 };
      const gDate2: GregorianDate = { year: 2028, month: 10, day: 30 };
      
      const conv1 = CalendarRegistry.convert(gDate1)['hindu-vikram'];
      const conv2 = CalendarRegistry.convert(gDate2)['hindu-vikram'];
      
      expect(conv1.day).toBe(12); // Shukla Dwadashi
      expect(conv2.day).toBe(12); // Shukla Dwadashi repeated
    });

    it('should correctly convert Chinese Lunisolar dates in 2026', () => {
      // Chinese New Year 2026: Feb 17, 2026 (Month 1, Day 1)
      const cnyDate: GregorianDate = { year: 2026, month: 2, day: 17 };
      const cny = CalendarRegistry.convert(cnyDate)['chinese'];
      expect(cny.year).toBe(2026);
      expect(cny.month).toBe(1);
      expect(cny.day).toBe(1);
      expect(cny.era).toContain('丙午');

      // Mid-Autumn Festival 2026: Sept 25, 2026 (Month 8, Day 15)
      const midAutumnDate: GregorianDate = { year: 2026, month: 9, day: 25 };
      const midAutumn = CalendarRegistry.convert(midAutumnDate)['chinese'];
      expect(midAutumn.month).toBe(8);
      expect(midAutumn.day).toBe(15);
    });

    it('should correctly convert Coptic calendar dates in 2026', () => {
      // Coptic Christmas: Jan 7, 2026 (29 Kiahk 1742 A.M.)
      const xmasDate: GregorianDate = { year: 2026, month: 1, day: 7 };
      const xmas = CalendarRegistry.convert(xmasDate)['coptic'];
      expect(xmas.year).toBe(1742);
      expect(xmas.monthName).toBe('Kiahk');
      expect(xmas.day).toBe(29);

      // Coptic New Year (Nayrouz): Sept 11, 2026 (1 Tout 1743 A.M.)
      const newYearDate: GregorianDate = { year: 2026, month: 9, day: 11 };
      const ny = CalendarRegistry.convert(newYearDate)['coptic'];
      expect(ny.year).toBe(1743);
      expect(ny.monthName).toBe('Tout');
      expect(ny.day).toBe(1);
    });

    it('should correctly convert Ethiopian calendar dates in 2026', () => {
      // Ethiopian Christmas (Genna): Jan 7, 2026 (29 Tahsas 2018 E.C.)
      const gennaDate: GregorianDate = { year: 2026, month: 1, day: 7 };
      const genna = CalendarRegistry.convert(gennaDate)['ethiopic'];
      expect(genna.year).toBe(2018);
      expect(genna.monthName).toBe('Tahsas');
      expect(genna.day).toBe(29);

      // Ethiopian New Year (Enkutatash): Sept 11, 2026 (1 Meskerem 2019 E.C.)
      const enkutatashDate: GregorianDate = { year: 2026, month: 9, day: 11 };
      const enkutatash = CalendarRegistry.convert(enkutatashDate)['ethiopic'];
      expect(enkutatash.year).toBe(2019);
      expect(enkutatash.monthName).toBe('Meskerem');
      expect(enkutatash.day).toBe(1);
    });
  });
});
