import { type Observance, ObservanceType } from './types';

export const observanceRules: Observance[] = [
  {
    id: 'putrada-ekadashi',
    name: 'Shravan Putrada Ekadashi',
    type: ObservanceType.FAST,
    calendar: 'hindu-vikram',
    dateRule: {
      type: 'fixed-calendar',
      calendar: 'hindu-vikram',
      calendarMonth: 10, // Shravan
      calendarDay: 11   // Sud 11 (day 11 of the lunar month start offset)
    },
    regions: ['Western India', 'Gujarat'],
    traditions: ['Hindu (Vaishnava)'],
    communities: ['Gujarati'],
    isPublicHoliday: false,
    countries: [],
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
    relatedObservances: [],
    shortDescription: 'A significant fasting day dedicated to Lord Vishnu, observed on the 11th lunar day of the bright fortnight. It is traditionally observed for the well-being, prosperity, and longevity of children.',
    tags: ['fast', 'shravan', 'ekadashi', 'vishnu']
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
    relatedObservances: [],
    shortDescription: 'A United Nations observance established to honor and support the victims and survivors of terrorism, emphasizing solidarity, resilience, and human rights.',
    tags: ['un', 'commemoration', 'remembrance', 'human rights']
  }
];
