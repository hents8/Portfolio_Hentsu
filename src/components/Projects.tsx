import { useState } from "react";
import { X, Github, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import { MindmapMedia } from "./MindmapMedia";
import { MindmapSymfony } from "./MindmapSymfony";
import { MindmapFileExplorer } from "./MindmapFileExplorer";
import { EasterEggNetflix } from "./EasterEggNetflix";

export default function Projects() {
  const { t } = useTranslation();
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  const projectsConfig: Record<
    string,
    {
      tech: string[];
      githubUrl?: string;
      liveUrl?: string;
      code?: string;
      language: string;
    }
  > = {
    /* 1. PROJET 1 : PIPELINE DATA & NLP */
    veille_media: {
      language: "python",
      tech: [
        "Python 3.10+",
        "Prefect",
        "MongoDB Atlas",
        "Google BigQuery",
        "XLM-RoBERTa",
        "Sentence-Transformers",
        "Looker Studio",
      ],
      githubUrl: "https://github.com/hents8/veille_media_mada",
      liveUrl:
        "https://datastudio.google.com/reporting/0e624834-a151-4eea-8389-fd395ebb5e53",
      code: `# etl/transform.py - Pipeline NLP & Dédoublonnage Hash SHA-256
from prefect import task
from transformers import pipeline
import hashlib, langdetect

@task(name="Transform & Enrich Article")
def process_article(article_raw: dict) -> dict:
    # 1. Génération du Hash SHA-256 unique pour dédoublonnage
    raw_identifier = f"{article_raw['title']}{article_raw['link']}"
    article_hash = hashlib.sha256(raw_identifier.encode('utf-8')).hexdigest()
    
    # 2. Détection dynamique de langue (FR / MG)
    lang = langdetect.detect(article_raw['text'])
    
    # 3. Analyse de Sentiment Deep Learning / Lexique
    if lang == 'fr':
        nlp_model = pipeline("sentiment-analysis", model="cardiffnlp/twitter-xlm-roberta-base-sentiment")
        sentiment = nlp_model(article_raw['text'][:512])[0]
    else:
        sentiment = malagasy_lexicon_sentiment(article_raw['text']) # Traitement dictionnaire MG
        
    return {
        "_id": article_hash,
        "title": article_raw['title'],
        "lang": lang,
        "sentiment": sentiment['label'],
        "score": round(sentiment['score'], 3)
    }`,
    },

    /* 2. PROJET 2 : SYMFONY BUSINESS INTELLIGENCE */
    symfony_bi: {
      language: "php",
      tech: [
        "Symfony 6",
        "PHP 8",
        "PhpSpreadsheet",
        "Chart.js",
        "Twig",
        "DTO Architecture",
      ],
      githubUrl: "https://github.com/hents8/data_visualization",
      code: `// src/Controller/DataVisualizationController.php
namespace App\\Controller;

use App\\Service\\ExcelSurveyReader;
use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;
use Symfony\\Component\\HttpFoundation\\Request;

class DataVisualizationController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function index(Request $request, ExcelSurveyReader $reader)
    {
        // 1. Chargement et mise en cache mémoire du jeu de données Excel (.xlsx)
        $dataArray = $reader->getDataArray();
        
        // 2. Récupération des filtres dynamiques Dual-Panel (Année / Mois)
        $selectedYearLeft  = $request->query->get('year_left')  !== '' ? (int)$request->query->get('year_left')  : null;
        $selectedMonthLeft = $request->query->get('month_left') !== '' ? (int)$request->query->get('month_left') : null;

        // 3. Calcul de la matrice croisée Media x Tonalité par panel
        $buildMediaTonalite = function (?int $year, ?int $month) use ($dataArray, $reader) {
            $counts = [];
            foreach ($dataArray as $row) {
                if ($year !== null && (int)$row['Year'] !== $year) continue;
                $counts[$row['Media']][$row['Tonalité']] = ($counts[$row['Media']][$row['Tonalité']] ?? 0) + 1;
            }
            return $counts;
        };

        return $this->render('dashboard/index.html.twig', [
            'resultsLeft' => $reader->getQuestionResultFromArray('Media', $dataArray, $selectedYearLeft, $selectedMonthLeft),
            'mediaTonaliteLeft' => $buildMediaTonalite($selectedYearLeft, $selectedMonthLeft),
        ]);
    }`,
    },

    /* 3. PROJET 3 : EXPLORATEUR DE FICHIERS ET ENGINE DE SYNC */
    file_explorer: {
      language: "javascript",
      tech: [
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "React",
        "Multer",
        "REST API",
      ],
      githubUrl: "https://github.com/hents8/foldera",
      code: `// syncRoutes.js - Scan récursif du système de fichiers & indexation MongoDB
import express from "express";
import fs from "fs";
import path from "path";
import FileItem from "../models/FileModel.js";

const router = express.Router();
const BASE_DIR = "C:/Partage";

const scanAndSyncFolder = async (dirPath = BASE_DIR) => {
  const items = fs.readdirSync(dirPath);

  for (const name of items) {
    const fullPath = path.join(dirPath, name);
    const stats = fs.statSync(fullPath);
    const relativePath = path.relative(BASE_DIR, fullPath).replace(/\\\\/g, "/");

    const existing = await FileItem.findOne({ path: relativePath });

    if (!existing) {
      await FileItem.create({
        name,
        path: relativePath,
        type: stats.isDirectory() ? "directory" : "file",
        size: stats.isDirectory() ? null : Math.round(stats.size / 1024),
        modified: stats.mtime,
      });
    }

    if (stats.isDirectory()) {
      await scanAndSyncFolder(fullPath); // Parité arborescente récursive
    }
  }
};`,
    },
  };

  const projectKeys = Object.keys(projectsConfig);

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-[#B1FB8E]">
        {t("projects.title", "Projets")}
      </h2>

      {/* GRILLE DE PROJETS */}
      <div className="grid md:grid-cols-3 gap-8">
        {projectKeys.map((key) => {
          const config = projectsConfig[key];
          return (
            <div
              key={key}
              onClick={() => setSelectedKey(key)}
              className="
                bg-[#2A3A2A]
                p-6
                rounded-2xl
                hover:scale-[1.03]
                hover:bg-[#344834]
                transition-all
                duration-300
                cursor-pointer
                shadow-xl
                flex
                flex-col
                justify-between
                border
                border-[#7B9669]/20
                hover:border-[#B1FB8E]/50
                group
              "
            >
              <div>
                <h3 className="text-xl font-bold text-[#F5F5F5] group-hover:text-[#B1FB8E] transition-colors mb-2">
                  {t(`projects.items.${key}.title`)}
                </h3>

                <p className="text-[#BAC8C1] mb-4 text-sm leading-relaxed">
                  {t(`projects.items.${key}.description`)}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-2">
                {config.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                      bg-[#1F2A1F]
                      text-[#B1FB8E]
                      border
                      border-[#B1FB8E]/30
                      text-[11px]
                      font-mono
                      px-2.5
                      py-0.5
                      rounded-full
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* 🧪 EASTER EGG DISCRET SOUS LA GRILLE */}
      <EasterEggNetflix />

      {/* POPUP / MODALE INTELLIGENTE ET HOMOGÈNE */}
      {selectedKey && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 transition-all duration-300"
          onClick={() => setSelectedKey(null)}
        >
          <div
            className="
              bg-[#1A251A]
              p-6 md:p-8
              rounded-3xl
              shadow-2xl
              max-w-3xl
              w-full
              relative
              border
              border-[#B1FB8E]/30
              max-h-[85vh]
              overflow-y-auto
              [scrollbar-width:thin]
              [scrollbar-color:#7B9669_#121A12]
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton Fermer */}
            <button
              className="absolute top-5 right-5 p-2 rounded-full bg-[#2A3A2A] text-[#BAC8C1] hover:text-white hover:bg-[#7B9669] transition-all"
              onClick={() => setSelectedKey(null)}
            >
              <X size={20} />
            </button>

            {/* Header Modale */}
            <div className="mb-4 pr-10">
              <span className="inline-block px-3 py-1 bg-[#2A3A2A] text-[#B1FB8E] text-xs font-mono font-semibold rounded-full border border-[#B1FB8E]/30 mb-2">
                {selectedKey === "symfony_bi"
                  ? "Fullstack Web & Business Intelligence"
                  : selectedKey === "file_explorer"
                  ? "System Tools & Fullstack JavaScript"
                  : "Production-Ready Data Engineering"}
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#F5F5F5]">
                {t(`projects.items.${selectedKey}.title`)}
              </h3>
            </div>

            {/* MINDMAPS FLUX DE DONNÉES SPÉCIFIQUES */}
            {selectedKey === "veille_media" && <MindmapMedia />}
            {selectedKey === "symfony_bi" && <MindmapSymfony />}
            {selectedKey === "file_explorer" && <MindmapFileExplorer />}

            {/* Description détaillée */}
            <div className="text-[#BAC8C1] whitespace-pre-line leading-relaxed text-sm md:text-base my-4">
              {t(`projects.items.${selectedKey}.details`)}
            </div>

            {/* Extrait de Code Technique avec Coloration IDE Natif */}
            {projectsConfig[selectedKey].code && (
              <div className="mb-6">
                <span className="block text-xs font-mono text-[#B1FB8E] mb-2 font-semibold">
                  {selectedKey === "symfony_bi"
                    ? "// Controller & Cross-Tabulation Logic (src/Controller/DataVisualizationController.php)"
                    : selectedKey === "file_explorer"
                    ? "// Recursive Sync Engine (backend/routes/syncRoutes.js)"
                    : "// Core Processing & NLP Logic (etl/transform.py)"}
                </span>
                <div className="rounded-xl overflow-hidden border border-[#B1FB8E]/20 shadow-xl">
                  <SyntaxHighlighter
                    language={projectsConfig[selectedKey].language}
                    style={vscDarkPlus}
                    customStyle={{
                      margin: 0,
                      padding: "1rem",
                      backgroundColor: "#121A12",
                      fontSize: "0.75rem",
                      lineHeight: "1.5",
                      fontFamily: "monospace",
                    }}
                  >
                    {projectsConfig[selectedKey].code || ""}
                  </SyntaxHighlighter>
                </div>
              </div>
            )}

            {/* BOUTONS D'ACTION */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
              {projectsConfig[selectedKey].liveUrl && (
                <a
                  href={projectsConfig[selectedKey].liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#B1FB8E] text-[#1A251A] font-bold text-xs md:text-sm rounded-xl hover:bg-[#7B9669] hover:text-white transition-all shadow-lg"
                >
                  <ExternalLink size={16} />
                  <span>
                    {t(
                      `projects.items.${selectedKey}.live_demo`,
                      "Tableau de Bord Looker Studio"
                    )}
                  </span>
                </a>
              )}

              {projectsConfig[selectedKey].githubUrl && (
                <a
                  href={projectsConfig[selectedKey].githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2A3A2A] text-[#B1FB8E] font-semibold text-xs md:text-sm rounded-xl border border-[#B1FB8E]/30 hover:bg-[#344834] hover:border-[#B1FB8E] transition-all"
                >
                  <Github size={16} />
                  <span>
                    {t(
                      `projects.items.${selectedKey}.github_btn`,
                      "Code Source GitHub"
                    )}
                  </span>
                </a>
              )}
            </div>

            {/* Badges Technos */}
            <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-white/5">
              {projectsConfig[selectedKey].tech.map((tech: string) => (
                <span
                  key={tech}
                  className="
                    bg-[#1F2A1F]
                    text-[#BAC8C1]
                    text-[11px]
                    font-mono
                    px-2.5
                    py-0.5
                    rounded-md
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}