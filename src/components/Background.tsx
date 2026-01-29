import { motion } from "framer-motion";
import OutsIcon from '../assets/OutsIcon.svg';
import Dcdm from '../assets/dcdm.jpg';
import Ljra from '../assets/ljra.jpg';

export default function Background() {
  return (
    <section id="background" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-[#B1FB8E] mb-12">Parcours</h2>

      <div className="grid md:grid-cols-2 gap-12">

        {/* ─────────── COLONNE GAUCHE : EXPÉRIENCES ─────────── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl text-[#F5F5F5] font-semibold mb-6">Expériences Professionnelles</h3>

          <ul className="space-y-6 text-gray-300">

            {/* Analyste Statistique */}
          <li className="flex flex-col md:flex-row md:items-start mb-6">
		  

		  {/* Contenu principal */}
		  <div className="flex-1">
			<div className="flex items-center justify-between">
			  <h4 className="text-lg font-semibold text-[#B1FB8E]">Chargé d'Etude Statistique</h4>
			  <span className="text-gray-400 text-sm ml-2">2025</span>
			</div>
			
			<p className="mt-1 text-[#F5F5F5] leading-relaxed">
			  • Réalisation d’études statistiques et d’analyses marketing pour des entreprises partenaires, incluant l’analyse de données quantitatives et qualitatives.<br /> 
			  • Collecte, traitement et segmentation de grandes bases de données (Python, R, SPSS), avec automatisation de processus et construction de pipelines ETL/ELT (SQL, Airflow).<br /> 
			  • Programmation et gestion d’enquêtes en ligne via Sphinx, Askia et Cognito Forms.<br /> 
			  • Conception de rapports dynamiques automatisés intégrant des visualisations avancées (Power BI, Looker Studio, Sphinx). <br />
			  • Participation aux échanges clients pour valider les analyses et formuler des recommandations stratégiques. <br />
			  • Réalisation de modèles statistiques (ACP, ACM, A/B Testing, régressions).<br />
			</p>
		  </div>
		</li>
		
           {/* Data Visualization Analyst */}
            <li className="flex flex-col md:flex-row md:items-start mb-6">
			
		  <div className="flex-1">
		  <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold text-[#B1FB8E]">Data Visualization Analyst</h4>
			   <span className="text-gray-400 text-sm ml-2">2024</span>
			   </div>
              <p className="mt-1 text-[#F5F5F5] leading-relaxed">
                • Conception et mise à jour de tableaux de bord automatisés sous Google Looker Studio pour le suivi d’indicateurs marketing et opérationnels. <br />
				• Automatisation de la collecte, du traitement et de la visualisation des données afin d’améliorer la lisibilité des KPIs. <br />
				• Création de visualisations interactives et de parcours de data storytelling, intégration de dashboards dans des applications web (React) et optimisation UX/UI pour garantir des rapports clairs, intuitifs et orientés décision.<br />
              </p>
			  </div>
            </li>

            {/* Professeur de Mathématiques */}
           <li className="flex flex-col md:flex-row md:items-start mb-6">
		   
		  <div className="flex-1">
		  <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold text-[#B1FB8E]">Professeur de Mathématiques</h4>
			  <span className="text-gray-400 text-sm ml-2">2021</span>
			   </div>
              <p className="mt-1 text-[#F5F5F5] leading-relaxed">
              • Enseignement des mathématiques générales, financières et statistiques (probabilités, algèbre) aux classes de Terminale et autres niveaux. <br />
			  • Création de supports pédagogiques, vulgarisation de concepts complexes et accompagnement individualisé des élèves pour assurer leur compréhension et progression.<br />
              </p>
			   </div>
            </li>

          </ul>
        </motion.div>

        {/* ─────────── COLONNE DROITE : ÉDUCATION & CERTIFICATIONS ─────────── */}
        <motion.div
		  initial={{ opacity: 0, x: 30 }}
		  whileInView={{ opacity: 1, x: 0 }}
		  transition={{ duration: 0.6 }}
		  viewport={{ once: true }}
		>
		  <h3 className="text-2xl font-semibold text-[#F5F5F5] mb-6">Éducation & Certifications</h3>

		  <ul className="space-y-4 text-[#F5F5F5]">
			<li>
			  <strong>Master 2 / Licence</strong> - Calcul Numérique & Mathématiques Appliquées, Université d'Antananarivo (2019)
			    <span className="text-gray-400"> : Équivalence Unitaire à un Opérateur de Toeplitz Tronqué : Symbole Analytique. </span>
				{ <a href="http://biblio.univ-antananarivo.mg/pdfs/rabekotoAndriamarozakaNombainaH_MP_MAST_20.pdf" target="_blank" rel="noreferrer" className="text-[#B1FB8E] underline">Voir</a> }
			</li>
			<li>
			  <strong>English Advanced Certificate</strong> - Centre National d'Enseignement de la langue Anglaise (CNELA) Antsahabe, Antananarivo (2012)
			</li>
			<li>
			  <strong>Business Analysis & Process Management</strong> – Coursera Project Network (2024)  
			  <span className="text-gray-400"> : méthodologies de gestion et analyse de processus. </span>
			  { <a href="https://drive.google.com/file/d/11gWinlLGAb51mym94o41TIQ8bL77DLMV/preview" target="_blank" rel="noreferrer" className="text-[#B1FB8E] underline">Voir</a>}
			</li>
			<li>
			  <strong>Google Ads for Beginners</strong> – Coursera Project Network (2024)  
			  <span className="text-gray-400"> : bases du marketing digital et campagnes Ads. </span>
			  { <a href="https://drive.google.com/file/d/18VfF1K-zhKOG5fR2hApDu7eULv7lYqHW/preview" target="_blank" rel="noreferrer" className="text-[#B1FB8E] underline">Voir</a>}
			</li>
			<li>
			  <strong>Data Visualization with Power BI</strong> – Great Learning Academy (2024)  
			  <span className="text-gray-400"> : création de dashboards et rapports dynamiques. </span>
			  { <a href="https://drive.google.com/file/d/1Mj7-NOVFu3fMWxgEBrmjWBKnd2wsPcYl/preview" target="_blank" rel="noreferrer" className="text-[#B1FB8E] underline">Voir</a>}
			</li>
			<li>
			  <strong>Business Intelligence Fundamentals</strong> – Simplilearn Skillup (2024)  
			  <span className="text-gray-400"> : Bases de la Business Intelligence pour l’analyse de données et la prise de décision. </span>
			  { <a href="https://drive.google.com/file/d/1d_srHppXKFxl8Jgf-GRCea54t-wtr5Hr/preview" target="_blank" rel="noreferrer" className="text-[#B1FB8E] underline">Voir</a>}
			</li>
			<li>
			  <strong>Auto-formation continue</strong> : Airflow, BigQuery, React, Tailwind
			</li>
		  </ul>
		</motion.div>


      </div>
    </section>
  );
}
