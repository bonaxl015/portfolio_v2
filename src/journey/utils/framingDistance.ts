import { LANDSCAPE_REFERENCE_ASPECT, PORTRAIT_REFERENCE_ASPECT } from '../constants/journey';

export function framingDistance(distance: number, aspect: number): number {
  if (aspect < 1) return distance * (PORTRAIT_REFERENCE_ASPECT / aspect);
  return distance * Math.max(1, LANDSCAPE_REFERENCE_ASPECT / aspect);
}
