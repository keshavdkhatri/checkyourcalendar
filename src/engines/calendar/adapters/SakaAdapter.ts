import type { CalendarAdapter, GregorianDate, CalendarDate, MonthInfo } from '../types';
import { convertViaIntl, findGregorianViaSearch } from '../IntlCalendarHelper';

export class SakaAdapter implements CalendarAdapter {
  readonly id = 'indian-saka';
  readonly name = 'Indian National (Saka)';
  readonly type = 'solar';

  private static MONTHS: MonthInfo[] = [
    { number: 1, name: 'Chaitra' },
    { number: 2, name: 'Vaisakha' },
    { number: 3, name: 'Jyaistha' },
    { number: 4, name: 'Asadha' },
    { number: 5, name: 'Sravana' },
    { number: 6, name: 'Bhadra' },
    { number: 7, name: 'Asvina' },
    { number: 8, name: 'Kartika' },
    { number: 9, name: 'Margasirsa' },
    { number: 10, name: 'Pausa' },
    { number: 11, name: 'Magha' },
    { number: 12, name: 'Phalguna' }
  ];

  fromGregorian(date: GregorianDate): CalendarDate {
    const conv = convertViaIntl(date, 'indian');
    return {
      ...conv,
      calendar: this.id,
      monthName: SakaAdapter.MONTHS[conv.month - 1]?.name || conv.monthName
    };
  }

  toGregorian(date: CalendarDate): GregorianDate {
    return findGregorianViaSearch(date, (d) => this.fromGregorian(d));
  }

  format(date: CalendarDate): string {
    return `${date.day} ${date.monthName || SakaAdapter.MONTHS[date.month - 1]?.name} ${date.year} Saka`;
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
    return SakaAdapter.MONTHS;
  }
}
