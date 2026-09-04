// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://checkyourcalendar.com',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hi', 'gu'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false
    }
  }
});
