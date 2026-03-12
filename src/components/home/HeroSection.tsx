"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, Shield, Leaf } from "lucide-react";
import ParticlesBackground from "@/components/ui/ParticlesBackground";
import FloatingOrbs from "@/components/ui/FloatingOrbs";

const textReveal = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.15,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-32 flex items-center overflow-hidden">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-dark-bg" />

      {/* Particles */}
      <ParticlesBackground />

      {/* Floating Orbs */}
      <FloatingOrbs variant="mixed" intensity="vibrant" />

      {/* Radial glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[50rem] h-[50rem] bg-brand-green/[0.04] rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-[20rem] h-[20rem] bg-brand-yellow/[0.03] rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textReveal}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-brand-green mb-8"
          >
            <Zap size={14} className="fill-brand-green" />
            <span className="text-xs font-semibold tracking-widest uppercase">
              A Revolução Energética Começou
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textReveal}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display text-white leading-[1.05] mb-8 tracking-tight"
          >
            Economize até{" "}
            <span className="text-gradient-warm">30%</span>
            <br />
            na sua conta de luz
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textReveal}
            className="text-lg md:text-xl text-white/50 mb-12 leading-relaxed max-w-2xl mx-auto font-light"
          >
            Conectamos você à energia limpa e renovável.{" "}
            <strong className="text-white/80 font-medium">
              Sem instalação de equipamentos
            </strong>
            , sem taxas escondidas, com economia garantida já no primeiro mês.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textReveal}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link
              href="#contato"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-green text-dark-bg font-bold text-base rounded-xl transition-all duration-300 hover:bg-brand-green-hover hover:shadow-[0_0_40px_rgba(53,204,32,0.3)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Simular Minha Economia</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>

            <Link
              href="#processo"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/10 text-white/80 font-medium text-base rounded-xl transition-all duration-300 hover:border-brand-green/40 hover:text-brand-green hover:bg-brand-green/[0.04]"
            >
              Como Funciona
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={textReveal}
            className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/30"
          >
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-brand-green/60" />
              <span>Adesão 100% digital</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={14} className="text-brand-yellow/60" />
              <span>Zero obras</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf size={14} className="text-brand-green/60" />
              <span>Energia 100% limpa</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent pointer-events-none" />
    </section>
  );
}
