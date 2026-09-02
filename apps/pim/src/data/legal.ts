/* ============================================================================
   Páginas legales de PIM: Política de Privacidad y Términos de Servicio.

   REGLA: esto describe lo que el sitio HACE DE VERDAD, verificado contra el
   código, no una plantilla genérica. Si cambia el formulario o a dónde se
   envían los datos, hay que actualizar este archivo.

   Lo que se verificó al redactarlo (2026-09-02):
   - Campos que captura QuoteForm.astro: Nombre, email, Teléfono, Tipo de
     Mudanza, Fecha aproximada, Servicio de empaque, Origen, Destino, Detalles.
   - El lead se envía a DOS destinos: el webhook de n8n (n8n.aiwebstudio.co,
     infraestructura de Elemento Web, que genera el correo) y WazaCRM
     (wazacrm.com), ver `contactForm` y `crmForm` en site.ts.
   - El sitio NO tiene analítica, ni píxeles, ni cookies de terceros. Se
     comprobó por búsqueda de gtag/GTM/fbq/hotjar/clarity: cero resultados.

   ⚠️ PENDIENTE DE CONFIRMAR CON EL CLIENTE antes de considerarlo definitivo:
   - Plazo concreto de conservación. Aquí se usa la fórmula estándar ("mientras
     dure la relación y después lo que exija la ley") en vez de inventar un
     número de años.
   - Un abogado panameño debería revisarlo. Está redactado sobre la Ley 81 de
     2019 de Protección de Datos Personales, que es la que aplica.
   ========================================================================== */

import { site } from './site';

/* PIM no tiene un `content.ts` con el tipo compartido (eso es de PWE), así que
   el locale se declara aquí. */
type Locale = 'es' | 'en';

export interface LegalSection {
  t: string;
  /** Párrafos del cuerpo */
  p?: string[];
  /** Lista de puntos, si la sección la lleva */
  items?: string[];
}

export interface LegalDoc {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  updated: string;
  sections: LegalSection[];
}

/** Fecha de última revisión. Actualizar al tocar el contenido. */
const UPDATED = { es: '2 de septiembre de 2026', en: 'September 2, 2026' };

