import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import type { Mesh } from 'three';

export function useFaceCamera() {
  const ref = useRef<Mesh>(null);
  useFrame(({ camera }) => {
    ref.current?.lookAt(camera.position);
  });
  return ref;
}
