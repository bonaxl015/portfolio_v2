import { MathUtils, Vector3 } from 'three';

const UP = new Vector3(0, 1, 0);

export function satelliteOffset(planet: Vector3, distance: number, angle: number, height: number): Vector3 {
  return new Vector3(-planet.x, 0, -planet.z)
    .normalize()
    .applyAxisAngle(UP, MathUtils.degToRad(angle))
    .multiplyScalar(distance)
    .addScaledVector(UP, height);
}
