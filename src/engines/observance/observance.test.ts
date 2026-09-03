import { describe, it, expect } from 'vitest';
import { ObservanceEngine } from './engine';
import { CalendarRegistry } from '../calendar/registry';
import { mockStories } from '../../data/mockData';
import type { GregorianDate } from '../calendar/types';

describe('Observance Engine Verification', () => {
  it('should match Smarta Shravan Putrada Ekadashi on August 23, 2026', () => {
    const date: GregorianDate = { year: 2026, month: 8, day: 23 };
    const matches = ObservanceEngine.getObservancesForDate(date);
    
    expect(matches.length).toBeGreaterThan(0);
    const ekadashi = matches.find(m => m.id === 'putrada-ekadashi');
    expect(ekadashi).toBeDefined();
    expect(ekadashi?.name).toBe('Smarta Shravan Putrada Ekadashi');
  });

  it('should match Vaishnava Shravan Putrada Ekadashi on August 24, 2026', () => {
    const date: GregorianDate = { year: 2026, month: 8, day: 24 };
    const matches = ObservanceEngine.getObservancesForDate(date);
    
    expect(matches.length).toBeGreaterThan(0);
    const ekadashi = matches.find(m => m.id === 'putrada-ekadashi');
    expect(ekadashi).toBeDefined();
    expect(ekadashi?.name).toBe('Vaishnava Shravan Putrada Ekadashi');
  });

  it('should match Remembrance Day for Victims of Terrorism on August 21, 2026', () => {
    const date: GregorianDate = { year: 2026, month: 8, day: 21 };
    const matches = ObservanceEngine.getObservancesForDate(date);
    
    expect(matches.length).toBeGreaterThan(0);
    const terrorismDay = matches.find(m => m.id === 'remembrance-victims-terrorism');
    expect(terrorismDay).toBeDefined();
    expect(terrorismDay?.name).toBe('International Day of Remembrance for Victims of Terrorism');
  });

  it('should match Kajari Teej on August 31, 2026', () => {
    const date: GregorianDate = { year: 2026, month: 8, day: 31 };
    const matches = ObservanceEngine.getObservancesForDate(date);
    
    const teej = matches.find(m => m.id === 'kajari-teej');
    expect(teej).toBeDefined();
    expect(teej?.name).toBe('Kajari Teej');
  });

  it('should match Bol Choth (Bahula Chaturthi) and Nag Panchami on September 1, 2026', () => {
    const date: GregorianDate = { year: 2026, month: 9, day: 1 };
    const matches = ObservanceEngine.getObservancesForDate(date);
    
    const bolChoth = matches.find(m => m.id === 'bol-choth');
    expect(bolChoth).toBeDefined();
    expect(bolChoth?.name).toBe('Bol Choth (Bahula Chaturthi)');

    const nagPanchami = matches.find(m => m.id === 'nag-panchami');
    expect(nagPanchami).toBeDefined();
  });

  it('should match Randhan Chhath on September 2, 2026', () => {
    const date: GregorianDate = { year: 2026, month: 9, day: 2 };
    const matches = ObservanceEngine.getObservancesForDate(date);
    
    const chhath = matches.find(m => m.id === 'randhan-chhath');
    expect(chhath).toBeDefined();
    expect(chhath?.name).toBe('Randhan Chhath');
  });

  it('should match Shitala Satam on September 3, 2026', () => {
    const date: GregorianDate = { year: 2026, month: 9, day: 3 };
    const matches = ObservanceEngine.getObservancesForDate(date);
    
    const satam = matches.find(m => m.id === 'shitala-satam');
    expect(satam).toBeDefined();
    expect(satam?.name).toBe('Shitala Satam');
  });

  it('should match Krishna Janmashtami on September 4, 2026', () => {
    const date: GregorianDate = { year: 2026, month: 9, day: 4 };
    const matches = ObservanceEngine.getObservancesForDate(date);
    
    const janmashtami = matches.find(m => m.id === 'janmashtami');
    expect(janmashtami).toBeDefined();
    expect(janmashtami?.name).toBe('Krishna Janmashtami');
    expect(janmashtami?.storyRef).toBe('janmashtami');
  });

  it('should match Nand Mahotsav on September 5, 2026', () => {
    const date: GregorianDate = { year: 2026, month: 9, day: 5 };
    const matches = ObservanceEngine.getObservancesForDate(date);
    
    const nand = matches.find(m => m.id === 'nand-mahotsav');
    expect(nand).toBeDefined();
    expect(nand?.name).toBe('Nand Mahotsav');
  });

  it('should match Vaikuntha Ekadashi on December 20, 2026', () => {
    const date: GregorianDate = { year: 2026, month: 12, day: 20 };
    const matches = ObservanceEngine.getObservancesForDate(date);
    
    const vaikuntha = matches.find(m => m.id === 'vaikuntha-ekadashi');
    expect(vaikuntha).toBeDefined();
    expect(vaikuntha?.name).toBe('Vaikuntha Ekadashi');
  });

  it('should match International Day of Peace on September 21, 2026', () => {
    const date: GregorianDate = { year: 2026, month: 9, day: 21 };
    const matches = ObservanceEngine.getObservancesForDate(date);
    
    const peaceDay = matches.find(m => m.id === 'international-day-peace');
    expect(peaceDay).toBeDefined();
    expect(peaceDay?.name).toBe('International Day of Peace');
  });

  describe('Story and Observance Relationship Integrity', () => {
    it('should ensure all storyRefs in observances resolve to existing mockStories', () => {
      const allObservances = ObservanceEngine.getAllObservances();
      for (const obs of allObservances) {
        if (obs.storyRef) {
          expect(mockStories[obs.storyRef]).toBeDefined();
          expect(mockStories[obs.storyRef].slug).toBe(obs.storyRef);
        }
      }
    });

    it('should ensure all relatedObservances in mockStories resolve to valid registered observances', () => {
      const allObservances = ObservanceEngine.getAllObservances();
      const observanceIdSet = new Set(allObservances.map(o => o.id));

      for (const story of Object.values(mockStories)) {
        for (const rel of story.relatedObservances) {
          expect(rel.url.startsWith('/observance/')).toBe(true);
          const slug = rel.url.replace('/observance/', '');
          expect(observanceIdSet.has(slug)).toBe(true);
        }
      }
    });

    it('should ensure story CTA validity rule is correctly evaluated', () => {
      // Valid storyRef:
      expect(Boolean('putrada-ekadashi' && mockStories['putrada-ekadashi'])).toBe(true);
      expect(Boolean('janmashtami' && mockStories['janmashtami'])).toBe(true);

      // Missing storyRef:
      const missingRef = undefined;
      expect(Boolean(missingRef && mockStories[missingRef])).toBe(false);

      // Invalid storyRef (e.g. non-existent story slug):
      const invalidRef = 'non-existent-story-key';
      expect(Boolean(invalidRef && mockStories[invalidRef])).toBe(false);
    });
  });

  describe('Calendar-Specific Monthly View Generation', () => {
    const supportedCalendars = ['hindu-vikram', 'islamic-civil', 'hebrew', 'persian', 'indian-saka'];

    it('should convert all days of September 2026 for each calendar system without error', () => {
      for (const calId of supportedCalendars) {
        const adapter = CalendarRegistry.getAdapter(calId);
        expect(adapter).toBeDefined();

        for (let day = 1; day <= 30; day++) {
          const gDate: GregorianDate = { year: 2026, month: 9, day };
          const converted = adapter!.fromGregorian(gDate);
          expect(converted).toBeDefined();
          expect(converted.calendar).toBe(calId);

          const formatted = adapter!.format(converted);
          expect(formatted).toBeDefined();
          expect(formatted.length).toBeGreaterThan(0);
        }
      }
    });

    it('should correctly format Vikram Samvat for September 4, 2026 (Janmashtami)', () => {
      const adapter = CalendarRegistry.getAdapter('hindu-vikram')!;
      const converted = adapter.fromGregorian({ year: 2026, month: 9, day: 4 });
      const formatted = adapter.format(converted);

      expect(formatted).toContain('Shravan');
      expect(formatted).toContain('Vad 8');
      expect(formatted).toContain('2082 VS');
    });
  });
});

