import { MathUtils, Vector3 } from 'three';
import type { DustSettings, StreakBuffers } from '../types';
import { wrapAround } from './wrapAround';

export function writeDustStreaks(
  buffers: StreakBuffers,
  seeds: Float32Array,
  center: Vector3,
  velocity: Vector3,
  settings: DustSettings,
): void {
  const { positions, colors } = buffers;
  const visibility = MathUtils.clamp(
    (velocity.length() - settings.minSpeed) / settings.fullSpeed,
    0,
    1,
  );
  const half = settings.size / 2;
  for (let index = 0; index < seeds.length / 3; index += 1) {
    const x = wrapAround(seeds[index * 3], center.x, settings.size);
    const y = wrapAround(seeds[index * 3 + 1], center.y, settings.size);
    const z = wrapAround(seeds[index * 3 + 2], center.z, settings.size);
    const nearness = Math.max(0, 1 - Math.hypot(x - center.x, y - center.y, z - center.z) / half);
    const brightness = visibility * settings.brightness * nearness;
    const offset = index * 6;
    positions.set(
      [
        x,
        y,
        z,
        x - velocity.x * settings.streak,
        y - velocity.y * settings.streak,
        z - velocity.z * settings.streak,
      ],
      offset,
    );
    colors.set([brightness, brightness, brightness, 0, 0, 0], offset);
  }
}
