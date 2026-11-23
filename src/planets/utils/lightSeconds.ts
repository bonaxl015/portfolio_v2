import { LIGHT_SPEED_KM_PER_S } from '../constants/units';

export function lightSeconds(distanceKm: number): number {
  return distanceKm / LIGHT_SPEED_KM_PER_S;
}
