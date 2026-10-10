import { useState, useEffect } from 'react'
import styles from './scrollToTop.module.css'

function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`${styles.button} ${visible ? styles.visible : ''}`}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  )
}

export default ScrollToTop