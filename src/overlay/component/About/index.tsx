import { PROFILE } from '../../../content';
import { ABOUT_FACTS } from './constants/aboutFacts';
import styles from './index.module.css';

export function About() {
  return (
    <>
      <h2 className="heading">About me</h2>
      <p className="lede">{PROFILE.about}</p>
      <dl className={styles.facts}>
        {ABOUT_FACTS.map((fact) => (
          <div key={fact.label} className={styles.fact}>
            <dt className={styles.label}>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
    </>
  );
}
