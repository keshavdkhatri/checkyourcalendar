export enum ObservanceType {
  FESTIVAL = 'festival',
  FAST = 'fast',
  HOLY_DAY = 'holy_day',
  NATIONAL_HOLIDAY = 'national_holiday',
  INTERNATIONAL_DAY = 'international_day',
  COMMEMORATION = 'commemoration',
  SEASONAL = 'seasonal',
  ASTRONOMICAL = 'astronomical',
}

export interface Source {
  name: string;
  url?: string;
  type: 'academic' | 'government' | 'religious-authority' | 'cultural-org' | 'encyclopedia' | 'other';
  accessDate?: string;
}

export interface DateRule {
  type: 'fixed-gregorian' | 'fixed-calendar' | 'calculated' | 'astronomical' | 'authority-declared';
  month?: number; // 1-12
  day?: number;   // 1-31
  calendar?: string; // calendar id for fixed-calendar rule
  calendarMonth?: number;
  calendarDay?: number;
  calculationRef?: string;
}

export interface Observance {
  id: string;
  name: string;
  type: ObservanceType;
  calendar: string; // anchor calendar system
  dateRule: DateRule;
  regions: string[];
  traditions: string[];
  communities: string[];
  isPublicHoliday: boolean;
  countries: string[];
  verificationStatus: 'verified' | 'provisional' | 'unverified';
  sources: Source[];
  storyRef?: string;
  relatedObservances: string[];
  shortDescription: string;
  tags: string[];
}
