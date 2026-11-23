import { useThree } from '@react-three/fiber';
import { memo, useEffect, useMemo } from 'react';
import { ROCK_MAP, ROCK_SHAPE_SEEDS } from '../../constants/rocks';
import { useSurfaceMaterial } from '../../hooks/useSurfaceMaterial';
import type { BeltConfig } from '../../types';
import { beltExclusions } from '../../utils/beltExclusions';
import { composeInstances } from '../../utils/composeInstances';
import { createRockGeometry } from '../../utils/createRockGeometry';
import { scatterBelt } from '../../utils/scatterBelt';

type Props = {
  belt: BeltConfig;
  density: number;
  detail: number;
};

export const AsteroidBelt = memo(function AsteroidBelt({ belt, density, detail }: Props) {
  const aspect = useThree((state) => state.size.width / state.size.height);
  const material = useSurfaceMaterial({ map: ROCK_MAP, wrap: 0, tint: belt.tint });
  const shapes = useMemo(
    () => ROCK_SHAPE_SEEDS.map((seed) => createRockGeometry(seed, detail)),
    [detail],
  );
  const rocks = useMemo(
    () =>
      scatterBelt(
        { ...belt, count: Math.round(belt.count * density) },
        beltExclusions(aspect),
        shapes.length,
      ),
    [belt, density, aspect, shapes],
  );
  const batches = useMemo(
    () => shapes.map((_, shape) => composeInstances(rocks.filter((rock) => rock.shape === shape))),
    [shapes, rocks],
  );

  useEffect(() => () => shapes.forEach((shape) => shape.dispose()), [shapes]);

  return (
    <>
      {batches.map((batch, shape) => (
        <instancedMesh
          key={`${shape}-${aspect}-${density}-${detail}`}
          args={[shapes[shape], material, batch.count]}
        >
          <instancedBufferAttribute attach="instanceMatrix" args={[batch.matrices, 16]} />
          <instancedBufferAttribute attach="instanceColor" args={[batch.colors, 3]} />
        </instancedMesh>
      ))}
    </>
  );
});
