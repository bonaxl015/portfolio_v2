import { clamp } from './clamp';

export function smoothstep(value: number, edgeStart: number, edgeEnd: number): number {
  const progress = clamp((value - edgeStart) / (edgeEnd - edgeStart), 0, 1);
  return progress * progress * (3 - 2 * progress);
}
