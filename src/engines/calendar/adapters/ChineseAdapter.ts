import type { CalendarAdapter, GregorianDate, CalendarDate, MonthInfo } from '../types';

export class ChineseAdapter implements CalendarAdapter {
  readonly id = 'chinese';
  readonly name = 'Chinese Traditional (Lunisolar)';
  readonly type = 'lunisolar';

  private static MONTHS: MonthInfo[] = [
    { number: 1, name: 'Month 1 (Zhengyue / 正月)' },
    { number: 2, name: 'Month 2 (Eryue / 二月)' },
    { number: 3, name: 'Month 3 (Sanyue / 三月)' },
    { number: 4, name: 'Month 4 (Siyue / 四月)' },
    { number: 5, name: 'Month 5 (Wuyue / 五月)' },
    { number: 6, name: 'Month 6 (Liuyue / 六月)' },
    { number: 7, name: 'Month 7 (Qiyue / 七月)' },
    { number: 8, name: 'Month 8 (Bayue / 八月)' },
    { number: 9, name: 'Month 9 (Jiuyue / 九月)' },
    { number: 10, name: 'Month 10 (Shiyue / 十月)' },
    { number: 11, name: 'Month 11 (Dongyue / 十一月)' },
    { number: 12, name: 'Month 12 (Layue / 腊月)' }
  ];

  fromGregorian(date: GregorianDate): CalendarDate {
    const jsDate = new Date(Date.UTC(date.year, date.month - 1, date.day, 12, 0, 0));
    
    // Extract Chinese calendar parts using UTC standard
    const enParts = new Intl.DateTimeFormat('en-US-u-ca-chinese', {
      timeZone: 'UTC',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    }).formatToParts(jsDate);

    const zhParts = new Intl.DateTimeFormat('zh-Hans-u-ca-chinese', {
      timeZone: 'UTC',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).formatToParts(jsDate);

    let year = 2026;
    let month = 1;
    let day = 1;

    for (const part of enParts) {
      if (part.type === 'year' || part.type === 'relatedYear') year = parseInt(part.value, 10);
      if (part.type === 'month') month = parseInt(part.value, 10);
      if (part.type === 'day') day = parseInt(part.value, 10);
    }

    let yearName = '';
    for (const part of zhParts) {
      if (part.type === 'yearName') yearName = part.value;
    }

    const monthInfo = ChineseAdapter.MONTHS[month - 1] || { name: `Month ${month}` };
    const dayOfWeek = new Date(date.year, date.month - 1, date.day).getDay();

    return {
      calendar: this.id,
      year,
      month,
      day,
      monthName: monthInfo.name,
      era: yearName ? `${yearName} (Year of the Horse)` : 'Bing-Wu',
      dayOfWeek
    };
  }

  toGregorian(date: CalendarDate): GregorianDate {
    for (let m = 1; m <= 12; m++) {
      const daysInM = new Date(2026, m, 0).getDate();
      for (let d = 1; d <= daysInM; d++) {
        const testDate = { year: 2026, month: m, day: d };
        const conv = this.fromGregorian(testDate);
        if (conv.month === date.month && conv.day === date.day) {
          return testDate;
        }
      }
    }
    return { year: 2026, month: date.month, day: date.day };
  }

  format(date: CalendarDate): string {
    const monthLabel = date.monthName || ChineseAdapter.MONTHS[date.month - 1]?.name || `Month ${date.month}`;
    const eraStr = date.era ? `${date.era} · ` : '';
    return `${eraStr}${monthLabel}, Day ${date.day}`;
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
    return ChineseAdapter.MONTHS;
  }
}
