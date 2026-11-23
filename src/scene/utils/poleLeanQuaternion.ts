import { MathUtils, Quaternion, Vector3 } from 'three';

const UP = new Vector3(0, 1, 0);

export function poleLeanQuaternion(position: Vector3, lean: number): Quaternion {
  const toSun = new Vector3(-position.x, 0, -position.z).normalize();
  const axis = new Vector3().crossVectors(UP, toSun).normalize();
  return new Quaternion().setFromAxisAngle(axis, MathUtils.degToRad(lean));
}
