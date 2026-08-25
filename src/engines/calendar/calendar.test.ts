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

    // Vikram Samvat: Shravan Sud 11, 2082 VS
    expect(conversions['hindu-vikram'].year).toBe(2082);
    expect(conversions['hindu-vikram'].monthName).toBe('Shravan');
    expect(conversions['hindu-vikram'].day).toBe(11); // Sud 11 = Day 11 of lunar cycle
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

    // Vikram Samvat: Shravan Sud 8, 2082 VS
    expect(conversions['hindu-vikram'].year).toBe(2082);
    expect(conversions['hindu-vikram'].monthName).toBe('Shravan');
    expect(conversions['hindu-vikram'].day).toBe(8);
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
});
