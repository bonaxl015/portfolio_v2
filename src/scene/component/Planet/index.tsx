import { memo, useMemo } from 'react';
import { orbitPosition, type Planet as PlanetConfig } from '../../../planets';
import { RIM_SHARE } from '../../constants/lighting';
import { useSpin } from '../../hooks/useSpin';
import { poleLeanQuaternion } from '../../utils/poleLeanQuaternion';
import { Surface } from '../Surface';
import { Atmosphere } from './component/Atmosphere';
import { Clouds } from './component/Clouds';
import { Moon } from './component/Moon';
import { Ring } from './component/Ring';

type Props = {
  planet: PlanetConfig;
  segments: number;
  animate: boolean;
};

export const Planet = memo(function Planet({ planet, segments, animate }: Props) {
  const position = useMemo(() => orbitPosition(planet.orbit, planet.orbitAngle), [planet]);
  const tilt = useMemo(() => poleLeanQuaternion(position, planet.poleLean), [position, planet]);
  const spin = useSpin(planet.spin, animate);
  return (
    <group position={position}>
      <group quaternion={tilt}>
        <group ref={spin}>
          <Surface
            radius={planet.radius}
            segments={segments}
            {...planet.surface}
            rimColor={planet.atmosphere?.color}
            rimStrength={(planet.atmosphere?.intensity ?? 0) * RIM_SHARE}
          />
        </group>
        {planet.clouds && (
          <Clouds
            radius={planet.radius}
            map={planet.clouds}
            speed={planet.spin}
            segments={segments}
            animate={animate}
          />
        )}
        {planet.ring && <Ring radius={planet.radius} center={position} {...planet.ring} />}
      </group>
      {planet.atmosphere && (
        <Atmosphere radius={planet.radius} segments={segments} {...planet.atmosphere} />
      )}
      {planet.moon && (
        <Moon planetPosition={position} planetRadius={planet.radius} {...planet.moon} />
      )}
    </group>
  );
});
