"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const TESTIMONIALS = [
  {
    quote: "Depois de investir em uma usina solar de 75 kWp, enfrentamos o desafio de gerenciar os créditos. A PagLuz simplificou todo o processo, eliminando a burocracia e aumentando nossa rentabilidade em mais de 25%. Recomendamos muito!",
    authorName: "Pedro Mendes",
    authorRole: "Proprietário de Usina Solar, Concórdia - SC",
    image: "/assets/images/icone-homem-2.png",
  },
  {
    quote: "Investimos em uma usina de 75 kW, e o nosso maior desafio foi escolher em qual cooperativa alocar a usina. Na grande maioria, o valor pago é muito baixo. Foi então que conhecemos a PagLuz, uma empresa que faz a gestão de um modo diferente, permitindo que a gente tenha maior controle sobre o nosso investimento e uma rentabilidade muito maior.",
    authorName: "Lucimara Hoffelder",
    authorRole: "Proprietária de UFV, Luzerna - SC",
    image: "/assets/images/icone-mulher.png",
  },
  {
    quote: "Construímos uma usina de 300 kW e, até então, acreditávamos que as únicas opções eram cooperativas ou que o mercado era bastante limitado. Foi então que conhecemos a PagLuz, uma gestora de créditos de energia que nos proporcionou total liberdade para administrar a nossa usina, além de oferecer mais rentabilidade e transparência em todo o processo.",
    authorName: "Roberto Santos",
    authorRole: "Proprietário de UFV, Lages - SC",
    image: "/assets/images/icone-homem.png",
  },
];

export default function GeneratorTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 md:py-28 bg-dark-bg relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-border to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-center text-white mb-6">
            Histórias de <span className="text-gradient">Sucesso</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-base text-white/40 text-center max-w-3xl mx-auto mb-16">
            Conheça alguns geradores que já estão maximizando seus rendimentos com a PagLuz.
          </p>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto relative px-4 sm:px-12">
           <AnimatePresence mode="wait">
             <motion.div
               key={currentIndex}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -20 }}
               transition={{ duration: 0.3 }}
               className="bg-dark-card rounded-2xl p-8 md:p-12 border border-dark-border flex flex-col md:flex-row gap-8 items-center"
             >
                <div className="md:w-1/3 flex flex-col items-center shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border border-dark-border-hover bg-dark-surface mb-4">
                    <Image 
                      src={TESTIMONIALS[currentIndex].image} 
                      alt={TESTIMONIALS[currentIndex].authorName}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-xl text-white text-center">
                    {TESTIMONIALS[currentIndex].authorName}
                  </h4>
                  <p className="text-brand-green/80 text-sm text-center font-medium mt-1">
                    {TESTIMONIALS[currentIndex].authorRole}
                  </p>
                </div>

                <div className="md:w-2/3 relative">
                  <Quote className="absolute -top-6 -left-6 w-20 h-20 text-brand-green/[0.05] -z-0 rotate-180" />
                  <p className="text-white/50 italic text-lg leading-relaxed relative z-10 font-light">
                    "{TESTIMONIALS[currentIndex].quote}"
                  </p>
                </div>
             </motion.div>
           </AnimatePresence>

           {/* Controls */}
           <button 
             onClick={prevSlide}
             className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-dark-surface border border-dark-border rounded-full flex items-center justify-center text-white/50 hover:text-white hover:border-dark-border-hover hover:scale-110 transition-all z-20 group"
             aria-label="Anterior"
           >
             <ChevronLeft className="group-hover:-translate-x-0.5 transition-transform" />
           </button>
           <button 
             onClick={nextSlide}
             className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-dark-surface border border-dark-border rounded-full flex items-center justify-center text-white/50 hover:text-white hover:border-dark-border-hover hover:scale-110 transition-all z-20 group"
             aria-label="Próximo"
           >
             <ChevronRight className="group-hover:translate-x-0.5 transition-transform" />
           </button>

           <div className="flex justify-center mt-8 gap-2">
             {TESTIMONIALS.map((_, idx) => (
               <button 
                 key={idx} 
                 onClick={() => setCurrentIndex(idx)}
                 className={`w-2.5 h-2.5 rounded-full transition-all ${currentIndex === idx ? "bg-brand-green w-6" : "bg-dark-border hover:bg-dark-border-hover"}`}
                 aria-label={`Ver slide ${idx + 1}`}
               />
             ))}
           </div>
        </div>
      </div>
    </section>
  );
}
