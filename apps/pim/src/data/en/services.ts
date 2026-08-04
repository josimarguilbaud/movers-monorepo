/* =============================================================
   SERVICES (EN) — aggregator of the parallel English data files.
   Content lives in services-*.ts (one file per category group),
   translated from the Spanish source. Mirrors the ES exports so
   the /en/ routes work the same way as /es/.
   ============================================================= */
import type { Service, ServiceCategory } from '../services';
import { svcInternacionales, categoriesEn } from './services-internacionales';
import { svcVehiculosMascotas } from './services-vehiculos-mascotas';
import { svcContenedoresLocales } from './services-contenedores-locales';
import { svcClienteCasillero } from './services-cliente-casillero';
import { svcEspecialesComplementarios } from './services-especiales-complementarios';

export const servicesEn: Service[] = [
  ...svcInternacionales,
  ...svcVehiculosMascotas,
  ...svcContenedoresLocales,
  ...svcClienteCasillero,
  ...svcEspecialesComplementarios,
];

export { categoriesEn };
export const categoryByIdEn = (id: string) => categoriesEn.find((c) => c.id === id);
export const servicesByCategoryEn = (categoryId: string) =>
  servicesEn.filter((s) => s.categoryId === categoryId);
export const serviceBySlugEn = (slug: string) => servicesEn.find((s) => s.slug === slug);
