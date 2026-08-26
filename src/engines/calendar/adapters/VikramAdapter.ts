import type { CalendarAdapter, GregorianDate, CalendarDate, MonthInfo } from '../types';
import { getPanchangForDate } from '../PanchangHelper';
import { findGregorianViaSearch } from '../IntlCalendarHelper';

export class VikramAdapter implements CalendarAdapter {
  readonly id = 'hindu-vikram';
  readonly name = 'Vikram Samvat (Gujarati/Hindu)';
  readonly type = 'lunisolar';

  private static MONTHS: MonthInfo[] = [
    { number: 1, name: 'Kartak' },
    { number: 2, name: 'Magsar' },
    { number: 3, name: 'Pos' },
    { number: 4, name: 'Maha' },
    { number: 5, name: 'Fagun' },
    { number: 6, name: 'Chaitra' },
    { number: 7, name: 'Vaishakh' },
    { number: 8, name: 'Jeth' },
    { number: 9, name: 'Ashadh' },
    { number: 10, name: 'Shravan' },
    { number: 11, name: 'Bhadarvo' },
    { number: 12, name: 'Aaso' }
  ];

  fromGregorian(date: GregorianDate): CalendarDate {
    const jsDate = new Date(date.year, date.month - 1, date.day);
    const pInfo = getPanchangForDate(jsDate);
    
    if (!pInfo) {
      return this.getProvisionalFallback(date);
    }

    const dayOfWeek = jsDate.getDay();

    return {
      calendar: this.id,
      year: pInfo.yearVS,
      month: pInfo.monthIndex,
      day: pInfo.tithiNumber, // Stores 1-30 internally
      monthName: pInfo.monthName,
      era: 'VS',
      dayOfWeek,
      isProvisional: false
    };
  }

  toGregorian(date: CalendarDate): GregorianDate {
    return findGregorianViaSearch(date, (d) => this.fromGregorian(d));
  }

  format(date: CalendarDate): string {
    const rawDay = date.day;
    const tithiStr = rawDay <= 15 ? `Sud ${rawDay}` : `Vad ${rawDay - 15}`;
    return `${date.monthName} ${tithiStr}, ${date.year} VS`;
  }

  today(timezone?: string): CalendarDate {
    const d = new Date();
    return this.fromGregorian({
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate()
    });
  }

  getMonths(): MonthInfo[] {
    return VikramAdapter.MONTHS;
  }

  private getProvisionalFallback(date: GregorianDate): CalendarDate {
    const yearVS = date.year + 57;
    return {
      calendar: this.id,
      year: yearVS,
      month: date.month,
      day: date.day,
      monthName: VikramAdapter.MONTHS[date.month - 1]?.name || 'Unknown',
      isProvisional: true,
      dayOfWeek: new Date(date.year, date.month - 1, date.day).getDay()
    };
  }
}
