"use client";

import { WHATSAPP_URL } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const STEPS = [
  { num: "1", title: "Solicite uma simulação", desc: "Preencha nosso formulário com informações básicas sobre seu consumo de energia atual para calcularmos sua economia potencial." },
  { num: "2", title: "Análise personalizada", desc: "Nossa equipe analisa seu perfil de consumo e elabora uma proposta personalizada detalhando sua economia mensal." },
  { num: "3", title: "Assinatura do contrato", desc: "Após aprovar a proposta, assinamos o contrato digitalmente e iniciamos o processo junto à distribuidora de energia." },
  { num: "4", title: "Comece a economizar", desc: "Em até 60 dias, sua conta de luz já virá com o desconto aplicado. Sem instalação, sem burocracia, apenas economia!" },
];

export default function ConsumerHowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-dark-bg overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-border to-transparent" />

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
              Como <span className="text-gradient">Funciona</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-base text-white/40 leading-relaxed">
              O processo é simples e totalmente descomplicado. Veja como você pode começar a economizar na sua conta de luz em apenas 4 passos:
            </p>
          </ScrollReveal>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Steps */}
          <div className="relative">
            {/* Center line (desktop) */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.04] hidden md:block -translate-x-1/2" />

            <div className="space-y-8 md:space-y-12">
              {STEPS.map((step, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <ScrollReveal key={i} delay={i * 0.08}>
                    <div className={`group relative flex items-start pl-20 md:pl-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                      {/* Text content */}
                      <div className={`w-full md:w-[calc(50%-48px)] ${isLeft ? "md:text-right" : "md:text-left"}`}>
                        <h3 className="text-lg md:text-xl font-semibold font-display text-white mb-2 group-hover:text-brand-green transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-white/35 text-sm leading-relaxed">
                          {step.desc}
                        </p>
                      </div>

                      {/* Center number */}
                      <div className="absolute left-0 md:static md:w-24 flex justify-center shrink-0">
                        <span className="text-5xl md:text-6xl font-bold font-display text-white/[0.06] group-hover:text-brand-green/30 transition-colors duration-500 select-none">
                          {step.num}
                        </span>
                      </div>

                      {/* Spacer */}
                      <div className="hidden md:block w-[calc(50%-48px)]" />
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          <ScrollReveal delay={0.5}>
            <div className="mt-12 text-center">
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-brand-green text-dark-bg font-bold text-base rounded-xl transition-all duration-300 hover:bg-brand-green-hover hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(53,204,32,0.25)] group"
              >
                <span>Quero economizar agora</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
