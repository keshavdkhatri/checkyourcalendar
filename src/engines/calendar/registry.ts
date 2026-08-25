import type { CalendarAdapter, GregorianDate, CalendarDate } from './types';
import { GregorianAdapter } from './adapters/GregorianAdapter';
import { IslamicAdapter } from './adapters/IslamicAdapter';
import { HebrewAdapter } from './adapters/HebrewAdapter';
import { PersianAdapter } from './adapters/PersianAdapter';
import { SakaAdapter } from './adapters/SakaAdapter';
import { VikramAdapter } from './adapters/VikramAdapter';

export class CalendarRegistry {
  private static adapters: Record<string, CalendarAdapter> = {
    'gregorian': new GregorianAdapter(),
    'islamic-civil': new IslamicAdapter(),
    'hebrew': new HebrewAdapter(),
    'persian': new PersianAdapter(),
    'indian-saka': new SakaAdapter(),
    'hindu-vikram': new VikramAdapter()
  };

  static getAdapter(id: string): CalendarAdapter | undefined {
    return this.adapters[id];
  }

  static getActiveAdapters(): CalendarAdapter[] {
    return Object.values(this.adapters);
  }

  static convert(date: GregorianDate): Record<string, CalendarDate> {
    const results: Record<string, CalendarDate> = {};
    for (const [id, adapter] of Object.entries(this.adapters)) {
      results[id] = adapter.fromGregorian(date);
    }
    return results;
  }
  
  static format(date: CalendarDate): string {
    const adapter = this.adapters[date.calendar];
    if (!adapter) return `${date.year}-${date.month}-${date.day}`;
    return adapter.format(date);
  }
}
