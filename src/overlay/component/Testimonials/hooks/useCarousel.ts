import { useCallback, useState } from 'react';
import { wrapIndex } from '../utils/wrapIndex';

export function useCarousel(length: number) {
  const [index, setIndex] = useState(0);
  const next = useCallback(() => setIndex((current) => wrapIndex(current + 1, length)), [length]);
  const previous = useCallback(() => setIndex((current) => wrapIndex(current - 1, length)), [length]);
  return { index, next, previous };
}
