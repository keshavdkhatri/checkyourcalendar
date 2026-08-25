import type { CalendarAdapter, GregorianDate, CalendarDate, MonthInfo } from '../types';

export class GregorianAdapter implements CalendarAdapter {
  readonly id = 'gregorian';
  readonly name = 'Gregorian';
  readonly type = 'solar';

  private static MONTHS: MonthInfo[] = [
    { number: 1, name: 'January', length: 31 },
    { number: 2, name: 'February', length: 28 }, // Leap handled dynamically if needed
    { number: 3, name: 'March', length: 31 },
    { number: 4, name: 'April', length: 30 },
    { number: 5, name: 'May', length: 31 },
    { number: 6, name: 'June', length: 30 },
    { number: 7, name: 'July', length: 31 },
    { number: 8, name: 'August', length: 31 },
    { number: 9, name: 'September', length: 30 },
    { number: 10, name: 'October', length: 31 },
    { number: 11, name: 'November', length: 30 },
    { number: 12, name: 'December', length: 31 }
  ];

  fromGregorian(date: GregorianDate): CalendarDate {
    const jsDate = new Date(date.year, date.month - 1, date.day);
    return {
      calendar: this.id,
      year: date.year,
      month: date.month,
      day: date.day,
      monthName: GregorianAdapter.MONTHS[date.month - 1].name,
      dayOfWeek: jsDate.getDay()
    };
  }

  toGregorian(date: CalendarDate): GregorianDate {
    return {
      year: date.year,
      month: date.month,
      day: date.day
    };
  }

  format(date: CalendarDate): string {
    const jsDate = new Date(date.year, date.month - 1, date.day);
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(jsDate);
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
    return GregorianAdapter.MONTHS;
  }
}
