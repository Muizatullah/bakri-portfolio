import styles from './contact.module.css'

function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.wrap}>
        <p className={styles.eyebrow}>Have a project in mind?</p>

        <h2 className={styles.heading}>
          Let's make
          <br />
          <span className={styles.gradientText}>something great.</span>
        </h2>
        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=bakrimuizat@gmail.com&su=Let's work together"
  target="_blank"
  rel="noopener noreferrer"
  className={styles.ctaBtn}
>
  Start a conversation
  <span className={styles.arrow}>↗</span>
</a>
      </div>
    </section>
  )
}

export default Contact