/* =============================================================
   SERVICIOS — fuente única de contenido (data-driven).
   Cada objeto genera su propia página SEO en /es/servicios/[slug].
   Contenido original y evergreen (no incluye datos que deban ser
   reales por país: costos/tránsito/aduana van en la sección Destinos).
   Imágenes: placeholders de Unsplash — reemplazar por fotos reales de PIM.
   ============================================================= */

export const IMG = {
  port: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2000&auto=format&fit=crop',
  containers: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2000&auto=format&fit=crop',
  boxes: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=2000&auto=format&fit=crop',
  packing: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop',
  team: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop',
  plane: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop',
  warehouse: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2000&auto=format&fit=crop',
};

export interface ServiceCategory {
  id: string;
  title: string;
  slug: string;
  icon: string;
  image: string;
  blurb: string;
}

export interface ServiceSection {
  heading: string;
  body: string[];
  image?: string;
}

export interface Service {
  id: string;
  categoryId: string;
  slug: string;
  icon: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTagline: string;
  heroImage: string;
  intro: string[];
  sections: ServiceSection[];
  benefits: { icon: string; title: string; text: string }[];
  faqs: { q: string; a: string }[];
  related: string[];
}

/* ---------------- Categorías (8) para el hub ---------------- */
export const categories: ServiceCategory[] = [
  { id: 'internacionales', title: 'Mudanzas Internacionales', slug: 'mudanzas-internacionales', icon: 'fa6-solid:plane-departure', image: IMG.port, blurb: 'Marítimas (FCL/LCL), aéreas y puerta a puerta a cualquier destino del mundo.' },
  { id: 'vehiculos', title: 'Traslado de Vehículos', slug: 'traslado-de-vehiculos', icon: 'fa6-solid:car', image: IMG.containers, blurb: 'Autos, motos y vehículos clásicos en contenedor o Ro-Ro, con todos los permisos.' },
  { id: 'mascotas', title: 'Traslado de Mascotas', slug: 'traslado-de-mascotas', icon: 'fa6-solid:paw', image: IMG.team, blurb: 'Reubicación internacional de perros, gatos y más, con gestión veterinaria y aduanal.' },
  { id: 'contenedores', title: 'Contenedores y Logística', slug: 'contenedores-y-logistica', icon: 'fa6-solid:box', image: IMG.containers, blurb: 'Contenedores de 20 y 40 pies, drop-off en tu casa y almacenamiento temporal.' },
  { id: 'locales', title: 'Mudanzas Locales y Nacionales', slug: 'mudanzas-locales-nacionales', icon: 'fa6-solid:truck-fast', image: IMG.boxes, blurb: 'Dentro de la ciudad, entre provincias y servicio express de última hora.' },
  { id: 'cliente', title: 'Mudanzas por Tipo de Cliente', slug: 'mudanzas-por-tipo-de-cliente', icon: 'fa6-solid:users', image: IMG.team, blurb: 'Residenciales, corporativas, expatriados, estudiantes y jubilados.' },
  { id: 'especiales', title: 'Artículos Especiales y de Alto Valor', slug: 'articulos-especiales', icon: 'fa6-solid:gem', image: IMG.packing, blurb: 'Obras de arte, pianos, vinos finos y equipo deportivo con embalaje a medida.' },
  { id: 'complementarios', title: 'Servicios Complementarios', slug: 'servicios-complementarios', icon: 'fa6-solid:boxes-stacked', image: IMG.warehouse, blurb: 'Embalaje profesional, seguros, almacenaje, gestión aduanera y limpieza final.' },
  { id: 'casillero', title: 'Casillero y Courier', slug: 'casillero-courier', icon: 'fa6-solid:box-archive', image: IMG.containers, blurb: 'Casillero en Miami para tus compras en USA y courier internacional puerta a puerta.' },
];

export const categoryById = (id: string) => categories.find((c) => c.id === id);

