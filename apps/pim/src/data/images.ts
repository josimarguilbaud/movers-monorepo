/* Imágenes CURADAS de logística/mudanza — VERIFICADAS visualmente una a una
   (cada URL fue descargada y revisada). Servidas por el CDN de Unsplash con
   WebP automático (auto=format) → rápido y cacheado.
   ⚠️ Placeholders profesionales — reemplazar por fotos reales de PIM.
   Las plantillas no cambian: siguen llamando imgFor(key, variant). */

/* Pool verificado (11 fotos, todas de logística/mudanza real). */
const POOL: Record<string, string> = {
  ship: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec',      // barco portacontenedores en puerto
  terminal: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3',  // terminal de contenedores (aérea)
  truck: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7',     // camión de carga
  highway: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c',   // camión en carretera
  warehouse: 'https://images.unsplash.com/photo-1553413077-190dd305871c',    // almacén / bodega
  parcels: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d',   // almacén de paquetería
  shelves: 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd',   // estantería de cajas (storage)
  boxes: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59',     // cajas de mudanza apiladas
  plane: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',     // avión (carga aérea)
  docs: 'https://images.unsplash.com/photo-1603796846097-bee99e4a601f',      // firma de documentos (aduana/seguro)
  home: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace',      // interior de hogar (residencial)
};

/* Orden global del pool para rotar sin repetir dentro de una misma página. */
const ALL = ['ship', 'terminal', 'truck', 'highway', 'warehouse', 'parcels', 'shelves', 'boxes', 'plane', 'docs', 'home'];

/* Hero temático por clave (la foto principal más acorde al servicio/sección).
   Las secciones rotan por el resto del pool → fotos distintas por página. */
const HERO: Record<string, string> = {
  /* Internacionales / carga */
  maritimas: 'ship', fcl: 'terminal', lcl: 'warehouse', aereas: 'plane', 'puerta-a-puerta': 'truck',
  /* Vehículos */
  'auto-contenedor': 'terminal', 'auto-roro': 'ship', motos: 'truck', clasicos: 'highway',
  /* Mascotas (sin foto de mascota verificada → contexto de mudanza/hogar) */
  'mascotas-internacional': 'plane', 'mascotas-perros': 'home', 'mascotas-gatos': 'home', 'mascotas-exoticos': 'boxes',
  /* Contenedores */
  'contenedor-20': 'terminal', 'contenedor-40': 'ship', 'contenedor-almacenamiento': 'warehouse', 'drop-off': 'truck',
  /* Locales / nacionales */
  locales: 'truck', nacionales: 'highway', express: 'boxes',
  /* Por tipo de cliente */
  'cliente-residenciales': 'home', 'cliente-corporativas': 'warehouse', 'cliente-expatriados': 'plane', 'cliente-estudiantes': 'boxes', 'cliente-jubilados': 'home',
  /* Especiales / alto valor */
  'especiales-arte': 'boxes', 'especiales-pianos': 'boxes', 'especiales-vinos': 'shelves', 'especiales-deportivo': 'boxes',
  /* Complementarios */
  'complementarios-embalaje': 'boxes', 'complementarios-seguros': 'docs', 'complementarios-almacenaje': 'warehouse', 'complementarios-aduanas': 'docs', 'complementarios-limpieza': 'home',
  /* Casillero y courier */
  'casillero-miami': 'parcels', 'courier-internacional': 'plane',
  /* Categorías (hub) */
  internacionales: 'ship', vehiculos: 'truck', mascotas: 'home', contenedores: 'terminal', cliente: 'boxes', especiales: 'boxes', complementarios: 'warehouse', casillero: 'parcels',
  /* Home y secciones */
  'home-hero': 'ship', 'home-destinos': 'plane', 'home-about-1': 'warehouse', 'home-about-2': 'terminal',
  'servicios-hub': 'ship', 'nosotros-hero': 'warehouse', 'nosotros-1': 'truck', 'nosotros-2': 'terminal',
};

function hashStr(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

/* Orden de fotos para una clave: hero temático + el resto del pool en rotación
   dependiente de la clave → hasta 11 fotos DISTINTAS por página, sin repetir. */
function orderFor(key: string): string[] {
  const hero = HERO[key] || 'plane'; // destinos y claves sueltas → carga aérea internacional
  const rest = ALL.filter((n) => n !== hero);
  const off = hashStr(key) % rest.length;
  return [hero, ...rest.slice(off), ...rest.slice(0, off)];
}

/** Foto curada para la clave dada. `variant` avanza por el orden de la clave,
    de modo que hero y cada sección muestran fotos distintas.
    Servida por Unsplash con WebP (auto=format) → rápido. */
export function imgFor(key: string, variant = 0, w = 1600): string {
  const order = orderFor(key);
  const name = order[Math.abs(variant) % order.length];
  const base = POOL[name] ?? POOL.ship;
  return `${base}?q=70&w=${w}&auto=format&fit=crop`;
}
