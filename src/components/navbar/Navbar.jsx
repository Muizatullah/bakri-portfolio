

import { useState } from 'react';
import styles from "./navbar.module.css";
import ThemeToggle from "../themeToogle/ThemeToogle"; 


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.wrap}>
        {/* LOGO */}
        <a href="#" className={styles.logo}>
          <span className={styles.bracket}>&lt;</span>
          Bakri Muizat
          <span className={styles.bracket}>/&gt;</span>
        </a>

        {/* LINKS */}
        <ul className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}>
          <li><a href="#work" onClick={() => setMenuOpen(false)}>Work</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          
          {/* MOBILE ACTIONS */}
          <li className={styles.mobileCta}>
            <ThemeToggle />
            <a
              href="https://wa.me/2349131767490?text=Hi%20Bakri%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20talk"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn} // Removed styles.desktopCta
            >
              Let's talk ↗
            </a>
          </li>
        </ul>

        {/* DESKTOP CTA */}
        <a href="#contact" className={`${styles.ctaBtn} ${styles.desktopCta}`}>
          Let's talk ↗
        </a>

        {/* HAMBURGER TOGGLE */}
        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={menuOpen ? styles.barOpen1 : styles.bar}></span>
          <span className={menuOpen ? styles.barOpen2 : styles.bar}></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;