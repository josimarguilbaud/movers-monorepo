/* Datos del sitio PWE.

   NAP tomado del sitio publicado en panamaworldwideexpress.com (WordPress,
   revisado el 2026-08-17). Antes eran placeholder inventados.

   ⚠️ Lo único que sigue sin confirmar es `foundingYear` — ver nota abajo. */
export const site = {
  name: 'Panamá Worldwide Express',
  shortName: 'PWE',
  domain: 'https://panamaworldwideexpress.com',
  email: 'info@panamaworldwideexpress.com',
  phones: ['+507 277-2018', '+507 6379-1572'],
  whatsapp: '50763791572',
  address: {
    street: 'Aeropuerto de Carga, Local 13',
    locality: 'Ciudad de Panamá',
    country: 'PA',
  },
  /* ⚠️ DERIVADO, NO CONFIRMADO. El sitio publicado dice "más de 25 años de
     experiencia" y sus imágenes se subieron en 2023, así que 25 años antes de
     esa fecha da ~1998. Confirmar el año real de constitución con el cliente:
     este valor sale en el JSON-LD de la empresa. */
  foundingYear: 1998,
  socials: { facebook: '#', instagram: '#', linkedin: '#' }, // ⚠️ el sitio publicado no enlaza redes
};

export const yearsInBusiness = new Date('2026-01-01').getFullYear() - site.foundingYear;

/** Lo que el cliente ya afirma públicamente. Usar esto en los textos en vez de
    calcular años a partir de `foundingYear`, que no está confirmado. */
export const claimedExperience = { es: 'más de 25 años', en: 'over 25 years' };

/** Enlace WhatsApp con mensaje opcional. */
export const wa = (msg = 'Hola, quiero cotizar una mudanza con PWE.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

/* Formulario de leads — webhook de n8n propio de PWE (mismo patrón que PIM).
   El flujo vive en "PWE - Lead Formulario Web" (ver pwe-lead-workflow.json en
   la raíz del monorepo). Importarlo en n8n antes de que el sitio salga a
   producción, o el formulario responderá 404. */
export const contactForm = {
  leadWebhook: 'https://n8n.aiwebstudio.co/webhook/pwe-lead',
  toEmail: 'info@panamaworldwideexpress.com',
};
