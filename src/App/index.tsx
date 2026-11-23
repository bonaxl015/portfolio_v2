import { Suspense, lazy } from 'react';
import { useJourney, useReducedMotion } from '../journey';
import { Overlay } from '../overlay';

const Scene = lazy(() => import('../scene').then((module) => ({ default: module.Scene })));

export function App() {
  const reducedMotion = useReducedMotion();
  const journey = useJourney(reducedMotion);
  return (
    <>
      <Suspense fallback={null}>
        <Scene journey={journey} reducedMotion={reducedMotion} />
      </Suspense>
      <Overlay journey={journey} />
    </>
  );
}
