import { describe, it, expect } from 'vitest';
import { ObservanceEngine } from './engine';
import type { GregorianDate } from '../calendar/types';

describe('Observance Engine Verification', () => {
  it('should match Shravan Putrada Ekadashi on August 24, 2026', () => {
    const date: GregorianDate = { year: 2026, month: 8, day: 24 };
    const matches = ObservanceEngine.getObservancesForDate(date);
    
    expect(matches.length).toBeGreaterThan(0);
    const ekadashi = matches.find(m => m.id === 'putrada-ekadashi');
    expect(ekadashi).toBeDefined();
    expect(ekadashi?.name).toBe('Shravan Putrada Ekadashi');
  });

  it('should match Remembrance Day for Victims of Terrorism on August 21, 2026', () => {
    const date: GregorianDate = { year: 2026, month: 8, day: 21 };
    const matches = ObservanceEngine.getObservancesForDate(date);
    
    expect(matches.length).toBeGreaterThan(0);
    const terrorismDay = matches.find(m => m.id === 'remembrance-victims-terrorism');
    expect(terrorismDay).toBeDefined();
    expect(terrorismDay?.name).toBe('International Day of Remembrance for Victims of Terrorism');
  });

  it('should return no observances on an arbitrary non-festival day (e.g. Dec 25, 2026)', () => {
    const date: GregorianDate = { year: 2026, month: 12, day: 25 };
    const matches = ObservanceEngine.getObservancesForDate(date);
    
    const ekadashi = matches.find(m => m.id === 'putrada-ekadashi');
    const terrorismDay = matches.find(m => m.id === 'remembrance-victims-terrorism');
    
    expect(ekadashi).toBeUndefined();
    expect(terrorismDay).toBeUndefined();
  });
});
