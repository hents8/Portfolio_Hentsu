import { useState } from "react";
import { X } from "lucide-react";
import etlDag from "../assets/etl-dag.png";
import etlSchema from "../assets/etl-schema.png";

export default function Projects() {
  const [selected, setSelected] = useState<any>(null);

  const projects = [
    {
      title: "Pipeline Data ETL",
      description: "Extraction, transformation et stockage des données dans BigQuery avec automatisation via Airflow.",
      tech: ["Python", "SQL", "Airflow", "BigQuery"],
      image: etlDag,
      diagram: etlSchema,
      code: `from airflow import DAG
from airflow.operators.python import PythonOperator
from datetime import datetime

def ingest(): pass
def clean(): pass
def join_tables(): pass
def enrich(): pass
def load_bq(): pass
def slack_alert(): pass

with DAG('etl_pipeline', start_date=datetime(2026,2,1), schedule_interval='@daily') as dag:
    t1 = PythonOperator(task_id='ingest', python_callable=ingest)
    t2 = PythonOperator(task_id='clean', python_callable=clean)
    t3 = PythonOperator(task_id='join_tables', python_callable=join_tables)
    t4 = PythonOperator(task_id='enrich', python_callable=enrich)
    t5 = PythonOperator(task_id='load_bq', python_callable=load_bq)
    t6 = PythonOperator(task_id='slack_alert', python_callable=slack_alert)

    t1 >> t2 >> t3 >> t4 >> t5 >> t6`,
      details: `Pipeline complet de traitement de données :
• Ingestion automatique depuis API / CSV
• Transformation via DAGs Airflow
• Nettoyage, jointures, enrichissements
• Chargement dans BigQuery (tables partitionnées)
• Monitoring + alertes Slack automatisées`,
    },
    {
      title: "App React SFTP",
      description: "Explorateur de fichiers web connecté à un serveur SFTP, avec gestion des uploads et downloads.",
      tech: ["React", "TailwindCSS", "Node.js", "SFTP"],
      details: `Application Web permettant :
• Connexion SFTP sécurisée via clé SSH
• Navigation arborescente complète
• Upload & download de fichiers
• Aperçu fichiers (txt, csv, images)
• Backend Node.js avec ssh2-sftp-client`,
    },
    {
      title: "Dashboard Marketing",
      description: "Création de dashboards automatisés pour KPIs marketing.",
      tech: ["Looker Studio", "Python", "Visualization"],
      details: `Projet d'automatisation Marketing :
• Extraction API Facebook + Google Ads
• Nettoyage & formatage Python/Pandas
• Envoi automatique vers BigQuery
• Dashboard dynamique Looker Studio
• Système d'alerte anomalies KPIs`,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-[#B1FB8E]">
        Projets
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div
            key={p.title}
            onClick={() => setSelected(p)}
            className="
              bg-[#2A3A2A]
              p-6
              rounded-xl
              hover:scale-105
              hover:bg-[#7B9669]
              transition
              cursor-pointer
              shadow-lg
            "
          >
            <h3 className="text-xl font-bold text-[#F5F5F5] mb-2">
              {p.title}
            </h3>

            <p className="text-[#BAC8C1] mb-3">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="
                    bg-[#B1FB8E]
                    text-[#2A3A2A]
                    text-xs
                    font-semibold
                    px-2
                    py-1
                    rounded
                  "
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
            className="
              bg-[#2A3A2A]
              p-8
              rounded-2xl
              shadow-2xl
              max-w-2xl
              w-full
              relative
              border
              border-[#7B9669]/40
              overflow-y-auto
              max-h-[90vh]
            "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-[#BAC8C1] hover:text-[#F5F5F5]"
              onClick={() => setSelected(null)}
            >
              <X size={26} />
            </button>

            <h3 className="text-2xl font-bold text-[#B1FB8E] mb-4">
              {selected.title}
            </h3>

            {/* Image DAG */}
            {selected.image && (
              <img
                src={selected.image}
                alt={`${selected.title} DAG`}
                className="w-full h-auto rounded-lg mb-4 border border-[#7B9669]/40"
              />
            )}

            {/* Diagramme logique */}
            {selected.diagram && (
              <img
                src={selected.diagram}
                alt={`${selected.title} diagram`}
                className="w-full h-auto rounded-lg mb-4 border border-[#B1FB8E]/30"
              />
            )}

            {/* Détails texte */}
            <p className="text-[#BAC8C1] whitespace-pre-line leading-relaxed">
              {selected.details}
            </p>

            {/* Bloc code */}
            {selected.code && (
              <pre className="bg-[#1F2A1F] text-[#B1FB8E] p-4 rounded-lg overflow-x-auto mt-4">
                <code>{selected.code}</code>
              </pre>
            )}

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mt-6">
              {selected.tech.map((t: string) => (
                <span
                  key={t}
                  className="
                    bg-[#B1FB8E]
                    text-[#2A3A2A]
                    text-xs
                    font-semibold
                    px-3
                    py-1
                    rounded
                  "
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
