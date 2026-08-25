export interface GregorianDate {
  year: number;
  month: number; // 1-12
  day: number;
}

export interface CalendarDate {
  calendar: string; // adapter id
  era?: string;
  year: number;
  month: number; // 1-12
  day: number;
  monthName?: string;
  dayOfWeek?: number; // 0-6 (0 = Sunday, 6 = Saturday)
  isProvisional?: boolean;
}

export interface MonthInfo {
  number: number;
  name: string;
  length?: number;
}

export interface EraInfo {
  id: string;
  name: string;
  startGregorianYear: number;
}

export interface CalendarAdapter {
  readonly id: string;
  readonly name: string;
  readonly type: 'solar' | 'lunar' | 'lunisolar' | 'other';
  
  fromGregorian(date: GregorianDate): CalendarDate;
  toGregorian(date: CalendarDate): GregorianDate;
  format(date: CalendarDate): string;
  today(timezone?: string): CalendarDate;
  getMonths(): MonthInfo[];
}
