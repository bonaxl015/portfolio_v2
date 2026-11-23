import { Matrix4, Quaternion, Vector3 } from 'three';

const TAIL_AXIS = new Vector3(1, 0, 0);
const basis = new Matrix4();

export function tailQuaternion(position: Vector3, velocity: Vector3): Quaternion {
  const away = position.clone().normalize();
  const trailing = velocity.clone().negate().addScaledVector(away, velocity.dot(away));
  if (trailing.lengthSq() < 1e-8) return new Quaternion().setFromUnitVectors(TAIL_AXIS, away);
  trailing.normalize();
  const side = new Vector3().crossVectors(away, trailing);
  return new Quaternion().setFromRotationMatrix(basis.makeBasis(away, trailing, side));
}
