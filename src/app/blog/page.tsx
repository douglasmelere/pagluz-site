import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import NewsGrid from "@/components/blog/NewsGrid";
import FloatingOrbs from "@/components/ui/FloatingOrbs";
import CtaBanner from "@/components/shared/CtaBanner";
import { getEnergyNews } from "@/lib/rss";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

// Revalidar os dados no servidor a cada 1 hora (3600 segundos)
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Portal de Notícias",
  description:
    "Acompanhe as últimas novidades, tendências e atualizações sobre o mercado de energia no Brasil: energia renovável, mercado livre, geração distribuída e muito mais.",
};

// Componente para loading das notícias (Server Side Rendering fallback)
function NewsGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 w-full">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="h-48 md:h-64 rounded-2xl bg-white/[0.02] border border-white/5 animate-pulse flex items-center justify-center">
          <Loader2 className="animate-spin text-white/20" size={32} />
        </div>
      ))}
    </div>
  );
}

// Sub-componente Async para buscar notícias
async function AsyncNewsFeed() {
  const articles = await getEnergyNews();
  return <NewsGrid articles={articles} />;
}

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader 
        title="Portal de" 
        highlight="Notícias"
        description="Fique por dentro das últimas atualizações do setor elétrico, mercado livre de energia, fontes renováveis e sustentabilidade no Brasil."
      >
        <FloatingOrbs variant="blue" intensity="normal" />
      </PageHeader>
      
      <section className="py-20 md:py-32 relative bg-dark-bg min-h-[50vh]">
        {/* Background glow lines */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-dark-border to-transparent" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-4">
              Últimas Notícias do Setor
            </h2>
            <p className="text-white/40">
              Notícias em tempo real agregadas dos principais portais de energia do país para você não perder nenhuma tendência.
            </p>
          </div>

          <Suspense fallback={<NewsGridSkeleton />}>
            <AsyncNewsFeed />
          </Suspense>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
