import { SERVICES } from '../../../content';
import styles from './index.module.css';

export function Services() {
  return (
    <>
      <h2 className="heading">Services</h2>
      <ul className={styles.services}>
        {SERVICES.map((service) => (
          <li key={service.title}>
            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.description}>{service.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
