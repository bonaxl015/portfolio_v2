export function radialRingUvs(positions: ArrayLike<number>, inner: number, outer: number): Float32Array {
  const count = positions.length / 3;
  const uvs = new Float32Array(count * 2);
  for (let index = 0; index < count; index += 1) {
    const radius = Math.hypot(positions[index * 3], positions[index * 3 + 1]);
    uvs[index * 2] = (radius - inner) / (outer - inner);
    uvs[index * 2 + 1] = 0.5;
  }
  return uvs;
}
