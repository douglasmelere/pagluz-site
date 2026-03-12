"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";

const STATS = [
  { value: 10, suffix: "+", label: "Usinas parceiras" },
  { value: 25, suffix: "%", label: "Aumento de rentabilidade (média)" },
  { value: 3.8, suffix: "MW", label: "Capacidade gerenciada", isFloat: true },
  { value: 97, suffix: "%", label: "Satisfação dos geradores" },
];

export default function GeneratorNumbers() {
  return (
    <section className="py-20 md:py-28 bg-dark-bg overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-border to-transparent" />

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
              Nossos <span className="text-gradient">Números</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-base text-white/40 leading-relaxed">
              Resultados concretos que demonstram o impacto positivo da PagLuz para geradores de energia renovável.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              className="bg-dark-card rounded-2xl p-8 border border-dark-border flex flex-col items-center justify-center h-full hover:border-dark-border-hover transition-all duration-300 group"
            >
              <div className="text-4xl md:text-5xl font-bold font-display text-gradient mb-3 flex items-center justify-center">
                 <AnimatedCounter 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  decimals={stat.isFloat ? 1 : 0} 
                 />
              </div>
              <p className="text-white/40 font-medium text-sm text-center">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
