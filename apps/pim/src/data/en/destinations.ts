/* =============================================================
   DESTINATIONS (EN) — aggregator of the parallel English data files.
   Content lives in destinations-*.ts (one file per region),
   translated from the Spanish source. Mirrors the ES exports.
   ============================================================= */
import type { Destination, Region } from '../destinations';
import { dstEuropa, regionsEn } from './destinations-europa';
import { dstAmerica } from './destinations-america';
import { dstAsiaOceania } from './destinations-asia-oceania';

export const destinationsEn: Destination[] = [
  ...dstEuropa,
  ...dstAmerica,
  ...dstAsiaOceania,
];

export { regionsEn };
export const regionByIdEn = (id: string) => regionsEn.find((r) => r.id === id);
export const destinationsByRegionEn = (regionId: string) =>
  destinationsEn.filter((d) => d.regionId === regionId);
export const destinationBySlugEn = (slug: string) => destinationsEn.find((d) => d.slug === slug);
