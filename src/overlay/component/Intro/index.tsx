import { PROFILE } from '../../../content';
import styles from './index.module.css';

export function Intro() {
  return (
    <>
      <h1 className={styles.name}>{PROFILE.name}</h1>
      <p className={styles.role}>
        {PROFILE.role} at {PROFILE.company}
      </p>
      <p className="lede">{PROFILE.summary}</p>
      <div className={styles.actions}>
        <a className="action" href="#pluto">
          Get in touch
        </a>
        <a className="quiet" href="#venus">
          Start the flight
        </a>
      </div>
      <p className={styles.hint}>Scroll to fly from Mercury out to Pluto.</p>
    </>
  );
}
