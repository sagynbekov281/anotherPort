import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <p className={styles.greeting}>
            <span className={styles.line} />
            Привет, я
          </p>
          <h1 className={styles.name}>
            Ислам<br />
            <em>Сагынбеков</em>
          </h1>
          <p className={styles.role}>Фронтенд-разработчик</p>
          <p className={styles.tagline}>
            Создаю чистые, производительные интерфейсы<br />
            с React & TypeScript.
          </p>
          <div className={styles.actions}>
            <button
              className={styles.btnPrimary}
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Посмотреть работы
            </button>
            <button
              className={styles.btnSecondary}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Связаться
            </button>
          </div>
        </div>

        <div className={styles.aside}>
          <div className={styles.statusBadge}>
            <span className={styles.statusDot} />
            Доступен для работы
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>3+</span>
              <span className={styles.statLabel}>Лет опыта</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>20+</span>
              <span className={styles.statLabel}>Проектов</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span>scroll</span>
        <div className={styles.scrollLine} />
      </div>

      <div className={styles.bgGrid} aria-hidden="true" />
    </section>
  );
};

export default Hero;
