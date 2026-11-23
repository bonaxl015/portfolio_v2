import { useEffect, useState } from 'react';
import { REDUCED_MOTION_HOLD, STATION_HOLD, STATION_SELECTOR } from '../constants/journey';
import { easeJourney } from '../utils/easeJourney';
import { journeyAt } from '../utils/journeyAt';
import { sectionAnchors } from '../utils/sectionAnchors';

export function useJourney(reducedMotion: boolean): number {
  const [journey, setJourney] = useState(0);

  useEffect(() => {
    const hold = reducedMotion ? REDUCED_MOTION_HOLD : STATION_HOLD;
    let anchors: number[] = [];
    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() =>
        setJourney(easeJourney(journeyAt(window.scrollY, anchors), hold)),
      );
    };

    const measure = () => {
      const sections = Array.from(document.querySelectorAll<HTMLElement>(STATION_SELECTOR));
      const boxes = sections.map((section) => ({
        top: section.getBoundingClientRect().top + window.scrollY,
        height: section.offsetHeight,
      }));
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      anchors = sectionAnchors(boxes, window.innerHeight, maxScroll);
      update();
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(document.body);
    window.addEventListener('scroll', update, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('scroll', update);
    };
  }, [reducedMotion]);

  return journey;
}
