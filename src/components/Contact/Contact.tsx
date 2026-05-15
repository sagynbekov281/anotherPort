import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Contact.module.scss';

const Contact: React.FC = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="contact" className={`section ${styles.contact}`} ref={ref}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <p className="section-label">Контакты</p>
            <h2 className={`section-title ${styles.title}`}>
              Давайте работать<br />
              <em>вместе</em>
            </h2>
            <p className={styles.sub}>
              Доступен для фриланс-проектов, постоянных позиций
              и интересных сотрудничеств.
            </p>
          </div>

          <div className={styles.right}>
            <a
              href="mailto:islam.saginbekov@gmail.com"
              className={styles.emailLink}
            >
              <span className={styles.emailLabel}>Электронная почта</span>
              islam.saginbekov@gmail.com
            </a>

            <div className={styles.links}>
              <a
                href="https://github.com/islamsaginbekov"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <span className={styles.linkIcon}>↗</span>
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/islamsaginbekov"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <span className={styles.linkIcon}>↗</span>
                LinkedIn
              </a>
              <a
                href="https://t.me/islamsaginbekov"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <span className={styles.linkIcon}>↗</span>
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
