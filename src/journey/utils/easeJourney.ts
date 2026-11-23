import { dwell } from './dwell';

export function easeJourney(journey: number, hold: number): number {
  const index = Math.floor(journey);
  return index + dwell(journey - index, hold);
}
