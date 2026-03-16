import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pagluz.com.br";

  // Páginas do Site e suas prioridades
  const routes = [
    { url: "", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/consumidor", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/gerador", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/quem-somos", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/blog", priority: 0.8, changeFrequency: "daily" as const },
    { url: "/termos-de-uso", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/politica-de-privacidade", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
