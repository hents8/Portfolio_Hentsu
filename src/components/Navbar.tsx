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
       <div className="flex items-center justify-center space-x-3">
		  {/* Logo */}
		  <a href="#hero" className="cursor-pointer">
			<img src="/hentsu.svg" alt="Logo" className="w-10 h-10" />
		  </a>

		  {/* Hentsu + span sur la même ligne */}
		  <div className="flex items-baseline space-x-2">
			<h1 className="heading-logo">Hentsu.</h1>
			<span className="logo-subtext">Data enthusiast driven Insights & Analytics</span>
		  </div>
		</div>


        {/* Menu desktop */}
        <div className="space-x-6 hidden md:flex">
          <a href="#hero" className="link-nav">Accueil</a>
          <a href="#about" className="link-nav">À propos</a>
          <a href="#skills" className="link-nav">Compétences</a>
          <a href="#background" className="link-nav">Parcours</a>
          <a href="#projects" className="link-nav">Projets</a>
          <a href="#contact" className="link-nav">Contact</a>
        </div>

        {/* Menu mobile toggle */}
       {/* Menu mobile toggle */}
		<div className="md:hidden">
		  <button
			onClick={() => setOpen(!open)}
			aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
			className="p-2 focus:outline-none focus:ring-2 focus:ring-[#B1FB8E] rounded transition"
		  >
			{open ? (
			  <X size={24} className="text-[#F5F5F5]" />
			) : (
			  <Menu size={24} className="text-[#F5F5F5]" />
			)}
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
          <a href="#hero" onClick={() => setOpen(false)} className="link-nav">Accueil</a>
          <a href="#about" onClick={() => setOpen(false)} className="link-nav">À propos</a>
          <a href="#skills" onClick={() => setOpen(false)} className="link-nav">Compétences</a>
          <a href="#background" onClick={() => setOpen(false)} className="link-nav">Parcours</a>
          <a href="#projects" onClick={() => setOpen(false)} className="link-nav">Projets</a>
          <a href="#contact" onClick={() => setOpen(false)} className="link-nav">Contact</a>
        </motion.div>
      )}
    </motion.nav>
  );
}
