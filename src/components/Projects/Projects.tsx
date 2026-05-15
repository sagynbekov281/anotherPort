import { projects } from '../../data';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Projects.module.scss';

const Projects: React.FC = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="projects" className={`section ${styles.projects}`} ref={ref}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <p className="section-label">Проекты</p>
            <h2 className="section-title">Избранные работы</h2>
          </div>
          <a
            href="https://github.com/islamsaginbekov"
            target="_blank"
            rel="noreferrer"
            className={styles.allLink}
          >
            Все на GitHub →
          </a>
        </div>

        <ul className={styles.list}>
          {projects.map((project, i) => (
            <li key={project.id} className={styles.card}>
              <div className={styles.cardNumber}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardTop}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <span className={styles.cardYear}>{project.year}</span>
                </div>
                <p className={styles.cardDesc}>{project.description}</p>
                <div className={styles.cardTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className={styles.cardLink}
                aria-label={`View ${project.title}`}
              >
                ↗
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
