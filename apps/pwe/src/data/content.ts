/* ============================================================================
   Contenido de las páginas internas de PWE.

   FUENTE: el sitio publicado en panamaworldwideexpress.com (WordPress, una sola
   página), revisado el 2026-08-17. Los servicios, la gestión aduanera, el
   proceso y los materiales de embalaje salen de ahí, así que son afirmaciones
   que el cliente YA hace públicamente.

   ⚠️ Lo marcado con CONFIRMAR no tiene fuente: el sitio publicado no lo dice.
   Antes de quitar el noindex hay que validarlo. Ver docs/PWE-DATOS-POR-CONFIRMAR.md

   Regla de redacción: nada de cifras de volumen, certificaciones ni alianzas
   inventadas. Solo capacidad y proceso, que es lo que no se puede desmentir.
   ========================================================================== */

export type Locale = 'es' | 'en';

/* -------------------------------------------------------------------------
   SERVICIOS — los seis que el cliente lista en su sitio publicado.

   El sitio enumera: Mudanza Local, Mudanza Internacional, Reubicaciones,
   Embalajes, Transporte de Mascotas, Mudanza de Oficinas. En el texto de
   apertura también menciona transporte de vehículos, agrupado con mascotas.

   OJO: el sitio publicado NO vende carga comercial ni almacenaje como servicio
   propio. El almacenamiento aparece solo como extra dentro de una mudanza.
   ------------------------------------------------------------------------- */

export interface Service {
  slug: string;
  n: string;
  ic: string;
  title: string;
  tagline: string;
  body: string;
  bullets: string[];
  forWho: string;
}

