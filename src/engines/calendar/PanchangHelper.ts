import { getDailyPanchang } from 'panchang-ts';

export const AHMEDABAD_COORDS = {
  latitude: 23.0225,
  longitude: 72.5714
};

export const DEFAULT_TIMEZONE = 330; // +5:30 in minutes (IST)

// Standard Sanskrit to Gujarati month name mapping
export const GUJARATI_MONTH_NAMES: Record<string, string> = {
  'Chaitra': 'Chaitra',
  'Vaishakha': 'Vaishakh',
  'Jyeshtha': 'Jeth',
  'Ashadha': 'Ashadh',
  'Shravana': 'Shravan',
  'Bhadrapada': 'Bhadarvo',
  'Ashwina': 'Aaso',
  'Kartika': 'Kartak',
  'Margashirsha': 'Magsar',
  'Pausha': 'Pos',
  'Magha': 'Maha',
  'Phalguna': 'Fagun'
};

export interface PanchangInfo {
  yearVS: number;
  monthIndex: number; // 1-12 mapped to Kartak=1, etc.
  monthName: string;
  tithiNumber: number; // 1-30 internally
  tithiName: string;
  isAdhikaMonth: boolean;
  sunrise: Date;
  sunset: Date;
}

export function getPanchangForDate(date: Date): PanchangInfo | null {
  const result = getDailyPanchang(
    date,
    AHMEDABAD_COORDS,
    { timezone: DEFAULT_TIMEZONE, masaSystem: 'amanta' }
  );

  if (!result) return null;

  // 1. Get the Amanta month information
  const amantaIndex = result.calendar.chandramasa.amantaIndex; // 0 (Chaitra) to 11 (Phalguna)
  const isAdhikaMonth = result.calendar.chandramasa.isAdhika;
  
  // 2. Map standard Sanskrit month names to Gujarati month names
  const sanskritName = result.calendar.chandramasa.amantaName;
  let rawMonthName = GUJARATI_MONTH_NAMES[sanskritName] || sanskritName;
  if (isAdhikaMonth) {
    rawMonthName = 'Adhik ' + rawMonthName;
  }

  // 3. Map amantaIndex (0=Chaitra ... 11=Phalguna) to Gujarati Kartikadi month numbers (1=Kartak ... 12=Aaso)
  let monthIndex = 1;
  if (amantaIndex >= 7) {
    monthIndex = amantaIndex - 6; // 7 (Kartika) -> 1 (Kartak)
  } else {
    monthIndex = amantaIndex + 6; // 0 (Chaitra) -> 6 (Chaitra)
  }

  // 4. Calculate Gujarati Kartikadi Vikram Samvat year
  // Chaitradi increments at Chaitra Sud 1 (amantaIndex = 0).
  // Kartikadi increments at Kartak Sud 1 (amantaIndex = 7).
  // Thus, from Chaitra (Index 0) to Aaso (Index 6), the Gujarati year is 1 year behind.
  let yearVS = result.calendar.samvat.vikramSamvat;
  if (amantaIndex < 7) {
    yearVS -= 1;
  }

  // 5. Get active tithi at sunrise (or the first tithi)
  let activeTithi = result.angas.tithis.find(t => t.isActiveAtSunrise);
  if (!activeTithi && result.angas.tithis.length > 0) {
    activeTithi = result.angas.tithis[0];
  }

  const tithiNumber = activeTithi ? activeTithi.number : 1;
  const paksha = activeTithi ? activeTithi.paksha : 'Shukla'; // "Shukla" or "Krishna"

  // 6. Map tithi number to standard day-count 1-30 representation
  // 1-15 for Shukla (Sud 1-15), 16-30 for Krishna (Vad 1-15)
  let day = tithiNumber;
  if (paksha === 'Krishna') {
    day = tithiNumber + 15;
  }

  const tithiName = activeTithi ? activeTithi.name : 'Pratipada';

  return {
    yearVS,
    monthIndex,
    monthName: rawMonthName,
    tithiNumber: day,
    tithiName,
    isAdhikaMonth,
    sunrise: result.sun.rise,
    sunset: result.sun.set
  };
}
