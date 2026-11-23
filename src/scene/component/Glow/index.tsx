import { Billboard } from '@react-three/drei';
import { useMemo } from 'react';
import { AdditiveBlending, Color } from 'three';
import { GLOW_FRAGMENT } from '../../constants/shaders/glowFragment';
import { WORLD_VERTEX } from '../../constants/shaders/worldVertex';

type Props = {
  size: number;
  color: string;
  intensity: number;
};

export function Glow({ size, color, intensity }: Props) {
  const uniforms = useMemo(
    () => ({ color: { value: new Color(color) }, intensity: { value: intensity } }),
    [color, intensity],
  );
  return (
    <Billboard>
      <mesh>
        <planeGeometry args={[size, size]} />
        <shaderMaterial
          vertexShader={WORLD_VERTEX}
          fragmentShader={GLOW_FRAGMENT}
          uniforms={uniforms}
          transparent
          depthWrite={false}
          blending={AdditiveBlending}
        />
      </mesh>
    </Billboard>
  );
}
