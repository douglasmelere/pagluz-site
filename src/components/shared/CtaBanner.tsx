"use client";

import { motion } from "framer-motion";
import { ArrowRight, HeadphonesIcon } from "lucide-react";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CtaBanner() {
  return (
    <section className="bg-dark-bg py-20 px-4 relative">
      {/* Section border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-border to-transparent" />

      <div className="container mx-auto">
        <ScrollReveal>
          <motion.div 
            whileHover={{ scale: 1.005 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="max-w-5xl mx-auto bg-dark-card rounded-2xl p-10 md:p-16 relative overflow-hidden border border-dark-border"
          >
            {/* Background Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/[0.05] rounded-full translate-x-1/4 -translate-y-1/4 blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/10 rounded-full -translate-x-1/3 translate-y-1/3 blur-[100px]" />
            </div>
            
            <div className="relative z-10 text-center flex flex-col items-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
                Faça parte desta <span className="text-gradient">revolução energética</span>
              </h2>
              <p className="text-white/40 text-base md:text-lg max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Junte-se a milhares de brasileiros que já estão economizando em suas contas de luz enquanto contribuem para um planeta mais sustentável.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link 
                  href="/#contato" 
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-green text-dark-bg font-bold text-base rounded-xl transition-all duration-300 hover:bg-brand-green-hover hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(53,204,32,0.25)]"
                >
                  <span>Solicitar simulação gratuita</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/10 text-white/70 font-medium text-base hover:border-brand-green/40 hover:text-brand-green rounded-xl transition-all duration-300 hover:bg-brand-green/[0.04] hover:-translate-y-0.5"
                >
                  <HeadphonesIcon size={18} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                  <span>Fale com um consultor</span>
                </a>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
