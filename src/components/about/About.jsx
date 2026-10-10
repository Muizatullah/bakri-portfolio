import styles from './about.module.css'

const skills = [
  '01  Html',
  '02  Css',
  '03  Javascript',
  '04  React',
  '05  Node.js',
  '06  PostgreSQL',
  '07  MongoDB',
  '08  GraphQL'
]

function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.wrap}>
        <p className={styles.eyebrow}>About me</p>

        <h2 className={styles.heading}>
          Code with
          <br />
          <span className={styles.dim}>intention.</span>
        </h2>

        <p className={styles.paragraph}>
          I bridge the gap between design and engineering, building
          products that are as intuitive to use as they are reliable
          under the hood.
        </p>

        <p className={styles.paragraphMuted}>
          From shaping a product's first interaction to architecting
          the APIs behind it, I care about every layer. My approach is
          collaborative, detail-driven, and always focused on the
          people using what we build.
        </p>

        <div className={styles.skillsGrid}>
          {skills.map((skill) => {
            const [num, ...rest] = skill.split('  ')
            return (
              <div key={num} className={styles.skillCell}>
                <span className={styles.skillNum}>{num}</span>
                <span className={styles.skillName}>{rest.join(' ')}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About