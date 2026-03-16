"use client";

import { motion } from "framer-motion";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ExternalLink, Calendar, Newspaper } from "lucide-react";
import type { NewsItem } from "@/lib/rss";

export default function NewsCard({ item, index }: { item: NewsItem; index: number }) {
  // Formata data de publicação (ex: "há 2 horas" ou data normal)
  const pubDate = new Date(item.pubDate);
  const timeAgo = formatDistanceToNow(pubDate, { addSuffix: true, locale: ptBR });
  
  return (
    <motion.a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative flex flex-col justify-between p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-brand-green/30 hover:bg-white/[0.02] transition-colors h-full overflow-hidden"
    >
      {/* Elemento de background glow hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green/0 to-brand-green/0 group-hover:from-brand-green/[0.02] group-hover:to-brand-blue/[0.02] transition-all duration-500" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-brand-green bg-brand-green/10 px-3 py-1 rounded-full">
            <Newspaper size={14} />
            <span>{item.source}</span>
          </div>
          <ExternalLink size={18} className="text-white/20 group-hover:text-brand-green group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
        </div>

        <h3 className="text-lg md:text-xl font-bold font-display text-white mb-4 group-hover:text-brand-green transition-colors line-clamp-3 leading-snug">
          {item.title}
        </h3>

        <div className="mt-auto flex items-center gap-2 text-white/30 text-xs">
          <Calendar size={14} />
          <time dateTime={item.pubDate} title={format(pubDate, "PPpp", { locale: ptBR })}>
            {timeAgo}
          </time>
        </div>
      </div>
    </motion.a>
  );
}
