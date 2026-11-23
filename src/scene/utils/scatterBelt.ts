import { MathUtils, Vector3 } from 'three';
import type { BeltConfig, Exclusion, Rock } from '../types';
import { createRandom } from './createRandom';
import { distanceToSegment } from './distanceToSegment';

const TAU = Math.PI * 2;

export function scatterBelt(
  belt: BeltConfig,
  exclusions: readonly Exclusion[],
  shapeCount: number,
): Rock[] {
  const random = createRandom(belt.seed);
  const point = new Vector3();
  const rocks: Rock[] = [];
  for (let index = 0; index < belt.count; index += 1) {
    const rock = randomRock(belt, shapeCount, random);
    point.set(...rock.position);
    if (isClear(point, exclusions, rock.scale)) rocks.push(rock);
  }
  return rocks;
}

function randomRock(belt: BeltConfig, shapeCount: number, random: () => number): Rock {
  const angle = MathUtils.degToRad(MathUtils.lerp(belt.arc[0], belt.arc[1], random()));
  const radius = MathUtils.lerp(belt.inner, belt.outer, (random() + random()) / 2);
  const height = (random() + random() + random() - 1.5) * belt.thickness;
  const size = belt.size[0] * Math.pow(belt.size[1] / belt.size[0], Math.pow(random(), 3));
  return {
    position: [radius * Math.sin(angle), height, -radius * Math.cos(angle)],
    rotation: [random() * TAU, random() * TAU, random() * TAU],
    scale: size,
    shade: MathUtils.lerp(belt.shade[0], belt.shade[1], random()),
    shape: Math.floor(random() * shapeCount),
  };
}

function isClear(point: Vector3, exclusions: readonly Exclusion[], margin: number): boolean {
  return exclusions.every(
    ({ start, end, radius }) => distanceToSegment(point, start, end) > radius + margin,
  );
}
