import { Matrix4, Quaternion, Vector3 } from 'three';

const UP = new Vector3(0, 1, 0);
const matrix = new Matrix4();

export function lookQuaternion(eye: Vector3, target: Vector3): Quaternion {
  return new Quaternion().setFromRotationMatrix(matrix.lookAt(eye, target, UP));
}
