import type { GregorianDate } from '../calendar/types';
import { CalendarRegistry } from '../calendar/registry';
import { type Observance } from './types';
import { observanceRules } from './rules';

export class ObservanceEngine {
  static getObservancesForDate(date: GregorianDate): Observance[] {
    const conversions = CalendarRegistry.convert(date);
    const matched: Observance[] = [];

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