export const services: Record<Locale, Service[]> = {
  es: [
    {
      slug: 'internacional',
      n: '01',
      ic: '🌎',
      title: 'Mudanza internacional',
      tagline: 'Desde y hacia Panamá, por aire, mar o tierra',
      body: 'Es el servicio en el que llevamos más tiempo. Coordinamos el traslado completo de tu menaje fuera del país y nos encargamos de los trámites aduaneros y legales, que es la parte donde la gente se atasca. Elegimos la ruta y el medio de transporte según el volumen, el destino y para cuándo lo necesitas.',
      bullets: [
        'Transporte aéreo, marítimo o terrestre según el destino',
        'Gestión aduanera completa: documentación, aranceles e impuestos',
        'Coordinación con las autoridades aduaneras del país de destino',
        'Red de socios de transporte en el exterior',
        'Entrega, desembalaje y colocación en tu nuevo hogar',
      ],
      forWho: 'Familias que se mudan al exterior, traslados laborales y panameños que regresan al país.',
    },
    {
      slug: 'local',
      n: '02',
      ic: '🚚',
      title: 'Mudanza local y nacional',
      tagline: 'Dentro de la ciudad y entre provincias',
      body: 'La mudanza de casa o apartamento, dentro de Ciudad de Panamá o hacia el interior. Mismo equipo y mismos materiales que usamos en una mudanza internacional: la diferencia es la distancia, no el cuidado.',
      bullets: [
        'Traslado dentro de la ciudad y hacia el interior del país',
        'Protección de muebles, electrodomésticos y objetos frágiles',
        'Desarmado y armado de mobiliario',
        'Cubrimos puertas y ventanas para no dañar el inmueble',
        'Retiramos los materiales de embalaje al terminar',
      ],
      forWho: 'Mudanzas de vivienda dentro de Panamá, ya sea en la ciudad o entre provincias.',
    },
    {
      slug: 'oficinas',
      n: '03',
      ic: '🏢',
      title: 'Mudanza de oficinas',
      tagline: 'Traslado de empresa con el mínimo corte de operación',
      body: 'Trasladamos oficinas y negocios completos. Se planifica para que el corte de operación sea el menor posible y para que el mobiliario, el equipo y el archivo lleguen en condiciones de trabajar, no solo de llegar.',
      bullets: [
        'Planificación por fases para no parar la operación',
        'Inventario y etiquetado de mobiliario y equipo',
        'Manejo de equipo informático',
        'Traslado de archivo físico',
        'Protección del inmueble de salida y de entrada',
      ],
      forWho: 'Empresas y negocios que cambian de local o abren sede nueva.',
    },
    {
      slug: 'reubicaciones',
      n: '04',
      ic: '🧭',
      title: 'Reubicaciones (Relocation)',
      tagline: 'Ayuda para instalarte, no solo para llegar',
      body: 'Mudarse de país no termina cuando llega el contenedor. Con nuestro servicio integral de Relocation te damos la información y el acompañamiento que hacen falta durante el proceso de integración, incluida la búsqueda de vivienda en el nuevo país.',
      bullets: [
        'Acompañamiento durante el proceso de integración',
        'Asistencia en la búsqueda de vivienda',
        'Orientación sobre los trámites del país de destino',
        'Servicios adicionales a medida según lo que necesites',
      ],
      forWho: 'Quien se traslada por trabajo y llega a un país que no conoce, y empresas que reubican personal.',
    },
    {
      slug: 'embalajes',
      n: '05',
      ic: '📦',
      title: 'Embalajes',
      tagline: 'El embalaje correcto según el objeto y el transporte',
      body: 'Nuestros especialistas te asesoran y eligen el embalaje adecuado según el método de transporte y el tipo de objeto. No es lo mismo preparar una caja para un camión que para semanas dentro de un contenedor cruzando el mar.',
      bullets: [
        'Cajas resistentes, envolturas protectoras y relleno para frágiles',
        'Embalaje elegido según el medio de transporte',
        'Etiquetado preciso de cada caja',
        'Inventario detallado de lo que se empaca',
        'Desembalaje en destino si lo necesitas',
      ],
      forWho: 'Se puede contratar solo, sin la mudanza, si prefieres mover tú y empacar bien.',
    },
    {
      slug: 'mascotas-vehiculos',
      n: '06',
      ic: '🐾',
      title: 'Mascotas y vehículos',
      tagline: 'Lo que no cabe en una caja',
      body: 'Dos traslados que casi nadie resuelve bien y que suelen ser lo que más preocupa: tu carro y tu mascota. Los coordinamos junto con el resto de la mudanza para que no tengas que contratar aparte ni cuadrar fechas con dos proveedores distintos.',
      bullets: [
        'Transporte de vehículos dentro y fuera del país',
        'Traslado de mascotas coordinado con tu mudanza',
        'Documentación específica de cada caso',
        'Coordinación de fechas con el resto del traslado',
      ],
      forWho: 'Quien se muda con carro, con mascota, o con ambos.',
    },
  ],
  en: [
    {
      slug: 'internacional',
      n: '01',
      ic: '🌎',
      title: 'International moving',
      tagline: 'To and from Panama, by air, sea, or land',
      body: 'This is the service we have been doing longest. We coordinate the full move of your household goods out of the country and handle the customs and legal paperwork, which is where people usually get stuck. We pick the route and the shipping mode based on volume, destination, and when you need it there.',
      bullets: [
        'Air, ocean, or overland transport depending on destination',
        'Full customs handling: paperwork, duties, and taxes',
        'Coordination with customs authorities at destination',
        'Network of transport partners abroad',
        'Delivery, unpacking, and placement in your new home',
      ],
      forWho: 'Families relocating abroad, work transfers, and Panamanians moving back home.',
    },
    {
      slug: 'local',
      n: '02',
      ic: '🚚',
      title: 'Local and domestic moving',
      tagline: 'Across the city and between provinces',
      body: 'The house or apartment move, within Panama City or out to the countryside. Same crew and same materials we use on an international move: the difference is distance, not care.',
      bullets: [
        'Moves within the city and out to the provinces',
        'Protection for furniture, appliances, and fragile items',
        'Furniture disassembly and reassembly',
        'We cover doors and window frames to protect the property',
        'We take the packing materials away when we finish',
      ],
      forWho: 'Household moves anywhere in Panama, in the city or between provinces.',
    },
    {
      slug: 'oficinas',
      n: '03',
      ic: '🏢',
      title: 'Office moving',
      tagline: 'Relocating a business with minimal downtime',
      body: 'We move whole offices and businesses. The plan is built so downtime stays as short as possible and so the furniture, equipment, and archive arrive ready to work, not just delivered.',
      bullets: [
        'Phased planning so operations do not stop',
        'Inventory and labeling of furniture and equipment',
        'IT equipment handling',
        'Physical archive relocation',
        'Protection for both properties, old and new',
      ],
      forWho: 'Companies and businesses changing premises or opening a new location.',
    },
    {
      slug: 'reubicaciones',
      n: '04',
      ic: '🧭',
      title: 'Relocation services',
      tagline: 'Help settling in, not just arriving',
      body: 'Moving countries does not end when the container arrives. Our full Relocation service gives you the information and support you need while you settle in, including help finding a place to live in the new country.',
      bullets: [
        'Support throughout the settling-in process',
        'Help finding housing',
        'Guidance on the destination country paperwork',
        'Additional services tailored to what you need',
      ],
      forWho: 'People relocating for work to a country they do not know, and companies relocating staff.',
    },
    {
      slug: 'embalajes',
      n: '05',
      ic: '📦',
      title: 'Packing',
      tagline: 'The right packing for the object and the transport',
      body: 'Our specialists advise you and choose the right packing based on the shipping method and the type of object. Preparing a box for a truck is not the same as preparing one for weeks inside a container crossing the ocean.',
      bullets: [
        'Sturdy boxes, protective wrapping, and padding for fragile items',
        'Packing chosen for the shipping method',
        'Precise labeling on every box',
        'Detailed inventory of what gets packed',
        'Unpacking at destination if you want it',
      ],
      forWho: 'Can be booked on its own, without the move, if you would rather transport it yourself but pack it properly.',
    },
    {
      slug: 'mascotas-vehiculos',
      n: '06',
      ic: '🐾',
      title: 'Pets and vehicles',
      tagline: 'The things that do not fit in a box',
      body: 'Two moves almost nobody handles well, and usually the two that worry people most: your car and your pet. We coordinate both alongside the rest of the move, so you are not hiring separately and juggling dates with two different providers.',
      bullets: [
        'Vehicle transport inside and outside the country',
        'Pet relocation coordinated with your move',
        'Case-specific documentation',
        'Dates coordinated with the rest of the move',
      ],
      forWho: 'Anyone moving with a car, with a pet, or with both.',
    },
  ],
};

