/* Datos del sitio PWE. ⚠️ NAP (teléfonos/dirección) son PLACEHOLDER —
   confirmar los datos reales de Panamá Worldwide Express antes de producción. */
export const site = {
  name: 'Panamá Worldwide Express',
  shortName: 'PWE',
  domain: 'https://panamaworldwideexpress.com',
  email: 'info@panamaworldwideexpress.com', // TBD confirmar
  phones: ['+507 300-0000', '+507 6000-0000'], // TBD confirmar
  whatsapp: '50760000000', // TBD confirmar
  address: {
    street: 'Ciudad de Panamá', // TBD dirección exacta
    locality: 'Ciudad de Panamá',
    country: 'PA',
  },
  foundingYear: 2008, // TBD confirmar
  socials: { facebook: '#', instagram: '#', linkedin: '#' },
};

export const yearsInBusiness = new Date('2026-01-01').getFullYear() - site.foundingYear;

/** Enlace WhatsApp con mensaje opcional. */
export const wa = (msg = 'Hola, quiero cotizar una mudanza con PWE.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

/* Formulario de leads — se conectará a un webhook de n8n propio de PWE
   (mismo patrón que PIM). Pendiente de montar. */
export const contactForm = {
  leadWebhook: '', // TBD: https://n8n.aiwebstudio.co/webhook/pwe-lead
  toEmail: 'info@panamaworldwideexpress.com',
};
