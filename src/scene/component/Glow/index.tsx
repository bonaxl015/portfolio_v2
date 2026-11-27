import { useMemo } from 'react';
import { AdditiveBlending, Color } from 'three';
import { GLOW_FRAGMENT } from '../../constants/shaders/glowFragment';
import { WORLD_VERTEX } from '../../constants/shaders/worldVertex';
import { useFaceCamera } from '../../hooks/useFaceCamera';

type Props = {
  size: number;
  color: string;
  intensity: number;
};

export function Glow({ size, color, intensity }: Props) {
  const ref = useFaceCamera();
  const uniforms = useMemo(
    () => ({ color: { value: new Color(color) }, intensity: { value: intensity } }),
    [color, intensity],
  );
  return (
    <mesh ref={ref}>
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
  );
}
