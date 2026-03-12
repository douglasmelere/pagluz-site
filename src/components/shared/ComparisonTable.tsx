"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const COMPARISON_DATA = [
  { feature: "Economia imediata", traditional: false, solar: false, pagluz: true },
  { feature: "Investimento inicial", traditional: "R$ 0", solar: "R$ 15.000 a R$ 50.000", pagluz: "R$ 0" },
  { feature: "Tempo de instalação", traditional: "Imediato", solar: "1 a 3 meses", pagluz: "Sem instalação" },
  { feature: "Economia média", traditional: "0%", solar: "Até 95% (após payback)", pagluz: "Até 30%" },
  { feature: "Manutenção necessária", traditional: false, solar: true, pagluz: false },
  { feature: "Preocupação com clima", traditional: false, solar: true, pagluz: false },
  { feature: "Fidelidade", traditional: "Não tem", solar: "Sistema permanente", pagluz: "Mínimo 12 meses" },
  { feature: "Energia renovável", traditional: false, solar: true, pagluz: true },
];

export default function ComparisonTable() {
  const renderCell = (val: string | boolean) => {
    if (typeof val === "boolean") {
      return val ? (
        <Check className="mx-auto text-brand-green w-5 h-5" />
      ) : (
        <X className="mx-auto text-red-400/60 w-5 h-5" />
      );
    }
    return <span className="font-medium text-white/60 text-sm">{val}</span>;
  };

  return (
    <section className="py-20 md:py-28 bg-dark-bg relative">
      {/* Section border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-border to-transparent" />

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
              Por que escolher a <span className="text-gradient">PagLuz</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-base text-white/40 leading-relaxed">
              Compare as opções disponíveis no mercado e entenda por que somos a melhor escolha para reduzir sua conta de luz.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto overflow-x-auto rounded-2xl border border-dark-border"
          >
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-dark-card">
                  <th className="p-5 text-sm font-semibold font-display text-white/60 w-1/4 uppercase tracking-wider">Vantagens</th>
                  <th className="p-5 text-center text-sm text-white/40 w-1/4">Conta Tradicional</th>
                  <th className="p-5 text-center text-sm text-white/40 w-1/4">Instalação Solar</th>
                  <th className="p-5 text-center w-1/4 bg-brand-green/10 text-brand-green font-bold text-sm">
                    PagLuz
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_DATA.map((row, i) => (
                  <tr 
                    key={i} 
                    className={`border-t border-dark-border transition-colors ${
                      i % 2 === 0 ? "bg-dark-bg" : "bg-dark-surface"
                    } hover:bg-dark-card-hover`}
                  >
                    <td className="p-4 font-medium text-white/70 text-sm border-r border-dark-border">{row.feature}</td>
                    <td className="p-4 text-center border-r border-dark-border">{renderCell(row.traditional)}</td>
                    <td className="p-4 text-center border-r border-dark-border">{renderCell(row.solar)}</td>
                    <td className="p-4 text-center bg-brand-green/[0.04] border-l border-brand-green/20">
                      {renderCell(row.pagluz)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
