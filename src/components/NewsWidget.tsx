import NewsRow from "./NewsRow";
import MobileNewsRow from "./MobileNewsRow";

export function NewsWidget({
  articles,
  loading,
}: {
  articles: any[];
  loading: boolean;
}) {
  return (
    <div className="widget-news p-3 bg-[#2A3A2A]/80 rounded-2xl shadow-lg">
      

      {loading ? (
        <div className="text-gray-400 text-xs md:text-sm mt-2">
          Chargement des actualités...
        </div>
      ) : articles.length > 0 ? (
        <>
          {/* MOBILE : 1 article, titre seulement en bas à droite */}
         <div className="md:hidden absolute bottom-0 right-0 z-20 w-1/2 p-2 bg-[#2A3A2A]/70 backdrop-blur-sm rounded-tl-2xl shadow-lg">
           <span className="text-xs font-semibold text-gray-400 mb-1 text-right">Actualités
			</span>
			<MobileNewsRow article={articles[0]} />
          </div>

          {/* DESKTOP : 2 articles avec contenu */}
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
        <div className="text-gray-400 text-xs md:text-sm mt-2">
          Aucun article disponible.
        </div>
      )}
    </div>
  );
}
