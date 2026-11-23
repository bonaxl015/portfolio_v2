import type { Vector3 } from 'three';

export function trailingShare(position: Vector3, velocity: Vector3): number {
  const speed = velocity.length();
  if (speed === 0) return 0;
  const away = position.clone().normalize();
  return velocity.clone().addScaledVector(away, -velocity.dot(away)).length() / speed;
}
