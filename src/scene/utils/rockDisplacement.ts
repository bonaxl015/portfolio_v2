import type { RockWave } from '../types';

export function rockDisplacement(x: number, y: number, z: number, waves: readonly RockWave[]): number {
  return waves.reduce((total, { direction, frequency, amplitude, phase }) => {
    const projection = x * direction[0] + y * direction[1] + z * direction[2];
    return total + amplitude * Math.sin(frequency * projection + phase);
  }, 1);
}
