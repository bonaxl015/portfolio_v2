import { transitWeight } from '../journey';
import { Header } from './component/Header';
import { OrbitRail } from './component/OrbitRail';
import { Reticle } from './component/Reticle';
import { Stations } from './component/Stations';
import styles from './index.module.css';

type Props = {
  journey: number;
};

export function Overlay({ journey }: Props) {
  const transit = transitWeight(journey - Math.floor(journey));
  return (
    <>
      <div className={styles.scrim} style={{ opacity: 1 - transit }} aria-hidden="true" />
      <Header />
      <OrbitRail journey={journey} />
      <Reticle visibility={transit} />
      <Stations />
    </>
  );
}
