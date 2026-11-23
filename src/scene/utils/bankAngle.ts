import { MathUtils } from 'three';
import { BANK_GAIN, MAX_BANK } from '../constants/flight';

export function bankAngle(yawRate: number): number {
  return MathUtils.clamp(yawRate * BANK_GAIN, -MAX_BANK, MAX_BANK);
}
