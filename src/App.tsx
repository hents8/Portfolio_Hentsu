import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Background from "./components/Background";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#0F172A] text-white">
      <Navbar />
      <Hero />
	  <About />
      <Skills />
	  <Background />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

