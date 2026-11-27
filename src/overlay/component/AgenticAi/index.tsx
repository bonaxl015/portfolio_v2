import { AGENTIC_INTRO, AGENTIC_PRACTICES, AGENT_BUILT_PROJECTS } from '../../../content';
import styles from './index.module.css';

export function AgenticAi() {
  return (
    <>
      <h2 className="heading">Agentic AI engineering</h2>
      <p className="lede">{AGENTIC_INTRO}</p>
      <ul className={styles.practices}>
        {AGENTIC_PRACTICES.map((practice) => (
          <li key={practice.title}>
            <h3 className={styles.title}>{practice.title}</h3>
            <p className={styles.description}>{practice.description}</p>
          </li>
        ))}
      </ul>
      <h3 className={styles.title}>Shipped with agents</h3>
      <ul className={styles.projects}>
        {AGENT_BUILT_PROJECTS.map((project) => (
          <li key={project.name} className={styles.project}>
            <span className={styles.name}>{project.name}</span>
            <span className={styles.description}>{project.summary}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
