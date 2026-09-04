import type { Locale, TranslationSchema } from './types';
import { en } from './translations/en';
import { hi } from './translations/hi';
import { gu } from './translations/gu';

export const LOCALES: Locale[] = ['en', 'hi', 'gu'];
export const DEFAULT_LOCALE: Locale = 'en';

const translationsMap: Record<Locale, TranslationSchema> = {
  en,
  hi,
  gu,
};

export function useTranslations(locale: Locale = 'en'): TranslationSchema {
  return translationsMap[locale] || translationsMap.en;
}

export function getLocaleFromUrl(url: URL | string): Locale {
  const pathname = typeof url === 'string' ? url : url.pathname;
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0) {
    if (segments[0] === 'hi') return 'hi';
    if (segments[0] === 'gu') return 'gu';
  }
  return 'en';
}

/**
 * Strips locale prefix from a pathname, returning the clean English path.
 * e.g. "/hi/date/2026-08-24" -> "/date/2026-08-24"
 * e.g. "/gu/calendars" -> "/calendars"
 * e.g. "/hi" or "/hi/" -> "/"
 */
export function getCleanPath(pathname: string): string {
  let clean = pathname.replace(/^\/(hi|gu)(\/|$)/, '/');
  if (!clean.startsWith('/')) {
    clean = '/' + clean;
  }
  return clean;
}

/**
 * Returns the localized equivalent URL path for a given target locale.
 * Preserves the exact resource path unless the resource is an unlocalized English-only route.
 */
export function getLocalizedPath(pathname: string, targetLocale: Locale): string {
  const cleanPath = getCleanPath(pathname);

  // Fallback for de-scoped English-only features (e.g. stories)
  if (cleanPath.startsWith('/stories') || cleanPath.startsWith('/story/')) {
    if (targetLocale === 'en') return cleanPath;
    return targetLocale === 'hi' ? '/hi' : '/gu';
  }

  if (targetLocale === 'en') {
    return cleanPath;
  }

  if (cleanPath === '/') {
    return `/${targetLocale}`;
  }

  return `/${targetLocale}${cleanPath}`;
}

/**
 * Generates canonical and hreflang URLs for SEO.
 */
export function getHreflangLinks(currentUrl: URL | string, siteOrigin: string = 'https://checkyourcalendar.com') {
  const pathname = typeof currentUrl === 'string' ? currentUrl : currentUrl.pathname;
  const cleanPath = getCleanPath(pathname);

  // If path is stories (English-only), only emit self canonical
  if (cleanPath.startsWith('/stories') || cleanPath.startsWith('/story/')) {
    return [
      { lang: 'en', href: `${siteOrigin}${cleanPath}` },
      { lang: 'x-default', href: `${siteOrigin}${cleanPath}` },
    ];
  }

  const enPath = cleanPath === '/' ? '/' : cleanPath;
  const hiPath = cleanPath === '/' ? '/hi' : `/hi${cleanPath}`;
  const guPath = cleanPath === '/' ? '/gu' : `/gu${cleanPath}`;

  return [
    { lang: 'en', href: `${siteOrigin}${enPath}` },
    { lang: 'hi', href: `${siteOrigin}${hiPath}` },
    { lang: 'gu', href: `${siteOrigin}${guPath}` },
    { lang: 'x-default', href: `${siteOrigin}${enPath}` },
  ];
}

/**
 * Formats a Gregorian date according to the website locale.
 */
export function formatGregorianDate(date: { year: number; month: number; day: number }, locale: Locale = 'en'): string {
  const jsDate = new Date(date.year, date.month - 1, date.day);
  const localeTag = locale === 'hi' ? 'hi-IN' : locale === 'gu' ? 'gu-IN' : 'en-US';
  return new Intl.DateTimeFormat(localeTag, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(jsDate);
}
