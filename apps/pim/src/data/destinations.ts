/* =============================================================
   DESTINOS — "Mudanzas de Panamá a [País]" (data-driven).
   Contenido evergreen y original. Los datos que deben ser reales
   por país —costo, tiempo de tránsito, impuestos exactos— van en
   `corridor` marcados como "Por confirmar": NO se inventan.
   Reemplazar con la información real de la operación de PIM.
   Imágenes: placeholders de Unsplash.
   ============================================================= */

export const DIMG = {
  port: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2000&auto=format&fit=crop',
  plane: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop',
  containers: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2000&auto=format&fit=crop',
  boxes: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=2000&auto=format&fit=crop',
};

const TBD = 'Por confirmar — consúltenos para el dato actualizado de este corredor.';

export interface Region {
  id: string;
  title: string;
  blurb: string;
}

export interface Destination {
  id: string;
  regionId: string;
  country: string;
  slug: string;
  flag: string;
  metaTitle: string;
  metaDescription: string;
  heroTagline: string;
  heroImage: string;
  intro: string[];
  sections: { heading: string; body: string[]; image?: string }[];
  corridor: { transitTime: string; cost: string; customs: string; taxes: string };
  faqs: { q: string; a: string }[];
  related: string[];
}

export const regions: Region[] = [
  { id: 'europa', title: 'Mudanzas a Europa', blurb: 'España, Reino Unido, Alemania, Italia y más. Corredores marítimos y aéreos con gestión aduanera completa.' },
  { id: 'america', title: 'Mudanzas a América', blurb: 'Estados Unidos, Canadá, México y toda Sudamérica. El corredor más activo desde Panamá.' },
  { id: 'asia-oceania', title: 'Mudanzas a Asia y Oceanía', blurb: 'Australia, Nueva Zelanda, Japón, China y Medio Oriente. Destinos exigentes, manejados por expertos.' },
];

export const regionById = (id: string) => regions.find((r) => r.id === id);

/* --------- Utilidad para armar el cuerpo evergreen común --------- */

