import { MathUtils } from 'three';
import type { FlightView, Heading, Pose } from '../types';
import { transitWeight } from './transitWeight';

export function flightView(journey: number, poses: readonly Pose[], heading: Heading): FlightView {
  const last = poses.length - 1;
  const clamped = MathUtils.clamp(journey, 0, last);
  const index = Math.min(Math.floor(clamped), last - 1);
  const progress = clamped - index;
  const from = poses[index];
  const to = poses[index + 1];
  return {
    position: from.position.clone().lerp(to.position, progress),
    target: from.target.clone().lerp(to.target, progress),
    travel: to.position.clone().sub(from.position).normalize().multiplyScalar(heading),
    weight: transitWeight(progress),
  };
}
