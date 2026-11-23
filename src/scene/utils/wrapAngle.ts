const TAU = Math.PI * 2;

export function wrapAngle(angle: number): number {
  return ((((angle + Math.PI) % TAU) + TAU) % TAU) - Math.PI;
}
