import { MathUtils } from 'three';
import { COMET_FADE_IN, COMET_FADE_OUT } from '../constants/comets';

export function cometFade(progress: number): number {
  return (
    MathUtils.smoothstep(progress, 0, COMET_FADE_IN) *
    (1 - MathUtils.smoothstep(progress, 1 - COMET_FADE_OUT, 1))
  );
}
