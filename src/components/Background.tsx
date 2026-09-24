import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Background() {
  const { t } = useTranslation();

  // 1. Structure dynamique pour les expériences (Évite la répétition du JSX)
  const experiences = [
    {
      key: "exp1",
      points: ["p1", "p2", "p3", "p4", "p5", "p6"],
    },
    {
      key: "exp2",
      points: ["p1", "p2", "p3"],
    },
    {
      key: "exp3",
      points: ["p1", "p2"],
    },
  ];

  // 2. Structure dynamique pour les certifs (Évite la redondance des liens/textes)
  const certifications = [
    {
      title: "Business Intelligence Fundamentals",
      platform: "Simplilearn",
      descKey: "bi_desc",
      link: "https://drive.google.com/file/d/1d_srHppXKFxl8Jgf-GRCea54t-wtr5Hr/preview",
    },
    {
      title: "Data Visualization with Power BI",
      platform: "Great Learning",
      descKey: "pbi_desc",
      link: "https://drive.google.com/file/d/1Mj7-NOVFu3fMWxgEBrmjWBKnd2wsPcYl/preview",
    },
    {
      title: "Business Analysis & Process Management",
      platform: "Coursera",
      descKey: "ba_desc",
      link: "https://drive.google.com/file/d/11gWinlLGAb51mym94o41TIQ8bL77DLMV/preview",
    },
    {
      title: "Google Ads for Beginners",
      platform: "Coursera",
      descKey: "gads_desc",
      link: "https://drive.google.com/file/d/18VfF1K-zhKOG5fR2hApDu7eULv7lYqHW/preview",
    },
  ];

  return (
    <section id="background" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-[#B1FB8E] mb-12">
        {t("background.title")}
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* ─────────── COLONNE GAUCHE : EXPÉRIENCES ─────────── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl text-[#F5F5F5] font-semibold mb-6">
            {t("background.exp_title")}
          </h3>

          <ul className="space-y-8 text-gray-300">
            {experiences.map(({ key, points }) => (
              <li key={key} className="flex flex-col mb-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-[#B1FB8E]">
                      {t(`background.${key}.role`)}
                    </h4>
                    {t(`background.${key}.company`) && (
                      <span className="block text-base text-[#BAC8C1] font-medium mt-0.5">
                        {t(`background.${key}.company`)}
                      </span>
                    )}
                  </div>
                  <span className="text-gray-400 text-sm ml-2 whitespace-nowrap">
                    {t(`background.${key}.period`)}
                  </span>
                </div>

                <ul className="mt-3 space-y-1.5 text-[#F5F5F5] text-sm leading-relaxed">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="text-[#B1FB8E]">•</span>
                      <span>{t(`background.${key}.${p}`)}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ─────────── COLONNE DROITE : ÉDUCATION & CERTIFICATIONS ─────────── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-[#F5F5F5] mb-6">
            {t("background.edu_title")}
          </h3>

          <ul className="space-y-5 text-[#F5F5F5] text-sm">
            {/* MASTER 2 */}
            <li className="leading-relaxed">
              <strong className="text-base font-semibold text-[#F5F5F5]">
                {t("background.edu.m2_title")}
              </strong>{" "}
              – {t("background.edu.m2_sub")}{" "}
              <span className="text-gray-400 block sm:inline">
                {t("background.edu.m2_desc")}{" "}
              </span>
              <a
                href="http://biblio.univ-antananarivo.mg/pdfs/rabekotoAndriamarozakaNombainaH_MP_MAST_20.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-[#B1FB8E] underline hover:text-white transition-colors"
              >
                [{t("background.view_link")}]
              </a>
            </li>

            {/* ANGLAIS */}
            <li className="leading-relaxed">
              <strong className="text-base font-semibold text-[#F5F5F5]">
                {t("background.edu.english_title")}
              </strong>{" "}
              – {t("background.edu.english_sub")}
            </li>

            {/* CERTIFICATIONS (Mappées proprement) */}
            {certifications.map((cert) => (
              <li key={cert.title} className="leading-relaxed">
                <strong className="text-white font-medium">{cert.title}</strong>{" "}
                <span className="text-[#BAC8C1]">({cert.platform})</span>
                <span className="text-gray-400 block sm:inline">
                  {" "}
                  : {t(`background.edu.${cert.descKey}`)}{" "}
                </span>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#B1FB8E] underline hover:text-white transition-colors text-xs"
                >
                  [{t("background.view_link")}]
                </a>
              </li>
            ))}

            {/* AUTOFORMATION */}
            <li className="pt-2 border-t border-white/10 text-gray-300">
              <strong className="text-[#B1FB8E]">
                {t("background.edu.self_learn")}:
              </strong>{" "}
              {t("background.edu.self_learn_desc")}
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}