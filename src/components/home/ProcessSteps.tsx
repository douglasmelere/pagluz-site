"use client";

import { motion } from "framer-motion";
import { 
  Calculator, 
  SearchCheck, 
  FileText, 
  PenTool, 
  Zap, 
  Wallet 
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const STEPS = [
  {
    title: "Simulação Gratuita",
    description:
      "Você preenche nosso formulário rápido ou entra em contato conosco.",
    icon: Calculator,
    color: "bg-brand-green",
    textColor: "text-dark-bg",
  },
  {
    title: "Análise Rápida",
    description:
      "Nossos especialistas analisam seu histórico de consumo de energia.",
    icon: SearchCheck,
    color: "bg-[#3B82F6]",
    textColor: "text-white",
  },
  {
    title: "Proposta Personalizada",
    description:
      "Apresentamos uma proposta com a estimativa real de economia mensal e anual.",
    icon: FileText,
    color: "bg-brand-yellow",
    textColor: "text-dark-bg",
  },
  {
    title: "Assinatura Digital",
    description:
      "Você avalia a proposta e assina o contrato de forma 100% online.",
    icon: PenTool,
    color: "bg-brand-green",
    textColor: "text-dark-bg",
  },
  {
    title: "Injeção de Créditos",
    description:
      "Iniciamos a injeção dos créditos de energia solar ou eólica na sua conta.",
    icon: Zap,
    color: "bg-[#3B82F6]",
    textColor: "text-white",
  },
  {
    title: "Economia no Bolso",
    description:
      "A partir do próximo ciclo de faturamento, você já começa a sentir a economia.",
    icon: Wallet,
    color: "bg-brand-yellow",
    textColor: "text-dark-bg",
  },
];

export default function ProcessSteps() {
  return (
    <section
      className="py-24 md:py-32 bg-dark-bg relative overflow-hidden"
      id="processo"
    >
      {/* Section border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-border to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
              Nosso processo em{" "}
              <span className="text-gradient">6 passos</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-white/40">
              Simples, transparente e sem burocracia. Veja como é fácil começar
              a economizar.
            </p>
          </ScrollReveal>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Line (desktop only) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px hidden lg:block -translate-x-1/2">
            <div className="w-full h-full bg-gradient-to-b from-brand-green/40 via-brand-blue-light/30 to-brand-yellow/40" />
          </div>

          {STEPS.map((step, index) => {
            const Icon = step.icon;
            const isLeft = index % 2 === 0;
            
            return (
              <ScrollReveal key={index} delay={index * 0.08}>
                <div
                  className={`relative flex items-center mb-8 last:mb-0 lg:mb-14 ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div className={`w-full lg:w-[calc(50%-40px)] ${isLeft ? "lg:pr-0" : "lg:pl-0"}`}>
                    <div className="group relative p-6 md:p-8 rounded-2xl border border-white/10 bg-[#0d0d0d] transition-all duration-500 hover:border-brand-green/30 hover:bg-[#111111] overflow-hidden">
                      
                      <div className="relative z-10 flex items-start gap-5">
                        {/* Icon Container */}
                        <div className={`shrink-0 w-14 h-14 rounded-xl ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300`}>
                          <Icon size={24} className={step.textColor} strokeWidth={2.5} />
                        </div>

                        <div className="flex-1 min-w-0">
                          {/* Step label */}
                          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-green mb-2 block">
                            Passo {index + 1}
                          </span>
                          <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-brand-green transition-colors duration-300">
                            {step.title}
                          </h3>
                          <p className="text-white/50 text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Node (desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-20">
                    <div className={`w-11 h-11 rounded-full ${step.color} flex items-center justify-center text-sm font-bold font-display ${step.textColor} shadow-lg ring-4 ring-dark-bg`}>
                      {index + 1}
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden lg:block w-[calc(50%-40px)]" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-green/[0.02] blur-[150px] pointer-events-none rounded-full" />
    </section>
  );
}
