import type { CalendarAdapter, GregorianDate, CalendarDate, MonthInfo } from '../types';

interface MonthStart {
  name: string;
  monthIndex: number;
  yearVS: number;
  gregorianStart: Date;
}

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

  // Verified starts of Gujarati Vikram Samvat months (Amanta / new moon + 1 day)
  private static MONTH_STARTS: MonthStart[] = [
    // 2025
    { name: 'Maha', monthIndex: 4, yearVS: 2081, gregorianStart: new Date(2025, 0, 29) },
    { name: 'Fagun', monthIndex: 5, yearVS: 2081, gregorianStart: new Date(2025, 1, 28) },
    { name: 'Chaitra', monthIndex: 6, yearVS: 2081, gregorianStart: new Date(2025, 2, 29) },
    { name: 'Vaishakh', monthIndex: 7, yearVS: 2081, gregorianStart: new Date(2025, 3, 28) },
    { name: 'Jeth', monthIndex: 8, yearVS: 2081, gregorianStart: new Date(2025, 4, 28) },
    { name: 'Ashadh', monthIndex: 9, yearVS: 2081, gregorianStart: new Date(2025, 5, 26) },
    { name: 'Shravan', monthIndex: 10, yearVS: 2081, gregorianStart: new Date(2025, 6, 25) },
    { name: 'Bhadarvo', monthIndex: 11, yearVS: 2081, gregorianStart: new Date(2025, 7, 24) },
    { name: 'Aaso', monthIndex: 12, yearVS: 2081, gregorianStart: new Date(2025, 8, 22) },
    { name: 'Kartak', monthIndex: 1, yearVS: 2082, gregorianStart: new Date(2025, 9, 22) },
    { name: 'Magsar', monthIndex: 2, yearVS: 2082, gregorianStart: new Date(2025, 10, 21) },
    { name: 'Pos', monthIndex: 3, yearVS: 2082, gregorianStart: new Date(2025, 11, 21) },
    
    // 2026 (Ashadh leap month shifts Shravan to start on Aug 14)
    { name: 'Maha', monthIndex: 4, yearVS: 2082, gregorianStart: new Date(2026, 0, 19) },
    { name: 'Fagun', monthIndex: 5, yearVS: 2082, gregorianStart: new Date(2026, 1, 18) },
    { name: 'Chaitra', monthIndex: 6, yearVS: 2082, gregorianStart: new Date(2026, 2, 19) },
    { name: 'Vaishakh', monthIndex: 7, yearVS: 2082, gregorianStart: new Date(2026, 3, 18) },
    { name: 'Jeth', monthIndex: 8, yearVS: 2082, gregorianStart: new Date(2026, 4, 17) },
    { name: 'Ashadh', monthIndex: 9, yearVS: 2082, gregorianStart: new Date(2026, 5, 16) },
    { name: 'Ashadh', monthIndex: 9, yearVS: 2082, gregorianStart: new Date(2026, 6, 15) }, // Adhik Ashadh
    { name: 'Shravan', monthIndex: 10, yearVS: 2082, gregorianStart: new Date(2026, 7, 14) }, // Aug 14 (Index 7 is August)
    { name: 'Bhadarvo', monthIndex: 11, yearVS: 2082, gregorianStart: new Date(2026, 8, 12) }, // Sep 12
    { name: 'Aaso', monthIndex: 12, yearVS: 2082, gregorianStart: new Date(2026, 9, 12) }, // Oct 12
    { name: 'Kartak', monthIndex: 1, yearVS: 2083, gregorianStart: new Date(2026, 10, 10) }, // Nov 10
    { name: 'Magsar', monthIndex: 2, yearVS: 2083, gregorianStart: new Date(2026, 11, 10) }, // Dec 10
    
    // 2027
    { name: 'Pos', monthIndex: 3, yearVS: 2083, gregorianStart: new Date(2027, 0, 8) }, // Jan 8
    { name: 'Maha', monthIndex: 4, yearVS: 2083, gregorianStart: new Date(2027, 1, 7) }, // Feb 7
    { name: 'Fagun', monthIndex: 5, yearVS: 2083, gregorianStart: new Date(2027, 2, 8) }, // Mar 8
    { name: 'Chaitra', monthIndex: 6, yearVS: 2083, gregorianStart: new Date(2027, 3, 7) }, // Apr 7
    { name: 'Vaishakh', monthIndex: 7, yearVS: 2083, gregorianStart: new Date(2027, 4, 6) }, // May 6
    { name: 'Jeth', monthIndex: 8, yearVS: 2083, gregorianStart: new Date(2027, 5, 5) }, // Jun 5
    { name: 'Ashadh', monthIndex: 9, yearVS: 2083, gregorianStart: new Date(2027, 6, 4) }, // Jul 4
    { name: 'Shravan', monthIndex: 10, yearVS: 2083, gregorianStart: new Date(2027, 7, 3) }, // Aug 3
    { name: 'Bhadarvo', monthIndex: 11, yearVS: 2083, gregorianStart: new Date(2027, 8, 2) }, // Sep 2
    { name: 'Aaso', monthIndex: 12, yearVS: 2083, gregorianStart: new Date(2027, 9, 1) }, // Oct 1
    { name: 'Kartak', monthIndex: 1, yearVS: 2084, gregorianStart: new Date(2027, 9, 31) }, // Oct 31
    { name: 'Magsar', monthIndex: 2, yearVS: 2084, gregorianStart: new Date(2027, 10, 30) }, // Nov 30
    { name: 'Pos', monthIndex: 3, yearVS: 2084, gregorianStart: new Date(2027, 11, 29) } // Dec 29
  ];

  fromGregorian(date: GregorianDate): CalendarDate {
    const jsDate = new Date(date.year, date.month - 1, date.day);
    
    // Find the latest month start that is before or on our date
    let matchedStart: MonthStart | null = null;
    
    // Scan starts in reverse
    for (let i = VikramAdapter.MONTH_STARTS.length - 1; i >= 0; i--) {
      const start = VikramAdapter.MONTH_STARTS[i];
      if (jsDate.getTime() >= start.gregorianStart.getTime()) {
        matchedStart = start;
        break;
      }
    }
    
    // If no match (e.g. before 2025 or after 2027), return a provisional calculation
    if (!matchedStart) {
      return this.getProvisionalFallback(date);
    }
    
    const diffTime = jsDate.getTime() - matchedStart.gregorianStart.getTime();
    const diffDays = Math.floor(diffTime / (24 * 60 * 60 * 1000));
    
    const rawDay = diffDays + 1; // 1-indexed lunar day (1-30)
    let displayDay = '';
    let dayNum = rawDay;
    
    if (rawDay <= 15) {
      displayDay = `Sud ${rawDay}`;
      dayNum = rawDay;
    } else {
      displayDay = `Vad ${rawDay - 15}`;
      dayNum = rawDay - 15;
    }

    const dayOfWeek = jsDate.getDay();

    return {
      calendar: this.id,
      year: matchedStart.yearVS,
      month: matchedStart.monthIndex,
      day: rawDay, // Stores 1-30 internally
      monthName: matchedStart.name,
      // Format as "Sud X" or "Vad X" for specific display
      era: 'VS',
      dayOfWeek,
      isProvisional: false
    };
  }

  toGregorian(date: CalendarDate): GregorianDate {
    // For lookup year matches, find exact date matching Vikram year/month/day
    for (const start of VikramAdapter.MONTH_STARTS) {
      if (start.yearVS === date.year && start.monthIndex === date.month) {
        // If it's a leap month match, find the first non-leap or exact match
        const offset = date.day - 1;
        const gregDate = new Date(start.gregorianStart.getTime() + offset * 24 * 60 * 60 * 1000);
        return {
          year: gregDate.getFullYear(),
          month: gregDate.getMonth() + 1,
          day: gregDate.getDate()
        };
      }
    }
    
    // Standard approximation fallback
    return {
      year: date.year - 57,
      month: date.month,
      day: Math.min(28, date.day)
    };
  }

  format(date: CalendarDate): string {
    const rawDay = date.day;
    const tithiStr = rawDay <= 15 ? `Sud ${rawDay}` : `Vad ${rawDay - 15}`;
    return `${date.monthName} ${tithiStr}, ${date.year} VS`;
  }

  today(timezone?: string): CalendarDate {
    // Fall back to Gregorian-based parsing of current date
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
    // Offset standard year
    const yearVS = date.year + 57;
    // Map approx monthly cycle (very provisional outside 2025-2027)
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
