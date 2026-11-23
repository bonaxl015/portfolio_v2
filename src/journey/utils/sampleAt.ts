import { clamp, lerp } from '../../math';

export function sampleAt(journey: number, values: readonly number[]): number {
  const last = values.length - 1;
  const clamped = clamp(journey, 0, last);
  const index = Math.min(Math.floor(clamped), Math.max(last - 1, 0));
  const next = Math.min(index + 1, last);
  return lerp(values[index], values[next], clamped - index);
}
