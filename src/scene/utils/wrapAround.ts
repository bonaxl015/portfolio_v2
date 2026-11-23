export function wrapAround(value: number, center: number, size: number): number {
  const offset = (((value - center + size / 2) % size) + size) % size;
  return center + offset - size / 2;
}
