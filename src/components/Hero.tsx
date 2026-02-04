import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profilePic from "../assets/prof.png";
import DataNetworkBackground from "../components/DataNetworkBackground";
import { NewsWidget } from "../components/NewsWidget";
import { CalendarWidget } from "../components/CalendarWidget";
import { TimeWeatherWidget } from "../components/TimeWeatherWidget";
import { useNews } from "../hooks/useNews";

export default function Hero() {
  const { articles = [], loading = true } = useNews();
  const quotes = [
  {
    text: "Without data, you're just another person with an opinion.",
    author: "W. Edwards Deming",
  },
  {
    text: "Data is the new oil.",
    author: "Clive Humby",
  },
  {
    text: "In God we trust. All others must bring data.",
    author: "W. Edwards Deming",
  },
  {
    text: "Numbers have an important story to tell.",
    author: "Stephen Few",
  },
  {
    text: "Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure. It is our light, not our darkness, that most frightens us.",
    author: "Marianne Williamson",
  },
];
	const [quoteIndex, setQuoteIndex] = useState(0);

// Changer la citation toutes les 5 secondes
	useEffect(() => {
	  const interval = setInterval(() => {
		setQuoteIndex((prev) => (prev + 1) % quotes.length);
	  }, 5000);

	  return () => clearInterval(interval);
	}, []);

const currentQuote = quotes[quoteIndex];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-start md:justify-center items-center text-center md:text-left px-6 pt-20 md:pt-0 pb-40 md:pb-0 overflow-hidden"
    >
      <DataNetworkBackground />
	  
		{/* ░░░ MOBILE TOP BAR ░░░ */}
			<div
			  className="
				md:hidden
				w-full
				px-4
				pt-14
				relative
				-top-6
				z-20
			  "
			>
			  <div
				className="
				  flex
				  items-start
				  justify-between
				  p-3
				  -mx-6
				"
			  >
				{/* Calendar gauche */}
				<div className="flex justify-start">
				  <CalendarWidget />
				</div>

				{/* Weather droite */}
				<div className="flex justify-end">
				  <TimeWeatherWidget />
				</div>
			  </div>
			</div>


      {/* Calendar */}
      <div className="absolute top-28 left-6 z-20 hidden md:block">
        <CalendarWidget />
      </div>

     
      {/* Time + Weather */}
      <div className="absolute top-28 right-6 z-20 hidden md:flex gap-4 items-start">
        <TimeWeatherWidget />
      </div>

      {/* News */}
<div className="absolute bottom-6 right-6 z-20">
  <NewsWidget articles={articles} loading={loading} />
</div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
		  <div
			  className="
				hidden md:block
				absolute
				right-0
				top-1/2
				-translate-y-1/2
				h-[85%]
				w-[100%]
				bg-gradient-to-l from-[#404E3B]/70 to-transparent
				backdrop-blur-1xl
				rounded-3xl
				-z-10
				shadow-2xl
			  "
			/>
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
				className="inline-block mt-8 px-6 py-3 bg-[#2A3A2A] hover:bg-[#7b9669] rounded-lg font-semibold transition-colors"
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
			  >
				Voir mes projets
			  </motion.a>
			</div>
      </div>
	  
		{/* Citation sous la photo */}
				<div
				className="hidden md:flex flex-col justify-end border-l-2 border-[#7B9669] pl-4 absolute left-0 bottom-0 z-20"
				  style={{
					width: "320px",     
					height: "220px",    
					overflow: "hidden",
					paddingBottom: "1rem",
				  }}
				>
					  <AnimatePresence mode="wait">
						<motion.div
						  key={quoteIndex}
						  initial={{ opacity: 0, x: -20 }}
						  animate={{ opacity: 1, x: 0 }}
						  exit={{ opacity: 0, x: 20 }}
						  transition={{ duration: 0.8 }}
						  className="flex flex-col justify-end h-full"
						>
						  <p className="text-lg md:text-xl leading-relaxed italic text-[#E6E6E6]">
							“{currentQuote.text}”
						  </p>
						  <span
							className="block mt-3 text-sm tracking-wide text-[#B1FB8E] font-semibold"
							style={{ fontFamily: "MyFont" }}
						  >
							— {currentQuote.author}
						  </span>
						</motion.div>
					</AnimatePresence>
				</div>
				
				
				<div
				  className="
					md:hidden
					absolute bottom-3 left-0.5 right-3
					z-20
				  "
				>
					  <div
						className="
						  flex
						  gap-2
						  items-stretch
						"
					  >
								{/* QUOTE À GAUCHE */}
								<div
								  className="
									w-[32%]
									flex flex-col justify-end items-start
									pl-3
									pb-2
									
								  "
								  style={{ minHeight: "140px" }}
								>
								  <AnimatePresence mode="wait">
									<motion.div
									  key={quoteIndex}
									  initial={{ opacity: 0, x: -10 }}
									  animate={{ opacity: 1, x: 0 }}
									  exit={{ opacity: 0, x: 10 }}
									  transition={{ duration: 0.4 }}
									  className="flex flex-col justify-end items-start h-full gap-1"
									>
									  <p className="text-[11px] leading-snug italic text-[#E6E6E6] text-left">
										“{currentQuote.text}”
									  </p>
									  <span
										className="block mt-1 text-[11px] text-[#B1FB8E] font-semibold text-left"
										style={{ fontFamily: "MyFont" }}
									  >
									{currentQuote.author}
									  </span>
									</motion.div>
								</AnimatePresence>
								</div>
						</div>
				</div>
    </section>
  );
}
