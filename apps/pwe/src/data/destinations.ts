/* ============================================================================
   Destinos internacionales — una página por país.

   Es el motor SEO del sector: la gente no busca "empresa de mudanzas", busca
   "mudanza de Panamá a España". Reemplaza a la vieja sección "Cobertura", que
   prometía una red nacional por provincias que el cliente nunca ha afirmado.

   ⚠️ CONFIRMAR CON EL CLIENTE:
   - Que efectivamente opera estos corredores y con qué socio en destino.
   - Los tiempos de tránsito. Los de abajo son rangos estándar del sector,
     deliberadamente amplios. Si el cliente tiene datos propios, usar los suyos.
   - Nada aquí promete precios, y así debe quedarse hasta que el cliente los dé.

   Las notas aduaneras describen el tipo de requisito que cada país suele pedir
   para menaje usado. Se redactaron en términos generales a propósito: las reglas
   cambian y una web no es una asesoría aduanera. Cada página remite a la
   evaluación gratuita para el caso concreto.
   ========================================================================== */

import type { Locale } from './content';

export interface Destination {
  slug: { es: string; en: string };
  /** Emoji de bandera, se usa como marca visual en las tarjetas */
  flag: string;
  country: { es: string; en: string };
  /** Ciudades de entrada habituales */
  gateways: string[];
  /** Rango de tránsito marítimo estimado, en semanas */
  seaWeeks: string;
  /** Rango de tránsito aéreo estimado, en días */
  airDays: string;
  /** true = corredor principal, sale destacado en el índice */
  featured?: boolean;
  metaTitle: { es: string; en: string };
  metaDescription: { es: string; en: string };
  intro: { es: string; en: string };
  /** Quién se muda a este país desde Panamá */
  profile: { es: string; en: string };
  /** Qué tener en cuenta de la aduana de ese país */
  customs: { es: string; en: string };
  /** Consejo práctico específico del corredor */
  tip: { es: string; en: string };
}

