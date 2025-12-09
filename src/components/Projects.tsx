import { useState } from "react";
import { X } from "lucide-react";

export default function Projects() {
  const [selected, setSelected] = useState<any>(null);

  const projects = [
    {
      title: "Pipeline Data ETL",
      description: "Extraction, transformation et stockage des données dans BigQuery avec automatisation via Airflow.",
      tech: ["Python", "SQL", "Airflow", "BigQuery"],
      details: `
Pipeline complet de traitement de données :
• Ingestion automatique depuis API / CSV
• Transformation via DAGs Airflow
• Nettoyage, jointures, enrichissements
• Chargement dans BigQuery (tables partitionnées)
• Monitoring + alertes Slack automatisées
      `,
    },
    {
      title: "App React SFTP",
      description: "Explorateur de fichiers web connecté à un serveur SFTP, avec gestion des uploads et downloads.",
      tech: ["React", "TailwindCSS", "Node.js", "SFTP"],
      details: `
Application Web permettant :
• Connexion SFTP sécurisée via clé SSH
• Navigation arborescente complète
• Upload & download de fichiers
• Aperçu fichiers (txt, csv, images)
• Backend Node.js avec ssh2-sftp-client
      `,
    },
    {
      title: "Dashboard Marketing",
      description: "Création de dashboards automatisés pour KPIs marketing.",
      tech: ["Looker Studio", "Python", "Visualization"],
      details: `
Projet d'automatisation Marketing :
• Extraction API Facebook + Google Ads
• Nettoyage & formatage Python/Pandas
• Envoi automatique vers BigQuery
• Dashboard dynamique Looker Studio
• Système d'alerte anomalies KPIs
      `,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-cyan-400">Projets</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div
            key={p.title}
            onClick={() => setSelected(p)}
            className="bg-[#1E293B] p-6 rounded-xl hover:scale-105 transition cursor-pointer"
          >
            <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
            <p className="text-gray-300 mb-3">{p.description}</p>

            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="bg-cyan-400 text-black text-xs font-semibold px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* POPUP */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-[#0F172A] p-8 rounded-2xl shadow-xl max-w-xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              onClick={() => setSelected(null)}
            >
              <X size={26} />
            </button>

            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              {selected.title}
            </h3>

            <p className="text-gray-300 whitespace-pre-line leading-relaxed">
              {selected.details}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {selected.tech.map((t: string) => (
                <span
                  key={t}
                  className="bg-cyan-400 text-black text-xs font-semibold px-3 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
