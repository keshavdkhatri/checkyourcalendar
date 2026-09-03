import type { GregorianDate, CalendarDate } from './types';

export function convertViaIntl(date: GregorianDate, calendarId: string): CalendarDate {
  // Use UTC to avoid local timezone variances during calculation
  const jsDate = new Date(Date.UTC(date.year, date.month - 1, date.day, 12, 0, 0));
  
  const yStr = new Intl.DateTimeFormat('en-US-u-ca-' + calendarId, { timeZone: 'UTC', year: 'numeric' }).format(jsDate);
  const mStr = new Intl.DateTimeFormat('en-US-u-ca-' + calendarId, { timeZone: 'UTC', month: 'numeric' }).format(jsDate);
  const dStr = new Intl.DateTimeFormat('en-US-u-ca-' + calendarId, { timeZone: 'UTC', day: 'numeric' }).format(jsDate);
  const monthName = new Intl.DateTimeFormat('en-US-u-ca-' + calendarId, { timeZone: 'UTC', month: 'long' }).format(jsDate);

  const year = parseInt(yStr, 10);
  const month = parseInt(mStr, 10);
  const day = parseInt(dStr, 10);

  // Day of week (0 = Sunday, 6 = Saturday)
  const dayOfWeek = new Date(date.year, date.month - 1, date.day).getDay();

  return {
    calendar: calendarId,
    year,
    month,
    day,
    monthName,
    dayOfWeek
  };
}

export function findGregorianViaSearch(
  targetDate: CalendarDate,
  fromGregorianFn: (date: GregorianDate) => CalendarDate
): GregorianDate {
  let estYear = targetDate.year;
  if (targetDate.calendar.startsWith('islamic')) {
    // Hijri has shorter lunar years. Adjust scale: Hijri Year * 0.97 + 622
    estYear = Math.floor(targetDate.year * 0.97) + 622;
  } else if (targetDate.calendar === 'persian') {
    estYear += 621;
  } else if (targetDate.calendar === 'hebrew') {
    estYear -= 3760;
  } else if (targetDate.calendar === 'indian-saka') {
    estYear += 78;
  } else if (targetDate.calendar === 'hindu-vikram') {
    estYear -= 56;
  } else if (targetDate.calendar === 'coptic') {
    estYear += 284;
  } else if (targetDate.calendar === 'ethiopic') {
    estYear += 8;
  }

  const targetVal = targetDate.year * 10000 + targetDate.month * 100 + targetDate.day;
  const midJs = new Date(estYear, Math.min(11, targetDate.month - 1), Math.min(28, targetDate.day));
  
  let low = -1500;
  let high = 1500;
  let bestGreg: GregorianDate = { year: estYear, month: targetDate.month, day: targetDate.day };
  
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const testJs = new Date(midJs.getTime() + mid * 24 * 60 * 60 * 1000);
    const testGreg: GregorianDate = {
      year: testJs.getFullYear(),
      month: testJs.getMonth() + 1,
      day: testJs.getDate()
    };
    
    const converted = fromGregorianFn(testGreg);
    const convVal = converted.year * 10000 + converted.month * 100 + converted.day;
    
    if (convVal === targetVal) {
      return testGreg;
    }
    
    if (convVal < targetVal) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  
  return bestGreg;
}
