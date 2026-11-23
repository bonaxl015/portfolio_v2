import { useEffect, useRef } from 'react';
import { Vector2 } from 'three';

export function usePointer() {
  const pointer = useRef(new Vector2());
  useEffect(() => {
    const track = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      pointer.current.set(
        (event.clientX / window.innerWidth) * 2 - 1,
        1 - (event.clientY / window.innerHeight) * 2,
      );
    };
    window.addEventListener('pointermove', track, { passive: true });
    return () => window.removeEventListener('pointermove', track);
  }, []);
  return pointer;
}
