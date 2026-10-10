import  Navbar  from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero"
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

function App() {
   
  return (
     <>
    <div>
      < Navbar />
      < Hero />
      < Projects />
      < About />
      < Contact />
      < Footer />
      < ScrollToTop />
    </div>
    
     </>
  )
 
}

export default App;