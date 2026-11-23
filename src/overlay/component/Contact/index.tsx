import { CONTACT_CHANNELS } from '../../../content';
import styles from './index.module.css';

export function Contact() {
  return (
    <>
      <h2 className="heading">Get in touch</h2>
      <p className="lede">
        Reach out about job offers, partnerships, or anything related to web development.
      </p>
      <ul className={styles.channels}>
        {CONTACT_CHANNELS.map((channel) => (
          <li key={channel.label}>
            <a className={styles.channel} href={channel.href}>
              <span className={styles.label}>{channel.label}</span>
              <span className={styles.value}>{channel.value}</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
