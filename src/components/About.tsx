import { motion } from "framer-motion";
import { FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-0 py-24">
      <h2 className="text-3xl font-bold text-cyan-400 mb-12">À propos</h2>

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
            <h3 className="text-4xl md:text-5xl font-extrabold text-white text-right leading-tight">
              Hello,
            </h3>
			<h3 className="text-4xl md:text-5xl font-extrabold text-white text-right leading-tight">
              je suis
            </h3>
          </motion.div>

          {/* Je suis Henintsoa */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-5xl font-extrabold text-white text-right leading-tight">
              <span className="text-cyan-400">Henintsoa</span>
              <span className="text-white"> !</span>
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
                <FaLinkedin className="text-cyan-400 hover:text-white w-6 h-6" />
              </a>
              <a href="https://wa.me/261326602543" target="_blank" rel="noreferrer">
                <FaWhatsapp className="text-cyan-400 hover:text-white w-6 h-6" />
              </a>
              <a href="mailto:henintsoarabekoto@gmail.com">
                <FaEnvelope className="text-cyan-400 hover:text-white w-6 h-6" />
              </a>
            </div>

            {/* Bouton CV */}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg text-sm"
            >
              Télécharger mon CV
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
          <p className="text-gray-300 leading-relaxed text-lg">
            Data Engineer et Développeur Front-end passionné par la création de solutions qui unissent analyse, automatisation et design. 
            J’aide les organisations à transformer leurs données en 
            <span className="text-cyan-400 font-semibold"> insights exploitables </span>
            grâce à des pipelines fiables, des dashboards intuitifs et des interfaces modernes.
            <br /><br />
            Avec plus de trois ans d’expérience en analyse statistique et marketing, j’ai développé une expertise complète : collecte, traitement, automatisation, visualisation et développement web. 
            Je maîtrise R, Python, SQL, JavaScript, HTML/CSS ainsi que Power BI, Looker Studio, Figma, Photoshop et Illustrator.
            <br /><br />
            Curieux, rigoureux et orienté solution, j’aime concevoir des systèmes et des expériences digitales qui rendent la donnée plus claire, plus utile et plus impactante pour la prise de décision.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
