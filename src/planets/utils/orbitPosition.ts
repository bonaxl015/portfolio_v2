import { MathUtils, Vector3 } from 'three';

export function orbitPosition(orbit: number, angle: number): Vector3 {
  const radians = MathUtils.degToRad(angle);
  return new Vector3(orbit * Math.sin(radians), 0, -orbit * Math.cos(radians));
}
