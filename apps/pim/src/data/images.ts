/* Imágenes CURADAS de logística/mudanza (pool fijo y seguro, servido por el
   CDN de Unsplash con WebP automático → rápido). NO usa fotos aleatorias.
   ⚠️ Placeholders profesionales — reemplazar por fotos reales de PIM.
   Las plantillas no cambian: siguen llamando imgFor(key, variant).

   Motivo del cambio: la versión anterior usaba LoremFlickr (foto aleatoria por
   keyword), que devolvía imágenes irrelevantes/inapropiadas y cargaba lento.
   Ahora cada clave apunta SIEMPRE a fotos de logística revisadas. */

/* Pool curado (todas relacionadas con mudanza/carga/logística). */
const POOL: Record<string, string> = {
  port: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166',
  containers: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7',
  boxes: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea',
  packing: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
  team: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
  plane: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
  warehouse: 'https://images.unsplash.com/photo-1553413077-190dd305871c',
  truck: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7',
};

/* Cada clave → subconjunto temático del pool. `variant` rota dentro del
   subconjunto para que hero y secciones no repitan la misma foto. */
const MAP: Record<string, string[]> = {
  /* Internacionales / carga */
  maritimas: ['port', 'containers', 'warehouse'],
  fcl: ['containers', 'port', 'warehouse'],
  lcl: ['warehouse', 'containers', 'boxes'],
  aereas: ['plane', 'port', 'warehouse'],
  'puerta-a-puerta': ['boxes', 'packing', 'team'],
  /* Vehículos */
  'auto-contenedor': ['containers', 'port'],
  'auto-roro': ['port', 'containers'],
  motos: ['containers', 'warehouse'],
  clasicos: ['containers', 'port'],
  /* Mascotas (sin foto de mascota verificada → contexto de mudanza cuidada) */
  'mascotas-internacional': ['packing', 'team'],
  'mascotas-perros': ['packing', 'team'],
  'mascotas-gatos': ['packing', 'boxes'],
  'mascotas-exoticos': ['packing', 'boxes'],
  /* Contenedores */
  'contenedor-20': ['containers', 'port'],
  'contenedor-40': ['containers', 'port'],
  'contenedor-almacenamiento': ['warehouse', 'containers'],
  'drop-off': ['containers', 'boxes'],
  /* Locales / nacionales */
  locales: ['boxes', 'team', 'packing'],
  nacionales: ['boxes', 'team'],
  express: ['boxes', 'packing'],
  /* Por tipo de cliente */
  'cliente-residenciales': ['packing', 'boxes', 'team'],
  'cliente-corporativas': ['team', 'warehouse'],
  'cliente-expatriados': ['plane', 'team'],
  'cliente-estudiantes': ['boxes', 'packing'],
  'cliente-jubilados': ['packing', 'boxes'],
  /* Especiales / alto valor (embalaje a medida) */
  'especiales-arte': ['packing', 'boxes'],
  'especiales-pianos': ['packing', 'boxes'],
  'especiales-vinos': ['packing', 'boxes'],
  'especiales-deportivo': ['packing', 'boxes'],
  /* Complementarios */
  'complementarios-embalaje': ['packing', 'boxes'],
  'complementarios-seguros': ['team', 'packing'],
  'complementarios-almacenaje': ['warehouse', 'containers'],
  'complementarios-aduanas': ['port', 'containers', 'team'],
  'complementarios-limpieza': ['packing', 'team'],
  /* Casillero y courier */
  'casillero-miami': ['boxes', 'warehouse'],
  'courier-internacional': ['plane', 'boxes'],
  /* Categorías (hub) */
  internacionales: ['port', 'containers', 'plane'],
  vehiculos: ['containers', 'port'],
  mascotas: ['packing', 'team'],
  contenedores: ['containers', 'port', 'warehouse'],
  cliente: ['team', 'packing', 'boxes'],
  especiales: ['packing', 'boxes'],
  complementarios: ['packing', 'warehouse', 'boxes'],
  casillero: ['boxes', 'plane'],
  /* Home y secciones */
  'home-hero': ['port', 'containers', 'warehouse'],
  'home-destinos': ['plane', 'port'],
  'home-about-1': ['team', 'packing'],
  'home-about-2': ['warehouse', 'containers'],
  'servicios-hub': ['port', 'containers', 'warehouse'],
  'nosotros-hero': ['team', 'warehouse'],
  'nosotros-1': ['team', 'packing'],
  'nosotros-2': ['port', 'warehouse'],
};

/* Destinos y cualquier clave no listada → logística internacional. */
const DEFAULT = ['port', 'plane', 'containers'];

/** Foto temática curada para la clave dada. `variant` rota dentro del
    subconjunto (hero vs secciones). Servida por Unsplash con WebP (auto=format). */
export function imgFor(key: string, variant = 0, w = 1600): string {
  const arr = MAP[key] ?? DEFAULT;
  const name = arr[Math.abs(variant) % arr.length];
  const base = POOL[name] ?? POOL.port;
  return `${base}?q=70&w=${w}&auto=format&fit=crop`;
}
