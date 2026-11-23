import { BufferAttribute, BufferGeometry } from 'three';

export function createRibbonGeometry(segments: number): BufferGeometry {
  const ribbon = new Float32Array((segments + 1) * 4);
  const indices: number[] = [];
  for (let step = 0; step <= segments; step += 1) {
    const along = step / segments;
    ribbon.set([along, -1, along, 1], step * 4);
    if (step < segments) {
      const base = step * 2;
      indices.push(base, base + 1, base + 2, base + 1, base + 3, base + 2);
    }
  }
  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new BufferAttribute(new Float32Array((segments + 1) * 6), 3));
  geometry.setAttribute('ribbon', new BufferAttribute(ribbon, 2));
  geometry.setIndex(indices);
  return geometry;
}
