import type { BeltConfig } from '../types';

export const ASTEROID_BELT: BeltConfig = {
  seed: 4021,
  count: 3000,
  inner: 105,
  outer: 135,
  thickness: 6,
  arc: [-30, 30],
  size: [0.03, 0.5],
  shade: [0.3, 0.75],
  tint: '#a89c8e',
};

export const KUIPER_BELT: BeltConfig = {
  seed: 9137,
  count: 1400,
  inner: 540,
  outer: 680,
  thickness: 16,
  arc: [-24, 24],
  size: [0.03, 0.4],
  shade: [0.35, 0.8],
  tint: '#a3adbd',
};

export const BELTS: readonly BeltConfig[] = [ASTEROID_BELT, KUIPER_BELT];

export const PATH_CLEARANCE = 2.2;
export const PLANET_CLEARANCE = 3;
export const SIGHTLINE_CLEARANCE = 1.6;
