import { motion } from "framer-motion";
import { FaGitAlt } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiRstudioide } from "react-icons/si";
import { MdAnalytics } from "react-icons/md";
import PowerBIIcon from '../assets/Power-BI.svg';
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import { FaChartLine } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { SiLooker } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { FaTrello } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
import { SiTableau } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiMongodb } from "react-icons/si";



export default function Skills() {
  const skillCategories = [
    {
      title: "Langages & Data Engineering",
      skills: [
        { name: "Python", icon: <FaPython className="inline w-5 h-5 mr-2" /> },
		{ name: "R", icon: <SiRstudioide className="inline w-5 h-5 mr-2" /> },
		{ name: "SQL", icon: <FaDatabase className="inline w-5 h-5 mr-2" /> },
        { name: "JavaScript / Node.js", icon: <FaNodeJs className="inline w-5 h-5 mr-2" /> },
        { name: "HTML / CSS / TailwindCSS", icon: <SiTailwindcss className="inline w-5 h-5 mr-2" /> },
        { name: "React", icon: <FaReact className="inline w-5 h-5 mr-2" /> },
		{ name: "Mongodb", icon: <SiMongodb className="inline w-5 h-5 mr-2" /> },
      ],
    },
	{
      title: "Business Intelligence & Data Analysis",
      skills: [
        { name: "Power BI", icon: <img src={PowerBIIcon} alt="Power BI" className="w-5 h-5 mr-2" /> },
        { name: "Microsoft Excel", icon: <PiMicrosoftExcelLogo className="inline w-5 h-5 mr-2" /> },
        { name: "SPSS / Stata", icon: <FaChartLine className="inline w-5 h-5 mr-2" /> },
		{ name: "Tableau", icon: <SiTableau className="inline w-5 h-5 mr-2" /> },
        { name: "Sphinx IQ3 / Askia", icon: <FaChartPie className="inline w-5 h-5 mr-2" /> },
		{ name: "Looker Studio", icon: <SiLooker className="inline w-5 h-5 mr-2" /> },
      ],
    },
	{
      title: "Développement Web & Intégration",
      skills: [
        { name: "HTML5 / CSS3 / JavaScript (DOM, API, Chart.js)", icon: <FaNodeJs className="inline w-5 h-5 mr-2" /> },
        { name: "Intégration de visualisations Power BI et Python", icon: <FaPython className="inline w-5 h-5 mr-2" /> },
      ],
    },
	{
      title: "Design & Création Visuelle",
      skills: [
        { name: "Figma", icon: <FaFigma className="inline w-5 h-5 mr-2" /> },
		{ name: "Photoshop", icon: <SiAdobephotoshop className="inline w-5 h-5 mr-2" /> },
		{ name: "Illustrator", icon: <SiAdobeillustrator className="inline w-5 h-5 mr-2" /> },
        { name: "Design d’interfaces de dashboards", icon: <MdAnalytics className="inline w-5 h-5 mr-2" /> },
      ],
    },
	{
      title: "Environnements & Outils Collaboratifs",
      skills: [
        { name: "Git / GitHub", icon: <FaGitAlt className="inline w-5 h-5 mr-2" /> },
		{ name: "Trello", icon: <FaTrello className="inline w-5 h-5 mr-2" /> },
		{ name: "Google Workspace", icon: <FaGoogle className="inline w-5 h-5 mr-2" /> },
		{ name: "Microsoft 365", icon: <FaMicrosoft className="inline w-5 h-5 mr-2" /> },
      ],
    },
	{
      title: "Méthodes statistiques",
      skills: [
        { name: "Analyse descriptive", icon: <MdAnalytics className="inline w-5 h-5 mr-2" /> },
        { name: "Tests statistiques (t-test, ANOVA, Khi², corrélations)", icon: <MdAnalytics className="inline w-5 h-5 mr-2" /> },
        { name: "ACP / AFC / ACM", icon: <MdAnalytics className="inline w-5 h-5 mr-2" /> },
		{ name: "Segmentation (CAH, K-means)", icon: <MdAnalytics className="inline w-5 h-5 mr-2" /> },
        { name: "Régression (linéaire, logistique)", icon: <MdAnalytics className="inline w-5 h-5 mr-2" /> },
        { name: "Modélisation prédictive", icon: <MdAnalytics className="inline w-5 h-5 mr-2" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
	  <h2 className="text-3xl font-bold mb-10 text-[#B1FB8E]">
		Mes Compétences
	  </h2>

	  <div className="grid gap-12 md:grid-cols-2">
		{skillCategories.map((category) => (
		  <motion.div
			key={category.title}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			viewport={{ once: true }}
		  >
			<h3 className="text-xl font-semibold mb-4 text-[#E6E6E6]">
			  {category.title}
			</h3>

			<div className="grid grid-cols-2 gap-4">
			  {category.skills.map((skill) => (
				<div
				  key={skill.name}
				  className="
					bg-[#2A3A2A]
					p-3 rounded-lg
					text-[#B1FB8E]
					font-medium
					flex items-center gap-2
					cursor-pointer
					transition-all duration-300
					hover:bg-[#7B9669]
					hover:scale-[1.03]
					shadow-lg
				  "
				>
				  <span className="text-[#F5F5F5]">
					{skill.icon}
				  </span>
				   <span className="text-[#F5F5F5]">
				  {skill.name}
				  </span>
				</div>
			  ))}
			</div>
		  </motion.div>
		))}
	  </div>
	</section>

  );
}
