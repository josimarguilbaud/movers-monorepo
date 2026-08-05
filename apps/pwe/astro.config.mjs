// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://panamaworldwideexpress.com',
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  redirects: {
    '/': '/es/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    icon(),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-PA', en: 'en-US' },
      },
    }),
  ],
});
