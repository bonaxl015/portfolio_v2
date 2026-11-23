import { MathUtils, Vector3 } from 'three';
import type { Meteor, MeteorField, MeteorSettings } from '../types';
import { spawnMeteor } from './spawnMeteor';

export function stepMeteors(
  field: MeteorField,
  delta: number,
  origin: Vector3,
  forward: Vector3,
  random: () => number,
  settings: MeteorSettings,
): MeteorField {
  const meteors = field.meteors.map((meteor) => ageMeteor(meteor, delta));
  const countdown = field.countdown - delta;
  if (countdown > 0) return { meteors, countdown };
  const next = MathUtils.lerp(settings.interval[0], settings.interval[1], random());
  const slot = meteors.indexOf(null);
  if (slot < 0) return { meteors, countdown: next };
  meteors[slot] = spawnMeteor(random, origin, forward, settings);
  return { meteors, countdown: next };
}

function ageMeteor(meteor: Meteor | null, delta: number): Meteor | null {
  if (!meteor) return null;
  const age = meteor.age + delta;
  if (age >= meteor.life) return null;
  return { ...meteor, age };
}
