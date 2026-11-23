import { useMemo } from 'react';
import type { Vector3 } from 'three';
import { satelliteOffset } from '../../../../utils/satelliteOffset';
import { Surface } from '../../../Surface';

type Props = {
  planetPosition: Vector3;
  planetRadius: number;
  map: string;
  radius: number;
  distance: number;
  angle: number;
  height: number;
};

export function Moon({ planetPosition, planetRadius, map, radius, distance, angle, height }: Props) {
  const offset = useMemo(
    () => satelliteOffset(planetPosition, planetRadius * distance, angle, planetRadius * height),
    [planetPosition, planetRadius, distance, angle, height],
  );
  return (
    <group position={offset}>
      <Surface radius={radius} map={map} wrap={0} segments={64} />
    </group>
  );
}
