import Parser from "rss-parser";

const parser = new Parser({
  timeout: 8000
});

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

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export async function handler() {
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
    try {

      // 🔹 parser RSS directement
      const feed = await parser.parseURL(feedInfo.url);

      if (!feed.items?.length) continue;

      const cleanItems = feed.items
        .map((item) => {
          const title = stripHtml(item.title || "");
          const description = stripHtml(
            item.contentSnippet || item.content || ""
          );

          return {
            title,
            description,
            link: item.link,
            source: feed.title || feedInfo.url,
          };
        })
        .filter((item) => !isForbidden(item.title + " " + item.description))
        .slice(0, 3);

      if (cleanItems.length === 0) continue;

      articles.push(pickRandom(cleanItems));

    } catch (err) {

      // 🔹 si un RSS casse on ignore
      console.log("RSS ignoré :", feedInfo.url, err);

    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(articles),
    headers: {
      "Content-Type": "application/json",
    },
  };
}