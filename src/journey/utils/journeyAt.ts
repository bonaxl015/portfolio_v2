export function journeyAt(scroll: number, anchors: readonly number[]): number {
  const last = anchors.length - 1;
  if (last < 1 || scroll <= anchors[0]) return 0;
  for (let index = 0; index < last; index += 1) {
    const start = anchors[index];
    const end = anchors[index + 1];
    if (scroll < end) return index + (scroll - start) / (end - start);
  }
  return last;
}
