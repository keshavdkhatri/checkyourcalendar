import { type Observance, ObservanceType } from './types';

export const observanceRules: Observance[] = [
  // --- Hindu / Gujarati Vikram Samvat Observances ---
  {
    id: 'putrada-ekadashi',
    name: 'Shravan Putrada Ekadashi',
    type: ObservanceType.FAST,
    calendar: 'hindu-vikram',
    dateRule: {
      type: 'calculated',
      calculationRef: 'shravana-putrada-ekadashi'
    },
    regions: ['Western India', 'Gujarat'],
    traditions: ['Hindu (Smarta / Vaishnava)'],
    communities: ['Gujarati'],
    isPublicHoliday: false,
    countries: ['IN'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Bhavishya Purana, Shravana Shukla Ekadashi Mahatmya',
        type: 'religious-authority'
      },
      {
        name: 'Ministry of Culture, Government of India - Cultural Festivals Documentation',
        type: 'government'
      }
    ],
    storyRef: 'putrada-ekadashi',
    relatedObservances: ['vaikuntha-ekadashi', 'janmashtami'],
    shortDescription: 'A significant fasting day dedicated to Lord Vishnu, observed on the 11th lunar day of the bright fortnight of Shravana. Smarta and Vaishnava traditions observe it according to sunrise and tithi boundaries.',
    tags: ['fast', 'shravan', 'ekadashi', 'vishnu']
  },
  {
    id: 'kajari-teej',
    name: 'Kajari Teej',
    type: ObservanceType.FESTIVAL,
    calendar: 'hindu-vikram',
    dateRule: {
      type: 'calculated',
      calculationRef: 'kajari-teej'
    },
    regions: ['Western India', 'Gujarat', 'Rajasthan'],
    traditions: ['Hindu'],
    communities: ['Gujarati', 'Rajasthani'],
    isPublicHoliday: false,
    countries: ['IN'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Vedic Calendar & Regional Festivals Guide',
        type: 'encyclopedia'
      }
    ],
    relatedObservances: ['bol-choth', 'shitala-satam'],
    shortDescription: 'Also known as Badi Teej or Kevda Trij, celebrated on Krishna Tritiya of Shravana with fasting, songs, and prayers to Goddess Parvati.',
    tags: ['teej', 'shravan', 'festival', 'fast', 'parvati']
  },
  {
    id: 'bol-choth',
    name: 'Bol Choth (Bahula Chaturthi)',
    type: ObservanceType.FAST,
    calendar: 'hindu-vikram',
    dateRule: {
      type: 'calculated',
      calculationRef: 'bol-choth'
    },
    regions: ['Gujarat', 'Western India'],
    traditions: ['Hindu'],
    communities: ['Gujarati'],
    isPublicHoliday: false,
    countries: ['IN'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Gujarat Cultural Heritage & Vrat Documentation',
        type: 'cultural-org'
      }
    ],
    relatedObservances: ['nag-panchami', 'randhan-chhath', 'shitala-satam'],
    shortDescription: 'A traditional Gujarati fast observed on Shravan Vad 4 dedicated to the worship of cows and calves for family well-being and prosperity.',
    tags: ['bol-choth', 'shravan', 'fast', 'gau-puja']
  },
  {
    id: 'nag-panchami',
    name: 'Nag Panchami',
    type: ObservanceType.FESTIVAL,
    calendar: 'hindu-vikram',
    dateRule: {
      type: 'calculated',
      calculationRef: 'nag-panchami'
    },
    regions: ['Gujarat', 'All India'],
    traditions: ['Hindu'],
    communities: ['Gujarati'],
    isPublicHoliday: false,
    countries: ['IN'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Bhavishya Purana - Nag Panchami Mahatmya',
        type: 'religious-authority'
      }
    ],
    relatedObservances: ['bol-choth', 'randhan-chhath'],
    shortDescription: 'A traditional day of reverence for serpents and nature deities, observed on the fifth lunar day of Shravana in both Shukla and Vad fortnights.',
    tags: ['nag-panchami', 'shravan', 'festival', 'nature']
  },
  {
    id: 'randhan-chhath',
    name: 'Randhan Chhath',
    type: ObservanceType.FESTIVAL,
    calendar: 'hindu-vikram',
    dateRule: {
      type: 'calculated',
      calculationRef: 'randhan-chhath'
    },
    regions: ['Gujarat'],
    traditions: ['Hindu (Gujarati)'],
    communities: ['Gujarati'],
    isPublicHoliday: false,
    countries: ['IN'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Gujarat State Portal - Festivals and Traditions Documentation',
        type: 'government'
      }
    ],
    relatedObservances: ['shitala-satam', 'janmashtami'],
    shortDescription: 'The cooking day occurring on Shravan Vad 6 in Gujarat, when stoves are cleaned and all meals for the following day (Shitala Satam) are prepared.',
    tags: ['randhan-chhath', 'shravan', 'gujarat', 'culinary', 'festival']
  },
  {
    id: 'shitala-satam',
    name: 'Shitala Satam',
    type: ObservanceType.FESTIVAL,
    calendar: 'hindu-vikram',
    dateRule: {
      type: 'calculated',
      calculationRef: 'shitala-satam'
    },
    regions: ['Gujarat', 'Western India'],
    traditions: ['Hindu (Gujarati)'],
    communities: ['Gujarati'],
    isPublicHoliday: false,
    countries: ['IN'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Skanda Purana - Sheetala Mahatmya',
        type: 'religious-authority'
      },
      {
        name: 'Gujarat Folklore Society Archives',
        type: 'academic'
      }
    ],
    relatedObservances: ['randhan-chhath', 'janmashtami'],
    shortDescription: 'A revered Gujarati observance on Shravan Vad 7 where families consume pre-cooked cold food to honor Goddess Sheetala for health and protection against diseases.',
    tags: ['shitala-satam', 'sheetala', 'shravan', 'gujarat', 'festival']
  },
  {
    id: 'janmashtami',
    name: 'Krishna Janmashtami',
    type: ObservanceType.FESTIVAL,
    calendar: 'hindu-vikram',
    dateRule: {
      type: 'calculated',
      calculationRef: 'janmashtami'
    },
    regions: ['Gujarat', 'All India', 'Global'],
    traditions: ['Hindu (Vaishnava / All)'],
    communities: ['Gujarati', 'Global Hindu'],
    isPublicHoliday: true,
    countries: ['IN'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Bhagavata Purana, Skandha 10, Chapters 3-4',
        type: 'religious-authority'
      },
      {
        name: 'Government of India Gazetted Holidays',
        type: 'government'
      }
    ],
    storyRef: 'janmashtami',
    relatedObservances: ['putrada-ekadashi', 'shitala-satam', 'nand-mahotsav'],
    shortDescription: 'The joyful celebration commemorating the birth of Lord Krishna at midnight on Shravana Vad 8, marked with fasting, temple bells, and devotional night vigils.',
    tags: ['janmashtami', 'krishna', 'shravan', 'festival', 'fast', 'holiday']
  },
  {
    id: 'nand-mahotsav',
    name: 'Nand Mahotsav',
    type: ObservanceType.FESTIVAL,
    calendar: 'hindu-vikram',
    dateRule: {
      type: 'calculated',
      calculationRef: 'nand-mahotsav'
    },
    regions: ['Gujarat', 'Maharashtra', 'Northern India'],
    traditions: ['Hindu'],
    communities: ['Gujarati', 'Vaishnava'],
    isPublicHoliday: false,
    countries: ['IN'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Harivamsa Purana, Gokula Lila',
        type: 'religious-authority'
      }
    ],
    relatedObservances: ['janmashtami'],
    shortDescription: 'The jubilant community celebration following Janmashtami on Shravan Vad 9, reenacting Nanda Baba’s distribution of gifts and joy upon Krishna’s arrival.',
    tags: ['nand-mahotsav', 'dahi-handi', 'shravan', 'festival']
  },
  {
    id: 'vaikuntha-ekadashi',
    name: 'Vaikuntha Ekadashi',
    type: ObservanceType.FAST,
    calendar: 'hindu-vikram',
    dateRule: {
      type: 'calculated',
      calculationRef: 'vaikuntha-ekadashi'
    },
    regions: ['South India', 'Gujarat', 'All India'],
    traditions: ['Hindu (Vaishnava)'],
    communities: ['All Hindu'],
    isPublicHoliday: false,
    countries: ['IN'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Padma Purana, Uttara Khanda',
        type: 'religious-authority'
      }
    ],
    relatedObservances: ['putrada-ekadashi', 'janmashtami'],
    shortDescription: 'Also known as Mokshada Ekadashi, observed on the 11th lunar day of Shukla Paksha in Margashirsha (Magsar). Believed to open the gates of Vaikuntha (divine realm).',
    tags: ['fast', 'ekadashi', 'magsar', 'vishnu', 'moksha']
  },
  {
    id: 'raksha-bandhan',
    name: 'Raksha Bandhan',
    type: ObservanceType.FESTIVAL,
    calendar: 'hindu-vikram',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'hindu-vikram',
      calendarMonth: 10, // Shravan
      calendarDay: 15    // Sud 15 (Purnima)
    },
    regions: ['All India', 'Gujarat', 'Global'],
    traditions: ['Hindu'],
    communities: ['All Indian'],
    isPublicHoliday: true,
    countries: ['IN'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Bhavishya Purana - Raksha Bandhan Mahatmya',
        type: 'religious-authority'
      }
    ],
    relatedObservances: ['janmashtami'],
    shortDescription: 'The sacred festival of sibling bond, protection, and love observed on Shravana Purnima with the tying of sacred rakhi threads.',
    tags: ['festival', 'rakhi', 'shravan', 'purnima']
  },
  {
    id: 'ganesh-chaturthi',
    name: 'Ganesh Chaturthi',
    type: ObservanceType.FESTIVAL,
    calendar: 'hindu-vikram',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'hindu-vikram',
      calendarMonth: 11, // Bhadarvo
      calendarDay: 4     // Sud 4
    },
    regions: ['Maharashtra', 'Gujarat', 'All India'],
    traditions: ['Hindu'],
    communities: ['All Hindu'],
    isPublicHoliday: true,
    countries: ['IN'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Ganesha Purana',
        type: 'religious-authority'
      }
    ],
    relatedObservances: ['anant-chaturdashi', 'navaratri'],
    shortDescription: 'The grand festival marking the arrival of Lord Ganesha to earth, celebrated with clay murti installations, modak offerings, and prayers.',
    tags: ['ganesh', 'bhadarvo', 'festival', 'holiday']
  },
  {
    id: 'samvatsari',
    name: 'Samvatsari (Paryushana Parva)',
    type: ObservanceType.HOLY_DAY,
    calendar: 'hindu-vikram',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'hindu-vikram',
      calendarMonth: 11, // Bhadarvo
      calendarDay: 4     // Sud 4
    },
    regions: ['Gujarat', 'Rajasthan', 'Global'],
    traditions: ['Jain (Svetambara)'],
    communities: ['Jain', 'Gujarati'],
    isPublicHoliday: false,
    countries: ['IN'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Jain Agamas - Kalpa Sutra',
        type: 'religious-authority'
      }
    ],
    relatedObservances: ['ganesh-chaturthi'],
    shortDescription: 'The supreme holy day of universal forgiveness in Jainism, concluding the Paryushana festival with the recitation of "Micchami Dukkadam".',
    tags: ['jain', 'forgiveness', 'paryushana', 'bhadarvo', 'fast']
  },
  {
    id: 'anant-chaturdashi',
    name: 'Anant Chaturdashi',
    type: ObservanceType.FESTIVAL,
    calendar: 'hindu-vikram',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'hindu-vikram',
      calendarMonth: 11, // Bhadarvo
      calendarDay: 14    // Sud 14
    },
    regions: ['Western India', 'Gujarat', 'Maharashtra'],
    traditions: ['Hindu'],
    communities: ['All Hindu'],
    isPublicHoliday: false,
    countries: ['IN'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Mahabharata, Vana Parva - Ananta Vrata Story',
        type: 'religious-authority'
      }
    ],
    relatedObservances: ['ganesh-chaturthi'],
    shortDescription: 'The 14th day of Bhadrapada dedicated to Lord Ananta (Vishnu) and marking the grand immersion (Visarjan) of Ganesha murtis.',
    tags: ['anant', 'visarjan', 'bhadarvo', 'festival']
  },
  {
    id: 'navaratri',
    name: 'Sharad Navaratri',
    type: ObservanceType.FESTIVAL,
    calendar: 'hindu-vikram',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'hindu-vikram',
      calendarMonth: 12, // Aaso
      calendarDay: 1     // Sud 1
    },
    regions: ['Gujarat', 'All India', 'Global'],
    traditions: ['Hindu'],
    communities: ['Gujarati', 'All Hindu'],
    isPublicHoliday: false,
    countries: ['IN'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Devi Mahatmya (Durga Saptashati)',
        type: 'religious-authority'
      }
    ],
    relatedObservances: ['durga-ashtami', 'dussehra'],
    shortDescription: 'The nine-night festival honoring the divine feminine (Devi Shakti), celebrated with devotion, fasting, and world-renowned Garba and Dandiya dances across Gujarat.',
    tags: ['navaratri', 'garba', 'shakti', 'aaso', 'festival']
  },
  {
    id: 'durga-ashtami',
    name: 'Maha Ashtami (Durga Ashtami)',
    type: ObservanceType.FESTIVAL,
    calendar: 'hindu-vikram',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'hindu-vikram',
      calendarMonth: 12, // Aaso
      calendarDay: 8     // Sud 8
    },
    regions: ['All India', 'Bengal', 'Gujarat'],
    traditions: ['Hindu'],
    communities: ['All Hindu'],
    isPublicHoliday: false,
    countries: ['IN'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Devi Bhagavata Purana',
        type: 'religious-authority'
      }
    ],
    relatedObservances: ['navaratri', 'dussehra'],
    shortDescription: 'The eighth day of Navaratri honoring Goddess Durga’s triumph over ignorance and negativity, marked with Sandhi Puja and Kanya Puja.',
    tags: ['durga', 'ashtami', 'navaratri', 'festival']
  },
  {
    id: 'dussehra',
    name: 'Dussehra (Vijayadashami)',
    type: ObservanceType.FESTIVAL,
    calendar: 'hindu-vikram',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'hindu-vikram',
      calendarMonth: 12, // Aaso
      calendarDay: 10    // Sud 10
    },
    regions: ['All India', 'Gujarat', 'Global'],
    traditions: ['Hindu'],
    communities: ['All Indian'],
    isPublicHoliday: true,
    countries: ['IN'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Valmiki Ramayana, Yuddha Kanda',
        type: 'religious-authority'
      }
    ],
    relatedObservances: ['navaratri', 'diwali'],
    shortDescription: 'The celebration of victory of good over evil, commemorating Lord Rama’s triumph over Ravana and Goddess Durga’s victory over Mahishasura.',
    tags: ['dussehra', 'vijayadashami', 'aaso', 'festival', 'holiday']
  },
  {
    id: 'sharad-purnima',
    name: 'Sharad Purnima',
    type: ObservanceType.FESTIVAL,
    calendar: 'hindu-vikram',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'hindu-vikram',
      calendarMonth: 12, // Aaso
      calendarDay: 15    // Sud 15 (Purnima)
    },
    regions: ['Gujarat', 'All India'],
    traditions: ['Hindu'],
    communities: ['Gujarati', 'Vaishnava'],
    isPublicHoliday: false,
    countries: ['IN'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Bhagavata Purana, Rasa Panchadhyayi',
        type: 'religious-authority'
      }
    ],
    relatedObservances: ['navaratri', 'diwali'],
    shortDescription: 'The harvest full-moon night associated with the divine Maha Raas of Krishna and Radha; traditional consumption of sweetened milk (Poha-Doodh) under moonlight.',
    tags: ['sharad-purnima', 'moon', 'raas', 'aaso', 'festival']
  },
  {
    id: 'karva-chauth',
    name: 'Karva Chauth',
    type: ObservanceType.FAST,
    calendar: 'hindu-vikram',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'hindu-vikram',
      calendarMonth: 12, // Aaso
      calendarDay: 19    // Vad 4
    },
    regions: ['Northern & Western India'],
    traditions: ['Hindu'],
    communities: ['North Indian', 'Gujarati'],
    isPublicHoliday: false,
    countries: ['IN'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Vedic Tradition & Vrat Kathas',
        type: 'cultural-org'
      }
    ],
    relatedObservances: ['diwali'],
    shortDescription: 'A devotional day-long waterless fast observed from sunrise until moonrise for the health, prosperity, and longevity of spouses.',
    tags: ['karva-chauth', 'fast', 'moon', 'aaso']
  },
  {
    id: 'dhanteras',
    name: 'Dhanteras (Dhan Trayodashi)',
    type: ObservanceType.FESTIVAL,
    calendar: 'hindu-vikram',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'hindu-vikram',
      calendarMonth: 12, // Aaso
      calendarDay: 28    // Vad 13
    },
    regions: ['All India', 'Gujarat'],
    traditions: ['Hindu'],
    communities: ['All Hindu'],
    isPublicHoliday: false,
    countries: ['IN'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Padma Purana, Samudra Manthan Chapter',
        type: 'religious-authority'
      }
    ],
    relatedObservances: ['diwali', 'bestu-varas'],
    shortDescription: 'The auspicious start of the Diwali festival celebrating Lord Dhanvantari (god of health) and Goddess Lakshmi, marked by purchasing precious metals and utensils.',
    tags: ['dhanteras', 'diwali', 'aaso', 'wealth', 'health']
  },
  {
    id: 'diwali',
    name: 'Diwali (Deepavali / Lakshmi Puja)',
    type: ObservanceType.FESTIVAL,
    calendar: 'hindu-vikram',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'hindu-vikram',
      calendarMonth: 12, // Aaso
      calendarDay: 30    // Vad 15 (Amavasya)
    },
    regions: ['All India', 'Global'],
    traditions: ['Hindu', 'Jain', 'Sikh'],
    communities: ['All Indian'],
    isPublicHoliday: true,
    countries: ['IN'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Skanda Purana, Kartik Mahatmya',
        type: 'religious-authority'
      },
      {
        name: 'Government of India Official Holiday List',
        type: 'government'
      }
    ],
    relatedObservances: ['dhanteras', 'bestu-varas', 'bhai-bij'],
    shortDescription: 'The global Festival of Lights signifying the triumph of light over darkness and knowledge over ignorance, celebrated with diyas, fireworks, and Lakshmi Puja.',
    tags: ['diwali', 'deepavali', 'lights', 'lakshmi', 'holiday']
  },
  {
    id: 'bestu-varas',
    name: 'Bestu Varas (Gujarati New Year)',
    type: ObservanceType.FESTIVAL,
    calendar: 'hindu-vikram',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'hindu-vikram',
      calendarMonth: 1, // Kartak
      calendarDay: 1    // Sud 1
    },
    regions: ['Gujarat', 'Western India', 'Global'],
    traditions: ['Hindu (Gujarati)'],
    communities: ['Gujarati'],
    isPublicHoliday: true,
    countries: ['IN'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Gujarat Government Gazetted Holidays',
        type: 'government'
      }
    ],
    relatedObservances: ['diwali', 'bhai-bij', 'labh-pancham'],
    shortDescription: 'The official New Year day in the Gujarati Kartikadi Vikram Samvat calendar, celebrated with temple visits, chopda pujan, and exchanging "Saal Mubarak" greetings.',
    tags: ['bestu-varas', 'gujarati-new-year', 'kartak', 'festival', 'holiday']
  },
  {
    id: 'bhai-bij',
    name: 'Bhai Bij (Bhai Dooj)',
    type: ObservanceType.FESTIVAL,
    calendar: 'hindu-vikram',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'hindu-vikram',
      calendarMonth: 1, // Kartak
      calendarDay: 2    // Sud 2
    },
    regions: ['All India', 'Gujarat'],
    traditions: ['Hindu'],
    communities: ['All Indian'],
    isPublicHoliday: false,
    countries: ['IN'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Yama and Yami Narrative, Rigveda & Puranas',
        type: 'religious-authority'
      }
    ],
    relatedObservances: ['bestu-varas', 'diwali'],
    shortDescription: 'Celebration of love and protection between brothers and sisters, recalling the legend of Yamraj visiting his sister Yamuna.',
    tags: ['bhai-bij', 'bhai-dooj', 'kartak', 'festival']
  },
  {
    id: 'labh-pancham',
    name: 'Labh Pancham (Saubhagya Panchami)',
    type: ObservanceType.FESTIVAL,
    calendar: 'hindu-vikram',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'hindu-vikram',
      calendarMonth: 1, // Kartak
      calendarDay: 5    // Sud 5
    },
    regions: ['Gujarat'],
    traditions: ['Hindu (Gujarati)', 'Jain'],
    communities: ['Gujarati'],
    isPublicHoliday: false,
    countries: ['IN'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Gujarat Chamber of Commerce Traditional Calendar Notes',
        type: 'cultural-org'
      }
    ],
    relatedObservances: ['bestu-varas', 'diwali'],
    shortDescription: 'The auspicious day when businesses and shops across Gujarat reopen after Diwali holidays, writing "Shubh" and "Labh" in fresh account books.',
    tags: ['labh-pancham', 'business', 'kartak', 'gujarat', 'festival']
  },
  {
    id: 'dev-diwali',
    name: 'Dev Diwali (Kartika Purnima)',
    type: ObservanceType.FESTIVAL,
    calendar: 'hindu-vikram',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'hindu-vikram',
      calendarMonth: 1, // Kartak
      calendarDay: 15   // Sud 15 (Purnima)
    },
    regions: ['All India', 'Gujarat', 'Varanasi'],
    traditions: ['Hindu', 'Jain'],
    communities: ['All Indian'],
    isPublicHoliday: false,
    countries: ['IN'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Shiva Purana, Tripurari Episode',
        type: 'religious-authority'
      }
    ],
    relatedObservances: ['diwali', 'bestu-varas'],
    shortDescription: 'The "Diwali of the Gods" celebrating Lord Shiva’s victory over Tripurasura and the sacred conclusion of Tulsi Vivah ceremonies.',
    tags: ['dev-diwali', 'kartika-purnima', 'kartak', 'festival']
  },
  {
    id: 'maha-shivaratri',
    name: 'Maha Shivaratri',
    type: ObservanceType.HOLY_DAY,
    calendar: 'hindu-vikram',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'hindu-vikram',
      calendarMonth: 4, // Maha
      calendarDay: 29   // Vad 14
    },
    regions: ['All India', 'Global'],
    traditions: ['Hindu (Shaiva / All)'],
    communities: ['All Hindu'],
    isPublicHoliday: true,
    countries: ['IN'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Shiva Purana, Vidyeshvara Samhita',
        type: 'religious-authority'
      }
    ],
    relatedObservances: ['holi'],
    shortDescription: 'The great cosmic night of Lord Shiva commemorating the divine wedding of Shiva and Parvati and the manifestation of the Jyotirlinga, marked with night-long meditation and fasting.',
    tags: ['shivaratri', 'shiva', 'maha', 'fast', 'holy_day', 'holiday']
  },
  {
    id: 'holi',
    name: 'Holi (Holika Dahan)',
    type: ObservanceType.FESTIVAL,
    calendar: 'hindu-vikram',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'hindu-vikram',
      calendarMonth: 5, // Fagun
      calendarDay: 15   // Sud 15 (Purnima)
    },
    regions: ['All India', 'Global'],
    traditions: ['Hindu'],
    communities: ['All Indian'],
    isPublicHoliday: true,
    countries: ['IN'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Narada Purana & Vishnu Purana (Prahlada Narrative)',
        type: 'religious-authority'
      }
    ],
    relatedObservances: ['dhuleti', 'maha-shivaratri'],
    shortDescription: 'The ancient festival of colors celebrating the victory of devotion over malice with evening bonfires honoring Bhakta Prahlada.',
    tags: ['holi', 'fagun', 'festival', 'holiday']
  },
  {
    id: 'dhuleti',
    name: 'Dhuleti (Holi Dhuleti)',
    type: ObservanceType.FESTIVAL,
    calendar: 'hindu-vikram',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'hindu-vikram',
      calendarMonth: 5, // Fagun
      calendarDay: 16   // Vad 1
    },
    regions: ['Gujarat', 'All India'],
    traditions: ['Hindu'],
    communities: ['All Indian'],
    isPublicHoliday: true,
    countries: ['IN'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Gujarat State Gazetted Holidays',
        type: 'government'
      }
    ],
    relatedObservances: ['holi'],
    shortDescription: 'The color-throwing day of Holi celebrated across Gujarat with gulal, music, sweets, and joyous community gatherings.',
    tags: ['dhuleti', 'colors', 'fagun', 'festival', 'holiday']
  },
  {
    id: 'rama-navami',
    name: 'Rama Navami',
    type: ObservanceType.FESTIVAL,
    calendar: 'hindu-vikram',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'hindu-vikram',
      calendarMonth: 6, // Chaitra
      calendarDay: 9    // Sud 9
    },
    regions: ['All India', 'Global'],
    traditions: ['Hindu'],
    communities: ['All Hindu'],
    isPublicHoliday: true,
    countries: ['IN'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Valmiki Ramayana, Bala Kanda',
        type: 'religious-authority'
      }
    ],
    relatedObservances: ['hanuman-jayanti'],
    shortDescription: 'The birthday celebration of Lord Rama, the seventh avatar of Vishnu, concluding the nine days of Chaitra Navratri.',
    tags: ['rama-navami', 'chaitra', 'festival', 'holiday']
  },
  {
    id: 'hanuman-jayanti',
    name: 'Hanuman Jayanti',
    type: ObservanceType.FESTIVAL,
    calendar: 'hindu-vikram',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'hindu-vikram',
      calendarMonth: 6, // Chaitra
      calendarDay: 15   // Sud 15 (Purnima)
    },
    regions: ['All India', 'Gujarat', 'Global'],
    traditions: ['Hindu'],
    communities: ['All Hindu'],
    isPublicHoliday: false,
    countries: ['IN'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Hanuman Chalisa & Valmiki Ramayana',
        type: 'religious-authority'
      }
    ],
    relatedObservances: ['rama-navami'],
    shortDescription: 'The celebration of the birth of Lord Hanuman, the epitome of selfless devotion and strength, observed on Chaitra Purnima.',
    tags: ['hanuman-jayanti', 'chaitra', 'festival']
  },

  // --- Hebrew Calendar Observances ---
  {
    id: 'rosh-hashanah',
    name: 'Rosh Hashanah',
    type: ObservanceType.HOLY_DAY,
    calendar: 'hebrew',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'hebrew',
      calendarMonth: 1, // Tishrei
      calendarDay: 1
    },
    regions: ['Global', 'Israel'],
    traditions: ['Jewish'],
    communities: ['Jewish Community'],
    isPublicHoliday: true,
    countries: ['IL'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Leviticus 23:24-25',
        type: 'religious-authority'
      }
    ],
    relatedObservances: ['yom-kippur', 'sukkot'],
    shortDescription: 'The Jewish New Year marking the anniversary of the creation of the world, observed with prayer, shofar blowing, and festive meals with apples and honey.',
    tags: ['hebrew', 'rosh-hashanah', 'jewish', 'holy_day']
  },
  {
    id: 'yom-kippur',
    name: 'Yom Kippur',
    type: ObservanceType.FAST,
    calendar: 'hebrew',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'hebrew',
      calendarMonth: 1, // Tishrei
      calendarDay: 10
    },
    regions: ['Global', 'Israel'],
    traditions: ['Jewish'],
    communities: ['Jewish Community'],
    isPublicHoliday: true,
    countries: ['IL'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Leviticus 16:29-31',
        type: 'religious-authority'
      }
    ],
    relatedObservances: ['rosh-hashanah', 'sukkot'],
    shortDescription: 'The Day of Atonement, the holiest day in the Hebrew calendar, observed with a 25-hour fast, deep introspection, and prayers for forgiveness.',
    tags: ['hebrew', 'yom-kippur', 'fast', 'atonement', 'holy_day']
  },
  {
    id: 'sukkot',
    name: 'Sukkot',
    type: ObservanceType.FESTIVAL,
    calendar: 'hebrew',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'hebrew',
      calendarMonth: 1, // Tishrei
      calendarDay: 15
    },
    regions: ['Global', 'Israel'],
    traditions: ['Jewish'],
    communities: ['Jewish Community'],
    isPublicHoliday: false,
    countries: ['IL'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Leviticus 23:33-43',
        type: 'religious-authority'
      }
    ],
    relatedObservances: ['rosh-hashanah', 'yom-kippur'],
    shortDescription: 'The Feast of Tabernacles, a week-long autumn harvest pilgrimage festival commemorating the sheltering of the Israelites in the desert.',
    tags: ['hebrew', 'sukkot', 'festival']
  },
  {
    id: 'hanukkah',
    name: 'Hanukkah',
    type: ObservanceType.FESTIVAL,
    calendar: 'hebrew',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'hebrew',
      calendarMonth: 3, // Kislev
      calendarDay: 25
    },
    regions: ['Global'],
    traditions: ['Jewish'],
    communities: ['Jewish Community'],
    isPublicHoliday: false,
    countries: ['IL'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Talmud, Tractate Shabbat 21b',
        type: 'religious-authority'
      }
    ],
    relatedObservances: ['pesach'],
    shortDescription: 'The eight-day Jewish Festival of Lights celebrating the rededication of the Second Temple in Jerusalem and the miracle of the oil cruse.',
    tags: ['hebrew', 'hanukkah', 'lights', 'festival']
  },
  {
    id: 'pesach',
    name: 'Passover (Pesach)',
    type: ObservanceType.FESTIVAL,
    calendar: 'hebrew',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'hebrew',
      calendarMonth: 7, // Nisan
      calendarDay: 15
    },
    regions: ['Global', 'Israel'],
    traditions: ['Jewish'],
    communities: ['Jewish Community'],
    isPublicHoliday: true,
    countries: ['IL'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Exodus 12:1-28',
        type: 'religious-authority'
      }
    ],
    relatedObservances: ['sukkot'],
    shortDescription: 'Major biblical festival commemorating the Exodus of the Israelites from slavery in ancient Egypt, celebrated with the traditional Seder meal and matzah.',
    tags: ['hebrew', 'passover', 'pesach', 'freedom', 'festival']
  },

  // --- Islamic / Hijri Calendar Observances ---
  {
    id: 'islamic-new-year',
    name: 'Hijri New Year',
    type: ObservanceType.HOLY_DAY,
    calendar: 'islamic-civil',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'islamic-civil',
      calendarMonth: 1, // Muharram
      calendarDay: 1
    },
    regions: ['Global', 'Middle East', 'South Asia'],
    traditions: ['Islamic'],
    communities: ['Global Muslim Community'],
    isPublicHoliday: true,
    countries: ['AE', 'SA', 'EG'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Islamic Historical Chronicle of the Hijra',
        type: 'academic'
      }
    ],
    relatedObservances: ['ashura', 'eid-al-fitr'],
    shortDescription: 'The start of the new lunar Hijri year, marking the Prophet Muhammad’s migration (Hijra) from Mecca to Medina in 622 CE.',
    tags: ['islamic', 'hijri', 'muharram', 'new-year', 'holy_day']
  },
  {
    id: 'ashura',
    name: 'Day of Ashura',
    type: ObservanceType.COMMEMORATION,
    calendar: 'islamic-civil',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'islamic-civil',
      calendarMonth: 1, // Muharram
      calendarDay: 10
    },
    regions: ['Global'],
    traditions: ['Islamic (Sunni / Shia)'],
    communities: ['Global Muslim Community'],
    isPublicHoliday: true,
    countries: ['IQ', 'IR', 'LB', 'IN'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Sahih Bukhari & Sahih Muslim',
        type: 'religious-authority'
      }
    ],
    relatedObservances: ['islamic-new-year'],
    shortDescription: 'Observed on 10 Muharram as a day of voluntary fasting in Sunni tradition (Moses saving the Israelites) and solemn commemoration of Imam Husayn in Shia tradition.',
    tags: ['islamic', 'ashura', 'muharram', 'fast', 'commemoration']
  },
  {
    id: 'mawlid',
    name: 'Mawlid an-Nabi',
    type: ObservanceType.HOLY_DAY,
    calendar: 'islamic-civil',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'islamic-civil',
      calendarMonth: 3, // Rabi' al-Awwal
      calendarDay: 12
    },
    regions: ['Global'],
    traditions: ['Islamic'],
    communities: ['Global Muslim Community'],
    isPublicHoliday: true,
    countries: ['EG', 'TR', 'ID', 'IN'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Islamic Cultural & Historical Documentation',
        type: 'academic'
      }
    ],
    relatedObservances: ['eid-al-fitr', 'eid-al-adha'],
    shortDescription: 'The observance of the birthday of the Prophet Muhammad, celebrated on 12 Rabi\' al-Awwal with poems, charity, and devotional gatherings.',
    tags: ['islamic', 'mawlid', 'prophet', 'holy_day']
  },
  {
    id: 'eid-al-fitr',
    name: 'Eid al-Fitr',
    type: ObservanceType.FESTIVAL,
    calendar: 'islamic-civil',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'islamic-civil',
      calendarMonth: 10, // Shawwal
      calendarDay: 1
    },
    regions: ['Global'],
    traditions: ['Islamic'],
    communities: ['Global Muslim Community'],
    isPublicHoliday: true,
    countries: ['SA', 'AE', 'ID', 'EG', 'IN'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Quran, Surah Al-Baqarah 2:185',
        type: 'religious-authority'
      },
      {
        name: 'Official National Gazetted Holidays',
        type: 'government'
      }
    ],
    relatedObservances: ['eid-al-adha'],
    shortDescription: 'The "Festival of Breaking the Fast" celebrated on the first day of Shawwal, marking the joyful conclusion of the holy fasting month of Ramadan.',
    tags: ['eid', 'eid-al-fitr', 'ramadan', 'festival', 'holiday']
  },
  {
    id: 'eid-al-adha',
    name: 'Eid al-Adha',
    type: ObservanceType.FESTIVAL,
    calendar: 'islamic-civil',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'islamic-civil',
      calendarMonth: 12, // Dhu al-Hijjah
      calendarDay: 10
    },
    regions: ['Global'],
    traditions: ['Islamic'],
    communities: ['Global Muslim Community'],
    isPublicHoliday: true,
    countries: ['SA', 'AE', 'ID', 'EG', 'IN'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Quran, Surah As-Saffat 37:102-113',
        type: 'religious-authority'
      }
    ],
    relatedObservances: ['eid-al-fitr'],
    shortDescription: 'The "Feast of the Sacrifice" commemorating Prophet Ibrahim’s obedience to God, concluding the annual Hajj pilgrimage.',
    tags: ['eid', 'eid-al-adha', 'hajj', 'sacrifice', 'festival', 'holiday']
  },

  // --- Persian / Solar Hijri Observances ---
  {
    id: 'nowruz',
    name: 'Nowruz (Persian New Year)',
    type: ObservanceType.FESTIVAL,
    calendar: 'persian',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'persian',
      calendarMonth: 1, // Farvardin
      calendarDay: 1
    },
    regions: ['Iran', 'Central Asia', 'Global'],
    traditions: ['Persian / Zoroastrian / Cultural'],
    communities: ['Persian Diaspora', 'Central Asian'],
    isPublicHoliday: true,
    countries: ['IR', 'AF', 'AZ', 'TJ'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'UNESCO Representative List of the Intangible Cultural Heritage of Humanity',
        type: 'academic'
      }
    ],
    relatedObservances: ['shab-e-yalda'],
    shortDescription: 'The ancient celebration of the vernal equinox marking the rebirth of nature and the first day of Farvardin in the Solar Hijri calendar.',
    tags: ['persian', 'nowruz', 'equinox', 'spring', 'festival', 'holiday']
  },
  {
    id: 'shab-e-yalda',
    name: 'Shab-e Yalda (Yalda Night)',
    type: ObservanceType.COMMEMORATION,
    calendar: 'persian',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'persian',
      calendarMonth: 10, // Dey
      calendarDay: 1
    },
    regions: ['Iran', 'Central Asia'],
    traditions: ['Persian Cultural'],
    communities: ['Persian Diaspora'],
    isPublicHoliday: false,
    countries: ['IR'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'UNESCO Intangible Cultural Heritage Documentation on Yalda',
        type: 'academic'
      }
    ],
    relatedObservances: ['nowruz'],
    shortDescription: 'The ancient celebration of the winter solstice, marking the longest night of the year with family gatherings, Hafez poetry reading, and pomegranate feasts.',
    tags: ['persian', 'yalda', 'solstice', 'commemoration']
  },

  // --- Indian National Saka Observances ---
  {
    id: 'saka-new-year',
    name: 'Saka Calendar New Year',
    type: ObservanceType.COMMEMORATION,
    calendar: 'indian-saka',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'indian-saka',
      calendarMonth: 1, // Chaitra
      calendarDay: 1
    },
    regions: ['India'],
    traditions: ['National Civil'],
    communities: ['Indian Citizens'],
    isPublicHoliday: false,
    countries: ['IN'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Calendar Reform Committee Report, Government of India (1955)',
        type: 'government'
      }
    ],
    relatedObservances: ['republic-day-india', 'independence-day-india'],
    shortDescription: 'The first day of the official Indian National Civil Calendar (Saka Era), commencing on Chaitra 1.',
    tags: ['saka', 'national-calendar', 'india', 'commemoration']
  },

  // --- Civic, National, and International Days ---
  {
    id: 'republic-day-india',
    name: 'Republic Day of India',
    type: ObservanceType.NATIONAL_HOLIDAY,
    calendar: 'gregorian',
    dateRule: {
      type: 'fixed-gregorian',
      month: 1, // January
      day: 26
    },
    regions: ['India'],
    traditions: ['National Civil'],
    communities: ['Indian Citizens', 'Global Diaspora'],
    isPublicHoliday: true,
    countries: ['IN'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Constitution of India Enactment Records (1950)',
        type: 'government'
      }
    ],
    relatedObservances: ['independence-day-india', 'gandhi-jayanti'],
    shortDescription: 'National holiday commemorating the adoption and enactment of the Constitution of India on January 26, 1950.',
    tags: ['national-holiday', 'india', 'constitution', 'holiday']
  },
  {
    id: 'independence-day-india',
    name: 'Independence Day of India',
    type: ObservanceType.NATIONAL_HOLIDAY,
    calendar: 'gregorian',
    dateRule: {
      type: 'fixed-gregorian',
      month: 8, // August
      day: 15
    },
    regions: ['India'],
    traditions: ['National Civil'],
    communities: ['Indian Citizens', 'Global Diaspora'],
    isPublicHoliday: true,
    countries: ['IN'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Indian Independence Act 1947 Documentation',
        type: 'government'
      }
    ],
    relatedObservances: ['republic-day-india', 'gandhi-jayanti'],
    shortDescription: 'National holiday celebrating India’s independence from British colonial rule on August 15, 1947.',
    tags: ['national-holiday', 'india', 'independence', 'holiday']
  },
  {
    id: 'remembrance-victims-terrorism',
    name: 'International Day of Remembrance for Victims of Terrorism',
    type: ObservanceType.COMMEMORATION,
    calendar: 'gregorian',
    dateRule: {
      type: 'fixed-gregorian',
      month: 8, // August
      day: 21
    },
    regions: ['Global'],
    traditions: ['Global Civic'],
    communities: [],
    isPublicHoliday: false,
    countries: [],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'United Nations General Assembly Resolution A/RES/72/165',
        type: 'government',
        url: 'https://undocs.org/A/RES/72/165'
      }
    ],
    storyRef: 'remembrance-victims-terrorism',
    relatedObservances: ['international-day-peace'],
    shortDescription: 'A United Nations observance established to honor and support the victims and survivors of terrorism, emphasizing solidarity, resilience, and human rights.',
    tags: ['un', 'commemoration', 'remembrance', 'human rights']
  },
  {
    id: 'international-day-peace',
    name: 'International Day of Peace',
    type: ObservanceType.COMMEMORATION,
    calendar: 'gregorian',
    dateRule: {
      type: 'fixed-gregorian',
      month: 9, // September
      day: 21
    },
    regions: ['Global'],
    traditions: ['Global Civic'],
    communities: [],
    isPublicHoliday: false,
    countries: [],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'United Nations General Assembly Resolution 55/282',
        type: 'government',
        url: 'https://www.un.org/en/observances/international-day-peace'
      }
    ],
    relatedObservances: ['remembrance-victims-terrorism'],
    shortDescription: 'Established by the United Nations in 1981, dedicated to strengthening the ideals of peace both within and among all nations and peoples.',
    tags: ['un', 'peace', 'commemoration', 'global']
  },
  {
    id: 'gandhi-jayanti',
    name: 'Gandhi Jayanti',
    type: ObservanceType.NATIONAL_HOLIDAY,
    calendar: 'gregorian',
    dateRule: {
      type: 'fixed-gregorian',
      month: 10, // October
      day: 2
    },
    regions: ['India', 'Global'],
    traditions: ['National Civil', 'UN International Day of Non-Violence'],
    communities: ['Global'],
    isPublicHoliday: true,
    countries: ['IN'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Government of India National Gazette',
        type: 'government'
      },
      {
        name: 'United Nations Resolution A/RES/61/271 (International Day of Non-Violence)',
        type: 'government'
      }
    ],
    relatedObservances: ['republic-day-india', 'independence-day-india'],
    shortDescription: 'National holiday in India and UN International Day of Non-Violence honoring the birthday and philosophy of Mahatma Gandhi.',
    tags: ['gandhi', 'non-violence', 'national-holiday', 'holiday']
  },

  // --- Chinese Traditional Lunisolar Observances ---
  {
    id: 'chinese-new-year',
    name: 'Chinese New Year (Spring Festival / 春节)',
    type: ObservanceType.FESTIVAL,
    calendar: 'chinese',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'chinese',
      calendarMonth: 1, // Month 1 (Zhengyue)
      calendarDay: 1
    },
    regions: ['China', 'East Asia', 'Global'],
    traditions: ['Chinese Traditional', 'East Asian'],
    communities: ['Chinese Diaspora'],
    isPublicHoliday: true,
    countries: ['CN', 'TW', 'HK', 'SG', 'MY'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Standard Astronomical Calendar of China (GB/T 33661-2017)',
        type: 'government'
      }
    ],
    shortDescription: 'The most important traditional Chinese festival, marking the beginning of the lunar year (Year of the Horse in 2026) with family reunions, feasts, and dragon dances.',
    tags: ['spring-festival', 'chinese-new-year', 'lunar-new-year', 'festival']
  },
  {
    id: 'lantern-festival',
    name: 'Lantern Festival (Yuanxiao / 元宵节)',
    type: ObservanceType.FESTIVAL,
    calendar: 'chinese',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'chinese',
      calendarMonth: 1,
      calendarDay: 15
    },
    regions: ['China', 'East Asia', 'Global'],
    traditions: ['Chinese Traditional'],
    communities: ['Chinese Diaspora'],
    isPublicHoliday: false,
    countries: ['CN', 'TW', 'HK'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Purple Mountain Observatory Lunar Calendar Documentation',
        type: 'astronomical'
      }
    ],
    shortDescription: 'Celebrated on the 15th day of the first lunar month, marking the final day of the traditional Chinese New Year celebrations with lantern displays and sweet rice balls (tangyuan).',
    tags: ['lantern-festival', 'yuanxiao', 'festival']
  },
  {
    id: 'dragon-boat-festival',
    name: 'Dragon Boat Festival (Duanwu / 端午节)',
    type: ObservanceType.FESTIVAL,
    calendar: 'chinese',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'chinese',
      calendarMonth: 5,
      calendarDay: 5
    },
    regions: ['China', 'East Asia', 'Global'],
    traditions: ['Chinese Traditional'],
    communities: ['Chinese Diaspora'],
    isPublicHoliday: true,
    countries: ['CN', 'TW', 'HK'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Ministry of Culture and Tourism of China',
        type: 'government'
      }
    ],
    shortDescription: 'Occurring on the 5th day of the 5th lunar month, commemorating the ancient poet Qu Yuan with dragon boat races and sticky rice dumplings (zongzi).',
    tags: ['duanwu', 'dragon-boat', 'festival']
  },
  {
    id: 'mid-autumn-festival',
    name: 'Mid-Autumn Festival (Zhongqiu / 中秋节)',
    type: ObservanceType.FESTIVAL,
    calendar: 'chinese',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'chinese',
      calendarMonth: 8,
      calendarDay: 15
    },
    regions: ['China', 'East Asia', 'Global'],
    traditions: ['Chinese Traditional'],
    communities: ['Chinese Diaspora'],
    isPublicHoliday: true,
    countries: ['CN', 'TW', 'HK', 'SG', 'MY'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Standard Astronomical Calendar of China (GB/T 33661-2017)',
        type: 'government'
      }
    ],
    shortDescription: 'A joyful harvest festival celebrated on the 15th day of the 8th lunar month under the full harvest moon with mooncakes, lanterns, and family gatherings.',
    tags: ['mid-autumn', 'moon-festival', 'zhongqiu', 'festival']
  },
  {
    id: 'double-ninth-festival',
    name: 'Double Ninth Festival (Chongyang / 重阳节)',
    type: ObservanceType.FESTIVAL,
    calendar: 'chinese',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'chinese',
      calendarMonth: 9,
      calendarDay: 9
    },
    regions: ['China', 'East Asia', 'Global'],
    traditions: ['Chinese Traditional'],
    communities: ['Chinese Diaspora'],
    isPublicHoliday: false,
    countries: ['CN', 'TW', 'HK'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Chinese Folk Literature and Art Association',
        type: 'encyclopedia'
      }
    ],
    shortDescription: 'Observed on the 9th day of the 9th lunar month as a day of respect for the elderly, hiking up mountains, and enjoying chrysanthemum tea and cakes.',
    tags: ['chongyang', 'double-ninth', 'seniors-day', 'festival']
  },

  // --- Coptic Calendar Observances ---
  {
    id: 'coptic-new-year',
    name: 'Nayrouz (Coptic New Year / Feast of the Martyrs)',
    type: ObservanceType.HOLY_DAY,
    calendar: 'coptic',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'coptic',
      calendarMonth: 1, // 1 Tout
      calendarDay: 1
    },
    regions: ['Egypt', 'Global'],
    traditions: ['Coptic Orthodox'],
    communities: ['Coptic Christians'],
    isPublicHoliday: false,
    countries: ['EG'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Coptic Orthodox Patriarchate Liturgical Synaxarium',
        type: 'religious-authority'
      }
    ],
    shortDescription: 'The Coptic New Year (1 Tout), commemorating the Christian martyrs of Egypt during the Roman persecutions under Emperor Diocletian.',
    tags: ['coptic', 'nayrouz', 'coptic-new-year', 'martyrs', 'holy-day']
  },
  {
    id: 'coptic-christmas',
    name: 'Coptic Christmas (Feast of the Nativity / 29 Kiahk)',
    type: ObservanceType.HOLY_DAY,
    calendar: 'coptic',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'coptic',
      calendarMonth: 4, // 29 Kiahk (Jan 7)
      calendarDay: 29
    },
    regions: ['Egypt', 'Global'],
    traditions: ['Coptic Orthodox'],
    communities: ['Coptic Christians'],
    isPublicHoliday: true,
    countries: ['EG'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Coptic Orthodox Church Liturgical Calendar',
        type: 'religious-authority'
      }
    ],
    shortDescription: 'The celebration of the Nativity of Jesus Christ observed according to the Alexandrian calendar on 29 Kiahk (January 7 Gregorian).',
    tags: ['coptic', 'christmas', 'nativity', 'kiahk', 'holy-day']
  },

  // --- Ethiopian Calendar Observances ---
  {
    id: 'enkutatash',
    name: 'Enkutatash (Ethiopian New Year)',
    type: ObservanceType.NATIONAL_HOLIDAY,
    calendar: 'ethiopic',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'ethiopic',
      calendarMonth: 1, // 1 Meskerem
      calendarDay: 1
    },
    regions: ['Ethiopia', 'Eritrea', 'Global'],
    traditions: ['Ethiopian Orthodox', 'National Civil'],
    communities: ['Ethiopians', 'Eritreans'],
    isPublicHoliday: true,
    countries: ['ET', 'ER'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Ministry of Culture and Tourism, Federal Democratic Republic of Ethiopia',
        type: 'government'
      }
    ],
    shortDescription: 'The first day of the Ethiopian calendar (1 Meskerem / September 11 Gregorian), symbolizing the end of the rainy season and the renewal of springtime.',
    tags: ['enkutatash', 'ethiopian-new-year', 'meskerem', 'holiday']
  },
  {
    id: 'meskel',
    name: 'Meskel (Finding of the True Cross)',
    type: ObservanceType.FESTIVAL,
    calendar: 'ethiopic',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'ethiopic',
      calendarMonth: 1, // 17 Meskerem
      calendarDay: 17
    },
    regions: ['Ethiopia', 'Eritrea'],
    traditions: ['Ethiopian Orthodox'],
    communities: ['Ethiopians', 'Eritreans'],
    isPublicHoliday: true,
    countries: ['ET'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'UNESCO Intangible Cultural Heritage of Humanity Registry (Meskel)',
        type: 'international-body'
      }
    ],
    shortDescription: 'A major religious holiday commemorating the discovery of the True Cross by Queen Helena, celebrated with the lighting of large ceremonial bonfires (Demera).',
    tags: ['meskel', 'demera', 'ethiopian', 'festival', 'unesco']
  },
  {
    id: 'genna',
    name: 'Genna (Ethiopian Christmas)',
    type: ObservanceType.HOLY_DAY,
    calendar: 'ethiopic',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'ethiopic',
      calendarMonth: 4, // 29 Tahsas (Jan 7)
      calendarDay: 29
    },
    regions: ['Ethiopia', 'Eritrea'],
    traditions: ['Ethiopian Orthodox'],
    communities: ['Ethiopians', 'Eritreans'],
    isPublicHoliday: true,
    countries: ['ET', 'ER'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'Ethiopian Orthodox Tewahedo Church Patriarchate',
        type: 'religious-authority'
      }
    ],
    shortDescription: 'The celebration of the Nativity of Jesus in Ethiopia and Eritrea on 29 Tahsas (January 7 Gregorian), accompanied by traditional sports and festive church services.',
    tags: ['genna', 'ethiopian-christmas', 'tahsas', 'holy-day']
  },
  {
    id: 'timkat',
    name: 'Timkat (Ethiopian Epiphany)',
    type: ObservanceType.FESTIVAL,
    calendar: 'ethiopic',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'ethiopic',
      calendarMonth: 5, // 11 Tir (Jan 19)
      calendarDay: 11
    },
    regions: ['Ethiopia', 'Eritrea'],
    traditions: ['Ethiopian Orthodox'],
    communities: ['Ethiopians', 'Eritreans'],
    isPublicHoliday: true,
    countries: ['ET'],
    verificationStatus: 'verified',
    sources: [
      {
        name: 'UNESCO Intangible Cultural Heritage of Humanity (Timkat / Epiphany)',
        type: 'international-body'
      }
    ],
    shortDescription: 'Celebrates the baptism of Jesus in the Jordan River with solemn processions of the sacred Tabots, immersion in blessed waters, and vibrant singing and dancing.',
    tags: ['timkat', 'epiphany', 'ethiopian', 'festival', 'unesco']
  }
];

