export interface CalendarConversion {
  name: string;
  dateString: string;
  calendarId: string;
}

export interface Observance {
  id: string;
  name: string;
  type: 'festival' | 'fast' | 'holy_day' | 'national_holiday' | 'international_day' | 'commemoration';
  calendarName: string;
  regionName: string;
  summary: string;
  storyRef?: string;
}

export interface Story {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  publishDate: string;
  excerpt: string;
  content: string[];
  sources: string[];
  relatedObservances: { name: string; url: string }[];
  relatedDates: { name: string; url: string }[];
}

export const mockConversions: CalendarConversion[] = [
  { name: 'Vikram Samvat (Gujarati/Hindu)', dateString: 'Bhadrapada Sud 11, 2082', calendarId: 'hindu-vikram' },
  { name: 'Hijri (Islamic)', dateString: 'Safar 10, 1448', calendarId: 'islamic-civil' },
  { name: 'Hebrew', dateString: 'Elul 11, 5786', calendarId: 'hebrew' },
  { name: 'Persian (Solar Hijri)', dateString: 'Shahrivar 2, 1405', calendarId: 'persian' },
  { name: 'Indian National (Saka)', dateString: 'Bhadra 2, 1948', calendarId: 'indian-saka' },
];

export const mockObservances: Observance[] = [
  {
    id: 'putrada-ekadashi',
    name: 'Shravan Putrada Ekadashi',
    type: 'fast',
    calendarName: 'Hindu Vikram Samvat',
    regionName: 'Western India / Gujarat',
    summary: 'A significant fasting day dedicated to Lord Vishnu, observed on the 11th lunar day of the bright fortnight. It is traditionally observed for the well-being, prosperity, and longevity of children.',
    storyRef: 'putrada-ekadashi'
  },
  {
    id: 'remembrance-victims-terrorism',
    name: 'International Day of Remembrance for Victims of Terrorism',
    type: 'commemoration',
    calendarName: 'Gregorian',
    regionName: 'Global',
    summary: 'A United Nations observance established to honor and support the victims and survivors of terrorism, emphasizing solidarity, resilience, and human rights.',
    storyRef: 'remembrance-victims-terrorism'
  }
];

