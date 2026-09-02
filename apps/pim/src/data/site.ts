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
  /* Pega aquí la URL real de cada red y el icono aparece solo en el header y el
     footer. Lo que quede en blanco no se renderiza: antes estaban en '#' y eso
     eran seis enlaces muertos en cada una de las ~147 páginas del sitio. */
  socials: {
    facebook: '',
    instagram: '',
    linkedin: '',
  },
} as const;

/** Solo las redes que tienen una URL real, listas para pintar. */
export const socialLinks = (
  [
    { key: 'facebook', label: 'Facebook', icon: 'fa6-brands:facebook-f', href: site.socials.facebook },
    { key: 'instagram', label: 'Instagram', icon: 'fa6-brands:instagram', href: site.socials.instagram },
    { key: 'linkedin', label: 'LinkedIn', icon: 'fa6-brands:linkedin-in', href: site.socials.linkedin },
  ] as const
).filter((s) => s.href.length > 0);

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
  // El formulario envía el lead a este webhook de n8n → correo con diseño de
  // marca (SMTP) + listo para CRM/WhatsApp. Ver flujo "PIM - Lead Formulario Web".
  leadWebhook: 'https://n8n.aiwebstudio.co/webhook/pim-lead',
  toEmail: 'info@panamainternationalmovers.com',
};

/* El MISMO lead, además, al CRM (WazaCRM). No reemplaza al webhook de n8n: René
   sigue recibiendo su correo con diseño exactamente igual que hoy.

   Para qué sirve: sin esto, quien cotiza en la web y después escribe por WhatsApp
   llega como un desconocido y el bot le vuelve a pedir origen, destino y fecha —
   los que acaba de escribir. Con esto, el bot ya sabe qué puso y solo pide lo que
   falte.

   Los dos valores salen de /admin/clientes/<id> en WazaCRM, sección
   "🧩 Formularios de su sitio web", y se ponen como variables de entorno en
   Coolify (Netcup), en la app de PIM. Mientras falte cualquiera de las dos esto
   no hace nada: el formulario sigue funcionando igual, solo que el CRM no se
   entera.

   Por qué en variables y no aquí escritas: este repositorio es PÚBLICO, y los
   rastreadores automáticos recogen credenciales de repos públicos. El `secret`
   igual le llega al navegador —la petición la hace la página, no el servidor,
   así que es inevitable y por eso no es una contraseña sino la llave de ESTE
   sitio— pero no hace falta además dejarlo indexado en GitHub. El endpoint la
   valida junto al clientId y tiene límite de envíos por minuto. */
export const crmForm = {
  endpoint: 'https://wazacrm.com/api/webhooks/forms',
  clientId: import.meta.env.PUBLIC_WAZACRM_CLIENT_ID ?? '',
  secret: import.meta.env.PUBLIC_WAZACRM_SECRET ?? '',
  /* Este texto es literalmente lo que el bot le dirá a la persona
     ("ya llenó el formulario …"), así que se escribe como se lee. */
  formName: 'Cotización de mudanza',
};
