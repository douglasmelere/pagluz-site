"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const MILESTONES = [
  {
    year: "2024",
    title: "O Início da PagLuz",
    description:
      "Um grupo de empreendedores apaixonados por inovação e sustentabilidade identificou uma oportunidade única no mercado de energia brasileiro.",
  },
  {
    year: "2024",
    title: "Primeira Usina Parceira",
    description:
      "Firmamos nossa primeira parceria com uma usina solar em Santa Catarina, dando início à operação de gestão de créditos.",
  },
  {
    year: "2024",
    title: "Primeiros Consumidores",
    description:
      "Nossos primeiros clientes começaram a economizar em suas contas de luz, validando o modelo de negócio da PagLuz.",
  },
  {
    year: "2025",
    title: "Expansão Regional",
    description:
      "Expandimos nossa operação para múltiplas cidades em Santa Catarina, alcançando mais de 500 consumidores atendidos.",
  },
  {
    year: "2025",
    title: "Plataforma Digital",
    description:
      "Lançamos nossa plataforma digital de gestão, permitindo que geradores e consumidores acompanhem tudo em tempo real.",
  },
  {
    year: "2026",
    title: "Rumo ao Futuro",
    description:
      "Com mais de 1.000 consumidores e 10 usinas parceiras, continuamos crescendo e inovando no mercado de energia renovável.",
  },
];

export default function Timeline() {
  return (
    <section className="py-20 md:py-28 bg-dark-bg relative overflow-hidden">
      {/* Section border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-border to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
              Nossa <span className="text-gradient">Jornada</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              Do sonho à realidade: conheça os marcos que definiram a trajetória da PagLuz.
            </p>
          </ScrollReveal>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central line — mobile left, desktop center */}
          <div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 bg-white/[0.06]" />

          <div className="space-y-10 md:space-y-14">
            {MILESTONES.map((milestone, index) => {
              const isLeft = index % 2 === 0;
              const showYear =
                index === 0 || MILESTONES[index - 1].year !== milestone.year;

              return (
                <ScrollReveal key={index} delay={index * 0.06}>
                  {/* Mobile: always left-aligned */}
                  {/* Desktop: alternating */}
                  <div
                    className={`relative pl-10 md:pl-0 flex ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div className={`w-full md:w-[calc(50%-24px)] ${isLeft ? "md:text-right" : "md:text-left"}`}>
                      {showYear && (
                        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-brand-green/80 mb-2">
                          {milestone.year}
                        </span>
                      )}
                      <h3 className="text-lg md:text-xl font-semibold font-display text-white mb-1">
                        {milestone.title}
                      </h3>
                      <p className="text-white/35 text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>

                    {/* Center dot — mobile absolute left, desktop absolute center */}
                    <div className="absolute left-0 md:left-1/2 top-[6px] md:-translate-x-1/2 z-10">
                      <div className="w-[15px] h-[15px] md:w-[17px] md:h-[17px] rounded-full border-[3px] border-white/15 bg-dark-bg" />
                    </div>

                    {/* Spacer for the other side (desktop only) */}
                    <div className="hidden md:block w-[calc(50%-24px)]" />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
