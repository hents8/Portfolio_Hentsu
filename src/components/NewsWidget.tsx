import NewsRow from "./NewsRow";
export function NewsWidget({ articles, loading }: { articles: any[]; loading: boolean }) {
  return (
    <div className="widget-news p-3 bg-[#2A3A2A]/80 rounded-2xl">
      {loading ? (
        <div className="text-gray-400 text-xs md:text-sm mt-2">Chargement des actualités...</div>
      ) : articles.length > 0 ? (
        <>
          {/* Desktop : 2 articles */}
          <div className="hidden md:block space-y-3 mt-3">
            <span className="news-header text-xs md:text-sm font-semibold text-gray-400">
              Actualités
            </span>
            {articles.slice(0, 2).map((article, i) => (
              <NewsRow key={i} article={article} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-gray-400 text-xs md:text-sm mt-2">Aucun article disponible.</div>
      )}
    </div>
  );
}
