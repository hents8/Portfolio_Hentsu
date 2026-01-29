import NewsRow from "./NewsRow";

export function NewsWidget({ articles, loading }: { articles: any[], loading: boolean }) {
  return (
    <>
      {/* Desktop : version complète */}
      <div className="hidden md:block widget-news space-y-3 p-3 bg-[#2A3A2A]/80 rounded-2xl shadow-lg">
        <span className="news-header text-sm font-semibold text-gray-400">
          Actualités
        </span>

        {loading ? (
          <div className="text-gray-400 text-sm">Chargement des actualités...</div>
        ) : articles.length > 0 ? (
          articles.map((article, i) => <NewsRow key={i} article={article} />)
        ) : (
          <div className="text-gray-400 text-sm">Aucun article disponible.</div>
        )}
      </div>

      {/* Mobile : version compacte bottom-left */}
      <div className="block md:hidden absolute bottom-0 left-0 z-20 w-1/2 p-2 bg-[#2A3A2A]/70 backdrop-blur-sm rounded-tl-2xl shadow-lg">
        <span className="news-header text-xs font-semibold text-gray-400">
          Actualités
        </span>

        {loading ? (
          <div className="text-gray-400 text-xs mt-1">Chargement des actualités...</div>
        ) : articles.length > 0 ? (
          <NewsRow article={articles[0]} /> 
        ) : (
          <div className="text-gray-400 text-xs mt-1">Aucun article disponible.</div>
        )}
      </div>
    </>
  );
}
