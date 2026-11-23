import { createRandom } from './createRandom';

export function createDustSeeds(count: number, size: number, seed: number): Float32Array {
  const random = createRandom(seed);
  return Float32Array.from({ length: count * 3 }, () => (random() - 0.5) * size);
}
