import Parser from "rss-parser";

export interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  source: string;
}

const parser = new Parser();

export async function getEnergyNews(): Promise<NewsItem[]> {
  try {
    // Busca notícias recentes sobre o setor elétrico brasileiro e energia renovável via Google News RSS
    const query = encodeURIComponent("energia renovável brasil OR mercado livre de energia brasil OR setor elétrico");
    const feedUrl = `https://news.google.com/rss/search?q=${query}&hl=pt-BR&gl=BR&ceid=BR:pt-419`;

    const feed = await parser.parseURL(feedUrl);

    if (!feed.items) return [];

    // Limpa e formata os dados
    const articles = feed.items.map((item) => {
      // O Google News geralmente coloca o nome da fonte no final do título após um traço "-"
      let title = item.title || "";
      let source = "Notícia";
      
      const parts = title.split(" - ");
      if (parts.length > 1) {
        source = parts.pop()?.trim() || "Notícia";
        title = parts.join(" - ");
      }

      return {
        title,
        link: item.link || "#",
        pubDate: item.pubDate || new Date().toISOString(),
        source,
      };
    });

    // Retorna as 12 notícias mais recentes
    return articles.slice(0, 12);
  } catch (error) {
    console.error("Erro ao buscar notícias RSS:", error);
    return [];
  }
}
