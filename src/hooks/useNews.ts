import { useEffect, useState } from "react";

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export function useNews() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        // Article local (Madagascar / Afrique)
        const localRes = await fetch(
          `https://newsdata.io/api/1/latest?apikey=${NEWS_API_KEY}&q=madagascar&language=fr`
        );
        const localData = await localRes.json();

        // Article data / tech international
        const dataRes = await fetch(
          `https://newsdata.io/api/1/latest?apikey=${NEWS_API_KEY}&q=data%20engineering%20ai&language=en`
        );
        const dataData = await dataRes.json();

        setArticles([
          localData.results?.[0],
          dataData.results?.[0],
        ]);
      } catch (error) {
        console.error("Erreur news", error);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  return { articles, loading };
}
