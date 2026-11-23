import { clamp } from '../../math';
import type { SectionBox } from '../types';

export function sectionAnchors(
  sections: readonly SectionBox[],
  viewportHeight: number,
  maxScroll: number,
): number[] {
  return sections.map(({ top, height }) =>
    clamp(top + (height - viewportHeight) / 2, 0, maxScroll),
  );
}