export const destinations: Destination[] = [
  {
    id: 'espana',
    regionId: 'europa',
    country: 'España',
    slug: 'mudanzas-de-panama-a-espana',
    flag: '🇪🇸',
    metaTitle: 'Mudanzas de Panamá a España | Marítimas y Aéreas | PIM',
    metaDescription:
      'Mudanzas internacionales de Panamá a España (Madrid, Barcelona, Valencia): contenedor marítimo o envío aéreo, gestión aduanera y entrega puerta a puerta. Cotiza con PIM.',
    heroTagline: 'De Panamá a Madrid, Barcelona o Valencia, con todo resuelto.',
    heroImage: DIMG.port,
    intro: [
      'España es uno de los destinos más frecuentes para quienes se mudan desde Panamá, por sus lazos culturales, idioma y comunidad. Ya sea que se traslade a Madrid, Barcelona, Valencia o cualquier otra ciudad, en Panamá International Movers coordinamos su mudanza puerta a puerta con la vía que mejor se ajuste a su volumen y sus tiempos.',
      'La mayoría de las mudanzas a España se realizan por vía marítima en contenedor —exclusivo o compartido—, mientras que la vía aérea se reserva para envíos urgentes o de poco volumen.',
    ],
    sections: [
      {
        heading: 'Cómo trasladamos su hogar a España',
        body: [
          'Comenzamos con una inspección para calcular su volumen y recomendarle contenedor exclusivo (FCL), compartido (LCL) o envío aéreo. Empacamos con materiales de exportación, gestionamos el flete y la documentación, y coordinamos con nuestra red de agentes en España la desaduanización y la entrega final.',
          'Con el servicio puerta a puerta, usted no gestiona nada con puertos ni aduanas: su coordinador responde por toda la cadena hasta su nuevo domicilio.',
        ],
        image: DIMG.containers,
      },
      {
        heading: 'Aduana y menaje de casa',
        body: [
          'España contempla beneficios para la importación de menaje de casa usado por cambio de residencia, sujetos a condiciones y documentación específicas (por ejemplo, acreditar el traslado de residencia). Le orientamos sobre los requisitos vigentes para que aproveche las exenciones aplicables y evite pagos innecesarios.',
        ],
      },
      {
        heading: 'Por qué tantos eligen España',
        body: [
          'España es uno de los destinos favoritos de quienes salen de Panamá, y no es casualidad: el idioma común, los profundos lazos históricos y culturales, una comunidad latinoamericana establecida, la calidad de vida mediterránea y su papel como puerta de entrada a Europa la convierten en una opción natural. Ciudades como Madrid, Barcelona y Valencia ofrecen desde oportunidades profesionales hasta un ritmo de vida más pausado.',
          'Sea por trabajo, estudios, reunificación familiar o retiro, mover su hogar a España es un paso ilusionante que merece una logística a su altura.',
        ],
        image: DIMG.port,
      },
      {
        heading: 'Consejos para su mudanza a España',
        body: [
          'Planifique con tiempo para aprovechar las exenciones de menaje por cambio de residencia, que exigen documentación específica. Tenga en cuenta las diferencias de voltaje y enchufes con algunos electrodomésticos, y considere el clima de su ciudad de destino al decidir qué llevar.',
          'Nuestro coordinador le acompaña en todo el proceso, incluida la coordinación con agentes en España para una entrega y desaduanización sin contratiempos.',
        ],
      },
    ],
    corridor: {
      transitTime: TBD,
      cost: TBD,
      customs: 'Posibles beneficios para menaje usado por cambio de residencia (con condiciones). Verificar requisitos vigentes antes de mudarse.',
      taxes: TBD,
    },
    faqs: [
      { q: '¿Cuánto tarda una mudanza de Panamá a España?', a: 'El tiempo total combina el tránsito marítimo con los procesos de origen y destino (empaque, aduanas y entrega). Le confirmamos el estimado exacto de este corredor en su cotización.' },
      { q: '¿Puedo llevar mi menaje sin pagar impuestos?', a: 'España permite exenciones para menaje usado por cambio de residencia bajo ciertas condiciones. Revisamos su caso y la documentación necesaria para aplicarlas.' },
    ],
    related: ['reino-unido', 'alemania', 'italia'],
  },
  {
    id: 'estados-unidos',
    regionId: 'america',
    country: 'Estados Unidos',
    slug: 'mudanzas-de-panama-a-estados-unidos',
    flag: '🇺🇸',
    metaTitle: 'Mudanzas de Panamá a Estados Unidos (Miami, NY) | PIM',
    metaDescription:
      'Mudanzas de Panamá a Estados Unidos: Miami, Nueva York, California, Texas. Contenedor marítimo o aéreo, aduanas y entrega puerta a puerta. Cotiza con PIM Panamá.',
    heroTagline: 'El corredor más activo: de Panamá a Miami, Nueva York, California o Texas.',
    heroImage: DIMG.port,
    intro: [
      'Estados Unidos es, junto con España, uno de los corredores más transitados desde Panamá, por su cercanía, conexiones marítimas frecuentes y la gran comunidad de vínculos entre ambos países. Coordinamos mudanzas a Miami, Nueva York, California, Texas y cualquier otro estado, puerta a puerta.',
      'La proximidad y la alta frecuencia de navieras hacen de este uno de los corredores más eficientes que operamos.',
    ],
    sections: [
      {
        heading: 'Un corredor ágil y frecuente',
        body: [
          'Gracias a la cercanía y a las conexiones marítimas regulares, las mudanzas de Panamá a EE. UU. suelen tener buenas frecuencias de salida. Le asesoramos entre contenedor exclusivo, compartido o vía aérea según su volumen y urgencia.',
          'Nuestra red de agentes en las principales ciudades estadounidenses gestiona la desaduanización y la entrega final en su nuevo hogar.',
        ],
        image: DIMG.containers,
      },
      {
        heading: 'Aduana de Estados Unidos',
        body: [
          'La importación de menaje de casa a EE. UU. exige documentación específica y el cumplimiento de las normas de la CBP (Customs and Border Protection). Ciertos artículos están restringidos. Le orientamos sobre los requisitos y la documentación para un despacho fluido.',
        ],
      },
      {
        heading: 'El corredor más transitado de la región',
        body: [
          'Estados Unidos concentra una parte enorme de las mudanzas internacionales desde Panamá. La cercanía geográfica, la altísima frecuencia de conexiones marítimas y aéreas, y los vínculos familiares, profesionales y de estudios entre ambos países hacen de este uno de los corredores más eficientes y económicos que operamos.',
          'Ya sea a Miami —el destino más popular—, Nueva York, Houston, Los Ángeles o cualquier otro estado, contamos con la experiencia y la red de agentes para entregar en su puerta.',
        ],
        image: DIMG.containers,
      },
      {
        heading: 'Consejos para su mudanza a Estados Unidos',
        body: [
          'Familiarícese con las restricciones de la CBP: ciertos alimentos, productos vegetales y artículos están prohibidos o regulados. Si piensa enviar un vehículo, tenga presente que EE. UU. aplica normas estrictas de importación (EPA y DOT) que no todos los autos cumplen.',
          'Como el corredor es tan activo, con buena planificación es posible optimizar tiempos y costos. Le asesoramos sobre la mejor vía y ventana para su traslado.',
        ],
      },
    ],
    corridor: {
      transitTime: TBD,
      cost: TBD,
      customs: 'Importación regulada por CBP; documentación de menaje y artículos restringidos a verificar. Consultar requisitos vigentes.',
      taxes: TBD,
    },
    faqs: [
      { q: '¿A qué ciudades de EE. UU. llegan?', a: 'Coordinamos a las principales ciudades y puertos —Miami, Nueva York, Houston, Los Ángeles y más— con entrega final puerta a puerta a través de nuestra red de agentes.' },
      { q: '¿Puedo enviar mi auto a Estados Unidos?', a: 'El envío de vehículos a EE. UU. está sujeto a normas específicas de importación (EPA, DOT). Evaluamos la viabilidad de su caso antes de proceder.' },
    ],
    related: ['canada', 'mexico', 'espana'],
  },
  {
    id: 'canada',
    regionId: 'america',
    country: 'Canadá',
    slug: 'mudanzas-de-panama-a-canada',
    flag: '🇨🇦',
    metaTitle: 'Mudanzas de Panamá a Canadá (Toronto, Vancouver) | PIM',
    metaDescription:
      'Mudanzas de Panamá a Canadá: Toronto, Vancouver, Montreal. Contenedor marítimo o aéreo con gestión aduanera y entrega puerta a puerta. Cotiza con PIM Panamá.',
    heroTagline: 'De Panamá a Toronto, Vancouver o Montreal, sin complicaciones.',
    heroImage: DIMG.port,
    intro: [
      'Canadá atrae cada año a nuevos residentes por su calidad de vida y oportunidades. Coordinamos mudanzas desde Panamá a Toronto, Vancouver, Montreal y otras ciudades, principalmente por vía marítima en contenedor, con la opción aérea para envíos urgentes.',
      'Nuestro equipo se encarga del empaque, la logística internacional y la coordinación con agentes locales para la entrega en destino.',
    ],
    sections: [
      {
        heading: 'Su mudanza a Canadá, paso a paso',
        body: [
          'Tras la inspección de volumen, le recomendamos la vía óptima y preparamos su menaje con embalaje de exportación e inventario. Gestionamos el flete, la documentación y la desaduanización con nuestra red canadiense.',
          'El servicio puerta a puerta entrega, desembala lo básico y retira el material en su nuevo hogar.',
        ],
        image: DIMG.containers,
      },
      {
        heading: 'Aduana canadiense (CBSA)',
        body: [
          'La importación de efectos personales a Canadá se gestiona ante la CBSA (Canada Border Services Agency) y suele requerir un listado detallado de bienes (a menudo el formulario de goods to follow). Le orientamos sobre la documentación para un ingreso ordenado.',
        ],
      },
      {
        heading: 'Canadá: calidad de vida que atrae',
        body: [
          'Canadá se ha consolidado como uno de los destinos más deseados para emigrar, gracias a su calidad de vida, seguridad, sistema educativo y oportunidades laborales. Toronto, Vancouver y Montreal reciben cada año a nuevos residentes de todo el mundo, incluidos muchos que llegan desde Panamá.',
          'Trasladar su hogar a Canadá es dar el primer paso hacia esa nueva vida, y lo acompañamos para que ese paso sea firme y sin complicaciones logísticas.',
        ],
        image: DIMG.port,
      },
      {
        heading: 'Consejos para su mudanza a Canadá',
        body: [
          'Prepare con cuidado el listado detallado de bienes que exige la CBSA, incluido el formulario de "goods to follow" para lo que llegará después. Considere el clima: si se muda en invierno, planifique tener a mano ropa y artículos de temporada, ya que el contenedor puede tardar semanas.',
          'Nuestro equipo le ayuda a preparar la documentación correctamente y coordina con agentes canadienses para un despacho e ingreso sin sobresaltos.',
        ],
      },
    ],
    corridor: {
      transitTime: TBD,
      cost: TBD,
      customs: 'Importación gestionada ante la CBSA; suele requerir listado detallado de bienes. Verificar requisitos vigentes.',
      taxes: TBD,
    },
    faqs: [
      { q: '¿Qué documentación pide la aduana de Canadá?', a: 'Generalmente un listado detallado de los bienes que ingresan y de los que llegarán después (goods to follow), además de la documentación de menaje. Le ayudamos a prepararla correctamente.' },
      { q: '¿Cuál es la mejor vía a Canadá?', a: 'Para un menaje completo, el contenedor marítimo es lo más conveniente. Para envíos urgentes o pequeños, la vía aérea. Lo definimos según su volumen y tiempos.' },
    ],
    related: ['estados-unidos', 'mexico', 'reino-unido'],
  },
  {
    id: 'mexico',
    regionId: 'america',
    country: 'México',
    slug: 'mudanzas-de-panama-a-mexico',
    flag: '🇲🇽',
    metaTitle: 'Mudanzas de Panamá a México | Marítimas y Aéreas | PIM',
    metaDescription:
      'Mudanzas de Panamá a México (CDMX, Guadalajara, Monterrey): contenedor marítimo o aéreo, aduanas y entrega puerta a puerta. Cotiza con PIM Panamá.',
    heroTagline: 'De Panamá a Ciudad de México, Guadalajara o Monterrey.',
    heroImage: DIMG.port,
    intro: [
      'México es un destino habitual dentro del corredor latinoamericano, con fuertes lazos comerciales y culturales con Panamá. Coordinamos mudanzas a Ciudad de México, Guadalajara, Monterrey y otras ciudades por vía marítima o aérea.',
      'Nos ocupamos de todo el proceso —empaque, flete, aduana y entrega— para que su traslado sea ordenado y sin sorpresas.',
    ],
    sections: [
      {
        heading: 'Cómo lo hacemos',
        body: [
          'Calculamos su volumen, recomendamos la vía adecuada y preparamos su menaje con embalaje de exportación. Gestionamos la documentación y coordinamos con agentes en México la desaduanización y la última milla.',
        ],
        image: DIMG.containers,
      },
      {
        heading: 'Aduana mexicana',
        body: [
          'La importación de menaje de casa a México tiene requisitos y, en ciertos casos, beneficios para el menaje usado de quienes trasladan su residencia. Le informamos sobre la documentación y los pasos aplicables a su situación.',
        ],
      },
      {
        heading: 'México, un destino cercano y familiar',
        body: [
          'México combina cercanía cultural, una economía dinámica y ciudades con gran calidad de vida como Ciudad de México, Guadalajara y Monterrey. Los fuertes lazos comerciales y humanos con Panamá hacen de este un corredor habitual, tanto para profesionales como para familias.',
          'Mudarse a México desde Panamá es un cambio a la vez ambicioso y familiar, y nuestra logística se encarga de que la transición del hogar sea la parte más sencilla.',
        ],
        image: DIMG.containers,
      },
      {
        heading: 'Consejos para su mudanza a México',
        body: [
          'Infórmese sobre el tratamiento del menaje de casa usado, que en ciertos supuestos recibe beneficios para quienes cambian de residencia. Reúna la documentación con antelación para evitar demoras en el despacho.',
          'Le orientamos sobre los requisitos aplicables a su situación y coordinamos con nuestros agentes en México la desaduanización y la entrega en su nueva dirección.',
        ],
      },
    ],
    corridor: {
      transitTime: TBD,
      cost: TBD,
      customs: 'Requisitos de menaje de casa; posibles beneficios para menaje usado por cambio de residencia. Verificar condiciones vigentes.',
      taxes: TBD,
    },
    faqs: [
      { q: '¿Se puede importar menaje usado a México con beneficios?', a: 'En ciertos supuestos, el menaje de casa usado de quienes cambian de residencia recibe un tratamiento favorable. Revisamos su caso y los requisitos aplicables.' },
      { q: '¿Marítimo o aéreo a México?', a: 'Depende del volumen y la urgencia. El marítimo es lo más económico para casas completas; el aéreo, lo más rápido para envíos pequeños.' },
    ],
    related: ['estados-unidos', 'canada', 'espana'],
  },
  {
    id: 'reino-unido',
    regionId: 'europa',
    country: 'Reino Unido',
    slug: 'mudanzas-de-panama-a-reino-unido',
    flag: '🇬🇧',
    metaTitle: 'Mudanzas de Panamá a Reino Unido (Londres) | PIM',
    metaDescription:
      'Mudanzas de Panamá a Reino Unido (Londres y más): contenedor marítimo o aéreo con gestión aduanera post-Brexit y entrega puerta a puerta. Cotiza con PIM.',
    heroTagline: 'De Panamá a Londres y todo el Reino Unido, con aduanas post-Brexit resueltas.',
    heroImage: DIMG.port,
    intro: [
      'El Reino Unido sigue siendo un destino atractivo para estudios, trabajo y vida familiar. Coordinamos mudanzas desde Panamá a Londres y otras ciudades británicas por vía marítima o aérea, prestando especial atención a los trámites aduaneros, que cambiaron tras la salida del Reino Unido de la Unión Europea (Brexit).',
      'Nuestra experiencia con este corredor ayuda a evitar los errores de documentación que hoy causan retrasos frecuentes.',
    ],
    sections: [
      {
        heading: 'Atención especial a la aduana post-Brexit',
        body: [
          'Desde el Brexit, la importación de efectos personales al Reino Unido sigue procedimientos aduaneros propios, con formularios y requisitos específicos (como el proceso ToR, Transfer of Residence, para exención de menaje). Un error puede significar demoras o cargos inesperados; por eso gestionamos la documentación con cuidado.',
        ],
        image: DIMG.containers,
      },
      {
        heading: 'Su mudanza puerta a puerta',
        body: [
          'Empacamos, gestionamos el flete internacional y coordinamos con agentes en el Reino Unido la desaduanización y la entrega final en su domicilio, con el respaldo de un coordinador único.',
        ],
      },
      {
        heading: 'Londres y más allá',
        body: [
          'El Reino Unido sigue atrayendo a profesionales, estudiantes y familias por sus universidades de prestigio, su mercado laboral y su riqueza cultural. Londres es el gran imán, pero ciudades como Manchester, Edimburgo o Birmingham también reciben a nuevos residentes de todo el mundo.',
          'Mudarse al Reino Unido desde Panamá es un proyecto ilusionante que hoy exige, además, un manejo aduanero cuidadoso por los cambios post-Brexit. Ahí es donde nuestra experiencia marca la diferencia.',
        ],
        image: DIMG.port,
      },
      {
        heading: 'Consejos para su mudanza al Reino Unido',
        body: [
          'Infórmese sobre el proceso ToR (Transfer of Residence), que permite importar el menaje libre de impuestos al trasladar la residencia cumpliendo ciertas condiciones; tramitarlo bien es clave para no pagar de más. Los trámites post-Brexit exigen documentación precisa, así que la anticipación es su mejor aliada.',
          'Nuestro equipo gestiona el papeleo, incluido el ToR cuando aplica, para que su mudanza pase la aduana británica sin las demoras que hoy sufren muchos que lo hacen por su cuenta.',
        ],
      },
    ],
    corridor: {
      transitTime: TBD,
      cost: TBD,
      customs: 'Trámites post-Brexit; posible exención de menaje vía proceso ToR (Transfer of Residence). Verificar requisitos vigentes.',
      taxes: TBD,
    },
    faqs: [
      { q: '¿El Brexit complica mi mudanza al Reino Unido?', a: 'Añade trámites aduaneros específicos, pero con la documentación correcta el proceso es fluido. Gestionamos el papeleo, incluido el proceso ToR para la exención de menaje cuando aplica.' },
      { q: '¿Qué es el proceso ToR?', a: 'Transfer of Residence: el mecanismo británico que permite importar el menaje libre de impuestos al trasladar la residencia, cumpliendo ciertas condiciones. Le ayudamos a tramitarlo.' },
    ],
    related: ['espana', 'alemania', 'italia'],
  },
  {
    id: 'alemania',
    regionId: 'europa',
    country: 'Alemania',
    slug: 'mudanzas-de-panama-a-alemania',
    flag: '🇩🇪',
    metaTitle: 'Mudanzas de Panamá a Alemania (Berlín, Múnich) | PIM',
    metaDescription:
      'Mudanzas de Panamá a Alemania: Berlín, Múnich, Frankfurt. Contenedor marítimo o aéreo con gestión aduanera y entrega puerta a puerta. Cotiza con PIM Panamá.',
    heroTagline: 'De Panamá a Berlín, Múnich o Frankfurt, con precisión alemana.',
    heroImage: DIMG.port,
    intro: [
      'Alemania, motor económico de Europa, recibe a profesionales y familias de todo el mundo. Coordinamos mudanzas desde Panamá a Berlín, Múnich, Frankfurt y otras ciudades, por vía marítima o aérea, con la documentación en regla para un despacho ordenado.',
      'Como país de la Unión Europea, comparte el marco aduanero común, con requisitos específicos para la importación de menaje.',
    ],
    sections: [
      {
        heading: 'Su traslado a Alemania',
        body: [
          'Tras la inspección, recomendamos la vía adecuada y preparamos su menaje con embalaje de exportación e inventario detallado —muy valorado en los despachos alemanes—. Gestionamos flete, documentación y entrega con nuestra red local.',
        ],
        image: DIMG.containers,
      },
      {
        heading: 'Aduana y menaje',
        body: [
          'La importación de menaje usado por traslado de residencia a la Unión Europea puede acogerse a exenciones bajo condiciones (acreditar el cambio de residencia, listado valorado de bienes). Le orientamos sobre los requisitos vigentes.',
        ],
      },
      {
        heading: 'Alemania, motor de Europa',
        body: [
          'Alemania es uno de los grandes polos de atracción de talento del continente, con una economía sólida, empleo cualificado y ciudades de altísima calidad de vida como Berlín, Múnich y Frankfurt. Cada año, profesionales y familias de todo el mundo trasladan allí su hogar.',
          'Como país de la Unión Europea, comparte el marco aduanero común, lo que aporta previsibilidad al proceso siempre que la documentación —muy valorada por la precisión alemana— esté impecable.',
        ],
        image: DIMG.containers,
      },
      {
        heading: 'Consejos para su mudanza a Alemania',
        body: [
          'Prepare un inventario valorado y detallado: los despachos alemanes lo agradecen y agilizan. Aproveche, si aplica, las exenciones de menaje por cambio de residencia dentro de la UE, que exigen acreditar el traslado.',
          'Nuestro empaque profesional genera ese inventario como parte del servicio, y coordinamos con agentes locales para un ingreso ordenado y sin fricciones.',
        ],
      },
    ],
    corridor: {
      transitTime: TBD,
      cost: TBD,
      customs: 'Marco aduanero UE; posibles exenciones de menaje por traslado de residencia (con condiciones). Verificar requisitos vigentes.',
      taxes: TBD,
    },
    faqs: [
      { q: '¿Necesito un inventario detallado para Alemania?', a: 'Sí, un inventario valorado y detallado agiliza el despacho aduanero alemán. Nuestro empaque profesional lo genera como parte del servicio.' },
      { q: '¿Aplican exenciones de menaje en la UE?', a: 'El menaje usado por cambio de residencia puede acogerse a exenciones bajo ciertas condiciones. Revisamos su caso y la documentación necesaria.' },
    ],
    related: ['espana', 'italia', 'reino-unido'],
  },
  {
    id: 'italia',
    regionId: 'europa',
    country: 'Italia',
    slug: 'mudanzas-de-panama-a-italia',
    flag: '🇮🇹',
    metaTitle: 'Mudanzas de Panamá a Italia (Roma, Milán) | PIM',
    metaDescription:
      'Mudanzas de Panamá a Italia: Roma, Milán, Nápoles. Contenedor marítimo o aéreo con gestión aduanera y entrega puerta a puerta. Cotiza con PIM Panamá.',
    heroTagline: 'De Panamá a Roma, Milán o Nápoles, con cuidado de la dolce vita.',
    heroImage: DIMG.port,
    intro: [
      'Italia combina historia, cultura y calidad de vida, y es destino de reencuentros familiares y nuevas etapas. Coordinamos mudanzas desde Panamá a Roma, Milán, Nápoles y otras ciudades, por vía marítima o aérea, con gestión aduanera dentro del marco de la Unión Europea.',
      'Cuidamos especialmente el mobiliario y los objetos de valor, tan presentes en los hogares que se trasladan a Italia.',
    ],
    sections: [
      {
        heading: 'Cómo trasladamos su hogar a Italia',
        body: [
          'Calculamos volumen, recomendamos la vía y empacamos con materiales de exportación. Gestionamos el flete y la documentación, y coordinamos con agentes italianos la desaduanización y la entrega final.',
        ],
        image: DIMG.containers,
      },
      {
        heading: 'Aduana (marco UE)',
        body: [
          'Como miembro de la Unión Europea, Italia aplica el marco aduanero común: el menaje usado por cambio de residencia puede beneficiarse de exenciones bajo condiciones. Le informamos sobre los requisitos y la documentación aplicable.',
        ],
      },
      {
        heading: 'La dolce vita como destino',
        body: [
          'Italia combina historia, arte, gastronomía y una calidad de vida difícil de igualar. Roma, Milán, Florencia o Nápoles reciben a quienes buscan reencuentros familiares, oportunidades profesionales o simplemente una nueva etapa en uno de los países más bellos del mundo.',
          'Muchos hogares que se mudan a Italia llevan consigo muebles y objetos de valor sentimental; los tratamos con el cuidado que merecen para que lleguen intactos a su nuevo hogar.',
        ],
        image: DIMG.port,
      },
      {
        heading: 'Consejos para su mudanza a Italia',
        body: [
          'Aproveche las exenciones de menaje por cambio de residencia dentro de la UE, que requieren documentación específica. Si traslada antigüedades, obras de arte o muebles de valor —tan comunes en los hogares que van a Italia—, considere nuestro embalaje especializado y el seguro a valor declarado.',
          'Coordinamos con agentes italianos la desaduanización y la entrega, para que su llegada sea tan placentera como el destino.',
        ],
      },
    ],
    corridor: {
      transitTime: TBD,
      cost: TBD,
      customs: 'Marco aduanero UE; posibles exenciones de menaje por cambio de residencia (con condiciones). Verificar requisitos vigentes.',
      taxes: TBD,
    },
    faqs: [
      { q: '¿Cuál es la mejor vía de Panamá a Italia?', a: 'El contenedor marítimo para casas completas y la vía aérea para envíos urgentes o pequeños. Lo definimos según su volumen y tiempos.' },
      { q: '¿Puedo llevar muebles antiguos o de valor?', a: 'Sí. Ofrecemos embalaje especializado y crates a medida para antigüedades y obras de arte, con seguro a valor declarado.' },
    ],
    related: ['espana', 'alemania', 'reino-unido'],
  },
  {
    id: 'australia',
    regionId: 'asia-oceania',
    country: 'Australia',
    slug: 'mudanzas-de-panama-a-australia',
    flag: '🇦🇺',
    metaTitle: 'Mudanzas de Panamá a Australia (Sídney, Melbourne) | PIM',
    metaDescription:
      'Mudanzas de Panamá a Australia: Sídney, Melbourne, Brisbane. Contenedor marítimo con estrictos controles de bioseguridad. Gestión aduanera experta. Cotiza con PIM.',
    heroTagline: 'De Panamá a Sídney o Melbourne, con la bioseguridad australiana bajo control.',
    heroImage: DIMG.port,
    intro: [
      'Australia es un destino soñado por su calidad de vida, pero también uno de los más exigentes del mundo en materia de bioseguridad. Coordinamos mudanzas desde Panamá a Sídney, Melbourne, Brisbane y otras ciudades, principalmente por vía marítima, prestando máxima atención a los estrictos controles de cuarentena e inspección.',
      'La experiencia en este corredor es clave: un empaque o una declaración inadecuados pueden derivar en inspecciones, tratamientos o rechazos costosos.',
    ],
    sections: [
      {
        heading: 'Bioseguridad: el factor decisivo',
        body: [
          'Australia inspecciona rigurosamente los efectos personales para evitar el ingreso de plagas y contaminantes. Artículos con restos de tierra, madera sin tratar, alimentos, semillas o material vegetal pueden ser tratados, retenidos o destruidos. Preparamos y declaramos su menaje conforme a estas normas para minimizar riesgos.',
        ],
        image: DIMG.containers,
      },
      {
        heading: 'Su mudanza, gestionada por expertos',
        body: [
          'Empacamos con criterio de bioseguridad, documentamos correctamente y coordinamos con agentes australianos la inspección, la desaduanización y la entrega. Le explicamos qué conviene y qué no conviene enviar a este destino.',
        ],
      },
      {
        heading: 'Australia, el destino soñado (y exigente)',
        body: [
          'Australia figura año tras año entre los mejores países para vivir, por su calidad de vida, clima, seguridad y oportunidades. Sídney, Melbourne, Brisbane y Perth atraen a familias y profesionales de todo el mundo. Pero llegar allí con su hogar exige respetar uno de los regímenes de bioseguridad más estrictos del planeta.',
          'La experiencia en este corredor no es opcional: es la diferencia entre una llegada fluida y una inspección costosa con tratamientos o rechazos. Ahí es donde aportamos valor.',
        ],
        image: DIMG.containers,
      },
      {
        heading: 'Consejos para su mudanza a Australia',
        body: [
          'Evite por completo enviar artículos con tierra, madera sin tratar, semillas, plantas, alimentos o material orgánico: son el foco de la inspección australiana y pueden derivar en tratamientos, retenciones o destrucción. Limpie a fondo calzado, herramientas de jardín, bicicletas y equipo deportivo antes de empacarlos.',
          'Le entregamos una guía clara de qué conviene y qué no conviene enviar, y preparamos y declaramos su menaje conforme a las normas para minimizar riesgos en la inspección.',
        ],
      },
    ],
    corridor: {
      transitTime: TBD,
      cost: TBD,
      customs: 'Controles de bioseguridad muy estrictos (cuarentena): inspección de tierra, madera, alimentos y material vegetal. Declaración cuidadosa imprescindible.',
      taxes: TBD,
    },
    faqs: [
      { q: '¿Por qué Australia es tan estricta con las mudanzas?', a: 'Por su régimen de bioseguridad, que protege su ecosistema de plagas y enfermedades. Se inspeccionan los efectos personales y ciertos artículos pueden requerir tratamiento o ser rechazados. Preparamos su menaje conforme a estas reglas.' },
      { q: '¿Qué no debo enviar a Australia?', a: 'Evite artículos con tierra, madera sin tratar, semillas, plantas o alimentos. Le damos una guía de qué conviene enviar para pasar la inspección sin contratiempos.' },
    ],
    related: ['estados-unidos', 'reino-unido', 'canada'],
  },

  {
    id: 'francia', regionId: 'europa', country: 'Francia', slug: 'mudanzas-de-panama-a-francia', flag: '🇫🇷',
    metaTitle: 'Mudanzas de Panamá a Francia (París) | PIM',
    metaDescription: 'Mudanzas de Panamá a Francia: París, Lyon, Marsella. Contenedor marítimo o aéreo con gestión aduanera UE y entrega puerta a puerta. Cotiza con PIM Panamá.',
    heroTagline: 'De Panamá a París, Lyon o Marsella, con la elegancia de una mudanza bien hecha.',
    heroImage: DIMG.port,
    intro: [
      'Francia atrae por su cultura, su calidad de vida y su papel central en Europa. Coordinamos mudanzas desde Panamá a París, Lyon, Marsella y otras ciudades, por vía marítima o aérea, dentro del marco aduanero de la Unión Europea.',
    ],
    sections: [
      { heading: 'Su mudanza a Francia, paso a paso', body: ['Calculamos su volumen, recomendamos la vía adecuada y empacamos con materiales de exportación. Gestionamos el flete y la documentación, y coordinamos con agentes en Francia la desaduanización y la entrega final en su domicilio.'], image: DIMG.containers },
      { heading: 'Aduana (marco UE)', body: ['Como país de la Unión Europea, Francia aplica el marco aduanero común: el menaje usado por cambio de residencia puede acogerse a exenciones bajo condiciones. Le orientamos sobre los requisitos y la documentación aplicable.'] },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: 'Marco aduanero UE; posibles exenciones de menaje por cambio de residencia (con condiciones). Verificar requisitos vigentes.', taxes: TBD },
    faqs: [
      { q: '¿Cuál es la mejor vía de Panamá a Francia?', a: 'El contenedor marítimo para casas completas y la vía aérea para envíos urgentes o pequeños. Lo definimos según su volumen y tiempos.' },
      { q: '¿Aplican exenciones de menaje?', a: 'El menaje usado por cambio de residencia puede acogerse a exenciones dentro de la UE bajo ciertas condiciones. Revisamos su caso y la documentación.' },
    ],
    related: ['espana', 'italia', 'alemania'],
  },
  {
    id: 'portugal', regionId: 'europa', country: 'Portugal', slug: 'mudanzas-de-panama-a-portugal', flag: '🇵🇹',
    metaTitle: 'Mudanzas de Panamá a Portugal (Lisboa) | PIM',
    metaDescription: 'Mudanzas de Panamá a Portugal: Lisboa, Oporto. Contenedor marítimo o aéreo con gestión aduanera UE y entrega puerta a puerta. Cotiza con PIM Panamá.',
    heroTagline: 'De Panamá a Lisboa u Oporto, un destino cada vez más elegido.',
    heroImage: DIMG.port,
    intro: [
      'Portugal se ha convertido en uno de los destinos favoritos de expatriados por su clima, seguridad y calidad de vida. Coordinamos mudanzas desde Panamá a Lisboa, Oporto y otras ciudades, por vía marítima o aérea, con la gestión aduanera de la Unión Europea.',
    ],
    sections: [
      { heading: 'Cómo trasladamos su hogar a Portugal', body: ['Tras la inspección de volumen, recomendamos la vía óptima y preparamos su menaje con embalaje de exportación e inventario. Gestionamos flete, documentación y entrega con nuestra red local en Portugal.'], image: DIMG.containers },
      { heading: 'Aduana y menaje', body: ['Portugal, como miembro de la UE, permite exenciones para el menaje usado por cambio de residencia bajo condiciones específicas. Le informamos sobre los requisitos vigentes para que aproveche los beneficios aplicables.'] },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: 'Marco aduanero UE; posibles exenciones de menaje por cambio de residencia. Verificar requisitos vigentes.', taxes: TBD },
    faqs: [
      { q: '¿Por qué tantos eligen Portugal?', a: 'Por su clima, seguridad, costo de vida relativamente accesible y programas atractivos para residentes extranjeros. Es un destino en auge para expatriados.' },
      { q: '¿Cuánto tarda la mudanza?', a: 'El tiempo combina el tránsito con los procesos de origen y destino. Le confirmamos el estimado exacto de este corredor en la cotización.' },
    ],
    related: ['espana', 'francia', 'italia'],
  },
  {
    id: 'suiza', regionId: 'europa', country: 'Suiza', slug: 'mudanzas-de-panama-a-suiza', flag: '🇨🇭',
    metaTitle: 'Mudanzas de Panamá a Suiza (Zúrich, Ginebra) | PIM',
    metaDescription: 'Mudanzas de Panamá a Suiza: Zúrich, Ginebra, Basilea. Contenedor marítimo o aéreo con gestión aduanera y entrega puerta a puerta. Cotiza con PIM Panamá.',
    heroTagline: 'De Panamá a Zúrich o Ginebra, con precisión suiza.',
    heroImage: DIMG.port,
    intro: [
      'Suiza atrae a profesionales de alto nivel por su calidad de vida, seguridad y economía. Coordinamos mudanzas desde Panamá a Zúrich, Ginebra, Basilea y otras ciudades, por vía marítima o aérea. Al no ser miembro de la UE, Suiza tiene su propio régimen aduanero, que gestionamos con cuidado.',
    ],
    sections: [
      { heading: 'Su traslado a Suiza', body: ['Preparamos su menaje con embalaje de exportación e inventario detallado, y coordinamos el flete y la entrega con agentes locales. La precisión documental es especialmente importante en el despacho suizo.'], image: DIMG.containers },
      { heading: 'Aduana suiza (fuera de la UE)', body: ['A diferencia de sus vecinos, Suiza no pertenece a la Unión Europea y aplica su propia normativa aduanera, con posibilidad de importar menaje usado por cambio de residencia bajo condiciones. Le orientamos sobre los requisitos vigentes.'] },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: 'Régimen aduanero propio (fuera de la UE); posible exención de menaje por traslado de residencia. Verificar requisitos vigentes.', taxes: TBD },
    faqs: [
      { q: '¿Suiza tiene reglas distintas a la UE?', a: 'Sí. Al no ser miembro de la Unión Europea, Suiza aplica su propio régimen aduanero. Gestionamos la documentación específica que exige para el menaje de casa.' },
      { q: '¿Necesito un inventario detallado?', a: 'Sí, un inventario valorado y preciso agiliza el despacho suizo. Nuestro empaque profesional lo genera como parte del servicio.' },
    ],
    related: ['alemania', 'francia', 'italia'],
  },
  {
    id: 'paises-bajos', regionId: 'europa', country: 'Países Bajos', slug: 'mudanzas-de-panama-a-paises-bajos', flag: '🇳🇱',
    metaTitle: 'Mudanzas de Panamá a Países Bajos (Ámsterdam) | PIM',
    metaDescription: 'Mudanzas de Panamá a Países Bajos: Ámsterdam, Róterdam, La Haya. Contenedor marítimo o aéreo con aduana UE y entrega puerta a puerta. Cotiza con PIM.',
    heroTagline: 'De Panamá a Ámsterdam o Róterdam, aprovechando el gran puerto europeo.',
    heroImage: DIMG.port,
    intro: [
      'Países Bajos combina apertura internacional, calidad de vida y una ubicación estratégica: Róterdam es uno de los mayores puertos del mundo. Coordinamos mudanzas desde Panamá a Ámsterdam, Róterdam, La Haya y otras ciudades, por vía marítima o aérea.',
    ],
    sections: [
      { heading: 'Cómo lo hacemos', body: ['Calculamos su volumen, recomendamos la vía y empacamos con materiales de exportación. Gestionamos la documentación y coordinamos con agentes neerlandeses la desaduanización y la última milla.'], image: DIMG.containers },
      { heading: 'Aduana (marco UE)', body: ['Como miembro de la Unión Europea, Países Bajos aplica el marco aduanero común, con posibles exenciones para el menaje usado por cambio de residencia bajo condiciones. Le informamos sobre los requisitos aplicables.'] },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: 'Marco aduanero UE; posibles exenciones de menaje por cambio de residencia. Verificar requisitos vigentes.', taxes: TBD },
    faqs: [
      { q: '¿El puerto de Róterdam agiliza mi mudanza?', a: 'Róterdam es uno de los puertos más grandes y eficientes del mundo, con excelentes conexiones. Es una ventaja logística para las mudanzas hacia Países Bajos.' },
      { q: '¿Marítimo o aéreo?', a: 'El marítimo para casas completas; el aéreo para envíos pequeños o urgentes. Lo definimos según su volumen y tiempos.' },
    ],
    related: ['alemania', 'francia', 'reino-unido'],
  },
  {
    id: 'colombia', regionId: 'america', country: 'Colombia', slug: 'mudanzas-de-panama-a-colombia', flag: '🇨🇴',
    metaTitle: 'Mudanzas de Panamá a Colombia (Bogotá, Medellín) | PIM',
    metaDescription: 'Mudanzas de Panamá a Colombia: Bogotá, Medellín, Cali, Cartagena. Marítimo, aéreo o terrestre con aduana y entrega puerta a puerta. Cotiza con PIM Panamá.',
    heroTagline: 'De Panamá a Bogotá, Medellín o Cartagena, países vecinos y conectados.',
    heroImage: DIMG.port,
    intro: [
      'La cercanía y los fuertes lazos entre Panamá y Colombia hacen de este uno de los corredores más activos de la región. Coordinamos mudanzas a Bogotá, Medellín, Cali, Cartagena y otras ciudades, por vía marítima o aérea.',
    ],
    sections: [
      { heading: 'Un corredor cercano y frecuente', body: ['La proximidad facilita conexiones regulares y tiempos competitivos. Le asesoramos entre contenedor exclusivo, compartido o vía aérea según su volumen, y coordinamos con agentes en Colombia la desaduanización y la entrega.'], image: DIMG.containers },
      { heading: 'Aduana colombiana', body: ['La importación de menaje de casa a Colombia tiene requisitos y, en ciertos casos, beneficios para el menaje usado de quienes trasladan su residencia. Le informamos sobre la documentación aplicable a su situación.'] },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: 'Requisitos de menaje de casa; posibles beneficios para menaje usado por cambio de residencia. Verificar condiciones vigentes.', taxes: TBD },
    faqs: [
      { q: '¿A qué ciudades de Colombia llegan?', a: 'Coordinamos a las principales ciudades —Bogotá, Medellín, Cali, Cartagena, Barranquilla— con entrega final puerta a puerta a través de nuestra red.' },
      { q: '¿Cuál es la vía más conveniente?', a: 'Por la cercanía, tanto el marítimo como el aéreo son eficientes. El marítimo es más económico para casas completas; el aéreo, más rápido para envíos pequeños.' },
    ],
    related: ['mexico', 'ecuador', 'estados-unidos'],
  },
  {
    id: 'argentina', regionId: 'america', country: 'Argentina', slug: 'mudanzas-de-panama-a-argentina', flag: '🇦🇷',
    metaTitle: 'Mudanzas de Panamá a Argentina (Buenos Aires) | PIM',
    metaDescription: 'Mudanzas de Panamá a Argentina: Buenos Aires, Córdoba, Rosario. Contenedor marítimo o aéreo con aduana y entrega puerta a puerta. Cotiza con PIM Panamá.',
    heroTagline: 'De Panamá a Buenos Aires, Córdoba o Rosario, con logística confiable.',
    heroImage: DIMG.port,
    intro: [
      'Argentina, con su riqueza cultural y sus grandes ciudades, es un destino habitual dentro del corredor sudamericano. Coordinamos mudanzas desde Panamá a Buenos Aires, Córdoba, Rosario y otras ciudades, principalmente por vía marítima.',
    ],
    sections: [
      { heading: 'Cómo trasladamos su hogar a Argentina', body: ['Calculamos su volumen, empacamos con materiales de exportación y gestionamos el flete y la documentación. Coordinamos con agentes argentinos la desaduanización y la entrega final.'], image: DIMG.containers },
      { heading: 'Aduana argentina', body: ['La importación de menaje de casa a Argentina tiene requisitos específicos y, en ciertos casos, tratamiento para el menaje usado de quienes trasladan su residencia. Le orientamos sobre la documentación aplicable.'] },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: 'Requisitos de menaje de casa; posible tratamiento para menaje usado por cambio de residencia. Verificar condiciones vigentes.', taxes: TBD },
    faqs: [
      { q: '¿Cuánto tarda una mudanza a Argentina?', a: 'El tiempo combina el tránsito marítimo con los procesos de origen y destino. Le confirmamos el estimado exacto de este corredor en su cotización.' },
      { q: '¿Qué documentación necesito?', a: 'La importación de menaje exige documentación específica que preparamos por usted, incluida la que respalda el tratamiento del menaje usado cuando aplica.' },
    ],
    related: ['chile', 'colombia', 'peru'],
  },
  {
    id: 'chile', regionId: 'america', country: 'Chile', slug: 'mudanzas-de-panama-a-chile', flag: '🇨🇱',
    metaTitle: 'Mudanzas de Panamá a Chile (Santiago) | PIM',
    metaDescription: 'Mudanzas de Panamá a Chile: Santiago, Valparaíso, Concepción. Contenedor marítimo o aéreo con aduana y entrega puerta a puerta. Cotiza con PIM Panamá.',
    heroTagline: 'De Panamá a Santiago o Valparaíso, a lo largo del Pacífico.',
    heroImage: DIMG.port,
    intro: [
      'Chile destaca por su estabilidad y calidad de vida, y recibe a profesionales y familias de toda la región. Coordinamos mudanzas desde Panamá a Santiago, Valparaíso, Concepción y otras ciudades, por vía marítima o aérea.',
    ],
    sections: [
      { heading: 'Su mudanza a Chile', body: ['Preparamos su menaje con embalaje de exportación e inventario, gestionamos el flete y coordinamos con agentes chilenos la desaduanización y la entrega en su nueva dirección.'], image: DIMG.containers },
      { heading: 'Aduana chilena', body: ['La importación de menaje de casa a Chile tiene requisitos y, en ciertos supuestos, beneficios para el menaje usado de quienes trasladan su residencia. Le informamos sobre la documentación aplicable.'] },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: 'Requisitos de menaje de casa; posibles beneficios para menaje usado por cambio de residencia. Verificar condiciones vigentes.', taxes: TBD },
    faqs: [
      { q: '¿A qué puertos llega la carga en Chile?', a: 'Chile cuenta con puertos importantes en el Pacífico, como Valparaíso y San Antonio, con buena conexión hacia Santiago y el resto del país.' },
      { q: '¿Marítimo o aéreo a Chile?', a: 'El marítimo es lo más económico para casas completas; el aéreo, más rápido para envíos pequeños o urgentes.' },
    ],
    related: ['argentina', 'peru', 'colombia'],
  },
  {
    id: 'peru', regionId: 'america', country: 'Perú', slug: 'mudanzas-de-panama-a-peru', flag: '🇵🇪',
    metaTitle: 'Mudanzas de Panamá a Perú (Lima) | PIM',
    metaDescription: 'Mudanzas de Panamá a Perú: Lima, Arequipa, Cusco. Contenedor marítimo o aéreo con aduana y entrega puerta a puerta. Cotiza con PIM Panamá.',
    heroTagline: 'De Panamá a Lima y todo el Perú, con manejo experto.',
    heroImage: DIMG.port,
    intro: [
      'Perú, con Lima como gran polo y un país de enorme riqueza cultural, es un destino frecuente del corredor sudamericano. Coordinamos mudanzas desde Panamá a Lima, Arequipa, Cusco y otras ciudades, por vía marítima o aérea.',
    ],
    sections: [
      { heading: 'Cómo lo hacemos', body: ['Calculamos volumen, empacamos con materiales de exportación y gestionamos flete y documentación. Coordinamos con agentes peruanos la desaduanización y la entrega final.'], image: DIMG.containers },
      { heading: 'Aduana peruana', body: ['La importación de menaje de casa a Perú tiene requisitos específicos y, en ciertos casos, tratamiento para el menaje usado de quienes trasladan su residencia. Le orientamos sobre la documentación aplicable.'] },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: 'Requisitos de menaje de casa; posible tratamiento para menaje usado por cambio de residencia. Verificar condiciones vigentes.', taxes: TBD },
    faqs: [
      { q: '¿Llegan al interior del Perú?', a: 'Coordinamos la entrega a Lima y otras ciudades del país a través de nuestra red y el transporte de última milla.' },
      { q: '¿Cuánto tarda?', a: 'El tiempo combina el tránsito con los procesos de origen y destino; le confirmamos el estimado exacto en su cotización.' },
    ],
    related: ['chile', 'ecuador', 'colombia'],
  },
  {
    id: 'ecuador', regionId: 'america', country: 'Ecuador', slug: 'mudanzas-de-panama-a-ecuador', flag: '🇪🇨',
    metaTitle: 'Mudanzas de Panamá a Ecuador (Quito, Guayaquil) | PIM',
    metaDescription: 'Mudanzas de Panamá a Ecuador: Quito, Guayaquil, Cuenca. Contenedor marítimo o aéreo con aduana y entrega puerta a puerta. Cotiza con PIM Panamá.',
    heroTagline: 'De Panamá a Quito, Guayaquil o Cuenca, un destino cercano.',
    heroImage: DIMG.port,
    intro: [
      'Ecuador, cada vez más popular entre jubilados y expatriados por su costo de vida y clima, es un destino habitual del corredor. Coordinamos mudanzas desde Panamá a Quito, Guayaquil, Cuenca y otras ciudades, por vía marítima o aérea.',
    ],
    sections: [
      { heading: 'Su mudanza a Ecuador', body: ['Preparamos su menaje con embalaje de exportación e inventario, gestionamos el flete y coordinamos con agentes ecuatorianos la desaduanización y la entrega final.'], image: DIMG.containers },
      { heading: 'Aduana ecuatoriana', body: ['La importación de menaje de casa a Ecuador tiene requisitos y, en ciertos supuestos, beneficios para el menaje usado por cambio de residencia (relevantes para jubilados y nuevos residentes). Le informamos sobre lo aplicable a su caso.'] },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: 'Requisitos de menaje de casa; posibles beneficios para menaje usado por cambio de residencia. Verificar condiciones vigentes.', taxes: TBD },
    faqs: [
      { q: '¿Ecuador es buen destino para jubilados?', a: 'Es uno de los destinos de retiro más elegidos por su costo de vida y clima. Muchas de nuestras mudanzas a Ecuador son de nuevos residentes y jubilados.' },
      { q: '¿Qué vía conviene?', a: 'El marítimo es lo más económico para casas completas; el aéreo, más rápido para envíos pequeños. Lo definimos según su volumen y tiempos.' },
    ],
    related: ['colombia', 'peru', 'mexico'],
  },

  {
    id: 'nueva-zelanda', regionId: 'asia-oceania', country: 'Nueva Zelanda', slug: 'mudanzas-de-panama-a-nueva-zelanda', flag: '🇳🇿',
    metaTitle: 'Mudanzas de Panamá a Nueva Zelanda (Auckland) | PIM',
    metaDescription: 'Mudanzas de Panamá a Nueva Zelanda: Auckland, Wellington. Contenedor marítimo con estrictos controles de bioseguridad. Gestión aduanera experta. Cotiza con PIM.',
    heroTagline: 'De Panamá a Auckland o Wellington, con la bioseguridad bajo control.',
    heroImage: DIMG.port,
    intro: [
      'Nueva Zelanda ofrece una calidad de vida excepcional, pero comparte con Australia uno de los regímenes de bioseguridad más estrictos del mundo. Coordinamos mudanzas desde Panamá a Auckland, Wellington y otras ciudades, principalmente por vía marítima, con máxima atención a la inspección y la cuarentena.',
    ],
    sections: [
      { heading: 'Bioseguridad: el factor decisivo', body: ['Nueva Zelanda inspecciona rigurosamente los efectos personales para proteger su ecosistema. Artículos con tierra, madera sin tratar, alimentos o material vegetal pueden ser tratados, retenidos o rechazados. Preparamos y declaramos su menaje conforme a estas normas para minimizar riesgos.'], image: DIMG.containers },
      { heading: 'Gestionada por expertos', body: ['Empacamos con criterio de bioseguridad, documentamos correctamente y coordinamos con agentes neozelandeses la inspección, la desaduanización y la entrega. Le explicamos qué conviene y qué no conviene enviar.'] },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: 'Controles de bioseguridad muy estrictos (cuarentena): inspección de tierra, madera, alimentos y material vegetal. Declaración cuidadosa imprescindible.', taxes: TBD },
    faqs: [
      { q: '¿Es tan estricta como Australia?', a: 'Sí, Nueva Zelanda aplica controles de bioseguridad muy rigurosos. Preparamos su menaje conforme a estas reglas para evitar tratamientos o rechazos en la inspección.' },
      { q: '¿Qué no debo enviar?', a: 'Evite artículos con tierra, madera sin tratar, semillas, plantas o alimentos. Le damos una guía de qué conviene enviar para pasar la inspección sin contratiempos.' },
    ],
    related: ['australia', 'reino-unido', 'estados-unidos'],
  },
  {
    id: 'japon', regionId: 'asia-oceania', country: 'Japón', slug: 'mudanzas-de-panama-a-japon', flag: '🇯🇵',
    metaTitle: 'Mudanzas de Panamá a Japón (Tokio) | PIM',
    metaDescription: 'Mudanzas de Panamá a Japón: Tokio, Osaka, Yokohama. Contenedor marítimo o aéreo con gestión aduanera y entrega puerta a puerta. Cotiza con PIM Panamá.',
    heroTagline: 'De Panamá a Tokio u Osaka, al otro lado del mundo con precisión.',
    heroImage: DIMG.plane,
    intro: [
      'Japón, destino de profesionales y familias por su cultura y oportunidades, está entre los corredores más lejanos que operamos. Coordinamos mudanzas desde Panamá a Tokio, Osaka, Yokohama y otras ciudades, por vía marítima o aérea, con la meticulosidad que exige este destino.',
    ],
    sections: [
      { heading: 'Su mudanza a Japón', body: ['Preparamos su menaje con embalaje de exportación e inventario detallado, gestionamos el flete de largo recorrido y coordinamos con agentes japoneses la desaduanización y la entrega. Tenga en cuenta las dimensiones de las viviendas japonesas al decidir qué llevar.'], image: DIMG.containers },
      { heading: 'Aduana japonesa', body: ['La importación de efectos personales a Japón exige documentación específica y el cumplimiento de su normativa aduanera, con ciertos artículos restringidos. Le orientamos sobre los requisitos para un despacho ordenado.'] },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: 'Normativa aduanera propia; documentación de efectos personales y artículos restringidos a verificar. Consultar requisitos vigentes.', taxes: TBD },
    faqs: [
      { q: '¿Conviene llevar todos mis muebles a Japón?', a: 'Las viviendas japonesas suelen ser más compactas, por lo que conviene evaluar qué muebles caben y valen la pena mover. Le asesoramos en esa decisión.' },
      { q: '¿Cuánto tarda la mudanza?', a: 'Al ser un corredor lejano, el tránsito marítimo es más largo; el aéreo es más rápido para lo urgente. Le confirmamos el estimado exacto en su cotización.' },
    ],
    related: ['china', 'singapur', 'dubai'],
  },
  {
    id: 'china', regionId: 'asia-oceania', country: 'China', slug: 'mudanzas-de-panama-a-china', flag: '🇨🇳',
    metaTitle: 'Mudanzas de Panamá a China (Shanghái, Pekín) | PIM',
    metaDescription: 'Mudanzas de Panamá a China: Shanghái, Pekín, Cantón. Contenedor marítimo o aéreo con gestión aduanera y entrega puerta a puerta. Cotiza con PIM Panamá.',
    heroTagline: 'De Panamá a Shanghái o Pekín, con logística de largo alcance.',
    heroImage: DIMG.port,
    intro: [
      'China, motor económico global, recibe a profesionales y familias por trabajo y negocios. Coordinamos mudanzas desde Panamá a Shanghái, Pekín, Cantón y otras ciudades, por vía marítima o aérea, con la gestión que requiere un destino tan grande y regulado.',
    ],
    sections: [
      { heading: 'Cómo lo hacemos', body: ['Calculamos volumen, empacamos con materiales de exportación y gestionamos el flete de largo recorrido. Coordinamos con agentes en China la desaduanización y la entrega final en su ciudad de destino.'], image: DIMG.containers },
      { heading: 'Aduana china', body: ['La importación de efectos personales a China está regulada y exige documentación específica, con artículos restringidos que conviene conocer. Le orientamos sobre los requisitos para evitar demoras en el despacho.'] },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: 'Normativa aduanera regulada; documentación de efectos personales y artículos restringidos a verificar. Consultar requisitos vigentes.', taxes: TBD },
    faqs: [
      { q: '¿A qué ciudades de China llegan?', a: 'Coordinamos a las principales ciudades y puertos, como Shanghái, Pekín, Shenzhen y Cantón, con entrega final a través de nuestra red de agentes.' },
      { q: '¿Qué documentación necesito?', a: 'La importación exige documentación específica que preparamos por usted, y le informamos de los artículos restringidos según la normativa china.' },
    ],
    related: ['japon', 'singapur', 'dubai'],
  },
  {
    id: 'dubai', regionId: 'asia-oceania', country: 'Emiratos Árabes (Dubái)', slug: 'mudanzas-de-panama-a-dubai', flag: '🇦🇪',
    metaTitle: 'Mudanzas de Panamá a Dubái (Emiratos Árabes) | PIM',
    metaDescription: 'Mudanzas de Panamá a Dubái y Emiratos Árabes Unidos: contenedor marítimo o aéreo con gestión aduanera y entrega puerta a puerta. Cotiza con PIM Panamá.',
    heroTagline: 'De Panamá a Dubái, al corazón de negocios de Medio Oriente.',
    heroImage: DIMG.port,
    intro: [
      'Dubái y los Emiratos Árabes Unidos atraen a profesionales de todo el mundo por sus oportunidades de negocio y su calidad de vida. Coordinamos mudanzas desde Panamá a Dubái, Abu Dabi y otras ciudades, por vía marítima o aérea.',
    ],
    sections: [
      { heading: 'Su mudanza a los Emiratos', body: ['Preparamos su menaje con embalaje de exportación e inventario, gestionamos el flete y coordinamos con agentes en los Emiratos la desaduanización y la entrega. El manejo de la documentación es clave en este destino.'], image: DIMG.containers },
      { heading: 'Aduana de los EAU', body: ['La importación de efectos personales a los Emiratos exige documentación específica y el respeto de normas particulares sobre ciertos artículos (con restricciones culturales y regulatorias). Le orientamos con detalle para evitar inconvenientes.'] },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: 'Normativa aduanera propia con restricciones específicas sobre ciertos artículos. Verificar requisitos y artículos prohibidos vigentes.', taxes: TBD },
    faqs: [
      { q: '¿Hay artículos que no puedo llevar a Dubái?', a: 'Sí, los Emiratos tienen restricciones específicas sobre ciertos artículos por razones regulatorias y culturales. Le informamos con precisión qué se puede y qué no antes de mover su menaje.' },
      { q: '¿Marítimo o aéreo?', a: 'El marítimo es lo más económico para casas completas; el aéreo, más rápido para envíos pequeños o urgentes.' },
    ],
    related: ['singapur', 'china', 'japon'],
  },
  {
    id: 'singapur', regionId: 'asia-oceania', country: 'Singapur', slug: 'mudanzas-de-panama-a-singapur', flag: '🇸🇬',
    metaTitle: 'Mudanzas de Panamá a Singapur | PIM',
    metaDescription: 'Mudanzas de Panamá a Singapur: contenedor marítimo o aéreo con gestión aduanera y entrega puerta a puerta. Uno de los mayores hubs de Asia. Cotiza con PIM.',
    heroTagline: 'De Panamá a Singapur, hub por hub entre dos grandes centros logísticos.',
    heroImage: DIMG.port,
    intro: [
      'Singapur, uno de los mayores hubs financieros y logísticos de Asia, recibe a profesionales y familias de todo el mundo. Coordinamos mudanzas desde Panamá a Singapur por vía marítima o aérea, conectando dos de los grandes centros logísticos del planeta.',
    ],
    sections: [
      { heading: 'Hub a hub', body: ['Tanto Panamá como Singapur son nodos logísticos de primer nivel, lo que se traduce en buenas conexiones. Preparamos su menaje con embalaje de exportación, gestionamos el flete y coordinamos con agentes locales la desaduanización y la entrega.'], image: DIMG.containers },
      { heading: 'Aduana de Singapur', body: ['Singapur aplica una normativa aduanera estricta y eficiente, con controles claros y ciertos artículos regulados. Le orientamos sobre los requisitos y la documentación para un despacho ágil.'] },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: 'Normativa aduanera estricta y eficiente; ciertos artículos regulados. Verificar requisitos vigentes.', taxes: TBD },
    faqs: [
      { q: '¿Singapur es un destino ágil para mudanzas?', a: 'Sí. Al ser un hub logístico de primer nivel con aduana eficiente, el despacho suele ser ordenado siempre que la documentación esté completa, algo que gestionamos por usted.' },
      { q: '¿Qué vía conviene?', a: 'El marítimo para casas completas; el aéreo para envíos pequeños o urgentes. Lo definimos según su volumen y tiempos.' },
    ],
    related: ['china', 'japon', 'dubai'],
  },
];

export const destinationsByRegion = (regionId: string) =>
  destinations.filter((d) => d.regionId === regionId);

export const destinationBySlug = (slug: string) => destinations.find((d) => d.slug === slug);
