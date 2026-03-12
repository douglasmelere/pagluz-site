"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const STEPS = [
  { num: "1", title: "Cadastro da usina", desc: "Preencha o formulário com informações sobre sua usina, como localização, capacidade e tecnologia." },
  { num: "2", title: "Análise técnica", desc: "Nossa equipe realiza uma análise técnica e financeira para determinar o potencial de seus créditos." },
  { num: "3", title: "Contrato e integração", desc: "Após aprovação, assinamos o contrato e integramos sua usina à nossa plataforma de gestão." },
  { num: "4", title: "Distribuição e faturamento", desc: "Seus créditos são distribuídos automaticamente e você recebe os pagamentos mensalmente." },
];

export default function GeneratorHowItWorks() {
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
              Conheça o processo simples e eficiente para conectar sua usina geradora à nossa rede de consumidores.
            </p>
          </ScrollReveal>
        </div>

        <div className="max-w-5xl mx-auto">
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
        </div>
      </div>
    </section>
  );
}
