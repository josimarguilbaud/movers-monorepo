/* ============================================================================
   Servicios de PWE — uno por página, pensados para posicionar en Google.

   REGLA DE ALCANCE (decisión de Josimar, 2026-08-17): todo servicio tiene que
   orbitar la mudanza. PWE NO vende carga comercial. Si algún día se agrega,
   va en otro sitio, no aquí.

   FUENTE: los seis primeros existen en el sitio publicado del cliente
   (panamaworldwideexpress.com). Los cuatro marcados NUEVO son ampliación de
   catálogo acordada con Josimar: son servicios que una mudadora internacional
   presta de forma natural y que tienen búsqueda real en Panamá con poca
   competencia. ⚠️ Confirmar con el cliente que quiere ofrecerlos antes de
   quitar el noindex.
   ========================================================================== */

import type { Locale } from './content';

export interface Service {
  slug: { es: string; en: string };
  n: string;
  ic: string;
  /** true = ampliación de catálogo, no está en el sitio publicado del cliente */
  isNew?: boolean;
  title: string;
  /** H1 de la página de detalle, con la palabra clave */
  h1: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  /** Bloques de contenido de la página de detalle */
  sections: { t: string; d: string }[];
  bullets: string[];
  faqs: { q: string; a: string }[];
  forWho: string;
}

