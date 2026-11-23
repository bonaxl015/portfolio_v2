import { MathUtils, Vector3 } from 'three';
import type { CometFlight, CometSlot, CometSwarmSettings } from '../types';
import { spawnComet } from './spawnComet';

export function stepComet(
  slot: CometSlot,
  delta: number,
  origin: Vector3,
  forward: Vector3,
  random: () => number,
  settings: CometSwarmSettings,
): CometSlot {
  if (slot.flight) return advanceComet(slot.flight, delta, random, settings);
  const countdown = slot.countdown - delta;
  if (countdown > 0) return { countdown, flight: null };
  const flight = spawnComet(random, origin, forward, settings);
  if (!flight) return { countdown: settings.retry, flight: null };
  return { countdown: 0, flight };
}

function advanceComet(
  flight: CometFlight,
  delta: number,
  random: () => number,
  settings: CometSwarmSettings,
): CometSlot {
  const age = flight.age + delta;
  if (age >= flight.life) {
    return {
      countdown: MathUtils.lerp(settings.interval[0], settings.interval[1], random()),
      flight: null,
    };
  }
  return {
    countdown: 0,
    flight: { ...flight, age, position: flight.position.clone().addScaledVector(flight.velocity, delta) },
  };
}
