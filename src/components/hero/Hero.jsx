import styles from './hero.module.css'

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.wrap}>
        <div className={styles.badge}>
          <span className={styles.dot}></span>
          Open to new oppurtunities
        </div>

        <p className={styles.eyebrow}>Full-Stack Developer</p>

        <h1 className={styles.headline}>
          I build ideas
          <br />
          <span className={styles.gradientText}>into reality.</span>
        </h1>

        <p className={styles.intro}>
          I'm Bakri, a developer crafting thoughtful digital products
          where clean code meets bold design.
        </p>

        <a href="#work" className={styles.exploreLink}>
          <span className={styles.exploreText}>Explore my work</span>
          <span className={styles.arrowCircle}>→</span>
        </a>
      </div>
    </section>
  )
}

export default Hero