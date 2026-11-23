import { COMET_SIDE_THRESHOLD } from '../constants/comets';

export function travelSide(tailAlignment: number, random: () => number): number {
  if (tailAlignment > COMET_SIDE_THRESHOLD) return -1;
  if (tailAlignment < -COMET_SIDE_THRESHOLD) return 1;
  return random() < 0.5 ? -1 : 1;
}
