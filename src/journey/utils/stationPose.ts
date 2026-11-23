import { MathUtils, Vector3 } from 'three';
import type { PlanetFraming } from '../../planets';
import { LANDSCAPE_OFFSET, PORTRAIT_OFFSET } from '../constants/journey';
import type { Pose } from '../types';
import { framingDistance } from './framingDistance';

const UP = new Vector3(0, 1, 0);

export function stationPose(
  center: Vector3,
  radius: number,
  framing: PlanetFraming,
  aspect: number,
  fov: number,
): Pose {
  const elevation = MathUtils.degToRad(framing.elevation);
  const direction = new Vector3(-center.x, 0, -center.z)
    .normalize()
    .applyAxisAngle(UP, MathUtils.degToRad(framing.azimuth))
    .multiplyScalar(Math.cos(elevation))
    .addScaledVector(UP, Math.sin(elevation));
  const distance = framingDistance(radius * framing.distance, aspect);
  return {
    position: center.clone().addScaledVector(direction, distance),
    target: center.clone().sub(screenShift(direction, distance, aspect, fov)),
  };
}

function screenShift(direction: Vector3, distance: number, aspect: number, fov: number): Vector3 {
  const halfHeight = Math.tan(MathUtils.degToRad(fov / 2)) * distance;
  const right = new Vector3().crossVectors(UP, direction).normalize();
  if (aspect < 1) {
    const up = new Vector3().crossVectors(direction, right).normalize();
    return up.multiplyScalar(halfHeight * PORTRAIT_OFFSET);
  }
  return right.multiplyScalar(halfHeight * aspect * LANDSCAPE_OFFSET);
}
