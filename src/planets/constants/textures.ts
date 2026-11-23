import { DEVICE_QUALITY, type Quality } from '../../device';

const TEXTURE_SETS: Record<Quality, string> = {
  high: '2k',
  low: '1k',
};

export const TEXTURE_ROOT = `${import.meta.env.BASE_URL}textures/${TEXTURE_SETS[DEVICE_QUALITY]}/`;
