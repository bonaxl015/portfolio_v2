import { Stars } from '@react-three/drei';
import { memo, useMemo } from 'react';
import { BackSide, Color } from 'three';
import {
  MILKY_WAY_MAP,
  SKY_BRIGHTNESS,
  SKY_RADIUS,
  STAR_DEPTH,
  STAR_FACTOR,
  STAR_RADIUS,
} from '../../constants/sky';
import { useColorTexture } from '../../hooks/useColorTexture';

type Props = {
  starCount: number;
};

export const Starfield = memo(function Starfield({ starCount }: Props) {
  const map = useColorTexture(MILKY_WAY_MAP);
  const dim = useMemo(() => new Color(SKY_BRIGHTNESS, SKY_BRIGHTNESS, SKY_BRIGHTNESS * 1.08), []);
  return (
    <>
      <mesh>
        <sphereGeometry args={[SKY_RADIUS, 64, 32]} />
        <meshBasicMaterial map={map} color={dim} side={BackSide} depthWrite={false} toneMapped={false} />
      </mesh>
      <Stars
        radius={STAR_RADIUS}
        depth={STAR_DEPTH}
        count={starCount}
        factor={STAR_FACTOR}
        saturation={0}
        speed={0}
        fade
      />
    </>
  );
});
