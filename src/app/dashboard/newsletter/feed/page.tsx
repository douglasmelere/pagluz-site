"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { apiFetch } from "@/lib/api";
import { 
  Activity, 
  BookOpen, 
  AlertCircle, 
  TrendingUp, 
  Sparkles, 
  Zap, 
  ArrowRight,
  Settings
} from "lucide-react";
import Link from "next/link";

export default function NewsletterPremiumFeed() {
  const router = useRouter();
  const { user, token, isLoading: authLoading } = useAuth();
  
  const [loading, setLoading] = useState(true);
  const [feed, setFeed] = useState({ macroTrends: [], regularNews: [] });
  const [error, setError] = useState("");

  useEffect(() => {
    if (!authLoading && !token) {
      router.push("/login?redirect=/dashboard/newsletter/feed");
    }
  }, [token, authLoading, router]);

  useEffect(() => {
    async function loadIntelligence() {
      if (!token) return;

      try {
        setLoading(true);
        // apiFetch injeta o Bearer automaticamente e retorna o payload via response.json()
        const response = await apiFetch("/newsletter/feed");
        
        // Em Axios seria response.data.data. Com apiFetch o json puro é retornado.
        const feedData = response?.data || response;
        
        setFeed({
          macroTrends: feedData?.macroTrends || [],
          regularNews: feedData?.regularNews || []
        });
      } catch (err: any) {
        setError(err.message || "Verifique se seu plano tem acesso à Inteligência Premium.");
      } finally {
        setLoading(false);
      }
    }
    
    if (token && !authLoading) {
      loadIntelligence();
    }
  }, [token, authLoading]);

  if (authLoading || loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-8 bg-dark-bg">
        <div className="flex flex-col items-center animate-pulse">
          <Zap className="w-12 h-12 text-brand-green mb-4 animate-bounce" />
          <div className="text-xl text-white font-medium">Sintetizando inteligência de mercado...</div>
          <div className="text-white/50 text-sm mt-2">Nossa IA está compilando os dados.</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-8 bg-dark-bg">
        <div className="max-w-md w-full bg-dark-surface border border-dark-border rounded-2xl p-8 text-center shadow-xl">
          <AlertCircle className="w-16 h-16 text-brand-yellow mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Acesso Restrito</h2>
          <p className="text-white/60 mb-8">{error}</p>
          <a 
            href="/dashboard/newsletter" 
            className="inline-flex justify-center w-full px-6 py-4 bg-brand-green text-brand-blue-dark font-bold rounded-xl hover:bg-brand-green-hover transition-colors"
          >
            Gerenciar Assinatura
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-bg py-8 md:py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* HEADER */}
        <header className="relative flex flex-col md:flex-row gap-6 justify-between md:items-end">
           {/* Glow background */}
           <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-green/10 rounded-full blur-[100px] pointer-events-none" />
           
           <div className="relative z-10">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-sm font-semibold mb-6">
               <Sparkles className="w-4 h-4" />
               Premium Intelligence
             </div>
             <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-4 tracking-tight">
               PagLuz <span className="text-gradient">Intelligence Hub</span>
             </h1>
             <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
               Seu resumo estratégico formatado por IA. Receba todos os dias insights diretos, projeções macro e o impacto real das notícias na sua operação.
             </p>
           </div>
           
           <div className="relative z-10 flex shrink-0">
             <Link 
               href="/dashboard/newsletter"
               className="inline-flex items-center gap-2 px-5 py-3 bg-white/[0.03] border border-white/10 hover:bg-white/10 hover:border-white/20 text-white rounded-xl transition-all font-medium text-sm w-full md:w-auto justify-center"
             >
               <Settings className="w-4 h-4 text-white/70" />
               Preferências da IA
             </Link>
           </div>
        </header>

        {/* 🚀 MACROTENDÊNCIAS */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-green-light mb-8 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-brand-green" />
            Projeções Macro (PagLuz)
          </h2>
          <div className="grid gap-6">
            {feed.macroTrends.map((macro: any) => (
              <div key={macro.id} className="p-6 md:p-8 bg-dark-surface border border-brand-green/20 rounded-2xl relative overflow-hidden group hover:border-brand-green/40 transition-colors">
                {/* Glow Overlay no hover */}
                <div className="absolute inset-0 bg-brand-green/[0.02] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                
                <h3 className="text-2xl font-semibold text-white mb-6 relative z-10">
                  {macro.title}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8 relative z-10">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-brand-green font-bold bg-brand-green/10 border border-brand-green/20 px-3 py-1 rounded-md">
                      <Activity className="w-4 h-4" /> Visão Macro
                    </div>
                    <p className="text-white/70 text-base leading-relaxed">
                      {macro.executiveSummary}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-brand-yellow font-bold bg-brand-yellow/10 border border-brand-yellow/20 px-3 py-1 rounded-md">
                      <Zap className="w-4 h-4" /> Impacto Tático
                    </div>
                    <p className="text-white/70 text-base leading-relaxed">
                      {macro.marketImpact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {(!feed.macroTrends || feed.macroTrends.length === 0) && (
              <div className="p-12 bg-dark-surface border border-dark-border border-dashed rounded-2xl text-center text-white/40">
                A IA não detectou projeções macro urgentes hoje. Acervos serão atualizados em breve.
              </div>
            )}
          </div>
        </section>

        {/* 📰 NOTÍCIAS DIÁRIAS */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-8 flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-white/50" />
            Agenda Estratégica Diária
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {feed.regularNews.map((news: any) => (
               <div key={news.id} className="p-6 bg-dark-surface border border-dark-border rounded-xl hover:border-dark-border-hover transition-colors flex flex-col h-full group">
                  <div className="flex flex-wrap gap-2 mb-5">
                    {news.tags && news.tags.map((tag: string, i: number) => (
                      <span key={i} className="px-2 py-1 bg-dark-bg border border-dark-border rounded-md text-[10px] uppercase tracking-wider text-white/50 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h4 className="text-xl font-semibold text-white mb-4 leading-snug">{news.title}</h4>
                  
                  <p className="text-white/60 text-base mb-8 flex-grow leading-relaxed">
                    {news.executiveSummary}
                  </p>
                  
                  <a 
                    href={`/n/${news.id}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-2 text-brand-green font-semibold text-sm hover:text-brand-green-light transition-colors"
                  >
                     Ler na Íntegra 
                     <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
               </div>
            ))}
          </div>
          
          {(!feed.regularNews || feed.regularNews.length === 0) && (
            <div className="p-10 bg-dark-surface border border-dark-border border-dashed rounded-2xl text-center text-white/40">
              O radar de notícias ainda não identificou destaques para o seu filtro hoje.
            </div>
          )}
        </section>

      </div>
    </div>
  );
}
