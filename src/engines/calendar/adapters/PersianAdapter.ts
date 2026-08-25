import type { CalendarAdapter, GregorianDate, CalendarDate, MonthInfo } from '../types';
import { convertViaIntl, findGregorianViaSearch } from '../IntlCalendarHelper';

export class PersianAdapter implements CalendarAdapter {
  readonly id = 'persian';
  readonly name = 'Persian (Solar Hijri)';
  readonly type = 'solar';

  private static MONTHS: MonthInfo[] = [
    { number: 1, name: 'Farvardin' },
    { number: 2, name: 'Ordibehesht' },
    { number: 3, name: 'Khordad' },
    { number: 4, name: 'Tir' },
    { number: 5, name: 'Mordad' },
    { number: 6, name: 'Shahrivar' },
    { number: 7, name: 'Mehr' },
    { number: 8, name: 'Aban' },
    { number: 9, name: 'Azar' },
    { number: 10, name: 'Dey' },
    { number: 11, name: 'Bahman' },
    { number: 12, name: 'Esfand' }
  ];

  fromGregorian(date: GregorianDate): CalendarDate {
    const conv = convertViaIntl(date, 'persian');
    return {
      ...conv,
      calendar: this.id,
      monthName: PersianAdapter.MONTHS[conv.month - 1]?.name || conv.monthName
    };
  }

  toGregorian(date: CalendarDate): GregorianDate {
    return findGregorianViaSearch(date, (d) => this.fromGregorian(d));
  }

  format(date: CalendarDate): string {
    return `${date.day} ${date.monthName || PersianAdapter.MONTHS[date.month - 1]?.name} ${date.year} AP`;
  }

  today(timezone?: string): CalendarDate {
    const options: Intl.DateTimeFormatOptions = { timeZone: timezone, year: 'numeric', month: 'numeric', day: 'numeric' };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const parts = formatter.formatToParts(new Date());
    
    let year = 0, month = 0, day = 0;
    for (const part of parts) {
      if (part.type === 'year') year = parseInt(part.value, 10);
      if (part.type === 'month') month = parseInt(part.value, 10);
      if (part.type === 'day') day = parseInt(part.value, 10);
    }
    
    return this.fromGregorian({ year, month, day });
  }

  getMonths(): MonthInfo[] {
    return PersianAdapter.MONTHS;
  }
}
