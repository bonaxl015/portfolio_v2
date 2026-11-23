import { CAREER } from '../../../content';
import styles from './index.module.css';

export function Career() {
  return (
    <>
      <h2 className="heading">Career</h2>
      <ol className={styles.timeline}>
        {CAREER.map((entry) => (
          <li key={entry.period} className={styles.entry}>
            <p className={styles.period}>{entry.period}</p>
            <p className={styles.title}>{entry.title}</p>
          </li>
        ))}
      </ol>
    </>
  );
}
