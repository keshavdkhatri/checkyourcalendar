import type { CalendarAdapter, GregorianDate, CalendarDate, MonthInfo } from '../types';
import { convertViaIntl, findGregorianViaSearch } from '../IntlCalendarHelper';

export class HebrewAdapter implements CalendarAdapter {
  readonly id = 'hebrew';
  readonly name = 'Hebrew';
  readonly type = 'lunisolar';

  private static MONTHS: MonthInfo[] = [
    { number: 1, name: 'Tishrei' },
    { number: 2, name: 'Cheshvan' },
    { number: 3, name: 'Kislev' },
    { number: 4, name: 'Tevet' },
    { number: 5, name: 'Shevat' },
    { number: 6, name: 'Adar' },
    { number: 7, name: 'Nisan' },
    { number: 8, name: 'Iyar' },
    { number: 9, name: 'Sivan' },
    { number: 10, name: 'Tammuz' },
    { number: 11, name: 'Av' },
    { number: 12, name: 'Elul' }
  ];

  fromGregorian(date: GregorianDate): CalendarDate {
    const conv = convertViaIntl(date, 'hebrew');
    return {
      ...conv,
      calendar: this.id
      // Keep raw monthName returned by Intl as it handles Adar I / Adar II correctly
    };
  }

  toGregorian(date: CalendarDate): GregorianDate {
    return findGregorianViaSearch(date, (d) => this.fromGregorian(d));
  }

  format(date: CalendarDate): string {
    return `${date.day} ${date.monthName} ${date.year}`;
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
    return HebrewAdapter.MONTHS;
  }
}