export const privacy: Record<Locale, LegalDoc> = {
  es: {
    metaTitle: 'Política de Privacidad | Panamá International Movers',
    metaDescription:
      'Qué datos recogemos en el formulario de cotización, para qué los usamos, con quién los compartimos y cómo puede ejercer sus derechos bajo la Ley 81 de 2019.',
    h1: 'Política de Privacidad',
    lead: 'Qué datos pedimos, para qué los usamos y qué puede exigirnos usted. Sin letra pequeña.',
    updated: UPDATED.es,
    sections: [
      {
        t: 'Quién es el responsable',
        p: [
          `${site.name}, con domicilio en ${site.address.street}, ${site.address.locality}, Panamá, es responsable del tratamiento de los datos personales que usted nos facilita a través de este sitio web.`,
          `Para cualquier asunto relacionado con sus datos puede escribirnos a ${site.email} o llamarnos al ${site.phones[0]}.`,
        ],
      },
      {
        t: 'Qué datos recogemos',
        p: [
          'Únicamente los que usted escribe en el formulario de cotización. No recogemos nada más, y no compramos bases de datos a terceros.',
        ],
        items: [
          'Nombre completo',
          'Correo electrónico',
          'Teléfono (el mismo que usa en WhatsApp, si así lo indica)',
          'Tipo de mudanza que necesita',
          'Fecha aproximada del traslado',
          'Si requiere servicio de empaque',
          'Origen y destino de la mudanza',
          'Los detalles que usted quiera añadir en el campo libre',
        ],
      },
      {
        t: 'Para qué los usamos',
        p: [
          'Para una sola cosa: preparar la cotización que usted nos pidió y contactarle para dársela, resolver sus dudas y coordinar el servicio si decide contratarlo.',
          'No usamos sus datos para publicidad de terceros y no le inscribimos en ningún boletín por el hecho de pedir una cotización.',
        ],
      },
      {
        t: 'Con quién los compartimos',
        p: [
          'No vendemos sus datos ni los cedemos a terceros para que le ofrezcan sus productos. Ahora bien, para que el formulario funcione y su solicitud no se pierda, sus datos pasan por dos proveedores que trabajan por encargo nuestro y solo para este fin:',
        ],
        items: [
          'Nuestro proveedor de automatización, que recibe el formulario y nos lo entrega por correo para que un coordinador lo atienda.',
          'Nuestro sistema de gestión comercial (CRM), donde queda registrada su solicitud para darle seguimiento y para que, si luego nos escribe por WhatsApp, no tengamos que volver a pedirle los mismos datos.',
        ],
      },
      {
        t: 'Este sitio no le rastrea',
        p: [
          'Este sitio web no usa Google Analytics, ni píxeles de redes sociales, ni herramientas de mapas de calor, ni cookies de publicidad. No hay perfilado ni seguimiento entre sitios. Lo único que ocurre es lo que usted ve: si llena el formulario, nos llega su solicitud.',
        ],
      },
      {
        t: 'Cuánto tiempo los conservamos',
        p: [
          'Conservamos su solicitud mientras gestionamos su cotización y mientras dure la relación comercial. Después, únicamente durante el plazo que nos exija la legislación panameña aplicable en materia contable y comercial.',
          'Si prefiere que borremos sus datos antes, puede pedírnoslo y lo hacemos, salvo que alguna obligación legal nos impida hacerlo.',
        ],
      },
      {
        t: 'Sus derechos',
        p: [
          'La Ley 81 de 26 de marzo de 2019 sobre Protección de Datos Personales le reconoce el derecho a acceder a sus datos, rectificarlos si están mal, cancelarlos, oponerse a que los tratemos y solicitar su portabilidad.',
          `Para ejercer cualquiera de ellos, escríbanos a ${site.email} indicando qué desea. Le responderemos en los plazos que marca la ley. Si considera que no le atendimos como corresponde, puede acudir a la Autoridad Nacional de Transparencia y Acceso a la Información (ANTAI).`,
        ],
      },
      {
        t: 'Seguridad',
        p: [
          'El sitio se sirve íntegramente por conexión cifrada (HTTPS) y el acceso a las solicitudes está limitado al personal que las necesita para atenderle. Ningún sistema es infalible, pero no guardamos en este sitio web información sensible: el formulario no pide números de documento, ni datos bancarios, ni de tarjeta.',
        ],
      },
      {
        t: 'Cambios en esta política',
        p: [
          'Si cambiamos la forma en que tratamos los datos, actualizaremos esta página y la fecha de revisión que aparece arriba.',
        ],
      },
    ],
  },
  en: {
    metaTitle: 'Privacy Policy | Panamá International Movers',
    metaDescription:
      'What data we collect through the quote form, what we use it for, who we share it with, and how to exercise your rights under Panama Law 81 of 2019.',
    h1: 'Privacy Policy',
    lead: 'What we ask for, what we use it for, and what you can demand from us. No fine print.',
    updated: UPDATED.en,
    sections: [
      {
        t: 'Who is responsible',
        p: [
          `${site.name}, located at ${site.address.street}, ${site.address.locality}, Panama, is responsible for processing the personal data you provide through this website.`,
          `For anything concerning your data, write to us at ${site.email} or call ${site.phones[0]}.`,
        ],
      },
      {
        t: 'What we collect',
        p: [
          'Only what you type into the quote form. Nothing else, and we do not buy contact lists from third parties.',
        ],
        items: [
          'Full name',
          'Email address',
          'Phone number (the one you use on WhatsApp, if you tell us so)',
          'The type of move you need',
          'Approximate moving date',
          'Whether you need packing services',
          'Origin and destination of the move',
          'Whatever you choose to add in the free-text field',
        ],
      },
      {
        t: 'What we use it for',
        p: [
          'One thing only: to prepare the quote you asked for, contact you with it, answer your questions, and coordinate the service if you decide to hire us.',
          'We do not use your data for third-party advertising, and asking for a quote does not sign you up to any newsletter.',
        ],
      },
      {
        t: 'Who we share it with',
        p: [
          'We do not sell your data and we do not hand it to third parties so they can pitch you. That said, for the form to work and your request not to get lost, your data passes through two providers that act on our instructions and only for this purpose:',
        ],
        items: [
          'Our automation provider, which receives the form and delivers it to us by email so a coordinator can act on it.',
          'Our customer management system (CRM), where your request is logged for follow-up so that if you later message us on WhatsApp we do not have to ask you for the same details again.',
        ],
      },
      {
        t: 'This site does not track you',
        p: [
          'This website uses no Google Analytics, no social media pixels, no heatmap tools, and no advertising cookies. There is no profiling and no cross-site tracking. What you see is all that happens: if you fill in the form, we receive your request.',
        ],
      },
      {
        t: 'How long we keep it',
        p: [
          'We keep your request while we handle your quote and for as long as the commercial relationship lasts. After that, only for the period required by applicable Panamanian accounting and commercial law.',
          'If you would rather we deleted it sooner, ask us and we will, unless a legal obligation prevents it.',
        ],
      },
      {
        t: 'Your rights',
        p: [
          'Panama Law 81 of March 26, 2019 on Personal Data Protection gives you the right to access your data, correct it if it is wrong, delete it, object to our processing it, and request its portability.',
          `To exercise any of these, write to ${site.email} telling us what you need. We will reply within the deadlines the law sets. If you feel we did not handle it properly, you may take it to Panama's National Authority for Transparency and Access to Information (ANTAI).`,
        ],
      },
      {
        t: 'Security',
        p: [
          'The site is served entirely over an encrypted connection (HTTPS) and access to requests is limited to the staff who need it to assist you. No system is infallible, but this website stores no sensitive information: the form asks for no ID numbers, no bank details, and no card data.',
        ],
      },
      {
        t: 'Changes to this policy',
        p: [
          'If we change how we handle data, we will update this page and the revision date shown above.',
        ],
      },
    ],
  },
};

