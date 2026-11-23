import { Quaternion, Vector3 } from 'three';

const forward = new Vector3();

export function yawOf(orientation: Quaternion): number {
  forward.set(0, 0, -1).applyQuaternion(orientation);
  return Math.atan2(-forward.x, -forward.z);
}
