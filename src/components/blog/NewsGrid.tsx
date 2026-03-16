"use client";

import NewsCard from "./NewsCard";
import type { NewsItem } from "@/lib/rss";
import { Layers } from "lucide-react";

export default function NewsGrid({ articles }: { articles: NewsItem[] }) {
  if (!articles || articles.length === 0) {
    return (
      <div className="col-span-1 border border-white/10 p-12 rounded-2xl bg-dark-card flex flex-col items-center justify-center text-center">
        <Layers size={48} className="text-white/20 mb-4" />
        <p className="text-white/40 text-lg">Nenhuma notícia encontrada no momento.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
      {articles.map((item, idx) => (
        <NewsCard key={idx} item={item} index={idx} />
      ))}
    </div>
  );
}