/* -------------------------------------------------------------------------
   CÓMO TRABAJAMOS — todo esto sale del sitio publicado. Es lo que el cliente
   ya promete: evaluación gratuita en casa, presupuesto detallado sin sorpresas,
   inventario, y entrega con desembalaje y retiro de materiales.
   ------------------------------------------------------------------------- */

export interface Step {
  n: string;
  t: string;
  d: string;
}

export const process: Record<Locale, Step[]> = {
  es: [
    { n: '1', t: 'Nos escribes', d: 'Por el formulario o por WhatsApp, con el origen, el destino y la fecha aproximada.' },
    { n: '2', t: 'Evaluación gratuita', d: 'Un representante visita tu casa u oficina para ver la cantidad y el tipo de cosas que hay que mover. Sin costo y sin compromiso.' },
    { n: '3', t: 'Presupuesto detallado', d: 'Te damos el precio con todo desglosado: embalaje, transporte, seguro y trámites aduaneros. La idea es que no haya sorpresas después.' },
    { n: '4', t: 'Embalaje e inventario', d: 'Empacamos con el material adecuado para el transporte y anotamos todo. Cada caja va etiquetada.' },
    { n: '5', t: 'Transporte', d: 'Por aire, mar o tierra según lo acordado, con seguimiento del envío.' },
    { n: '6', t: 'Entrega e instalación', d: 'Descargamos, desembalamos y colocamos las cosas donde nos digas. Nos llevamos todos los materiales de embalaje.' },
  ],
  en: [
    { n: '1', t: 'You get in touch', d: 'Through the form or on WhatsApp, with origin, destination, and a rough date.' },
    { n: '2', t: 'Free assessment', d: 'A representative visits your home or office to see how much there is and what kind of things need moving. No cost, no commitment.' },
    { n: '3', t: 'Detailed quote', d: 'We give you the price broken down: packing, transport, insurance, and customs. The point is that nothing surprises you later.' },
    { n: '4', t: 'Packing and inventory', d: 'We pack with the right materials for the transport and write everything down. Every box gets labeled.' },
    { n: '5', t: 'Transport', d: 'By air, sea, or land as agreed, with tracking on the shipment.' },
    { n: '6', t: 'Delivery and setup', d: 'We unload, unpack, and place things where you tell us. We take all the packing materials away with us.' },
  ],
};

