"use client";

import BentoCard from "@/components/ui/BentoCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  Banknote,
  FileCheck2,
  Wrench,
  BarChart3,
  Leaf,
  Eye,
} from "lucide-react";

const FEATURES = [
  {
    icon: Banknote,
    title: "Economia Garantida",
    description:
      "Redução de até 30% na conta de luz todos os meses, previsível e garantida.",
    color: "text-brand-green",
    glowColor: "rgba(53, 204, 32, 0.35)",
    span: "md:col-span-2",
  },
  {
    icon: FileCheck2,
    title: "Sem Burocracia",
    description:
      "Cuidamos de tudo para você. Assinatura digital e integração direta com a concessionária.",
    color: "text-[#3B82F6]",
    glowColor: "rgba(59, 130, 246, 0.3)",
    span: "md:col-span-1",
  },
  {
    icon: Wrench,
    title: "Zero Obras",
    description:
      "Não instale nenhum equipamento. Receba energia descontada pela mesma rede de sempre.",
    color: "text-brand-yellow",
    glowColor: "rgba(245, 197, 24, 0.3)",
    span: "md:col-span-1",
  },
  {
    icon: BarChart3,
    title: "Gestão de Créditos",
    description:
      "Acompanhe tudo por relatórios claros, com controle total na sua mão.",
    color: "text-brand-green",
    glowColor: "rgba(110, 220, 95, 0.3)",
    span: "md:col-span-2",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description:
      "A energia injetada na rede é 100% fruto de fontes limpas. Você economiza ajudando o planeta.",
    color: "text-brand-green",
    glowColor: "rgba(53, 204, 32, 0.3)",
    span: "md:col-span-2",
  },
  {
    icon: Eye,
    title: "Transparência Total",
    description:
      "Relatórios mensais de economia fáceis de ler. Sem taxas ocultas ou fidelidades abusivas.",
    color: "text-brand-yellow",
    glowColor: "rgba(245, 197, 24, 0.25)",
    span: "md:col-span-1",
  },
];

export default function FeaturesBento() {
  return (
    <section
      className="py-24 bg-dark-bg relative overflow-hidden"
      id="funcionalidades"
    >
      {/* Section border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-border to-transparent" />

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
              Por que escolher a{" "}
              <span className="text-gradient">PagLuz</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-white/40">
              Nós conectamos quem produz energia limpa com quem quer economizar
              de forma simples e descomplicada.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal
                key={i}
                delay={i * 0.06}
                className={feature.span}
              >
                <BentoCard glowColor={feature.glowColor} className="h-full">
                  <div className="flex flex-col h-full">
                    {/* Icon */}
                    <div
                      className={`w-10 h-10 rounded-lg bg-white/[0.04] flex items-center justify-center mb-5 ${feature.color}`}
                    >
                      <Icon size={20} strokeWidth={1.5} />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold font-display text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </BentoCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
