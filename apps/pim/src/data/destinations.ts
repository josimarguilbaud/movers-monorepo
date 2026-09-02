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
      'Esta página no le va a dar un precio ni una fecha. Esos dos datos dependen del volumen real de su casa y del servicio disponible cuando embarque, y decirlos de antemano sería inventarlos. Lo que sí le explicamos aquí es cómo funciona el corredor y qué le va a pedir la aduana española, para que llegue a la cotización sabiendo de qué se está hablando.',
    ],
    sections: [
      {
        heading: 'Cómo trasladamos su hogar a España',
        body: [
          'Comenzamos con una inspección para calcular su volumen y recomendarle contenedor exclusivo (FCL), compartido (LCL) o envío aéreo. Empacamos con materiales de exportación, gestionamos el flete y la documentación, y coordinamos con nuestra red de agentes en España la desaduanización y la entrega final.',
          'El volumen se mide en metros cúbicos —CBM, por sus siglas en inglés—, y es el número del que cuelga todo lo demás: la vía, el costo, el tipo de servicio. Un apartamento de una recámara y una casa de cuatro no viajan igual. Por eso la inspección va primero: sin volumen medido, cualquier cifra sería una suposición.',
          'Con el servicio puerta a puerta, usted no gestiona nada con puertos ni aduanas: su coordinador responde por toda la cadena hasta su nuevo domicilio.',
        ],
        image: DIMG.containers,
      },
      {
        heading: 'Contenedor exclusivo, contenedor compartido o avión',
        body: [
          'En contenedor exclusivo (FCL, full container load) su menaje viaja solo. El contenedor se carga y se sella en su casa, y no se vuelve a abrir hasta el destino salvo que la aduana lo pida. Es la opción natural para una casa completa.',
          'En contenedor compartido (LCL, o groupage) su carga comparte espacio con la de otros clientes. Se consolida en origen —se agrupa en un almacén antes de embarcar— y se desconsolida en destino, es decir, se separa en otro almacén al llegar. Sale más económico para volúmenes pequeños, a cambio de depender del calendario de consolidación y de sumar dos manipulaciones adicionales.',
          'La vía aérea se reserva para lo urgente y lo poco voluminoso: documentos, ropa, lo que necesita tener en la mano la primera semana. Rara vez es una alternativa al contenedor; suele ser un complemento. Muchas familias combinan las dos: lo esencial por aire, la casa por mar.',
        ],
      },
      {
        heading: 'El régimen de menaje por traslado de residencia',
        body: [
          'La Unión Europea contempla un régimen aduanero para los bienes personales de quien traslada su residencia habitual desde un país de fuera de la Unión. Dicho en llano: su casa usada no es una importación comercial y no se le trata como tal. España aplica ese régimen.',
          'El beneficio no es automático. Depende de condiciones de fondo: que usted haya tenido su residencia habitual fuera de la Unión durante un periodo mínimo continuado; que los bienes hayan estado en su posesión y uso antes del traslado; que lleguen dentro del plazo asociado al cambio de residencia; y que no los venda ni los ceda durante un tiempo después de la importación. Los plazos exactos de cada una de esas condiciones los confirmamos con el agente en destino para su expediente, porque cambian y no conviene citarlos de memoria.',
          'Hay exclusiones clásicas: alcohol y tabaco, los vehículos (que siguen su propia vía) y todo lo que no sea razonablemente un bien de uso doméstico. Y hay un límite de sentido común: el régimen protege el hogar de una persona, no un inventario que parezca el stock de una tienda.',
        ],
        image: DIMG.port,
      },
      {
        heading: 'La documentación que suele pedir la aduana española',
        body: [
          'Lo que más retrasa una mudanza a España no es el barco. Es un papel que falta.',
          'El expediente típico de un traslado de residencia desde Panamá se apoya en tres piezas. La primera acredita que usted vivía fuera de la Unión: habitualmente el certificado de baja consular, que expide el consulado de España en Panamá a quien estaba inscrito allí, o la documentación equivalente que demuestre la residencia previa. La segunda acredita que ahora vive en España: el empadronamiento en el ayuntamiento del municipio de destino, un contrato de arrendamiento o la escritura de la vivienda. La tercera describe lo que entra: el inventario valorado, redactado en español y firmado por usted.',
          'A eso se suman su pasaporte y, según su situación, el NIE o la tarjeta de residencia, el visado o la autorización que ampara su estancia, y los documentos de transporte (conocimiento de embarque o guía aérea). Su coordinador le arma la lista concreta al abrir el expediente y le señala cuáles conviene tramitar antes de embarcar, porque algunos no se consiguen a distancia.',
        ],
      },
      {
        heading: 'Menaje usado y mercancía nueva: no viajan igual',
        body: [
          'Es la confusión más cara del proceso. El régimen de traslado de residencia cubre bienes personales usados: sus muebles, su ropa, sus libros, sus electrodomésticos, sus herramientas. No cubre artículos nuevos.',
          'Un televisor recién comprado, todavía en su caja precintada y con la factura dentro, no es menaje: es mercancía. La aduana lo puede tratar como una importación comercial, con los derechos e IVA que correspondan a esa partida. Meterlo «de paso» en el contenedor no lo convierte en usado.',
          'El inventario es donde esto se resuelve o se rompe. Describir cada bulto con precisión y por su nombre real es lo que sostiene la declaración si la aduana pide explicaciones. Un inventario redactado como «caja 14: varios» es una invitación a que la abran.',
        ],
      },
      {
        heading: 'Vehículos, mascotas y lo que va por su propia vía',
        body: [
          'Un auto no es menaje. Importar un vehículo a España es un procedimiento aparte, con su propio despacho, su homologación técnica y su matriculación en destino, y con tributos que no dependen del régimen de traslado de residencia. Existen supuestos en los que puede acogerse a beneficios por cambio de residencia, sujetos a sus propias condiciones. Se evalúa caso por caso antes de embarcar, no después.',
          'Las mascotas no viajan en el contenedor. Nunca. Van por vía aérea y con su propio expediente sanitario. Del lado panameño la salida se tramita ante las autoridades nacionales de sanidad animal y salud —MIDA y MINSA—; del lado europeo, la entrada exige identificación por microchip, vacunación antirrábica vigente y certificado sanitario oficial, y en ciertos casos una prueba serológica previa. La secuencia entre microchip, vacuna, prueba y viaje es la parte que casi todo el mundo descubre tarde.',
          'Obras de arte, antigüedades, pianos, cavas de vino y objetos de valor declarado tienen su propio tratamiento de embalaje, de seguro y a veces de permisos. Menciónelos en la inspección, no el día del empaque.',
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
        heading: 'Antes de embarcar: lo que conviene resolver en Panamá',
        body: [
          'Tramite aquí lo que solo se puede tramitar aquí. La baja consular, si está inscrito, se gestiona en el consulado de España en Panamá; a distancia se complica. Lo mismo ocurre con los documentos sanitarios de sus mascotas y con cualquier certificado que dependa de una autoridad panameña.',
          'Revise el voltaje. La red eléctrica española funciona a 230 voltios y 50 hercios; la panameña, a 110 voltios y 60 hercios, y los enchufes son distintos. Buena parte de la electrónica moderna acepta ambos rangos —está impreso en la etiqueta de la fuente—, pero los electrodomésticos grandes con motor o resistencia normalmente no. Un transformador para una secadora rara vez compensa lo que costó traerla.',
          'Piense en la puerta de llegada, no solo en la de salida. Muchos edificios españoles de casco antiguo tienen escaleras estrechas, ascensores pequeños y calles donde el camión no puede detenerse sin permiso municipal. Eso puede significar montamuebles —una plataforma elevadora que sube por la fachada— y una gestión previa con el ayuntamiento. Si nos da la dirección exacta al cotizar, queda previsto desde el principio.',
          'Y decida qué no se lleva. Cada metro cúbico que embarca es un metro cúbico que paga, asegura, transporta y desembala. La mudanza más barata siempre es la que va más liviana.',
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
      { q: '¿Puedo llevar mi menaje sin pagar impuestos?', a: 'España aplica el régimen europeo de traslado de residencia, que permite importar los bienes personales usados sin la carga tributaria de una importación comercial. No es automático: depende de acreditar la residencia previa fuera de la Unión, que los bienes fueran suyos y de su uso, que lleguen dentro del plazo asociado al traslado y que no los venda ni los ceda durante un tiempo después. Revisamos su caso y confirmamos las condiciones vigentes antes de embarcar.' },
      { q: '¿Qué documentación me va a pedir la aduana española?', a: 'El expediente típico combina tres cosas: prueba de que usted residía fuera de la Unión Europea (habitualmente el certificado de baja consular o documentación equivalente), prueba de su nueva residencia en España (empadronamiento, contrato de arrendamiento o escritura) y un inventario valorado, en español y firmado. Se añaden el pasaporte, el NIE o la autorización de residencia según su caso, y los documentos de transporte. Le entregamos la lista concreta al abrir su expediente.' },
      { q: '¿Puedo meter cosas nuevas en el contenedor?', a: 'Puede, pero no viajan bajo el mismo régimen. El menaje es un bien personal usado; un artículo nuevo, sin usar y en su empaque original, la aduana lo puede tratar como mercancía, con los derechos e IVA de una importación normal. Si va a llevar algo así, díganoslo antes de empacar para declararlo correctamente y evitar la sorpresa en destino.' },
      { q: '¿Puedo llevar mi auto o mi mascota en la mudanza?', a: 'El auto no es menaje: se importa por un procedimiento propio, con homologación y matriculación en España, y se evalúa caso por caso antes de embarcar. La mascota nunca viaja en el contenedor; va por vía aérea, con la salida tramitada ante MIDA y MINSA en Panamá y una entrada sujeta a microchip, vacunación antirrábica vigente y certificado sanitario oficial. Ambos trámites se empiezan mucho antes que el resto de la mudanza.' },
      { q: '¿Y si en mi piso de España no hay ascensor o el camión no puede parar en la calle?', a: 'Es más común de lo que parece en los cascos antiguos. La solución suele ser un montamuebles —plataforma elevadora por fachada— y, cuando la calle lo exige, un permiso municipal de ocupación de vía pública. Se resuelve antes, no el día de la entrega: díganos la dirección exacta al cotizar y lo dejamos previsto.' },
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
      'La mayoría de estas mudanzas viajan por mar en contenedor —exclusivo o compartido— y entran por uno de los grandes puertos franceses o de un país vecino, con transporte terrestre hasta su domicilio. La vía aérea queda para lo urgente y lo poco voluminoso.',
    ],
    sections: [
      {
        heading: 'Su mudanza a Francia, paso a paso',
        body: [
          'Calculamos su volumen, recomendamos la vía adecuada y empacamos con materiales de exportación. Gestionamos el flete y la documentación, y coordinamos con agentes en Francia la desaduanización y la entrega final en su domicilio.',
          'El volumen se mide en metros cúbicos (CBM). De ese número dependen la vía y el costo: en contenedor exclusivo (FCL) su menaje viaja solo y se sella en su casa; en contenedor compartido (LCL o groupage) comparte espacio con otras cargas, se consolida en un almacén antes de embarcar y se desconsolida en otro al llegar. Es más económico para volúmenes pequeños, a cambio de sumar manipulaciones y depender de un calendario de consolidación.',
          'Con el servicio puerta a puerta usted no trata con puertos ni con la aduana: su coordinador responde por toda la cadena.',
        ],
        image: DIMG.containers,
      },
      {
        heading: 'El régimen de menaje en la Unión Europea',
        body: [
          'Francia aplica el marco aduanero común de la Unión Europea: los bienes personales usados de quien traslada su residencia habitual desde un país de fuera de la Unión no se tratan como una importación comercial.',
          'El beneficio no es automático. Depende de acreditar la residencia previa fuera de la Unión durante un periodo continuado, de que los bienes hayan estado en su posesión y uso antes del traslado, de que lleguen dentro del plazo asociado al cambio de residencia y de que no los venda ni los ceda durante un tiempo después. Los plazos exactos los confirmamos con el agente en destino para su expediente: cambian, y no conviene citarlos de memoria.',
          'La documentación gira en torno a tres piezas: una prueba de que usted residía fuera de la Unión, una prueba de su nueva dirección en Francia y un inventario valorado y firmado, normalmente traducido al francés. A eso se suman pasaporte, visado o título de residencia y los documentos de transporte. Artículos nuevos, alcohol y tabaco quedan fuera del régimen y siguen su propia suerte tributaria.',
        ],
      },
      {
        heading: 'París, Lyon, Marsella y lo que hay entre medio',
        body: [
          'Francia recibe a profesionales, investigadores, estudiantes y familias por su mercado laboral, su sistema educativo y su ubicación en el centro de Europa. París es el gran imán, pero Lyon, Toulouse, Burdeos, Nantes y Marsella concentran cada vez más llegadas, con costos de vivienda distintos y ritmos de ciudad distintos.',
          'La ciudad importa para la logística, no solo para la vida: no es lo mismo entregar en un edificio nuevo de la periferia de Lyon que en un cuarto piso sin ascensor del centro histórico de Burdeos. Ese detalle se resuelve al cotizar, no el día de la entrega.',
        ],
        image: DIMG.port,
      },
      {
        heading: 'Antes de embarcar: lo que conviene resolver en Panamá',
        body: [
          'Tramite en Panamá lo que solo se consigue en Panamá: certificados consulares, documentación sanitaria de mascotas y cualquier constancia que dependa de una autoridad panameña. A distancia todo eso se vuelve lento.',
          'Revise el voltaje. La red francesa funciona a 230 voltios y 50 hercios; la panameña, a 110 voltios y 60 hercios, y los enchufes son distintos. La electrónica moderna suele aceptar ambos rangos —lo dice la etiqueta de la fuente—, pero un electrodoméstico grande con motor o resistencia normalmente no.',
          'Piense en el acceso. Muchos edificios franceses de casco antiguo tienen escaleras estrechas y ascensores diminutos, y en no pocas calles el camión necesita una autorización municipal para estacionarse. La solución habitual es el monte-meubles, una plataforma elevadora que sube los bultos por la fachada. Se contrata con antelación.',
          'El auto no es menaje: se importa por un procedimiento propio, con homologación y matriculación en destino. La mascota nunca viaja en el contenedor: sale de Panamá con el trámite ante MIDA y MINSA y entra a Europa con microchip, vacunación antirrábica vigente y certificado sanitario oficial, y en ciertos casos una prueba serológica previa.',
        ],
      },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: 'Marco aduanero UE; posibles exenciones de menaje por cambio de residencia (con condiciones). Verificar requisitos vigentes.', taxes: TBD },
    faqs: [
      { q: '¿Cuál es la mejor vía de Panamá a Francia?', a: 'El contenedor marítimo para casas completas y la vía aérea para envíos urgentes o pequeños. Lo definimos según su volumen y tiempos.' },
      { q: '¿Aplican exenciones de menaje?', a: 'El menaje usado por cambio de residencia puede acogerse al régimen europeo bajo ciertas condiciones: residencia previa fuera de la Unión, posesión y uso anterior de los bienes, llegada dentro del plazo asociado al traslado y compromiso de no cederlos por un tiempo. Revisamos su caso y confirmamos las condiciones vigentes antes de embarcar.' },
      { q: '¿Qué documentación pide la aduana francesa?', a: 'Habitualmente una prueba de su residencia anterior fuera de la Unión Europea, una prueba de su nueva dirección en Francia y un inventario valorado y firmado, normalmente en francés, además del pasaporte y del título que ampara su estancia. Le entregamos la lista concreta al abrir su expediente.' },
      { q: '¿Y si mi piso en París no tiene ascensor?', a: 'Es lo más común en los edificios antiguos. Se resuelve con monte-meubles —una plataforma elevadora exterior— y, cuando la calle lo exige, con un permiso municipal de estacionamiento. Díganos la dirección exacta al cotizar y queda previsto.' },
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
      'Casi todas estas mudanzas viajan por mar en contenedor. La vía aérea se usa para lo urgente y lo poco voluminoso, normalmente como complemento del contenedor y no como sustituto.',
    ],
    sections: [
      {
        heading: 'Cómo trasladamos su hogar a Portugal',
        body: [
          'Tras la inspección de volumen, recomendamos la vía óptima y preparamos su menaje con embalaje de exportación e inventario. Gestionamos flete, documentación y entrega con nuestra red local en Portugal.',
          'El volumen se mide en metros cúbicos (CBM) y define el resto. En contenedor exclusivo (FCL) su menaje viaja solo, sellado desde su casa. En contenedor compartido (LCL o groupage) comparte espacio con otras cargas: se consolida en un almacén antes de embarcar y se desconsolida en otro al llegar. Para un apartamento pequeño suele ser la opción sensata, a cambio de depender del calendario de consolidación.',
          'Con el servicio puerta a puerta usted no gestiona nada con el puerto ni con la aduana. Su coordinador responde por toda la cadena hasta la entrada de su casa.',
        ],
        image: DIMG.containers,
      },
      {
        heading: 'Aduana portuguesa y el régimen de menaje',
        body: [
          'Portugal aplica el marco aduanero común de la Unión Europea: los bienes personales usados de quien traslada su residencia habitual desde fuera de la Unión no se tratan como una importación comercial.',
          'El beneficio está condicionado. Depende de acreditar la residencia previa fuera de la Unión durante un periodo continuado, de que los bienes fueran suyos y de su uso antes del traslado, de que lleguen dentro del plazo asociado al cambio de residencia y de que no se vendan ni se cedan durante un tiempo después. Los plazos concretos los verificamos con el agente en destino para su caso.',
          'En la práctica, el expediente combina una prueba de su residencia anterior fuera de la Unión, una prueba de su nueva residencia en Portugal y un inventario valorado y firmado, habitualmente en portugués. Conviene además tener resuelto el NIF, el número de identificación fiscal portugués: en Portugal se pide para casi todo, y su ausencia frena trámites que nada tienen que ver con la aduana.',
        ],
      },
      {
        heading: 'Lisboa, Oporto y el resto del país',
        body: [
          'Portugal atrae por una combinación difícil de repetir: clima templado, seguridad, ciudades a escala humana y una comunidad internacional grande que hace fácil llegar. Lisboa y Oporto concentran la mayoría de las llegadas; el Algarve recibe sobre todo a quienes se retiran; Coímbra y Braga, a estudiantes y familias.',
          'Para quien viene de Panamá hay una ventaja que no es menor: el idioma no es el mismo, pero se parece lo suficiente como para que el primer mes no sea un muro. La parte difícil de instalarse en Portugal casi nunca es la lengua; es el papeleo.',
        ],
        image: DIMG.port,
      },
      {
        heading: 'Antes de embarcar: lo que conviene resolver en Panamá',
        body: [
          'Adelante los documentos que dependen de una autoridad panameña o de un consulado: certificados de residencia, constancias consulares y toda la documentación sanitaria de sus mascotas. Conseguirlos ya instalado en Portugal cuesta semanas de correos y de citas.',
          'Revise el voltaje. La red portuguesa funciona a 230 voltios y 50 hercios; la panameña, a 110 voltios y 60 hercios, y los enchufes son distintos. La electrónica moderna suele aceptar ambos rangos —está impreso en la fuente—, pero los electrodomésticos grandes con motor o resistencia normalmente no.',
          'Piense en el acceso a su nueva casa. Lisboa y Oporto están llenas de edificios antiguos en calles empinadas y estrechas, con escaleras que no admiten un sofá y ascensores donde no cabe un colchón. La solución habitual es una plataforma elevadora exterior y, cuando la calle lo requiere, una autorización municipal para estacionar el camión. Se contrata antes, no el día de la entrega.',
          'El auto va por su propia vía, con homologación y matriculación en destino, y se evalúa caso por caso antes de embarcar. La mascota nunca viaja en el contenedor: sale de Panamá con el trámite ante MIDA y MINSA y entra a Europa con microchip, vacunación antirrábica vigente y certificado sanitario oficial.',
        ],
      },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: 'Marco aduanero UE; posibles exenciones de menaje por cambio de residencia. Verificar requisitos vigentes.', taxes: TBD },
    faqs: [
      { q: '¿Por qué tantos eligen Portugal?', a: 'Por su clima, seguridad, costo de vida relativamente accesible y programas atractivos para residentes extranjeros. Es un destino en auge para expatriados.' },
      { q: '¿Cuánto tarda la mudanza?', a: 'El tiempo total combina el tránsito marítimo con los procesos de origen y destino (empaque, aduanas y entrega). Le confirmamos el estimado exacto de este corredor en su cotización.' },
      { q: '¿Qué documentación pide la aduana portuguesa?', a: 'Habitualmente una prueba de su residencia anterior fuera de la Unión Europea, una prueba de su nueva residencia en Portugal y un inventario valorado y firmado, normalmente en portugués, además del pasaporte y del título que ampara su estancia. Conviene tener también el NIF portugués. Le entregamos la lista concreta al abrir su expediente.' },
      { q: '¿Puedo incluir electrodomésticos o muebles recién comprados?', a: 'Puede, pero no viajan bajo el mismo régimen. El menaje son bienes personales usados; un artículo nuevo y sin usar la aduana lo puede tratar como mercancía, con los tributos de una importación normal. Díganoslo antes de empacar para declararlo correctamente.' },
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
      'Es un corredor con dos particularidades que conviene entender desde el principio: Suiza no tiene salida al mar y no forma parte de la Unión Europea. Las dos cosas cambian cómo llega su contenedor y cómo se despacha.',
    ],
    sections: [
      {
        heading: 'Un país sin mar: cómo llega su contenedor a Suiza',
        body: [
          'Ningún barco atraca en Suiza. El tramo marítimo termina en un puerto europeo —del norte o del Mediterráneo, según el servicio— y desde ahí la carga sigue por vía terrestre o ferroviaria hasta su ciudad. Ese tramo interior es parte del costo y del calendario, no un extra improvisado al final.',
          'El volumen se mide en metros cúbicos (CBM) y define la vía. En contenedor exclusivo (FCL) su menaje viaja solo y se sella en su casa. En contenedor compartido (LCL o groupage) comparte espacio con otras cargas: se consolida en un almacén antes de embarcar y se desconsolida en otro al llegar, antes del tramo terrestre.',
          'Preparamos su menaje con embalaje de exportación e inventario detallado, y coordinamos el flete, el despacho y la entrega con agentes locales. La precisión documental es especialmente importante en el despacho suizo.',
        ],
        image: DIMG.containers,
      },
      {
        heading: 'Aduana suiza: fuera del marco de la Unión Europea',
        body: [
          'A diferencia de sus vecinos, Suiza no pertenece a la Unión Europea y aplica su propia normativa aduanera. Que su mudanza pase por un puerto alemán, belga o italiano no la mete en el régimen europeo: al cruzar la frontera suiza empieza un despacho distinto.',
          'Suiza contempla la importación de bienes de mudanza (Übersiedlungsgut o effets de déménagement) para quien traslada su domicilio al país. El tratamiento está condicionado: que los bienes hayan estado en su posesión y uso durante un tiempo antes del traslado, que se destinen a seguir usándose en su nuevo hogar y que no se cedan ni se vendan durante un periodo posterior. Los plazos y umbrales exactos los confirmamos con el agente en destino para su expediente.',
          'La documentación es el corazón del proceso: un inventario valorado, detallado y firmado —normalmente en alemán, francés o italiano según el cantón—, junto con el permiso de residencia o el contrato de trabajo que justifica el traslado, el contrato de la vivienda y el pasaporte. Los artículos nuevos, el alcohol y el tabaco quedan fuera del régimen y se tratan aparte. Un inventario vago no se penaliza con una advertencia: se penaliza con una inspección.',
        ],
      },
      {
        heading: 'Zúrich, Ginebra, Basilea y el resto',
        body: [
          'Suiza concentra sedes de organismos internacionales, banca, farmacéutica e investigación, y por eso recibe a profesionales de todo el mundo. Ginebra y Lausana son francófonas; Zúrich, Berna y Basilea, germanófonas; el Tesino, italófono. Esa división no es folclore: determina el idioma de su expediente aduanero y de la documentación de la vivienda.',
          'También determina la operación en destino. Las ciudades suizas son ordenadas hasta en la entrega: horarios de carga y descarga, reservas de espacio en la calle y normas de edificio que se cumplen sin excepción. Es un destino cómodo de operar, siempre que se planifique.',
        ],
        image: DIMG.port,
      },
      {
        heading: 'Antes de embarcar: lo que conviene resolver en Panamá',
        body: [
          'Tenga listo el documento que justifica su traslado —permiso de residencia, contrato de trabajo o la constancia que corresponda— antes de embarcar. En Suiza el despacho de mudanza se apoya en él, y sin ese papel la carga espera.',
          'Revise el voltaje y los enchufes. La red suiza funciona a 230 voltios y 50 hercios, frente a los 110 voltios y 60 hercios de Panamá, y Suiza usa además un tipo de toma propio, distinto del que encontrará en Francia o Alemania. La electrónica moderna suele aceptar ambos rangos de voltaje, pero los electrodomésticos grandes con motor o resistencia normalmente no.',
          'Piense en el acceso. Muchos edificios de los cascos antiguos suizos tienen escaleras estrechas y ascensores pequeños, y las calles del centro suelen exigir autorización para estacionar el camión. La solución habitual es una plataforma elevadora exterior, contratada con antelación.',
          'El auto no es menaje: se importa por un procedimiento propio, con homologación y matriculación en Suiza, y se evalúa caso por caso antes de embarcar. La mascota nunca viaja en el contenedor: sale de Panamá con el trámite ante MIDA y MINSA y entra con microchip, vacunación antirrábica vigente y certificado sanitario oficial.',
        ],
      },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: 'Régimen aduanero propio (fuera de la UE); posible exención de menaje por traslado de residencia. Verificar requisitos vigentes.', taxes: TBD },
    faqs: [
      { q: '¿Suiza tiene reglas distintas a la UE?', a: 'Sí. Al no ser miembro de la Unión Europea, Suiza aplica su propio régimen aduanero. Que su contenedor entre a Europa por un puerto alemán o italiano no cambia nada: el despacho suizo empieza en la frontera suiza. Gestionamos la documentación específica que exige para el menaje de casa.' },
      { q: '¿Necesito un inventario detallado?', a: 'Sí, y es la pieza central del expediente. Un inventario valorado, preciso y firmado agiliza el despacho suizo; uno vago provoca inspección. Nuestro empaque profesional lo genera como parte del servicio.' },
      { q: '¿Cómo llega mi contenedor a un país sin mar?', a: 'El tramo marítimo termina en un puerto europeo y desde ahí la carga sigue por vía terrestre o ferroviaria hasta su ciudad. Ese tramo interior está contemplado en el servicio puerta a puerta y forma parte del costo y del calendario que le confirmamos en la cotización.' },
      { q: '¿En qué idioma debe ir la documentación?', a: 'Depende del cantón de destino: alemán, francés o italiano. Lo definimos al abrir su expediente y preparamos el inventario en el idioma que corresponda.' },
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
      'Es uno de los destinos europeos más cómodos de operar desde Panamá. La parte que sorprende a la gente no es el barco: es la escalera del edificio al que llega.',
    ],
    sections: [
      {
        heading: 'Róterdam, la puerta de entrada',
        body: [
          'Calculamos su volumen, recomendamos la vía y empacamos con materiales de exportación. Gestionamos la documentación y coordinamos con agentes neerlandeses la desaduanización y la última milla.',
          'El volumen se mide en metros cúbicos (CBM). En contenedor exclusivo (FCL) su menaje viaja solo y se sella en su casa; en contenedor compartido (LCL o groupage) comparte espacio con otras cargas, se consolida en un almacén antes de embarcar y se desconsolida en otro al llegar. La densidad de servicios que toca los puertos neerlandeses hace que el compartido sea aquí una opción especialmente razonable para volúmenes pequeños.',
          'Róterdam concentra una parte enorme del tráfico de contenedores de Europa, con la infraestructura y las conexiones interiores que eso supone. No promete milagros de calendario, pero sí reduce los cuellos de botella que aparecen en puertos más pequeños.',
        ],
        image: DIMG.containers,
      },
      {
        heading: 'Aduana neerlandesa y el régimen de menaje (marco UE)',
        body: [
          'Como miembro de la Unión Europea, Países Bajos aplica el marco aduanero común: los bienes personales usados de quien traslada su residencia habitual desde fuera de la Unión no se tratan como una importación comercial.',
          'El beneficio está condicionado: residencia previa fuera de la Unión durante un periodo continuado, posesión y uso anterior de los bienes, llegada dentro del plazo asociado al traslado y compromiso de no venderlos ni cederlos durante un tiempo después. Los plazos concretos los confirmamos con el agente en destino para su caso.',
          'El expediente habitual reúne una prueba de su residencia anterior fuera de la Unión, una prueba de su nueva dirección neerlandesa —normalmente el registro en el ayuntamiento del municipio donde va a vivir— y un inventario valorado y firmado. Vale la pena resolver pronto ese registro municipal: en Países Bajos abre la puerta a casi todo lo demás, del banco al seguro médico.',
        ],
      },
      {
        heading: 'Ámsterdam, La Haya, Róterdam, Utrecht',
        body: [
          'Países Bajos recibe a profesionales, investigadores y familias por su mercado laboral internacional, su nivel de inglés y la escala amable de sus ciudades. Ámsterdam es el destino más pedido, La Haya concentra organismos internacionales, Róterdam tiene el pulso portuario e industrial, Eindhoven y Utrecht crecen con la tecnología.',
          'Vivir allí cambia hábitos rápido. Muchas familias que llegan de Panamá terminan usando la bicicleta como transporte principal y descubren que el auto que trajeron pasa más tiempo estacionado que en la calle. Vale la pena pensarlo antes de embarcarlo.',
        ],
        image: DIMG.port,
      },
      {
        heading: 'Antes de embarcar: lo que conviene resolver en Panamá',
        body: [
          'Adelante los certificados que dependen de una autoridad panameña o de un consulado, y toda la documentación sanitaria de sus mascotas. A distancia, cada uno de esos papeles cuesta semanas.',
          'Revise el voltaje. La red neerlandesa funciona a 230 voltios y 50 hercios; la panameña, a 110 voltios y 60 hercios, y los enchufes son distintos. La electrónica moderna suele aceptar ambos rangos —lo dice la etiqueta de la fuente—, pero los electrodomésticos grandes con motor o resistencia normalmente no.',
          'Y ahora la parte que nadie anticipa: las casas de canal de Ámsterdam, Utrecht o Leiden tienen escaleras estrechísimas y empinadas, pensadas para subir personas y no sofás. Por eso muchas fachadas conservan una viga de izado en el tejado y por eso la entrega se hace, muy a menudo, con una plataforma elevadora exterior que sube los bultos por la ventana. Requiere reserva previa y, en varias ciudades, un permiso municipal para ocupar la calle. Si nos da la dirección exacta al cotizar, lo dejamos contratado desde el principio.',
          'El auto no es menaje: se importa por un procedimiento propio, con homologación y matriculación en destino. La mascota nunca viaja en el contenedor: sale de Panamá con el trámite ante MIDA y MINSA y entra a Europa con microchip, vacunación antirrábica vigente y certificado sanitario oficial.',
        ],
      },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: 'Marco aduanero UE; posibles exenciones de menaje por cambio de residencia. Verificar requisitos vigentes.', taxes: TBD },
    faqs: [
      { q: '¿El puerto de Róterdam agiliza mi mudanza?', a: 'Róterdam es uno de los puertos más grandes y eficientes del mundo, con excelentes conexiones interiores. Es una ventaja logística real para las mudanzas hacia Países Bajos, aunque el calendario final depende del servicio contratado y se lo confirmamos en la cotización.' },
      { q: '¿Marítimo o aéreo?', a: 'El marítimo para casas completas; el aéreo para envíos pequeños o urgentes. Lo definimos según su volumen y tiempos.' },
      { q: '¿Cómo suben los muebles por esas escaleras tan estrechas?', a: 'Normalmente no suben por la escalera. Se usa una plataforma elevadora exterior que entra los bultos por la ventana, un método estándar en las casas de canal. Requiere reserva previa y, en varias ciudades, permiso municipal para ocupar la calle: lo gestionamos si nos da la dirección exacta al cotizar.' },
      { q: '¿Qué documentación pide la aduana neerlandesa?', a: 'Habitualmente una prueba de su residencia anterior fuera de la Unión Europea, el registro en el ayuntamiento de su nuevo municipio y un inventario valorado y firmado, además del pasaporte y del título que ampara su estancia. Le entregamos la lista concreta al abrir su expediente.' },
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
      'Es el destino más cercano que operamos y, aun así, uno donde la gente llega con una idea equivocada: que por ser vecinos su mudanza puede ir por carretera. No puede. Ese detalle define todo el corredor.',
    ],
    sections: [
      {
        heading: 'Vecinos sin carretera: por qué su mudanza viaja por mar o por aire',
        body: [
          'Panamá y Colombia comparten frontera, pero no hay ruta terrestre entre los dos países: el Tapón del Darién interrumpe la carretera Panamericana. No existe un camión que salga de Ciudad de Panamá y llegue a Bogotá. Toda mudanza a Colombia sale por mar o por aire.',
          'La buena noticia es que la cercanía juega a favor de todos modos. Los servicios marítimos hacia los puertos colombianos son frecuentes, y la vía aérea es una alternativa realista aquí —no solo un recurso de emergencia— cuando el volumen es moderado y el tiempo importa.',
          'El volumen se mide en metros cúbicos (CBM). En contenedor exclusivo (FCL) su menaje viaja solo y se sella en su casa; en contenedor compartido (LCL o groupage) comparte espacio con otras cargas, se consolida en un almacén antes de embarcar y se desconsolida en otro al llegar. Le asesoramos entre una y otra según su volumen, y coordinamos con agentes en Colombia la desaduanización y la entrega.',
        ],
        image: DIMG.containers,
      },
      {
        heading: 'La aduana colombiana y el régimen de menaje doméstico',
        body: [
          'En Colombia la autoridad aduanera es la DIAN. Vale la pena decirlo con nombre y apellido, porque el sector confunde con frecuencia las autoridades de un país y otro: en Panamá la aduana es la ANA, la Autoridad Nacional de Aduanas, y no tiene nada que ver con el despacho colombiano.',
          'Colombia contempla un régimen de menaje doméstico para quien establece o restablece su residencia en el país. El tratamiento está condicionado: que se acredite la residencia previa en el exterior durante un periodo continuado, que los bienes sean usados y de uso doméstico, que la importación se haga dentro de una ventana de tiempo asociada a su llegada al país y que se declaren en una sola operación. Los plazos y límites exactos los confirmamos con el agente en destino para su expediente.',
          'La documentación típica incluye el pasaporte con los sellos que respaldan su historial de salidas y entradas, la visa o la cédula de extranjería según su condición migratoria, y una lista de empaque valorada, en español, que describa cada bulto por su contenido real. Los artículos nuevos —los que llegan sin usar y en su empaque original— no entran en el régimen de menaje: la aduana los puede tratar como mercancía.',
        ],
      },
      {
        heading: 'Bogotá, Medellín, Cali, Cartagena',
        body: [
          'Colombia recibe cada año a panameños y a extranjeros residentes en Panamá por trabajo, estudios, negocios y familia. Bogotá concentra el empleo corporativo y las sedes; Medellín atrae a quienes buscan clima estable y una comunidad internacional grande; Cali y Barranquilla tienen su propio pulso; Cartagena combina turismo, puerto y segunda residencia.',
          'La geografía cambia la última milla más de lo que se imagina. La carga que entra por Cartagena o Barranquilla sube al interior por carretera de montaña; la que va a Cali suele entrar por Buenaventura. El punto exacto de entrada depende del servicio y se lo confirmamos en la cotización, pero el tramo terrestre siempre está contemplado en el puerta a puerta.',
        ],
        image: DIMG.port,
      },
      {
        heading: 'Antes de embarcar: lo que conviene resolver en Panamá',
        body: [
          'Tenga clara su condición migratoria antes de mover una caja. El régimen de menaje colombiano se apoya en ella, y un expediente que llega con la visa en trámite se queda esperando en el puerto, generando costos de almacenaje que no estaban en el presupuesto.',
          'Aquí tiene una ventaja poco conocida: la red eléctrica colombiana funciona a 110 voltios y 60 hercios, igual que la panameña, y los enchufes son los mismos. Sus electrodomésticos funcionan tal cual. Es uno de los pocos destinos donde no hay que hacer esa cuenta.',
          'El auto es un caso aparte y difícil. La importación de vehículos a Colombia está fuertemente regulada y no se resuelve dentro del menaje. Se evalúa caso por caso, antes de embarcar, y en muchas situaciones la recomendación honesta es venderlo en Panamá.',
          'La mascota nunca viaja en el contenedor. Sale de Panamá con el trámite ante MIDA y MINSA, y entra a Colombia con el certificado sanitario oficial y las vacunas vigentes que exige la autoridad sanitaria agropecuaria colombiana. Se empieza mucho antes que el resto de la mudanza.',
        ],
      },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: 'Requisitos de menaje de casa; posibles beneficios para menaje usado por cambio de residencia. Verificar condiciones vigentes.', taxes: TBD },
    faqs: [
      { q: '¿A qué ciudades de Colombia llegan?', a: 'Coordinamos a las principales ciudades —Bogotá, Medellín, Cali, Cartagena, Barranquilla— con entrega final puerta a puerta a través de nuestra red.' },
      { q: '¿Puedo enviar mi mudanza por carretera si somos países vecinos?', a: 'No. No existe ruta terrestre entre Panamá y Colombia: el Tapón del Darién interrumpe la carretera Panamericana. Toda mudanza a Colombia viaja por mar o por aire.' },
      { q: '¿Cuál es la vía más conveniente?', a: 'Por la cercanía, tanto el marítimo como el aéreo son eficientes. El marítimo es más económico para casas completas; el aéreo, más rápido para envíos pequeños o cuando el tiempo manda.' },
      { q: '¿Qué pide la aduana colombiana para el menaje?', a: 'La DIAN contempla un régimen de menaje doméstico para quien establece residencia en el país, condicionado a la residencia previa en el exterior, a que los bienes sean usados y de uso doméstico y a que la importación se haga dentro de la ventana asociada a su llegada. Se apoya en su pasaporte, en la visa o cédula de extranjería y en una lista de empaque valorada. Revisamos su caso antes de embarcar.' },
      { q: '¿Tengo que cambiar mis electrodomésticos?', a: 'No. Colombia usa 110 voltios y 60 hercios, igual que Panamá, con los mismos enchufes. Sus equipos funcionan sin transformador ni adaptador.' },
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
      'Es un corredor donde el papeleo pesa más que la distancia. La parte que hay que hacer bien no ocurre en el puerto argentino: ocurre en Panamá, antes de que el contenedor salga.',
    ],
    sections: [
      {
        heading: 'Cómo trasladamos su hogar a Argentina',
        body: [
          'Calculamos su volumen, empacamos con materiales de exportación y gestionamos el flete y la documentación. Coordinamos con agentes argentinos la desaduanización y la entrega final.',
          'El volumen se mide en metros cúbicos (CBM). En contenedor exclusivo (FCL) su menaje viaja solo, sellado desde su casa; en contenedor compartido (LCL o groupage) comparte espacio con otras cargas, se consolida en un almacén antes de embarcar y se desconsolida en otro al llegar. Para una casa completa, el exclusivo casi siempre resulta más simple de despachar.',
          'La carga entra normalmente por el área portuaria de Buenos Aires y, si su destino es Córdoba, Rosario, Mendoza o cualquier punto del interior, continúa por carretera. Ese tramo terrestre está contemplado en el servicio puerta a puerta.',
        ],
        image: DIMG.containers,
      },
      {
        heading: 'La aduana argentina y el inventario que se firma antes de embarcar',
        body: [
          'Argentina contempla un régimen para el menaje de casa de quien se radica o se reinstala en el país. Está condicionado: que se acredite la residencia previa en el exterior durante un periodo continuado, que los bienes sean usados y de uso doméstico, y que la importación se haga dentro de la ventana asociada a su llegada. Los plazos exactos los confirmamos con el agente en destino para su expediente.',
          'La particularidad de este corredor es procedimental y conviene conocerla desde el primer día: en los supuestos de franquicia por radicación, la lista de bienes suele presentarse y visarse ante el consulado argentino antes de embarcar. Es decir, el inventario deja de ser un documento interno de la mudanza y pasa a ser un documento oficial. Lo que no está en esa lista, o está mal descrito, es un problema que no se arregla después.',
          'Por eso nuestro inventario para Argentina se redacta con otro nivel de detalle: cada bulto descrito por su contenido real, con valor declarado, sin cajas rotuladas como «varios». Ese trabajo previo es la diferencia entre un despacho ordenado y una carga inmovilizada acumulando almacenaje.',
        ],
      },
      {
        heading: 'Buenos Aires y el interior',
        body: [
          'Buenos Aires concentra la mayoría de las llegadas, con una vida cultural y gastronómica que explica buena parte del atractivo del destino. Córdoba y Rosario tienen universidades fuertes y un costo de vida distinto; Mendoza atrae a quienes buscan otro ritmo; la Patagonia, a quienes buscan directamente otro país dentro del país.',
          'La distancia interior argentina es real: entregar en Buenos Aires y entregar en Bariloche no son la misma operación ni el mismo calendario. Cuanto antes nos diga la dirección exacta, mejor queda planificado el tramo final.',
        ],
        image: DIMG.port,
      },
      {
        heading: 'Antes de embarcar: lo que conviene resolver en Panamá',
        body: [
          'Empiece por el consulado. Si su caso va por franquicia de radicación, el trámite consular del inventario se hace en Panamá y condiciona la fecha de embarque. Intentar resolverlo ya instalado en Argentina es el error más caro de este corredor.',
          'Revise el voltaje. La red argentina funciona a 220 voltios y 50 hercios; la panameña, a 110 voltios y 60 hercios, y los enchufes son distintos. La electrónica moderna suele aceptar ambos rangos —lo dice la etiqueta de la fuente—, pero los electrodomésticos grandes con motor o resistencia normalmente no.',
          'El auto no entra en el menaje. La importación de vehículos a Argentina está fuertemente regulada y se evalúa caso por caso antes de embarcar; en muchas situaciones la recomendación honesta es venderlo en Panamá.',
          'La mascota nunca viaja en el contenedor: sale de Panamá con el trámite ante MIDA y MINSA y entra con el certificado sanitario oficial y las vacunas vigentes que exige la autoridad sanitaria argentina. Es un expediente aparte y se empieza mucho antes.',
        ],
      },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: 'Requisitos de menaje de casa; posible tratamiento para menaje usado por cambio de residencia. Verificar condiciones vigentes.', taxes: TBD },
    faqs: [
      { q: '¿Cuánto tarda una mudanza a Argentina?', a: 'El tiempo total combina el tránsito marítimo con los procesos de origen y destino (empaque, aduanas y entrega). Le confirmamos el estimado exacto de este corredor en su cotización.' },
      { q: '¿Qué documentación necesito?', a: 'La importación de menaje exige documentación específica que preparamos por usted: el inventario valorado y detallado, su pasaporte, la documentación migratoria que acredita su radicación y los documentos de transporte. En los supuestos de franquicia, además, el trámite consular del inventario.' },
      { q: '¿Es cierto que el inventario se presenta en el consulado antes de embarcar?', a: 'En los supuestos de franquicia por radicación, sí: la lista de bienes suele visarse ante el consulado argentino en Panamá antes del embarque. Por eso el inventario se prepara con especial cuidado y por eso conviene arrancar el expediente con tiempo.' },
      { q: '¿Puedo incluir cosas nuevas en la mudanza?', a: 'El régimen ampara bienes usados y de uso doméstico. Un artículo nuevo, sin usar y en su empaque original, la aduana lo puede tratar como mercancía, con los tributos de una importación normal. Díganoslo antes de empacar para declararlo correctamente.' },
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
      'Es un corredor de Pacífico a Pacífico, cómodo desde Panamá. Su exigencia particular no está en la aduana: está en el control fitosanitario, que en Chile se toma muy en serio.',
    ],
    sections: [
      {
        heading: 'Su mudanza a Chile, paso a paso',
        body: [
          'Preparamos su menaje con embalaje de exportación e inventario, gestionamos el flete y coordinamos con agentes chilenos la desaduanización y la entrega en su nueva dirección.',
          'El volumen se mide en metros cúbicos (CBM). En contenedor exclusivo (FCL) su menaje viaja solo y se sella en su casa; en contenedor compartido (LCL o groupage) comparte espacio con otras cargas, se consolida en un almacén antes de embarcar y se desconsolida en otro al llegar. La elección depende de su volumen y de su calendario.',
          'La carga entra por los puertos del Pacífico —Valparaíso y San Antonio son los que más sirven a Santiago— y desde ahí sigue por carretera. Chile es un país largo y estrecho: la última milla hacia el norte o hacia el sur puede ser un tramo terrestre considerable, y está contemplado en el puerta a puerta.',
        ],
        image: DIMG.containers,
      },
      {
        heading: 'Aduana chilena y el control fitosanitario del SAG',
        body: [
          'Chile contempla un tratamiento para el menaje de casa de quien traslada su residencia al país, condicionado a acreditar la residencia previa en el exterior, a que los bienes sean usados y de uso doméstico y a que la importación se haga dentro de la ventana asociada a su llegada y a su condición migratoria. Los plazos exactos los confirmamos con el agente en destino.',
          'Pero el filtro que más sorprende a quien se muda a Chile no es el aduanero, es el sanitario. Chile es un país agrícola protegido por barreras naturales —desierto, cordillera y océano— y defiende esa condición con un control fitosanitario y zoosanitario riguroso, a cargo del Servicio Agrícola y Ganadero (SAG). Se inspeccionan los efectos personales buscando tierra, madera sin tratar, semillas, plantas, alimentos y material orgánico.',
          'Eso cambia cómo se empaca. Las plantas y los alimentos quedan fuera. Las herramientas de jardín, las bicicletas, las botas de montaña, el equipo deportivo y de camping se limpian a fondo antes de entrar en la caja. Los muebles de madera y los embalajes de madera deben cumplir los tratamientos exigidos. Un artículo con tierra pegada puede provocar el tratamiento, la retención o la destrucción de lo que lo rodea.',
        ],
      },
      {
        heading: 'Santiago, Valparaíso y el resto del país',
        body: [
          'Santiago concentra el empleo corporativo, las universidades y la mayoría de las llegadas, con la cordillera de fondo y un clima seco que sorprende a quien viene del trópico. Valparaíso y Viña del Mar ofrecen vida de costa; Concepción, un polo universitario e industrial; el sur, otro país entero.',
          'Vale la pena mencionar algo que la gente descubre en invierno: buena parte de la vivienda chilena no está construida para el frío como lo estaría en Europa, y la calefacción se resuelve casa por casa. Si viene de Panamá, esa es la adaptación real, más que la mudanza.',
        ],
        image: DIMG.port,
      },
      {
        heading: 'Antes de embarcar: lo que conviene resolver en Panamá',
        body: [
          'Limpie antes de empacar. Es el consejo más útil de este destino y el más ignorado: calzado, herramientas, muebles de jardín, bicicletas y equipo deportivo pasan por una revisión que busca exactamente lo que quedó pegado en la suela.',
          'Tenga resuelta su condición migratoria. El tratamiento del menaje chileno se apoya en ella, y una carga que llega antes que la visa espera en el puerto acumulando almacenaje.',
          'Revise el voltaje. La red chilena funciona a 220 voltios y 50 hercios; la panameña, a 110 voltios y 60 hercios, y los enchufes son distintos. La electrónica moderna suele aceptar ambos rangos, pero los electrodomésticos grandes con motor o resistencia normalmente no.',
          'El auto va por su propia vía, con normas de importación estrictas, y se evalúa caso por caso antes de embarcar. La mascota nunca viaja en el contenedor: sale de Panamá con el trámite ante MIDA y MINSA y entra a Chile con el certificado sanitario oficial que exige el SAG.',
        ],
      },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: 'Requisitos de menaje de casa; posibles beneficios para menaje usado por cambio de residencia. Verificar condiciones vigentes.', taxes: TBD },
    faqs: [
      { q: '¿A qué puertos llega la carga en Chile?', a: 'Chile cuenta con puertos importantes en el Pacífico, como Valparaíso y San Antonio, con buena conexión hacia Santiago y el resto del país. El puerto exacto depende del servicio contratado y se lo confirmamos en la cotización.' },
      { q: '¿Marítimo o aéreo a Chile?', a: 'El marítimo es lo más económico para casas completas; el aéreo, más rápido para envíos pequeños o urgentes.' },
      { q: '¿Qué es el SAG y por qué revisa mi mudanza?', a: 'El Servicio Agrícola y Ganadero es la autoridad chilena de sanidad vegetal y animal. Inspecciona los efectos personales para impedir el ingreso de plagas: tierra, madera sin tratar, semillas, plantas, alimentos y material orgánico. Preparamos y declaramos su menaje conforme a esas reglas y le decimos qué no conviene enviar.' },
      { q: '¿Qué no debo empacar para Chile?', a: 'Plantas, semillas, alimentos y cualquier cosa con tierra o restos vegetales. Y limpie a fondo calzado, herramientas de jardín, bicicletas y equipo de camping antes de empacarlos: es justo lo que se revisa.' },
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
      'Es un corredor de Pacífico a Pacífico, con buenas conexiones desde Panamá. La parte que exige planificación no es el barco: es la ventana de tiempo que la aduana peruana asocia a su llegada al país.',
    ],
    sections: [
      {
        heading: 'Cómo trasladamos su hogar a Perú',
        body: [
          'Calculamos volumen, empacamos con materiales de exportación y gestionamos flete y documentación. Coordinamos con agentes peruanos la desaduanización y la entrega final.',
          'El volumen se mide en metros cúbicos (CBM). En contenedor exclusivo (FCL) su menaje viaja solo y se sella en su casa; en contenedor compartido (LCL o groupage) comparte espacio con otras cargas, se consolida en un almacén antes de embarcar y se desconsolida en otro al llegar. Para un apartamento suele convenir el compartido; para una casa completa, el exclusivo.',
          'La carga marítima entra normalmente por el Callao, el puerto que sirve a Lima, y desde ahí sigue por carretera si su destino es Arequipa, Trujillo, Cusco o cualquier otra ciudad. Ese tramo terrestre está contemplado en el servicio puerta a puerta.',
        ],
        image: DIMG.containers,
      },
      {
        heading: 'La aduana peruana y el régimen de menaje de casa',
        body: [
          'En Perú la autoridad aduanera es la SUNAT. Contempla un régimen de menaje de casa para quien establece residencia en el país, condicionado a acreditar la residencia previa en el exterior durante un periodo continuado, a que los bienes sean usados y de uso doméstico, y a que la importación se realice dentro de una ventana de tiempo referida a su llegada al Perú.',
          'Esa ventana es la clave del corredor y el motivo por el que conviene arrancar el expediente antes de viajar. Si su menaje sale tarde de Panamá, puede llegar fuera del plazo que ampara el régimen y terminar tratado como una importación ordinaria. El cálculo se hace al revés de lo que la gente supone: primero la fecha de su llegada, después la fecha de embarque.',
          'La documentación típica incluye el pasaporte con los sellos que respaldan su historial migratorio, el carné de extranjería o la visa según su condición, y una lista de empaque valorada, en español, con cada bulto descrito por su contenido real. Los artículos nuevos y sin usar no entran en el régimen: la aduana los puede tratar como mercancía.',
        ],
      },
      {
        heading: 'Lima, Arequipa, Cusco y el resto del país',
        body: [
          'Lima concentra el empleo, las sedes corporativas y la mayoría de las llegadas, con un clima costero gris y húmedo buena parte del año que sorprende a quien espera el trópico. Arequipa y Trujillo tienen su propio peso económico; Cusco vive del turismo y de una altura que conviene tener en cuenta.',
          'La geografía peruana convierte la última milla en un tema real. Subir carga a la sierra no es lo mismo que entregar en Miraflores, y los accesos en el centro histórico de varias ciudades son estrechos. Cuanto antes nos dé la dirección exacta, mejor queda resuelto el tramo final.',
        ],
        image: DIMG.port,
      },
      {
        heading: 'Antes de embarcar: lo que conviene resolver en Panamá',
        body: [
          'Coordine la fecha de embarque con la fecha en que usted llega al Perú. Es el punto donde este corredor se gana o se pierde, y se decide en la cotización, no en el puerto.',
          'Buena noticia con la corriente: la red eléctrica peruana funciona a 220 voltios, pero a 60 hercios, igual que la frecuencia panameña. La diferencia está en el voltaje, no en la frecuencia, así que sus equipos con fuente conmutada suelen funcionar con solo cambiar el enchufe, mientras que los electrodomésticos grandes con motor o resistencia normalmente necesitan reemplazo. Revise la etiqueta de cada aparato antes de decidir.',
          'El auto es un caso aparte: la importación de vehículos al Perú está regulada y no se resuelve dentro del menaje. Se evalúa antes de embarcar.',
          'La mascota nunca viaja en el contenedor: sale de Panamá con el trámite ante MIDA y MINSA y entra al Perú con el certificado sanitario oficial y las vacunas vigentes que exige la autoridad sanitaria agraria peruana.',
        ],
      },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: 'Requisitos de menaje de casa; posible tratamiento para menaje usado por cambio de residencia. Verificar condiciones vigentes.', taxes: TBD },
    faqs: [
      { q: '¿Llegan al interior del Perú?', a: 'Coordinamos la entrega a Lima y otras ciudades del país a través de nuestra red y el transporte de última milla. La carga marítima suele entrar por el Callao y continuar por carretera.' },
      { q: '¿Cuánto tarda?', a: 'El tiempo total combina el tránsito marítimo con los procesos de origen y destino (empaque, aduanas y entrega). Le confirmamos el estimado exacto de este corredor en su cotización.' },
      { q: '¿Puedo enviar mi menaje antes de mudarme?', a: 'Conviene coordinarlo. El régimen de menaje de casa de la SUNAT se apoya en una ventana de tiempo referida a su llegada al Perú: si la carga llega demasiado pronto o demasiado tarde respecto de esa fecha, puede quedar fuera del beneficio. Planificamos el embarque a partir de su fecha de viaje.' },
      { q: '¿Qué documentación necesito?', a: 'Habitualmente su pasaporte con los sellos migratorios, el carné de extranjería o la visa según su condición, y una lista de empaque valorada en español con cada bulto descrito por su contenido real, además de los documentos de transporte. Le entregamos la lista concreta al abrir su expediente.' },
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
      'Para quien sale de Panamá es uno de los destinos más amables que existen: misma moneda, mismo voltaje, mismos enchufes y una distancia corta. La exigencia está en el expediente aduanero, que se apoya en su condición migratoria.',
    ],
    sections: [
      {
        heading: 'Su mudanza a Ecuador, paso a paso',
        body: [
          'Preparamos su menaje con embalaje de exportación e inventario, gestionamos el flete y coordinamos con agentes ecuatorianos la desaduanización y la entrega final.',
          'El volumen se mide en metros cúbicos (CBM). En contenedor exclusivo (FCL) su menaje viaja solo y se sella en su casa; en contenedor compartido (LCL o groupage) comparte espacio con otras cargas, se consolida en un almacén antes de embarcar y se desconsolida en otro al llegar. Por la cercanía, ambas vías funcionan bien en este corredor.',
          'La carga marítima entra habitualmente por Guayaquil, el gran puerto del país, y desde ahí sube por carretera a Quito, Cuenca o Loja. Ese tramo terrestre —que en el caso de Quito significa ganar altura de forma considerable— está contemplado en el servicio puerta a puerta.',
        ],
        image: DIMG.containers,
      },
      {
        heading: 'La aduana ecuatoriana y el régimen de menaje de casa',
        body: [
          'En Ecuador la autoridad aduanera es el SENAE. Contempla un régimen de menaje de casa para quien se establece como residente en el país, con supuestos específicos para migrantes, jubilados y personas que retornan.',
          'El tratamiento está condicionado: que se acredite la residencia previa en el exterior durante un periodo continuado, que los bienes sean usados y de uso doméstico, que la importación se haga dentro de la ventana de tiempo referida a su llegada al país y que se declaren en una sola operación. Los plazos y límites exactos los confirmamos con el agente en destino para su expediente, porque cambian y dependen del tipo de visa.',
          'La documentación se apoya en la visa de residencia —el tipo de visa manda aquí más que en otros destinos—, el pasaporte con los sellos migratorios y una lista de empaque valorada, en español, con cada bulto descrito por su contenido real. Los artículos nuevos y sin usar no entran en el régimen: la aduana los puede tratar como mercancía.',
        ],
      },
      {
        heading: 'Quito, Guayaquil, Cuenca',
        body: [
          'Ecuador se ha convertido en uno de los destinos de retiro más elegidos del continente, y no solo por el costo de vida. Cuenca atrae por su casco colonial, su clima templado y su comunidad internacional; Quito, por ser la capital y por la altura que define su ritmo; Guayaquil, por el puerto, el calor y la actividad comercial.',
          'La altura de Quito y Cuenca es un factor práctico, no anecdótico: cambia cómo se siente el primer mes, y también cómo se planifica una entrega con escaleras. Vale la pena tenerlo en cuenta al decidir qué se lleva.',
        ],
        image: DIMG.port,
      },
      {
        heading: 'Antes de embarcar: lo que conviene resolver en Panamá',
        body: [
          'Tenga la visa resuelta antes de embarcar. En Ecuador el régimen de menaje se apoya en el tipo de visa y en la fecha de su llegada; una carga que se adelanta al trámite migratorio termina esperando en el puerto y acumulando almacenaje.',
          'Aquí no tiene que cambiar nada eléctrico: la red ecuatoriana funciona a 110 voltios y 60 hercios, igual que la panameña, y los enchufes son los mismos. Sus electrodomésticos funcionan tal cual. Ecuador también usa el dólar estadounidense, así que tampoco hay conversión de moneda que calcular.',
          'El auto no entra en el menaje. La importación de vehículos a Ecuador está regulada y se evalúa caso por caso antes de embarcar.',
          'La mascota nunca viaja en el contenedor: sale de Panamá con el trámite ante MIDA y MINSA y entra a Ecuador con el certificado sanitario oficial y las vacunas vigentes que exige la autoridad sanitaria ecuatoriana.',
        ],
      },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: 'Requisitos de menaje de casa; posibles beneficios para menaje usado por cambio de residencia. Verificar condiciones vigentes.', taxes: TBD },
    faqs: [
      { q: '¿Ecuador es buen destino para jubilados?', a: 'Es uno de los destinos de retiro más elegidos por su costo de vida y clima. Muchas de nuestras mudanzas a Ecuador son de nuevos residentes y jubilados, y el régimen de menaje del SENAE contempla supuestos específicos para ese perfil.' },
      { q: '¿Qué vía conviene?', a: 'El marítimo es lo más económico para casas completas; el aéreo, más rápido para envíos pequeños. Lo definimos según su volumen y tiempos.' },
      { q: '¿Tengo que cambiar mis electrodomésticos?', a: 'No. Ecuador usa 110 voltios y 60 hercios, igual que Panamá, con los mismos enchufes. Sus equipos funcionan sin transformador ni adaptador.' },
      { q: '¿Qué documentación pide la aduana ecuatoriana?', a: 'Habitualmente la visa de residencia —el tipo de visa determina el tratamiento—, el pasaporte con los sellos migratorios y una lista de empaque valorada en español con cada bulto descrito por su contenido real. Revisamos su caso y le entregamos la lista concreta al abrir el expediente.' },
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
      'Es uno de los corredores más largos que operamos y también uno de los menos indulgentes. La diferencia entre una llegada fluida y una factura inesperada casi nunca está en el barco: está en cómo se empacó y se declaró la carga en Panamá.',
    ],
    sections: [
      {
        heading: 'Bioseguridad: el factor decisivo',
        body: [
          'Nueva Zelanda inspecciona rigurosamente los efectos personales para proteger un ecosistema insular que no tiene defensas naturales frente a plagas importadas. El control lo ejerce la autoridad de industrias primarias, y su criterio es simple: lo que pueda traer un organismo vivo, no entra.',
          'Artículos con tierra, madera sin tratar, semillas, plantas, alimentos o material orgánico pueden ser tratados, retenidos, devueltos o destruidos, y el costo del tratamiento recae en el dueño de la carga. Un solo objeto mal preparado puede provocar la inspección completa del contenedor, con el gasto y la demora que eso arrastra.',
          'Por eso empacamos con criterio de bioseguridad desde el origen: se limpian a fondo el calzado de montaña, las herramientas de jardín, las bicicletas, el equipo de camping, deportivo y de pesca; se descartan plantas, semillas y alimentos; y se verifica el tratamiento de los embalajes y muebles de madera. Preparamos y declaramos su menaje conforme a estas normas para minimizar riesgos.',
        ],
        image: DIMG.containers,
      },
      {
        heading: 'La declaración de efectos personales y el despacho',
        body: [
          'La entrada de una mudanza a Nueva Zelanda se apoya en una declaración detallada de los efectos personales que llegan sin acompañante. No es un formalismo: es el documento sobre el que la autoridad decide si su contenedor pasa o se abre.',
          'El país contempla un tratamiento para los bienes personales usados de quien se establece como residente, condicionado a que los bienes hayan sido suyos y de su uso antes del traslado, a que se destinen a seguir usándose en su nuevo hogar y a que no se importen para vender. Los requisitos y plazos exactos los confirmamos con el agente en destino para su expediente.',
          'La documentación se apoya en el pasaporte, en el visado o permiso que ampara su residencia y en un inventario valorado y detallado en inglés, con cada bulto descrito por su contenido real. Aquí, más que en cualquier otro destino, un inventario vago se traduce directamente en una inspección.',
        ],
      },
      {
        heading: 'Auckland, Wellington y las dos islas',
        body: [
          'Nueva Zelanda atrae a familias y profesionales por su calidad de vida, su naturaleza y una escala de país que se siente manejable. Auckland concentra la mayoría de las llegadas y la actividad económica; Wellington, la capital, el gobierno y una vida cultural densa; Christchurch y la Isla Sur, espacio y paisaje.',
          'Es un destino donde la vida al aire libre es parte del contrato, y eso tiene una consecuencia práctica para su mudanza: precisamente el equipo que va a querer llevar —botas, carpas, bicicletas, cañas de pescar— es el que más atención recibe en la inspección. Limpiarlo bien antes de empacarlo no es un detalle menor.',
        ],
        image: DIMG.port,
      },
      {
        heading: 'Antes de embarcar: lo que conviene resolver en Panamá',
        body: [
          'Limpie, y después limpie otra vez. Suela de zapato, ruedas de bicicleta, palas, macetas vacías, sillas de jardín, equipo de camping. Es el trabajo más aburrido de la mudanza y el que más dinero ahorra en este destino.',
          'Revise el voltaje. La red neozelandesa funciona a 230 voltios y 50 hercios, con un tipo de enchufe propio de Oceanía; la panameña, a 110 voltios y 60 hercios. La electrónica moderna suele aceptar ambos rangos —lo dice la etiqueta de la fuente—, pero los electrodomésticos grandes con motor o resistencia normalmente no.',
          'El auto va por su propia vía, con normas de importación y de emisiones propias, y se evalúa caso por caso antes de embarcar. La mascota nunca viaja en el contenedor: sale de Panamá con el trámite ante MIDA y MINSA y entra a Nueva Zelanda bajo un régimen sanitario estricto que puede incluir cuarentena. Es un expediente aparte y se empieza con mucha antelación.',
          'Y decida qué no se lleva. En un corredor tan largo, cada metro cúbico pesa en el presupuesto. La mudanza más barata a Nueva Zelanda siempre es la que va más liviana.',
        ],
      },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: 'Controles de bioseguridad muy estrictos (cuarentena): inspección de tierra, madera, alimentos y material vegetal. Declaración cuidadosa imprescindible.', taxes: TBD },
    faqs: [
      { q: '¿Es tan estricta como Australia?', a: 'Sí, Nueva Zelanda aplica controles de bioseguridad muy rigurosos. Preparamos su menaje conforme a estas reglas para evitar tratamientos o rechazos en la inspección.' },
      { q: '¿Qué no debo enviar?', a: 'Evite artículos con tierra, madera sin tratar, semillas, plantas o alimentos. Le damos una guía de qué conviene enviar para pasar la inspección sin contratiempos.' },
      { q: '¿Qué pasa si la inspección encuentra algo?', a: 'El artículo puede ser tratado, retenido, devuelto o destruido, y el costo del tratamiento lo asume el dueño de la carga. Peor aún: un solo objeto mal preparado puede motivar la revisión completa del contenedor. Por eso empacamos con criterio de bioseguridad desde el origen.' },
      { q: '¿Puedo llevar a mi mascota?', a: 'No en el contenedor: nunca. Viaja por vía aérea, con salida tramitada ante MIDA y MINSA en Panamá y una entrada sujeta a un régimen sanitario estricto que puede incluir cuarentena en destino. Es un expediente independiente que conviene empezar mucho antes que la mudanza.' },
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
      'Hay una pregunta que en Japón se hace antes que cualquier otra, y no es cuánto cuesta el flete: es si sus muebles caben. Ese es el verdadero filtro de este corredor.',
    ],
    sections: [
      {
        heading: '¿Cabe? La pregunta que va primero',
        body: [
          'La vivienda japonesa está construida con otra lógica de espacio. Pasillos angostos, puertas más estrechas, escaleras interiores en ángulo, ascensores pequeños y edificios antiguos sin ascensor. Un sofá de tres cuerpos, un refrigerador grande o un armario de dos metros pueden ser perfectamente imposibles de meter en una casa que, sobre plano, parecía suficiente.',
          'De ahí sale una práctica local que sorprende a quien llega: en Japón es normal que los muebles voluminosos entren por la ventana, izados con grúa o plataforma. Es un servicio corriente, no una excentricidad, pero se contrata con antelación y tiene su costo.',
          'Por eso, en este destino, la inspección de volumen es también una conversación sobre qué vale la pena mover. El volumen se mide en metros cúbicos (CBM), y en un corredor tan largo cada metro cúbico se siente en el presupuesto. Muchas veces la recomendación honesta es dejar los muebles grandes y llevar lo que hace un hogar: lo personal, lo irreemplazable, lo que no se compra otra vez.',
        ],
        image: DIMG.containers,
      },
      {
        heading: 'La aduana japonesa y la declaración de efectos personales',
        body: [
          'La entrada de una mudanza a Japón se apoya en una declaración de efectos personales no acompañados, que se presenta vinculada a su propia llegada al país. La secuencia importa: el expediente se construye alrededor de la fecha en que usted entra a Japón y del documento migratorio que lo ampara.',
          'Los bienes personales usados de quien establece residencia reciben un tratamiento distinto al de una importación comercial, condicionado a que hayan sido suyos y de su uso antes del traslado y a que no se importen para vender. Los requisitos y plazos exactos los confirmamos con el agente en destino para su expediente.',
          'Japón es además estricto con ciertas categorías de artículos, y no siempre las que uno esperaría: hay medicamentos de venta libre en América cuya composición está prohibida allá, y hay restricciones sobre productos cárnicos, vegetales y algunos artículos de consumo. Revise su botiquín antes de empacarlo; es la sorpresa más frecuente de este destino.',
        ],
      },
      {
        heading: 'Tokio, Osaka, Yokohama y Nagoya',
        body: [
          'Japón recibe a profesionales, investigadores, docentes y familias por su economía, su seguridad y una calidad de vida urbana difícil de comparar. Tokio y Yokohama concentran la mayoría de las llegadas; Osaka, Kioto y Nagoya tienen su propio peso económico y un ritmo distinto.',
          'La operación en destino es ordenada hasta el detalle: horarios de acceso a los edificios, reservas del ascensor de servicio, normas de estacionamiento del camión que se cumplen sin excepción. Es un país cómodo de operar, siempre que todo esté coordinado con antelación. Improvisar el día de la entrega no funciona.',
        ],
        image: DIMG.plane,
      },
      {
        heading: 'Antes de embarcar: lo que conviene resolver en Panamá',
        body: [
          'Mida su vivienda de destino antes de decidir qué se lleva. Puerta de entrada, ancho de pasillos, curva de la escalera, medidas del ascensor. Con esos números en la mano, la decisión de qué embarcar deja de ser una apuesta.',
          'Revise el voltaje, que en Japón es un caso particular: la red funciona a 100 voltios —más bajo que en cualquier otro destino que operamos— y la frecuencia se divide en dos, 50 hercios en la zona de Tokio y 60 en la de Osaka. Sus equipos panameños de 110 voltios suelen tolerarlo, pero algunos aparatos con motor o temporizador se comportan distinto según la región. Revise la etiqueta de cada aparato.',
          'Revise el botiquín. Es la advertencia menos intuitiva y la que más problemas evita: hay medicamentos comunes en Panamá cuya composición no está permitida en Japón.',
          'El auto va por su propia vía, con homologación y matriculación japonesas, y se evalúa caso por caso. La mascota nunca viaja en el contenedor: sale de Panamá con el trámite ante MIDA y MINSA y entra a Japón bajo un régimen sanitario estricto que puede incluir cuarentena, con una secuencia de vacunas y pruebas que se empieza con mucha antelación.',
        ],
      },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: 'Normativa aduanera propia; documentación de efectos personales y artículos restringidos a verificar. Consultar requisitos vigentes.', taxes: TBD },
    faqs: [
      { q: '¿Conviene llevar todos mis muebles a Japón?', a: 'Normalmente no. Las viviendas japonesas son más compactas, con puertas, pasillos y ascensores más estrechos, y un mueble grande puede sencillamente no entrar. Conviene medir el destino antes de decidir. Le asesoramos en esa decisión durante la inspección.' },
      { q: '¿Cuánto tarda la mudanza?', a: 'Al ser un corredor lejano, el tránsito marítimo es más largo; el aéreo es más rápido para lo urgente. El tiempo total combina el tránsito con los procesos de origen y destino, y le confirmamos el estimado exacto en su cotización.' },
      { q: '¿Es verdad que los muebles entran por la ventana?', a: 'En Japón es una práctica habitual, no una rareza. Cuando la escalera o el ascensor no admiten un mueble, se iza por fachada con grúa o plataforma. Es un servicio corriente en destino, que se coordina con antelación y tiene un costo asociado.' },
      { q: '¿Hay cosas que no puedo llevar a Japón?', a: 'Sí, y algunas sorprenden: hay medicamentos de venta libre en América cuya composición está prohibida en Japón, además de restricciones sobre productos cárnicos, vegetales y ciertos artículos de consumo. Revise su botiquín antes de empacar y consúltenos si tiene dudas.' },
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
      'Es un corredor donde la aduana no se negocia y donde el permiso de residencia lo condiciona todo. Con el expediente bien armado es un destino perfectamente operable; sin él, la carga no se mueve.',
    ],
    sections: [
      {
        heading: 'Cómo trasladamos su hogar a China',
        body: [
          'Calculamos volumen, empacamos con materiales de exportación y gestionamos el flete de largo recorrido. Coordinamos con agentes en China la desaduanización y la entrega final en su ciudad de destino.',
          'El volumen se mide en metros cúbicos (CBM). En contenedor exclusivo (FCL) su menaje viaja solo y se sella en su casa; en contenedor compartido (LCL o groupage) comparte espacio con otras cargas, se consolida en un almacén antes de embarcar y se desconsolida en otro al llegar. Siendo un corredor largo, el volumen que decide dejar en Panamá es dinero que no gasta.',
          'La carga entra por uno de los grandes puertos chinos —Shanghái, Ningbo, Shenzhen o Tianjin, según su destino— y desde ahí sigue por vía terrestre. El puerto exacto depende del servicio contratado y se lo confirmamos en la cotización.',
        ],
        image: DIMG.containers,
      },
      {
        heading: 'La aduana china y el permiso que lo condiciona todo',
        body: [
          'China permite el ingreso de efectos personales de extranjeros que se establecen en el país, pero el trámite se apoya por completo en su situación migratoria: el permiso de residencia o el visado de trabajo es la pieza sin la cual no hay despacho. Una carga que llega antes que ese documento espera en el puerto, acumulando almacenaje.',
          'Hay además una regla de secuencia que conviene conocer desde el principio: el ingreso de efectos personales suele admitirse en una sola operación y dentro de una ventana de tiempo referida a su primera entrada al país con ese permiso. No se puede mandar la mitad ahora y la otra mitad el año que viene. El plan de embarque, por lo tanto, se hace al revés: primero su calendario migratorio, después la fecha del contenedor.',
          'La documentación se apoya en el pasaporte, el permiso de residencia o visado, y una lista de empaque valorada, detallada y traducida al chino, con cada bulto descrito por su contenido real. Aquí la traducción no es un adorno: es lo que el inspector lee.',
        ],
      },
      {
        heading: 'Shanghái, Pekín, Shenzhen, Cantón',
        body: [
          'China recibe a ejecutivos, docentes, investigadores y familias por su economía y por las oportunidades de un mercado enorme. Shanghái concentra la comunidad internacional y los servicios; Pekín, el gobierno, las universidades y las sedes; Shenzhen y Cantón, la industria y la tecnología del sur.',
          'Las distancias interiores son continentales y el país está muy bien conectado, pero la última milla varía mucho según la ciudad y el tipo de edificio. Los complejos residenciales suelen tener normas propias de acceso, horarios de servicio y reserva de ascensor. Se coordina con antelación.',
        ],
        image: DIMG.port,
      },
      {
        heading: 'Antes de embarcar: lo que conviene resolver en Panamá',
        body: [
          'No embarque antes de tener el permiso de residencia o el visado resuelto. Es la regla número uno de este corredor y la causa más común de cargas detenidas.',
          'Revise qué mete en las cajas. China regula el ingreso de material impreso, audiovisual y digital, así como de artículos religiosos, equipos de comunicaciones y drones, entre otras categorías. No es una cuestión de cantidad, es de contenido. Si tiene dudas sobre algo, pregúntenos antes de empacarlo, no después.',
          'Revise el voltaje. La red china funciona a 220 voltios y 50 hercios; la panameña, a 110 voltios y 60 hercios. La electrónica moderna suele aceptar ambos rangos —lo dice la etiqueta de la fuente—, pero los electrodomésticos grandes con motor o resistencia normalmente no.',
          'El auto va por su propia vía, con una importación fuertemente regulada, y se evalúa caso por caso. La mascota nunca viaja en el contenedor: sale de Panamá con el trámite ante MIDA y MINSA y entra a China bajo un régimen sanitario que puede incluir cuarentena, con reglas que además varían por ciudad.',
        ],
      },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: 'Normativa aduanera regulada; documentación de efectos personales y artículos restringidos a verificar. Consultar requisitos vigentes.', taxes: TBD },
    faqs: [
      { q: '¿A qué ciudades de China llegan?', a: 'Coordinamos a las principales ciudades y puertos, como Shanghái, Pekín, Shenzhen y Cantón, con entrega final a través de nuestra red de agentes.' },
      { q: '¿Qué documentación necesito?', a: 'El pasaporte, el permiso de residencia o el visado de trabajo que ampara su estancia, y una lista de empaque valorada, detallada y traducida al chino. Sin el documento migratorio no hay despacho posible, así que conviene tenerlo antes de embarcar.' },
      { q: '¿Puedo enviar mi mudanza en dos partes?', a: 'Normalmente no. El ingreso de efectos personales suele admitirse en una sola operación y dentro de una ventana de tiempo referida a su primera entrada al país con el permiso de residencia. Por eso planificamos el embarque a partir de su calendario migratorio.' },
      { q: '¿Hay artículos que no puedo llevar a China?', a: 'Sí. Están reguladas categorías como el material impreso, audiovisual y digital, los artículos religiosos, ciertos equipos de comunicaciones y los drones. El criterio es el contenido, no la cantidad. Consúltenos antes de empacar cualquier cosa que le genere dudas.' },
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
      'Es un destino logísticamente eficiente y culturalmente exigente. La aduana emiratí no es lenta: es minuciosa, y lo que revisa no siempre es lo que la gente espera.',
    ],
    sections: [
      {
        heading: 'Su mudanza a los Emiratos, paso a paso',
        body: [
          'Preparamos su menaje con embalaje de exportación e inventario, gestionamos el flete y coordinamos con agentes en los Emiratos la desaduanización y la entrega. El manejo de la documentación es clave en este destino.',
          'El volumen se mide en metros cúbicos (CBM). En contenedor exclusivo (FCL) su menaje viaja solo y se sella en su casa; en contenedor compartido (LCL o groupage) comparte espacio con otras cargas, se consolida en un almacén antes de embarcar y se desconsolida en otro al llegar.',
          'La carga entra por el sistema portuario emiratí, uno de los más eficientes del mundo, y desde ahí sigue por carretera hasta su domicilio. La infraestructura no suele ser el cuello de botella en este corredor; la documentación sí.',
        ],
        image: DIMG.containers,
      },
      {
        heading: 'La aduana de los Emiratos y la inspección de contenido',
        body: [
          'La importación de efectos personales a los Emiratos se apoya en su condición de residente: el visado de residencia y la identificación emiratí, o la constancia de que están en trámite, son las piezas centrales del expediente, junto con el pasaporte y una lista de empaque valorada y detallada.',
          'La particularidad de este destino es que la inspección de contenido es la norma, no la excepción. Los Emiratos revisan lo que entra con criterios regulatorios y también culturales, y el listado de artículos sensibles es más amplio de lo que la mayoría supone: bebidas alcohólicas, productos derivados del cerdo, material impreso y audiovisual considerado contrario a las normas locales, artículos religiosos de otras confesiones, ciertos medicamentos, equipos de comunicación y drones.',
          'No se trata de esconder nada: se trata de saber qué no debe subir al contenedor desde Panamá. Un artículo problemático no solo se retiene a sí mismo; puede detener toda la carga y convertir un despacho de rutina en un expediente largo. Le informamos con precisión antes de empacar.',
        ],
      },
      {
        heading: 'Dubái, Abu Dabi y el resto de los Emiratos',
        body: [
          'Los Emiratos reciben a profesionales de todo el mundo por sus oportunidades de negocio, su seguridad y una infraestructura urbana difícil de igualar. Dubái concentra la mayoría de las llegadas y la comunidad internacional; Abu Dabi, el sector público, la energía y las instituciones; Sharjah y los emiratos del norte, un costo de vida distinto.',
          'La entrega en destino es ordenada y previsible. Los edificios residenciales suelen exigir reserva del ascensor de servicio, permisos de acceso del edificio y ventanas horarias definidas. Y hay un factor climático que sí condiciona la operación: durante los meses más calurosos, la carga y descarga se planifica en horarios acotados.',
        ],
        image: DIMG.port,
      },
      {
        heading: 'Antes de embarcar: lo que conviene resolver en Panamá',
        body: [
          'Repase el contenido de su casa con nuestra lista antes de empacar. Es el paso que más problemas evita en este destino, y hay que hacerlo en Panamá: una vez sellado el contenedor, ya no hay marcha atrás.',
          'Tenga su visado de residencia resuelto o en trámite documentado antes de embarcar. El despacho emiratí se apoya en él.',
          'Revise el voltaje. La red emiratí funciona a 230 voltios y 50 hercios, con enchufes de tipo británico; la panameña, a 110 voltios y 60 hercios. La electrónica moderna suele aceptar ambos rangos —lo dice la etiqueta de la fuente—, pero los electrodomésticos grandes con motor o resistencia normalmente no.',
          'El auto va por su propia vía, con matriculación y homologación locales, y se evalúa caso por caso. La mascota nunca viaja en el contenedor: sale de Panamá con el trámite ante MIDA y MINSA y entra a los Emiratos con permiso de importación previo, microchip, vacunación antirrábica vigente y certificado sanitario oficial.',
        ],
      },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: 'Normativa aduanera propia con restricciones específicas sobre ciertos artículos. Verificar requisitos y artículos prohibidos vigentes.', taxes: TBD },
    faqs: [
      { q: '¿Hay artículos que no puedo llevar a Dubái?', a: 'Sí, y la lista es más amplia de lo que la mayoría supone: bebidas alcohólicas, productos derivados del cerdo, material impreso y audiovisual considerado contrario a las normas locales, artículos religiosos de otras confesiones, ciertos medicamentos, equipos de comunicación y drones. Le informamos con precisión qué se puede y qué no antes de mover su menaje.' },
      { q: '¿Marítimo o aéreo?', a: 'El marítimo es lo más económico para casas completas; el aéreo, más rápido para envíos pequeños o urgentes.' },
      { q: '¿Van a abrir mis cajas en la aduana?', a: 'La inspección de contenido es la norma en los Emiratos, no la excepción. Por eso el trabajo importante se hace antes de sellar el contenedor: repasamos con usted qué no debe embarcarse y preparamos un inventario detallado que sostenga la declaración.' },
      { q: '¿Qué documentación necesito?', a: 'El pasaporte, el visado de residencia y la identificación emiratí —o la constancia de que están en trámite— y una lista de empaque valorada y detallada. Le entregamos la lista concreta al abrir su expediente.' },
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
      'Dos países pequeños que viven del comercio marítimo, unidos por un corredor sorprendentemente fluido. La aduana singapurense es rápida y previsible; también es literal, y sanciona lo que otros países se limitan a desaconsejar.',
    ],
    sections: [
      {
        heading: 'Hub a hub',
        body: [
          'Tanto Panamá como Singapur son nodos logísticos de primer nivel, lo que se traduce en buenas conexiones. Preparamos su menaje con embalaje de exportación, gestionamos el flete y coordinamos con agentes locales la desaduanización y la entrega.',
          'El volumen se mide en metros cúbicos (CBM). En contenedor exclusivo (FCL) su menaje viaja solo y se sella en su casa; en contenedor compartido (LCL o groupage) comparte espacio con otras cargas, se consolida en un almacén antes de embarcar y se desconsolida en otro al llegar. En este corredor el compartido tiene buenas frecuencias por el propio volumen de tráfico del destino.',
          'La vivienda singapurense es, en general, más compacta que la panameña y con mucho almacenamiento ya integrado. Conviene tenerlo presente al decidir qué muebles vale la pena mover a la otra punta del mundo.',
        ],
        image: DIMG.containers,
      },
      {
        heading: 'La aduana de Singapur: eficiente y literal',
        body: [
          'Singapur aplica una normativa aduanera estricta y eficiente. Todo ingreso de carga requiere un permiso previo, y los bienes personales usados de quien se establece en el país reciben un tratamiento distinto al de una importación comercial, condicionado a que hayan sido suyos y de su uso antes del traslado y a que no se importen para vender.',
          'El expediente se apoya en el pasaporte, en el pase de empleo o el permiso de residencia que ampara su estancia, en una lista de empaque valorada y detallada, y en la declaración de que los bienes son de uso personal. Los requisitos y condiciones exactos los confirmamos con el agente en destino.',
          'Lo que distingue a Singapur no es el papeleo sino el rigor con el que se aplican las prohibiciones. Hay artículos perfectamente legales en Panamá cuya sola importación constituye una infracción allá: los cigarrillos electrónicos y todos los productos de vapeo, el chicle de venta comercial, el tabaco de mascar, ciertas publicaciones y algunos artículos de consumo corriente. No es una lista para leer por encima.',
        ],
      },
      {
        heading: 'Vivir en Singapur',
        body: [
          'Singapur recibe a profesionales de banca, tecnología, logística y comercio internacional, y a sus familias. Es una ciudad-estado ordenada, segura y multicultural, con inglés como lengua de trabajo y una comunidad internacional que hace el aterrizaje relativamente fácil.',
          'La entrega en destino es previsible y muy reglamentada. Los condominios y bloques residenciales exigen reserva del ascensor de servicio, permisos de acceso y ventanas horarias definidas, y a veces un depósito de garantía por posibles daños en áreas comunes. Se coordina con antelación; improvisar el día de la entrega no funciona en este destino.',
        ],
        image: DIMG.port,
      },
      {
        heading: 'Antes de embarcar: lo que conviene resolver en Panamá',
        body: [
          'Repase la lista de artículos prohibidos antes de empacar, con calma. Es el consejo más importante de este destino: no se trata de que le retengan una caja, sino de que ciertos artículos constituyen una infracción sancionable por su sola presencia en la carga.',
          'Tenga resuelto el pase de empleo o el permiso de residencia. El tratamiento de bienes personales se apoya en él.',
          'Revise el voltaje. La red singapurense funciona a 230 voltios y 50 hercios, con enchufes de tipo británico; la panameña, a 110 voltios y 60 hercios. La electrónica moderna suele aceptar ambos rangos —lo dice la etiqueta de la fuente—, pero los electrodomésticos grandes con motor o resistencia normalmente no.',
          'El auto es un caso aparte y particularmente difícil: Singapur regula la circulación de vehículos con un sistema de cuotas y costos de titularidad que hacen que importar un auto rara vez tenga sentido. Se evalúa antes de embarcar, y la recomendación honesta suele ser venderlo en Panamá. La mascota nunca viaja en el contenedor: sale con el trámite ante MIDA y MINSA y entra con permiso de importación previo, microchip, vacunación vigente y un régimen sanitario que puede incluir cuarentena.',
        ],
      },
    ],
    corridor: { transitTime: TBD, cost: TBD, customs: 'Normativa aduanera estricta y eficiente; ciertos artículos regulados. Verificar requisitos vigentes.', taxes: TBD },
    faqs: [
      { q: '¿Singapur es un destino ágil para mudanzas?', a: 'Sí. Al ser un hub logístico de primer nivel con aduana eficiente, el despacho suele ser ordenado siempre que la documentación esté completa, algo que gestionamos por usted.' },
      { q: '¿Qué vía conviene?', a: 'El marítimo para casas completas; el aéreo para envíos pequeños o urgentes. Lo definimos según su volumen y tiempos.' },
      { q: '¿Qué no puedo llevar a Singapur?', a: 'Hay artículos legales en Panamá cuya importación constituye una infracción en Singapur: los cigarrillos electrónicos y todos los productos de vapeo, el chicle de venta comercial, el tabaco de mascar y ciertas publicaciones, entre otros. Repasamos la lista con usted antes de empacar, porque aquí el error no se resuelve con una multa menor.' },
      { q: '¿Conviene llevar todos mis muebles?', a: 'La vivienda singapurense suele ser más compacta y viene con bastante almacenamiento integrado. En un corredor tan largo, cada metro cúbico cuenta: durante la inspección le decimos con franqueza qué vale la pena mover y qué no.' },
    ],
    related: ['china', 'japon', 'dubai'],
  },
];

export const destinationsByRegion = (regionId: string) =>
  destinations.filter((d) => d.regionId === regionId);

export const destinationBySlug = (slug: string) => destinations.find((d) => d.slug === slug);
