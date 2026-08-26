import type { GregorianDate } from '../calendar/types';
import { CalendarRegistry } from '../calendar/registry';
import { type Observance } from './types';
import { observanceRules } from './rules';
import { getDailyPanchang } from 'panchang-ts';
import { AHMEDABAD_COORDS, DEFAULT_TIMEZONE } from '../calendar/PanchangHelper';

export class ObservanceEngine {
  static getObservancesForDate(date: GregorianDate): Observance[] {
    const conversions = CalendarRegistry.convert(date);
    const matched: Observance[] = [];

    const jsDate = new Date(date.year, date.month - 1, date.day);
    const pResult = getDailyPanchang(
      jsDate,
      AHMEDABAD_COORDS,
      { timezone: DEFAULT_TIMEZONE, masaSystem: 'amanta' }
    );

    for (const rule of observanceRules) {
      const { dateRule } = rule;
      
      if (dateRule.type === 'fixed-gregorian') {
        if (date.month === dateRule.month && date.day === dateRule.day) {
          matched.push(rule);
        }
      } else if (dateRule.type === 'fixed-calendar' && dateRule.calendar) {
        const converted = conversions[dateRule.calendar];
        if (converted) {
          if (converted.month === dateRule.calendarMonth && converted.day === dateRule.calendarDay) {
            matched.push(rule);
          }
        }
      } else if (dateRule.type === 'calculated' && dateRule.calculationRef === 'shravana-putrada-ekadashi' && pResult) {
        const isShravana = pResult.calendar.chandramasa.amantaIndex === 4;
        if (isShravana) {
          const isSmarta = pResult.festivals.some(f => f.key === 'smarta_ekadashi');
          const isVaishnava = pResult.festivals.some(f => f.key === 'vaishnava_ekadashi');
          
          if (isSmarta) {
            matched.push({
              ...rule,
              name: 'Smarta Shravan Putrada Ekadashi',
              traditions: ['Hindu (Smarta)']
            });
          } else if (isVaishnava) {
            matched.push({
              ...rule,
              name: 'Vaishnava Shravan Putrada Ekadashi',
              traditions: ['Hindu (Vaishnava)']
            });
          }
        }
      }
    }

    return matched;
  }

  static getObservanceById(id: string): Observance | undefined {
    return observanceRules.find(r => r.id === id);
  }

  static getAllObservances(): Observance[] {
    return observanceRules;
  }
}
