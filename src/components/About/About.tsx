import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './About.module.scss';

const About: React.FC = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="about" className={`section ${styles.about}`} ref={ref}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <p className="section-label">Обо мне</p>
            <h2 className="section-title">
              Строю веб,<br />
              <em>по одному пикселю за раз</em>
            </h2>
          </div>
          <div className={styles.right}>
            <p className={styles.bio}>
              Я фронтенд-разработчик из Бишкека, Кыргызстан, специализируюсь на создании
              быстрых, доступных и красиво оформленных веб-приложений.
            </p>
            <p className={styles.bio}>
              Мой стек вращается вокруг <strong>React</strong> и <strong>TypeScript</strong> —
              я глубоко забочусь о чистой архитектуре, дизайне компонентов и каждой микро-взаимодействии
              , которое делает продукт живым.
            </p>
            <p className={styles.bio}>
              Когда я не пишу код, я изучаю дизайн-системы, вношу вклад в открытый исходный код
              и одержим типографикой.
            </p>
            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <span className={styles.metaKey}>Расположен в</span>
                <span className={styles.metaVal}>Бишкек, KG</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaKey}>Фокус</span>
                <span className={styles.metaVal}>React · TypeScript</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaKey}>Языки</span>
                <span className={styles.metaVal}>RU · KG · EN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
