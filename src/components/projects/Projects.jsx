import theshoetrybe from "../../assets/theshoetrybe.jpg";
import attendflow from "../../assets/attendflow.jpg";
import aria from "../../assets/aria.jpg";

import nexcent from "../../assets/nexcent.jpg";
import agroweb from "../../assets/agroweb.jpg";
import styles from "./projects.module.css";

const projects = [
  {
    index: "/01",
    category: "E-commerce dashboard",
    title: "theshoetrybe",
    image: theshoetrybe,
    description:
      "A modern footwear e-commerce platform built with React and Vite featuring responsive product cards, cart management, and fluid UI layout.",
    tags: ["React", "CSS Modules", "Vite"],
  },
  {
    index: "/02",
    category: "Educational",
    title: "attendflow",
    image: attendflow,
    description:
      "A smart attendance verification system using QR scanning and browser geolocation check-ins.",
    tags: ["React", "CSS Modules", "  Node.JS", "Express.js", "PostgreSQL"],
  },
  {
    index: "/03",
    category: "E-commerce platform",
    title: "aria",
    image: aria,
    description:
      "An elegant luxury e-commerce web interface with customized theme toggling and dynamic route navigation.",
    tags: ["React", "React Router", "CSS Modules"],
  },
  {
    index: "/04",
    category: "Landing page",
    title: "Nexcent",
    image: nexcent,
    description:
      "A responsive agency showcase site designed for seamless user interaction across mobile and desktop devices.",
    tags: ["React", "CSS Modules", "JavaScript"],
  },
  {
    index: "/05",
    category: "Web Application",
    title: "agro web",
    image: agroweb,
    description:
      "An agricultural platform connecting farmers directly to buyers with intuitive product displays and category filtering.",
    tags: ["JavaScript", "CSS3", "HTML5"],
  },
];

function Projects() {
  return (
    <section className={styles.projects} id="work">
      <div className={styles.wrap}>
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Selected work</p>
            <h2 className={styles.heading}>Recent projects</h2>
          </div>
          <span className={styles.years}>2023–2025</span>
        </div>

        <div className={styles.list}>
          {projects.map((project) => (
            <article key={project.index} className={styles.card}>
              <div className={styles.visual}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                />
              </div>

              <div className={styles.meta}>
                <span className={styles.category}>{project.category}</span>
                <span className={styles.index}>{project.index}</span>
              </div>

              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>

              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;