import Parser from "rss-parser";

const parser = new Parser();

function stripHtml(html: string) {
  return html
    .replace(/<[^>]*>?/gm, "")
    .replace(/\s+/g, " ")
    .trim();
}

function isForbidden(text: string) {
  const t = text.toLowerCase();
  return t.includes("nécrologie") || t.includes("necrologie");
}

function pickRandom<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export async function handler() {
  try {
    const feeds = [
      {
        url: "https://midi-madagasikara.mg/category/economie/feed/",
        type: "local",
      },
      {
        url: "https://www.technologyreview.com/topic/artificial-intelligence/feed",
        type: "data",
      },
    ];

    const articles: any[] = [];

    for (const feedInfo of feeds) {
      const res = await fetch(feedInfo.url);
      const text = await res.text();
      const feed = await parser.parseString(text);

      if (!feed.items?.length) continue;

      // 1️⃣ filtrer articles propres
      const cleanItems = feed.items
        .map(item => {
          const title = stripHtml(item.title || "");
          const description = stripHtml(
            item.contentSnippet || item.content || ""
          );

          return {
            title,
            description,
            link: item.link,
            source: feed.title,
          };
        })
        .filter(item => !isForbidden(item.title + " " + item.description))
        .slice(0, 3); // 2️⃣ max 3 par feed

      if (cleanItems.length === 0) continue;

      // 3️⃣ prendre 1 article aléatoire
      articles.push(pickRandom(cleanItems));
    }

    return {
      statusCode: 200,
      body: JSON.stringify(articles),
      headers: { "Content-Type": "application/json" },
    };
  } catch (error) {
    console.error("Erreur News Function :", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Impossible de récupérer les articles." }),
      headers: { "Content-Type": "application/json" },
    };
  }
}
