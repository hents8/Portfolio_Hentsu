import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaGitAlt, FaDatabase, FaNodeJs, FaReact, FaPython, FaChartLine, FaChartPie, FaFigma, FaTrello, FaGoogle, FaMicrosoft } from "react-icons/fa";
import { SiTailwindcss, SiRstudioide, SiLooker, SiTableau, SiAdobephotoshop, SiAdobeillustrator, SiMongodb } from "react-icons/si";
import { MdAnalytics as MdAnalyticsIcon } from "react-icons/md";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import PowerBIIcon from '../assets/Power-BI.svg';

export default function Skills() {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t("skills.cat_languages"),
      skills: [
        { name: "Python", icon: <FaPython className="inline w-5 h-5 mr-2" /> },
        { name: "R", icon: <SiRstudioide className="inline w-5 h-5 mr-2" /> },
        { name: "SQL", icon: <FaDatabase className="inline w-5 h-5 mr-2" /> },
        { name: "JavaScript / Node.js", icon: <FaNodeJs className="inline w-5 h-5 mr-2" /> },
        { name: "HTML / CSS / TailwindCSS", icon: <SiTailwindcss className="inline w-5 h-5 mr-2" /> },
        { name: "React", icon: <FaReact className="inline w-5 h-5 mr-2" /> },
        { name: "MongoDB", icon: <SiMongodb className="inline w-5 h-5 mr-2" /> },
      ],
    },
    {
      title: t("skills.cat_bi"),
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
      title: t("skills.cat_web"),
      skills: [
        { name: "HTML5 / CSS3 / JavaScript (DOM, API, Chart.js)", icon: <FaNodeJs className="inline w-5 h-5 mr-2" /> },
        { name: t("skills.items.bi_integration"), icon: <FaPython className="inline w-5 h-5 mr-2" /> },
      ],
    },
    {
      title: t("skills.cat_design"),
      skills: [
        { name: "Figma", icon: <FaFigma className="inline w-5 h-5 mr-2" /> },
        { name: "Photoshop", icon: <SiAdobephotoshop className="inline w-5 h-5 mr-2" /> },
        { name: "Illustrator", icon: <SiAdobeillustrator className="inline w-5 h-5 mr-2" /> },
        { name: t("skills.items.dashboard_design"), icon: <MdAnalyticsIcon className="inline w-5 h-5 mr-2" /> },
      ],
    },
    {
      title: t("skills.cat_collab"),
      skills: [
        { name: "Git / GitHub", icon: <FaGitAlt className="inline w-5 h-5 mr-2" /> },
        { name: "Trello", icon: <FaTrello className="inline w-5 h-5 mr-2" /> },
        { name: "Google Workspace", icon: <FaGoogle className="inline w-5 h-5 mr-2" /> },
        { name: "Microsoft 365", icon: <FaMicrosoft className="inline w-5 h-5 mr-2" /> },
      ],
    },
    {
      title: t("skills.cat_stats"),
      skills: [
        { name: t("skills.items.descriptive_analysis"), icon: <MdAnalyticsIcon className="inline w-5 h-5 mr-2" /> },
        { name: t("skills.items.stat_tests"), icon: <MdAnalyticsIcon className="inline w-5 h-5 mr-2" /> },
        { name: t("skills.items.pca_mca"), icon: <MdAnalyticsIcon className="inline w-5 h-5 mr-2" /> },
        { name: t("skills.items.segmentation"), icon: <MdAnalyticsIcon className="inline w-5 h-5 mr-2" /> },
        { name: t("skills.items.regression"), icon: <MdAnalyticsIcon className="inline w-5 h-5 mr-2" /> },
        { name: t("skills.items.predictive_modeling"), icon: <MdAnalyticsIcon className="inline w-5 h-5 mr-2" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-[#B1FB8E]">
        {t("skills.main_title")}
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
              {category.skills.map((skill, idx) => (
                <div
                  key={idx}
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
                  <span className="text-[#F5F5F5]">{skill.icon}</span>
                  <span className="text-[#F5F5F5]">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}