/* Servicios adicionales que el sitio publicado menciona como "a medida". */
export const extras: Record<Locale, string[]> = {
  es: [
    'Almacenamiento temporal de tus pertenencias',
    'Limpieza y mantenimiento de tu antigua vivienda',
    'Asistencia en la búsqueda de vivienda en el nuevo país',
    'Desembalaje y colocación en destino',
  ],
  en: [
    'Temporary storage for your belongings',
    'Cleaning and upkeep of your former home',
    'Help finding housing in the new country',
    'Unpacking and placement at destination',
  ],
};

/* -------------------------------------------------------------------------
   EMPRESA — sin historia inventada.

   El único dato de trayectoria con fuente es "más de 25 años", que el cliente
   publica en su propio hero. Se usa `claimedExperience` de site.ts para eso.
   No hay tamaño de flota, número de empleados, clientes ni certificaciones:
   nada de eso aparece en el sitio publicado.
   ------------------------------------------------------------------------- */

export interface Principle {
  k: string;
  t: string;
  d: string;
}

export const principles: Record<Locale, Principle[]> = {
  es: [
    { k: '01', t: 'La evaluación es gratis', d: 'Vamos a ver qué hay que mover antes de dar un precio. Cualquier cotización hecha sin ver la casa es una adivinanza.' },
    { k: '02', t: 'Presupuesto sin sorpresas', d: 'El precio se entrega desglosado: embalaje, transporte, seguro y aduana. Lo que no esté incluido, se dice antes, no en la factura.' },
    { k: '03', t: 'Nos encargamos de la aduana', d: 'Preparamos y presentamos la documentación, pagamos aranceles e impuestos y coordinamos con las autoridades. No lidias tú con eso.' },
    { k: '04', t: 'Inventario de todo', d: 'Lo que se empaca se anota y se etiqueta. Así se sabe qué hay, dónde va y si algo falta.' },
    { k: '05', t: 'Cuidamos también el inmueble', d: 'Cubrimos puertas y ventanas antes de sacar muebles. La casa u oficina queda en el mismo estado en que estaba.' },
    { k: '06', t: 'Terminamos el trabajo', d: 'No dejamos cajas apiladas. Desembalamos, colocamos donde nos digas y nos llevamos todo el material de embalaje.' },
  ],
  en: [
    { k: '01', t: 'The assessment is free', d: 'We come and see what needs moving before quoting a price. Any quote made without seeing the place is a guess.' },
    { k: '02', t: 'A quote with no surprises', d: 'The price comes broken down: packing, transport, insurance, customs. Whatever is not included gets said upfront, not on the invoice.' },
    { k: '03', t: 'We handle customs', d: 'We prepare and file the paperwork, pay duties and taxes, and coordinate with the authorities. You do not deal with it.' },
    { k: '04', t: 'Everything inventoried', d: 'What gets packed gets written down and labeled. So you know what there is, where it goes, and whether anything is missing.' },
    { k: '05', t: 'We protect the property too', d: 'We cover doors and window frames before moving furniture out. The home or office is left the way we found it.' },
    { k: '06', t: 'We finish the job', d: 'We do not leave stacks of boxes behind. We unpack, place things where you want them, and take all the packing material with us.' },
  ],
};