export const destinations: Destination[] = [
  {
    slug: { es: 'estados-unidos', en: 'united-states' },
    flag: '🇺🇸',
    country: { es: 'Estados Unidos', en: 'United States' },
    gateways: ['Miami', 'Houston', 'Nueva York'],
    seaWeeks: '2 a 4',
    airDays: '3 a 7',
    featured: true,
    metaTitle: {
      es: 'Mudanza de Panamá a Estados Unidos | PWE',
      en: 'Moving from Panama to the United States | PWE',
    },
    metaDescription: {
      es: 'Mudanzas de Panamá a Estados Unidos: contenedor marítimo o aéreo vía Miami, Houston o Nueva York, con gestión aduanera. Cotiza gratis.',
      en: 'Moving from Panama to the United States: ocean or air freight via Miami, Houston, or New York, with customs handled. Free quote.',
    },
    intro: {
      es: 'Es el corredor más transitado desde Panamá y el más corto por vía marítima. Miami es el puerto de entrada habitual, desde donde se reexpide por tierra al resto del país, así que una mudanza a Denver o a Chicago pasa igual por Florida.',
      en: 'This is the busiest corridor out of Panama and the shortest by sea. Miami is the usual port of entry, with onward forwarding overland across the country, so a move to Denver or Chicago still routes through Florida.',
    },
    profile: {
      es: 'Traslados laborales, estudiantes, familias con residencia y panameños con doble vida entre ambos países.',
      en: 'Work transfers, students, families with residency, and Panamanians splitting life between both countries.',
    },
    customs: {
      es: 'Estados Unidos permite entrar menaje usado sin arancel cuando ha estado en uso y viaja con la persona que se muda. Hace falta el inventario valorado y el formulario de aduana correspondiente. Los artículos nuevos y sin usar sí pagan.',
      en: 'The US allows used household goods in duty-free when they have been in use and travel with the person relocating. The valued inventory and the corresponding customs form are required. New, unused items are dutiable.',
    },
    tip: {
      es: 'Si tu destino final está lejos de la costa este, pregunta por el costo de la reexpedición terrestre desde Miami antes de decidir: a veces conviene más un puerto distinto.',
      en: 'If your final destination is far from the east coast, ask about overland forwarding cost from Miami before deciding: sometimes a different port works out better.',
    },
  },
  {
    slug: { es: 'espana', en: 'spain' },
    flag: '🇪🇸',
    country: { es: 'España', en: 'Spain' },
    gateways: ['Valencia', 'Barcelona', 'Algeciras'],
    seaWeeks: '4 a 6',
    airDays: '4 a 8',
    featured: true,
    metaTitle: {
      es: 'Mudanza de Panamá a España | Contenedor y Aduana | PWE',
      en: 'Moving from Panama to Spain | Container and Customs | PWE',
    },
    metaDescription: {
      es: 'Mudanzas de Panamá a España: contenedor completo o compartido a Valencia y Barcelona, con gestión aduanera y entrega puerta a puerta.',
      en: 'Moving from Panama to Spain: full or shared container to Valencia and Barcelona, with customs handling and door-to-door delivery.',
    },
    intro: {
      es: 'El destino europeo más frecuente desde Panamá, casi siempre por vía marítima porque suelen ser mudanzas familiares completas. Valencia y Barcelona son los puertos habituales, con entrega por carretera a cualquier punto de la península.',
      en: 'The most frequent European destination from Panama, almost always by sea because these tend to be full household moves. Valencia and Barcelona are the usual ports, with road delivery anywhere on the peninsula.',
    },
    profile: {
      es: 'Familias que se establecen en España, jubilados, y quien tiene doble nacionalidad o vínculos familiares.',
      en: 'Families settling in Spain, retirees, and people with dual nationality or family ties.',
    },
    customs: {
      es: 'La Unión Europea exime de arancel el menaje usado si has residido fuera al menos doce meses y los bienes llevan tiempo en tu poder. Piden certificado de baja consular o equivalente, y hay un plazo para importar contado desde tu llegada.',
      en: 'The EU exempts used household goods from duty if you have lived outside at least twelve months and have owned the goods for a period. A consular deregistration certificate or equivalent is required, and there is a deadline to import counted from your arrival.',
    },
    tip: {
      es: 'El plazo para importar tu menaje corre desde que estableces residencia, no desde que embarcas. Si vas a llegar mucho antes que tu contenedor, avísanos para cuadrar las fechas.',
      en: 'The import window starts when you establish residency, not when you ship. If you will land well before your container, tell us so we can line the dates up.',
    },
  },
  {
    slug: { es: 'colombia', en: 'colombia' },
    flag: '🇨🇴',
    country: { es: 'Colombia', en: 'Colombia' },
    gateways: ['Cartagena', 'Barranquilla', 'Bogotá'],
    seaWeeks: '1 a 3',
    airDays: '2 a 5',
    featured: true,
    metaTitle: {
      es: 'Mudanza de Panamá a Colombia | PWE',
      en: 'Moving from Panama to Colombia | PWE',
    },
    metaDescription: {
      es: 'Mudanzas de Panamá a Colombia por vía marítima o aérea. Cartagena y Barranquilla como puertos de entrada, con gestión aduanera completa.',
      en: 'Moving from Panama to Colombia by sea or air. Cartagena and Barranquilla as ports of entry, with full customs handling.',
    },
    intro: {
      es: 'El corredor más corto de todos: son países vecinos y el tránsito marítimo se mide en días, no en semanas. Cartagena y Barranquilla reciben la carga, y de ahí sale por carretera a Bogotá, Medellín o donde haga falta.',
      en: 'The shortest corridor of all: neighboring countries, with sea transit measured in days rather than weeks. Cartagena and Barranquilla receive the shipment, and it goes overland from there to Bogotá, Medellín, or wherever it needs to be.',
    },
    profile: {
      es: 'Movimiento constante en ambos sentidos por trabajo, negocios y familia. Es probablemente el corredor con más ida y vuelta.',
      en: 'Constant movement in both directions for work, business, and family. Probably the corridor with the most back and forth.',
    },
    customs: {
      es: 'Colombia da trato de menaje doméstico a los bienes usados de quien traslada su residencia, con condiciones sobre el tiempo previo en el exterior. Hay listas de bienes restringidos que conviene revisar antes de empacar.',
      en: 'Colombia grants household-goods treatment to used belongings of people relocating their residence, with conditions on time previously spent abroad. There are restricted-goods lists worth reviewing before packing.',
    },
    tip: {
      es: 'Al ser un tránsito corto, la aduana suele ser la parte más lenta del proceso, no el barco. Vale la pena tener la documentación lista antes de embarcar.',
      en: 'Because transit is short, customs is usually the slowest part of the process, not the ship. It pays to have the paperwork ready before loading.',
    },
  },
  {
    slug: { es: 'costa-rica', en: 'costa-rica' },
    flag: '🇨🇷',
    country: { es: 'Costa Rica', en: 'Costa Rica' },
    gateways: ['Frontera terrestre', 'Puerto Limón', 'San José'],
    seaWeeks: '1 a 2',
    airDays: '2 a 4',
    metaTitle: {
      es: 'Mudanza de Panamá a Costa Rica | Terrestre y Marítima | PWE',
      en: 'Moving from Panama to Costa Rica | Overland and Sea | PWE',
    },
    metaDescription: {
      es: 'Mudanzas de Panamá a Costa Rica por vía terrestre o marítima, con trámite aduanero de frontera. Cotiza gratis con PWE.',
      en: 'Moving from Panama to Costa Rica overland or by sea, with border customs handling. Free quote from PWE.',
    },
    intro: {
      es: 'Es de los pocos destinos internacionales que se puede hacer por carretera, cruzando la frontera de Paso Canoas. Para volúmenes medianos suele ser la opción más rápida y directa, sin puerto de por medio.',
      en: 'One of the few international destinations that can go by road, crossing at Paso Canoas. For medium volumes it is usually the fastest and most direct option, with no port involved.',
    },
    profile: {
      es: 'Traslados laborales dentro de la región, jubilados y familias que se mueven entre ambos países.',
      en: 'Regional work transfers, retirees, and families moving between the two countries.',
    },
    customs: {
      es: 'Costa Rica aplica su régimen de menaje de casa a quien acredita cambio de residencia. La vía terrestre implica trámite en frontera, que hay que coordinar con anticipación para no dejar el camión esperando.',
      en: 'Costa Rica applies its household-goods regime to anyone proving a change of residence. The overland route means border processing, which has to be arranged in advance to avoid leaving the truck waiting.',
    },
    tip: {
      es: 'La vía terrestre ahorra tiempo pero exige que la documentación esté impecable: en la frontera no hay margen para resolver un papel que falta.',
      en: 'The overland route saves time but demands flawless paperwork: at the border there is no room to sort out a missing document.',
    },
  },
  {
    slug: { es: 'mexico', en: 'mexico' },
    flag: '🇲🇽',
    country: { es: 'México', en: 'Mexico' },
    gateways: ['Veracruz', 'Manzanillo', 'Ciudad de México'],
    seaWeeks: '2 a 4',
    airDays: '3 a 6',
    metaTitle: {
      es: 'Mudanza de Panamá a México | PWE',
      en: 'Moving from Panama to Mexico | PWE',
    },
    metaDescription: {
      es: 'Mudanzas de Panamá a México vía Veracruz o Manzanillo, con gestión aduanera y entrega en Ciudad de México, Guadalajara o Monterrey.',
      en: 'Moving from Panama to Mexico via Veracruz or Manzanillo, with customs handling and delivery in Mexico City, Guadalajara, or Monterrey.',
    },
    intro: {
      es: 'Veracruz es el puerto natural desde Panamá por el Atlántico, y Manzanillo si el destino final está en el Pacífico. La elección del puerto cambia bastante el costo del tramo terrestre, así que conviene decidirlo según la ciudad de destino.',
      en: 'Veracruz is the natural port from Panama on the Atlantic side, and Manzanillo if the final destination is on the Pacific. The port choice changes the overland leg cost quite a bit, so it is worth deciding based on the destination city.',
    },
    profile: {
      es: 'Traslados corporativos, personal de multinacionales y familias que se establecen por trabajo.',
      en: 'Corporate transfers, multinational staff, and families settling for work.',
    },
    customs: {
      es: 'México exige un menaje de casa detallado y valorado, y su aduana es estricta con los inventarios genéricos. Un renglón que diga "caja de cocina" sin desglosar es motivo de revisión.',
      en: 'Mexico requires a detailed, valued household inventory, and its customs is strict about generic listings. A line that reads "kitchen box" without a breakdown invites inspection.',
    },
    tip: {
      es: 'Aquí el inventario detallado no es formalismo: es lo que decide si tu contenedor sale en días o se queda en revisión. Lo preparamos con ese nivel de detalle desde el empaque.',
      en: 'Here the detailed inventory is not a formality: it decides whether your container clears in days or sits under inspection. We prepare it at that level of detail from the packing stage.',
    },
  },
  {
    slug: { es: 'canada', en: 'canada' },
    flag: '🇨🇦',
    country: { es: 'Canadá', en: 'Canada' },
    gateways: ['Montreal', 'Toronto', 'Vancouver'],
    seaWeeks: '3 a 5',
    airDays: '4 a 8',
    metaTitle: {
      es: 'Mudanza de Panamá a Canadá | PWE',
      en: 'Moving from Panama to Canada | PWE',
    },
    metaDescription: {
      es: 'Mudanzas de Panamá a Canadá por vía marítima o aérea, con entrega en Montreal, Toronto o Vancouver y gestión aduanera completa.',
      en: 'Moving from Panama to Canada by sea or air, with delivery in Montreal, Toronto, or Vancouver and full customs handling.',
    },
    intro: {
      es: 'Destino habitual de residencia permanente y estudios. La costa este entra por Montreal y la oeste por Vancouver, con diferencias de tiempo y costo considerables entre una y otra.',
      en: 'A common destination for permanent residency and study. The east coast enters through Montreal and the west through Vancouver, with considerable differences in time and cost between them.',
    },
    profile: {
      es: 'Familias con residencia permanente, estudiantes de posgrado y traslados profesionales.',
      en: 'Families with permanent residency, graduate students, and professional transfers.',
    },
    customs: {
      es: 'Canadá permite entrar efectos personales usados libres de arancel a quien se establece, con una lista de bienes declarada al llegar. Hay restricciones específicas sobre alimentos, plantas y productos de madera.',
      en: 'Canada allows used personal effects in duty-free for those settling, with a goods list declared on arrival. There are specific restrictions on food, plants, and wood products.',
    },
    tip: {
      es: 'La lista de bienes que declaras al entrar al país debe cuadrar con lo que llega después en el contenedor. Si algo no está en esa lista, puede pagar arancel.',
      en: 'The goods list you declare on arrival must match what shows up later in the container. Anything missing from that list can end up dutiable.',
    },
  },
  {
    slug: { es: 'chile', en: 'chile' },
    flag: '🇨🇱',
    country: { es: 'Chile', en: 'Chile' },
    gateways: ['Valparaíso', 'San Antonio', 'Santiago'],
    seaWeeks: '3 a 5',
    airDays: '3 a 7',
    metaTitle: {
      es: 'Mudanza de Panamá a Chile | PWE',
      en: 'Moving from Panama to Chile | PWE',
    },
    metaDescription: {
      es: 'Mudanzas de Panamá a Chile vía Valparaíso o San Antonio, con gestión aduanera y entrega en Santiago o cualquier región.',
      en: 'Moving from Panama to Chile via Valparaíso or San Antonio, with customs handling and delivery in Santiago or any region.',
    },
    intro: {
      es: 'Ruta por el Pacífico con entrada por Valparaíso o San Antonio y entrega terrestre a Santiago y regiones. Es un tránsito largo, así que el embalaje tiene que aguantar semanas de humedad y movimiento.',
      en: 'A Pacific route entering through Valparaíso or San Antonio with overland delivery to Santiago and the regions. It is a long transit, so packing has to withstand weeks of humidity and movement.',
    },
    profile: {
      es: 'Traslados corporativos, profesionales del sector minero y energético, y familias que se establecen.',
      en: 'Corporate transfers, mining and energy professionals, and families settling in.',
    },
    customs: {
      es: 'Chile tiene controles fitosanitarios estrictos: productos de madera, plantas y alimentos reciben atención especial en la inspección. El menaje usado de quien cambia residencia tiene tratamiento propio.',
      en: 'Chile has strict phytosanitary controls: wood products, plants, and food get particular attention at inspection. Used household goods of people changing residence get their own treatment.',
    },
    tip: {
      es: 'Los muebles de madera sin tratar pueden generar demoras en la inspección fitosanitaria. Conviene mencionarlos en la evaluación para prepararlos como corresponde.',
      en: 'Untreated wood furniture can cause delays at phytosanitary inspection. Worth flagging during the assessment so we prepare it properly.',
    },
  },
  {
    slug: { es: 'argentina', en: 'argentina' },
    flag: '🇦🇷',
    country: { es: 'Argentina', en: 'Argentina' },
    gateways: ['Buenos Aires', 'Zárate'],
    seaWeeks: '4 a 6',
    airDays: '4 a 8',
    metaTitle: {
      es: 'Mudanza de Panamá a Argentina | PWE',
      en: 'Moving from Panama to Argentina | PWE',
    },
    metaDescription: {
      es: 'Mudanzas de Panamá a Argentina con entrada por Buenos Aires, gestión aduanera y entrega puerta a puerta. Cotiza gratis.',
      en: 'Moving from Panama to Argentina entering through Buenos Aires, with customs handling and door-to-door delivery. Free quote.',
    },
    intro: {
      es: 'Entrada por el puerto de Buenos Aires y distribución terrestre desde ahí. Es de los tránsitos más largos de la región y con una aduana que exige documentación cuidadosa.',
      en: 'Entry through the port of Buenos Aires and overland distribution from there. It is one of the longest transits in the region, with customs that demands careful documentation.',
    },
    profile: {
      es: 'Retornados, traslados laborales y familias con vínculos en ambos países.',
      en: 'Returning nationals, work transfers, and families with ties in both countries.',
    },
    customs: {
      es: 'Argentina aplica un régimen específico de menaje para quien acredita cambio de residencia, con requisitos sobre el tiempo previo en el exterior. La documentación consular suele ser parte del trámite.',
      en: 'Argentina applies a specific household-goods regime to those proving a change of residence, with requirements on prior time abroad. Consular documentation is often part of the process.',
    },
    tip: {
      es: 'Empieza el trámite consular apenas tengas fecha. Es la parte que más se alarga y no depende de nosotros ni del barco.',
      en: 'Start the consular paperwork as soon as you have a date. It is the part that stretches longest and depends on neither us nor the ship.',
    },
  },
  {
    slug: { es: 'italia', en: 'italy' },
    flag: '🇮🇹',
    country: { es: 'Italia', en: 'Italy' },
    gateways: ['Génova', 'Livorno', 'Nápoles'],
    seaWeeks: '4 a 7',
    airDays: '4 a 8',
    metaTitle: {
      es: 'Mudanza de Panamá a Italia | PWE',
      en: 'Moving from Panama to Italy | PWE',
    },
    metaDescription: {
      es: 'Mudanzas de Panamá a Italia vía Génova o Livorno, con exención aduanera de menaje para residentes y entrega puerta a puerta.',
      en: 'Moving from Panama to Italy via Genoa or Livorno, with household-goods customs exemption for residents and door-to-door delivery.',
    },
    intro: {
      es: 'Génova y Livorno son los puertos habituales, con entrega por carretera a todo el país. Al ser Unión Europea, aplica el mismo marco de exención de menaje que España, con su propia documentación local.',
      en: 'Genoa and Livorno are the usual ports, with road delivery nationwide. Being in the EU, the same household-goods exemption framework as Spain applies, with its own local paperwork.',
    },
    profile: {
      es: 'Familias con ciudadanía italiana, jubilados y quien se traslada por reagrupación familiar.',
      en: 'Families with Italian citizenship, retirees, and people relocating for family reunification.',
    },
    customs: {
      es: 'Como en el resto de la Unión Europea, el menaje usado entra exento si acreditas residencia previa fuera y registro en el municipio de destino. Italia pide documentación municipal específica.',
      en: 'As elsewhere in the EU, used household goods enter exempt if you prove prior residence abroad and registration in the destination municipality. Italy asks for specific municipal paperwork.',
    },
    tip: {
      es: 'El registro en el ayuntamiento del destino suele ser requisito para la exención. Conviene tenerlo resuelto antes de que llegue el contenedor.',
      en: 'Registration with the destination town hall is usually a condition for the exemption. Best to have it sorted before the container lands.',
    },
  },
  {
    slug: { es: 'republica-dominicana', en: 'dominican-republic' },
    flag: '🇩🇴',
    country: { es: 'República Dominicana', en: 'Dominican Republic' },
    gateways: ['Santo Domingo', 'Puerto Plata'],
    seaWeeks: '1 a 3',
    airDays: '2 a 5',
    metaTitle: {
      es: 'Mudanza de Panamá a República Dominicana | PWE',
      en: 'Moving from Panama to the Dominican Republic | PWE',
    },
    metaDescription: {
      es: 'Mudanzas de Panamá a República Dominicana por vía marítima o aérea, con entrada por Santo Domingo y gestión aduanera.',
      en: 'Moving from Panama to the Dominican Republic by sea or air, entering through Santo Domingo with customs handling.',
    },
    intro: {
      es: 'Corredor caribeño corto, con entrada habitual por Santo Domingo. El tránsito es de los más rápidos y la vía aérea es viable incluso para volúmenes medianos.',
      en: 'A short Caribbean corridor, usually entering through Santo Domingo. Transit is among the fastest, and air freight stays viable even for medium volumes.',
    },
    profile: {
      es: 'Traslados laborales en el sector turístico y de servicios, y familias que se mueven dentro del Caribe.',
      en: 'Work transfers in tourism and services, and families moving within the Caribbean.',
    },
    customs: {
      es: 'Aplica régimen de menaje para quien traslada residencia, con inventario valorado y documentación migratoria que acredite el cambio.',
      en: 'A household-goods regime applies to those relocating residence, with a valued inventory and immigration paperwork proving the change.',
    },
    tip: {
      es: 'Al ser un tránsito corto, la diferencia entre aéreo y marítimo se nota más en el costo que en el tiempo. Compara ambas antes de decidir.',
      en: 'With such a short transit, the gap between air and sea shows up more in cost than in time. Compare both before deciding.',
    },
  },
  {
    slug: { es: 'ecuador', en: 'ecuador' },
    flag: '🇪🇨',
    country: { es: 'Ecuador', en: 'Ecuador' },
    gateways: ['Guayaquil', 'Quito'],
    seaWeeks: '1 a 3',
    airDays: '2 a 5',
    metaTitle: {
      es: 'Mudanza de Panamá a Ecuador | PWE',
      en: 'Moving from Panama to Ecuador | PWE',
    },
    metaDescription: {
      es: 'Mudanzas de Panamá a Ecuador vía Guayaquil, con gestión aduanera de menaje y entrega en Quito, Cuenca o donde necesites.',
      en: 'Moving from Panama to Ecuador via Guayaquil, with household-goods customs handling and delivery in Quito, Cuenca, or wherever you need.',
    },
    intro: {
      es: 'Guayaquil es el puerto de entrada y desde ahí sale por carretera a Quito, Cuenca o la costa. Es un corredor corto por el Pacífico, con tiempos de tránsito de días.',
      en: 'Guayaquil is the port of entry, with onward road transport to Quito, Cuenca, or the coast. A short Pacific corridor with transit times measured in days.',
    },
    profile: {
      es: 'Jubilados que se establecen por costo de vida, traslados laborales y familias con vínculos regionales.',
      en: 'Retirees settling for cost of living, work transfers, and families with regional ties.',
    },
    customs: {
      es: 'Ecuador tiene un régimen de menaje para migrantes y retornados con condiciones sobre el tiempo de residencia previa en el exterior y plazos para importar.',
      en: 'Ecuador has a household-goods regime for migrants and returning nationals, with conditions on prior residence abroad and deadlines to import.',
    },
    tip: {
      es: 'Los plazos para acogerse al régimen de menaje son estrictos. Si ya estás en el país, revisa cuánto tiempo te queda antes de embarcar.',
      en: 'The deadlines to qualify for the household-goods regime are strict. If you are already in the country, check how much time you have left before shipping.',
    },
  },
  {
    slug: { es: 'alemania', en: 'germany' },
    flag: '🇩🇪',
    country: { es: 'Alemania', en: 'Germany' },
    gateways: ['Hamburgo', 'Bremerhaven'],
    seaWeeks: '4 a 7',
    airDays: '4 a 8',
    metaTitle: {
      es: 'Mudanza de Panamá a Alemania | PWE',
      en: 'Moving from Panama to Germany | PWE',
    },
    metaDescription: {
      es: 'Mudanzas de Panamá a Alemania vía Hamburgo o Bremerhaven, con exención aduanera de menaje y entrega puerta a puerta.',
      en: 'Moving from Panama to Germany via Hamburg or Bremerhaven, with household-goods exemption and door-to-door delivery.',
    },
    intro: {
      es: 'Hamburgo y Bremerhaven son los puertos de entrada al norte de Europa, con distribución terrestre a todo el país y buena conexión hacia países vecinos.',
      en: 'Hamburg and Bremerhaven are the northern European ports of entry, with overland distribution nationwide and good onward links to neighboring countries.',
    },
    profile: {
      es: 'Traslados corporativos, investigadores y estudiantes de posgrado, y familias con residencia europea.',
      en: 'Corporate transfers, researchers and graduate students, and families with European residency.',
    },
    customs: {
      es: 'Rige el marco europeo de exención para menaje usado, con la documentación local de registro de domicilio. Alemania es meticulosa con el inventario y su correspondencia con lo declarado.',
      en: 'The European exemption framework for used household goods applies, along with local address registration paperwork. Germany is meticulous about the inventory matching what was declared.',
    },
    tip: {
      es: 'El registro de domicilio local suele ser el documento que desbloquea la exención. Sin él, la aduana puede pedir garantía por los aranceles.',
      en: 'Local address registration is usually the document that unlocks the exemption. Without it, customs may ask for a deposit against duties.',
    },
  },
];

