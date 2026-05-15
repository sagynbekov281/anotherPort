import { skills } from '../../data';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Skills.module.scss';

const Skills: React.FC = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="skills" className={`section ${styles.skills}`} ref={ref}>
      <div className="container">
        <p className="section-label">Навыки</p>
        <h2 className={`section-title ${styles.title}`}>
          Технологии, с которыми я работаю
        </h2>
        <div className={styles.grid}>
          {skills.map((group) => (
            <div key={group.category} className={styles.group}>
              <h3 className={styles.groupLabel}>{group.category}</h3>
              <ul className={styles.list}>
                {group.items.map((item) => (
                  <li key={item} className={styles.item}>
                    <span className={styles.bullet}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.tsHighlight}>
          <div className={styles.tsIcon}>TS</div>
          <div>
            <p className={styles.tsTitle}>Сначала TypeScript</p>
            <p className={styles.tsDesc}>
              Я пишу все проекты на строгом TypeScript — типизированные пропсы, пользовательские generics,
              discriminated unions. Чистый код — это типизированный код.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
