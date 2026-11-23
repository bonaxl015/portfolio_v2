import { useMemo } from 'react';
import { AdditiveBlending, BackSide, Color } from 'three';
import { SUN_POSITION } from '../../../../constants/lighting';
import { ATMOSPHERE_FRAGMENT } from '../../../../constants/shaders/atmosphereFragment';
import { WORLD_VERTEX } from '../../../../constants/shaders/worldVertex';
import { atmosphereEdge } from '../../../../utils/atmosphereEdge';

type Props = {
  radius: number;
  color: string;
  scale: number;
  intensity: number;
  segments: number;
};

export function Atmosphere({ radius, color, scale, intensity, segments }: Props) {
  const uniforms = useMemo(
    () => ({
      color: { value: new Color(color) },
      sunPosition: { value: SUN_POSITION },
      edge: { value: atmosphereEdge(scale) },
      intensity: { value: intensity },
    }),
    [color, scale, intensity],
  );
  return (
    <mesh>
      <sphereGeometry args={[radius * scale, segments, segments / 2]} />
      <shaderMaterial
        vertexShader={WORLD_VERTEX}
        fragmentShader={ATMOSPHERE_FRAGMENT}
        uniforms={uniforms}
        side={BackSide}
        transparent
        depthWrite={false}
        blending={AdditiveBlending}
      />
    </mesh>
  );
}
