import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg";
import DataNetworkBackground from "../components/DataNetworkBackground";
import { ClockWidget } from "../components/ClockWidget";
import { WeatherWidget } from "../components/WeatherWidget";
import { NewsWidget } from "../components/NewsWidget";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 gap-10 overflow-hidden"
    >
      <DataNetworkBackground />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={profilePic}
            alt="Henintsoa"
            className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-2xl"
          />
        </motion.div>

        <div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-cyan-400">Henintsoa Rabekoto</span>
          </motion.h1>

          <motion.p
            className="mt-4 text-lg text-gray-300 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Data Engineer & Front-end Developer – expert en pipelines de données,
            APIs performantes et visualisations impactantes.
          </motion.p>

          <motion.p
            className="mt-2 text-lg text-white font-semibold"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Je transforme les données en insights clairs, utiles et stratégiques.
          </motion.p>

          <motion.a
            href="#projects"
            className="inline-block mt-8 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 rounded-lg font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Voir mes projets
          </motion.a>
        </div>
      </div>

    </section>
  );
}