/* -------------------------------------------------------------------------
   COBERTURA
   ⚠️ CONFIRMAR TODO ESTE BLOQUE. El sitio publicado NO habla de cobertura por
   provincia ni nombra ciudades. Lo único que dice es "local, nacional e
   internacional". Las ciudades de abajo son una propuesta razonable para
   Panamá, no un dato del cliente.

   Dato relevante: la dirección del cliente es el Aeropuerto de Carga, lo que
   sugiere que su fuerte real es el movimiento internacional, no una red
   nacional por provincias. Vale la pena preguntarle antes de publicar esto.
   ------------------------------------------------------------------------- */

export interface Zone {
  name: string;
  places: string[];
  note: string;
}

export const zones: Record<Locale, Zone[]> = {
  es: [
    { name: 'Área metropolitana', places: ['Ciudad de Panamá', 'San Miguelito', 'Panamá Oeste', 'Arraiján', 'La Chorrera'], note: 'Donde operamos a diario.' },
    { name: 'Costa e interior', places: ['Coronado', 'Chame', 'Penonomé', 'Santiago'], note: 'Ruta frecuente desde la capital.' },
    { name: 'Azuero', places: ['Chitré', 'Las Tablas', 'Los Santos'], note: 'Se coordina por fecha para agrupar la ruta.' },
    { name: 'Chiriquí', places: ['David', 'Boquete', 'Volcán'], note: 'Destino habitual de traslados desde la capital.' },
    { name: 'Caribe y Bocas', places: ['Colón', 'Bocas del Toro', 'Changuinola'], note: 'Colón también es punto de entrada y salida de carga marítima.' },
  ],
  en: [
    { name: 'Metro area', places: ['Panama City', 'San Miguelito', 'Panamá Oeste', 'Arraiján', 'La Chorrera'], note: 'Where we operate daily.' },
    { name: 'Coast and countryside', places: ['Coronado', 'Chame', 'Penonomé', 'Santiago'], note: 'A frequent route from the capital.' },
    { name: 'Azuero', places: ['Chitré', 'Las Tablas', 'Los Santos'], note: 'Scheduled by date so we can group the route.' },
    { name: 'Chiriquí', places: ['David', 'Boquete', 'Volcán'], note: 'A regular destination for moves from the capital.' },
    { name: 'Caribbean and Bocas', places: ['Colón', 'Bocas del Toro', 'Changuinola'], note: 'Colón is also an entry and exit point for ocean freight.' },
  ],
};

/* ⚠️ CONFIRMAR: el sitio publicado no nombra ningún corredor ni país de
   destino concreto. Solo dice que tiene "una amplia red de socios de transporte
   internacional". Preguntar cuáles son sus destinos reales más frecuentes. */
export interface Corridor {
  to: string;
  via: string;
  detail: string;
}

export const corridors: Record<Locale, Corridor[]> = {
  es: [
    { to: 'Estados Unidos', via: 'Marítimo · Aéreo', detail: 'Destino frecuente de mudanzas familiares y de traslados laborales.' },
    { to: 'España y Europa', via: 'Contenedor · Puerta a puerta', detail: 'Mudanzas completas de menaje con gestión aduanera en destino.' },
    { to: 'Latinoamérica', via: 'Terrestre · Marítimo', detail: 'Colombia, Costa Rica y el resto de Centroamérica.' },
    { to: 'Resto del mundo', via: 'Según destino', detail: 'Se cotiza caso por caso según volumen, ruta y urgencia.' },
  ],
  en: [
    { to: 'United States', via: 'Ocean · Air', detail: 'A frequent destination for family moves and work transfers.' },
    { to: 'Spain and Europe', via: 'Container · Door to door', detail: 'Full household moves with customs handled at destination.' },
    { to: 'Latin America', via: 'Overland · Ocean', detail: 'Colombia, Costa Rica, and the rest of Central America.' },
    { to: 'Rest of the world', via: 'Depends on destination', detail: 'Quoted case by case by volume, route, and urgency.' },
  ],
};

