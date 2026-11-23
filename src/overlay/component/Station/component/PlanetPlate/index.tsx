import styles from './index.module.css';
import { plateFacts } from './utils/plateFacts';

type Props = {
  name: string;
  distanceKm: number;
  dayHours: number;
};

export function PlanetPlate({ name, distanceKm, dayHours }: Props) {
  return (
    <aside className={styles.plate} aria-label={`About ${name}`}>
      <p className={styles.name}>{name}</p>
      <dl className={styles.facts}>
        {plateFacts(distanceKm, dayHours).map((fact) => (
          <div key={fact.label}>
            <dt className={styles.label}>{fact.label}</dt>
            <dd className={styles.value}>{fact.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
