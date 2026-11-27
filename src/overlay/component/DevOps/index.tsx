import { DEVOPS_INTRO, DEVOPS_PRACTICES, DEVOPS_TOOLKIT } from '../../../content';
import styles from './index.module.css';

export function DevOps() {
  return (
    <>
      <h2 className="heading">DevOps</h2>
      <p className="lede">{DEVOPS_INTRO}</p>
      <ul className={styles.practices}>
        {DEVOPS_PRACTICES.map((practice) => (
          <li key={practice.title}>
            <h3 className={styles.title}>{practice.title}</h3>
            <p className={styles.description}>{practice.description}</p>
          </li>
        ))}
      </ul>
      <dl className={styles.groups}>
        {DEVOPS_TOOLKIT.map((group) => (
          <div key={group.label} className={styles.group}>
            <dt className={styles.label}>{group.label}</dt>
            <dd>
              <ul className={styles.tools}>
                {group.tools.map((tool) => (
                  <li key={tool} className={styles.tool}>
                    {tool}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </>
  );
}
