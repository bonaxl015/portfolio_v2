import { useTexture } from '@react-three/drei';
import { useLayoutEffect } from 'react';
import { SRGBColorSpace, type Texture } from 'three';

export function useColorTexture(url: string): Texture {
  const texture = useTexture(url);
  useLayoutEffect(() => {
    texture.colorSpace = SRGBColorSpace;
    texture.anisotropy = 8;
    texture.needsUpdate = true;
  }, [texture]);
  return texture;
}
