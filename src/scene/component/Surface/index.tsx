import { SURFACE_SEGMENTS } from '../../constants/layers';
import { useSurfaceMaterial } from '../../hooks/useSurfaceMaterial';
import type { SurfaceOptions } from '../../types';

type Props = SurfaceOptions & {
  radius: number;
  segments?: number;
};

export function Surface({ radius, segments = SURFACE_SEGMENTS, ...options }: Props) {
  const material = useSurfaceMaterial(options);
  return (
    <mesh material={material}>
      <sphereGeometry args={[radius, segments, segments / 2]} />
    </mesh>
  );
}
