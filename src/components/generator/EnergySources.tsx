"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sun, Wind, Leaf } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const SOURCES = [
  {
    title: "Energia Solar",
    description: "Usinas fotovoltaicas que captam a energia do sol para transformá-la em eletricidade limpa.",
    min: "Mínimo: 75 kWp",
    icon: Sun,
    iconColor: "text-brand-yellow",
    image: "/assets/images/usina-solar-2.jpg",
  },
  {
    title: "Energia Eólica",
    description: "Usinas que utilizam a força dos ventos para gerar energia através de aerogeradores eficientes.",
    min: "Mínimo: 500 kW",
    icon: Wind,
    iconColor: "text-brand-blue-light",
    image: "/assets/images/energia-eólica.jpg",
  },
  {
    title: "Biomassa",
    description: "Usinas que geram energia a partir de resíduos orgânicos, promovendo sustentabilidade.",
    min: "Mínimo: 1 MW",
    icon: Leaf,
    iconColor: "text-brand-green",
    image: "/assets/images/usina-biomassa.jpg",
  },
];

export default function EnergySources() {
  return (
    <section className="py-20 md:py-28 bg-dark-bg relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-border to-transparent" />

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
              Fontes de <span className="text-gradient">Energia</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-base text-white/40 leading-relaxed">
              Trabalhamos com diversos tipos de usinas geradoras de energia renovável. Conheça as fontes que aceitamos.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {SOURCES.map((source, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <motion.div 
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-2xl overflow-hidden bg-dark-card border border-dark-border group transition-all duration-300 hover:border-dark-border-hover h-full flex flex-col"
              >
                <div className="h-48 md:h-56 relative overflow-hidden">
                  <div className="absolute inset-0 bg-dark-bg/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                  <Image 
                    src={source.image} 
                    alt={source.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {source.title}
                  </h3>
                  <p className="text-white/40 mb-6 text-sm leading-relaxed flex-grow">
                    {source.description}
                  </p>
                  <div className="flex justify-between items-center mt-auto pt-5 border-t border-dark-border">
                    <span className="text-brand-green font-medium text-xs bg-brand-green/[0.08] px-3 py-1.5 rounded-full">
                      {source.min}
                    </span>
                    <source.icon className={`w-5 h-5 ${source.iconColor}`} />
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
