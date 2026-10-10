# Bakri Portfolio `<BM/>`

A clean, modern, and responsive developer portfolio built with **React**, **Vite**, and **CSS Modules**. Styled with a minimalist "DM Mono" aesthetic and vibrant violet accents, this site highlights recent full-stack web applications, frontend projects, and technical skills.

---

## 🚀 Features

- **Modern Tech Stack**: Built using Vite and React for ultra-fast performance and seamless routing.
- **Responsive Layout**: Designed for optimal viewing across mobile, tablet, and desktop devices.
- **Custom Aesthetic**: Styled using CSS Modules, custom CSS variables, and the `DM Mono` typography set.
- **Dynamic Projects Section**: Scalable project cards showcasing selected work, tech stacks, and descriptions.
- **Theme Toggle**: Custom theme switching component for enhanced user experience.

---

## 🛠️ Tech Stack

- **Frontend**: React, Vite, React Router
- **Styling**: CSS Modules, Flexbox/Grid, SVG Icons
- **Deployment**: Vercel 

---

## 📁 Project Structure

```text
my-portfolio/
├── public/
│   ├── favicon.png         # Custom <BM/> favicon
│   └── ...
├── src/
│   ├── assets/             # Project screenshots & images
│   ├── components/         # Reusable UI components
│   │   ├── about/
│   │   ├── contact/
│   │   ├── footer/
│   │   ├── navbar/
│   │   ├── projects/
│   │   └── themeToggle/
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point & router configuration
│   └── index.css           # Global styles & CSS variables
├── index.html              # HTML template
├── package.json
└── vite.config.js