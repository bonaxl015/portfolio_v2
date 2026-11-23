import type { Meteor, StreakBuffers } from '../types';
import { meteorBrightness } from './meteorBrightness';

export function writeMeteorStreak(
  buffers: StreakBuffers,
  index: number,
  meteor: Meteor | null,
  trail: number,
  glow: number,
): void {
  const offset = index * 6;
  if (!meteor) {
    buffers.colors.fill(0, offset, offset + 6);
    return;
  }
  const { start, velocity, age, life } = meteor;
  const head = start.clone().addScaledVector(velocity, age);
  const tail = head.clone().addScaledVector(velocity, -trail);
  const brightness = meteorBrightness(age / life) * glow;
  buffers.positions.set([head.x, head.y, head.z, tail.x, tail.y, tail.z], offset);
  buffers.colors.set([brightness, brightness * 0.95, brightness * 0.85, 0, 0, 0], offset);
}
