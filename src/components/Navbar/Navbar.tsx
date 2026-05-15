import { useState, useEffect } from 'react';
import { navLinks } from '../../data';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#hero" className={styles.logo} onClick={() => handleClick('#hero')}>
          <span>IS</span>
          <span className={styles.logoDot}>.</span>
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              className={styles.navLink}
              onClick={() => handleClick(link.href)}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <span className={styles.navIndex}>0{i + 1}</span>
              {link.label}
            </button>
          ))}
        </nav>

        <button
          className={`${styles.burger} ${menuOpen ? styles.active : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
