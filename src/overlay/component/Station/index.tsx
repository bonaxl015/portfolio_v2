import type { CSSProperties, ReactNode } from 'react';
import type { PlanetId } from '../../../planets';
import { PlanetPlate } from './component/PlanetPlate';
import styles from './index.module.css';

type Props = {
  id: PlanetId;
  name: string;
  accent: string;
  distanceKm: number;
  dayHours: number;
  children: ReactNode;
};

export function Station({ id, name, accent, distanceKm, dayHours, children }: Props) {
  return (
    <section
      id={id}
      data-station
      className={styles.station}
      style={{ '--accent': accent } as CSSProperties}
    >
      <div className={styles.content}>{children}</div>
      <PlanetPlate name={name} distanceKm={distanceKm} dayHours={dayHours} />
    </section>
  );
}
