import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/5 z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO & TITRE */}
        <div className="flex items-center justify-center space-x-3">
          <a href="#hero" className="cursor-pointer">
            <img src="/hentsu.svg" alt="Logo" className="w-10 h-10" />
          </a>

          <div className="flex items-baseline space-x-2">
            <h1 className="heading-logo">Hentsu.</h1>
            <span className="logo-subtext hidden sm:inline">
              Data enthusiast driven Insights & Analytics
            </span>
          </div>
        </div>

        {/* DESKTOP NAV + SWITCHER */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#hero" className="link-nav">{t("nav.home")}</a>
          <a href="#about" className="link-nav">{t("nav.about")}</a>
          <a href="#skills" className="link-nav">{t("nav.skills")}</a>
          <a href="#background" className="link-nav">{t("nav.background")}</a>
          <a href="#projects" className="link-nav">{t("nav.projects")}</a>
          <a href="#contact" className="link-nav">{t("nav.contact")}</a>

          {/* Bouton FR / EN */}
          <div className="pl-2 border-l border-white/10">
            <LanguageSwitcher />
          </div>
        </div>

        {/* MOBILE : TOGGLE + SWITCHER */}
        <div className="flex items-center space-x-4 md:hidden">
          <LanguageSwitcher />

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

      {/* MENU MOBILE DROP DOWN */}
      {open && (
        <motion.div
          className="flex flex-col items-center bg-gray-900/90 py-6 space-y-4 md:hidden border-b border-white/10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <a href="#hero" onClick={() => setOpen(false)} className="link-nav">{t("nav.home")}</a>
          <a href="#about" onClick={() => setOpen(false)} className="link-nav">{t("nav.about")}</a>
          <a href="#skills" onClick={() => setOpen(false)} className="link-nav">{t("nav.skills")}</a>
          <a href="#background" onClick={() => setOpen(false)} className="link-nav">{t("nav.background")}</a>
          <a href="#projects" onClick={() => setOpen(false)} className="link-nav">{t("nav.projects")}</a>
          <a href="#contact" onClick={() => setOpen(false)} className="link-nav">{t("nav.contact")}</a>
        </motion.div>
      )}
    </motion.nav>
  );
}