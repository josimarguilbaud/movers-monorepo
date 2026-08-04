/* Fuente única de identidad y contacto de PIM.
   ⚠️ NAP y redes: confirmar/actualizar con datos reales del cliente. */

export const site = {
  name: 'Panamá International Movers S.A.',
  shortName: 'PIM',
  domain: 'https://panamainternationalmovers.com',
  email: 'info@panamainternationalmovers.com',
  phones: ['+507 399-7599', '+507 6672-2651'],
  whatsapp: '50766722651',
  address: {
    street: 'Vía Transístmica, Edificio Mil, Piso 2, Oficina 219',
    locality: 'Ciudad de Panamá',
    country: 'PA',
  },
  foundingYear: 1990,
  // ⚠️ Reemplazar '#' por las URLs reales de redes.
  socials: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
  },
} as const;

export const yearsInBusiness = new Date().getFullYear() - site.foundingYear;

export const wa = (text = 'Hola, quiero cotizar una mudanza con PIM.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

/* Formulario de contacto — Web3Forms envía el lead por email SIN backend.
   Paso a producción:
   1) Crea una access key gratis en https://web3forms.com apuntando a
      info@panamainternationalmovers.com.
   2) Pégala en `web3formsKey`. Listo, el formulario queda funcional.
   Para el correo con diseño de marca: usa la plantilla HTML personalizada
   de Web3Forms (plan Pro) o enruta por n8n/ChatMantis. */
export const contactForm = {
  web3formsKey: '', // ⚠️ pega aquí tu Web3Forms access key
  toEmail: 'info@panamainternationalmovers.com',
};
