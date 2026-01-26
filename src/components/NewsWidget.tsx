import NewsRow from "./NewsRow";

export function NewsWidget({ articles, loading }: { articles: any[], loading: boolean }) {
  return (
    <div className="widget-news space-y-3">
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
  );
}
