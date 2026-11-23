import { useFrame, useThree } from '@react-three/fiber';
import { memo, useMemo, useRef } from 'react';
import { AdditiveBlending, type BufferGeometry, Vector3 } from 'three';
import { DUST } from '../../constants/dust';
import { MIN_FRAME_TIME } from '../../constants/flight';
import { createDustSeeds } from '../../utils/createDustSeeds';
import { writeDustStreaks } from '../../utils/writeDustStreaks';

export const SpaceDust = memo(function SpaceDust() {
  const camera = useThree((state) => state.camera);
  const geometry = useRef<BufferGeometry>(null);
  const seeds = useMemo(() => createDustSeeds(DUST.count, DUST.size, DUST.seed), []);
  const buffers = useMemo(
    () => ({
      positions: new Float32Array(DUST.count * 6),
      colors: new Float32Array(DUST.count * 6),
    }),
    [],
  );
  const previous = useRef<Vector3 | null>(null);
  const velocity = useMemo(() => new Vector3(), []);

  useFrame((_, delta) => {
    const last = previous.current ?? camera.position.clone();
    velocity.subVectors(camera.position, last).divideScalar(Math.max(delta, MIN_FRAME_TIME));
    previous.current = camera.position.clone();
    writeDustStreaks(buffers, seeds, camera.position, velocity, DUST);
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
