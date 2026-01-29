export default function NewsRow({ article }: { article: any }) {
  return (
    <a
      href={article.link}
      target="_blank"
      rel="noreferrer"
      className="news-row group block"
    >
      {/* Titre : petit sur mobile, plus gros sur desktop */}
      <span className="news-title text-xs md:text-sm font-medium text-white md:group-hover:text-[#B1FB8E] line-clamp-1 md:line-clamp-none block">
        {article.title}
      </span>

      {/* Extrait : caché sur mobile, visible md+ */}
      <span className="news-excerpt hidden md:block text-gray-300 text-sm mt-1">
        {article.description || article.content}
      </span>
    </a>
  );
}
