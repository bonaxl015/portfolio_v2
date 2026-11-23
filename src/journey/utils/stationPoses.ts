import { PLANETS, orbitPosition } from '../../planets';
import { CAMERA_FOV } from '../constants/journey';
import type { Pose } from '../types';
import { stationPose } from './stationPose';

export function stationPoses(aspect: number): Pose[] {
  return PLANETS.map((planet) =>
    stationPose(
      orbitPosition(planet.orbit, planet.orbitAngle),
      planet.radius,
      planet.framing,
      aspect,
      CAMERA_FOV,
    ),
  );
}
