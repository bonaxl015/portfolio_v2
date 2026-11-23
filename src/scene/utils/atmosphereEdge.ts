export function atmosphereEdge(scale: number): number {
  return Math.sqrt(1 - 1 / (scale * scale));
}