export const services: Record<Locale, Service[]> = {
  es: [
    {
      slug: { es: 'mudanzas-internacionales', en: 'international-moving' },
      n: '01',
      ic: '🌎',
      title: 'Mudanzas internacionales',
      h1: 'Mudanzas internacionales desde Panamá',
      tagline: 'Tu casa completa a cualquier país, con la aduana resuelta',
      metaTitle: 'Mudanzas Internacionales desde Panamá | PWE',
      metaDescription: 'Empresa de mudanzas internacionales en Panamá con más de 25 años. Contenedor marítimo, envío aéreo y gestión aduanera completa. Cotiza gratis.',
      intro: 'Es el servicio en el que llevamos más tiempo. Coordinamos el traslado completo de tu menaje fuera del país y nos encargamos de los trámites aduaneros y legales, que es donde la mayoría de la gente se atasca. Elegimos la ruta y el medio de transporte según el volumen, el destino y para cuándo lo necesitas.',
      sections: [
        { t: 'Evaluación gratuita antes de cotizar', d: 'Un representante visita tu casa para ver cuánto hay que mover y de qué tipo. Sin esa visita cualquier precio es una adivinanza, y las adivinanzas terminan en cobros extra el día de la carga.' },
        { t: 'Marítimo o aéreo, según lo que te conviene', d: 'El contenedor marítimo es lo más económico para una casa completa, pero tarda semanas. El envío aéreo cuesta más y llega en días. Muchas familias combinan: lo esencial por aire para la primera semana, el resto por mar.' },
        { t: 'La aduana la manejamos nosotros', d: 'Preparamos y presentamos la documentación, pagamos aranceles e impuestos y coordinamos con las autoridades del país de destino. Cada país tiene reglas distintas sobre menaje usado y es donde una mudanza se atrasa semanas si se hace mal.' },
        { t: 'No terminamos en el puerto', d: 'Entregamos en tu nueva casa, desembalamos, colocamos las cosas donde nos digas y nos llevamos todos los materiales de embalaje.' },
      ],
      bullets: [
        'Contenedor marítimo exclusivo o compartido',
        'Envío aéreo para lo urgente',
        'Gestión aduanera de salida y de entrada',
        'Inventario detallado y etiquetado',
        'Entrega puerta a puerta con desembalaje',
      ],
      faqs: [
        { q: '¿Cuánto tarda una mudanza internacional desde Panamá?', a: 'Por vía marítima, de tres a ocho semanas según el destino y si el contenedor es exclusivo o compartido. Por vía aérea, de tres a diez días. A eso hay que sumarle el tiempo de aduana en destino, que varía por país.' },
        { q: '¿Qué documentos necesito?', a: 'Pasaporte, visa o permiso de residencia del país de destino, e inventario valorado del menaje. Según el país pueden pedir más. Te decimos exactamente qué necesitas en la evaluación.' },
        { q: '¿Puedo enviar mi carro y mi mascota en la misma mudanza?', a: 'Sí. Los coordinamos junto con el resto para que no tengas que contratar aparte ni cuadrar fechas con varios proveedores.' },
      ],
      forWho: 'Familias que se mudan al exterior, traslados laborales y panameños que regresan al país.',
    },
    {
      slug: { es: 'contenedor-compartido', en: 'shared-container' },
      n: '02',
      ic: '🚢',
      isNew: true,
      title: 'Contenedor compartido (grupaje)',
      h1: 'Contenedor compartido para mudanzas desde Panamá',
      tagline: 'Pagas por lo que ocupas, no por el contenedor entero',
      metaTitle: 'Contenedor Compartido para Mudanzas | Grupaje LCL Panamá | PWE',
      metaDescription: 'Mudanza internacional en contenedor compartido desde Panamá. Pagas solo el espacio que usas. Ideal para apartamentos y mudanzas parciales.',
      intro: 'Si no tienes una casa completa que mover, un contenedor exclusivo te sale carísimo: pagarías por metros cúbicos vacíos. En el contenedor compartido tu menaje viaja junto al de otras mudanzas hacia el mismo destino y pagas solo el espacio que ocupas.',
      sections: [
        { t: 'Cuándo conviene', d: 'Cuando mueves un apartamento de una o dos recámaras, o solo una parte de la casa. Por debajo de cierto volumen, compartir siempre sale mejor que un contenedor de 20 pies medio vacío.' },
        { t: 'Cuánto más tarda', d: 'Algo más que el exclusivo, porque hay que consolidar la carga en origen y separarla en destino. A cambio, el ahorro suele ser considerable. Te damos las dos opciones con precio y fecha para que compares.' },
        { t: 'Tu menaje no se mezcla', d: 'Va identificado y separado dentro del contenedor, con su propio inventario. La consolidación es logística, no un revoltijo.' },
      ],
      bullets: [
        'Pagas solo por el volumen que ocupas',
        'Ideal para apartamentos y mudanzas parciales',
        'Inventario propio e identificación separada',
        'Consolidación en origen y desconsolidación en destino',
      ],
      faqs: [
        { q: '¿Cómo se calcula lo que pago?', a: 'Por metros cúbicos. En la evaluación medimos el volumen real de lo que vas a mover y de ahí sale el precio.' },
        { q: '¿Es seguro compartir contenedor?', a: 'Sí. Cada mudanza va identificada, separada y con su propio inventario. Se revisa contra esa lista en destino.' },
      ],
      forWho: 'Apartamentos, mudanzas parciales y quien no quiere pagar un contenedor entero a medio llenar.',
    },
    {
      slug: { es: 'menaje-de-casa', en: 'household-goods-customs' },
      n: '03',
      ic: '📄',
      isNew: true,
      title: 'Menaje de casa y aduana',
      h1: 'Trámite de menaje de casa en Panamá',
      tagline: 'La parte de papeles que hace que tu mudanza no se quede en el puerto',
      metaTitle: 'Menaje de Casa Panamá: Trámite Aduanero de Mudanza | PWE',
      metaDescription: 'Gestión aduanera de menaje de casa en Panamá. Documentación, aranceles e inventario valorado para tu mudanza internacional. Te lo resolvemos.',
      intro: 'El menaje de casa es tu mobiliario y tus efectos personales usados, y casi todos los países le dan un trato aduanero distinto al de la mercancía nueva. Aprovechar bien ese trato es la diferencia entre pagar impuestos o no pagarlos, y entre retirar tu contenedor en tres días o en tres semanas.',
      sections: [
        { t: 'El inventario valorado', d: 'Es el documento que sostiene todo el trámite: qué traes, cuánto vale y en qué condición está. Un inventario mal hecho es la causa número uno de que una mudanza se quede retenida.' },
        { t: 'Traer menaje a Panamá', d: 'Si te mudas al país, hay condiciones sobre el tiempo de residencia previa en el exterior y sobre la antigüedad de los bienes. Te decimos qué aplica en tu caso antes de que embarques, no después.' },
        { t: 'Sacar menaje de Panamá', d: 'Preparamos la documentación de exportación y coordinamos con el país de destino, que es quien pone las reglas de entrada. Cada uno pide cosas distintas.' },
      ],
      bullets: [
        'Inventario valorado en el formato que pide la aduana',
        'Documentación de exportación y de importación',
        'Pago de aranceles e impuestos en tu nombre',
        'Coordinación directa con las autoridades aduaneras',
      ],
      faqs: [
        { q: '¿Pago impuestos por traer mi menaje a Panamá?', a: 'Depende de tu situación migratoria, del tiempo que viviste fuera y de la antigüedad de los bienes. Lo revisamos caso por caso antes de que embarques.' },
        { q: '¿Qué pasa si la aduana retiene mi contenedor?', a: 'Nosotros gestionamos la respuesta y la documentación que pidan. Por eso el inventario tiene que estar bien hecho desde el principio.' },
      ],
      forWho: 'Quien trae o saca menaje de Panamá y no quiere lidiar con la aduana por su cuenta.',
    },
    {
      slug: { es: 'mudanzas-locales', en: 'local-moving' },
      n: '04',
      ic: '🚚',
      title: 'Mudanzas locales y nacionales',
      h1: 'Mudanzas locales y nacionales en Panamá',
      tagline: 'Dentro de la ciudad y entre provincias',
      metaTitle: 'Mudanzas en Panamá: Locales y Nacionales | PWE',
      metaDescription: 'Empresa de mudanzas en Ciudad de Panamá y todo el país. Embalaje, desarmado de muebles y protección del inmueble. Cotiza gratis.',
      intro: 'La mudanza de casa o apartamento, dentro de Ciudad de Panamá o hacia el interior. Mismo equipo y mismos materiales que usamos en una mudanza internacional: la diferencia es la distancia, no el cuidado.',
      sections: [
        { t: 'Protegemos el inmueble, no solo tus cosas', d: 'Cubrimos puertas y ventanas antes de empezar a sacar muebles. Es donde ocurren los golpes, y a veces el depósito de garantía depende de que el apartamento quede intacto.' },
        { t: 'Desarmamos y volvemos a armar', d: 'Camas, closets, escritorios y todo lo que no pase por la puerta. Lo desarmamos, lo trasladamos y lo dejamos armado en el destino.' },
        { t: 'El edificio también hay que coordinarlo', d: 'Permiso de la administración y reserva del ascensor de carga. Es lo que más atrasa una mudanza urbana cuando nadie lo previó.' },
      ],
      bullets: [
        'Ciudad de Panamá, área metropolitana e interior',
        'Protección de muebles y electrodomésticos',
        'Desarmado y armado de mobiliario',
        'Cubrimos puertas y ventanas del inmueble',
        'Retiramos los materiales al terminar',
      ],
      faqs: [
        { q: '¿Trabajan fines de semana?', a: 'Sí. Para muchas mudanzas de edificio es lo más práctico, porque las administraciones suelen dar el ascensor de carga en horarios específicos.' },
        { q: '¿Puedo contratar solo el transporte y empacar yo?', a: 'Sí, aunque en mudanzas largas conviene que al menos lo frágil lo empaquemos nosotros. La mayoría de los daños ocurren por embalaje insuficiente, no por el transporte.' },
      ],
      forWho: 'Mudanzas de vivienda dentro de Panamá, en la ciudad o entre provincias.',
    },
    {
      slug: { es: 'mudanzas-de-oficinas', en: 'office-moving' },
      n: '05',
      ic: '🏢',
      title: 'Mudanzas de oficinas',
      h1: 'Mudanzas de oficinas y empresas en Panamá',
      tagline: 'Se muda el fin de semana, el lunes tu equipo trabaja',
      metaTitle: 'Mudanza de Oficinas en Panamá | Traslado de Empresas | PWE',
      metaDescription: 'Mudanza de oficinas en Panamá con el mínimo corte de operación. Traslado en fin de semana, etiquetado por puesto y manejo de equipo informático.',
      intro: 'Trasladamos oficinas y negocios completos. El plan se arma para que el corte de operación sea el menor posible y para que el mobiliario, el equipo y el archivo lleguen en condiciones de trabajar, no solo de llegar.',
      sections: [
        { t: 'El calendario manda', d: 'Lo normal es cargar el viernes en la tarde y que el lunes el equipo entre a trabajar. En oficinas grandes se hace por fases, por departamento, para que nunca esté todo detenido a la vez.' },
        { t: 'Etiquetado por puesto', d: 'No basta con marcar "Contabilidad". Cada caja va identificada con el puesto de trabajo al que pertenece, para que cada persona encuentre lo suyo sin abrir veinte cajas.' },
        { t: 'Equipo informático y archivo', d: 'Las computadoras y los servidores se embalan aparte, con material específico. El archivo físico se mueve con control de qué caja salió y cuál llegó.' },
      ],
      bullets: [
        'Traslado en fin de semana o fuera de horario',
        'Plan por fases para oficinas grandes',
        'Etiquetado por puesto y departamento',
        'Embalaje específico para equipo informático',
        'Traslado de archivo físico con control',
      ],
      faqs: [
        { q: '¿Cuánto tiempo antes hay que planificarlo?', a: 'Para una oficina pequeña, dos semanas. Para una de varios pisos, un mes o más, porque hay que coordinar con dos administraciones de edificio y con el proveedor de red.' },
        { q: '¿Se encargan de desconectar y conectar los equipos?', a: 'Movemos y embalamos el equipo. La parte de red y telefonía la coordinamos con tu proveedor de TI para que todo calce el mismo fin de semana.' },
      ],
      forWho: 'Empresas que cambian de local, consolidan oficinas o abren sede nueva.',
    },
    {
      slug: { es: 'relocation', en: 'relocation' },
      n: '06',
      ic: '🧭',
      title: 'Relocation',
      h1: 'Servicio de Relocation en Panamá',
      tagline: 'Ayuda para instalarte, no solo para llegar',
      metaTitle: 'Servicio de Relocation en Panamá | Reubicación | PWE',
      metaDescription: 'Servicio integral de relocation en Panamá: búsqueda de vivienda, orientación de trámites y acompañamiento durante tu proceso de integración.',
      intro: 'Mudarse de país no termina cuando llega el contenedor. Ahí empieza la parte que nadie te cuenta: dónde vivir, cómo funcionan los trámites, qué se hace primero. Con nuestro servicio integral de Relocation te damos la información y el acompañamiento durante el proceso de integración.',
      sections: [
        { t: 'Buscar dónde vivir', d: 'Te ayudamos a encontrar vivienda en la zona que te conviene según dónde vas a trabajar, cómo es el tráfico y qué presupuesto manejas. Alguien que conoce la ciudad te ahorra meses de prueba y error.' },
        { t: 'Los trámites del país', d: 'Orientación sobre lo que hay que resolver al llegar y en qué orden. Cada país tiene su secuencia y hacerla al revés cuesta semanas.' },
        { t: 'Para empresas que reubican personal', d: 'Si tu empresa traslada empleados a Panamá, coordinamos la mudanza y la instalación de cada familia como un solo paquete.' },
      ],
      bullets: [
        'Búsqueda de vivienda en destino',
        'Orientación sobre trámites de llegada',
        'Acompañamiento durante la integración',
        'Paquetes para empresas que reubican personal',
      ],
      faqs: [
        { q: '¿El relocation se contrata aparte de la mudanza?', a: 'Se puede contratar junto con la mudanza o por separado. Lo habitual es junto, porque las fechas se coordinan mejor.' },
        { q: '¿Atienden a empresas con varios empleados a la vez?', a: 'Sí. Se maneja como un programa, con un coordinador que ve todos los casos.' },
      ],
      forWho: 'Quien llega a un país que no conoce, y empresas que reubican personal.',
    },
    {
      slug: { es: 'embalaje', en: 'packing' },
      n: '07',
      ic: '📦',
      title: 'Embalaje profesional',
      h1: 'Servicio de embalaje profesional en Panamá',
      tagline: 'El embalaje correcto según el objeto y el transporte',
      metaTitle: 'Servicio de Embalaje para Mudanzas en Panamá | PWE',
      metaDescription: 'Embalaje profesional para mudanzas en Panamá. Cajas resistentes, protección de frágiles, etiquetado e inventario. Se contrata con o sin mudanza.',
      intro: 'Nuestros especialistas te asesoran y eligen el embalaje adecuado según el método de transporte y el tipo de objeto. No es lo mismo preparar una caja para un camión que para semanas dentro de un contenedor cruzando el mar con humedad y movimiento constante.',
      sections: [
        { t: 'Cada material tiene su razón', d: 'Cajas resistentes, envolturas protectoras y rellenos específicos para lo frágil. Vajilla, cuadros, televisores y espejos llevan preparación distinta.' },
        { t: 'Etiquetado e inventario', d: 'Cada caja se etiqueta con precisión y se anota en un inventario detallado. Es lo que permite saber qué hay dentro sin abrirla y revisar en destino que llegó todo.' },
        { t: 'También desembalamos', d: 'En destino sacamos todo, lo colocamos donde nos digas y nos llevamos los materiales. No te dejamos con una montaña de cartón.' },
      ],
      bullets: [
        'Cajas y materiales de calidad, no cartón reciclado',
        'Protección específica para frágiles y obras de arte',
        'Embalaje elegido según el medio de transporte',
        'Etiquetado preciso e inventario detallado',
        'Desembalaje en destino opcional',
      ],
      faqs: [
        { q: '¿Puedo contratar solo el embalaje?', a: 'Sí. Hay quien mueve por su cuenta pero quiere que lo frágil vaya bien preparado. Se puede contratar aparte.' },
        { q: '¿Venden solo los materiales?', a: 'Consúltanos según el caso. Lo habitual es que el material vaya incluido en el servicio de embalaje.' },
      ],
      forWho: 'Se puede contratar solo, sin la mudanza, si prefieres mover tú pero empacar bien.',
    },
    {
      slug: { es: 'transporte-de-mascotas', en: 'pet-relocation' },
      n: '08',
      ic: '🐾',
      title: 'Transporte de mascotas',
      h1: 'Transporte de mascotas desde Panamá',
      tagline: 'Tu perro o tu gato viaja contigo, no se queda atrás',
      metaTitle: 'Transporte de Mascotas desde Panamá | Perros y Gatos | PWE',
      metaDescription: 'Traslado internacional de mascotas desde Panamá. Documentación veterinaria, transportín y coordinación con tu mudanza. Cotiza gratis.',
      intro: 'Es lo que más preocupa a la gente cuando se muda de país, y con razón: es el único miembro de la familia que viaja como carga. Lo coordinamos junto con el resto de tu mudanza para que no tengas que contratar aparte ni cuadrar fechas con dos proveedores.',
      sections: [
        { t: 'La documentación empieza antes de lo que crees', d: 'Certificado veterinario, vacunas al día y, según el destino, análisis con meses de anticipación. Es el trámite que más gente deja tarde y el que hace que una mascota no pueda viajar.' },
        { t: 'Cada país pide algo distinto', d: 'Unos exigen cuarentena a la llegada, otros microchip con un estándar específico, otros tratamientos concretos en una ventana de días antes del vuelo. Te decimos qué aplica a tu destino.' },
        { t: 'El transportín importa', d: 'Tiene que cumplir la norma de la aerolínea y ser del tamaño correcto para tu mascota. Uno mal medido es motivo de rechazo en el mostrador.' },
      ],
      bullets: [
        'Documentación veterinaria y sanitaria',
        'Orientación sobre requisitos del país de destino',
        'Transportín según norma de la aerolínea',
        'Coordinación de fechas con tu mudanza',
      ],
      faqs: [
        { q: '¿Con cuánta anticipación hay que empezar?', a: 'Al menos dos meses para la mayoría de destinos, y más si el país exige análisis con tiempos de espera. Si tu mudanza es en menos de eso, avísanos de una vez.' },
        { q: '¿Mi mascota viaja en el mismo vuelo que yo?', a: 'Depende de la aerolínea, la ruta y el tamaño del animal. Lo revisamos y buscamos la opción que menos tiempo la tenga en tránsito.' },
      ],
      forWho: 'Quien se muda al exterior con perro, gato u otra mascota.',
    },
    {
      slug: { es: 'transporte-de-vehiculos', en: 'vehicle-shipping' },
      n: '09',
      ic: '🚗',
      title: 'Transporte de vehículos',
      h1: 'Transporte de vehículos desde Panamá',
      tagline: 'Tu carro llega al mismo país que tú',
      metaTitle: 'Transporte de Vehículos desde Panamá | Envío de Carros | PWE',
      metaDescription: 'Envío internacional de vehículos desde Panamá. Documentación, aduana y coordinación con tu mudanza. Carro, moto o vehículo de trabajo.',
      intro: 'Mover un carro no es como mover cajas: tiene su propia documentación, su propio trámite aduanero y sus propias reglas en el país de destino. Lo coordinamos junto con tu mudanza para que llegue en fechas parecidas y no tengas que resolverlo por separado.',
      sections: [
        { t: 'Los papeles del vehículo', d: 'Título de propiedad, registro y liberación de cualquier gravamen. Un carro con financiamiento pendiente no sale del país, y es mejor saberlo con tiempo.' },
        { t: 'Cada país tiene sus límites', d: 'Muchos restringen la antigüedad del vehículo que se puede importar, o exigen homologación. Revisamos las reglas de tu destino antes de embarcar, no después.' },
        { t: 'Marítimo, dentro de contenedor o no', d: 'Según el destino y el presupuesto. Dentro de contenedor va más protegido; en buque de carga rodada suele salir más económico.' },
      ],
      bullets: [
        'Documentación de exportación del vehículo',
        'Revisión de requisitos de importación en destino',
        'Envío marítimo en contenedor o carga rodada',
        'Coordinación con el resto de tu mudanza',
      ],
      faqs: [
        { q: '¿Puedo meter cosas dentro del carro?', a: 'Normalmente no. La mayoría de las aduanas exigen que el vehículo viaje vacío, y meter menaje dentro es causa común de retención.' },
        { q: '¿Y si mi carro tiene financiamiento?', a: 'Hay que liberarlo antes de exportarlo. Es lo primero que conviene revisar si piensas llevártelo.' },
      ],
      forWho: 'Quien se muda al exterior y no quiere vender su carro.',
    },
    {
      slug: { es: 'guardamuebles', en: 'storage' },
      n: '10',
      ic: '🏬',
      isNew: true,
      title: 'Guardamuebles y almacenaje',
      h1: 'Guardamuebles y almacenaje en Panamá',
      tagline: 'Para cuando la fecha de salida y la de entrada no coinciden',
      metaTitle: 'Guardamuebles en Panamá | Almacenaje de Mudanzas | PWE',
      metaDescription: 'Guardamuebles y almacenaje temporal en Panamá. Bodega bajo techo, inventario documentado y retiro parcial. Por días o por meses.',
      intro: 'Casi ninguna mudanza calza perfecto: entregas la casa un día y recibes la nueva dos semanas después. O sales del país antes de que tu contenedor tenga cupo. Guardamos tu menaje el tiempo que haga falta, con el mismo inventario que se usó al empacar.',
      sections: [
        { t: 'Por días o por meses', d: 'No hay que comprometerse a un plazo largo. Muchas mudanzas necesitan dos semanas de puente y nada más.' },
        { t: 'El inventario sigue vigente', d: 'Lo que entra a bodega es lo que se anotó al empacar. Cuando sale, se revisa contra la misma lista, así que sabes exactamente qué guardaste.' },
        { t: 'Puedes sacar solo una parte', d: 'Si necesitas recuperar algo puntual sin vaciar todo, se coordina. No hay que sacar la mudanza entera para rescatar una caja.' },
      ],
      bullets: [
        'Almacenaje por días, semanas o meses',
        'Bodega bajo techo',
        'Inventario documentado de entrada y salida',
        'Retiro parcial sin vaciar todo',
      ],
      faqs: [
        { q: '¿Cuánto cuesta?', a: 'Depende del volumen y del tiempo. En la evaluación de tu mudanza calculamos ambos y te damos el precio junto con el resto.' },
        { q: '¿Puedo guardar el menaje mientras espero mi contenedor?', a: 'Sí, es uno de los usos más comunes. Se guarda, se embarca cuando hay cupo y se coordina la salida.' },
      ],
      forWho: 'Mudanzas con fechas que no calzan, remodelaciones y esperas de embarque.',
    },
    {
      slug: { es: 'carga-internacional', en: 'freight-forwarding' },
      n: '11',
      ic: '✈️',
      title: 'Carga aérea, marítima y terrestre',
      h1: 'Carga internacional desde y hacia Panamá',
      tagline: 'Mercancía y equipo, no solo menaje',
      metaTitle: 'Carga Aérea y Marítima en Panamá | Agente de Carga | PWE',
      metaDescription: 'Carga internacional desde y hacia Panamá. Aérea, marítima y terrestre, consolidada o exclusiva, con documentación de importación y exportación.',
      intro: 'Además de mudanzas movemos carga comercial: mercancía, maquinaria, equipo y envíos consolidados. Elegimos el modo según lo que pesa, lo que ocupa y para cuándo lo necesitas en destino.',
      sections: [
        { t: 'Aérea cuando el tiempo manda', d: 'Días en vez de semanas. Conviene para mercancía de alto valor, repuestos que tienen una línea parada o envíos con fecha de entrega comprometida.' },
        { t: 'Marítima cuando manda el costo', d: 'Contenedor exclusivo si el volumen lo justifica, o consolidado si no llenas uno. Es la vía normal para volumen alto sin urgencia.' },
        { t: 'La documentación es la mitad del trabajo', d: 'Preparamos y presentamos lo que pide la aduana en ambos extremos. Un embarque sin papeles correctos se queda en el puerto acumulando almacenaje.' },
      ],
      bullets: [
        'Carga aérea para envíos urgentes',
        'Carga marítima consolidada o exclusiva',
        'Transporte terrestre dentro del país',
        'Carga de proyecto y sobredimensionada',
        'Documentación de importación y exportación',
      ],
      faqs: [
        { q: '¿Manejan importaciones además de exportaciones?', a: 'Sí, en ambos sentidos. Panamá funciona como punto de entrada regional y buena parte del movimiento es de importación.' },
        { q: '¿Cuál es el volumen mínimo?', a: 'No hay mínimo rígido. Envíos pequeños se consolidan con otros; en la cotización te decimos qué modo conviene según lo que mueves.' },
      ],
      forWho: 'Empresas importadoras, comercios y proyectos con equipo o mercancía que mover.',
    },
  ],
  en: [
    {
      slug: { es: 'mudanzas-internacionales', en: 'international-moving' },
      n: '01', ic: '🌎',
      title: 'International moving',
      h1: 'International moving from Panama',
      tagline: 'Your whole home to any country, with customs handled',
      metaTitle: 'International Moving from Panama | PWE',
      metaDescription: 'International moving company in Panama with over 25 years of experience. Ocean container, air freight, and full customs handling. Free quote.',
      intro: 'This is the service we have been doing longest. We coordinate the full move of your household goods out of the country and handle the customs and legal paperwork, which is where most people get stuck. We pick the route and shipping mode based on volume, destination, and when you need it there.',
      sections: [
        { t: 'A free assessment before we quote', d: 'A representative visits your home to see how much there is and what kind of things need moving. Without that visit any price is a guess, and guesses turn into extra charges on loading day.' },
        { t: 'Ocean or air, whichever suits you', d: 'An ocean container is the cheapest way to move a whole house, but it takes weeks. Air freight costs more and arrives in days. Many families combine both: essentials by air for the first week, the rest by sea.' },
        { t: 'We handle customs', d: 'We prepare and file the paperwork, pay duties and taxes, and coordinate with the authorities at destination. Every country treats used household goods differently, and this is where a move loses weeks if it is done badly.' },
        { t: 'We do not stop at the port', d: 'We deliver to your new home, unpack, put things where you want them, and take all the packing materials away.' },
      ],
      bullets: [
        'Exclusive or shared ocean container',
        'Air freight for what cannot wait',
        'Customs handled on both ends',
        'Detailed inventory and labeling',
        'Door-to-door delivery with unpacking',
      ],
      faqs: [
        { q: 'How long does an international move from Panama take?', a: 'By sea, three to eight weeks depending on destination and whether the container is exclusive or shared. By air, three to ten days. Add customs clearance at destination, which varies by country.' },
        { q: 'What documents do I need?', a: 'Passport, visa or residence permit for the destination country, and a valued inventory of your goods. Some countries ask for more. We tell you exactly what applies during the assessment.' },
        { q: 'Can I ship my car and my pet with the same move?', a: 'Yes. We coordinate both alongside everything else, so you are not hiring separately and juggling dates with several providers.' },
      ],
      forWho: 'Families relocating abroad, work transfers, and Panamanians moving back home.',
    },
    {
      slug: { es: 'contenedor-compartido', en: 'shared-container' },
      n: '02', ic: '🚢', isNew: true,
      title: 'Shared container (groupage)',
      h1: 'Shared container moves from Panama',
      tagline: 'You pay for the space you use, not the whole box',
      metaTitle: 'Shared Container Moving | LCL Groupage from Panama | PWE',
      metaDescription: 'International move in a shared container from Panama. Pay only for the space you use. Ideal for apartments and partial moves.',
      intro: 'If you are not moving a whole house, an exclusive container is expensive: you would be paying for empty cubic meters. In a shared container your goods travel alongside other moves heading to the same destination, and you pay only for the space you take up.',
      sections: [
        { t: 'When it makes sense', d: 'When you are moving a one or two bedroom apartment, or only part of a house. Below a certain volume, sharing always beats a half-empty 20-foot container.' },
        { t: 'How much longer it takes', d: 'Somewhat longer than exclusive, because the load is consolidated at origin and separated at destination. In exchange the savings are usually considerable. We give you both options with price and dates so you can compare.' },
        { t: 'Your goods do not get mixed in', d: 'They are identified and kept separate inside the container, with their own inventory. Consolidation is logistics, not a jumble.' },
      ],
      bullets: [
        'Pay only for the volume you use',
        'Ideal for apartments and partial moves',
        'Its own inventory and separate identification',
        'Consolidation at origin, deconsolidation at destination',
      ],
      faqs: [
        { q: 'How is the price calculated?', a: 'By cubic meter. During the assessment we measure the actual volume you are moving and the price comes from that.' },
        { q: 'Is sharing a container safe?', a: 'Yes. Each move is identified, kept separate, and has its own inventory, which is checked against at destination.' },
      ],
      forWho: 'Apartments, partial moves, and anyone who does not want to pay for a half-filled container.',
    },
    {
      slug: { es: 'menaje-de-casa', en: 'household-goods-customs' },
      n: '03', ic: '📄', isNew: true,
      title: 'Household goods and customs',
      h1: 'Household goods customs clearance in Panama',
      tagline: 'The paperwork that keeps your move from sitting at the port',
      metaTitle: 'Household Goods Customs in Panama | Moving Clearance | PWE',
      metaDescription: 'Household goods customs clearance in Panama. Documentation, duties, and valued inventory for your international move. We handle it.',
      intro: 'Household goods means your used furniture and personal effects, and almost every country treats them differently from new merchandise at customs. Using that treatment properly is the difference between paying import taxes or not, and between clearing your container in three days or three weeks.',
      sections: [
        { t: 'The valued inventory', d: 'This is the document the whole process rests on: what you are bringing, what it is worth, and what condition it is in. A badly prepared inventory is the number one reason a move gets held at customs.' },
        { t: 'Bringing goods into Panama', d: 'If you are moving to the country, there are conditions on how long you lived abroad and how old the goods are. We tell you what applies to your case before you ship, not after.' },
        { t: 'Taking goods out of Panama', d: 'We prepare the export documentation and coordinate with the destination country, which sets the entry rules. Every one of them asks for something different.' },
      ],
      bullets: [
        'Valued inventory in the format customs requires',
        'Export and import documentation',
        'Duties and taxes paid on your behalf',
        'Direct coordination with customs authorities',
      ],
      faqs: [
        { q: 'Do I pay tax to bring my household goods into Panama?', a: 'It depends on your immigration status, how long you lived abroad, and how old the goods are. We review it case by case before you ship.' },
        { q: 'What if customs holds my container?', a: 'We handle the response and whatever documentation they ask for. That is exactly why the inventory has to be right from the start.' },
      ],
      forWho: 'Anyone bringing goods into or out of Panama who does not want to face customs alone.',
    },
    {
      slug: { es: 'mudanzas-locales', en: 'local-moving' },
      n: '04', ic: '🚚',
      title: 'Local and domestic moving',
      h1: 'Local and domestic moving in Panama',
      tagline: 'Across the city and between provinces',
      metaTitle: 'Movers in Panama: Local and Domestic Moving | PWE',
      metaDescription: 'Moving company in Panama City and nationwide. Packing, furniture disassembly, and property protection. Free quote.',
      intro: 'The house or apartment move, within Panama City or out to the countryside. Same crew and same materials we use on an international move: the difference is distance, not care.',
      sections: [
        { t: 'We protect the property, not just your things', d: 'We cover doors and window frames before any furniture comes out. That is where the knocks happen, and sometimes your deposit depends on the apartment being left intact.' },
        { t: 'We take it apart and put it back together', d: 'Beds, closets, desks, anything that will not fit through the door. We disassemble, move, and reassemble at the other end.' },
        { t: 'The building needs coordinating too', d: 'Management permits and the service elevator booking. That is what holds up an urban move when nobody planned for it.' },
      ],
      bullets: [
        'Panama City, metro area, and the provinces',
        'Furniture and appliance protection',
        'Disassembly and reassembly',
        'Doors and window frames covered',
        'We take the materials away when we finish',
      ],
      faqs: [
        { q: 'Do you work weekends?', a: 'Yes. For most building moves it is the practical option, since management usually allots the service elevator in specific windows.' },
        { q: 'Can I hire transport only and pack myself?', a: 'Yes, though on long moves it is worth letting us pack the fragile items. Most damage comes from insufficient packing, not from transport.' },
      ],
      forWho: 'Household moves anywhere in Panama, in the city or between provinces.',
    },
    {
      slug: { es: 'mudanzas-de-oficinas', en: 'office-moving' },
      n: '05', ic: '🏢',
      title: 'Office moving',
      h1: 'Office and business moving in Panama',
      tagline: 'It moves on the weekend, Monday your team works',
      metaTitle: 'Office Moving in Panama | Business Relocation | PWE',
      metaDescription: 'Office moving in Panama with minimal downtime. Weekend relocation, labeling by desk, and IT equipment handling.',
      intro: 'We move whole offices and businesses. The plan is built so downtime stays as short as possible and so the furniture, equipment, and archive arrive ready to work, not just delivered.',
      sections: [
        { t: 'The calendar drives everything', d: 'The norm is loading Friday afternoon so the team walks in Monday morning. Larger offices go in phases, department by department, so nothing is ever fully stopped.' },
        { t: 'Labeled by desk', d: 'Marking a box "Accounting" is not enough. Each one is tagged to the specific desk it belongs to, so people find their things without opening twenty boxes.' },
        { t: 'IT equipment and archives', d: 'Computers and servers are packed separately with the right materials. The physical archive moves with a record of which box left and which arrived.' },
      ],
      bullets: [
        'Weekend or after-hours relocation',
        'Phased plans for larger offices',
        'Labeling by desk and department',
        'Purpose-built packing for IT equipment',
        'Tracked physical archive relocation',
      ],
      faqs: [
        { q: 'How far ahead should we plan it?', a: 'Two weeks for a small office. A month or more for a multi-floor one, because you are coordinating two building managements and your network provider.' },
        { q: 'Do you disconnect and reconnect the equipment?', a: 'We move and pack the equipment. Network and phones we coordinate with your IT provider so everything lands on the same weekend.' },
      ],
      forWho: 'Companies changing premises, consolidating offices, or opening a new location.',
    },
    {
      slug: { es: 'relocation', en: 'relocation' },
      n: '06', ic: '🧭',
      title: 'Relocation',
      h1: 'Relocation services in Panama',
      tagline: 'Help settling in, not just arriving',
      metaTitle: 'Relocation Services in Panama | PWE',
      metaDescription: 'Full relocation service in Panama: housing search, guidance on local paperwork, and support while you settle in.',
      intro: 'Moving countries does not end when the container arrives. That is where the part nobody warns you about starts: where to live, how the paperwork works, what to do first. Our full Relocation service gives you information and support while you settle in.',
      sections: [
        { t: 'Finding somewhere to live', d: 'We help you find housing in the area that suits you, based on where you will work, what traffic is like, and your budget. Someone who knows the city saves you months of trial and error.' },
        { t: 'The local paperwork', d: 'Guidance on what to sort out on arrival and in what order. Every country has its sequence, and doing it backwards costs weeks.' },
        { t: 'For companies relocating staff', d: 'If your company is moving employees to Panama, we coordinate each family move and settling-in as a single package.' },
      ],
      bullets: [
        'Housing search at destination',
        'Guidance on arrival paperwork',
        'Support while you settle in',
        'Packages for companies relocating staff',
      ],
      faqs: [
        { q: 'Is relocation booked separately from the move?', a: 'It can go with the move or on its own. Together is more common, because the dates line up better.' },
        { q: 'Do you handle companies with several employees at once?', a: 'Yes. It runs as a program with one coordinator across all the cases.' },
      ],
      forWho: 'People arriving in a country they do not know, and companies relocating staff.',
    },
    {
      slug: { es: 'embalaje', en: 'packing' },
      n: '07', ic: '📦',
      title: 'Professional packing',
      h1: 'Professional packing services in Panama',
      tagline: 'The right packing for the object and the transport',
      metaTitle: 'Professional Packing Services for Moves in Panama | PWE',
      metaDescription: 'Professional packing for moves in Panama. Sturdy boxes, fragile protection, labeling, and inventory. Available with or without the move.',
      intro: 'Our specialists advise you and choose the right packing based on the shipping method and the type of object. Preparing a box for a truck is not the same as preparing one for weeks inside a container crossing the ocean with humidity and constant movement.',
      sections: [
        { t: 'Every material has a reason', d: 'Sturdy boxes, protective wrapping, and specific padding for fragile items. China, artwork, televisions, and mirrors each get different preparation.' },
        { t: 'Labeling and inventory', d: 'Every box is labeled precisely and logged in a detailed inventory. That is what lets you know what is inside without opening it, and confirm at destination that everything arrived.' },
        { t: 'We unpack too', d: 'At destination we take everything out, place it where you want it, and remove the materials. We do not leave you with a mountain of cardboard.' },
      ],
      bullets: [
        'Quality boxes and materials, not recycled cardboard',
        'Specific protection for fragile items and artwork',
        'Packing chosen for the shipping method',
        'Precise labeling and detailed inventory',
        'Optional unpacking at destination',
      ],
      faqs: [
        { q: 'Can I book packing on its own?', a: 'Yes. Some people move themselves but want the fragile items packed properly. It can be booked separately.' },
        { q: 'Do you sell just the materials?', a: 'Ask us about your case. Normally materials are included in the packing service.' },
      ],
      forWho: 'Can be booked on its own if you would rather move yourself but pack properly.',
    },
    {
      slug: { es: 'transporte-de-mascotas', en: 'pet-relocation' },
      n: '08', ic: '🐾',
      title: 'Pet relocation',
      h1: 'Pet relocation from Panama',
      tagline: 'Your dog or cat travels with you, not left behind',
      metaTitle: 'Pet Relocation from Panama | Moving with a Dog or Cat | PWE',
      metaDescription: 'International pet relocation from Panama. Veterinary paperwork, travel crate, and coordination with your move. Free quote.',
      intro: 'It is what worries people most when moving abroad, and rightly so: it is the only family member that travels as cargo. We coordinate it alongside the rest of your move so you are not hiring separately and juggling dates with two providers.',
      sections: [
        { t: 'The paperwork starts earlier than you think', d: 'Veterinary certificate, up-to-date vaccinations, and depending on destination, blood work months ahead. It is the step people leave latest and the one that keeps a pet from flying.' },
        { t: 'Every country asks for something different', d: 'Some require quarantine on arrival, others a microchip to a specific standard, others treatments within a set window before the flight. We tell you what applies to your destination.' },
        { t: 'The crate matters', d: 'It has to meet the airline standard and be the right size for your pet. A badly sized crate is grounds for refusal at the counter.' },
      ],
      bullets: [
        'Veterinary and health documentation',
        'Guidance on destination country requirements',
        'Airline-compliant travel crate',
        'Dates coordinated with your move',
      ],
      faqs: [
        { q: 'How far ahead should we start?', a: 'At least two months for most destinations, more if the country requires blood work with waiting periods. If your move is sooner than that, tell us right away.' },
        { q: 'Does my pet travel on my flight?', a: 'It depends on the airline, the route, and the size of the animal. We look for the option with the least time in transit.' },
      ],
      forWho: 'Anyone moving abroad with a dog, cat, or other pet.',
    },
    {
      slug: { es: 'transporte-de-vehiculos', en: 'vehicle-shipping' },
      n: '09', ic: '🚗',
      title: 'Vehicle shipping',
      h1: 'Vehicle shipping from Panama',
      tagline: 'Your car ends up in the same country you do',
      metaTitle: 'Vehicle Shipping from Panama | Car Export | PWE',
      metaDescription: 'International vehicle shipping from Panama. Documentation, customs, and coordination with your move. Cars, motorcycles, and work vehicles.',
      intro: 'Moving a car is nothing like moving boxes: it has its own documentation, its own customs process, and its own rules in the destination country. We coordinate it with your move so it arrives around the same time and you do not have to solve it separately.',
      sections: [
        { t: 'The vehicle paperwork', d: 'Title, registration, and clearance of any lien. A car with financing outstanding cannot leave the country, and it is better to know that early.' },
        { t: 'Every country has limits', d: 'Many restrict how old an imported vehicle can be, or require homologation. We check your destination rules before shipping, not after.' },
        { t: 'By sea, in a container or not', d: 'Depending on destination and budget. Inside a container it travels better protected; on a roll-on roll-off vessel it usually costs less.' },
      ],
      bullets: [
        'Vehicle export documentation',
        'Destination import requirements checked',
        'Ocean shipping by container or roll-on roll-off',
        'Coordinated with the rest of your move',
      ],
      faqs: [
        { q: 'Can I pack things inside the car?', a: 'Usually not. Most customs authorities require the vehicle to travel empty, and packing goods inside is a common reason for a hold.' },
        { q: 'What if my car is financed?', a: 'The lien has to be cleared before export. It is the first thing worth checking if you plan to take it with you.' },
      ],
      forWho: 'Anyone moving abroad who does not want to sell their car.',
    },
    {
      slug: { es: 'guardamuebles', en: 'storage' },
      n: '10', ic: '🏬', isNew: true,
      title: 'Storage',
      h1: 'Storage and warehousing in Panama',
      tagline: 'For when your move-out and move-in dates do not line up',
      metaTitle: 'Storage in Panama | Moving Storage and Warehousing | PWE',
      metaDescription: 'Temporary storage and warehousing in Panama. Indoor facility, documented inventory, and partial retrieval. By the day or by the month.',
      intro: 'Almost no move lines up perfectly: you hand over the old place one day and get the new one two weeks later. Or you leave the country before your container has space. We store your goods for as long as it takes, tracked against the same inventory used at packing.',
      sections: [
        { t: 'By the day or by the month', d: 'No long commitment required. Plenty of moves just need a two-week bridge and nothing more.' },
        { t: 'The inventory still applies', d: 'What goes into the warehouse is what was logged at packing. When it comes out, it is checked against that same list, so you know exactly what you stored.' },
        { t: 'You can take out just part of it', d: 'If you need one specific thing back without emptying everything, we arrange it. No need to pull the whole move to rescue one box.' },
      ],
      bullets: [
        'Storage by the day, week, or month',
        'Indoor warehouse',
        'Documented inventory in and out',
        'Partial retrieval without emptying everything',
      ],
      faqs: [
        { q: 'What does it cost?', a: 'It depends on volume and time. During your moving assessment we work out both and quote it alongside everything else.' },
        { q: 'Can I store my goods while waiting for my container?', a: 'Yes, one of the most common uses. We store, ship when space opens up, and coordinate the departure.' },
      ],
      forWho: 'Moves with dates that do not match, renovations, and waits for shipping space.',
    },
    {
      slug: { es: 'carga-internacional', en: 'freight-forwarding' },
      n: '11', ic: '✈️',
      title: 'Air, ocean, and overland freight',
      h1: 'International freight to and from Panama',
      tagline: 'Merchandise and equipment, not just household goods',
      metaTitle: 'Air and Ocean Freight in Panama | Freight Forwarder | PWE',
      metaDescription: 'International freight to and from Panama. Air, ocean, and overland, consolidated or exclusive, with import and export documentation.',
      intro: 'Alongside moving, we handle commercial freight: merchandise, machinery, equipment, and consolidated shipments. We pick the mode based on weight, volume, and when you need it at destination.',
      sections: [
        { t: 'Air when timing rules', d: 'Days instead of weeks. Worth it for high-value goods, spare parts holding up a production line, or shipments with a committed delivery date.' },
        { t: 'Ocean when cost rules', d: 'An exclusive container if the volume justifies it, consolidated if you cannot fill one. The normal route for high volume without urgency.' },
        { t: 'Documentation is half the job', d: 'We prepare and file what customs requires at both ends. A shipment without correct paperwork sits at the port racking up storage charges.' },
      ],
      bullets: [
        'Air freight for urgent shipments',
        'Consolidated or exclusive ocean freight',
        'Overland transport within the country',
        'Project and oversized cargo',
        'Import and export documentation',
      ],
      faqs: [
        { q: 'Do you handle imports as well as exports?', a: 'Yes, both directions. Panama works as a regional entry point and a good share of the movement is inbound.' },
        { q: 'Is there a minimum volume?', a: 'No hard minimum. Small shipments get consolidated with others; the quote tells you which mode suits what you are moving.' },
      ],
      forWho: 'Importers, retailers, and projects with equipment or merchandise to move.',
    },
  ],
};

/** Busca un servicio por su slug en el idioma dado. */
export const findService = (locale: Locale, slug: string) =>
  services[locale].find((s) => s.slug[locale] === slug);
