import { FileSpreadsheet, Cpu, Layout, Sparkles, ArrowRight, ArrowDown } from "lucide-react";

export function MindmapSymfony() {
  return (
    <div className="my-6 bg-[#121A12] p-5 rounded-2xl border border-[#B1FB8E]/30 shadow-2xl relative">
      {/* Titre */}
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
        <h4 className="text-xs font-mono font-bold text-[#B1FB8E] uppercase tracking-wider flex items-center gap-2">
          <Sparkles size={16} /> Data Flow & Architecture Web BI
        </h4>
        <span className="text-[10px] font-mono text-[#BAC8C1] bg-[#2A3A2A] px-2 py-0.5 rounded border border-[#B1FB8E]/20">
          Symfony 6 MVC
        </span>
      </div>

      {/* FLUX DE DONNÉES / DIAGRAMME SYMFONY */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 relative z-10">
        
        {/* ÉTAPE 1 : FICHIER EXCEL */}
        <div className="w-full md:w-1/4 bg-[#1A251A] p-3 rounded-xl border border-green-500/40 text-center shadow-lg">
          <FileSpreadsheet className="w-5 h-5 text-green-400 mx-auto mb-1" />
          <span className="block text-xs font-bold text-[#F5F5F5]">1. Source Excel</span>
          <span className="text-[10px] text-[#BAC8C1]">Enquêtes (.xlsx)</span>
          <div className="mt-2 flex flex-col gap-1 text-[10px] font-mono text-[#BAC8C1]">
            <span className="bg-[#2A3A2A] py-0.5 rounded">Données Brutes</span>
            <span className="bg-[#2A3A2A] py-0.5 rounded">Filtres Année/Mois</span>
          </div>
        </div>

        {/* FLÈCHE 1 */}
        <div className="my-1 md:my-0 text-[#B1FB8E] flex items-center justify-center">
          <ArrowRight className="hidden md:block w-5 h-5 animate-pulse" />
          <ArrowDown className="block md:hidden w-5 h-5 animate-pulse" />
        </div>

        {/* ÉTAPE 2 : SERVICE & CACHE */}
        <div className="w-full md:w-1/4 bg-[#1A251A] p-3 rounded-xl border border-[#B1FB8E] text-center shadow-lg">
          <Cpu className="w-5 h-5 text-[#B1FB8E] mx-auto mb-1" />
          <span className="block text-xs font-bold text-[#B1FB8E]">2. Service & Cache</span>
          <span className="text-[10px] text-[#BAC8C1]">PhpSpreadsheet</span>
          <div className="mt-2 flex flex-col gap-1 text-[10px] font-mono text-[#B1FB8E]">
            <span className="bg-[#2A3A2A] py-0.5 rounded">Cache Mémoire</span>
            <span className="bg-[#2A3A2A] py-0.5 rounded">DTO QuestionResult</span>
          </div>
        </div>

        {/* FLÈCHE 2 */}
        <div className="my-1 md:my-0 text-[#B1FB8E] flex items-center justify-center">
          <ArrowRight className="hidden md:block w-5 h-5 animate-pulse" />
          <ArrowDown className="block md:hidden w-5 h-5 animate-pulse" />
        </div>

        {/* ÉTAPE 3 : CONTROLLER & MATRICE */}
        <div className="w-full md:w-1/4 bg-[#1A251A] p-3 rounded-xl border border-yellow-500/40 text-center shadow-lg">
          <Cpu className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
          <span className="block text-xs font-bold text-[#F5F5F5]">3. Traitement BI</span>
          <span className="text-[10px] text-[#BAC8C1]">Matrice Croisée</span>
          <div className="mt-2 flex flex-col gap-1 text-[10px] font-mono text-[#BAC8C1]">
            <span className="bg-[#2A3A2A] py-0.5 rounded text-yellow-300">Media × Tonalité</span>
            <span className="bg-[#2A3A2A] py-0.5 rounded text-yellow-300">Dual-Panel Filters</span>
          </div>
        </div>

        {/* FLÈCHE 3 */}
        <div className="my-1 md:my-0 text-[#B1FB8E] flex items-center justify-center">
          <ArrowRight className="hidden md:block w-5 h-5 animate-pulse" />
          <ArrowDown className="block md:hidden w-5 h-5 animate-pulse" />
        </div>

        {/* ÉTAPE 4 : CHART.JS & TWIG */}
        <div className="w-full md:w-1/4 bg-[#2A3A2A] p-3 rounded-xl border border-[#B1FB8E] text-center shadow-xl">
          <Layout className="w-5 h-5 text-[#B1FB8E] mx-auto mb-1" />
          <span className="block text-xs font-bold text-[#B1FB8E]">4. Dashboard BI</span>
          <span className="text-[10px] text-[#BAC8C1]">Interface Web</span>
          <div className="mt-2 flex flex-col gap-1 text-[10px] font-mono text-[#2A3A2A]">
            <span className="bg-[#B1FB8E] font-bold py-0.5 rounded">Chart.js + Twig</span>
          </div>
        </div>

      </div>
    </div>
  );
}