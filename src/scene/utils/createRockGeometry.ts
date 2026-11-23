import { BufferGeometry, IcosahedronGeometry } from 'three';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { ROCK_WAVE_COUNT } from '../constants/rocks';
import type { RockWave } from '../types';
import { createRandom } from './createRandom';
import { randomDirection } from './randomDirection';
import { rockDisplacement } from './rockDisplacement';

export function createRockGeometry(seed: number, detail: number): BufferGeometry {
  const random = createRandom(seed);
  const waves = Array.from({ length: ROCK_WAVE_COUNT }, () => randomWave(random));
  const stretch = [0.75 + random() * 0.5, 0.6 + random() * 0.35, 0.8 + random() * 0.4];
  const source = new IcosahedronGeometry(1, detail);
  source.deleteAttribute('normal');
  const geometry = mergeVertices(source);
  source.dispose();
  const position = geometry.getAttribute('position');
  for (let index = 0; index < position.count; index += 1) {
    const x = position.getX(index);
    const y = position.getY(index);
    const z = position.getZ(index);
    const factor = rockDisplacement(x, y, z, waves);
    position.setXYZ(index, x * factor * stretch[0], y * factor * stretch[1], z * factor * stretch[2]);
  }
  geometry.computeVertexNormals();
  geometry.computeBoundingSphere();
  return geometry;
}

function randomWave(random: () => number): RockWave {
  return {
    direction: randomDirection(random),
    frequency: 1.5 + random() * 3,
    amplitude: 0.05 + random() * 0.09,
    phase: random() * Math.PI * 2,
  };
}
