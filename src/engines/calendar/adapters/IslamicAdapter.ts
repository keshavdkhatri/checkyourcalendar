import type { CalendarAdapter, GregorianDate, CalendarDate, MonthInfo } from '../types';
import { convertViaIntl, findGregorianViaSearch } from '../IntlCalendarHelper';

export class IslamicAdapter implements CalendarAdapter {
  readonly id = 'islamic-civil';
  readonly name = 'Hijri (Islamic)';
  readonly type = 'lunar';

  private static MONTHS: MonthInfo[] = [
    { number: 1, name: 'Muharram' },
    { number: 2, name: 'Safar' },
    { number: 3, name: 'Rabi\' al-Awwal' },
    { number: 4, name: 'Rabi\' al-Thani' },
    { number: 5, name: 'Jumada al-Awwal' },
    { number: 6, name: 'Jumada al-Thani' },
    { number: 7, name: 'Rajab' },
    { number: 8, name: 'Sha\'ban' },
    { number: 9, name: 'Ramadan' },
    { number: 10, name: 'Shawwal' },
    { number: 11, name: 'Dhu al-Qadah' },
    { number: 12, name: 'Dhu al-Hijjah' }
  ];

  fromGregorian(date: GregorianDate): CalendarDate {
    const conv = convertViaIntl(date, 'islamic-umalqura');
    return {
      ...conv,
      calendar: this.id,
      monthName: IslamicAdapter.MONTHS[conv.month - 1]?.name || conv.monthName
    };
  }

  toGregorian(date: CalendarDate): GregorianDate {
    return findGregorianViaSearch(date, (d) => this.fromGregorian(d));
  }

  format(date: CalendarDate): string {
    return `${date.day} ${date.monthName || IslamicAdapter.MONTHS[date.month - 1]?.name} ${date.year} AH`;
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
    return IslamicAdapter.MONTHS;
  }
}
