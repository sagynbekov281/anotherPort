import { experiences } from '../../data';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Experience.module.scss';

const Experience: React.FC = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="experience" className={`section ${styles.experience}`} ref={ref}>
      <div className="container">
        <p className="section-label">Опыт</p>
        <h2 className={`section-title ${styles.title}`}>Хронология</h2>

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div key={exp.id} className={styles.item}>
              <div className={styles.itemLeft}>
                <span className={styles.period}>{exp.period}</span>
              </div>
              <div className={styles.connector}>
                <div className={styles.dot} />
                {i < experiences.length - 1 && <div className={styles.line} />}
              </div>
              <div className={styles.itemRight}>
                <h3 className={styles.role}>{exp.role}</h3>
                <p className={styles.company}>{exp.company}</p>
                <p className={styles.desc}>{exp.description}</p>
                <div className={styles.stack}>
                  {exp.stack.map((s) => (
                    <span key={s} className={styles.stackItem}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
