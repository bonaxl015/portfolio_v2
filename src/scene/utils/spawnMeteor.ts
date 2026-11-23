import { MathUtils, Vector3 } from 'three';
import type { Meteor, MeteorSettings } from '../types';

const UP = new Vector3(0, 1, 0);

export function spawnMeteor(
  random: () => number,
  origin: Vector3,
  forward: Vector3,
  settings: MeteorSettings,
): Meteor {
  const right = new Vector3().crossVectors(forward, UP).normalize();
  const up = new Vector3().crossVectors(right, forward).normalize();
  const distance = MathUtils.lerp(settings.distance[0], settings.distance[1], random());
  const start = origin
    .clone()
    .addScaledVector(forward, distance)
    .addScaledVector(right, (random() * 2 - 1) * distance * 0.6)
    .addScaledVector(up, (0.1 + random() * 0.8) * distance * 0.4);
  const sideways = random() < 0.5 ? -1 : 1;
  const direction = right
    .clone()
    .multiplyScalar(sideways)
    .addScaledVector(up, -(0.3 + random() * 0.6))
    .addScaledVector(forward, random() * 0.4 - 0.2)
    .normalize();
  return {
    start,
    velocity: direction.multiplyScalar(MathUtils.lerp(settings.speed[0], settings.speed[1], random())),
    life: MathUtils.lerp(settings.life[0], settings.life[1], random()),
    age: 0,
  };
}
