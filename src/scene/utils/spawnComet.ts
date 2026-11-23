import { MathUtils, Vector3 } from 'three';
import type { CometFlight, CometSwarmSettings } from '../types';
import { travelSide } from './travelSide';

const UP = new Vector3(0, 1, 0);

export function spawnComet(
  random: () => number,
  origin: Vector3,
  forward: Vector3,
  settings: CometSwarmSettings,
): CometFlight | null {
  const right = new Vector3().crossVectors(forward, UP).normalize();
  const up = new Vector3().crossVectors(right, forward).normalize();
  const distance = MathUtils.lerp(settings.distance[0], settings.distance[1], random());
  const band = random() < 0.5 ? -1 : 1;
  const anchor = origin
    .clone()
    .addScaledVector(forward, distance)
    .addScaledVector(up, band * MathUtils.lerp(settings.lift[0], settings.lift[1], random()) * distance);
  if (anchor.length() < settings.sunClearance) anchor.setLength(settings.sunClearance);
  const away = anchor.clone().normalize();
  if (Math.abs(away.dot(forward)) > settings.maxTailAlignment) return null;

  const velocity = right
    .clone()
    .multiplyScalar(travelSide(right.dot(away), random))
    .addScaledVector(away, -MathUtils.lerp(settings.inbound[0], settings.inbound[1], random()))
    .addScaledVector(up, random() * 0.2 - 0.1)
    .normalize()
    .multiplyScalar(MathUtils.lerp(settings.speed[0], settings.speed[1], random()));
  const entrySide = -Math.sign(velocity.dot(right)) || 1;
  const position = anchor.addScaledVector(
    right,
    entrySide * MathUtils.lerp(settings.entry[0], settings.entry[1], random()) * distance,
  );
  return {
    position,
    velocity,
    scale: MathUtils.lerp(settings.scale[0], settings.scale[1], random()),
    age: 0,
    life: MathUtils.lerp(settings.life[0], settings.life[1], random()),
  };
}
