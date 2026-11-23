const FLARE = 0.15;

export function meteorBrightness(progress: number): number {
  if (progress <= 0 || progress >= 1) return 0;
  if (progress < FLARE) return progress / FLARE;
  return 1 - (progress - FLARE) / (1 - FLARE);
}
