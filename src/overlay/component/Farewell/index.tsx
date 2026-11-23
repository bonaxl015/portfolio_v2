import { PROFILE } from '../../../content';
import { formatDistance, formatDuration, lightSeconds } from '../../../planets';
import styles from './index.module.css';

type Props = {
  distanceKm: number;
};

export function Farewell({ distanceKm }: Props) {
  return (
    <>
      <h2 className="heading">You made it to Pluto</h2>
      <p className="lede">
        {formatDistance(distanceKm)} from the Sun, where sunlight takes{' '}
        {formatDuration(lightSeconds(distanceKm))} to arrive. Thanks for flying out this far.
      </p>
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
