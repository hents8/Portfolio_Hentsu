export default function MobileNewsRow({ articles }: { articles: any[] }) {
  return (
    <div className="flex w-full flex-col gap-1">
      {articles.map((article, idx) => (
        <a
          key={idx}
          href={article.link}
          target="_blank"
          rel="noreferrer"
          className="group block w-full px-2 py-1 rounded-md hover:bg-[#2A3A2A]/50 transition-colors"
        >
          <span className="block w-full text-[10px] sm:text-xs font-medium text-[#F5F5F5] group-hover:text-[#B1FB8E] text-right break-words leading-snug line-clamp-1 transition-colors">
            {article.title}
          </span>
		  <span className="news-excerpt-mobile mt-1 block w-full text-[9px] sm:text-[10px] text-right">
            {article.content || article.description}
          </span>
        </a>
      ))}
    </div>
  );
}
