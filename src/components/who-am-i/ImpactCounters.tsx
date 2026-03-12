"use client";

import { Users, Zap, TrendingDown, Leaf } from "lucide-react";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ImpactCounters() {
  const stats = [
    { 
      value: 1000, suffix: "+", label: "Consumidores Atendidos", 
      icon: Users, color: "text-brand-green", bg: "bg-brand-green/10", border: "border-brand-green/20",
      description: "Famílias e empresas economizando"
    },
    { 
      value: 10, suffix: "+", label: "Usinas Parceiras", 
      icon: Zap, color: "text-[#3B82F6]", bg: "bg-[#3B82F6]/10", border: "border-[#3B82F6]/20",
      description: "Geradores de energia limpa"
    },
    { 
      value: 25, suffix: "%", label: "Economia Média", 
      icon: TrendingDown, color: "text-brand-yellow", bg: "bg-brand-yellow/10", border: "border-brand-yellow/20",
      description: "De desconto nas contas de luz"
    },
    { 
      value: 63.5, suffix: "+", decimals: 1, label: "Ton. CO₂ Evitadas", 
      icon: Leaf, color: "text-brand-green", bg: "bg-brand-green/10", border: "border-brand-green/20",
      description: "Contribuindo para o planeta"
    },
  ];

  return (
    <section className="py-24 md:py-28 bg-[#070707] relative overflow-hidden">
      {/* Section border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-border to-transparent" />

      {/* Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3B82F6]/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-center text-white mb-4">
            Nosso <span className="text-gradient">Impacto</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-white/40 text-lg text-center max-w-2xl mx-auto mb-16">
            Números que refletem nosso compromisso com economia e sustentabilidade.
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group relative rounded-2xl bg-[#0d0d0d] border border-white/[0.08] p-7 text-center transition-all duration-500 hover:border-white/15 hover:bg-[#111111] overflow-hidden h-full">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl ${stat.bg} ${stat.border} border flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} className={stat.color} strokeWidth={1.5} />
                  </div>

                  {/* Number */}
                  <div className="text-4xl md:text-5xl font-bold font-display text-white mb-2">
                    <AnimatedCounter value={stat.value} decimals={stat.decimals || 0} suffix={stat.suffix} />
                  </div>

                  {/* Label */}
                  <p className="text-sm text-white/60 font-semibold mb-1">
                    {stat.label}
                  </p>
                  <p className="text-xs text-white/25">
                    {stat.description}
                  </p>

                  {/* Bottom accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-[2px] ${stat.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
