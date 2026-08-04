import type { Locale } from '../types/index.ts';

export const LOCALES: Locale[] = ['es', 'en'];

/** Etiqueta hreflang regional por idioma. */
export const hreflangCode: Record<Locale, string> = {
  es: 'es-PA',
  en: 'en-US',
};

/**
 * Devuelve las URLs alternas (hreflang recíproco) para un par de rutas ES/EN.
 * `paths` son rutas absolutas de sitio (ej. { es: '/es/', en: '/en/' }).
 */
export function alternates(
  origin: string,
  paths: Record<Locale, string>,
): { hreflang: string; href: string }[] {
  const list = LOCALES.map((l) => ({
    hreflang: hreflangCode[l],
    href: new URL(paths[l], origin).href,
  }));
  return list;
}

export const otherLocale = (l: Locale): Locale => (l === 'es' ? 'en' : 'es');
