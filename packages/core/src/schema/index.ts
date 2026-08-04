/* Builders tipados de JSON-LD (schema.org). Devuelven objetos planos que
   se serializan con JSON.stringify en un <script type="application/ld+json">. */

interface MovingCompanyInput {
  name: string;
  url: string;
  logo?: string;
  telephone: string;
  email: string;
  streetAddress: string;
  addressLocality: string;
  addressCountry: string;
  sameAs?: string[];
  areaServed?: string[];
  foundingDate?: string;
}

export function movingCompany(i: MovingCompanyInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    name: i.name,
    url: i.url,
    ...(i.logo ? { logo: i.logo } : {}),
    telephone: i.telephone,
    email: i.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: i.streetAddress,
      addressLocality: i.addressLocality,
      addressCountry: i.addressCountry,
    },
    ...(i.sameAs?.length ? { sameAs: i.sameAs } : {}),
    ...(i.areaServed?.length ? { areaServed: i.areaServed } : {}),
    ...(i.foundingDate ? { foundingDate: i.foundingDate } : {}),
  };
}

export function breadcrumb(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function faqPage(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}
