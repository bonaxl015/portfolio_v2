import type { CSSProperties } from 'react';
import { sampleAt } from '../../../journey';
import { PLANETS, formatDistance } from '../../../planets';
import { STATION_LABELS } from '../../constants/stationLabels';
import { LOG_DISTANCES, RAIL_STOPS } from './constants/railStops';
import styles from './index.module.css';

type Props = {
  journey: number;
};

export function OrbitRail({ journey }: Props) {
  const active = Math.round(journey);
  const accent = { '--accent': PLANETS[active].accent } as CSSProperties;
  const distance = Math.exp(sampleAt(journey, LOG_DISTANCES));
  return (
    <nav className={styles.rail} aria-label="Planets" style={accent}>
      <div className={styles.track}>
        <ol>
          {PLANETS.map((planet, index) => (
            <li key={planet.id} className={styles.stop} style={{ top: `${RAIL_STOPS[index] * 100}%` }}>
              <a
                className={styles.link}
                href={`#${planet.id}`}
                aria-current={index === active ? 'location' : undefined}
              >
                <span className={styles.label}>
                  <span className={styles.planet}>{planet.name}</span>
                  <span className={styles.section}>{STATION_LABELS[planet.id]}</span>
                </span>
                <span className={styles.dot} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ol>
        <span
          className={styles.marker}
          style={{ top: `${sampleAt(journey, RAIL_STOPS) * 100}%` }}
          aria-hidden="true"
        />
      </div>
      <p className={styles.readout} aria-hidden="true">
        {formatDistance(distance)} from the Sun
      </p>
    </nav>
  );
}
