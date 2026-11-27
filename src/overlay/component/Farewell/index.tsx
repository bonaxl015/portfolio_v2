import { PROFILE } from '../../../content';
import styles from './index.module.css';

export function Farewell() {
  return (
    <>
      <div className={styles.back}>
        <a className="action" href="#mercury">
          Fly back to Mercury
        </a>
      </div>
      <footer className={styles.footer}>
        <p>
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
        <p>
          Planet maps by{' '}
          <a href="https://www.solarsystemscope.com/textures/">Solar System Scope</a>, CC BY 4.0,
          based on NASA imagery. Pluto map by NASA, Johns Hopkins APL and SwRI.
        </p>
      </footer>
    </>
  );
}
