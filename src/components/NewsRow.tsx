export default function NewsRow({ article }: { article: any }) {
  return (
    <a
      href={article.link}
      target="_blank"
      rel="noreferrer"
      className="news-row group"
    >
      <span className="news-title group-hover:text-cyan-400">
        {article.title}
      </span>

      <span className="news-excerpt">
        {article.description || article.content}
      </span>
    </a>
  );
}
