import { motion } from "framer-motion";
import profilePic from "../assets/prof.png";
import DataNetworkBackground from "../components/DataNetworkBackground";
import { NewsWidget } from "../components/NewsWidget";
import { CalendarWidget } from "../components/CalendarWidget";
import { TimeWeatherWidget } from "../components/TimeWeatherWidget";
import { useNews } from "../hooks/useNews";

export default function Hero() {
  const { articles = [], loading = true } = useNews();

  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 gap-10 overflow-hidden"
    >
      <DataNetworkBackground />

      {/* Calendar */}
      <div className="absolute top-28 left-6 z-20 hidden md:block">
        <CalendarWidget />
      </div>

      {/* Time + Weather */}
      <div className="absolute top-28 right-6 z-20 hidden md:flex gap-4 items-start">
        <TimeWeatherWidget />
      </div>

      {/* News */}
      <div className="absolute bottom-6 right-6 z-20 hidden md:block">
        {!loading && articles.length > 0 ? (
          <NewsWidget articles={articles} />
        ) : (
          <div className="text-gray-400 text-sm flex justify-center items-center">
            Chargement des actualités...
          </div>
        )}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
        <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7 }}
  className="flex flex-col items-start"
>
  <img
  src={profilePic}
  alt="Henintsoa"
  className="w-52 h-52 md:w-96 md:h-96 rounded-full object-cover object-top shadow-2xl"
/>

  {/* Citation sous la photo */}
  <motion.div
    className="mt-8 max-w-md"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.8 }}
  >
    <p
      className="text-lg md:text-xl leading-relaxed italic text-gray-200"
    >
      “Without data, you’re just another person with an opinion.”
    </p>

    <span
      className="block mt-3 text-base tracking-wide text-[#00c853] font-semibold"
      style={{ fontFamily: "MyFont" }}
    >
      — W. Edwards Deming
    </span>
  </motion.div>
</motion.div>


        <div className="max-w-xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#F5F5F5]">Henintsoa Rabekoto</span>
          </motion.h1>

          <motion.p
            className="mt-4 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Data Engineer & Front-end Developer – expert en pipelines de données,
            APIs performantes et visualisations impactantes.
          </motion.p>

          <motion.p
            className="mt-2 text-lg text-white"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            Je transforme les données en insights clairs, utiles et stratégiques.
          </motion.p>
          <motion.a
            href="#projects"
            className="inline-block mt-8 px-6 py-3 bg-[#2A3A2A] hover:bg-[#00b44a] rounded-lg font-semibold transition-colors"
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
