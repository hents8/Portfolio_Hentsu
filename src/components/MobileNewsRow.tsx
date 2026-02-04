export default function MobileNewsRow({ articles }: { articles: any[] }) {
  return (
    <div className="flex w-full flex-col gap-1">
      {articles.map((article, idx) => (
        <a
          key={idx}
          href={article.link}
          target="_blank"
          rel="noreferrer"
          className="flex w-full h-full group"
        >
          {/* Partie gauche : vide */}
          <div className="flex-1" />

          {/* Partie droite : titre */}
          <div className="flex-1 flex flex-col justify-end items-end pr-2">
            <span className="text-[11px] sm:text-xs font-medium text-white group-hover:text-[#B1FB8E] line-clamp-3 w-full break-words text-right transition-colors">
              {article.title}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
