import { HEADING_EPSILON } from '../constants/journey';
import type { Heading } from '../types';

export function travelHeading(previous: number, next: number, current: Heading): Heading {
  const change = next - previous;
  if (Math.abs(change) < HEADING_EPSILON) return current;
  if (change > 0) return 1;
  return -1;
}
