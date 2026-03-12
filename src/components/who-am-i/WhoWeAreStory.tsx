"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function WhoWeAreStory() {
  return (
    <section className="bg-dark-bg py-20 md:py-24 relative">
      {/* Section border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-border to-transparent" />

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
            {/* Text Content */}
            <ScrollReveal direction="left" className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
                Nossa <span className="text-gradient">História</span>
              </h2>
              <div className="space-y-5 text-white/40 text-base font-light leading-relaxed">
                <p>
                  A PagLuz nasceu da visão de um grupo de empreendedores apaixonados por inovação e sustentabilidade, que identificaram uma oportunidade única no mercado de energia brasileiro.
                </p>
                <p>
                  Em 2024, enquanto o mundo enfrentava desafios sem precedentes, percebemos que muitas famílias e empresas buscavam formas de reduzir custos, enquanto geradores de energia renovável enfrentavam dificuldades para monetizar seus créditos de energia excedentes.
                </p>
                <p>
                  Nesse cenário, criamos uma plataforma inovadora que conecta de forma transparente e eficiente geradores de energia renovável a consumidores que desejam economizar em suas contas de luz.
                </p>
              </div>
            </ScrollReveal>

            {/* Image */}
            <ScrollReveal direction="right" className="w-full md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden border border-dark-border p-1 bg-dark-card">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-dark-surface">
                  <Image
                    src="/assets/images/team.jpeg"
                    alt="Fundadores da PagLuz e energia solar"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
