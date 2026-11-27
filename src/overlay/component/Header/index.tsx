import { PROFILE } from '../../../content';
import styles from './index.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.brand} href="#mercury">
        {PROFILE.name}
      </a>
      <a className={styles.contact} href="#pluto">
        Contact
      </a>
    </header>
  );
}
