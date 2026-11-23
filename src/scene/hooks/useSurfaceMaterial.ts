import { useTexture } from '@react-three/drei';
import { useEffect, useLayoutEffect, useMemo } from 'react';
import { Color, SRGBColorSpace, ShaderMaterial } from 'three';
import { AMBIENT_LIGHT, SUN_INTENSITY, SUN_POSITION } from '../constants/lighting';
import { SURFACE_FRAGMENT } from '../constants/shaders/surfaceFragment';
import { WORLD_VERTEX } from '../constants/shaders/worldVertex';
import type { SurfaceOptions } from '../types';
import { surfaceDefines } from '../utils/surfaceDefines';

export function useSurfaceMaterial({
  map,
  nightMap,
  specularMap,
  wrap,
  rimColor = '#000000',
  rimStrength = 0,
  tint = '#ffffff',
}: SurfaceOptions): ShaderMaterial {
  const [day, night, specular] = useTexture([map, nightMap ?? map, specularMap ?? map]);

  useLayoutEffect(() => {
    day.colorSpace = SRGBColorSpace;
    night.colorSpace = SRGBColorSpace;
    day.anisotropy = 8;
    day.needsUpdate = true;
    night.needsUpdate = true;
  }, [day, night]);

  const material = useMemo(
    () =>
      new ShaderMaterial({
        vertexShader: WORLD_VERTEX,
        fragmentShader: SURFACE_FRAGMENT,
        defines: surfaceDefines(Boolean(nightMap), Boolean(specularMap)),
        uniforms: {
          dayMap: { value: day },
          nightMap: { value: night },
          specularMap: { value: specular },
          sunPosition: { value: SUN_POSITION },
          sunIntensity: { value: SUN_INTENSITY },
          ambient: { value: AMBIENT_LIGHT },
          wrap: { value: wrap },
          tint: { value: new Color(tint) },
          rimColor: { value: new Color(rimColor) },
          rimStrength: { value: rimStrength },
        },
      }),
    [day, night, specular, nightMap, specularMap, wrap, tint, rimColor, rimStrength],
  );

  useEffect(() => () => material.dispose(), [material]);

  return material;
}