export const mockStories: Record<string, Story> = {
  'putrada-ekadashi': {
    slug: 'putrada-ekadashi',
    title: 'The Legend of Putrada Ekadashi',
    subtitle: 'Why millions observe a sacred fast of devotion and purification',
    category: 'Vedic Traditions',
    publishDate: 'August 24, 2026',
    excerpt: 'The ancient narrative of King Mahajit and the seekers of blessing on the eleventh lunar day of Shravana.',
    content: [
      'Putrada Ekadashi falls on the eleventh lunar day (Ekadashi) of the bright fortnight (Shukla Paksha) of the Hindu month of Shravana (in Amanta and Purnimanta systems). The name "Putrada" translates to "giver of sons," representing a traditional focus on lineage preservation, but in modern contexts, it is celebrated widely for the health and prosperity of all children.',
      'According to the Bhavishya Purana, the story is narrated by Lord Krishna to King Yudhishthira. In ancient times, King Mahajit of Mahishmati was a peaceful and just ruler, but he was unhappy because he was childless. He consulted wise sages led by Lomesh, who discovered that the king’s childlessness was due to a minor transgression in a past life: denying water to a thirsty cow on a hot summer day.',
      'To remedy this, Sage Lomesh instructed the king and queen to observe a strict fast on the Ekadashi of Shravana. The entire kingdom joined in the observance, dedicating the day to meditation, fasting, and charity. By the grace of Lord Vishnu, their prayers were answered, and a child was born to the royal family. Today, the day remains a powerful symbol of community prayer, self-discipline, and spiritual dedication.'
    ],
    sources: [
      'Bhavishya Purana, Shravana Shukla Ekadashi Mahatmya',
      'Ministry of Culture, Government of India - Cultural Festivals Documentation',
      'Vedic Calendar Research Group Publications (2022)'
    ],
    relatedObservances: [
      { name: 'Vaikuntha Ekadashi', url: '/observance/vaikuntha-ekadashi' },
      { name: 'Janmashtami', url: '/observance/janmashtami' }
    ],
    relatedDates: [
      { name: 'Monday, August 24, 2026', url: '/date/2026-08-24' }
    ]
  },
  'remembrance-victims-terrorism': {
    slug: 'remembrance-victims-terrorism',
    title: 'Honoring Resilience and Memory',
    subtitle: 'The origin of the International Day of Remembrance for Victims of Terrorism',
    category: 'Global Observances',
    publishDate: 'August 21, 2026',
    excerpt: 'How the global community established a day to stand in solidarity with survivors and remember the victims.',
    content: [
      'The International Day of Remembrance and Tribute to the Victims of Terrorism was established by the United Nations General Assembly in its resolution 72/165 in December 2017. Observed annually on August 21 (and highlighted during the surrounding days), the day aims to honor and support the victims and survivors of terrorism and to promote and protect the full enjoyment of their human rights and fundamental freedoms.',
      'The resolution recognizes that the promotion and protection of human rights and the rule of law at the national and international levels are essential to preventing and combating terrorism. Standalone commemorations provide a structured opportunity to listen to the voices of survivors, amplify their stories, and ensure they are not forgotten.',
      'This day serves as a reminder that solidarity is our greatest defense. By building robust support networks, providing psychological care, and preserving historical memory, nations work together to build societies resilient to extremist violence.'
    ],
    sources: [
      'United Nations General Assembly Resolution A/RES/72/165',
      'United Nations Office of Counter-Terrorism (UNOCT) Reports',
      'Global Survivors Network Memorial Archive'
    ],
    relatedObservances: [
      { name: 'International Day of Peace', url: '/observance/international-day-peace' }
    ],
    relatedDates: [
      { name: 'Friday, August 21, 2026', url: '/date/2026-08-21' }
    ]
  },
  'janmashtami': {
    slug: 'janmashtami',
    title: 'The Celebration of Krishna Janmashtami',
    subtitle: 'The midnight birth of Krishna and the devotional traditions of Gokulashtami',
    category: 'Vedic Traditions',
    publishDate: 'September 4, 2026',
    excerpt: 'The sacred narrative of Krishna’s birth in Mathura and the joyous traditions of Shravana Krishna Ashtami.',
    content: [
      'Krishna Janmashtami, also known as Gokulashtami or Krishnashtami, marks the celebration of the birth of Krishna, revered as the eighth avatar of Lord Vishnu. According to the Hindu lunisolar calendar, the festival is observed on the eighth tithi (Ashtami) of the dark fortnight (Krishna Paksha / Vad) in the month of Shravana (in the Amanta system followed in Gujarat and Western India).',
      'According to sacred accounts in the Bhagavata Purana and Harivamsa, Krishna was born in Mathura to Devaki and Vasudeva in a prison cell under the reign of King Kamsa. At midnight, amidst heavy rains and the auspicious Rohini nakshatra, Vasudeva miraculously carried the newborn infant across the Yamuna river to safety in Gokul, where he was nurtured by foster parents Nanda and Yashoda.',
      'The festival is observed with day-long fasting, night-long prayer vigils (Jagran), reading of sacred texts, and jubilant midnight worship marking the moment of birth. In Gujarat and Maharashtra, the festivities continue the next day with Nand Mahotsav, celebrating community joy, sharing festive delicacies, and performing traditional devotional dances.'
    ],
    sources: [
      'Bhagavata Purana (Srimad Bhagavatam), Skandha 10, Chapters 3-4',
      'Ministry of Culture, Government of India - National Festival Documentation',
      'Gujarat State Cultural Portal - Traditional Celebrations'
    ],
    relatedObservances: [
      { name: 'Shravan Putrada Ekadashi', url: '/observance/putrada-ekadashi' },
      { name: 'Shitala Satam', url: '/observance/shitala-satam' },
      { name: 'Nand Mahotsav', url: '/observance/nand-mahotsav' }
    ],
    relatedDates: [
      { name: 'Friday, September 4, 2026', url: '/date/2026-09-04' }
    ]
  }
};