export const terms: Record<Locale, LegalDoc> = {
  es: {
    metaTitle: 'Términos de Servicio | Panamá International Movers',
    metaDescription:
      'Condiciones de uso del sitio web de Panamá International Movers: alcance de la información publicada, validez de las cotizaciones y responsabilidades.',
    h1: 'Términos de Servicio',
    lead: 'Las condiciones de uso de este sitio y qué valor tiene lo que publicamos aquí.',
    updated: UPDATED.es,
    sections: [
      {
        t: 'De qué tratan estos términos',
        p: [
          `Estas condiciones regulan el uso del sitio web de ${site.name}. No son el contrato de su mudanza: ese es un documento aparte, específico para su traslado, que se firma cuando usted acepta una cotización.`,
        ],
      },
      {
        t: 'La información de este sitio es orientativa',
        p: [
          'Explicamos cómo funciona una mudanza internacional para que usted pueda decidir con criterio. Ahora bien, cada traslado es distinto y las reglas cambian.',
          'Los tiempos de tránsito que mencionamos son estimados del sector, no plazos garantizados: dependen de la naviera o aerolínea, de la ruta y de la aduana de destino. Los requisitos aduaneros los fija cada país y pueden cambiar sin previo aviso. Nada de lo publicado aquí es asesoría legal, aduanera ni migratoria.',
          'Lo que sí es firme es lo que aparezca por escrito en su cotización.',
        ],
      },
      {
        t: 'Las cotizaciones',
        p: [
          'Solicitar una cotización es gratuito y no le obliga a nada. Una cotización es válida por el plazo que se indique en ella y se basa en la información que usted nos dio y, cuando corresponde, en la inspección del volumen.',
          'Si el volumen real difiere de lo estimado, o si aparecen condiciones que no se conocían al cotizar (accesos difíciles, permisos de edificio, artículos que requieren manejo especial), el precio puede ajustarse. Cuando eso ocurre se lo comunicamos antes de ejecutar el servicio, no en la factura.',
        ],
      },
      {
        t: 'Uso del sitio',
        p: [
          'Puede usar este sitio para informarse y para pedirnos una cotización. Le pedimos que no lo utilice para enviar solicitudes falsas o masivas, ni para intentar acceder a partes no públicas, ni para extraer su contenido de forma automatizada con fines comerciales.',
        ],
      },
      {
        t: 'Contenido y marcas',
        p: [
          'Los textos, el diseño, las guías y los materiales de este sitio son propiedad de la empresa y están protegidos por la legislación aplicable. Puede citarlos indicando la fuente y enlazando a la página original; no puede reproducirlos íntegramente ni republicarlos como propios.',
        ],
      },
      {
        t: 'Enlaces a otros sitios',
        p: [
          'Cuando enlazamos a normativas, autoridades u otras fuentes, lo hacemos para que usted pueda verificar la información en su origen. No controlamos esos sitios ni respondemos por su contenido o su disponibilidad.',
        ],
      },
      {
        t: 'Responsabilidad',
        p: [
          'Procuramos que la información esté correcta y al día, pero no garantizamos que esté libre de errores ni que el sitio esté disponible sin interrupciones. La responsabilidad sobre el servicio de mudanza contratado se rige por el contrato y por las coberturas de seguro que se acuerden en él.',
        ],
      },
      {
        t: 'Ley aplicable',
        p: [
          'Estas condiciones se rigen por las leyes de la República de Panamá.',
        ],
      },
      {
        t: 'Contacto',
        p: [
          `Si algo de esto no le queda claro, pregúntenos: ${site.email} · ${site.phones[0]}.`,
        ],
      },
    ],
  },
  en: {
    metaTitle: 'Terms of Service | Panamá International Movers',
    metaDescription:
      'Terms of use for the Panamá International Movers website: scope of the information published, validity of quotes, and responsibilities.',
    h1: 'Terms of Service',
    lead: 'The terms for using this site, and what weight the things we publish here carry.',
    updated: UPDATED.en,
    sections: [
      {
        t: 'What these terms cover',
        p: [
          `These terms govern the use of the ${site.name} website. They are not your moving contract: that is a separate document, specific to your move, signed when you accept a quote.`,
        ],
      },
      {
        t: 'The information here is guidance',
        p: [
          'We explain how an international move works so you can make informed decisions. That said, every move is different and the rules change.',
          'The transit times we mention are industry estimates, not guaranteed deadlines: they depend on the carrier, the route, and customs at destination. Customs requirements are set by each country and can change without notice. Nothing published here is legal, customs, or immigration advice.',
          'What is firm is whatever appears in writing in your quote.',
        ],
      },
      {
        t: 'Quotes',
        p: [
          'Requesting a quote is free and commits you to nothing. A quote is valid for the period stated on it and is based on the information you gave us and, where applicable, on the volume survey.',
          'If the actual volume differs from the estimate, or conditions appear that were not known at quoting time (difficult access, building permits, items needing special handling), the price may be adjusted. When that happens we tell you before performing the service, not on the invoice.',
        ],
      },
      {
        t: 'Using the site',
        p: [
          'You may use this site to inform yourself and to request a quote. Please do not use it to send false or bulk requests, to attempt access to non-public areas, or to scrape its content automatically for commercial purposes.',
        ],
      },
      {
        t: 'Content and trademarks',
        p: [
          'The text, design, guides, and materials on this site belong to the company and are protected by applicable law. You may quote them with attribution and a link to the original page; you may not reproduce them in full or republish them as your own.',
        ],
      },
      {
        t: 'Links to other sites',
        p: [
          'When we link to regulations, authorities, or other sources, we do it so you can verify the information at source. We do not control those sites and are not responsible for their content or availability.',
        ],
      },
      {
        t: 'Liability',
        p: [
          'We work to keep the information correct and current, but we do not warrant that it is free of errors or that the site will be available without interruption. Liability for the contracted moving service is governed by the contract and by the insurance coverage agreed within it.',
        ],
      },
      {
        t: 'Governing law',
        p: ['These terms are governed by the laws of the Republic of Panama.'],
      },
      {
        t: 'Contact',
        p: [`If any of this is unclear, ask us: ${site.email} · ${site.phones[0]}.`],
      },
    ],
  },
};
