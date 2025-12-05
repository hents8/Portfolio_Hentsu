import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/5 z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-cyan-400">Hentsu.</h1>

        {/* Menu desktop */}
        <div className="space-x-6 hidden md:flex">
          <a href="#hero" className="hover:text-cyan-300">Accueil</a>
          <a href="#about" className="hover:text-cyan-300">À propos</a>
		  <a href="#skills" className="hover:text-cyan-300">Compétences</a>
          <a href="#background" className="hover:text-cyan-300">Parcours</a>
          <a href="#projects" className="hover:text-cyan-300">Projets</a>
          <a href="#contact" className="hover:text-cyan-300">Contact</a>
        </div>

        {/* Menu mobile */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <motion.div
          className="flex flex-col items-center bg-gray-900/80 py-4 space-y-4 md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <a href="#hero" onClick={() => setOpen(false)}>Accueil</a>
          <a href="#about" onClick={() => setOpen(false)}>À propos</a>
		   <a href="#skills" onClick={() => setOpen(false)}>Compétences</a>
          <a href="#background" onClick={() => setOpen(false)}>Parcours</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projets</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </motion.div>
      )}
    </motion.nav>
  );
}
