import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import type { Group } from 'three';

export function useSpin(speed: number, enabled: boolean) {
  const ref = useRef<Group>(null);
  useFrame((_, delta) => {
    if (enabled && ref.current) ref.current.rotation.y += speed * delta;
  });
  return ref;
}
