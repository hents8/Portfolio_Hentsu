import { Database, Cpu, Layout, Server, Sparkles, ArrowRight, ArrowDown } from "lucide-react";

export function MindmapMedia() {
  return (
    <div className="my-6 bg-[#121A12] p-5 rounded-2xl border border-[#B1FB8E]/30 shadow-2xl relative">
      {/* Titre */}
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
        <h4 className="text-xs font-mono font-bold text-[#B1FB8E] uppercase tracking-wider flex items-center gap-2">
          <Sparkles size={16} /> Mindmap & Execution Flow
        </h4>
        <span className="text-[10px] font-mono text-[#BAC8C1] bg-[#2A3A2A] px-2 py-0.5 rounded border border-[#B1FB8E]/20">
          Orchestré sous Prefect
        </span>
      </div>

      {/* FLUX DE DONNÉES / MINDMAP */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 relative z-10">
        
        {/* NŒUD 1 : INGESTION */}
        <div className="w-full md:w-1/4 bg-[#1A251A] p-3 rounded-xl border border-blue-500/40 text-center shadow-lg">
          <Server className="w-5 h-5 text-blue-400 mx-auto mb-1" />
          <span className="block text-xs font-bold text-[#F5F5F5]">1. Ingestion</span>
          <span className="text-[10px] text-[#BAC8C1]">Multi-Sources</span>
          <div className="mt-2 flex flex-col gap-1 text-[10px] font-mono text-[#BAC8C1]">
            <span className="bg-[#2A3A2A] py-0.5 rounded">Flux RSS XML</span>
            <span className="bg-[#2A3A2A] py-0.5 rounded">Scraping HTML</span>
            <span className="bg-[#2A3A2A] py-0.5 rounded">Selenium JS</span>
          </div>
        </div>

        {/* FLÈCHE 1 */}
        <div className="my-1 md:my-0 text-[#B1FB8E] flex items-center justify-center">
          <ArrowRight className="hidden md:block w-5 h-5 animate-pulse" />
          <ArrowDown className="block md:hidden w-5 h-5 animate-pulse" />
        </div>

        {/* NŒUD 2 : NLP & ETL */}
        <div className="w-full md:w-1/4 bg-[#1A251A] p-3 rounded-xl border border-[#B1FB8E] text-center shadow-lg">
          <Cpu className="w-5 h-5 text-[#B1FB8E] mx-auto mb-1 animate-spin-slow" />
          <span className="block text-xs font-bold text-[#B1FB8E]">2. NLP & ETL</span>
          <span className="text-[10px] text-[#BAC8C1]">Multilingue FR/MG</span>
          <div className="mt-2 flex flex-col gap-1 text-[10px] font-mono text-[#B1FB8E]">
            <span className="bg-[#2A3A2A] py-0.5 rounded">SHA-256 Hash</span>
            <span className="bg-[#2A3A2A] py-0.5 rounded">XLM-RoBERTa</span>
            <span className="bg-[#2A3A2A] py-0.5 rounded">Sentence-Transf.</span>
          </div>
        </div>

        {/* FLÈCHE 2 */}
        <div className="my-1 md:my-0 text-[#B1FB8E] flex items-center justify-center">
          <ArrowRight className="hidden md:block w-5 h-5 animate-pulse" />
          <ArrowDown className="block md:hidden w-5 h-5 animate-pulse" />
        </div>

        {/* NŒUD 3 : STOCKAGE */}
        <div className="w-full md:w-1/4 bg-[#1A251A] p-3 rounded-xl border border-yellow-500/40 text-center shadow-lg">
          <Database className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
          <span className="block text-xs font-bold text-[#F5F5F5]">3. Stockage</span>
          <span className="text-[10px] text-[#BAC8C1]">NoSQL ➔ Warehouse</span>
          <div className="mt-2 flex flex-col gap-1 text-[10px] font-mono text-[#BAC8C1]">
            <span className="bg-[#2A3A2A] py-0.5 rounded text-green-300">MongoDB Atlas</span>
            <span className="bg-[#2A3A2A] py-0.5 rounded text-yellow-300">BigQuery Sync</span>
          </div>
        </div>

        {/* FLÈCHE 3 */}
        <div className="my-1 md:my-0 text-[#B1FB8E] flex items-center justify-center">
          <ArrowRight className="hidden md:block w-5 h-5 animate-pulse" />
          <ArrowDown className="block md:hidden w-5 h-5 animate-pulse" />
        </div>

        {/* NŒUD 4 : RESTITUTION BI */}
        <div className="w-full md:w-1/4 bg-[#2A3A2A] p-3 rounded-xl border border-[#B1FB8E] text-center shadow-xl">
          <Layout className="w-5 h-5 text-[#B1FB8E] mx-auto mb-1" />
          <span className="block text-xs font-bold text-[#B1FB8E]">4. Restitution</span>
          <span className="text-[10px] text-[#BAC8C1]">Analytics BI</span>
          <div className="mt-2 flex flex-col gap-1 text-[10px] font-mono text-[#2A3A2A]">
            <span className="bg-[#B1FB8E] font-bold py-0.5 rounded">Looker Studio</span>
          </div>
        </div>

      </div>
    </div>
  );
}