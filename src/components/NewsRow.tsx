export default function NewsRow({ article }: { article: any }) {
  return (
    <a
      href={article.link}
      target="_blank"
      rel="noreferrer"
      className="news-row group block"
    >
      {/* Titre : toujours visible */}
      <span className="
        block
        text-xs md:text-sm
        font-medium
        text-[#F5F5F5]
        md:group-hover:text-[#B1FB8E]
        line-clamp-1
      ">
        {article.title}
      </span>

      {/* Extrait : desktop uniquement */}
       <span className="news-excerpt hidden md:block text-gray-300 text-sm mt-1">
        {article.description || article.content}
      </span>
    </a>
  );
}
