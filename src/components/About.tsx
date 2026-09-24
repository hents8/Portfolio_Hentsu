import { motion } from "framer-motion";
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t, i18n } = useTranslation();

  // Redirection dynamique du CV selon la langue active
  const cvLink = i18n.language === 'en' ? '/CV_hentsu_IT_Data_Specialist_en.pdf' : '/CV_hentsu_IT_Data_Specialist.pdf';

  return (
    <section id="about" className="max-w-5xl mx-auto px-0 py-24">
      <h2 className="text-3xl font-bold text-[#B1FB8E] mb-12">
        {t('about.title')}
      </h2>

      {/* GRID 1/3 GAUCHE | 2/3 DROITE */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">

        {/* ░░░ COLONNE GAUCHE (1/3) ░░░ */}
        <div className="flex flex-col items-end justify-center col-span-1 space-y-4">
          {/* Hello */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-5xl font-extrabold text-[#E6E6E6] text-right leading-tight">
              {t('about.hello')}
            </h3>
            <h3 className="text-4xl md:text-5xl font-extrabold text-[#E6E6E6] text-right leading-tight">
              {t('about.i_am')}
            </h3>
          </motion.div>

          {/* Je suis Henintsoa */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-5xl font-extrabold text-right leading-tight">
              <span className="text-[#B1FB8E]">Henintsoa</span>
              <span className="text-[#E6E6E6]"> !</span>
            </h3>
          </motion.div>

          {/* ░░ RÉSEAUX & CV ░░ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-end space-y-3 mt-4"
          >
            {/* Icons réseaux */}
            <div className="flex space-x-3">
              <a href="https://www.linkedin.com/in/henintsoa-nombaina" target="_blank" rel="noreferrer">
                <FaLinkedin className="text-[#B1FB8E] hover:text-[#E6E6E6] w-6 h-6 transition-colors" />
              </a>
              <a href="https://github.com/hents8" target="_blank" rel="noreferrer">
                <FaGithub className="text-[#B1FB8E] hover:text-[#E6E6E6] w-6 h-6 transition-colors" />
              </a>
              <a href="https://wa.me/261326602543" target="_blank" rel="noreferrer">
                <FaWhatsapp className="text-[#B1FB8E] hover:text-[#E6E6E6] w-6 h-6 transition-colors" />
              </a>
              <a href="mailto:henintsoarabekoto@gmail.com">
                <FaEnvelope className="text-[#B1FB8E] hover:text-[#E6E6E6] w-6 h-6 transition-colors" />
              </a>
            </div>

            {/* Bouton CV dynamique */}
            <a
              href={cvLink}
              target="_blank"
              rel="noreferrer"
              className="mt-2 px-4 py-2 bg-[#2A3A2A] hover:bg-[#7B9669] text-[#B1FB8E] font-semibold rounded-lg text-sm transition-colors duration-200"
            >
              {t('about.download_cv')}
            </a>
          </motion.div>
        </div>

        {/* ░░░ COLONNE DROITE (2/3) ░░░ */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="col-span-2 px-4 md:px-0 md:pr-0"
        >
          <p className="text-[#BAC8C1] leading-relaxed text-lg">
            <span className="text-[#B1FB8E] font-semibold">
              {t('about.p1_bold')}
            </span>
            {t('about.p1_text')}
            <br /><br />
            {t('about.p2')}
            <br /><br />
            {t('about.p3')}
          </p>
        </motion.div>

      </div>
    </section>
  );
}