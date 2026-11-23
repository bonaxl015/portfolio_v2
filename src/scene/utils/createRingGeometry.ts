import { BufferAttribute, RingGeometry } from 'three';
import { radialRingUvs } from './radialRingUvs';

export function createRingGeometry(inner: number, outer: number, segments: number): RingGeometry {
  const geometry = new RingGeometry(inner, outer, segments, 1);
  const uvs = radialRingUvs(geometry.getAttribute('position').array, inner, outer);
  geometry.setAttribute('uv', new BufferAttribute(uvs, 2));
  return geometry;
}
