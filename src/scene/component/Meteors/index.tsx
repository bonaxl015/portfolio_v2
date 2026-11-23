import { useFrame, useThree } from '@react-three/fiber';
import { memo, useMemo, useRef } from 'react';
import { AdditiveBlending, type BufferGeometry, Vector3 } from 'three';
import { METEORS } from '../../constants/meteors';
import type { MeteorField } from '../../types';
import { stepMeteors } from '../../utils/stepMeteors';
import { writeMeteorStreak } from '../../utils/writeMeteorStreak';

export const Meteors = memo(function Meteors() {
  const camera = useThree((state) => state.camera);
  const geometry = useRef<BufferGeometry>(null);
  const buffers = useMemo(
    () => ({
      positions: new Float32Array(METEORS.count * 6),
      colors: new Float32Array(METEORS.count * 6),
    }),
    [],
  );
  const field = useRef<MeteorField>({
    meteors: Array.from({ length: METEORS.count }, () => null),
    countdown: METEORS.firstDelay,
  });
  const forward = useMemo(() => new Vector3(), []);

  useFrame((_, delta) => {
    camera.getWorldDirection(forward);
    field.current = stepMeteors(field.current, delta, camera.position, forward, Math.random, METEORS);
    field.current.meteors.forEach((meteor, index) =>
      writeMeteorStreak(buffers, index, meteor, METEORS.trail, METEORS.glow),
    );
    if (!geometry.current) return;
    geometry.current.attributes.position.needsUpdate = true;
    geometry.current.attributes.color.needsUpdate = true;
  });

  return (
    <lineSegments frustumCulled={false}>
      <bufferGeometry ref={geometry}>
        <bufferAttribute attach="attributes-position" args={[buffers.positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[buffers.colors, 3]} />
      </bufferGeometry>
      <lineBasicMaterial
        vertexColors
        transparent
        depthWrite={false}
        blending={AdditiveBlending}
        toneMapped={false}
      />
    </lineSegments>
  );
});