/* ---------------- Servicios (Tanda 1: Internacionales) ---------------- */
export const services: Service[] = [
  {
    id: 'maritimas',
    categoryId: 'internacionales',
    slug: 'mudanzas-internacionales-maritimas',
    icon: 'fa6-solid:ship',
    title: 'Mudanzas Internacionales Marítimas',
    metaTitle: 'Mudanzas Internacionales Marítimas desde Panamá | PIM',
    metaDescription:
      'Mudanza internacional por vía marítima desde Panamá: contenedor exclusivo (FCL) o compartido (LCL), fletes, tiempos de tránsito y gestión aduanera puerta a puerta.',
    heroTagline: 'La forma más económica de mover una casa completa entre continentes.',
    heroImage: IMG.port,
    intro: [
      'La mudanza marítima es, por amplio margen, la opción preferida para trasladar el menaje completo de una vivienda entre países. Un contenedor marítimo ofrece la mejor relación entre volumen, protección y costo: puede alojar desde el mobiliario de un apartamento hasta el de una casa de varias habitaciones, viajando sellado y asegurado de puerto a puerto.',
      'En Panamá International Movers coordinamos cada mudanza marítima de principio a fin —empaque de exportación, estiba, documentación, flete internacional y desaduanización en destino— para que usted solo se preocupe por llegar a su nuevo hogar. Nuestra ubicación en el hub logístico de las Américas nos da acceso privilegiado a navieras y frecuencias hacia todos los continentes.',
    ],
    sections: [
      {
        heading: '¿Cómo funciona una mudanza marítima?',
        body: [
          'Todo comienza con una inspección —presencial o por videollamada— en la que calculamos el volumen real de su carga en metros cúbicos (CBM). Ese dato define si le conviene un contenedor exclusivo o uno compartido, y es la base de una cotización exacta, sin sorpresas.',
          'El día de la mudanza, nuestro equipo empaca sus pertenencias con materiales de calidad de exportación, elabora un inventario detallado y estiba la carga de forma que aproveche cada centímetro del contenedor y viaje inmovilizada. Luego gestionamos el flete con la naviera, emitimos el Bill of Lading y tramitamos la documentación de exportación e importación.',
          'Al llegar a destino, nuestra red de agentes locales se encarga de la desaduanización, el transporte terrestre de última milla y —si contrata el servicio puerta a puerta— la entrega, el desembalaje básico y el retiro de material sobrante en su nueva casa.',
        ],
        image: IMG.containers,
      },
      {
        heading: 'Fletes y factores que definen el precio',
        body: [
          'El costo de una mudanza marítima depende principalmente de tres variables: el volumen (m³ o el tipo de contenedor), la ruta origen-destino y los servicios complementarios que elija (embalaje, seguro, almacenaje, puerta a puerta). A mayor volumen, menor es el costo por metro cúbico, por lo que consolidar bien la carga es clave para ahorrar.',
          'Existen recargos que conviene conocer de antemano: tarifas portuarias, manejo en terminal, posibles inspecciones de aduana y almacenaje si la carga no se retira a tiempo. Nuestro coordinador se los explica con claridad en la cotización para que el presupuesto que recibe sea el que realmente paga.',
        ],
      },
      {
        heading: 'Tiempos de tránsito',
        body: [
          'El tiempo total de una mudanza marítima combina el tránsito del barco con los procesos de origen y destino (empaque, consolidación, aduanas y entrega). El tránsito marítimo varía según la ruta y las conexiones de la naviera; los trámites aduaneros y la última milla suman días adicionales que dependen de cada país.',
          'En la página de cada destino encontrará los tiempos estimados de ese corredor específico. Como regla general, una mudanza puerta a puerta debe planificarse con varias semanas de anticipación para asegurar espacio en la naviera a las mejores tarifas.',
        ],
      },
      {
        heading: '¿Qué contenedor necesita: 20 o 40 pies?',
        body: [
          'La elección del contenedor es la decisión que más impacta el costo de una mudanza marítima. El contenedor estándar de 20 pies suele acomodar el menaje de un apartamento o una casa pequeña de una a dos habitaciones; el de 40 pies —y su versión High Cube, con mayor altura— duplica la capacidad y es ideal para viviendas de tres o más habitaciones, o cuando se combina el menaje con un automóvil.',
          'Cargar de más un contenedor pequeño obliga a un segundo envío; contratar uno demasiado grande implica pagar espacio vacío. Por eso la inspección de volumen es tan importante: le recomendamos exactamente lo que necesita, ni más ni menos, y aprovechamos cada centímetro con una estiba profesional.',
        ],
        image: IMG.port,
      },
      {
        heading: 'Panamá: una ventaja logística única',
        body: [
          'Pocas ciudades del mundo están tan bien posicionadas para una mudanza internacional como Panamá. Con el Canal, los puertos de Balboa (Pacífico) y Colón (Atlántico) y una de las mayores concentraciones de líneas navieras de la región, desde aquí se accede a frecuencias regulares hacia América, Europa, Asia y Oceanía.',
          'Esa conectividad se traduce en más opciones de ruta, mejores tarifas y tiempos de tránsito competitivos. Como empresa panameña con más de tres décadas operando en este hub, conocemos a fondo cómo aprovechar esa ventaja para su beneficio.',
        ],
      },
      {
        heading: 'Documentación y seguridad de su carga',
        body: [
          'Cada mudanza marítima se respalda con documentación formal: el inventario detallado de sus bienes, el Bill of Lading (conocimiento de embarque) que emite la naviera, y los documentos de exportación e importación que gestionamos en origen y destino. Este papeleo no es un trámite menor: es lo que agiliza la aduana y sustenta su seguro.',
          'Su contenedor viaja sellado desde el origen, con precinto numerado, y no se vuelve a abrir hasta el destino (salvo inspección aduanera aleatoria). Sumado a la póliza a todo riesgo, esto le da la tranquilidad de que su patrimonio está protegido durante todo el trayecto.',
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:sack-dollar', title: 'La opción más económica', text: 'El menor costo por metro cúbico para volúmenes medianos y grandes.' },
      { icon: 'fa6-solid:box', title: 'Ideal para casas completas', text: 'Un contenedor aloja el menaje de una vivienda entera con holgura.' },
      { icon: 'fa6-solid:shield-halved', title: 'Carga sellada y asegurada', text: 'Su contenedor viaja cerrado, inventariado y con póliza a todo riesgo.' },
      { icon: 'fa6-solid:earth-americas', title: 'Cobertura global', text: 'Frecuencias hacia América, Europa, Asia y Oceanía desde Panamá.' },
      { icon: 'fa6-solid:anchor', title: 'Ventaja del hub de Panamá', text: 'Puertos de Balboa y Colón con líneas navieras a todo el mundo.' },
      { icon: 'fa6-solid:car', title: 'Admite su vehículo', text: 'Combine menaje y auto en un solo contenedor de 40 pies.' },
    ],
    faqs: [
      { q: '¿Contenedor exclusivo o compartido?', a: 'Si mueve una casa completa, el contenedor exclusivo (FCL) suele ser más conveniente y rápido. Si solo lleva algunos muebles o cajas, el contenedor compartido (LCL) le permite pagar únicamente por el espacio que ocupa. En la inspección le recomendamos la opción óptima según su volumen.' },
      { q: '¿Con cuánta anticipación debo reservar?', a: 'Recomendamos iniciar el proceso entre 4 y 6 semanas antes de la fecha deseada. Esto asegura espacio en la naviera, tiempo para inspección y empaque, y la contratación del seguro con las mejores condiciones.' },
      { q: '¿El seguro está incluido?', a: 'El seguro se cotiza aparte porque depende del valor declarado de su menaje. Ofrecemos pólizas a todo riesgo puerta a puerta a través de aseguradoras internacionales y le asesoramos sobre el valor a declarar.' },
      { q: '¿Puedo enviar mi vehículo por vía marítima?', a: 'Sí. Puede enviarlo dentro de un contenedor (compartiéndolo con su menaje o en exclusiva) o por sistema Ro-Ro. Le asesoramos sobre la opción más conveniente según el vehículo y el destino.' },
      { q: '¿Qué pasa si la aduana inspecciona mi contenedor?', a: 'Las inspecciones aleatorias son parte normal del comercio internacional. Como su carga está correctamente embalada e inventariada, el proceso es fluido; nuestro agente en destino gestiona la inspección y la continuación del despacho.' },
    ],
    related: ['fcl', 'lcl', 'aereas', 'puerta-a-puerta'],
  },
  {
    id: 'fcl',
    categoryId: 'internacionales',
    slug: 'contenedor-exclusivo-fcl',
    icon: 'fa6-solid:box',
    title: 'Contenedor Exclusivo (FCL)',
    metaTitle: 'Contenedor Exclusivo FCL para Mudanzas | PIM Panamá',
    metaDescription:
      'Contenedor exclusivo (FCL) de 20 o 40 pies para mudanzas internacionales de casas completas: privacidad, rapidez y menor manipulación. Cotiza con PIM Panamá.',
    heroTagline: 'Todo su hogar en un contenedor propio, sellado en origen y abierto en destino.',
    heroImage: IMG.containers,
    intro: [
      'FCL (Full Container Load) significa que usted contrata un contenedor completo solo para su mudanza. Es la opción preferida cuando se traslada el menaje de una casa entera, porque combina privacidad, rapidez y la mínima manipulación de sus pertenencias: el contenedor se sella en su domicilio de origen y no se vuelve a abrir hasta el destino.',
      'En Panamá International Movers manejamos contenedores estándar de 20 pies y de 40 pies (incluido el 40 High Cube, con mayor altura), y le asesoramos sobre cuál se ajusta a su volumen para que no pague espacio de más ni se quede corto.',
    ],
    sections: [
      {
        heading: '¿Cuándo conviene un contenedor exclusivo?',
        body: [
          'El FCL es la elección natural para mudanzas de casas de dos o más habitaciones, familias que trasladan todo su mobiliario, o cuando se incluye un vehículo junto con el menaje. Al no compartir espacio con la carga de otros clientes, se elimina el tiempo de consolidación y se reduce el riesgo de daños por manipulación.',
          'Como referencia general, un contenedor de 20 pies suele acomodar el mobiliario de un apartamento o una casa pequeña, mientras que un 40 pies o 40 High Cube es adecuado para viviendas grandes o cuando se transporta un automóvil dentro del mismo contenedor.',
        ],
        image: IMG.boxes,
      },
      {
        heading: 'Ventajas frente al contenedor compartido',
        body: [
          'La principal ventaja del FCL es que su carga viaja sola: menos manipulación, menos riesgo y tiempos de tránsito más predecibles, ya que no depende de que se complete un grupaje. Además, el sellado en origen aporta seguridad y facilita los trámites aduaneros.',
          'Si su volumen es pequeño, sin embargo, un contenedor exclusivo puede resultar en espacio pagado y no utilizado; en ese caso el LCL (compartido) suele ser más económico. Nuestro coordinador le ayuda a tomar la decisión correcta.',
        ],
      },
      {
        heading: '20 pies, 40 pies o 40 High Cube: cuál elegir',
        body: [
          'El contenedor de 20 pies ofrece unos 33 metros cúbicos de capacidad, suficiente para el mobiliario de un apartamento o una casa pequeña. El de 40 pies duplica ese espacio, y la variante High Cube añade cerca de 30 cm de altura extra, ideal para muebles altos, electrodomésticos grandes o para ganar volumen apilable.',
          'La regla práctica: una casa de una a dos habitaciones suele caber en un 20 pies; una de tres o más, en un 40 pies o 40 High Cube. Si además lleva un vehículo, el 40 pies es casi siempre la elección correcta. En la inspección calculamos su volumen exacto para que no pague de más.',
        ],
        image: IMG.containers,
      },
      {
        heading: 'El sellado en origen: su mejor garantía',
        body: [
          'La característica que define al FCL es que su contenedor se cierra y se precinta en su domicilio de origen, con un sello numerado, y no se vuelve a abrir hasta el destino (salvo inspección aduanera). Nadie más manipula su carga en el camino.',
          'Esto no solo reduce drásticamente el riesgo de daños y pérdidas: también simplifica los trámites aduaneros, porque la integridad del precinto respalda que el contenido coincide con el inventario declarado. Es la máxima tranquilidad para quien mueve el hogar de toda una vida.',
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:lock', title: 'Privacidad total', text: 'Su carga viaja sola, sellada desde su casa hasta el destino.' },
      { icon: 'fa6-solid:gauge-high', title: 'Más rápido', text: 'Sin esperar la consolidación de un grupaje; tránsitos más predecibles.' },
      { icon: 'fa6-solid:hand-holding-heart', title: 'Menos manipulación', text: 'Menor riesgo de daños al no mezclarse con carga de terceros.' },
      { icon: 'fa6-solid:car', title: 'Admite vehículo', text: 'Puede combinar su menaje con un auto en el mismo contenedor.' },
    ],
    faqs: [
      { q: '¿Qué cabe en un contenedor de 20 pies?', a: 'Como referencia, el mobiliario de un apartamento o una casa pequeña de una a dos habitaciones. El volumen exacto lo determinamos en la inspección.' },
      { q: '¿Puedo enviar mi auto en el mismo contenedor?', a: 'Sí. En un contenedor de 40 pies es común combinar el menaje de casa con un vehículo, optimizando costos. Lo aseguramos y estibamos para que viaje protegido.' },
    ],
    related: ['maritimas', 'lcl', 'puerta-a-puerta'],
  },
  {
    id: 'lcl',
    categoryId: 'internacionales',
    slug: 'contenedor-compartido-lcl',
    icon: 'fa6-solid:layer-group',
    title: 'Contenedor Compartido (LCL / Groupage)',
    metaTitle: 'Contenedor Compartido LCL / Groupage | Mudanzas PIM',
    metaDescription:
      'Mudanza internacional en contenedor compartido (LCL / groupage): paga solo por el espacio que ocupas. Ideal para pocos muebles, estudiantes y envíos pequeños.',
    heroTagline: 'Paga solo por el espacio que ocupas. Perfecto para envíos pequeños.',
    heroImage: IMG.warehouse,
    intro: [
      'LCL (Less than Container Load), también llamado groupage o carga consolidada, permite compartir un mismo contenedor con la mercancía de otros clientes. Usted paga únicamente por el volumen que ocupa, medido en metros cúbicos, lo que lo convierte en la opción más económica para mudanzas pequeñas.',
      'Es la elección ideal para estudiantes, personas que se mudan con pocos muebles, envíos de complemento a una mudanza anterior o quienes trasladan solo objetos personales y cajas. En Panamá International Movers consolidamos su carga de forma segura e inventariada dentro del contenedor compartido.',
    ],
    sections: [
      {
        heading: 'Cómo funciona la consolidación (grupaje)',
        body: [
          'En un envío LCL, su carga se agrupa con la de otros clientes dentro de un mismo contenedor, en un almacén de consolidación. Cada lote va embalado, etiquetado e inventariado e identificado por cliente, de modo que nunca se confunde con el resto. Al llegar a destino, el contenedor se desconsolida —se abre y se separa cada lote— y su carga sigue su camino.',
          'Ese contenedor no sale porque usted esté listo, sino cuando la consolidación se completa hacia ese destino. Es la lógica de fondo del LCL: usted no alquila un espacio, se suma a uno que ya va en camino. De ahí viene el ahorro, y también las particularidades de plazo que explicamos más abajo.',
        ],
        image: IMG.warehouse,
      },
      {
        heading: 'Cómo se cobra el LCL: volumen, peso y cargos fijos',
        body: [
          'A diferencia del contenedor exclusivo, el LCL se factura por volumen (metros cúbicos) o por peso, según lo que resulte mayor. La regla existe porque un contenedor se llena por espacio o por tonelaje, lo que ocurra primero: una caja de libros pesa mucho en poco volumen, un sofá ocupa mucho volumen con poco peso. Por eso un buen empaque influye directamente en el costo.',
          'Hay un segundo componente que conviene entender desde el principio: los cargos fijos. Manejo en terminal, desconsolidación en destino, documentación y despacho aduanero cuestan prácticamente lo mismo tanto si envía dos metros cúbicos como si envía ocho. En envíos muy pequeños esos cargos pueden pesar más que el flete mismo. Se lo decimos antes, no después.',
        ],
        image: IMG.packing,
      },
      {
        heading: 'Tiempos: por qué el grupaje suele tardar más',
        body: [
          'El LCL casi siempre tarda más que un contenedor exclusivo, y no por el barco. Tarda más porque hay dos pasos extra: la carga espera en origen a que se complete la consolidación hacia su destino, y en destino debe desconsolidarse antes de que le entreguen su lote. Ninguno de esos dos pasos existe en un FCL, que viaja sellado de puerta a puerta.',
          'El tiempo total combina el tránsito marítimo con los procesos de origen y destino (empaque, aduanas y entrega). Le confirmamos el estimado exacto de este corredor en su cotización. Si su fecha es rígida —una fecha de inicio de clases, una entrega de vivienda—, dígalo desde el principio: puede cambiar la recomendación.',
        ],
      },
      {
        heading: 'LCL o FCL: dónde está el punto de quiebre',
        body: [
          'Existe un volumen a partir del cual el contenedor exclusivo cuesta menos por metro cúbico que el compartido. Ese punto de quiebre no es fijo: se mueve según la ruta, la temporada y los cargos de destino de cada país. Por eso no le vamos a dar aquí un número mágico que después no se cumpla.',
          'Lo que sí hacemos es calcular ambos escenarios con su volumen real y su corredor específico, y mostrárselos lado a lado en la cotización. A veces la sorpresa es agradable: hay casos en que un contenedor de 20 pies cuesta casi lo mismo que un LCL abultado, y encima llega antes y se manipula menos.',
        ],
      },
      {
        heading: '¿Para quién es ideal el contenedor compartido?',
        body: [
          'El LCL brilla cuando el volumen no justifica un contenedor entero: un estudiante que se va a cursar el año en el extranjero, una persona que solo lleva su habitación, o quien complementa una mudanza previa con algunas cajas adicionales.',
          'También es la vía natural para quien se muda ligero por decisión propia —lleva lo personal y compra el mobiliario en destino— y para el envío de complemento: esa caja de libros, herramientas o recuerdos que no cupo la primera vez y que tampoco justifica un flete aéreo.',
        ],
      },
      {
        heading: 'Cómo empacar para pagar menos',
        body: [
          'Como el LCL se factura por volumen, un buen embalaje se traduce directamente en ahorro: cajas bien armadas, sin espacios muertos y con dimensiones estándar aprovechan mejor el espacio. Desmontar muebles voluminosos también reduce metros cúbicos, y a menudo es la partida donde más se recorta.',
          'La otra mitad del consejo es qué dejar. Muebles de bajo valor y gran volumen, electrodomésticos con voltaje incompatible en destino o cosas que se reponen barato allá suelen costar más de enviar que de reemplazar. Nuestro equipo le asesora sobre qué conviene mandar y cómo empacarlo, sin comprometer la protección. Es la diferencia entre un envío eficiente y uno que paga espacio de aire.',
        ],
      },
      {
        heading: 'La cotización más barata no siempre es la más económica',
        body: [
          'En la búsqueda de una mudanza barata es fácil quedarse con el número más bajo de la lista. El problema es que ese número suele ser solo el flete. Los cargos de destino —desconsolidación, terminal, despacho, transporte final— llegan después, se cobran en la otra punta y son los que descuadran el presupuesto de mucha gente.',
          'Cuando compare, pida siempre el costo total estimado puerta a puerta y qué queda fuera. Nosotros se lo presentamos así desde la primera propuesta, con los conceptos separados. Preferimos que nuestra cotización parezca más alta al principio y sea la real al final.',
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:coins', title: 'Solo pagas tu espacio', text: 'Facturación por metro cúbico: ideal para volúmenes pequeños.' },
      { icon: 'fa6-solid:graduation-cap', title: 'Perfecto para estudiantes', text: 'La opción más común para quienes se mudan con pocas cajas.' },
      { icon: 'fa6-solid:list-check', title: 'Carga inventariada', text: 'Cada bulto va etiquetado e identificado dentro del grupaje.' },
      { icon: 'fa6-solid:earth-americas', title: 'Mismas rutas globales', text: 'Consolidaciones frecuentes hacia los principales destinos.' },
      { icon: 'fa6-solid:ruler-combined', title: 'Asesoría de empaque', text: 'Le ayudamos a bajar el volumen facturable sin perder protección.' },
      { icon: 'fa6-solid:receipt', title: 'Costo total a la vista', text: 'Flete y cargos de destino desglosados desde la primera propuesta.' },
    ],
    faqs: [
      { q: '¿El LCL es más barato que el FCL?', a: 'Para volúmenes pequeños, sí: paga solo por el espacio que ocupa. A medida que el volumen crece, el contenedor exclusivo se vuelve más eficiente por metro cúbico, y el punto exacto donde se cruzan depende de la ruta y de los cargos de destino. Le calculamos ambas opciones con su volumen real.' },
      { q: '¿Mi carga se mezcla con la de otros?', a: 'Comparte contenedor, pero su carga va embalada, etiquetada e inventariada, separada e identificada del resto del grupaje. En el almacén de consolidación cada lote se maneja como una unidad propia, y así se entrega en destino.' },
      { q: '¿Hay un volumen mínimo para enviar por LCL?', a: 'En la práctica casi siempre existe un mínimo facturable, porque por debajo de cierto tamaño los cargos fijos hacen que el envío deje de tener sentido económico. Si su volumen es muy pequeño, le decimos con franqueza si le conviene más un envío aéreo o un courier internacional.' },
      { q: '¿Puedo enviar mi auto o mi moto en un contenedor compartido?', a: 'Un vehículo no viaja en un grupaje estándar: requiere su propio esquema, ya sea en contenedor o por sistema Ro-Ro, con documentación y trámite aduanero específicos. Si necesita mover menaje y vehículo, le planteamos la combinación más conveniente.' },
      { q: '¿La carga compartida se manipula más? ¿Debo asegurarla?', a: 'Sí se manipula más: hay consolidación en origen y desconsolidación en destino, pasos que un FCL no tiene. Por eso el embalaje profesional importa aún más aquí, y por eso recomendamos siempre contratar seguro sobre el valor declarado. Se cotiza aparte y le asesoramos sobre cómo declarar.' },
      { q: '¿Cuándo conviene el aéreo en lugar del LCL?', a: 'Cuando el volumen es realmente pequeño y la urgencia es alta. En envíos muy reducidos la diferencia de precio entre mar y aire se estrecha, y el aéreo llega en una fracción del tiempo. Le comparamos ambas vías en la misma cotización para que decida con números a la vista.' },
    ],
    related: ['maritimas', 'fcl', 'aereas'],
  },
  {
    id: 'aereas',
    categoryId: 'internacionales',
    slug: 'mudanzas-internacionales-aereas',
    icon: 'fa6-solid:plane-departure',
    title: 'Mudanzas Internacionales Aéreas',
    metaTitle: 'Mudanzas Internacionales Aéreas desde Panamá | PIM',
    metaDescription:
      'Mudanza aérea internacional desde Panamá: la opción más rápida para envíos urgentes o de poco volumen. Empaque especializado y gestión aduanera puerta a puerta.',
    heroTagline: 'Cuando el tiempo es lo más importante: su mudanza en días, no semanas.',
    heroImage: IMG.plane,
    intro: [
      'La mudanza aérea es la vía más rápida para trasladar sus pertenencias entre países. Aunque su costo por kilo es mayor que el marítimo, resulta insustituible cuando el tiempo apremia: reubicaciones laborales urgentes, documentos y equipos que necesita de inmediato, o envíos de poco volumen donde la rapidez compensa.',
      'En Panamá International Movers gestionamos su mudanza aérea con empaque especializado para minimizar peso y volumen, coordinación con aerolíneas de carga y toda la documentación de exportación e importación, incluyendo la desaduanización en destino.',
    ],
    sections: [
      {
        heading: '¿Cuándo elegir la vía aérea?',
        body: [
          'La mudanza aérea tiene sentido cuando necesita sus cosas con urgencia o cuando el volumen es reducido: una habitación, equipaje adicional, equipos profesionales o artículos de valor que prefiere que viajen rápido y con menos manipulación.',
          'Muchas familias combinan ambos modos: envían por avión lo indispensable para las primeras semanas y por barco el resto del menaje. Nuestro coordinador le ayuda a decidir qué conviene enviar por cada vía para optimizar tiempo y presupuesto.',
        ],
        image: IMG.boxes,
      },
      {
        heading: 'Empaque y peso: la clave del costo aéreo',
        body: [
          'En el transporte aéreo se cobra por el mayor valor entre el peso real y el peso volumétrico, por lo que un embalaje eficiente es determinante. Nuestro equipo empaca para proteger sus bienes a la vez que reduce peso y volumen innecesarios.',
          'Igual que en la vía marítima, tramitamos la documentación y la aduana en origen y destino, y podemos ofrecer servicio puerta a puerta para que reciba su envío en la comodidad de su nuevo hogar.',
        ],
      },
      {
        heading: 'Peso real vs. peso volumétrico: entienda su tarifa',
        body: [
          'En el transporte aéreo hay un concepto que conviene conocer: la aerolínea cobra por el mayor valor entre el peso real (lo que pesa en la báscula) y el peso volumétrico (el espacio que ocupa, convertido a peso mediante una fórmula). Un envío liviano pero voluminoso —como cojines o lámparas— puede facturarse por su volumen, no por su peso real.',
          'Por eso el empaque profesional es decisivo en la vía aérea: comprimimos y protegemos a la vez, eliminando aire y volumen innecesario para que su tarifa sea la más baja posible sin arriesgar sus bienes.',
        ],
        image: IMG.plane,
      },
      {
        heading: 'La estrategia inteligente: combinar aéreo y marítimo',
        body: [
          'Muchas familias experimentadas no eligen entre avión y barco: usan ambos. Envían por vía aérea un "kit de primeras semanas" —ropa, artículos esenciales, algo de menaje— para tenerlo disponible apenas llegan, y por vía marítima el grueso del hogar, que llega semanas después sin prisa.',
          'Esta combinación ofrece lo mejor de los dos mundos: la rapidez donde importa y la economía en el volumen grande. Nuestro coordinador le ayuda a decidir qué conviene enviar por cada vía para optimizar tiempo y presupuesto.',
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:bolt', title: 'La opción más rápida', text: 'Días en lugar de semanas para tener sus cosas en destino.' },
      { icon: 'fa6-solid:feather', title: 'Ideal para poco volumen', text: 'Perfecta para envíos pequeños o de complemento.' },
      { icon: 'fa6-solid:briefcase', title: 'Reubicaciones urgentes', text: 'La mejor aliada del expatriado con un traslado laboral inmediato.' },
      { icon: 'fa6-solid:file-shield', title: 'Aduanas gestionadas', text: 'Documentación y desaduanización coordinadas por nosotros.' },
    ],
    faqs: [
      { q: '¿Es mucho más cara que la marítima?', a: 'El costo por kilo es mayor, pero para volúmenes pequeños o envíos urgentes la diferencia se justifica por la rapidez. Para casas completas, la vía marítima sigue siendo la más económica.' },
      { q: '¿Puedo combinar avión y barco?', a: 'Sí, es muy común. Enviamos por aire lo esencial para sus primeras semanas y por mar el resto del menaje, optimizando tiempo y costo.' },
    ],
    related: ['maritimas', 'lcl', 'puerta-a-puerta'],
  },
  {
    id: 'puerta-a-puerta',
    categoryId: 'internacionales',
    slug: 'mudanza-puerta-a-puerta',
    icon: 'fa6-solid:house-chimney-window',
    title: 'Mudanza Puerta a Puerta (Door-to-Door)',
    metaTitle: 'Mudanza Puerta a Puerta (Door-to-Door) Internacional | PIM',
    metaDescription:
      'Servicio llave en mano: recogemos en tu casa de origen y entregamos en tu nuevo hogar. También door-to-port y port-to-port si prefieres gestionar parte del trámite.',
    heroTagline: 'El servicio llave en mano: de su sala de estar actual a la nueva, sin que mueva un dedo.',
    heroImage: IMG.team,
    intro: [
      'La mudanza puerta a puerta (door-to-door) es el servicio más completo y cómodo: nos encargamos absolutamente de todo, desde el empaque en su domicilio de origen hasta la entrega, el desembalaje básico y el retiro de material en su nuevo hogar. Usted no tiene que coordinar con puertos, navieras ni agentes de aduana: un solo interlocutor —su coordinador de PIM— responde por toda la cadena.',
      'Para clientes que prefieren manejar parte del proceso por su cuenta, ofrecemos también las modalidades door-to-port (le entregamos en el puerto de destino) y port-to-port (de puerto a puerto), que reducen costos a cambio de que usted asume ciertos trámites.',
    ],
    sections: [
      {
        heading: '¿Qué incluye el servicio puerta a puerta?',
        body: [
          'El door-to-door abarca la inspección y cotización, el suministro de materiales, el empaque profesional de exportación, el inventario, la carga, el flete internacional (marítimo o aéreo), toda la documentación y aduanas en origen y destino, el transporte de última milla y la entrega con desembalaje básico. Es, literalmente, una mudanza llave en mano.',
          'Conviene precisar qué es el desembalaje básico, porque el término se usa con ligereza en el sector. Abrimos las cajas, ubicamos el mobiliario donde usted indique, montamos lo que desmontamos en origen y retiramos el material sobrante. No incluye ordenar su ropa ni instalar el televisor en la pared: ese acompañamiento existe y se cotiza aparte.',
          'Es la modalidad preferida por familias y expatriados que valoran su tiempo, porque elimina la complejidad logística y concentra la responsabilidad en un único proveedor.',
        ],
        image: IMG.packing,
      },
      {
        heading: 'Door-to-door, door-to-port y port-to-port: dónde termina la responsabilidad',
        body: [
          'Las tres modalidades se diferencian por un solo criterio: en qué punto deja de responder el transportista y empieza a responder usted. El door-to-door responde hasta la puerta de su nueva casa. El door-to-port llega hasta el puerto de destino, y ahí usted asume el despacho y el transporte final. El port-to-port cubre solo el tramo entre puertos: el empaque en origen y todo el destino corren por su cuenta.',
          'Ese “por su cuenta” significa contratar un agente de aduanas local, presentar el inventario valorizado en el idioma del país, pagar los impuestos que correspondan, coordinar la desconsolidación de la carga en terminal y conseguir el camión de última milla. Nada de eso es imposible. Pero se hace en un país donde usted acaba de llegar.',
          'De ahí una advertencia: al comparar cotizaciones, verifique en qué punto termina cada una. Una propuesta notablemente más barata suele cubrir menos trayecto, no tener mejor flete, y la diferencia reaparece como gastos de destino que nadie le anticipó. Nosotros le entregamos las tres modalidades con su alcance escrito.',
        ],
      },
      {
        heading: 'Un solo interlocutor, de principio a fin',
        body: [
          'La mayor ventaja del puerta a puerta no es solo logística: es humana. En lugar de coordinar por su cuenta con la empresa de empaque, la naviera, el agente de aduanas de origen, el de destino y el transportista de última milla —cada uno con sus tiempos y su idioma—, usted tiene un único coordinador personal que responde por toda la cadena.',
          'La diferencia se nota sobre todo cuando algo se sale del guion, que en una mudanza internacional ocurre más de lo que se admite: una naviera que reprograma la salida, una inspección aleatoria, un feriado local que nadie tenía en el calendario. Con un solo interlocutor usted recibe una llamada con lo que pasó y el plan. Sin él, recibe el silencio de cinco proveedores que se derivan la responsabilidad entre sí.',
        ],
        image: IMG.team,
      },
      {
        heading: 'Cómo avanza una mudanza puerta a puerta',
        body: [
          'La primera fase es la inspección. Recorremos su vivienda —presencialmente o por videollamada— y levantamos el volumen real de la carga en metros cúbicos (CBM), la unidad con la que cotiza todo el sector. De ahí salen la vía recomendada, el tipo de contenedor y una cotización cerrada. Es gratuita y no compromete a nada.',
          'La segunda es el origen. Nuestro equipo empaca con estándar de exportación, elabora el inventario pieza por pieza y estiba la carga: la acomoda e inmoviliza dentro del contenedor para que no se desplace en travesía. Se cierra con precinto numerado, el sello de seguridad que solo se rompe legítimamente en aduana. En paralelo tramitamos la documentación de exportación.',
          'La tercera es el destino: nuestra red recibe la carga, gestiona el despacho aduanero, coordina la última milla y entrega en su nueva vivienda. El tiempo total combina el tránsito marítimo con los procesos de origen y destino (empaque, aduanas y entrega). Le confirmamos el estimado exacto de este corredor en su cotización.',
        ],
      },
      {
        heading: 'La aduana de destino: el tramo que más agradece delegar',
        body: [
          'De toda la cadena, la aduana es donde un puerta a puerta se paga solo. Cada país tiene su propio régimen de menaje de casa, y el costo de equivocarse se cobra en almacenaje diario mientras la carga espera detenida en terminal.',
          'El caso panameño lo ilustra. Panamá reconoce una franquicia de menaje de casa de B/.25.000 de valor aduanero, por una sola vez, para el extranjero que compruebe venir a domiciliarse y para el panameño que haya residido en el exterior dos años o más (Artículo 216 del Decreto de Gabinete N.º 41 de 2002). Es un beneficio real, pero exige acreditar la condición y declarar el menaje correctamente. Lo que exceda la franquicia no tiene tasa única: se liquida por partida arancelaria, más ITBMS. Y la ley exige la intervención de un Agente Corredor de Aduana.',
          'Ese tipo de detalle cambia el resultado de una mudanza y no se improvisa desde otro país. En el puerta a puerta ya está incluido y ya tiene responsable.',
        ],
        image: IMG.port,
      },
      {
        heading: 'Lo que el puerta a puerta no puede prometerle',
        body: [
          'Un servicio llave en mano cubre toda la cadena, pero no suspende las reglas del comercio internacional. Hay tres cosas que ninguna empresa seria puede garantizarle. La primera es la fecha exacta de entrega: comprometemos un estimado sólido y le avisamos de cualquier cambio, pero la salida de un buque y el ritmo de una aduana no dependen de nosotros.',
          'La segunda es que su contenedor no sea inspeccionado; las revisiones aleatorias son parte normal del sistema. Lo que sí controlamos es llegar preparados, con inventario que cuadre y documentación en regla: eso convierte una inspección en un trámite de horas y no en un problema de semanas.',
          'La tercera es que podamos llevarlo todo. Cada país mantiene su lista de artículos prohibidos y restringidos: perecederos, plantas, ciertos líquidos y aerosoles, armas, inflamables. En la inspección revisamos su inventario con esa lista en mano.',
        ],
      },
      {
        heading: '¿Para quién es ideal el servicio llave en mano?',
        body: [
          'El puerta a puerta es la elección natural para familias, profesionales y ejecutivos que valoran su tiempo y su tranquilidad por encima del ahorro marginal de gestionar parte del proceso. Si es su primera mudanza internacional, si no habla el idioma del destino o si simplemente prefiere concentrarse en su nueva vida, esta es la opción para usted.',
          'Las modalidades door-to-port y port-to-port, en cambio, encajan mejor con quienes tienen experiencia en importación o cuentan con apoyo local en destino. En la cotización le mostramos las tres opciones con sus costos y responsabilidades, para que decida con total claridad.',
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:hand-sparkles', title: 'Cero preocupaciones', text: 'Nos encargamos de todo; usted solo llega a su nuevo hogar.' },
      { icon: 'fa6-solid:user-tie', title: 'Un solo interlocutor', text: 'Su coordinador responde por toda la cadena, de principio a fin.' },
      { icon: 'fa6-solid:scale-balanced', title: 'Opciones a su medida', text: 'Door-to-port y port-to-port para ajustar costo y control.' },
      { icon: 'fa6-solid:boxes-packing', title: 'Desembalaje incluido', text: 'Entregamos, desembalamos lo básico y retiramos el material.' },
      { icon: 'fa6-solid:file-signature', title: 'Aduanas resueltas', text: 'Despacho en origen y destino gestionado por nuestra red.' },
      { icon: 'fa6-solid:receipt', title: 'Alcance por escrito', text: 'Sabe exactamente dónde termina cada modalidad antes de firmar.' },
    ],
    faqs: [
      { q: '¿Cuál es la diferencia con port-to-port?', a: 'El puerta a puerta cubre todo, de su casa actual a la nueva. El port-to-port cubre solo el tramo entre puertos: usted gestiona el empaque, la aduana de destino y el transporte final. El door-to-port es un punto intermedio: llevamos la carga hasta el puerto de destino y usted asume el despacho y la última milla.' },
      { q: '¿El puerta a puerta es mucho más caro?', a: 'Incluye más servicios, por lo que su precio es mayor que el port-to-port. Pero buena parte de esa diferencia no desaparece en las otras modalidades: reaparece en destino como agente de aduanas, transporte local y almacenaje que usted paga por separado.' },
      { q: '¿Tengo que estar presente el día del empaque?', a: 'Es muy recomendable que usted o alguien de su confianza esté al inicio y al cierre. El inventario se levanta pieza por pieza y conviene que lo revise y lo firme. También es el momento de apartar lo que viajará con usted: documentos, medicamentos, joyas y objetos irremplazables.' },
      { q: '¿Puedo incluir mi vehículo?', a: 'Sí. Puede viajar dentro del mismo contenedor junto con su menaje o por separado, según el volumen y el destino. Requiere documentación y trámite aduanero propios, que también gestionamos, y se lo cotizamos dentro del mismo proyecto.' },
      { q: '¿Qué pasa si mi nueva vivienda no está lista al llegar la carga?', a: 'Es frecuente y tiene solución: almacenaje temporal en destino hasta que pueda recibir. Avísenos apenas lo sospeche, porque el almacenaje planificado cuesta bastante menos que la carga detenida en terminal generando cargos por demora.' },
      { q: '¿Cómo sé en qué punto va mi mudanza?', a: 'Su coordinador le informa en cada hito: cierre del inventario, salida del contenedor, llegada a destino, inicio del despacho aduanero y coordinación de la entrega. No tiene que perseguir a nadie para saber dónde está su casa.' },
    ],
    related: ['maritimas', 'fcl', 'aereas'],
  },

  /* ============ TANDA 2 · Traslado de Vehículos ============ */
  {
    id: 'auto-contenedor',
    categoryId: 'vehiculos',
    slug: 'envio-de-autos-en-contenedor',
    icon: 'fa6-solid:box',
    title: 'Envío de Autos en Contenedor',
    metaTitle: 'Envío de Autos en Contenedor Internacional | PIM Panamá',
    metaDescription:
      'Transporte internacional de autos en contenedor desde Panamá: máxima protección, ideal para vehículos nuevos, de lujo o clásicos. Trámites y seguro incluidos.',
    heroTagline: 'La forma más segura de enviar su vehículo al extranjero: sellado y protegido.',
    heroImage: IMG.containers,
    intro: [
      'Enviar un automóvil dentro de un contenedor es la opción más segura para cruzar fronteras. El vehículo viaja inmovilizado, resguardado de la intemperie y de cualquier manipulación externa, lo que lo hace ideal para autos nuevos, de lujo, deportivos o clásicos cuyo valor justifica la máxima protección.',
      'En Panamá International Movers aseguramos, estibamos y trincamos su vehículo con puntos de anclaje profesionales, y gestionamos toda la documentación de exportación e importación para que llegue a destino listo para rodar.',
    ],
    sections: [
      {
        heading: 'Contenedor exclusivo o compartido para su auto',
        body: [
          'Puede enviar su vehículo en un contenedor exclusivo o compartirlo con su menaje de casa para optimizar costos: en un contenedor de 40 pies es habitual combinar el auto con las cajas y muebles de la mudanza.',
          'También es posible consolidar el vehículo con la carga de otros clientes (varios autos por contenedor), una alternativa más económica cuando no se envía menaje.',
        ],
        image: IMG.port,
      },
      {
        heading: 'Documentación y permisos',
        body: [
          'El envío internacional de vehículos exige documentación específica: título de propiedad, factura, y el cumplimiento de las normas de importación del país de destino, que a veces limita antigüedad, emisiones o exige homologación. Nuestro equipo le orienta sobre los requisitos de cada corredor.',
        ],
      },
      {
        heading: '¿Puedo cargar cajas dentro del auto?',
        body: [
          'A diferencia del Ro-Ro, donde el vehículo viaja vacío, en un contenedor muchos países permiten cargar el auto con menaje debidamente inventariado, aprovechando el espacio interior. Es una forma inteligente de optimizar el envío cuando además está mudando su casa.',
          'La posibilidad y los límites dependen de la naviera y de la normativa del país de destino, por lo que se lo confirmamos según su corredor antes de planificar la carga.',
        ],
        image: IMG.boxes,
      },
      {
        heading: 'Preparación del vehículo antes de embarcar',
        body: [
          'Todo vehículo se prepara para el viaje internacional: se reduce el nivel de combustible al mínimo requerido por seguridad, se documenta el estado con un registro fotográfico, se retiran objetos sueltos y se limpia el interior (clave para destinos con controles de bioseguridad). Luego se asegura y trinca dentro del contenedor con puntos de anclaje profesionales.',
          'Esta preparación protege su vehículo, agiliza la inspección aduanera y respalda su seguro. Nada se deja al azar.',
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:shield-halved', title: 'Máxima protección', text: 'Viaja sellado, sin exposición a la intemperie ni a terceros.' },
      { icon: 'fa6-solid:gem', title: 'Ideal para alto valor', text: 'La mejor opción para autos nuevos, de lujo o clásicos.' },
      { icon: 'fa6-solid:box', title: 'Combínalo con tu menaje', text: 'Aproveche el contenedor sumando la mudanza de su casa.' },
      { icon: 'fa6-solid:file-contract', title: 'Trámites incluidos', text: 'Gestionamos exportación, importación y permisos.' },
    ],
    faqs: [
      { q: '¿Puedo meter cajas dentro del auto?', a: 'Depende del país de destino y de la naviera; en muchos casos se permite cargar el vehículo con menaje debidamente inventariado. Se lo confirmamos según su ruta.' },
      { q: '¿Qué es más seguro, contenedor o Ro-Ro?', a: 'El contenedor ofrece mayor protección porque el auto viaja cerrado y sellado. El Ro-Ro es más económico pero el vehículo viaja en cubierta de carga rodada.' },
    ],
    related: ['auto-roro', 'motos', 'clasicos'],
  },
  {
    id: 'auto-roro',
    categoryId: 'vehiculos',
    slug: 'envio-de-autos-roll-on-roll-off',
    icon: 'fa6-solid:car',
    title: 'Envío de Autos en Roll-on/Roll-off (Ro-Ro)',
    metaTitle: 'Envío de Autos Ro-Ro (Roll-on/Roll-off) | PIM Panamá',
    metaDescription:
      'Transporte de vehículos Roll-on/Roll-off (Ro-Ro): la forma más económica de enviar tu auto al extranjero. El vehículo entra rodando al buque. Cotiza con PIM.',
    heroTagline: 'La alternativa más económica: su auto entra rodando al buque.',
    heroImage: IMG.port,
    intro: [
      'El sistema Roll-on/Roll-off (Ro-Ro) es la forma más económica de enviar un vehículo por mar. En lugar de introducirlo en un contenedor, el auto sube y baja del buque conduciéndolo por sus propios medios sobre rampas, en barcos especializados diseñados para carga rodada.',
      'Es una excelente opción para vehículos operativos de valor estándar cuando el objetivo principal es reducir el costo del flete, manteniendo un transporte profesional y asegurado.',
    ],
    sections: [
      {
        heading: '¿Cómo funciona el Ro-Ro?',
        body: [
          'El vehículo se entrega en la terminal portuaria, donde personal especializado lo conduce al interior del buque y lo trinca en una cubierta destinada a autos. Al llegar, se descarga del mismo modo y queda disponible para su desaduanización.',
          'Por ir en cubierta de carga (no sellado en contenedor), se recomienda para autos en buen estado operativo y no se suelen transportar objetos personales en su interior.',
        ],
        image: IMG.containers,
      },
      {
        heading: 'Ro-Ro vs. contenedor: cuál elegir',
        body: [
          'Elija Ro-Ro si busca el menor costo y su vehículo es de valor estándar. Elija contenedor si su auto es nuevo, de lujo o clásico, o si desea combinarlo con su mudanza de casa. Le mostramos ambas cotizaciones para que decida con claridad.',
        ],
      },
      {
        heading: 'Cómo es el proceso en el puerto',
        body: [
          'En un envío Ro-Ro, usted entrega el vehículo en la terminal portuaria dentro de la ventana acordada, con la documentación en regla. Personal especializado lo conduce al interior del buque y lo asegura en una cubierta destinada a carga rodada. Al llegar, se descarga del mismo modo y queda disponible para la desaduanización.',
          'Nuestro equipo coordina cada paso y le indica con precisión los tiempos y documentos necesarios para que la entrega y el retiro sean fluidos.',
        ],
        image: IMG.port,
      },
      {
        heading: 'Seguro y estado del vehículo',
        body: [
          'Aunque el Ro-Ro es económico, no renunciamos a la protección: ofrecemos póliza para el trayecto internacional y documentamos el estado del vehículo antes del embarque con un registro fotográfico. Así, ante cualquier eventualidad, hay respaldo.',
          'Por viajar en cubierta (no sellado en contenedor), el Ro-Ro se recomienda para vehículos operativos de valor estándar; para autos de alto valor, el contenedor sigue siendo la mejor opción.',
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:sack-dollar', title: 'La opción más económica', text: 'El menor costo de flete para enviar su vehículo por mar.' },
      { icon: 'fa6-solid:gauge-high', title: 'Proceso ágil', text: 'Carga y descarga rápidas: el auto entra y sale rodando.' },
      { icon: 'fa6-solid:ship', title: 'Buques especializados', text: 'Barcos diseñados específicamente para carga rodada.' },
      { icon: 'fa6-solid:file-shield', title: 'Asegurado', text: 'Ofrecemos póliza para el trayecto internacional.' },
    ],
    faqs: [
      { q: '¿Puedo enviar objetos dentro del auto en Ro-Ro?', a: 'Generalmente no se permite transportar objetos personales en el Ro-Ro, ya que el vehículo no viaja sellado. Si necesita enviar pertenencias, el contenedor es la opción adecuada.' },
      { q: '¿Mi auto debe estar operativo?', a: 'Sí, el vehículo debe poder conducirse para subir y bajar del buque. Para autos no operativos existen alternativas en contenedor.' },
    ],
    related: ['auto-contenedor', 'motos', 'clasicos'],
  },
  {
    id: 'motos',
    categoryId: 'vehiculos',
    slug: 'envio-de-motocicletas-internacional',
    icon: 'fa6-solid:motorcycle',
    title: 'Envío de Motocicletas Internacional',
    metaTitle: 'Envío de Motocicletas al Extranjero | PIM Panamá',
    metaDescription:
      'Transporte internacional de motocicletas desde Panamá: embalaje en crate de madera o consolidado en contenedor, con trámites y seguro. Cotiza tu envío.',
    heroTagline: 'Su moto viaja protegida, en cajón a medida o consolidada en contenedor.',
    heroImage: IMG.packing,
    intro: [
      'Trasladar una motocicleta a otro país requiere un embalaje cuidadoso para proteger carrocería, tanque y componentes durante el trayecto marítimo o aéreo. En Panamá International Movers preparamos su moto en un cajón de madera a medida (crate) o la consolidamos de forma segura dentro de un contenedor.',
      'Gestionamos la documentación de exportación e importación y el seguro, para que su motocicleta llegue en las mismas condiciones en que la entregó.',
    ],
    sections: [
      {
        heading: 'Opciones de embalaje',
        body: [
          'El crate de madera a medida es la opción más protectora: la moto se fija sobre una base, se inmoviliza y se encajona para resistir la manipulación portuaria. Para reducir costos, también consolidamos la moto dentro de un contenedor compartido, debidamente asegurada.',
        ],
        image: IMG.containers,
      },
      {
        heading: 'Preparación previa al envío',
        body: [
          'Antes de embarcar suele requerirse reducir el combustible del tanque y desconectar la batería por normas de seguridad. Nuestro equipo se encarga de dejar la moto lista para el transporte internacional.',
        ],
      },
      {
        heading: 'Marítimo o aéreo para su motocicleta',
        body: [
          'La mayoría de las motos viajan por vía marítima, en crate o consolidadas, por ser la opción más económica. Cuando el tiempo apremia —una competencia, una reubicación urgente— la vía aérea es posible: más rápida, aunque con un costo mayor y un embalaje aún más estricto.',
          'Le ayudamos a elegir según su urgencia, presupuesto y destino, y preparamos la moto conforme a los requisitos de cada modalidad.',
        ],
        image: IMG.plane,
      },
      {
        heading: 'Varias motos o junto con su mudanza',
        body: [
          'Si es coleccionista o se muda con más de una motocicleta, las consolidamos en un mismo contenedor para reducir el costo por unidad. Y si además traslada su casa, podemos incluir la moto junto al menaje, optimizando el envío en un solo flete.',
          'Cada moto viaja inmovilizada y protegida de forma individual, sin importar cuántas compartan el espacio.',
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:box-open', title: 'Crate a medida', text: 'Cajón de madera diseñado para su modelo de moto.' },
      { icon: 'fa6-solid:layer-group', title: 'Opción consolidada', text: 'Alternativa económica dentro de contenedor compartido.' },
      { icon: 'fa6-solid:shield-halved', title: 'Protección total', text: 'Inmovilización profesional contra golpes y vibración.' },
      { icon: 'fa6-solid:file-contract', title: 'Trámites y seguro', text: 'Documentación aduanera y póliza incluidas.' },
    ],
    faqs: [
      { q: '¿Debo vaciar el tanque de gasolina?', a: 'Por normas de seguridad marítima y aérea suele exigirse reducir al mínimo el combustible y, en aéreo, desconectar la batería. Nosotros preparamos la moto según la normativa.' },
      { q: '¿Puedo enviar varias motos juntas?', a: 'Sí, consolidamos varias motocicletas en un mismo contenedor, optimizando el costo por unidad.' },
    ],
    related: ['auto-contenedor', 'auto-roro', 'clasicos'],
  },
  {
    id: 'clasicos',
    categoryId: 'vehiculos',
    slug: 'envio-de-vehiculos-clasicos-alto-valor',
    icon: 'fa6-solid:award',
    title: 'Envío de Vehículos Clásicos o de Alto Valor',
    metaTitle: 'Envío de Autos Clásicos y de Alto Valor | PIM Panamá',
    metaDescription:
      'Transporte internacional de vehículos clásicos, de colección o de alto valor: contenedor exclusivo, trincaje especializado y seguro a valor declarado. PIM Panamá.',
    heroTagline: 'Para piezas irremplazables: contenedor exclusivo y cuidado de coleccionista.',
    heroImage: IMG.containers,
    intro: [
      'Un vehículo clásico o de colección no es un auto más: es una pieza de valor —a veces irremplazable— que exige un tratamiento especializado. Para estos casos recomendamos siempre el contenedor exclusivo, con trincaje suave que protege la carrocería y la suspensión, y un seguro a valor declarado.',
      'En Panamá International Movers tratamos cada vehículo de alto valor como lo que es: una inversión que debe llegar impecable.',
    ],
    sections: [
      {
        heading: 'Manejo de coleccionista',
        body: [
          'Utilizamos anclajes sobre las ruedas (no sobre el chasis) para no forzar la suspensión, materiales que no marcan la pintura y, cuando conviene, fundas protectoras. El objetivo es cero contacto y cero riesgo durante todo el trayecto.',
        ],
        image: IMG.packing,
      },
      {
        heading: 'Seguro a valor declarado',
        body: [
          'A diferencia de un auto estándar, aquí el seguro se dimensiona sobre el valor real de la pieza —muchas veces respaldado por avalúo—, garantizando una cobertura acorde a su importancia.',
        ],
      },
      {
        heading: 'Documentación del estado y avalúo',
        body: [
          'Antes de mover una pieza de colección, documentamos meticulosamente su estado: fotografías de detalle, registro de imperfecciones existentes e inventario de accesorios. Este expediente protege tanto al cliente como al proceso, y es la base para un seguro a valor declarado, idealmente respaldado por un avalúo reciente.',
          'Para vehículos de alto valor, esta documentación no es un extra: es parte esencial de un manejo profesional y responsable.',
        ],
        image: IMG.containers,
      },
      {
        heading: 'Coordinación discreta y a la medida',
        body: [
          'El traslado de un vehículo clásico o de alto valor merece un trato distinto. Asignamos un coordinador dedicado que planifica cada detalle —tiempos, ruta, condiciones del contenedor, manejo en puerto— y mantiene una comunicación discreta y constante con usted.',
          'Entendemos que no está moviendo un medio de transporte, sino una inversión y, a menudo, una pasión. Lo tratamos como tal.',
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:lock', title: 'Contenedor exclusivo', text: 'Sin compartir espacio: control total del entorno.' },
      { icon: 'fa6-solid:hand-holding-heart', title: 'Trincaje suave', text: 'Anclaje sobre ruedas que respeta carrocería y suspensión.' },
      { icon: 'fa6-solid:gem', title: 'Seguro a valor real', text: 'Cobertura dimensionada al valor de colección.' },
      { icon: 'fa6-solid:user-tie', title: 'Coordinador dedicado', text: 'Seguimiento personalizado de principio a fin.' },
    ],
    faqs: [
      { q: '¿Necesito un avalúo del vehículo?', a: 'Para asegurar a valor declarado es muy recomendable contar con un avalúo reciente. Le orientamos sobre cómo documentar el valor de su pieza.' },
      { q: '¿Usan fundas o protecciones especiales?', a: 'Sí. Según el vehículo, aplicamos fundas, protecciones de puntos de contacto y anclajes que no dañan la pintura ni el chasis.' },
    ],
    related: ['auto-contenedor', 'motos', 'especiales-arte'],
  },

  /* ============ TANDA 2 · Traslado de Mascotas ============ */
  {
    id: 'mascotas-internacional',
    categoryId: 'mascotas',
    slug: 'transporte-de-mascotas-internacional',
    icon: 'fa6-solid:paw',
    title: 'Transporte de Mascotas Internacional',
    metaTitle: 'Transporte de Mascotas Internacional (Pet Relocation) | PIM',
    metaDescription:
      'Reubicación internacional de mascotas desde Panamá: requisitos, guacales IATA, certificados veterinarios y gestión aduanal para que tu mascota viaje segura.',
    heroTagline: 'Un miembro más de la familia merece viajar seguro y sin estrés.',
    heroImage: IMG.team,
    intro: [
      'Mudar a una mascota a otro país (pet relocation) es un proceso delicado que combina requisitos veterinarios, sanitarios y aduaneros que varían según el destino. Un error en la documentación puede significar retrasos o incluso cuarentenas, por eso conviene planificar con tiempo y con expertos.',
      'En Panamá International Movers coordinamos el traslado internacional de su mascota de principio a fin: desde el guacal adecuado hasta los certificados y permisos, cuidando en todo momento su bienestar.',
    ],
    sections: [
      {
        heading: 'Requisitos generales: la lista base',
        body: [
          'La mayoría de los países exige microchip de identificación, vacuna antirrábica vigente (a menudo aplicada con cierta antelación), certificado de salud emitido por un veterinario autorizado y, en algunos casos, títulos de anticuerpos o permisos de importación específicos.',
          'A eso suelen sumarse tratamientos antiparasitarios internos y externos aplicados dentro de una ventana determinada antes del vuelo, y el endoso oficial del certificado por la autoridad sanitaria del país de origen. Ese endoso es un trámite aparte, con su propio horario y su propia oficina, y es donde más gente descubre tarde que le falta un papel.',
          'Cada destino tiene su propia lista; nuestro equipo la revisa contra el corredor exacto de su mudanza para que no falte ningún documento.',
        ],
        image: IMG.packing,
      },
      {
        heading: 'El orden importa tanto como la lista',
        body: [
          'Aquí está el error que más viajes retrasa: creer que los requisitos son una lista de compras que se puede completar en cualquier orden. No lo son. Son una secuencia encadenada, y cada eslabón condiciona al siguiente.',
          'El microchip debe estar implantado antes de la vacuna antirrábica para que esa vacuna sea válida; la prueba de anticuerpos solo se toma pasado cierto tiempo desde la vacuna; algunos países exigen además un período de espera desde la toma de la muestra hasta la fecha de entrada. Y el certificado de salud, en cambio, tiene una vigencia corta, así que se emite casi al final. Hacer un paso antes de tiempo puede invalidarlo tanto como hacerlo tarde. Por eso lo primero que armamos no es el expediente: es el calendario.',
        ],
      },
      {
        heading: 'Guacal IATA y bienestar animal',
        body: [
          'El transporte aéreo exige un guacal que cumpla las normas IATA: tamaño adecuado para que la mascota pueda estar de pie, darse la vuelta y echarse con naturalidad, ventilación en varios lados, cierres seguros y piso absorbente. Un guacal que se queda corto es motivo de rechazo en el mostrador, incluso con toda la documentación en regla.',
          'Le asesoramos en la elección y en algo que importa igual: la preparación. Un animal que conoce su guacal desde semanas antes, que ha comido y dormido dentro de él en casa, viaja mucho mejor que uno que lo ve por primera vez el día del vuelo. Ese acostumbramiento gradual es la medida más eficaz para reducir el estrés, y no cuesta nada.',
        ],
      },
      {
        heading: 'Cómo viaja: cabina, bodega presurizada o carga',
        body: [
          'Existen tres modalidades y no siempre puede elegir. En cabina viajan solo animales pequeños que caben en un bolso bajo el asiento, según la política de cada aerolínea. En bodega presurizada y climatizada viaja el equipaje acompañado, en el mismo vuelo que usted. Como carga (manifiesto aéreo) viaja de forma independiente, y es la vía habitual en reubicaciones internacionales, sobre todo si el animal es grande o si la ruta tiene conexiones.',
          'Hay restricciones que conviene conocer antes de comprar el boleto. Muchas aerolíneas limitan el traslado de razas braquicéfalas —de hocico corto, como bulldog o persa— por su mayor riesgo respiratorio, aplican embargos por temperatura en ciertas épocas del año y limitan el número de animales por vuelo. Confirmamos esas condiciones con la aerolínea antes de fijar la fecha, no después.',
        ],
        image: IMG.plane,
      },
      {
        heading: 'Cuarentena: qué esperar según el país',
        body: [
          'Uno de los factores que más varía entre destinos es la cuarentena. Algunos países no la exigen si la documentación está completa y correcta; otros, como Australia o Nueva Zelanda, aplican controles muy estrictos que pueden incluir períodos de cuarentena obligatoria. Anticipar esto es clave para planificar y evitar sorpresas.',
          'Revisamos el régimen exacto de su destino y le explicamos con claridad qué esperar, para que tome decisiones informadas sobre los tiempos y el bienestar de su mascota. Y si el destino es de los exigentes, se lo decimos de frente al principio: es mejor reorganizar el calendario familiar que descubrirlo con el animal ya en tránsito.',
        ],
      },
      {
        heading: 'El día del viaje, paso a paso',
        body: [
          'Coordinamos la logística del día: la entrega de la mascota en el terminal de carga dentro de la ventana adecuada, la última alimentación e hidratación, y la documentación lista para presentar. En destino, nuestra red gestiona la recepción, la inspección sanitaria y la reunión con su familia.',
          'Nuestro objetivo es que el trayecto sea lo más corto y tranquilo posible, con la mascota siempre atendida en cada punto de la cadena. Cuando la ruta obliga a conexión, priorizamos escalas cortas y aeropuertos con manejo adecuado de animales vivos, aunque el itinerario resulte algo menos directo.',
        ],
      },
      {
        heading: 'Perros, gatos y especies exóticas: cada caso es distinto',
        body: [
          'Aunque el marco general es el mismo, los detalles cambian bastante entre especies. Un perro grande plantea un desafío de guacal y de restricciones de aerolínea; un gato suele viajar con más facilidad pero es mucho más sensible al estrés y a los cambios de entorno; y las especies exóticas añaden una capa entera de normativa, incluida la convención CITES cuando se trata de especies protegidas.',
          'Por eso tratamos cada caso por separado y no con una plantilla única. Si ya sabe qué animal va a viajar, le conviene revisar la página específica de su especie: ahí están los detalles que aquí solo mencionamos en general.',
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:clipboard-check', title: 'Requisitos por país', text: 'Revisamos cada documento contra el destino exacto.' },
      { icon: 'fa6-solid:calendar-days', title: 'Calendario primero', text: 'Ordenamos la secuencia de trámites para que nada se invalide.' },
      { icon: 'fa6-solid:box', title: 'Guacal IATA', text: 'Asesoría en el guacal correcto y su preparación.' },
      { icon: 'fa6-solid:stethoscope', title: 'Gestión veterinaria', text: 'Coordinación de certificados, microchip y vacunas.' },
      { icon: 'fa6-solid:plane', title: 'Ruta y aerolínea', text: 'Confirmamos restricciones y escalas antes de fijar la fecha.' },
      { icon: 'fa6-solid:heart', title: 'Bienestar primero', text: 'Todo pensado para reducir el estrés de su mascota.' },
    ],
    faqs: [
      { q: '¿Con cuánta anticipación debo empezar?', a: 'Idealmente varias semanas o meses, porque algunas vacunas y pruebas de anticuerpos deben aplicarse con antelación mínima antes del viaje y varias tienen períodos de espera encadenados. Cuanto antes empecemos, más seguro es el proceso y menos probable es tener que mover la fecha.' },
      { q: '¿Habrá cuarentena en el destino?', a: 'Depende del país. Algunos destinos (como Australia) son muy estrictos; otros no exigen cuarentena si la documentación está completa. Se lo confirmamos según su ruta antes de que usted comprometa fechas.' },
      { q: '¿Mi mascota puede viajar conmigo en cabina?', a: 'Solo si es pequeña, cabe en un bolso bajo el asiento y la aerolínea lo permite en esa ruta. Cada aerolínea fija su propio límite de peso y medidas, y el cupo por vuelo es limitado. Para animales medianos o grandes, la vía es bodega presurizada o carga.' },
      { q: '¿Es seguro que viaje en bodega?', a: 'La bodega destinada a animales vivos es presurizada y climatizada, es decir, mantiene condiciones similares a las de la cabina. Lo que más influye en la seguridad no es la bodega en sí, sino el guacal correcto, la ruta bien elegida y una mascota sana y preparada. Sobre esas tres cosas sí trabajamos.' },
      { q: '¿Debo sedar a mi mascota para el vuelo?', a: 'La recomendación general de la práctica veterinaria y del sector aéreo es no sedar para viajes en avión: la sedación puede afectar la respiración y la regulación de temperatura en altura, y deja al animal menos capaz de mantenerse estable dentro del guacal. La decisión final es de su veterinario, pero conviene que llegue a esa conversación sabiéndolo.' },
      { q: '¿Y si mi perro es de raza braquicéfala o restringida?', a: 'No es un caso perdido, pero sí uno que exige planificar más. Muchas aerolíneas restringen razas de hocico corto y algunas prohíben ciertas razas por normativa del país de destino. Revisamos la ruta, buscamos la aerolínea que sí lo admite y le decimos con franqueza si el traslado no es aconsejable.' },
    ],
    related: ['mascotas-perros', 'mascotas-gatos', 'mascotas-exoticos'],
  },
  {
    id: 'mascotas-perros',
    categoryId: 'mascotas',
    slug: 'traslado-de-perros-al-extranjero',
    icon: 'fa6-solid:dog',
    title: 'Traslado de Perros al Extranjero',
    metaTitle: 'Traslado de Perros al Extranjero | Pet Relocation PIM Panamá',
    metaDescription:
      'Envío internacional de perros desde Panamá: microchip, vacuna antirrábica, certificado de salud y guacal IATA. Coordinamos todo para un viaje seguro.',
    heroTagline: 'Su perro llega sano y salvo a su nuevo hogar, dondequiera que esté.',
    heroImage: IMG.team,
    intro: [
      'El traslado internacional de perros es el más frecuente dentro del pet relocation, y también uno con requisitos muy definidos: identificación por microchip, vacuna antirrábica vigente y certificado sanitario. Algunas razas braquicéfalas (de hocico corto) tienen restricciones aéreas por su sensibilidad respiratoria.',
      'Coordinamos cada detalle para que su perro viaje seguro, cumpliendo las normas del país de destino.',
    ],
    sections: [
      {
        heading: 'Lo que necesita su perro',
        body: [
          'Microchip, cartilla de vacunación al día con antirrábica vigente, certificado de salud reciente y, según el destino, prueba de titulación de anticuerpos o tratamiento antiparasitario. Verificamos la lista exacta de su corredor.',
        ],
        image: IMG.packing,
      },
      {
        heading: 'Razas y guacal adecuado',
        body: [
          'El guacal debe permitir que el perro esté de pie y gire cómodamente. Para razas grandes preparamos guacales reforzados; para braquicéfalas, revisamos las políticas de la aerolínea, que a veces limitan su transporte en bodega.',
        ],
      },
      {
        heading: '¿Cabina, bodega o carga? Cómo viaja su perro',
        body: [
          'Los perros pueden viajar de tres formas según su tamaño y la aerolínea: en cabina (solo mascotas pequeñas que caben bajo el asiento), en bodega presurizada y climatizada (la mayoría de los perros medianos y grandes) o como carga (para envíos que no acompañan a un pasajero). Cada modalidad tiene requisitos distintos de guacal y documentación.',
          'La bodega, aunque suene inquietante, es un compartimento presurizado y con temperatura controlada, diseñado para el transporte seguro de animales. Le explicamos qué opción aplica a su perro y qué esperar en cada caso.',
        ],
        image: IMG.team,
      },
      {
        heading: 'Preparar a su perro para el viaje',
        body: [
          'Un perro preparado viaja mucho mejor. Recomendamos familiarizarlo con el guacal semanas antes, mantener su rutina de ejercicio para que llegue cansado y relajado, y seguir las pautas de alimentación del día del vuelo. La sedación suele desaconsejarse por sus riesgos en altura.',
          'Le entregamos una guía concreta de preparación adaptada a la edad, raza y temperamento de su perro, para que el traslado sea una experiencia segura.',
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:clipboard-check', title: 'Documentación completa', text: 'Microchip, antirrábica y certificado sanitario.' },
      { icon: 'fa6-solid:box', title: 'Guacal correcto', text: 'Del tamaño y resistencia adecuados a su perro.' },
      { icon: 'fa6-solid:triangle-exclamation', title: 'Aviso de restricciones', text: 'Le alertamos sobre razas con limitaciones aéreas.' },
      { icon: 'fa6-solid:heart', title: 'Cuidado y bienestar', text: 'Minimizamos el estrés en cada etapa del viaje.' },
    ],
    faqs: [
      { q: '¿Mi perro braquicéfalo (bulldog, pug) puede viajar?', a: 'Muchas aerolíneas restringen el transporte en bodega de razas de hocico corto por su sensibilidad respiratoria. Revisamos alternativas y aerolíneas que sí lo permitan según su ruta.' },
      { q: '¿Puede viajar en cabina conmigo?', a: 'Depende del tamaño del perro y la política de la aerolínea. Perros pequeños a veces viajan en cabina; los demás, en bodega presurizada y climatizada.' },
    ],
    related: ['mascotas-internacional', 'mascotas-gatos', 'mascotas-exoticos'],
  },
  {
    id: 'mascotas-gatos',
    categoryId: 'mascotas',
    slug: 'traslado-de-gatos-al-extranjero',
    icon: 'fa6-solid:cat',
    title: 'Traslado de Gatos al Extranjero',
    metaTitle: 'Traslado de Gatos al Extranjero | Pet Relocation PIM Panamá',
    metaDescription:
      'Envío internacional de gatos desde Panamá con todos los requisitos sanitarios y aduaneros. Guacal cómodo y coordinación completa para un viaje sin estrés.',
    heroTagline: 'Discretos y sensibles: preparamos cada detalle para su tranquilidad.',
    heroImage: IMG.team,
    intro: [
      'Los gatos son especialmente sensibles al cambio, por lo que su traslado internacional requiere planificación y un guacal cómodo que les dé seguridad. Los requisitos sanitarios son similares a los de los perros —microchip, antirrábica, certificado de salud— con las particularidades de cada destino.',
      'Coordinamos el proceso para que su gato viaje con el menor estrés posible y cumpliendo todas las normas.',
    ],
    sections: [
      {
        heading: 'Requisitos y documentación',
        body: [
          'Microchip de identificación, vacuna antirrábica vigente y certificado sanitario emitido por veterinario autorizado. Algunos destinos requieren pruebas adicionales; verificamos la lista exacta de su corredor.',
        ],
        image: IMG.packing,
      },
      {
        heading: 'Reducir el estrés del viaje',
        body: [
          'Recomendamos familiarizar al gato con el guacal días antes, usar mantas con su olor y, cuando el veterinario lo indique, apoyos para la ansiedad. Le damos pautas concretas para un viaje más llevadero.',
        ],
      },
      {
        heading: 'Por qué los gatos necesitan un cuidado especial',
        body: [
          'Los gatos son territoriales y sensibles al cambio de entorno; un traslado los saca de su zona de confort más que a un perro. Por eso el guacal debe ser un refugio conocido y seguro, y la preparación previa marca una diferencia enorme en su nivel de estrés durante el viaje.',
          'Además, muchos gatos ocultan el malestar, por lo que un chequeo veterinario previo es especialmente importante para confirmar que están en condiciones óptimas para volar.',
        ],
        image: IMG.team,
      },
      {
        heading: 'Trucos para un gato viajero tranquilo',
        body: [
          'Familiarícelo con el guacal semanas antes dejándolo abierto en casa con una manta que tenga su olor; alimente cerca o dentro para crear una asociación positiva. El día del viaje, evite comidas abundantes y mantenga la calma en la despedida.',
          'Sobre la sedación: en vuelo suele desaconsejarse por los riesgos en altura. Siga siempre la indicación de su veterinario; en la mayoría de los casos, una buena preparación es más efectiva y segura que cualquier medicación.',
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:clipboard-check', title: 'Requisitos al día', text: 'Documentación sanitaria completa por destino.' },
      { icon: 'fa6-solid:box', title: 'Guacal cómodo', text: 'Seguro y acogedor para reducir la ansiedad.' },
      { icon: 'fa6-solid:stethoscope', title: 'Apoyo veterinario', text: 'Coordinación de certificados y recomendaciones.' },
      { icon: 'fa6-solid:heart', title: 'Bienestar felino', text: 'Pautas para minimizar el estrés del cambio.' },
    ],
    faqs: [
      { q: '¿Puedo sedar a mi gato para el vuelo?', a: 'La sedación en vuelo suele desaconsejarse por riesgos respiratorios en altura. Su veterinario indicará la mejor alternativa; nosotros seguimos sus recomendaciones.' },
      { q: '¿Cuántos gatos pueden ir en un guacal?', a: 'Por bienestar y normativa, generalmente un animal por guacal, salvo excepciones para crías con su madre. Le asesoramos según su caso.' },
    ],
    related: ['mascotas-internacional', 'mascotas-perros', 'mascotas-exoticos'],
  },
  {
    id: 'mascotas-exoticos',
    categoryId: 'mascotas',
    slug: 'traslado-de-aves-y-animales-exoticos',
    icon: 'fa6-solid:dove',
    title: 'Traslado de Aves y Animales Exóticos',
    metaTitle: 'Traslado de Aves y Animales Exóticos | PIM Panamá',
    metaDescription:
      'Transporte internacional de aves y animales exóticos desde Panamá: permisos CITES, requisitos sanitarios y manejo especializado. Consulta tu caso con PIM.',
    heroTagline: 'Casos especiales que exigen permisos y manejo experto: aquí estamos.',
    heroImage: IMG.team,
    intro: [
      'El traslado internacional de aves y animales exóticos es el más complejo del pet relocation, porque a menudo intervienen convenios de protección de especies (CITES), permisos especiales y requisitos sanitarios estrictos. No todos los animales pueden trasladarse, y cada especie tiene sus reglas.',
      'En Panamá International Movers evaluamos su caso concreto, identificamos los permisos necesarios y coordinamos un manejo especializado que priorice el bienestar del animal y el cumplimiento legal.',
    ],
    sections: [
      {
        heading: 'Permisos CITES y especies protegidas',
        body: [
          'Muchas aves y animales exóticos están sujetos a la convención CITES, que regula su comercio y traslado internacional. Verificamos si su especie requiere permiso y le orientamos sobre cómo obtenerlo, evitando problemas legales en origen y destino.',
        ],
        image: IMG.packing,
      },
      {
        heading: 'Manejo especializado',
        body: [
          'Cada especie tiene necesidades particulares de temperatura, ventilación y contención. Coordinamos guacales apropiados y, cuando corresponde, acompañamiento veterinario para un traslado seguro.',
        ],
      },
      {
        heading: 'Cada especie es un caso único',
        body: [
          'No es lo mismo trasladar un ave que un reptil o un pequeño mamífero exótico. Las aves requieren control de temperatura y estímulos mínimos; los reptiles, condiciones térmicas muy específicas; y todos, contención adecuada a su comportamiento. Por eso cada traslado de animal exótico empieza con una evaluación individual de viabilidad y requisitos.',
          'Esa evaluación define si el traslado es posible, qué permisos exige, qué tipo de guacal y condiciones necesita, y si conviene acompañamiento veterinario especializado.',
        ],
        image: IMG.team,
      },
      {
        heading: 'Legalidad y bienestar, sin atajos',
        body: [
          'El traslado de especies exóticas se mueve en un terreno legal delicado. Un error con los permisos CITES o con la normativa del país puede significar la retención del animal o problemas legales serios. Nosotros no tomamos atajos: verificamos la legalidad de principio a fin y priorizamos siempre el bienestar del animal.',
          'Si un traslado no puede hacerse de forma legal y segura, se lo diremos con honestidad. Su tranquilidad y el bienestar de su mascota valen más que cerrar un servicio.',
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:file-shield', title: 'Permisos CITES', text: 'Identificamos y gestionamos los permisos requeridos.' },
      { icon: 'fa6-solid:magnifying-glass', title: 'Evaluación por especie', text: 'Analizamos la viabilidad y reglas de su animal.' },
      { icon: 'fa6-solid:temperature-half', title: 'Manejo especializado', text: 'Guacales y condiciones a la medida de la especie.' },
      { icon: 'fa6-solid:heart', title: 'Bienestar y legalidad', text: 'Cumplimiento y cuidado en cada paso.' },
    ],
    faqs: [
      { q: '¿Qué es CITES y por qué importa?', a: 'Es la convención internacional que regula el comercio y traslado de especies protegidas. Si su animal está listado, necesitará permisos específicos para exportarlo e importarlo legalmente.' },
      { q: '¿Cualquier animal exótico se puede trasladar?', a: 'No. Algunos están prohibidos o fuertemente restringidos. Evaluamos su caso concreto antes de comprometer un traslado.' },
    ],
    related: ['mascotas-internacional', 'mascotas-perros', 'mascotas-gatos'],
  },

  /* ============ TANDA 2 · Contenedores y Logística ============ */
  {
    id: 'contenedor-20',
    categoryId: 'contenedores',
    slug: 'contenedor-de-20-pies',
    icon: 'fa6-solid:box',
    title: 'Contenedor de 20 pies (Estándar)',
    metaTitle: 'Alquiler y Envío de Contenedor de 20 pies | PIM Panamá',
    metaDescription:
      'Contenedor de 20 pies para mudanzas y carga internacional: capacidad, medidas y usos. Ideal para apartamentos y casas pequeñas. Cotiza con PIM Panamá.',
    heroTagline: 'El caballo de batalla de la logística: ideal para apartamentos y casas pequeñas.',
    heroImage: IMG.containers,
    intro: [
      'El contenedor de 20 pies es el estándar de la industria y la opción más común para mudanzas de tamaño moderado. Su capacidad se ajusta muy bien al mobiliario de un apartamento o una casa pequeña, ofreciendo un excelente equilibrio entre volumen y costo.',
      'En Panamá International Movers coordinamos su envío internacional, o su colocación temporal para carga o almacenamiento, según lo que necesite.',
    ],
    sections: [
      {
        heading: '¿Qué cabe en un contenedor de 20 pies?',
        body: [
          'Como referencia general, acomoda el menaje de un apartamento o una casa de una a dos habitaciones: sala, comedor, dormitorios y electrodomésticos. El volumen exacto depende del tipo de mobiliario; en la inspección calculamos si le basta o conviene un 40 pies.',
        ],
        image: IMG.port,
      },
      {
        heading: 'Usos y disponibilidad',
        body: [
          'Además de la mudanza internacional puerta a puerta, el contenedor de 20 pies sirve para consolidar carga, almacenar temporalmente o cargar a su ritmo mediante drop-off en su domicilio. Le asesoramos sobre la mejor configuración.',
        ],
      },
      {
        heading: 'Medidas y capacidad del 20 pies',
        body: [
          'El contenedor estándar de 20 pies ofrece aproximadamente 33 metros cúbicos de volumen útil, con unas medidas interiores cercanas a 5,9 m de largo, 2,35 m de ancho y 2,39 m de alto. En términos de mudanza, eso equivale, como referencia, al menaje de un apartamento o una casa pequeña de una a dos habitaciones.',
          'El volumen real que ocupará su mudanza depende del tipo de mobiliario y de la calidad de la estiba. Por eso la inspección es clave: le confirmamos si el 20 pies le basta o si conviene dar el salto al 40.',
        ],
        image: IMG.port,
      },
      {
        heading: 'Cárguelo a su ritmo con drop-off',
        body: [
          'Si prefiere empacar por su cuenta, podemos dejar el contenedor de 20 pies en su domicilio durante un tiempo acordado para que lo cargue sin prisas. Le proveemos materiales de embalaje y asesoría de estiba, y al terminar lo retiramos para continuar con el flete internacional.',
          'Es una opción flexible y a menudo más económica para quienes disponen de espacio y tiempo para cargar por sí mismos.',
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:scale-balanced', title: 'Volumen y costo balanceados', text: 'La medida más versátil de la industria.' },
      { icon: 'fa6-solid:house', title: 'Ideal para casas pequeñas', text: 'Perfecto para apartamentos y viviendas de 1-2 recámaras.' },
      { icon: 'fa6-solid:earth-americas', title: 'Rutas globales', text: 'Disponible hacia todos los destinos principales.' },
      { icon: 'fa6-solid:truck', title: 'Drop-off disponible', text: 'Podemos dejarlo en su casa para cargar con calma.' },
    ],
    faqs: [
      { q: '¿Un contenedor de 20 pies es suficiente para mi casa?', a: 'Para apartamentos y casas pequeñas suele ser ideal. Para viviendas grandes o si incluye un auto, el 40 pies es más adecuado. Lo determinamos en la inspección.' },
      { q: '¿Puedo cargarlo yo mismo?', a: 'Con el servicio de drop-off dejamos el contenedor en su domicilio para que cargue a su ritmo, o nuestro equipo lo empaca y estiba por usted.' },
    ],
    related: ['contenedor-40', 'drop-off', 'maritimas'],
  },
  {
    id: 'contenedor-40',
    categoryId: 'contenedores',
    slug: 'contenedor-de-40-pies-high-cube',
    icon: 'fa6-solid:boxes-stacked',
    title: 'Contenedor de 40 pies (High Cube)',
    metaTitle: 'Contenedor de 40 pies High Cube | Mudanzas PIM Panamá',
    metaDescription:
      'Contenedor de 40 pies y 40 High Cube para mudanzas grandes: casas completas o menaje + vehículo. Mayor altura y capacidad. Cotiza tu envío con PIM.',
    heroTagline: 'El doble de espacio: para casas grandes o menaje combinado con vehículo.',
    heroImage: IMG.port,
    intro: [
      'El contenedor de 40 pies —y su versión High Cube, con mayor altura— duplica la capacidad del de 20 pies y es la elección natural para mudanzas de casas grandes. También permite combinar el menaje completo con un automóvil en un solo envío, optimizando costos.',
      'Coordinamos su envío internacional puerta a puerta con estiba profesional para aprovechar cada centímetro.',
    ],
    sections: [
      {
        heading: '40 pies vs. 40 High Cube',
        body: [
          'Ambos tienen la misma superficie de piso; el High Cube añade altura extra, ideal para muebles altos o para ganar volumen apilable. Le recomendamos la variante óptima según su carga.',
        ],
        image: IMG.containers,
      },
      {
        heading: 'Casa completa o menaje + auto',
        body: [
          'Es la opción preferida para viviendas de tres o más habitaciones. Si además desea llevar su vehículo, cabe junto al menaje debidamente asegurado, evitando pagar dos fletes separados.',
        ],
      },
      {
        heading: 'Cuánto cabe realmente en un 40 pies',
        body: [
          'El contenedor de 40 pies ofrece unos 67 metros cúbicos de volumen útil, prácticamente el doble que el de 20 pies. La variante High Cube añade cerca de 30 cm de altura, útil para muebles altos, electrodomésticos grandes o para apilar más carga con seguridad.',
          'Como referencia, acomoda con holgura el menaje de una casa de tres o cuatro habitaciones. Y si le sobra espacio, es el momento ideal para incluir un vehículo y ahorrar un flete completo.',
        ],
        image: IMG.containers,
      },
      {
        heading: 'El contenedor más eficiente por metro cúbico',
        body: [
          'Aquí opera una regla de oro de la logística: a mayor volumen, menor es el costo por metro cúbico. Un 40 pies bien aprovechado suele ofrecer la mejor economía por unidad de espacio, siempre que usted realmente lo llene.',
          'Nuestra estiba profesional exprime cada centímetro del contenedor para que su inversión rinda al máximo, sin espacios muertos que encarezcan el envío.',
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:maximize', title: 'Máxima capacidad', text: 'El doble de espacio para casas grandes.' },
      { icon: 'fa6-solid:car', title: 'Menaje + vehículo', text: 'Combine su mudanza con un auto en un solo envío.' },
      { icon: 'fa6-solid:arrows-up-to-line', title: 'High Cube', text: 'Altura extra para muebles altos y más volumen.' },
      { icon: 'fa6-solid:sack-dollar', title: 'Mejor costo por m³', text: 'Cuanto mayor el volumen, menor el costo unitario.' },
    ],
    faqs: [
      { q: '¿Cuándo elegir 40 pies en lugar de 20?', a: 'Cuando muda una casa de tres o más habitaciones, o si desea combinar el menaje con un vehículo. El de 40 High Cube añade altura para aprovechar aún más el espacio.' },
      { q: '¿Puedo llevar mi auto y mis muebles juntos?', a: 'Sí. En un 40 pies es habitual estibar el vehículo junto al menaje, asegurado y separado, ahorrando un flete adicional.' },
    ],
    related: ['contenedor-20', 'auto-contenedor', 'maritimas'],
  },
  {
    id: 'contenedor-almacenamiento',
    categoryId: 'contenedores',
    slug: 'contenedores-obra-almacenamiento-temporal',
    icon: 'fa6-solid:warehouse',
    title: 'Contenedores para Obra o Almacenamiento Temporal',
    metaTitle: 'Contenedores para Obra y Almacenamiento Temporal | PIM',
    metaDescription:
      'Alquiler de contenedores para obra o almacenamiento temporal en Panamá: espacio seguro en sitio para herramientas, materiales o mobiliario. Cotiza con PIM.',
    heroTagline: 'Espacio seguro donde y cuando lo necesite, sin construir nada.',
    heroImage: IMG.warehouse,
    intro: [
      'A veces el reto no es mover, sino guardar: durante una remodelación, una obra o una transición de vivienda. El contenedor de almacenamiento temporal ofrece un espacio seguro, cerrado y a pie de calle para resguardar herramientas, materiales o mobiliario sin depender de una bodega externa.',
      'En Panamá International Movers colocamos el contenedor donde lo necesite y coordinamos su retiro cuando termine.',
    ],
    sections: [
      {
        heading: 'Usos frecuentes',
        body: [
          'Almacenamiento de mobiliario durante una remodelación, resguardo de herramientas y materiales en obra, o depósito temporal mientras se define una mudanza. Es una solución flexible y económica frente a alquilar una bodega.',
        ],
        image: IMG.containers,
      },
      {
        heading: 'Seguridad y flexibilidad',
        body: [
          'El contenedor se entrega limpio y en buen estado, con cierre seguro. Usted controla el acceso y el tiempo de uso; nosotros nos encargamos de la logística de colocación y retiro.',
        ],
      },
      {
        heading: 'Ventajas frente a alquilar una bodega',
        body: [
          'Un contenedor de almacenamiento en sitio tiene ventajas concretas sobre alquilar una bodega externa: no traslada sus cosas dos veces (evita cargar, llevar y descargar en otro lugar), lo tiene a pie de calle en su propia obra o domicilio, y controla el acceso a cualquier hora. Para remodelaciones y transiciones de vivienda, suele ser más práctico y económico.',
          'Además, si su proyecto cambia de plazos, basta con extender el tiempo de uso, sin la rigidez de un contrato de bodega.',
        ],
        image: IMG.containers,
      },
      {
        heading: 'Colocación: qué necesita su terreno',
        body: [
          'Para recibir el contenedor se requiere una superficie firme y nivelada, y espacio de acceso para el camión que lo coloca. Antes de la entrega evaluamos las condiciones del sitio para asegurar una colocación viable y segura.',
          'Nos encargamos de toda la logística de transporte, colocación y posterior retiro, para que usted solo se ocupe de cargar y descargar a su ritmo.',
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:lock', title: 'Espacio seguro', text: 'Cerrado y con cierre a su control.' },
      { icon: 'fa6-solid:location-dot', title: 'En su sitio', text: 'Lo colocamos donde lo necesite, a pie de calle.' },
      { icon: 'fa6-solid:calendar', title: 'Tiempo flexible', text: 'Úselo por los días o meses que requiera.' },
      { icon: 'fa6-solid:sack-dollar', title: 'Económico', text: 'Alternativa práctica a alquilar una bodega.' },
    ],
    faqs: [
      { q: '¿Por cuánto tiempo puedo tener el contenedor?', a: 'El plazo es flexible: desde unos días hasta varios meses, según su proyecto. Coordinamos colocación y retiro a su conveniencia.' },
      { q: '¿Es seguro para guardar mobiliario?', a: 'Sí. El contenedor va cerrado y con cierre seguro. Para mayor protección podemos combinar con embalaje profesional del mobiliario.' },
    ],
    related: ['drop-off', 'complementarios-almacenaje', 'contenedor-20'],
  },
  {
    id: 'drop-off',
    categoryId: 'contenedores',
    slug: 'servicio-drop-off-contenedor',
    icon: 'fa6-solid:truck-ramp-box',
    title: 'Servicio de Drop-Off (Contenedor en tu Casa)',
    metaTitle: 'Servicio Drop-Off: Contenedor en tu Casa para Cargar | PIM',
    metaDescription:
      'Servicio drop-off: dejamos el contenedor en tu domicilio para que cargues a tu ritmo. Flexibilidad total para tu mudanza internacional. Cotiza con PIM Panamá.',
    heroTagline: 'Cargue a su ritmo: le dejamos el contenedor en la puerta de su casa.',
    heroImage: IMG.boxes,
    intro: [
      'El servicio drop-off consiste en llevar el contenedor hasta su domicilio y dejarlo allí durante un tiempo acordado, para que usted cargue sus pertenencias con calma y a su propio ritmo. Es la opción ideal para quienes prefieren empacar por su cuenta o necesitan flexibilidad de horarios.',
      'Cuando termine, retiramos el contenedor y continuamos con el flete internacional y los trámites hasta el destino.',
    ],
    sections: [
      {
        heading: '¿Cómo funciona el drop-off?',
        body: [
          'Coordinamos la entrega del contenedor en su casa considerando el acceso y el espacio disponible. Usted carga durante el plazo acordado; si lo desea, le proveemos materiales de embalaje y asesoría para estibar correctamente.',
        ],
        image: IMG.packing,
      },
      {
        heading: 'Ventajas de cargar usted mismo',
        body: [
          'Además del ahorro potencial, el drop-off le da control total sobre qué entra y cómo se acomoda. Para quienes prefieren no encargarse, mantenemos disponible el empaque profesional completo.',
        ],
      },
      {
        heading: 'Qué necesita para recibir el contenedor',
        body: [
          'Para el drop-off se requiere una superficie firme donde ubicar el contenedor y espacio de maniobra para el camión. Evaluamos su domicilio de antemano para confirmar que la colocación es viable, teniendo en cuenta accesos, rampas y normas de la comunidad si aplica.',
          'Coordinamos la entrega y el retiro en las fechas que le convengan, dándole la máxima flexibilidad para cargar con calma.',
        ],
        image: IMG.boxes,
      },
      {
        heading: 'Con o sin nuestro empaque',
        body: [
          'El drop-off es tan flexible como lo necesite. Puede cargar completamente por su cuenta —le proveemos cajas y materiales de calidad, más asesoría de estiba— o combinar: usted empaca lo simple y nuestro equipo se encarga de lo frágil y voluminoso.',
          'Sea cual sea la modalidad, le mostramos cómo aprovechar el espacio y proteger sus pertenencias para que el envío internacional posterior sea seguro.',
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:clock', title: 'A su ritmo', text: 'Cargue sin prisas, en los días acordados.' },
      { icon: 'fa6-solid:house', title: 'En su domicilio', text: 'El contenedor llega a la puerta de su casa.' },
      { icon: 'fa6-solid:hand', title: 'Control total', text: 'Usted decide qué entra y cómo se acomoda.' },
      { icon: 'fa6-solid:boxes-packing', title: 'Con o sin empaque', text: 'Le damos materiales o empacamos por usted.' },
    ],
    faqs: [
      { q: '¿Necesito mucho espacio para recibir el contenedor?', a: 'Se requiere acceso y una superficie firme donde ubicarlo. Evaluamos su domicilio de antemano para asegurar una colocación viable.' },
      { q: '¿Puedo pedir materiales de embalaje?', a: 'Sí. Le proveemos cajas, burbuja y demás materiales, y le asesoramos para estibar de forma segura y aprovechar el espacio.' },
    ],
    related: ['contenedor-20', 'contenedor-40', 'complementarios-embalaje'],
  },

  /* ============ TANDA 2 · Mudanzas Locales y Nacionales ============ */
  {
    id: 'locales',
    categoryId: 'locales',
    slug: 'mudanzas-locales-ciudad-de-panama',
    icon: 'fa6-solid:truck-fast',
    title: 'Mudanzas Locales en Ciudad de Panamá',
    metaTitle: 'Mudanzas Locales en Ciudad de Panamá | PIM',
    metaDescription:
      'Mudanzas locales en Ciudad de Panamá con estándar internacional: embalaje profesional, cuidado del mobiliario y equipo experto. Rápido, seguro y sin estrés.',
    heroTagline: 'El mismo rigor internacional, ahora dentro de la ciudad.',
    heroImage: IMG.boxes,
    intro: [
      'Mudarse dentro de la Ciudad de Panamá no tiene por qué ser un dolor de cabeza. Aplicamos el mismo estándar y cuidado de nuestras mudanzas internacionales a los traslados locales: embalaje profesional, protección del mobiliario y un equipo que trata sus cosas como propias.',
      'Ya sea un apartamento o una casa, coordinamos su mudanza local de forma rápida, ordenada y segura.',
    ],
    sections: [
      {
        heading: 'Estándar internacional en casa',
        body: [
          'Protegemos pisos y esquinas, embalamos lo frágil, desarmamos y rearmamos muebles, y transportamos todo en vehículos acondicionados. La experiencia de mover casas entre continentes se nota en cada detalle local.',
        ],
        image: IMG.packing,
      },
      {
        heading: 'Rápido y sin complicaciones',
        body: [
          'Coordinamos la logística —accesos, ascensores, horarios de edificio— para que su mudanza fluya sin contratiempos y usted retome su vida cuanto antes en su nuevo hogar.',
        ],
      },
      {
        heading: 'Coordinación de edificios y accesos',
        body: [
          'En Ciudad de Panamá, muchas mudanzas ocurren en edificios con reglas propias: horarios permitidos, reserva de ascensor de servicio, protección de áreas comunes y registro de acceso. Nos encargamos de coordinar todos estos detalles con la administración para que el día de la mudanza no haya sorpresas.',
          'Protegemos pisos, paredes y ascensores durante el traslado, cuidando tanto sus pertenencias como las áreas comunes del edificio.',
        ],
        image: IMG.boxes,
      },
      {
        heading: 'Un presupuesto claro, sin sorpresas',
        body: [
          'Antes de la mudanza evaluamos el volumen, la distancia, los accesos y los servicios que necesita (embalaje, desarme de muebles, materiales) para entregarle un presupuesto transparente. Sabe exactamente qué incluye y qué cuesta, sin cargos ocultos de última hora.',
          'Ese mismo rigor de nuestras mudanzas internacionales lo aplicamos al traslado local: planificación seria y comunicación clara de principio a fin.',
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:award', title: 'Cuidado premium', text: 'El mismo estándar de una mudanza internacional.' },
      { icon: 'fa6-solid:screwdriver-wrench', title: 'Desarme y rearme', text: 'Desmontamos y montamos su mobiliario.' },
      { icon: 'fa6-solid:shield-halved', title: 'Todo protegido', text: 'Embalaje y protección de pisos y esquinas.' },
      { icon: 'fa6-solid:bolt', title: 'Ágil y ordenado', text: 'Logística coordinada para una mudanza sin estrés.' },
    ],
    faqs: [
      { q: '¿Ofrecen embalaje para mudanzas locales?', a: 'Sí. Puede contratar el embalaje profesional completo o solo el de artículos frágiles; también proveemos materiales si prefiere empacar usted.' },
      { q: '¿Desarman y arman los muebles?', a: 'Sí, nuestro equipo desmonta y vuelve a montar el mobiliario que lo requiera, dejándolo listo en su nuevo hogar.' },
    ],
    related: ['nacionales', 'express', 'cliente-residenciales'],
  },
  {
    id: 'nacionales',
    categoryId: 'locales',
    slug: 'mudanzas-nacionales-en-panama',
    icon: 'fa6-solid:road',
    title: 'Mudanzas Nacionales',
    metaTitle: 'Mudanzas Nacionales en Panamá | Interior del País | PIM',
    metaDescription:
      'Mudanzas nacionales en Panamá: de la capital al interior y entre provincias. Transporte seguro de larga distancia con embalaje y cuidado profesional.',
    heroTagline: 'De una provincia a otra, su mudanza en manos expertas.',
    heroImage: IMG.boxes,
    intro: [
      'Trasladar su hogar de una ciudad a otra dentro de Panamá implica planificación de ruta, transporte de larga distancia y un embalaje que resista el trayecto. Coordinamos mudanzas nacionales entre la capital y el interior del país, y entre provincias, con el mismo cuidado profesional de siempre.',
      'Usted se enfoca en su nueva etapa; nosotros nos encargamos de que todo llegue en orden.',
    ],
    sections: [
      {
        heading: 'Transporte de larga distancia',
        body: [
          'Empleamos vehículos adecuados y una estiba pensada para viajes largos, minimizando el movimiento de la carga. Protegemos especialmente lo frágil, que es lo más expuesto en trayectos por carretera.',
        ],
        image: IMG.packing,
      },
      {
        heading: 'Planificación de ruta',
        body: [
          'Coordinamos tiempos, accesos y logística en origen y destino para que la entrega sea puntual y sin sorpresas, sin importar a qué punto del país se mude.',
        ],
      },
      {
        heading: 'Destinos que cubrimos en Panamá',
        body: [
          'Coordinamos mudanzas nacionales entre la Ciudad de Panamá y el interior del país: David y Chiriquí, Colón, Coronado y el Pacífico, Santiago, Chitré y la península de Azuero, Boquete y las tierras altas, Bocas del Toro, entre otros. Sea cual sea su destino dentro de Panamá, planificamos la ruta y los tiempos.',
          'Cuéntenos a dónde se muda y le confirmamos la logística y el mejor momento para el traslado según la distancia y las condiciones de la vía.',
        ],
        image: IMG.port,
      },
      {
        heading: 'Protección reforzada para la carretera',
        body: [
          'Un trayecto nacional largo somete la carga a horas de vibración constante, que es donde más sufren los objetos frágiles. Por eso reforzamos el embalaje, aseguramos la estiba contra el movimiento y prestamos atención especial a vajilla, electrónicos y muebles delicados.',
          'Si lo desea, incluimos un seguro para el trayecto nacional, dándole la misma tranquilidad de una mudanza internacional dentro de su propio país.',
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:route', title: 'Cobertura nacional', text: 'De la capital al interior y entre provincias.' },
      { icon: 'fa6-solid:box', title: 'Embalaje para carretera', text: 'Protección reforzada para trayectos largos.' },
      { icon: 'fa6-solid:clock', title: 'Entrega puntual', text: 'Planificación de ruta y tiempos coordinados.' },
      { icon: 'fa6-solid:shield-halved', title: 'Carga asegurada', text: 'Opción de póliza para el trayecto nacional.' },
    ],
    faqs: [
      { q: '¿Llegan a cualquier parte de Panamá?', a: 'Coordinamos mudanzas a las principales ciudades y al interior del país. Cuéntenos su destino y le confirmamos la logística.' },
      { q: '¿Cómo protegen lo frágil en viajes largos?', a: 'Con embalaje reforzado, estiba anti-movimiento y, si lo desea, seguro de carga. Lo frágil recibe atención especial por ser lo más expuesto en carretera.' },
    ],
    related: ['locales', 'express', 'cliente-residenciales'],
  },
  {
    id: 'express',
    categoryId: 'locales',
    slug: 'mudanzas-express-ultima-hora',
    icon: 'fa6-solid:bolt',
    title: 'Mudanzas Express / De Última Hora',
    metaTitle: 'Mudanzas Express y de Última Hora en Panamá | PIM',
    metaDescription:
      'Mudanzas express y de última hora en Panamá: respondemos rápido cuando el tiempo apremia, sin sacrificar el cuidado de sus pertenencias. Consulte disponibilidad.',
    heroTagline: 'Cuando no hay tiempo que perder, respondemos con rapidez y cuidado.',
    heroImage: IMG.boxes,
    intro: [
      'Un imprevisto, un cambio de planes o una oportunidad que no espera: a veces la mudanza tiene que ser para ya. Nuestro servicio express prioriza su traslado en la fila de producción y moviliza al equipo con rapidez, sin sacrificar el cuidado que caracteriza a Panamá International Movers.',
      'Consúltenos disponibilidad: cuando es posible, hacemos que suceda.',
    ],
    sections: [
      {
        heading: 'Rapidez sin descuidar la calidad',
        body: [
          'Aun con plazos ajustados, mantenemos el embalaje adecuado y la protección del mobiliario. La prisa no puede traducirse en daños; por eso el express se apoya en un equipo experimentado que trabaja rápido y bien.',
        ],
        image: IMG.packing,
      },
      {
        heading: 'Cómo lo hacemos posible',
        body: [
          'Reorganizamos la agenda para priorizar su mudanza y coordinamos recursos con anticipación. La disponibilidad depende de la fecha y el volumen; cuanto antes nos contacte, más probable es cumplir su plazo.',
        ],
      },
      {
        heading: 'Cuándo es posible una mudanza express',
        body: [
          'La viabilidad de un servicio express depende de tres factores: la fecha que necesita, el volumen a mover y nuestra disponibilidad de equipo en ese momento. Las mudanzas locales de última hora son casi siempre posibles; las internacionales express dependen además de espacios en aerolíneas o navieras y de los tiempos de aduana.',
          'Por eso el primer paso es una llamada: evaluamos su caso al instante y le decimos con honestidad si podemos cumplir su plazo y bajo qué condiciones.',
        ],
        image: IMG.boxes,
      },
      {
        heading: 'Rapidez que no compromete la calidad',
        body: [
          'Nuestra promesa con el express es clara: la prisa nunca se traduce en descuido. Aun con plazos ajustados, mantenemos el embalaje adecuado, la protección del mobiliario y el inventario. Un equipo experimentado puede trabajar rápido y bien a la vez.',
          'Preferimos ser transparentes sobre lo que es posible antes que prometer algo que ponga en riesgo sus pertenencias. Su confianza vale más que una entrega imprudente.',
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:bolt', title: 'Respuesta rápida', text: 'Priorizamos su mudanza cuando el tiempo apremia.' },
      { icon: 'fa6-solid:shield-halved', title: 'Sin descuidar el cuidado', text: 'Rapidez con el mismo estándar de protección.' },
      { icon: 'fa6-solid:users', title: 'Equipo experimentado', text: 'Profesionales que trabajan rápido y bien.' },
      { icon: 'fa6-solid:phone', title: 'Coordinación ágil', text: 'Le confirmamos disponibilidad de inmediato.' },
    ],
    faqs: [
      { q: '¿Con cuánta anticipación puedo pedir una mudanza express?', a: 'Depende de la fecha y el volumen. Contáctenos cuanto antes: evaluamos la agenda y le confirmamos si podemos cumplir su plazo.' },
      { q: '¿El express cuesta más?', a: 'Priorizar su mudanza suele implicar un recargo por la reorganización de recursos. Se lo indicamos con transparencia en la cotización.' },
    ],
    related: ['locales', 'nacionales', 'complementarios-embalaje'],
  },

  /* ============ TANDA 2 · Mudanzas por Tipo de Cliente ============ */
  {
    id: 'cliente-residenciales',
    categoryId: 'cliente',
    slug: 'mudanzas-residenciales',
    icon: 'fa6-solid:house-chimney',
    title: 'Mudanzas Residenciales',
    metaTitle: 'Mudanzas Residenciales (Casas y Apartamentos) | PIM Panamá',
    metaDescription:
      'Mudanzas residenciales de casas y apartamentos, locales o internacionales, con embalaje profesional y un coordinador personal. Su hogar en manos expertas.',
    heroTagline: 'Su hogar es único. Su mudanza también debería serlo.',
    heroImage: IMG.packing,
    intro: [
      'Mudar una casa o un apartamento es mucho más que transportar muebles: es trasladar la vida cotidiana de una familia. Nuestro servicio residencial cubre desde estudios hasta viviendas grandes, con un plan a la medida de cada hogar y un coordinador personal que lo acompaña en todo el proceso.',
      'Ya sea una mudanza local o internacional, cuidamos cada objeto con el mismo esmero con el que usted lo eligió para su casa.',
    ],
    sections: [
      {
        heading: 'Un plan a la medida de su hogar',
        body: [
          'Comenzamos con una inspección para dimensionar el volumen y las necesidades: piezas frágiles, muebles a desarmar, electrodomésticos, obras de arte. Con eso diseñamos un plan de embalaje y transporte adecuado a su vivienda.',
        ],
        image: IMG.boxes,
      },
      {
        heading: 'Embalaje que protege lo que importa',
        body: [
          'Utilizamos materiales de calidad y técnicas específicas para vajilla, cuadros, electrónicos y muebles delicados. Todo se inventaría y etiqueta para que la reinstalación en destino sea ordenada y sin pérdidas.',
        ],
      },
      {
        heading: 'Cada hogar es diferente',
        body: [
          'Una mudanza residencial no es una fórmula única. Un estudio de soltero, una casa familiar con niños, un apartamento de una pareja de jubilados: cada uno tiene necesidades, ritmos y objetos distintos. Por eso empezamos escuchando: qué es lo más valioso, qué es frágil, qué debe llegar primero, qué preocupaciones tiene.',
          'Con esa información diseñamos un plan a la medida de su hogar y su familia, no un servicio genérico. Esa personalización es lo que convierte una mudanza estresante en una experiencia tranquila.',
        ],
        image: IMG.packing,
      },
      {
        heading: 'El regreso a la normalidad en destino',
        body: [
          'Nuestro trabajo no termina al entregar las cajas. En destino desembalamos lo básico, rearmamos el mobiliario, ubicamos los muebles donde usted indica y retiramos todo el material sobrante. El objetivo es que su familia recupere la sensación de hogar cuanto antes.',
          'Cuando se muda una vida entera, esos primeros días en la nueva casa importan mucho. Nos aseguramos de que empiecen con orden y calma, no entre montañas de cajas.',
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:user-tie', title: 'Coordinador personal', text: 'Un solo contacto para toda su mudanza.' },
      { icon: 'fa6-solid:box-open', title: 'Embalaje profesional', text: 'Técnicas y materiales para cada tipo de objeto.' },
      { icon: 'fa6-solid:list-check', title: 'Inventario ordenado', text: 'Todo etiquetado para una reinstalación sin pérdidas.' },
      { icon: 'fa6-solid:earth-americas', title: 'Local o internacional', text: 'El mismo estándar cerca o al otro lado del mundo.' },
    ],
    faqs: [
      { q: '¿Puedo empacar algunas cosas yo mismo?', a: 'Sí, aunque para mudanzas internacionales el empaque profesional suele ser obligatorio por aduanas y seguro. En locales, puede combinar su empaque con el nuestro.' },
      { q: '¿Reinstalan los muebles en destino?', a: 'Sí. Entregamos, desembalamos lo básico, rearmamos el mobiliario y retiramos el material sobrante.' },
    ],
    related: ['cliente-corporativas', 'cliente-jubilados', 'complementarios-embalaje'],
  },
  {
    id: 'cliente-corporativas',
    categoryId: 'cliente',
    slug: 'mudanzas-corporativas-de-oficinas',
    icon: 'fa6-solid:building',
    title: 'Mudanzas Corporativas / de Oficinas',
    metaTitle: 'Mudanzas Corporativas y de Oficinas | PIM Panamá',
    metaDescription:
      'Mudanzas corporativas y de oficinas en Panamá: traslado de mobiliario, servidores y documentos confidenciales minimizando el tiempo de inactividad de su empresa.',
    heroTagline: 'Trasladamos su oficina minimizando el tiempo de inactividad.',
    heroImage: IMG.team,
    intro: [
      'Mover una oficina es un proyecto logístico donde cada hora de inactividad tiene un costo. Planificamos la mudanza corporativa para que su operación se detenga lo mínimo indispensable: trabajamos por fases, en horarios de menor impacto y con un inventario riguroso de mobiliario, equipos y documentación confidencial.',
      'Desde una pequeña oficina hasta un piso completo, coordinamos el traslado con la discreción y la precisión que su empresa necesita. Un solo coordinador se sienta con su equipo de operaciones, IT o RR.HH. y responde por todo el proyecto, de la primera visita al último puesto montado.',
    ],
    sections: [
      {
        heading: 'Un proyecto, no solo una mudanza',
        body: [
          'Mover una oficina es gestionar un proyecto con múltiples variables: personas, mobiliario, tecnología, plazos y la continuidad del negocio. Asignamos un coordinador que trabaja con su equipo para levantar un plan detallado: inventario por área, cronograma por fases y un mapa de la nueva sede para ubicar cada puesto.',
          'Esa planificación previa es lo que permite que el día de la mudanza todo fluya y su empresa vuelva a producir lo antes posible. La diferencia entre una mudanza corporativa ordenada y un fin de semana perdido casi nunca está en el camión: está en el plan que se hizo tres semanas antes.',
        ],
        image: IMG.packing,
      },
      {
        heading: 'El cronograma manda: cómo se mueve por fases',
        body: [
          'Diseñamos un cronograma que respeta su operación. Lo habitual es mover por áreas y no todo de golpe: primero archivo y depósito, que nadie usa a diario; después las áreas de soporte; al final la operación crítica y los directivos, en la ventana de menor impacto. Así ninguna parte de la empresa queda sin poder trabajar más de lo previsto.',
          'El cronograma también contempla lo que no depende de nosotros: la fecha real de entrega del local, el estado de la obra, la instalación del cableado y de la red. Si esas piezas se mueven, el plan se ajusta antes y no el mismo día. Por eso insistimos en fijar hitos verificables con su contratista y su proveedor de IT.',
        ],
      },
      {
        heading: 'Etiquetado inteligente para un montaje rápido',
        body: [
          'Cada caja, mueble y equipo se etiqueta según su destino en la nueva oficina: área, puesto y piso. Así, en lugar de una pila caótica de cajas, su equipo encuentra cada cosa en su lugar y puede reanudar labores casi de inmediato.',
          'El etiquetado se apoya en el plano de la nueva sede, que levantamos con usted antes de mover nada. Cada colaborador recibe además un juego de cajas identificadas con su nombre y su puesto de destino, lo que evita la escena clásica del lunes: veinte personas buscando su monitor entre cajas anónimas.',
        ],
      },
      {
        heading: 'Servidores, equipos de IT y continuidad tecnológica',
        body: [
          'El equipamiento tecnológico recibe embalaje especializado: protección antiestática, amortiguación y cajas dimensionadas para que nada se desplace en el trayecto. Cada equipo viaja inventariado con su serial, de modo que la entrega se verifica una por una contra la lista y no de memoria.',
          'Aquí conviene ser claro sobre el alcance. Nosotros desconectamos, embalamos, transportamos y reinstalamos físicamente el equipo en su nuevo puesto. La desconexión lógica, la configuración de red y la puesta en marcha de servidores corresponden a su área de IT o a su proveedor, y trabajamos coordinados con ellos dentro del mismo cronograma. Desconfíe de quien le prometa hacerse cargo de todo sin preguntar por su infraestructura.',
        ],
        image: IMG.team,
      },
      {
        heading: 'Documentación confidencial y cadena de custodia',
        body: [
          'Contratos, expedientes de personal, información financiera y de clientes: en muchas empresas es el activo más sensible del traslado. Ese material viaja en cajas selladas y numeradas, con un registro de qué contiene cada una, quién la entregó y quién la recibió. Eso es la cadena de custodia: un rastro documentado de responsables, no una promesa verbal.',
          'Cuando el sector lo exige, coordinamos que un responsable designado por usted acompañe el traslado del material crítico y firme la recepción. Si su empresa tiene una política interna de manejo de información, la revisamos antes y ajustamos el procedimiento a ella.',
        ],
      },
      {
        heading: 'Mobiliario, divisiones y lo que suele sorprender',
        body: [
          'Buena parte de los imprevistos de una mudanza de oficina no está en las cajas, sino en el mobiliario fijo: divisiones modulares que hay que desmontar panel por panel, archivadores rodantes, cajas fuertes, mesas de sala de juntas que no pasan por la puerta del ascensor. Todo eso se detecta en el levantamiento presencial y se cotiza desde el inicio.',
          'El edificio es el otro frente. Reserva del ascensor de carga, horarios permitidos por la administración, protección de pisos y paredes, acceso al muelle y permisos de salida de equipos suelen tener reglas propias en origen y en destino. Nos encargamos de esas gestiones con ambas administraciones antes del día señalado.',
        ],
      },
      {
        heading: 'Qué necesitamos para cotizarle en serio',
        body: [
          'Una mudanza corporativa no se cotiza por teléfono ni por metros cuadrados. Necesitamos una visita al local actual y, si es posible, al nuevo: es la única forma de contar puestos, medir mobiliario, ver accesos y detectar lo que nadie mencionó. La inspección es gratuita y no compromete a nada.',
          'Nos ayuda mucho tener el plano de la nueva sede con la distribución prevista, el número de colaboradores por área, un inventario aproximado de equipos y la fecha comprometida de entrega del local. Con eso le entregamos una propuesta con alcance y cronograma escritos, que es lo que su gerencia necesita para aprobar sin sorpresas posteriores.',
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:business-time', title: 'Mínima inactividad', text: 'Planificación por fases y horarios de bajo impacto.' },
      { icon: 'fa6-solid:server', title: 'Equipos protegidos', text: 'Embalaje antiestático e inventario por serial.' },
      { icon: 'fa6-solid:file-shield', title: 'Documentos seguros', text: 'Cajas selladas y cadena de custodia documentada.' },
      { icon: 'fa6-solid:clipboard-list', title: 'Inventario riguroso', text: 'Etiquetado por área, puesto y piso sobre el plano.' },
      { icon: 'fa6-solid:user-tie', title: 'Un coordinador único', text: 'Un interlocutor para operaciones, IT y administración.' },
      { icon: 'fa6-solid:building-shield', title: 'Gestión con el edificio', text: 'Ascensores, horarios y permisos en origen y destino.' },
    ],
    faqs: [
      { q: '¿Pueden mudar la oficina en fin de semana?', a: 'Sí. Trabajamos en horarios de menor impacto —noches o fines de semana— para que su equipo encuentre todo listo al reanudar labores. Conviene definirlo temprano, porque también condiciona los permisos y horarios que autoriza la administración del edificio.' },
      { q: '¿Cómo manejan la información confidencial?', a: 'Con cajas selladas y numeradas, registro de contenido y responsables, y cadena de custodia documentada de extremo a extremo. Si su empresa tiene una política interna de manejo de información, ajustamos el procedimiento a ella y su personal designado puede acompañar y firmar la recepción.' },
      { q: '¿Ustedes desconectan y vuelven a conectar los servidores?', a: 'Desconectamos, embalamos, transportamos y reinstalamos el equipo físicamente en su nuevo puesto. La configuración lógica, la red y la puesta en marcha de servidores corresponden a su área de IT o a su proveedor; trabajamos coordinados con ellos dentro del mismo cronograma.' },
      { q: '¿Pueden mudar por etapas si la nueva sede no está lista?', a: 'Sí, y es una situación común cuando la obra se retrasa. Se puede mover primero lo que no interrumpe la operación y mantener el resto en almacenaje temporal hasta que el local esté habilitado. Planificarlo cuesta bastante menos que improvisarlo.' },
      { q: '¿Desmontan y montan las estaciones de trabajo y divisiones?', a: 'Sí. El desmontaje y montaje de puestos, divisiones modulares y mobiliario de oficina forma parte del servicio y se cuantifica en el levantamiento presencial. Es justamente la partida que las cotizaciones apresuradas suelen omitir y luego cobrar aparte.' },
      { q: '¿Con cuánta anticipación debemos empezar?', a: 'Cuanto antes, mejor: la planificación es la parte que realmente protege su operación. Lo ideal es que nos contacte apenas tenga definida la nueva sede, aunque la fecha aún no esté cerrada, para levantar el inventario y el cronograma con calma. Respondemos toda solicitud en menos de 24 horas.' },
    ],
    related: ['cliente-expatriados', 'especiales-arte', 'complementarios-almacenaje'],
  },
  {
    id: 'cliente-expatriados',
    categoryId: 'cliente',
    slug: 'relocacion-de-ejecutivos-expatriados',
    icon: 'fa6-solid:passport',
    title: 'Relocación de Ejecutivos (Expats)',
    metaTitle: 'Relocación de Ejecutivos y Expatriados | PIM Panamá',
    metaDescription:
      'Servicio VIP de relocación para ejecutivos y expatriados: mudanza internacional puerta a puerta y apoyo en el aterrizaje en el nuevo país. Coordinación integral.',
    heroTagline: 'Un aterrizaje suave en su nuevo país, de principio a fin.',
    heroImage: IMG.team,
    intro: [
      'Reubicar a un ejecutivo o a su familia en otro país va más allá de la mudanza física: implica coordinar tiempos con la empresa, cuidar cada detalle y facilitar la adaptación al destino. Nuestro servicio de relocación VIP combina la mudanza internacional puerta a puerta con un acompañamiento pensado para expatriados.',
      'El objetivo es que el profesional se concentre en su nuevo rol mientras nosotros nos ocupamos de que su vida llegue en orden.',
    ],
    sections: [
      {
        heading: 'Mudanza y trámites, integrados',
        body: [
          'Coordinamos el traslado del menaje con la gestión aduanera y los tiempos de incorporación laboral. Un coordinador dedicado sirve de enlace entre el ejecutivo, su empresa y nuestros agentes en destino.',
        ],
        image: IMG.packing,
      },
      {
        heading: 'Apoyo en el destino',
        body: [
          'A través de nuestra red y alianzas locales, podemos facilitar orientación para el aterrizaje —vivienda, servicios esenciales, gestiones iniciales— según las necesidades de cada corredor y cliente corporativo.',
        ],
      },
      {
        heading: 'Movilidad corporativa: aliado de RR.HH.',
        body: [
          'Para las empresas, reubicar talento es una inversión estratégica, y una mudanza mal gestionada puede afectar la incorporación de un ejecutivo clave. Trabajamos como una extensión de su departamento de movilidad o Recursos Humanos: un solo proveedor, reportes claros y un coordinador que resuelve para que el colaborador llegue enfocado en su nuevo rol, no en cajas.',
          'Manejamos programas puntuales o recurrentes, con la discreción y la profesionalidad que exige el nivel ejecutivo.',
        ],
        image: IMG.team,
      },
      {
        heading: 'Que el ejecutivo se enfoque en lo suyo',
        body: [
          'El valor de una relocación bien hecha se mide en tranquilidad. Mientras nosotros orquestamos el traslado del hogar, la aduana y la coordinación en destino, el profesional y su familia pueden concentrarse en la transición personal: adaptarse, conocer el país, empezar la nueva etapa con buen pie.',
          'Ese es el objetivo de nuestro servicio VIP: quitar de encima la complejidad logística para que la mudanza sea un trampolín, no un obstáculo.',
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:user-tie', title: 'Servicio VIP', text: 'Atención dedicada y discreta para el ejecutivo.' },
      { icon: 'fa6-solid:handshake-angle', title: 'Enlace con la empresa', text: 'Coordinamos tiempos con RR.HH. y movilidad.' },
      { icon: 'fa6-solid:earth-americas', title: 'Red global', text: 'Agentes en destino para un aterrizaje suave.' },
      { icon: 'fa6-solid:house-circle-check', title: 'Apoyo de llegada', text: 'Orientación para instalarse en el nuevo país.' },
    ],
    faqs: [
      { q: '¿Trabajan con empresas para reubicar a su personal?', a: 'Sí. Atendemos programas de movilidad corporativa, sirviendo de enlace entre el colaborador, RR.HH. y nuestros agentes en destino.' },
      { q: '¿Ayudan con la vivienda o trámites en destino?', a: 'A través de alianzas locales podemos orientar en el aterrizaje. El alcance se define según el corredor y las necesidades del cliente.' },
    ],
    related: ['cliente-corporativas', 'puerta-a-puerta', 'cliente-estudiantes'],
  },
  {
    id: 'cliente-estudiantes',
    categoryId: 'cliente',
    slug: 'mudanzas-para-estudiantes',
    icon: 'fa6-solid:graduation-cap',
    title: 'Mudanzas para Estudiantes',
    metaTitle: 'Mudanzas para Estudiantes al Extranjero | PIM Panamá',
    metaDescription:
      'Mudanzas para estudiantes que van a estudiar al extranjero: envíos pequeños en contenedor compartido (LCL) o aéreo, económicos y bien coordinados. Cotiza con PIM.',
    heroTagline: 'Irse a estudiar afuera con lo necesario, sin gastar de más.',
    heroImage: IMG.boxes,
    intro: [
      'Estudiar en el extranjero suele implicar mudar poco volumen: ropa, libros, algunos enseres y objetos personales. Para eso, la opción más económica es el contenedor compartido (LCL) o el envío aéreo de pocas cajas, donde solo se paga por el espacio o peso utilizado.',
      'Ayudamos al estudiante y a su familia a mover lo esencial de forma sencilla, segura y ajustada al presupuesto.',
    ],
    sections: [
      {
        heading: 'La opción más económica',
        body: [
          'Consolidamos sus cajas en un contenedor compartido o coordinamos un envío aéreo ligero, según urgencia y presupuesto. Le orientamos sobre qué conviene llevar y qué es mejor comprar en destino.',
        ],
        image: IMG.packing,
      },
      {
        heading: 'Sencillo para la familia',
        body: [
          'Nos encargamos del embalaje, la documentación y la coordinación para que el proceso sea liviano. El estudiante se concentra en su nueva etapa y la familia viaja tranquila.',
        ],
      },
      {
        heading: '¿Qué conviene llevar y qué comprar allá?',
        body: [
          'La clave de una mudanza estudiantil económica es llevar poco y bien elegido. Ropa adecuada al clima, libros y material de estudio, objetos personales y algo de menaje si el alojamiento no está amueblado. Los muebles voluminosos y baratos casi siempre conviene adquirirlos en destino.',
          'Le ayudamos a decidir qué vale la pena enviar según el costo del flete frente al de reponer cada cosa allá, para que ni gaste de más ni le falte lo esencial.',
        ],
        image: IMG.boxes,
      },
      {
        heading: 'Tranquilidad para los padres',
        body: [
          'Enviar a un hijo a estudiar al extranjero ya trae suficientes emociones; la logística de sus cosas no debería sumar preocupación. Nos encargamos del empaque, la documentación y el seguimiento del envío, y mantenemos informada a la familia en cada etapa.',
          'El estudiante recibe sus pertenencias sin complicaciones y la familia viaja —o se queda— con la certeza de que todo está en buenas manos.',
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:coins', title: 'Económico', text: 'Paga solo por el espacio o peso que usa.' },
      { icon: 'fa6-solid:layer-group', title: 'LCL o aéreo', text: 'Elegimos la vía según urgencia y presupuesto.' },
      { icon: 'fa6-solid:box', title: 'Empaque incluido', text: 'Materiales y embalaje de sus cajas.' },
      { icon: 'fa6-solid:heart', title: 'Tranquilidad familiar', text: 'Coordinación completa de principio a fin.' },
    ],
    faqs: [
      { q: '¿Conviene enviar muebles o comprarlos allá?', a: 'Para pocos enseres, casi siempre conviene enviar solo lo personal y adquirir muebles en destino. Le ayudamos a decidir qué vale la pena mover.' },
      { q: '¿Cuánto tarda un envío de estudiante?', a: 'El aéreo es cuestión de días; el marítimo compartido tarda más. Elegimos según su fecha de inicio de clases y presupuesto.' },
    ],
    related: ['lcl', 'aereas', 'cliente-expatriados'],
  },
  {
    id: 'cliente-jubilados',
    categoryId: 'cliente',
    slug: 'mudanzas-para-jubilados-retirados',
    icon: 'fa6-solid:mug-hot',
    title: 'Mudanzas para Jubilados / Retirados',
    metaTitle: 'Mudanzas para Jubilados y Retirados | PIM Panamá',
    metaDescription:
      'Mudanzas para jubilados y retirados con enfoque en el cuidado: desarmado, empaquetado especial y acompañamiento paciente. Panamá, destino de retiro, en buenas manos.',
    heroTagline: 'Una nueva etapa merece una mudanza tranquila y cuidada.',
    heroImage: IMG.team,
    intro: [
      'Panamá es uno de los destinos de retiro más elegidos del mundo, y muchas mudanzas de jubilados implican trasladar objetos con gran valor sentimental acumulados durante toda una vida. Nuestro servicio pone el acento en el cuidado, la paciencia y el acompañamiento cercano.',
      'Nos encargamos del trabajo pesado —desarmado, empaquetado especial, carga— para que esta nueva etapa comience sin esfuerzo ni estrés.',
    ],
    sections: [
      {
        heading: 'Cuidado y paciencia',
        body: [
          'Tratamos cada objeto —y cada recuerdo— con delicadeza. Nuestro equipo trabaja al ritmo del cliente, explicando el proceso y resolviendo dudas con amabilidad en todo momento.',
        ],
        image: IMG.packing,
      },
      {
        heading: 'Todo el trabajo pesado, por nosotros',
        body: [
          'Desarmamos muebles, embalamos lo frágil y lo valioso, cargamos y, en destino, entregamos, rearmamos y ubicamos todo donde corresponde. El jubilado no tiene que levantar nada.',
        ],
      },
      {
        heading: 'Panamá, destino de retiro',
        body: [
          'Panamá es, año tras año, uno de los destinos de jubilación más elegidos del mundo, por su clima, su costo de vida y los beneficios de su Visa Pensionado. Eso significa que muchas de nuestras mudanzas de jubilados son de llegada, con familias que traen el hogar de toda una vida para empezar su mejor etapa aquí.',
          'Conocemos bien este perfil y sus necesidades: cuidado con los objetos sentimentales, paciencia en el ritmo y orientación sobre la importación de menaje. Hacemos que la llegada sea tan tranquila como el destino promete.',
        ],
        image: IMG.team,
      },
      {
        heading: 'Cuidado con lo que tiene una historia',
        body: [
          'A lo largo de una vida se acumulan objetos que no son solo cosas: la vajilla de las fiestas familiares, los cuadros, los libros, los muebles heredados. Cada uno de esos objetos recibe de nuestro equipo el embalaje reforzado y el manejo delicado que merece.',
          'Nos tomamos el tiempo de hacerlo bien, explicando el proceso con amabilidad y respetando el valor —muchas veces incalculable— de lo que trasladamos.',
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:hand-holding-heart', title: 'Trato cercano', text: 'Paciencia y acompañamiento en cada paso.' },
      { icon: 'fa6-solid:screwdriver-wrench', title: 'Sin esfuerzo', text: 'Nosotros hacemos todo el trabajo pesado.' },
      { icon: 'fa6-solid:box-open', title: 'Empaque especial', text: 'Cuidado extra para objetos de valor sentimental.' },
      { icon: 'fa6-solid:house-circle-check', title: 'Instalación en destino', text: 'Rearmamos y ubicamos todo en su nuevo hogar.' },
    ],
    faqs: [
      { q: '¿Se encargan de todo para que yo no cargue nada?', a: 'Sí. Desarmamos, embalamos, cargamos y en destino entregamos, rearmamos y ubicamos. Usted solo supervisa a su ritmo.' },
      { q: '¿Tienen cuidado especial con objetos sentimentales?', a: 'Por supuesto. Lo frágil y lo valioso reciben embalaje reforzado y un manejo especialmente cuidadoso.' },
    ],
    related: ['cliente-residenciales', 'especiales-arte', 'complementarios-embalaje'],
  },

  /* ============ TANDA 2 · Artículos Especiales y de Alto Valor ============ */
  {
    id: 'especiales-arte',
    categoryId: 'especiales',
    slug: 'transporte-de-obras-de-arte-antiguedades',
    icon: 'fa6-solid:palette',
    title: 'Transporte de Obras de Arte y Antigüedades',
    metaTitle: 'Transporte de Obras de Arte y Antigüedades | PIM Panamá',
    metaDescription:
      'Embalaje y transporte internacional de obras de arte y antigüedades: cajas de madera a medida, control climático y seguros especiales. Manejo de coleccionista.',
    heroTagline: 'Piezas irremplazables merecen un manejo de museo.',
    heroImage: IMG.packing,
    intro: [
      'Cuadros, esculturas, antigüedades y objetos de colección requieren un tratamiento muy distinto al de una mudanza común. El menor descuido puede significar un daño irreparable, por eso aplicamos técnicas de embalaje de nivel museístico: cajas de madera a medida (crates), materiales libres de ácido y, cuando corresponde, control climático.',
      'Cada pieza se documenta, se protege y se asegura a su valor real para que llegue exactamente como salió.',
    ],
    sections: [
      {
        heading: 'Crates a medida y materiales especiales',
        body: [
          'Construimos cajas de madera diseñadas para cada obra, con acolchados internos, esquineros y sistemas anti-vibración. Para piezas sensibles usamos materiales libres de ácido y, si es necesario, embalaje con control de humedad.',
        ],
        image: IMG.containers,
      },
      {
        heading: 'Documentación y seguro especializado',
        body: [
          'Fotografiamos y documentamos el estado de cada pieza antes del embalaje, y coordinamos un seguro a valor declarado —idealmente con avalúo— apropiado para obras de arte y antigüedades.',
        ],
      },
      {
        heading: 'Un manejo de estándar museístico',
        body: [
          'Las mismas técnicas que emplean los museos para transportar sus colecciones guían nuestro trabajo con obras de arte y antigüedades: guantes, materiales libres de ácido, soportes internos que inmovilizan sin presionar, y crates de madera construidos a la medida exacta de cada pieza. Nada toca la superficie de la obra directamente.',
          'Para colecciones importantes, coordinamos incluso condiciones de control climático durante el trayecto, protegiendo pinturas, esculturas y muebles sensibles a la humedad y la temperatura.',
        ],
        image: IMG.packing,
      },
      {
        heading: 'Coleccionistas, galerías y herencias familiares',
        body: [
          'Atendemos por igual al coleccionista que traslada su patrimonio, a la galería que mueve una exposición y a la familia que hereda piezas de valor y quiere reunirlas en un nuevo hogar. En todos los casos, el principio es el mismo: cada objeto es irremplazable y se trata como tal.',
          'Le acompañamos también en la parte administrativa —documentación, avalúo, seguro— para que el traslado de sus obras sea tan seguro en lo legal como en lo físico.',
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:box-open', title: 'Crate a medida', text: 'Caja de madera diseñada para cada obra.' },
      { icon: 'fa6-solid:temperature-half', title: 'Control climático', text: 'Protección contra humedad para piezas sensibles.' },
      { icon: 'fa6-solid:camera', title: 'Estado documentado', text: 'Registro fotográfico antes del embalaje.' },
      { icon: 'fa6-solid:gem', title: 'Seguro a valor real', text: 'Cobertura acorde al valor de la pieza.' },
    ],
    faqs: [
      { q: '¿Hacen cajas a medida para cuadros grandes?', a: 'Sí. Construimos crates de madera específicos para cada obra, sin importar su tamaño, con protección interna anti-vibración.' },
      { q: '¿Puedo asegurar mis obras a su valor de avalúo?', a: 'Sí, es lo recomendable. Coordinamos un seguro a valor declarado, idealmente respaldado por un avalúo reciente.' },
    ],
    related: ['especiales-pianos', 'especiales-vinos', 'complementarios-seguros'],
  },
  {
    id: 'especiales-pianos',
    categoryId: 'especiales',
    slug: 'transporte-de-pianos-instrumentos',
    icon: 'fa6-solid:music',
    title: 'Transporte de Pianos e Instrumentos Musicales',
    metaTitle: 'Transporte de Pianos e Instrumentos Musicales | PIM Panamá',
    metaDescription:
      'Traslado especializado de pianos e instrumentos musicales: equipo, embalaje y técnicas específicas para mover pianos de cola, verticales y más, con seguridad.',
    heroTagline: 'Pesados, delicados y afinados: los pianos exigen manos expertas.',
    heroImage: IMG.packing,
    intro: [
      'Un piano combina un gran peso con una enorme delicadeza interna, y su transporte —especialmente el de cola— requiere equipo y técnica específicos. Un movimiento mal ejecutado puede afectar el mecanismo, la caja o la afinación. Por eso lo tratamos como el instrumento de precisión que es.',
      'También trasladamos otros instrumentos —cuerdas, vientos, percusión— con el embalaje adecuado para proteger su sonido y su valor.',
    ],
    sections: [
      {
        heading: 'Técnica y equipo para pianos',
        body: [
          'Empleamos tablas, correas, protecciones acolchadas y, para pianos de cola, el desmontaje profesional de patas y lira cuando es necesario. El objetivo es distribuir el peso y evitar cualquier impacto en el mecanismo.',
        ],
        image: IMG.containers,
      },
      {
        heading: 'Otros instrumentos',
        body: [
          'Guitarras, violines, vientos y equipos electrónicos musicales reciben estuches y embalaje que amortiguan golpes y controlan la humedad, protegiendo tanto la estructura como el sonido.',
        ],
      },
      {
        heading: 'Por qué un piano no es un mueble más',
        body: [
          'Un piano combina un gran peso —cientos de kilos— con un mecanismo interno de miles de piezas de precisión. Moverlo mal no solo raya la caja: puede desalinear el mecanismo, afectar el clavijero o dañar la tabla armónica, comprometiendo el sonido. Por eso el transporte de pianos es un oficio especializado, no una tarea de fuerza bruta.',
          'Nuestro equipo emplea tablas, correas, protecciones acolchadas y, en pianos de cola, el desmontaje profesional de patas y lira, distribuyendo el peso para que ningún componente sufra durante el traslado.',
        ],
        image: IMG.packing,
      },
      {
        heading: 'La afinación y el clima del destino',
        body: [
          'Es normal que un piano requiera afinación tras una mudanza: el cambio de ubicación, de humedad y de temperatura afecta las cuerdas y la madera. Recomendamos dejar que el instrumento se aclimate unos días en su nuevo entorno antes de afinarlo.',
          'Le orientamos sobre estos cuidados posteriores para que su piano recupere pronto su mejor sonido en su nuevo hogar.',
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:screwdriver-wrench', title: 'Desmontaje experto', text: 'Patas y lira de pianos de cola, cuando aplica.' },
      { icon: 'fa6-solid:shield-halved', title: 'Protección del mecanismo', text: 'Manejo que cuida caja, cuerdas y afinación.' },
      { icon: 'fa6-solid:people-carry-box', title: 'Equipo especializado', text: 'Tablas, correas y protecciones específicas.' },
      { icon: 'fa6-solid:music', title: 'Todo instrumento', text: 'Cuerdas, vientos, percusión y electrónicos.' },
    ],
    faqs: [
      { q: '¿Mueven pianos de cola?', a: 'Sí. Los pianos de cola requieren desmontaje profesional de patas y lira y un manejo especializado que realizamos con equipo y técnica adecuados.' },
      { q: '¿El piano necesitará afinación después?', a: 'Todo piano suele requerir afinación tras un traslado por los cambios de ubicación y clima. Nosotros lo movemos protegiendo el mecanismo para minimizar el impacto.' },
    ],
    related: ['especiales-arte', 'especiales-deportivo', 'complementarios-embalaje'],
  },
  {
    id: 'especiales-vinos',
    categoryId: 'especiales',
    slug: 'transporte-de-bodegas-vinos-finos',
    icon: 'fa6-solid:wine-bottle',
    title: 'Transporte de Bodegas y Vinos Finos',
    metaTitle: 'Transporte de Bodegas y Vinos Finos | PIM Panamá',
    metaDescription:
      'Traslado internacional de colecciones de vino y bodegas: control de temperatura, embalaje especializado y cuidado del producto. Su colección, intacta.',
    heroTagline: 'Su colección de vino merece viajar en condiciones óptimas.',
    heroImage: IMG.packing,
    intro: [
      'El vino fino es sensible a la temperatura, la vibración y la luz: condiciones inadecuadas durante el transporte pueden alterar una colección valiosa. Trasladamos bodegas y colecciones con embalaje especializado y, cuando el corredor lo permite, control de temperatura para preservar cada botella.',
      'Cuidamos su inversión enológica con el mismo rigor que aplicamos a cualquier artículo de alto valor.',
    ],
    sections: [
      {
        heading: 'Embalaje y clima',
        body: [
          'Usamos separadores y cajas diseñadas para botellas, que amortiguan la vibración y mantienen las botellas estables. Para colecciones sensibles evaluamos opciones con control térmico durante el trayecto.',
        ],
        image: IMG.containers,
      },
      {
        heading: 'Consideraciones aduaneras',
        body: [
          'El transporte internacional de alcohol puede estar sujeto a permisos e impuestos específicos según el país. Le orientamos sobre los requisitos del destino antes de mover su colección.',
        ],
      },
      {
        heading: 'Los enemigos del vino en un traslado',
        body: [
          'Tres factores amenazan una colección de vino en tránsito: la temperatura (el calor acelera el envejecimiento y puede arruinar una botella), la vibración (agita el sedimento y estresa el líquido) y la luz. Nuestro embalaje y, cuando el corredor lo permite, el control térmico, están diseñados para neutralizar los tres.',
          'Transportamos las botellas en posición estable, con separadores que absorben la vibración, cuidando que su inversión enológica llegue en las mismas condiciones en que salió.',
        ],
        image: IMG.containers,
      },
      {
        heading: 'Permisos e impuestos: no improvise con el alcohol',
        body: [
          'El alcohol es una de las categorías más reguladas en el comercio internacional. Muchos países exigen permisos específicos y aplican impuestos particulares a la importación de vino, incluso cuando forma parte de una mudanza. Ignorar esto puede significar retenciones o multas.',
          'Antes de mover su colección, revisamos la normativa exacta de su destino y le explicamos qué se puede, qué requiere permiso y qué impuestos podrían aplicar, para que no haya sorpresas.',
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:temperature-half', title: 'Control de temperatura', text: 'Opciones térmicas para colecciones sensibles.' },
      { icon: 'fa6-solid:box', title: 'Embalaje anti-vibración', text: 'Separadores y cajas diseñadas para botellas.' },
      { icon: 'fa6-solid:file-contract', title: 'Guía aduanera', text: 'Le informamos sobre permisos e impuestos.' },
      { icon: 'fa6-solid:wine-glass', title: 'Colección intacta', text: 'Cuidamos cada botella como una inversión.' },
    ],
    faqs: [
      { q: '¿Pueden mantener el vino a temperatura durante el viaje?', a: 'Para colecciones sensibles evaluamos soluciones con control térmico según el corredor. No todas las rutas lo permiten; se lo confirmamos en la cotización.' },
      { q: '¿Necesito permisos para mover vino a otro país?', a: 'El transporte internacional de alcohol suele requerir permisos y pagar impuestos según el destino. Le orientamos sobre los requisitos aplicables.' },
    ],
    related: ['especiales-arte', 'complementarios-aduanas', 'complementarios-seguros'],
  },
  {
    id: 'especiales-deportivo',
    categoryId: 'especiales',
    slug: 'transporte-equipaje-deportivo',
    icon: 'fa6-solid:bicycle',
    title: 'Transporte de Equipaje Deportivo',
    metaTitle: 'Transporte de Equipaje Deportivo Internacional | PIM Panamá',
    metaDescription:
      'Envío internacional de bicicletas, tablas de surf, equipo de esquí y golf: embalaje a medida para equipo deportivo voluminoso o delicado. Cotiza con PIM.',
    heroTagline: 'Bicicletas, tablas, esquís y palos: su equipo llega listo para la acción.',
    heroImage: IMG.packing,
    intro: [
      'El equipo deportivo suele ser voluminoso, delicado o de formas difíciles de embalar: bicicletas, tablas de surf, equipo de esquí, palos de golf. Cada uno requiere una solución específica para viajar sin daños. Preparamos su equipo con cajas y protecciones a medida para que llegue a destino en perfecto estado.',
      'Ideal para deportistas, viajeros y quienes se mudan con su afición a cuestas.',
    ],
    sections: [
      {
        heading: 'Embalaje según el deporte',
        body: [
          'Desmontamos parcialmente bicicletas para encajonarlas de forma segura, protegemos tablas de surf con fundas rígidas y acolchados, y aseguramos esquís y palos de golf en estuches reforzados. Cada disciplina, su solución.',
        ],
        image: IMG.containers,
      },
      {
        heading: 'Envío individual o con su mudanza',
        body: [
          'Puede enviar solo su equipo deportivo o incluirlo dentro de su mudanza de casa. Le recomendamos la opción más conveniente según volumen y destino.',
        ],
      },
      {
        heading: 'Una solución para cada disciplina',
        body: [
          'Cada deporte plantea un reto de embalaje distinto. Una bicicleta se desmonta parcialmente (manubrio, pedales, a veces ruedas) y se encajona; una tabla de surf o de esquí necesita fundas rígidas y protección en cantos y punta; los palos de golf viajan en estuches reforzados; el equipo de buceo o pesca requiere cuidado con piezas delicadas.',
          'Preparamos cada equipo con la técnica y los materiales adecuados a su forma y fragilidad, para que llegue listo para usarse en su destino.',
        ],
        image: IMG.containers,
      },
      {
        heading: 'Para deportistas, viajeros y aficionados',
        body: [
          'No hace falta ser atleta profesional para necesitar este servicio. Familias que se mudan con las bicicletas de todos, aficionados que no quieren separarse de su tabla, deportistas que viajan con su equipo a una competencia: todos encuentran aquí una solución segura.',
          'Y si su equipo es de alto valor, aplicamos el mismo cuidado y las mismas opciones de seguro que a cualquier artículo especial.',
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:box-open', title: 'Embalaje a medida', text: 'Solución específica para cada tipo de equipo.' },
      { icon: 'fa6-solid:screwdriver-wrench', title: 'Desmontaje seguro', text: 'Encajonamos bicicletas y equipo voluminoso.' },
      { icon: 'fa6-solid:shield-halved', title: 'Protección reforzada', text: 'Fundas y estuches que amortiguan golpes.' },
      { icon: 'fa6-solid:box', title: 'Solo o con su mudanza', text: 'Envío individual o dentro de su contenedor.' },
    ],
    faqs: [
      { q: '¿Cómo embalan una bicicleta para envío internacional?', a: 'La desmontamos parcialmente (manubrio, pedales, a veces ruedas) y la encajonamos con protecciones para que viaje segura, lista para rearmar en destino.' },
      { q: '¿Pueden enviar varias tablas o equipos juntos?', a: 'Sí. Consolidamos varios equipos deportivos con protecciones individuales, optimizando el envío.' },
    ],
    related: ['especiales-pianos', 'lcl', 'aereas'],
  },

  /* ============ TANDA 2 · Servicios Complementarios ============ */
  {
    id: 'complementarios-embalaje',
    categoryId: 'complementarios',
    slug: 'servicio-de-embalaje-profesional',
    icon: 'fa6-solid:box-open',
    title: 'Servicio de Embalaje Profesional',
    metaTitle: 'Servicio de Embalaje Profesional para Mudanzas | PIM Panamá',
    metaDescription:
      'Embalaje profesional de exportación: cajas estándar, madera a medida, burbuja y materiales premium para proteger cada objeto de su mudanza. Cotiza con PIM.',
    heroTagline: 'El 90% de la protección de su mudanza está en el embalaje.',
    heroImage: IMG.packing,
    intro: [
      'Un buen embalaje es la mejor póliza contra daños. Nuestro servicio profesional utiliza materiales de calidad de exportación y técnicas específicas para cada tipo de objeto: cartón corrugado, burbuja, papel kraft, esquineros y cajas de madera a medida para lo más frágil.',
      'Empacamos con criterio, inventariamos todo y optimizamos el volumen para proteger sus bienes y aprovechar cada centímetro del envío.',
    ],
    sections: [
      {
        heading: 'Materiales y técnicas de exportación',
        body: [
          'Cada objeto pide un método: vajilla en divisores, cuadros en cajas planas acolchadas, electrónicos en su embalaje original o equivalente, muebles envueltos y protegidos en esquinas. Para piezas críticas, crates de madera hechos a medida.',
        ],
        image: IMG.boxes,
      },
      {
        heading: 'Inventario y etiquetado',
        body: [
          'Todo lo que empacamos se inventaría y etiqueta por área y contenido. Esto agiliza la aduana, respalda el seguro y hace que la reinstalación en destino sea ordenada y sin pérdidas.',
        ],
      },
      {
        heading: 'El embalaje es su primera póliza de seguro',
        body: [
          'Antes que cualquier cobertura, la mejor protección de sus bienes es un embalaje bien hecho. La mayoría de los daños en una mudanza no ocurren por accidentes espectaculares, sino por vibración, presión y roce durante semanas de transporte. Un empaque profesional neutraliza esas fuerzas silenciosas.',
          'Por eso invertimos en materiales de calidad de exportación y en técnica: es lo que marca la diferencia entre una mudanza que llega intacta y una llena de sorpresas desagradables.',
        ],
        image: IMG.packing,
      },
      {
        heading: 'Empaque parcial o total, usted decide',
        body: [
          'Puede contratar el empaque profesional completo —lo hacemos todo— o solo el de los artículos frágiles y valiosos, empacando usted el resto. También le proveemos materiales de calidad si prefiere hacerlo por su cuenta con nuestra asesoría.',
          'En mudanzas internacionales, sin embargo, el empaque profesional suele ser requisito de aduanas y aseguradoras, por lo que le indicamos qué es obligatorio en su corredor.',
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:box', title: 'Materiales premium', text: 'Calidad de exportación para máxima protección.' },
      { icon: 'fa6-solid:cube', title: 'Crates a medida', text: 'Cajas de madera para lo más frágil o valioso.' },
      { icon: 'fa6-solid:list-check', title: 'Todo inventariado', text: 'Etiquetado por área que agiliza aduana y seguro.' },
      { icon: 'fa6-solid:maximize', title: 'Volumen optimizado', text: 'Empaque eficiente que reduce costos de flete.' },
    ],
    faqs: [
      { q: '¿Es obligatorio el embalaje profesional?', a: 'Para mudanzas internacionales suele exigirlo la aduana y el seguro, para garantizar que el contenido coincide con el inventario y está bien protegido. En locales es opcional.' },
      { q: '¿Puedo comprar solo los materiales?', a: 'Sí. Si prefiere empacar usted, le proveemos cajas y materiales de calidad y le damos asesoría para hacerlo correctamente.' },
    ],
    related: ['complementarios-seguros', 'complementarios-almacenaje', 'maritimas'],
  },
  {
    id: 'complementarios-seguros',
    categoryId: 'complementarios',
    slug: 'seguros-de-mudanza-internacional',
    icon: 'fa6-solid:file-shield',
    title: 'Seguros de Mudanza Internacional',
    metaTitle: 'Seguros de Mudanza Internacional (Todo Riesgo) | PIM Panamá',
    metaDescription:
      'Pólizas de seguro para mudanzas internacionales: cobertura a todo riesgo puerta a puerta contra robos, daños y pérdidas. Asesoría sobre valor declarado. PIM Panamá.',
    heroTagline: 'Tranquilidad total: sus bienes protegidos de puerta a puerta.',
    heroImage: IMG.packing,
    intro: [
      'Por más cuidado que se ponga, ningún transporte internacional está exento de imprevistos: manipulación en puertos, condiciones de mar, retrasos. Un seguro a todo riesgo puerta a puerta convierte esa incertidumbre en tranquilidad, protegiendo el valor de su menaje contra daños, robos y pérdidas.',
      'Trabajamos con aseguradoras internacionales reconocidas y le asesoramos sobre el valor a declarar para que su cobertura sea justa y suficiente.',
    ],
    sections: [
      {
        heading: 'Cobertura a todo riesgo',
        body: [
          'La póliza a todo riesgo cubre el trayecto completo, de su casa de origen a la de destino, incluyendo la manipulación en puertos y aeropuertos. Es la protección más completa para una mudanza internacional.',
        ],
        image: IMG.containers,
      },
      {
        heading: 'Valor declarado, la clave',
        body: [
          'El costo y la cobertura dependen del valor que usted declare de su menaje. Le ayudamos a estimarlo correctamente —ni de más ni de menos— para que, ante cualquier eventualidad, la indemnización sea acorde.',
        ],
      },
      {
        heading: 'Cómo elaborar un inventario valorado',
        body: [
          'La base de un buen seguro es un inventario valorado: la lista de sus bienes con un valor asignado a cada uno. No se trata de inflar cifras ni de subestimar por ahorrar prima; se trata de reflejar el valor real de reposición, para que la indemnización, si hace falta, le permita reponer lo perdido.',
          'Le guiamos en este ejercicio, prestando atención especial a los artículos de mayor valor —electrónicos, obras de arte, joyas— que conviene declarar con detalle.',
        ],
        image: IMG.containers,
      },
      {
        heading: 'Qué hacer si algo llega dañado',
        body: [
          'Aunque los incidentes son raros con un buen embalaje, es importante saber cómo actuar. Al recibir su carga, revise el inventario y el estado de los bienes; si detecta un daño, repórtelo de inmediato a su coordinador y documéntelo con fotografías. Cuanto antes se notifique, más ágil es el proceso de reclamo.',
          'Nosotros le acompañamos en la gestión con la aseguradora para que su reclamo se resuelva de la forma más rápida y justa posible.',
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:shield-halved', title: 'Todo riesgo', text: 'Cobertura completa de puerta a puerta.' },
      { icon: 'fa6-solid:building-columns', title: 'Aseguradoras top', text: 'Respaldo de compañías internacionales reconocidas.' },
      { icon: 'fa6-solid:scale-balanced', title: 'Valor justo', text: 'Le asesoramos sobre el valor a declarar.' },
      { icon: 'fa6-solid:face-smile', title: 'Tranquilidad', text: 'Viaje sin preocuparse por imprevistos.' },
    ],
    faqs: [
      { q: '¿Qué cubre el seguro a todo riesgo?', a: 'Daños, robos y pérdidas durante todo el trayecto internacional, incluida la manipulación en puertos y aeropuertos. Es la cobertura más completa disponible.' },
      { q: '¿Cómo sé cuánto valor declarar?', a: 'Le ayudamos a elaborar un inventario valorado de su menaje para declarar una cifra realista, de modo que la indemnización sea adecuada si algo ocurre.' },
    ],
    related: ['complementarios-embalaje', 'complementarios-aduanas', 'maritimas'],
  },
  {
    id: 'complementarios-almacenaje',
    categoryId: 'complementarios',
    slug: 'almacenamiento-storage-panama',
    icon: 'fa6-solid:warehouse',
    title: 'Almacenamiento (Storage)',
    metaTitle: 'Almacenamiento y Storage para Mudanzas | PIM Panamá',
    metaDescription:
      'Almacenamiento seguro en Panamá para mudanzas: depósito a corto y largo plazo, instalaciones monitoreadas y depósito aduanero. Guarde sus bienes con confianza.',
    heroTagline: 'Un espacio seguro para sus cosas, por el tiempo que necesite.',
    heroImage: IMG.warehouse,
    intro: [
      'A veces los tiempos de una mudanza no calzan: la casa de destino aún no está lista, hay una transición entre viviendas o una parte del menaje debe esperar. Para eso ofrecemos almacenamiento seguro en Panamá, a corto o largo plazo, en instalaciones monitoreadas.',
      'Sus bienes quedan inventariados, protegidos y disponibles para cuando los necesite, con la flexibilidad que su situación requiera.',
    ],
    sections: [
      {
        heading: 'Corto y largo plazo',
        body: [
          'Ya sea por unos días entre mudanzas o por meses mientras define su próximo paso, adaptamos el almacenamiento a su necesidad. El menaje se guarda embalado e inventariado para su protección y control.',
        ],
        image: IMG.containers,
      },
      {
        heading: 'Depósito aduanero',
        body: [
          'Para carga internacional en tránsito, el depósito aduanero permite mantener la mercancía bajo control aduanero hasta completar los trámites. Le orientamos si su caso lo requiere.',
        ],
      },
      {
        heading: 'Cuándo necesitará almacenamiento',
        body: [
          'El almacenamiento resuelve uno de los problemas más comunes de las mudanzas: los tiempos que no calzan. La casa de destino aún no está lista, hay un lapso entre la salida de una vivienda y la entrada a otra, o parte del menaje debe esperar a una segunda etapa. En todos estos casos, un depósito seguro le da flexibilidad.',
          'Adaptamos el plazo a su necesidad —unos días o varios meses— y guardamos su menaje embalado e inventariado, listo para entregarse cuando usted lo pida.',
        ],
        image: IMG.warehouse,
      },
      {
        heading: 'Sus bienes, protegidos mientras esperan',
        body: [
          'Almacenar no significa dejar sus cosas al azar. Sus bienes se guardan en instalaciones monitoreadas, correctamente embaladas para evitar daños durante el reposo, y con un inventario que le permite saber exactamente qué hay en depósito.',
          'Si lo desea, incluimos cobertura de seguro para el período de almacenamiento, de modo que su tranquilidad no se interrumpa mientras su mudanza espera.',
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:shield-halved', title: 'Instalaciones seguras', text: 'Espacios monitoreados para su tranquilidad.' },
      { icon: 'fa6-solid:calendar', title: 'Flexible', text: 'Corto o largo plazo, según lo necesite.' },
      { icon: 'fa6-solid:list-check', title: 'Inventariado', text: 'Todo registrado para su control y protección.' },
      { icon: 'fa6-solid:file-contract', title: 'Depósito aduanero', text: 'Opción para carga internacional en tránsito.' },
    ],
    faqs: [
      { q: '¿Puedo guardar mis cosas entre mudanzas?', a: 'Sí. Ofrecemos almacenamiento a corto y largo plazo para esos períodos en que la casa de destino aún no está lista o hay una transición.' },
      { q: '¿Mis bienes están asegurados en la bodega?', a: 'Podemos incluir cobertura de seguro para el período de almacenamiento. Se lo detallamos junto con la tarifa de storage.' },
    ],
    related: ['complementarios-embalaje', 'contenedor-almacenamiento', 'complementarios-seguros'],
  },
  {
    id: 'complementarios-aduanas',
    categoryId: 'complementarios',
    slug: 'gestion-aduanera-desaduanizacion',
    icon: 'fa6-solid:file-contract',
    title: 'Gestión Aduanera y Desaduanización',
    metaTitle: 'Gestión Aduanera y Desaduanización de Mudanzas | PIM Panamá',
    metaDescription:
      'Gestión aduanera para mudanzas internacionales: documentación, partidas arancelarias, exenciones de menaje y desaduanización en origen y destino. PIM Panamá.',
    heroTagline: 'La burocracia aduanera, resuelta por expertos.',
    heroImage: IMG.packing,
    intro: [
      'La aduana es donde más mudanzas se complican: documentación incompleta, clasificaciones erróneas o desconocimiento de las exenciones pueden causar retrasos y costos inesperados. Nuestra gestión aduanera se ocupa de todo el papeleo y la interlocución con las autoridades, en origen y en destino.',
      'Conocemos los regímenes de importación de menaje de casa y las exenciones aplicables, para que su mudanza pase por aduana de la forma más fluida y económica posible.',
    ],
    sections: [
      {
        heading: 'Documentación y clasificación',
        body: [
          'Preparamos y presentamos la documentación exigida, clasificamos correctamente la mercancía y aplicamos, cuando corresponde, los beneficios de menaje de casa usado que muchos países contemplan para quienes trasladan su residencia.',
        ],
        image: IMG.containers,
      },
      {
        heading: 'Exenciones e impuestos',
        body: [
          'Muchos destinos permiten importar el menaje usado con exención total o parcial de impuestos bajo ciertas condiciones (por ejemplo, con determinadas visas de residencia). Le informamos qué aplica en su caso para evitar pagos innecesarios.',
        ],
      },
      {
        heading: 'Por qué la aduana complica tantas mudanzas',
        body: [
          'La aduana es el punto donde más mudanzas se atascan, y casi siempre por lo mismo: documentación incompleta o incorrecta, clasificación errónea de la mercancía o desconocimiento de los beneficios disponibles. El resultado son demoras, almacenaje no previsto y, a veces, pagos que podrían haberse evitado.',
          'Nuestra gestión aduanera existe precisamente para eliminar ese riesgo: preparamos el papeleo con precisión y anticipamos los requisitos de cada país antes de que su carga llegue.',
        ],
        image: IMG.containers,
      },
      {
        heading: 'Un solo interlocutor para origen y destino',
        body: [
          'En una mudanza internacional intervienen aduanas en el país de origen y en el de destino, cada una con sus reglas. En lugar de que usted lidie con agentes distintos en dos países, coordinamos ambos extremos a través de nuestra red, sirviendo de único interlocutor.',
          'Así, el despacho fluye de forma coordinada y usted siempre tiene una sola persona a quien preguntar por el estado de sus trámites.',
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:file-lines', title: 'Papeleo completo', text: 'Preparamos y presentamos toda la documentación.' },
      { icon: 'fa6-solid:percent', title: 'Exenciones aplicadas', text: 'Aprovechamos beneficios de menaje usado.' },
      { icon: 'fa6-solid:earth-americas', title: 'Origen y destino', text: 'Gestión aduanera en ambos extremos del corredor.' },
      { icon: 'fa6-solid:gauge-high', title: 'Sin retrasos', text: 'Evitamos demoras por errores de documentación.' },
    ],
    faqs: [
      { q: '¿Puedo importar mi menaje sin pagar impuestos?', a: 'Muchos países permiten la importación de menaje de casa usado con exención total o parcial bajo ciertas condiciones (a menudo ligadas al tipo de visa). Verificamos qué aplica en su destino.' },
      { q: '¿Ustedes hacen el trámite o debo contratar un agente aparte?', a: 'Nosotros coordinamos la gestión aduanera en origen y destino a través de nuestros agentes, para que usted tenga un solo interlocutor.' },
    ],
    related: ['complementarios-seguros', 'maritimas', 'puerta-a-puerta'],
  },
  {
    id: 'complementarios-limpieza',
    categoryId: 'complementarios',
    slug: 'limpieza-final-del-hogar-move-out',
    icon: 'fa6-solid:broom',
    title: 'Limpieza Final del Hogar (Move-out)',
    metaTitle: 'Limpieza Final del Hogar (Move-out Cleaning) | PIM Panamá',
    metaDescription:
      'Servicio de limpieza final (move-out cleaning) tras la mudanza: entregue su vivienda impecable para el propietario o el nuevo dueño. Un complemento que ahorra tiempo.',
    heroTagline: 'Entregue su casa impecable, sin mover un dedo.',
    heroImage: IMG.packing,
    intro: [
      'Después de una mudanza, la casa vacía casi siempre necesita una limpieza a fondo, ya sea para devolverla al propietario en buenas condiciones o para dejarla lista al nuevo dueño. Nuestro servicio de limpieza final (move-out cleaning) le ahorra ese último esfuerzo en un momento en que su energía está en otra parte.',
      'Un complemento pequeño que cierra su mudanza con broche de oro y le evita una tarea agotadora.',
    ],
    sections: [
      {
        heading: '¿Qué incluye?',
        body: [
          'Limpieza profunda de espacios ya vacíos: pisos, baños, cocina, ventanas interiores y superficies. Dejamos la vivienda presentable para su entrega, según el alcance que acordemos.',
        ],
        image: IMG.boxes,
      },
      {
        heading: 'El cierre perfecto de su mudanza',
        body: [
          'Coordinamos la limpieza justo después de retirar el mobiliario, de modo que usted entregue la casa impecable sin tener que regresar ni contratar a un tercero por separado.',
        ],
      },
      {
        heading: 'Ideal para recuperar su depósito de alquiler',
        body: [
          'Si sale de una vivienda alquilada, la limpieza final suele ser la condición para recuperar el depósito de garantía. Una entrega impecable evita descuentos y disputas con el propietario o la administración. Nuestro servicio deja la vivienda en condiciones de inspección.',
          'Para quien vende o entrega una casa propia, una limpieza a fondo también mejora la primera impresión del nuevo dueño. Es el cierre profesional de su mudanza.',
        ],
        image: IMG.boxes,
      },
      {
        heading: 'Coordinado con su mudanza, sin terceros',
        body: [
          'La ventaja de contratar la limpieza con nosotros es la coordinación: entra justo después de que retiramos el mobiliario, sin que usted tenga que agendar a un proveedor aparte, esperar en la casa vacía o hacer un viaje adicional.',
          'Un solo equipo, un solo interlocutor y un cierre sin cabos sueltos para que su mudanza termine, literalmente, con la casa impecable.',
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:broom', title: 'Limpieza a fondo', text: 'Pisos, baños, cocina y superficies del hogar vacío.' },
      { icon: 'fa6-solid:clock', title: 'Le ahorra tiempo', text: 'Un esfuerzo menos en un momento agitado.' },
      { icon: 'fa6-solid:handshake', title: 'Entrega impecable', text: 'Devuelva la vivienda en óptimas condiciones.' },
      { icon: 'fa6-solid:list-check', title: 'Todo en un proveedor', text: 'Coordinado con su mudanza, sin terceros.' },
    ],
    faqs: [
      { q: '¿La limpieza se hace antes o después de mudar los muebles?', a: 'Después de retirar el mobiliario, sobre la vivienda ya vacía, para poder limpiar a fondo cada espacio.' },
      { q: '¿Puedo contratar solo la limpieza?', a: 'Este servicio se ofrece como complemento de la mudanza para coordinar tiempos; consúltenos su caso y le indicamos la disponibilidad.' },
    ],
    related: ['complementarios-embalaje', 'locales', 'cliente-residenciales'],
  },

  /* ============ Casillero y Courier ============ */
  {
    id: 'casillero-miami',
    categoryId: 'casillero',
    slug: 'casillero-en-miami-compras-usa',
    icon: 'fa6-solid:cart-shopping',
    title: 'Casillero en Miami (Compras en USA)',
    metaTitle: 'Casillero en Miami | Compra en USA y Recibe en Panamá | PIM',
    metaDescription:
      'Casillero en Miami de Panamá International Movers: compra en Amazon y tiendas de Estados Unidos, consolidamos tus paquetes y los enviamos a Panamá. Regístrate gratis.',
    heroTagline: 'Compre en cualquier tienda de USA y reciba en Panamá, aunque no envíen al extranjero.',
    heroImage: IMG.containers,
    intro: [
      'Muchas tiendas de Estados Unidos —desde Amazon hasta marcas que no despachan fuera del país— ofrecen precios y variedad que no siempre se consiguen localmente. Con nuestro casillero en Miami, usted obtiene una dirección física en Estados Unidos donde recibir sus compras, y nosotros nos encargamos de traerlas hasta Panamá.',
      'Es la forma más sencilla de comprar en USA como si viviera allí: registra el casillero, usa esa dirección al pagar, y sus paquetes llegan a nuestra bodega en Miami, donde los consolidamos y enviamos a su puerta.',
    ],
    sections: [
      {
        heading: '¿Cómo funciona el casillero?',
        body: [
          'El proceso es simple: al registrarse, le asignamos una dirección personal en Miami (con su nombre y un número de casillero). Cuando compra en cualquier tienda estadounidense, usa esa dirección como destino de envío. La tienda despacha a nuestra bodega en Miami, nosotros recibimos el paquete, lo registramos y le notificamos.',
          'Desde ahí, usted decide: enviarlo de inmediato o esperar a acumular varias compras para consolidarlas en un solo envío y ahorrar. Nosotros lo trasladamos a Panamá y se lo entregamos.',
        ],
        image: IMG.warehouse,
      },
      {
        heading: 'Consolidación: la clave del ahorro',
        body: [
          'Enviar cinco paquetes por separado cuesta mucho más que enviarlos juntos. Nuestro servicio de consolidación reúne todas sus compras que llegan a Miami en un solo envío hacia Panamá, reduciendo significativamente el costo de flete por producto.',
          'Usted controla cuándo consolidar y enviar desde su cuenta, optimizando cada envío según lo que haya comprado.',
        ],
      },
      {
        heading: 'Compre en cualquier tienda de Estados Unidos',
        body: [
          'Amazon, eBay, tiendas de tecnología, ropa, repuestos, artículos que no se consiguen en Panamá o que allá cuestan mucho menos: con una dirección en USA, el catálogo de todo Estados Unidos queda a su alcance, incluso el de tiendas que no envían internacionalmente.',
          'Ideal para compradores frecuentes, pequeños negocios que importan producto y expatriados acostumbrados a comprar en línea en USA.',
        ],
      },
      {
        heading: 'Impuestos y desaduanización, resueltos',
        body: [
          'La importación de compras está sujeta a las normas y los impuestos de aduana de Panamá. Nos encargamos de la desaduanización y le explicamos con transparencia los cargos aplicables según el valor y tipo de producto, para que no haya sorpresas al recibir.',
          'Con nuestra experiencia en logística internacional, su compra pasa por aduana de forma ágil y llega a sus manos sin complicaciones.',
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:location-dot', title: 'Su dirección en Miami', text: 'Reciba compras de USA aunque la tienda no envíe al extranjero.' },
      { icon: 'fa6-solid:boxes-stacked', title: 'Consolidación', text: 'Junte varias compras en un envío y ahorre en flete.' },
      { icon: 'fa6-solid:cart-shopping', title: 'Todo el catálogo de USA', text: 'Amazon, eBay y miles de tiendas a su alcance.' },
      { icon: 'fa6-solid:file-contract', title: 'Aduana gestionada', text: 'Desaduanización y cargos claros, sin sorpresas.' },
    ],
    faqs: [
      { q: '¿Cómo obtengo mi dirección en Miami?', a: 'Al registrarse en el casillero le asignamos una dirección personal en Miami con su nombre y número de casillero. La usa como destino de envío al comprar en cualquier tienda de Estados Unidos.' },
      { q: '¿Cuánto ahorro consolidando?', a: 'Depende del número y tamaño de sus paquetes, pero reunir varias compras en un solo envío reduce notablemente el costo de flete por producto frente a enviarlas por separado.' },
      { q: '¿Pago impuestos por mis compras?', a: 'La importación está sujeta a los impuestos de aduana de Panamá según el valor y tipo de producto. Le explicamos los cargos con transparencia y gestionamos la desaduanización por usted.' },
    ],
    related: ['courier-internacional', 'maritimas', 'aereas'],
  },
  {
    id: 'courier-internacional',
    categoryId: 'casillero',
    slug: 'courier-internacional',
    icon: 'fa6-solid:truck-fast',
    title: 'Courier Internacional',
    metaTitle: 'Courier Internacional Puerta a Puerta desde Panamá | PIM',
    metaDescription:
      'Servicio de courier internacional puerta a puerta desde Panamá: envío express de documentos y paquetes a todo el mundo, con seguimiento y gestión aduanera.',
    heroTagline: 'Envíe documentos y paquetes a cualquier parte del mundo, rápido y rastreable.',
    heroImage: IMG.plane,
    intro: [
      'Cuando necesita enviar un documento importante, una muestra o un paquete al extranjero con rapidez, nuestro servicio de courier internacional lo lleva puerta a puerta a cualquier parte del mundo. Es la solución para envíos que no pueden esperar el tiempo de una mudanza o una carga consolidada.',
      'Recogemos en su domicilio u oficina, gestionamos la documentación y la aduana, y entregamos en destino con seguimiento en cada etapa.',
    ],
    sections: [
      {
        heading: 'Envíos express puerta a puerta',
        body: [
          'El courier está pensado para la rapidez: recogemos su envío y lo despachamos por vía aérea hacia su destino internacional, con entrega directa en la dirección del destinatario. Ideal para documentos legales, contratos, muestras comerciales, repuestos urgentes o paquetes personales.',
          'Usted no tiene que acudir a ninguna oficina ni gestionar trámites: coordinamos todo desde la recogida hasta la entrega final.',
        ],
        image: IMG.boxes,
      },
      {
        heading: 'Documentos y paquetes, con seguimiento',
        body: [
          'Ya sea un sobre con documentos o una caja con productos, cada envío viaja identificado y con número de seguimiento, para que usted y el destinatario sepan dónde está en todo momento. La trazabilidad da tranquilidad cuando lo que envía es importante o urgente.',
          'Le asesoramos sobre el embalaje adecuado según el contenido, para que llegue en perfecto estado.',
        ],
      },
      {
        heading: 'Aduanas y documentación, sin complicaciones',
        body: [
          'Los envíos internacionales pasan por aduana tanto en origen como en destino. Preparamos la documentación necesaria y gestionamos el despacho para que su courier fluya sin retenciones, informándole de cualquier requisito o cargo aplicable según el país de destino.',
        ],
      },
    ],
    benefits: [
      { icon: 'fa6-solid:bolt', title: 'Rápido', text: 'Envío express por vía aérea a todo el mundo.' },
      { icon: 'fa6-solid:house', title: 'Puerta a puerta', text: 'Recogemos y entregamos en la dirección indicada.' },
      { icon: 'fa6-solid:location-crosshairs', title: 'Con seguimiento', text: 'Rastree su envío en cada etapa del trayecto.' },
      { icon: 'fa6-solid:file-shield', title: 'Aduanas gestionadas', text: 'Documentación y despacho resueltos por nosotros.' },
    ],
    faqs: [
      { q: '¿Qué puedo enviar por courier?', a: 'Documentos, muestras comerciales, repuestos, paquetes personales y la mayoría de mercancías, sujeto a las restricciones de aduana del país de destino. Le indicamos qué no puede enviarse a cada destino.' },
      { q: '¿Puedo rastrear mi envío?', a: 'Sí. Cada courier viaja con número de seguimiento para que usted y el destinatario conozcan su ubicación y estado en todo momento.' },
    ],
    related: ['casillero-miami', 'aereas', 'complementarios-aduanas'],
  },
];

export const servicesByCategory = (categoryId: string) =>
  services.filter((s) => s.categoryId === categoryId);

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
