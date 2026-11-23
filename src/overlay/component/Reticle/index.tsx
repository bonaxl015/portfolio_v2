import styles from './index.module.css';

type Props = {
  visibility: number;
};

export function Reticle({ visibility }: Props) {
  return (
    <div className={styles.reticle} style={{ opacity: visibility }} aria-hidden="true">
      <span className={styles.corner} />
      <span className={styles.corner} />
      <span className={styles.corner} />
      <span className={styles.corner} />
    </div>
  );
}
