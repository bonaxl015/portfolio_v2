import type { Star } from '../types';
import { TEXTURE_ROOT } from './textures';

export const SUN: Star = {
  radius: 6,
  map: `${TEXTURE_ROOT}sun.webp`,
  core: '#ffcf7a',
  intensity: 2.4,
};
