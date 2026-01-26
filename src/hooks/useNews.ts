import { useEffect, useState } from "react";

export function useNews() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch("/.netlify/functions/news");
        if (!res.ok) throw new Error("Erreur fetch News");
        const data = await res.json();

        // Ne garder que 2 articles : 1 local + 1 international (ou les 2 premiers)
        setArticles(data.slice(0, 2));
      } catch (error) {
        console.error("Erreur récupération articles :", error);
        setArticles([]); // éviter boucle infinie
      } finally {
        setLoading(false); // 🔑 important
      }
    }

    fetchNews();
  }, []);

  return { articles, loading };
}
