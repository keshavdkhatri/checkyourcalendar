import type { CalendarAdapter, GregorianDate, CalendarDate, MonthInfo } from '../types';
import { convertViaIntl, findGregorianViaSearch } from '../IntlCalendarHelper';

export class CopticAdapter implements CalendarAdapter {
  readonly id = 'coptic';
  readonly name = 'Coptic (Alexandrian)';
  readonly type = 'solar';

  private static MONTHS: MonthInfo[] = [
    { number: 1, name: 'Tout' },
    { number: 2, name: 'Baba' },
    { number: 3, name: 'Hathor' },
    { number: 4, name: 'Kiahk' },
    { number: 5, name: 'Toba' },
    { number: 6, name: 'Amshir' },
    { number: 7, name: 'Baramhat' },
    { number: 8, name: 'Baramouda' },
    { number: 9, name: 'Bashans' },
    { number: 10, name: 'Paona' },
    { number: 11, name: 'Epep' },
    { number: 12, name: 'Mesra' },
    { number: 13, name: 'Nasie (Pi Kogi Enavot)' }
  ];

  fromGregorian(date: GregorianDate): CalendarDate {
    const conv = convertViaIntl(date, 'coptic');
    const monthInfo = CopticAdapter.MONTHS[conv.month - 1];
    return {
      ...conv,
      calendar: this.id,
      monthName: monthInfo?.name || conv.monthName,
      era: 'A.M.'
    };
  }

  toGregorian(date: CalendarDate): GregorianDate {
    return findGregorianViaSearch(date, (d) => this.fromGregorian(d));
  }

  format(date: CalendarDate): string {
    const monthName = date.monthName || CopticAdapter.MONTHS[date.month - 1]?.name;
    return `${date.day} ${monthName} ${date.year} A.M.`;
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
    return CopticAdapter.MONTHS;
  }
}
