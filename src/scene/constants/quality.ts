import type { Quality } from '../../device';
import type { QualitySettings } from '../types';

export const DECLINE_SAMPLES = 6;

export const QUALITY_SETTINGS: Record<Quality, QualitySettings> = {
  high: {
    dpr: [1, 2],
    postprocessing: true,
    coronaIntensity: 1.3,
    multisampling: 4,
    bloomLevels: 8,
    beltDensity: 1,
    rockDetail: 2,
    starCount: 7000,
    sphereSegments: 96,
    cometCount: 3,
  },
  low: {
    dpr: [1, 1],
    postprocessing: false,
    coronaIntensity: 2,
    multisampling: 0,
    bloomLevels: 4,
    beltDensity: 0.35,
    rockDetail: 1,
    starCount: 3000,
    sphereSegments: 48,
    cometCount: 2,
  },
};
