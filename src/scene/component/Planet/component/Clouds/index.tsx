import { useTexture } from '@react-three/drei';
import { useMemo } from 'react';
import { CLOUD_LIFT, CLOUD_SPIN } from '../../../../constants/layers';
import { SUN_INTENSITY, SUN_POSITION } from '../../../../constants/lighting';
import { CLOUDS_FRAGMENT } from '../../../../constants/shaders/cloudsFragment';
import { WORLD_VERTEX } from '../../../../constants/shaders/worldVertex';
import { useSpin } from '../../../../hooks/useSpin';

type Props = {
  radius: number;
  map: string;
  speed: number;
  segments: number;
  animate: boolean;
};

export function Clouds({ radius, map, speed, segments, animate }: Props) {
  const texture = useTexture(map);
  const spin = useSpin(speed + CLOUD_SPIN, animate);
  const uniforms = useMemo(
    () => ({
      cloudMap: { value: texture },
      sunPosition: { value: SUN_POSITION },
      sunIntensity: { value: SUN_INTENSITY },
    }),
    [texture],
  );
  return (
    <group ref={spin}>
      <mesh>
        <sphereGeometry args={[radius * CLOUD_LIFT, segments, segments / 2]} />
        <shaderMaterial
          vertexShader={WORLD_VERTEX}
          fragmentShader={CLOUDS_FRAGMENT}
          uniforms={uniforms}
          transparent
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
