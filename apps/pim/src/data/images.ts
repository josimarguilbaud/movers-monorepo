/* Imágenes TEMÁTICAS por palabra clave (fotos reales relacionadas con cada
   servicio/destino/sección). Usa LoremFlickr, que devuelve una foto Creative
   Commons acorde a los keywords, estable por `lock`.
   ⚠️ Son placeholders temáticos — reemplazar por fotos reales de PIM.
   Las plantillas no cambian: siguen llamando imgFor(key, variant). */

const KEYWORDS: Record<string, string> = {
  /* ---- Servicios: Internacionales ---- */
  maritimas: 'cargo,ship,port',
  fcl: 'shipping,container',
  lcl: 'warehouse,cargo,boxes',
  aereas: 'cargo,airplane,airport',
  'puerta-a-puerta': 'moving,delivery,home',
  /* ---- Vehículos ---- */
  'auto-contenedor': 'car,shipping,container',
  'auto-roro': 'car,cargo,ship',
  motos: 'motorcycle',
  clasicos: 'classic,car',
  /* ---- Mascotas ---- */
  'mascotas-internacional': 'pet,travel',
  'mascotas-perros': 'dog',
  'mascotas-gatos': 'cat',
  'mascotas-exoticos': 'parrot',
  /* ---- Contenedores ---- */
  'contenedor-20': 'shipping,container',
  'contenedor-40': 'container,port',
  'contenedor-almacenamiento': 'storage,container',
  'drop-off': 'container,truck',
  /* ---- Locales ---- */
  locales: 'moving,truck,city',
  nacionales: 'truck,highway,road',
  express: 'moving,boxes',
  /* ---- Por tipo de cliente ---- */
  'cliente-residenciales': 'moving,home,family',
  'cliente-corporativas': 'office,moving',
  'cliente-expatriados': 'business,airport,travel',
  'cliente-estudiantes': 'student,luggage,boxes',
  'cliente-jubilados': 'senior,couple,home',
  /* ---- Especiales ---- */
  'especiales-arte': 'art,gallery,painting',
  'especiales-pianos': 'piano',
  'especiales-vinos': 'wine,cellar',
  'especiales-deportivo': 'bicycle,sport',
  /* ---- Complementarios ---- */
  'complementarios-embalaje': 'packing,boxes',
  'complementarios-seguros': 'insurance,document',
  'complementarios-almacenaje': 'warehouse,storage',
  'complementarios-aduanas': 'customs,documents,port',
  'complementarios-limpieza': 'cleaning,home',
  /* ---- Casillero y Courier ---- */
  'casillero-miami': 'parcel,package',
  'courier-internacional': 'courier,delivery,parcel',

  /* ---- Categorías (hub) ---- */
  internacionales: 'cargo,ship,port',
  vehiculos: 'car,transport',
  mascotas: 'dog,pet',
  contenedores: 'shipping,container',
  cliente: 'moving,family',
  especiales: 'piano,art',
  complementarios: 'packing,warehouse',
  casillero: 'parcel,delivery',

  /* ---- Destinos (ciudad real del país) ---- */
  espana: 'madrid',
  'estados-unidos': 'miami',
  canada: 'toronto',
  mexico: 'mexico,city',
  'reino-unido': 'london',
  alemania: 'berlin',
  italia: 'rome',
  australia: 'sydney',
  francia: 'paris',
  portugal: 'lisbon',
  suiza: 'zurich',
  'paises-bajos': 'amsterdam',
  colombia: 'bogota',
  argentina: 'buenosaires',
  chile: 'santiago,chile',
  peru: 'lima,peru',
  ecuador: 'quito',
  'nueva-zelanda': 'auckland',
  japon: 'tokyo',
  china: 'shanghai',
  dubai: 'dubai',
  singapur: 'singapore',

  /* ---- Home y secciones ---- */
  'home-hero': 'cargo,ship,port',
  'home-destinos': 'airplane,travel,world',
  'home-about-1': 'moving,team,packing',
  'home-about-2': 'logistics,warehouse',
  'servicios-hub': 'moving,logistics,cargo',
  'nosotros-hero': 'moving,team,warehouse',
  'nosotros-1': 'moving,team,packing',
  'nosotros-2': 'logistics,port',
};

/** Devuelve una foto temática (LoremFlickr) para la clave dada. `variant`
    cambia el `lock` para dar fotos distintas del MISMO tema (hero vs secciones). */
export function imgFor(key: string, variant = 0, w = 1600): string {
  const kw = KEYWORDS[key] ?? 'moving,relocation,boxes';
  const h = Math.round(w * 0.62);
  const lock = (Math.abs(variant) % 20) + 1;
  return `https://loremflickr.com/${w}/${h}/${kw}?lock=${lock}`;
}
