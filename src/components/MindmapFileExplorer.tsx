import { HardDrive, RefreshCw, Database, Monitor, Sparkles, ArrowRight, ArrowDown } from "lucide-react";

export function MindmapFileExplorer() {
  return (
    <div className="my-6 bg-[#121A12] p-5 rounded-2xl border border-[#B1FB8E]/30 shadow-2xl relative">
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
        <h4 className="text-xs font-mono font-bold text-[#B1FB8E] uppercase tracking-wider flex items-center gap-2">
          <Sparkles size={16} /> File Sync & Web Explorer Architecture
        </h4>
        <span className="text-[10px] font-mono text-[#BAC8C1] bg-[#2A3A2A] px-2 py-0.5 rounded border border-[#B1FB8E]/20">
          Node.js & MongoDB Sync
        </span>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-2 relative z-10">
        
        {/* 1. SYSTÈME DE FICHIERS */}
        <div className="w-full md:w-1/4 bg-[#1A251A] p-3 rounded-xl border border-blue-500/40 text-center shadow-lg">
          <HardDrive className="w-5 h-5 text-blue-400 mx-auto mb-1" />
          <span className="block text-xs font-bold text-[#F5F5F5]">1. Système de Fichiers</span>
          <span className="text-[10px] text-[#BAC8C1]">Répertoire Local / Partagé</span>
          <div className="mt-2 flex flex-col gap-1 text-[10px] font-mono text-[#BAC8C1]">
            <span className="bg-[#2A3A2A] py-0.5 rounded">Scan Récursif fs</span>
            <span className="bg-[#2A3A2A] py-0.5 rounded">Path Normalization</span>
          </div>
        </div>

        <div className="my-1 md:my-0 text-[#B1FB8E] flex items-center justify-center">
          <ArrowRight className="hidden md:block w-5 h-5 animate-pulse" />
          <ArrowDown className="block md:hidden w-5 h-5 animate-pulse" />
        </div>

        {/* 2. SYNC ENGINE & SECURITY */}
        <div className="w-full md:w-1/4 bg-[#1A251A] p-3 rounded-xl border border-[#B1FB8E] text-center shadow-lg">
          <RefreshCw className="w-5 h-5 text-[#B1FB8E] mx-auto mb-1" />
          <span className="block text-xs font-bold text-[#B1FB8E]">2. Moteur Express</span>
          <span className="text-[10px] text-[#BAC8C1]">Sync & Sécurité Traversal</span>
          <div className="mt-2 flex flex-col gap-1 text-[10px] font-mono text-[#B1FB8E]">
            <span className="bg-[#2A3A2A] py-0.5 rounded">Path Traversal Safe</span>
            <span className="bg-[#2A3A2A] py-0.5 rounded">Multer Storage</span>
          </div>
        </div>

        <div className="my-1 md:my-0 text-[#B1FB8E] flex items-center justify-center">
          <ArrowRight className="hidden md:block w-5 h-5 animate-pulse" />
          <ArrowDown className="block md:hidden w-5 h-5 animate-pulse" />
        </div>

        {/* 3. PERSISTANCE MONGODB */}
        <div className="w-full md:w-1/4 bg-[#1A251A] p-3 rounded-xl border border-green-500/40 text-center shadow-lg">
          <Database className="w-5 h-5 text-green-400 mx-auto mb-1" />
          <span className="block text-xs font-bold text-[#F5F5F5]">3. Indexation NoSQL</span>
          <span className="text-[10px] text-[#BAC8C1]">Persistance Métadonnées</span>
          <div className="mt-2 flex flex-col gap-1 text-[10px] font-mono text-[#BAC8C1]">
            <span className="bg-[#2A3A2A] py-0.5 rounded text-green-300">MongoDB / Mongoose</span>
            <span className="bg-[#2A3A2A] py-0.5 rounded text-green-300">Tree Indexing</span>
          </div>
        </div>

        <div className="my-1 md:my-0 text-[#B1FB8E] flex items-center justify-center">
          <ArrowRight className="hidden md:block w-5 h-5 animate-pulse" />
          <ArrowDown className="block md:hidden w-5 h-5 animate-pulse" />
        </div>

        {/* 4. INTERFACE REACT */}
        <div className="w-full md:w-1/4 bg-[#2A3A2A] p-3 rounded-xl border border-[#B1FB8E] text-center shadow-xl">
          <Monitor className="w-5 h-5 text-[#B1FB8E] mx-auto mb-1" />
          <span className="block text-xs font-bold text-[#B1FB8E]">4. App Front-End</span>
          <span className="text-[10px] text-[#BAC8C1]">Explorateur Web</span>
          <div className="mt-2 flex flex-col gap-1 text-[10px] font-mono text-[#2A3A2A]">
            <span className="bg-[#B1FB8E] font-bold py-0.5 rounded">React Preview & Upload</span>
          </div>
        </div>

      </div>
    </div>
  );
}