import { memo, useMemo } from 'react';
import { Color } from 'three';
import { SUN } from '../../../planets';
import { CORONA_COLOR, CORONA_SCALE } from '../../constants/lighting';
import { SUN_FRAGMENT } from '../../constants/shaders/sunFragment';
import { WORLD_VERTEX } from '../../constants/shaders/worldVertex';
import { useColorTexture } from '../../hooks/useColorTexture';
import { Glow } from '../Glow';

type Props = {
  coronaIntensity: number;
};

export const Sun = memo(function Sun({ coronaIntensity }: Props) {
  const map = useColorTexture(SUN.map);
  const uniforms = useMemo(
    () => ({
      map: { value: map },
      core: { value: new Color(SUN.core) },
      intensity: { value: SUN.intensity },
    }),
    [map],
  );
  return (
    <group>
      <mesh>
        <sphereGeometry args={[SUN.radius, 64, 32]} />
        <shaderMaterial vertexShader={WORLD_VERTEX} fragmentShader={SUN_FRAGMENT} uniforms={uniforms} />
      </mesh>
      <Glow size={SUN.radius * CORONA_SCALE} color={CORONA_COLOR} intensity={coronaIntensity} />
    </group>
  );
});