/* -------------------------------------------------------------------------
   RECURSOS — conocimiento del oficio, no depende de datos del cliente.
   Es lo único de este archivo publicable tal cual.
   ------------------------------------------------------------------------- */

export interface Resource {
  ic: string;
  t: string;
  d: string;
  items: string[];
}

export const resources: Record<Locale, Resource[]> = {
  es: [
    {
      ic: '📋',
      t: 'Antes de pedir cotización',
      d: 'Lo que conviene tener a mano para que el precio que te den sea el precio real.',
      items: [
        'Cuántas recámaras tiene la casa u oficina',
        'Si hay piano, caja fuerte, obras de arte o algo fuera de lo común',
        'En qué piso estás y si hay ascensor de carga',
        'Si el camión puede estacionar cerca de la puerta',
        'La fecha en que entregas el lugar actual',
      ],
    },
    {
      ic: '📦',
      t: 'Qué no debe ir en el camión',
      d: 'Cosas que por seguridad o por aduana no viajan con el menaje.',
      items: [
        'Documentos personales, pasaportes y escrituras',
        'Joyas, efectivo y objetos de valor pequeños',
        'Medicinas de uso diario',
        'Líquidos inflamables, gas y aerosoles',
        'Plantas y alimentos perecederos',
      ],
    },
    {
      ic: '🌎',
      t: 'Mudanza internacional: los tiempos reales',
      d: 'Lo que la gente subestima cuando planifica una salida del país.',
      items: [
        'El contenedor marítimo tarda semanas, no días',
        'La aduana de destino puede retener la carga para inspección',
        'Empezar la documentación con un mes de anticipación',
        'Cada país tiene reglas distintas sobre menaje usado',
        'El envío aéreo cuesta más pero te salva la primera semana',
      ],
    },
    {
      ic: '🐾',
      t: 'Mudarse con mascota',
      d: 'Lo que hay que resolver con tiempo si tu mascota viaja contigo.',
      items: [
        'Certificado veterinario y vacunas al día',
        'Cada país exige documentación distinta',
        'Algunos destinos aplican cuarentena a la llegada',
        'Reservar el transportín del tamaño correcto',
        'Coordinar la fecha del vuelo con la de la mudanza',
      ],
    },
  ],
  en: [
    {
      ic: '📋',
      t: 'Before you ask for a quote',
      d: 'What to have on hand so the price you get is the price you pay.',
      items: [
        'How many bedrooms the home or office has',
        'Whether there is a piano, safe, artwork, or anything unusual',
        'What floor you are on and whether there is a service elevator',
        'Whether the truck can park near the door',
        'The date you hand over your current place',
      ],
    },
    {
      ic: '📦',
      t: 'What should not go on the truck',
      d: 'Things that, for safety or customs reasons, do not travel with household goods.',
      items: [
        'Personal documents, passports, and deeds',
        'Jewelry, cash, and small valuables',
        'Daily medication',
        'Flammable liquids, gas, and aerosols',
        'Plants and perishable food',
      ],
    },
    {
      ic: '🌎',
      t: 'International moves: the real timeline',
      d: 'What people underestimate when planning a move out of the country.',
      items: [
        'Ocean containers take weeks, not days',
        'Customs at destination can hold the shipment for inspection',
        'Start the paperwork a month ahead',
        'Every country has different rules on used household goods',
        'Air freight costs more but saves your first week',
      ],
    },
    {
      ic: '🐾',
      t: 'Moving with a pet',
      d: 'What to sort out early if your pet travels with you.',
      items: [
        'Vet certificate and vaccinations up to date',
        'Every country requires different paperwork',
        'Some destinations apply quarantine on arrival',
        'Book a carrier in the right size',
        'Line up the flight date with the moving date',
      ],
    },
  ],
};
