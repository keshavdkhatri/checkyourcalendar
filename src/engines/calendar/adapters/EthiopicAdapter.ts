import type { CalendarAdapter, GregorianDate, CalendarDate, MonthInfo } from '../types';
import { convertViaIntl, findGregorianViaSearch } from '../IntlCalendarHelper';

export class EthiopicAdapter implements CalendarAdapter {
  readonly id = 'ethiopic';
  readonly name = 'Ethiopian (Ge\'ez)';
  readonly type = 'solar';

  private static MONTHS: MonthInfo[] = [
    { number: 1, name: 'Meskerem' },
    { number: 2, name: 'Tikimt' },
    { number: 3, name: 'Hidar' },
    { number: 4, name: 'Tahsas' },
    { number: 5, name: 'Tir' },
    { number: 6, name: 'Yekatit' },
    { number: 7, name: 'Megabit' },
    { number: 8, name: 'Miazia' },
    { number: 9, name: 'Ginbot' },
    { number: 10, name: 'Sene' },
    { number: 11, name: 'Hamle' },
    { number: 12, name: 'Nehasse' },
    { number: 13, name: 'Pagume' }
  ];

  fromGregorian(date: GregorianDate): CalendarDate {
    const conv = convertViaIntl(date, 'ethiopic');
    const monthInfo = EthiopicAdapter.MONTHS[conv.month - 1];
    return {
      ...conv,
      calendar: this.id,
      monthName: monthInfo?.name || conv.monthName,
      era: 'E.C.'
    };
  }

  toGregorian(date: CalendarDate): GregorianDate {
    return findGregorianViaSearch(date, (d) => this.fromGregorian(d));
  }

  format(date: CalendarDate): string {
    const monthName = date.monthName || EthiopicAdapter.MONTHS[date.month - 1]?.name;
    return `${date.day} ${monthName} ${date.year} E.C.`;
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
    return EthiopicAdapter.MONTHS;
  }
}
