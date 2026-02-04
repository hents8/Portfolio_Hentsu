// MobileNewsRow.tsx
import React from "react";

export default function MobileNewsRow({ article }: { article: any }) {
  return (
    <div className="flex w-full h-full">
      {/* Partie gauche : vide pour l'espace */}
      <div className="flex-1" />

      {/* Partie droite : titre limité à 3 lignes */}
      <div className="flex-1 flex flex-col justify-end items-end pr-2">
        <span className="text-[10px] sm:text-xs font-medium text-white line-clamp-3 w-full break-words text-right">
          {article.title}
        </span>
      </div>
    </div>
  );
}
