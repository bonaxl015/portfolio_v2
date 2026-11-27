import type { CSSProperties, ReactNode } from 'react';
import type { PlanetId } from '../../../planets';
import styles from './index.module.css';

type Props = {
  id: PlanetId;
  accent: string;
  children: ReactNode;
};

export function Station({ id, accent, children }: Props) {
  return (
    <section
      id={id}
      data-station
      className={styles.station}
      style={{ '--accent': accent } as CSSProperties}
    >
      <div className={styles.content}>{children}</div>
    </section>
  );
}
