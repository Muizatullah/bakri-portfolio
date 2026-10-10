import styles from './footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <a href="#" className={styles.logo}>
          <span className={styles.bracket}>&lt;</span>
          Bakri Muizat
          <span className={styles.bracket}>/&gt;</span>
        </a>

        <p className={styles.copy}>Designed & built with care © 2026</p>

        <div className={styles.socials}>
          <a
            href="https://linkedin.com/in/Muizat Bakri"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={styles.iconLink}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.34 18.34V9.75H5.67v8.59h2.67zM7 8.6a1.55 1.55 0 100-3.1 1.55 1.55 0 000 3.1zm11.34 9.74v-4.83c0-2.58-1.38-3.78-3.22-3.78a2.78 2.78 0 00-2.52 1.39v-1.17h-2.67v8.39h2.67v-4.68c0-1.23.23-2.42 1.76-2.42 1.5 0 1.52 1.4 1.52 2.5v4.6h2.46z" />
            </svg>
          </a>

          <a
            href="https://github.com/Muizatullah"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={styles.iconLink}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.02a9.58 9.58 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.66.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z" />
            </svg>
          </a>

          <a
            href="https://x.com/Bakri Muizat"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className={styles.iconLink}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M18.9 2H22l-7.47 8.53L23.3 22h-6.93l-5.43-7.1L4.7 22H1.6l8-9.13L1 2h7.1l4.9 6.48L18.9 2zm-1.21 18h1.92L7.4 3.9H5.34L17.69 20z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer