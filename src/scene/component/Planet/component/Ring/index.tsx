import { useMemo } from 'react';
import { DoubleSide, type Vector3 } from 'three';
import { RING_SEGMENTS } from '../../../../constants/layers';
import { SUN_INTENSITY, SUN_POSITION } from '../../../../constants/lighting';
import { RING_FRAGMENT } from '../../../../constants/shaders/ringFragment';
import { WORLD_VERTEX } from '../../../../constants/shaders/worldVertex';
import { useColorTexture } from '../../../../hooks/useColorTexture';
import { createRingGeometry } from '../../../../utils/createRingGeometry';

type Props = {
  radius: number;
  center: Vector3;
  map: string;
  inner: number;
  outer: number;
};

export function Ring({ radius, center, map, inner, outer }: Props) {
  const texture = useColorTexture(map);
  const geometry = useMemo(
    () => createRingGeometry(radius * inner, radius * outer, RING_SEGMENTS),
    [radius, inner, outer],
  );
  const uniforms = useMemo(
    () => ({
      ringMap: { value: texture },
      sunPosition: { value: SUN_POSITION },
      center: { value: center },
      radius: { value: radius },
      sunIntensity: { value: SUN_INTENSITY },
    }),
    [texture, center, radius],
  );
  return (
    <mesh geometry={geometry} rotation-x={-Math.PI / 2}>
      <shaderMaterial
        vertexShader={WORLD_VERTEX}
        fragmentShader={RING_FRAGMENT}
        uniforms={uniforms}
        side={DoubleSide}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}
