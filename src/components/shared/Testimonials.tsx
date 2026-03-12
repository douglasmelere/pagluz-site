"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const TESTIMONIALS = [
  {
    quote: "Desde que adotamos a PagLuz, nossa conta de luz caiu quase 20%! O procedimento foi descomplicado, tudo bem explicado e sem precisar de qualquer instalação. Indicamos para todo mundo!",
    authorName: "Posto Shell - Luzerna",
    authorRole: "Consumidor Comercial",
    image: "/assets/images/shell.png",
  },
  {
    quote: "Desde que adotamos a PagLuz, nossa conta de luz caiu quase 20%! O procedimento foi descomplicado, tudo bem explicado e sem precisar de qualquer instalação. Indicamos para todo mundo!",
    authorName: "Ponto do Café - Luzerna",
    authorRole: "Consumidor Comercial",
    image: "/assets/images/ponto-do-cafe.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Section border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-border to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <h3 className="text-3xl md:text-5xl font-bold font-display text-center text-white mb-16">
            O que nossos <span className="text-gradient">clientes</span> dizem
          </h3>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {TESTIMONIALS.map((t, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.15}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-dark-card rounded-2xl p-8 md:p-10 border border-dark-border relative transition-all duration-300 hover:border-dark-border-hover group"
              >
                {/* Giant Quote mark */}
                <Quote className="absolute top-6 left-6 w-16 h-16 text-brand-green/[0.06] -z-0 rotate-180" />
                
                <p className="text-white/50 italic text-base leading-relaxed relative z-10 font-light mb-8 pt-4">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-4 relative z-10 border-t border-dark-border pt-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden border border-dark-border-hover bg-dark-surface shrink-0">
                    <Image 
                      src={t.image} 
                      alt={t.authorName} 
                      width={56} 
                      height={56} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-white">{t.authorName}</h4>
                    <p className="text-white/30 text-sm">{t.authorRole}</p>
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
