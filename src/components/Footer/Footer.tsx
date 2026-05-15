import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.name}>Islam Saginbekov</span>
        <span className={styles.copy}>© {new Date().getFullYear()} — Создано с React & TypeScript</span>
        <button
          className={styles.toTop}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Наверх"
        >
          ↑ Вверх
        </button>
      </div>
    </footer>
  );
};

export default Footer;
