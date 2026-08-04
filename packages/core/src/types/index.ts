/* Tipos de dominio compartidos entre las apps (PIM, PWE, 3ª futura). */

export type Locale = 'es' | 'en';
export type SiteId = 'pim' | 'pwe';

/** Texto por idioma. */
export type I18nText = Record<Locale, string>;

/** Slug localizado real por idioma (nunca el slug ES bajo /en/). */
export interface LocalizedSlug {
  es: string;
  en: string;
}

export interface Service {
  id: string;
  slug: LocalizedSlug;
  icon: string;
  title: I18nText;
  summary: I18nText;
  sites: SiteId[];
}

export interface Testimonial {
  id: string;
  author: string;
  route: string;
  quote: I18nText;
  rating: 1 | 2 | 3 | 4 | 5;
}

export interface Faq {
  id: string;
  question: I18nText;
  answer: I18nText;
}
