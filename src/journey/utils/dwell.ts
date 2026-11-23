import { smoothstep } from '../../math';

export function dwell(progress: number, hold: number): number {
  if (progress < hold) return 0;
  if (progress >= 1 - hold) return 1;
  return smoothstep(progress, hold, 1 - hold);
}
