export type Locale = 'en' | 'hi' | 'gu';

export interface TranslationSchema {
  // Navigation & Header
  nav: {
    today: string;
    calendars: string;
    observances: string;
    about: string;
    search: string;
    contact: string;
    searchPlaceholder: string;
    menu: string;
    close: string;
    explore: string;
    todayDesc: string;
    calendarsDesc: string;
    observancesDesc: string;
    aboutDesc: string;
    searchDir: string;
    contactFeedback: string;
    toggleSearch: string;
    toggleMenu: string;
  };

  // Home / Hero Section
  hero: {
    featuredDate: string;
    tagline: string;
    datePlaceholder: string;
    goBtn: string;
    openCalendar: string;
    howCalendarWorks: string;
    todaysObservances: string;
    todaysMeaning: string;
    whyTodayMatters: string;
    noObservances: string;
    defaultSpotlight: string;
    aug24Spotlight: string;
    invalidDateAlert: string;
  };

  // Common Labels & Actions
  common: {
    calendarSystem: string;
    regionCelebrated: string;
    calculationCycle: string;
    regionalVariations: string;
    viewMonthCalendar: string;
    allCalendars: string;
    yesterday: string;
    tomorrow: string;
    start: string;
    end: string;
    breadcrumbsHome: string;
    correspondingTo: string;
    viewAnotherCalendar: string;
    dailyConversions: string;
    observancesOnDate: string;
    noObservancesOnDate: string;
    observanceTypes: {
      festival: string;
      fast: string;
      holy_day: string;
      national_holiday: string;
      international_day: string;
      commemoration: string;
    };
    filterAll: string;
    filterFestivals: string;
    filterFasting: string;
    filterCommemorations: string;
    filterHolidays: string;
    filterLabel: string;
    noFilterResults: string;
  };

  // Directories & Metadata
  directories: {
    calendarsTitle: string;
    calendarsHeading: string;
    calendarsIntro: string;
    calendarsMetaDesc: string;
    observancesTitle: string;
    observancesHeading: string;
    observancesIntro: string;
    observancesMetaDesc: string;
  };

  // Static Pages
  about: {
    title: string;
    metaDesc: string;
  };
  contact: {
    title: string;
    metaDesc: string;
  };
  privacy: {
    title: string;
    metaDesc: string;
  };
  terms: {
    title: string;
    metaDesc: string;
  };
  search: {
    title: string;
    metaDesc: string;
    heading: string;
    placeholder: string;
    submit: string;
    resultsFor: string;
    noResults: string;
    tryDifferent: string;
  };

  // Footer
  footer: {
    tagline: string;
    about: string;
    methodology: string;
    privacy: string;
    terms: string;
    contact: string;
    rightsReserved: string;
  };

  // Language display names
  languages: {
    en: string;
    hi: string;
    gu: string;
  };
}

export interface LocalizedCalendarInfo {
  id: string;
  name: { en: string; hi: string; gu: string };
  nativeName?: string;
  type: { en: string; hi: string; gu: string };
  description: { en: string; hi: string; gu: string };
  cycleNote: { en: string; hi: string; gu: string };
  variations: { en: string; hi: string; gu: string };
}

export interface LocalizedObservanceInfo {
  name: { en: string; hi: string; gu: string };
  shortDescription: { en: string; hi: string; gu: string };
}
