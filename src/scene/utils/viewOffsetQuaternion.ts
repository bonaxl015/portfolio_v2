import { Euler, Quaternion } from 'three';

const euler = new Euler(0, 0, 0, 'YXZ');

export function viewOffsetQuaternion(yaw: number, pitch: number, roll: number): Quaternion {
  return new Quaternion().setFromEuler(euler.set(pitch, yaw, roll, 'YXZ'));
}
