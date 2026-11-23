import type { CSSProperties } from 'react';
import type { Skill } from '../../../content';
import styles from './index.module.css';

type Props = {
  title: string;
  intro: string;
  skills: readonly Skill[];
};

export function Skills({ title, intro, skills }: Props) {
  return (
    <>
      <h2 className="heading">{title}</h2>
      <p className="lede">{intro}</p>
      <ul className={styles.skills}>
        {skills.map((skill) => (
          <li key={skill.name} className={styles.skill}>
            <span className={styles.name}>{skill.name}</span>
            <span className={styles.level}>{skill.level}%</span>
            <span
              className={styles.gauge}
              style={{ '--level': skill.level / 100 } as CSSProperties}
              aria-hidden="true"
            />
          </li>
        ))}
      </ul>
    </>
  );
}