/** Copys de la sección, para no repetirlos en cada página. */
export const destinationsCopy: Record<Locale, Record<string, string>> = {
  es: {
    kicker: 'Destinos',
    h1: 'Mudanzas internacionales desde Panamá al mundo',
    lead: 'Coordinamos la salida desde Panamá hacia cualquier país. Estos son los corredores que más movemos, con lo que hay que saber de cada aduana antes de embarcar.',
    metaTitle: 'Destinos de mudanzas internacionales desde Panamá | PWE',
    metaDescription: 'Mudanzas desde Panamá a Estados Unidos, España, Colombia, México y más. Tiempos de tránsito, puertos de entrada y requisitos aduaneros de cada país.',
    featured: 'Corredores principales',
    all: 'Todos los destinos',
    sea: 'Marítimo',
    air: 'Aéreo',
    weeks: 'semanas',
    days: 'días',
    gateways: 'Entrada habitual',
    profile: 'Quién se muda',
    customs: 'Lo que pide la aduana',
    tip: 'Consejo',
    notListed: '¿Tu destino no está en la lista?',
    notListedText: 'Movemos a cualquier país. Escríbenos con el destino y te cotizamos igual.',
    breadHome: 'Inicio',
    estimate: 'Tiempos estimados de tránsito, sin contar el trámite aduanero en destino.',
  },
  en: {
    kicker: 'Destinations',
    h1: 'International moving from Panama to anywhere',
    lead: 'We coordinate moves out of Panama to any country. These are the corridors we run most, with what you need to know about each customs authority before you ship.',
    metaTitle: 'International moving destinations from Panama | PWE',
    metaDescription: 'Moving from Panama to the United States, Spain, Colombia, Mexico, and more. Transit times, ports of entry, and customs requirements for each country.',
    featured: 'Main corridors',
    all: 'All destinations',
    sea: 'Ocean',
    air: 'Air',
    weeks: 'weeks',
    days: 'days',
    gateways: 'Usual entry',
    profile: 'Who moves there',
    customs: 'What customs asks for',
    tip: 'Tip',
    notListed: 'Your destination not on the list?',
    notListedText: 'We move to any country. Write to us with the destination and we will quote it too.',
    breadHome: 'Home',
    estimate: 'Estimated transit times, not counting customs clearance at destination.',
  },
};

export const findDestination = (locale: Locale, slug: string) =>
  destinations.find((d) => d.slug[locale] === slug);
