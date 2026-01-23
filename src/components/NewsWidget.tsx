import NewsRow from "./NewsRow";

export function NewsWidget({ articles }: { articles: any[] }) {
  return (
    <div className="widget-news space-y-3">
      <span className="news-header">
        Actualités
      </span>

      {articles.map(
        (article, i) => article && <NewsRow key={i} article={article} />
      )}
    </div>
  );
}
