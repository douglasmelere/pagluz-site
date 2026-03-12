"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
}

export default function FAQAccordion({ 
  title = "Perguntas Frequentes", 
  subtitle = "Encontre respostas para as dúvidas mais comuns sobre como funciona a PagLuz.",
  items 
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-dark-bg overflow-hidden relative">
      {/* Section border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-border to-transparent" />

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
              {title.split(' ').map((word, i, arr) => {
                if (i === arr.length - 1) return <span key={i} className="text-gradient"> {word}</span>;
                return <span key={i}> {word}</span>;
              })}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-base text-white/40 leading-relaxed">
              {subtitle}
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <div className="max-w-3xl mx-auto space-y-3">
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index}
                  className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                    isOpen 
                      ? 'bg-dark-card border-brand-green/20' 
                      : 'bg-dark-card border-dark-border hover:border-dark-border-hover'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                  >
                    <h3 className={`text-base md:text-lg font-semibold font-display ${
                      isOpen ? 'text-brand-green' : 'text-white'
                    } transition-colors pr-8`}>
                      {item.question}
                    </h3>
                    <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300 ${
                      isOpen 
                        ? 'bg-brand-green/10 text-brand-green rotate-180' 
                        : 'bg-white/[0.04] text-white/30'
                    }`}>
                      <ChevronDown size={18} />
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-white/35 leading-relaxed font-light text-sm">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
