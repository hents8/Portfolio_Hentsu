import { useEffect, useState } from "react";

export function NewsWidget() {
  const [news, setNews] = useState<any>(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_NEWS_API_KEY;
    fetch(`https://newsdata.io/api/1/latest?apikey=${apiKey}&q=antananarivo&language=fr`)
      .then(res => res.json())
      .then(data => setNews(data.results?.[0] || null))
      .catch(err => console.error(err));
  }, []);

  if (!news) return <div className="p-4 bg-gray-800 text-white rounded-lg shadow-md text-center">Chargement...</div>;

  let cleanText = news.description || news.content || "";
  if (cleanText.length > 50) cleanText = cleanText.substring(0, 50) + "...";

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg shadow-md cursor-pointer"
      onClick={() => window.open(news.link, "_blank")}
    >
      <img src={news.image_url || "/images/news-icon.png"} alt={news.title} className="mx-auto w-16 h-16 mb-2" />
      <div className="font-semibold">{news.title}</div>
      <div className="text-sm text-gray-300">{cleanText}</div>
    </div>
  );
}
