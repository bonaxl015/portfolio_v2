import type { CometLook, CometSwarmSettings } from '../types';

export const COMET_FADE_IN = 0.12;
export const COMET_FADE_OUT = 0.22;
export const COMET_NEAR_FADE: readonly [number, number] = [3, 12];
export const COMET_SIDE_THRESHOLD = 0.15;
export const COMET_RIBBON_SEGMENTS = 64;

export const COMET_SWARM: CometSwarmSettings = {
  count: 3,
  firstDelay: 1,
  stagger: 4,
  retry: 1,
  interval: [3, 8],
  distance: [35, 75],
  entry: [0.45, 0.75],
  lift: [0.2, 0.34],
  inbound: [0.4, 0.9],
  speed: [3.5, 6],
  life: [16, 24],
  scale: [0.8, 1.2],
  sunClearance: 18,
  maxTailAlignment: 0.7,
};

export const COMET_SLOTS = Array.from({ length: COMET_SWARM.count }, (_, slot) => slot);

export const COMET_LOOK: CometLook = {
  glows: [
    { size: 3, color: '#cfe2ff', intensity: 1.4 },
    { size: 0.8, color: '#ffffff', intensity: 4 },
  ],
  tails: [
    {
      id: 'dust',
      length: 14,
      width: 3.6,
      curvature: 0.35,
      flow: 0.08,
      streaks: 3,
      falloff: 2,
      color: '#ffe6c2',
      brightness: 0.6,
    },
    {
      id: 'ion',
      length: 22,
      width: 1,
      curvature: 0,
      flow: 0.5,
      streaks: 9,
      falloff: 1.2,
      color: '#6fa8ff',
      brightness: 0.45,
    },
  ],
};
