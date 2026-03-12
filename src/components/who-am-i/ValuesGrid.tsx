"use client";

import { motion } from "framer-motion";
import { 
  Leaf, Handshake, Lightbulb, Users, TrendingUp, Scale,
  Target, Eye, Heart
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const VALUES = [
  { icon: Leaf, title: "Sustentabilidade", description: "Acreditamos no poder transformador da energia limpa. Cada ação que tomamos visa contribuir para um futuro mais sustentável.", accent: "text-brand-green", accentBg: "bg-brand-green", span: "sm:col-span-2 lg:col-span-1", large: false },
  { icon: Handshake, title: "Transparência", description: "Construímos relações baseadas em confiança, com comunicação clara e processos transparentes para todos entenderem nosso sistema.", accent: "text-[#3B82F6]", accentBg: "bg-[#3B82F6]", span: "", large: false },
  { icon: Lightbulb, title: "Inovação", description: "Buscamos constantemente soluções criativas e disruptivas para os desafios do setor energético, investindo em tecnologia.", accent: "text-brand-yellow", accentBg: "bg-brand-yellow", span: "", large: false },
  { icon: Users, title: "Colaboração", description: "Acreditamos no poder do trabalho em equipe. Juntos, geradores e consumidores formam um ecossistema forte e sustentável.", accent: "text-brand-green", accentBg: "bg-brand-green", span: "", large: false },
  { icon: TrendingUp, title: "Eficiência", description: "Otimizamos processos e recursos para entregar o máximo valor possível a nossos parceiros e clientes.", accent: "text-[#3B82F6]", accentBg: "bg-[#3B82F6]", span: "", large: false },
  { icon: Scale, title: "Acessibilidade", description: "Trabalhamos para democratizar o acesso à energia limpa, tornando-a disponível para todos no Brasil.", accent: "text-brand-yellow", accentBg: "bg-brand-yellow", span: "sm:col-span-2 lg:col-span-1", large: false },
];

export default function ValuesGrid() {
  return (
    <section className="bg-dark-bg py-20 md:py-28 relative">
      {/* Section border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-border to-transparent" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
              Missão, Visão e <span className="text-gradient">Valores</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              Os pilares que sustentam cada decisão e ação da PagLuz.
            </p>
          </ScrollReveal>
        </div>

        {/* Missão (Destaque) + Visão e Propósito */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5 max-w-6xl mx-auto">
          {/* Missão - Card grande */}
          <ScrollReveal className="lg:col-span-2">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative bg-[#0d0d0d] rounded-2xl p-10 border border-white/[0.08] transition-all duration-500 hover:border-brand-green/30 h-full overflow-hidden"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-green via-brand-green/60 to-transparent opacity-60" />
              
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-brand-green/10 border border-brand-green/20 text-brand-green flex items-center justify-center rounded-2xl shrink-0 group-hover:bg-brand-green group-hover:text-dark-bg transition-all duration-300">
                  <Target size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-display text-white mb-4">Nossa Missão</h3>
                  <p className="text-white/45 text-base leading-relaxed">
                    Democratizar o acesso à energia renovável no Brasil, conectando geradores e consumidores com transparência e eficiência, promovendo economia financeira e sustentabilidade.
                  </p>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Visão */}
          <ScrollReveal delay={0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group bg-[#0d0d0d] rounded-2xl p-8 border border-white/[0.08] transition-all duration-500 hover:border-[#3B82F6]/30 h-full overflow-hidden relative"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#3B82F6] via-[#3B82F6]/60 to-transparent opacity-60" />
              
              <div className="w-14 h-14 bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] flex items-center justify-center rounded-2xl mb-5 group-hover:bg-[#3B82F6] group-hover:text-white transition-all duration-300">
                <Eye size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-3">Nossa Visão</h3>
              <p className="text-white/35 text-sm leading-relaxed">
                Ser a principal referência na gestão e distribuição de créditos de energia renovável no Brasil, transformando positivamente a forma como a sociedade acessa energia.
              </p>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Propósito - Full width banner */}
        <ScrollReveal className="max-w-6xl mx-auto mb-14">
          <div className="relative rounded-2xl bg-gradient-to-r from-[#0d0d0d] to-[#0f0f0f] border border-white/[0.08] p-8 md:p-10 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-yellow via-brand-yellow/60 to-transparent opacity-60" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/[0.02] blur-[120px] pointer-events-none rounded-full" />
            
            <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
              <div className="w-16 h-16 bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow flex items-center justify-center rounded-2xl shrink-0">
                <Heart size={32} strokeWidth={1.5} />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold font-display text-white mb-2">Nosso Propósito</h3>
                <p className="text-white/45 text-base leading-relaxed max-w-3xl">
                  Contribuir para um futuro mais sustentável e economicamente viável para todos, impulsionando a transição energética para fontes renováveis e acessíveis.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Nossos Valores */}
        <div className="text-center mb-12">
          <ScrollReveal>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Nossos Valores</h3>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {VALUES.map((value, i) => (
            <ScrollReveal key={i} delay={i * 0.06} className={value.span}>
              <div className={`group relative rounded-2xl bg-[#0d0d0d] border border-white/[0.08] transition-all duration-400 hover:border-white/15 overflow-hidden h-full ${value.large ? "p-8 md:p-10" : "p-7"}`}>
                {/* Top accent */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] ${value.accentBg} opacity-0 group-hover:opacity-60 transition-opacity duration-400`} />

                <value.icon size={value.large ? 28 : 22} className={`${value.accent} mb-4`} strokeWidth={1.5} />
                <h4 className={`${value.large ? "text-xl" : "text-base"} font-semibold text-white mb-2`}>{value.title}</h4>
                <p className="text-white/35 text-sm leading-relaxed">{value.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
