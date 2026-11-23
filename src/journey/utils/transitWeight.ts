import { smoothstep } from '../../math';

export function transitWeight(progress: number): number {
  return smoothstep(progress, 0, 0.4) * (1 - smoothstep(progress, 0.6, 1));
}
