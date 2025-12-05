export default function Projects() {
  const projects = [
    {
      title: "Pipeline Data ETL",
      description: "Extraction, transformation et stockage des données dans BigQuery avec automatisation via Airflow.",
      tech: ["Python", "SQL", "Airflow", "BigQuery"],
    },
    {
      title: "App React SFTP",
      description: "Explorateur de fichiers web connecté à un serveur SFTP, avec gestion des uploads et downloads.",
      tech: ["React", "TailwindCSS", "Node.js", "SFTP"],
    },
    {
      title: "Dashboard Marketing",
      description: "Création de dashboards automatisés pour le suivi des KPIs marketing avec Looker Studio et scripts Python.",
      tech: ["Looker Studio", "Python", "Data Visualization"],
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-cyan-400">Projets</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-[#1E293B] p-6 rounded-xl hover:scale-105 transition transform shadow-lg"
          >
            <h3 className="text-xl font-bold mb-2 text-white">{p.title}</h3>
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
    </section>
  );
}
