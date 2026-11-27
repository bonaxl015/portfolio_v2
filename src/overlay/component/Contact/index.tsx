import { CONTACT_CHANNELS } from '../../../content';
import { followUnlessSelecting } from './followUnlessSelecting';
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
            <a
              className={styles.channel}
              href={channel.href}
              target={channel.newTab ? '_blank' : undefined}
              rel={channel.newTab ? 'noopener noreferrer' : undefined}
              draggable={channel.copyable ? false : undefined}
              onClick={channel.copyable ? followUnlessSelecting : undefined}
            >
              <span className={styles.label}>{channel.label}</span>
              <span className={channel.copyable ? `${styles.value} ${styles.copyable}` : styles.value}>
                {channel.value}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
