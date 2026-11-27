import type { ToolGroup } from '../../../content';
import styles from './index.module.css';

type Props = {
  title: string;
  intro: string;
  groups: readonly ToolGroup[];
};

export function Skills({ title, intro, groups }: Props) {
  return (
    <>
      <h2 className="heading">{title}</h2>
      <p className="lede">{intro}</p>
      <dl className={styles.groups}>
        {groups.map((group) => (
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
