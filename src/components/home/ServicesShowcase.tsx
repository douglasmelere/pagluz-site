"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  Zap,
  TrendingUp,
  SearchCheck,
  Newspaper,
  ArrowRight,
} from "lucide-react";

export default function ServicesShowcase() {
  return (
    <section
      className="py-24 md:py-32 bg-dark-bg relative overflow-hidden"
      id="servicos"
    >
      {/* Section border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-border to-transparent" />

      {/* Faint decorative glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-yellow/[0.03] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-brand-green/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
              O que a PagLuz faz{" "}
              <span className="text-gradient-warm">por você</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-white/40 max-w-xl mx-auto">
              Não somos só desconto na conta de luz. Atuamos em toda a cadeia de
              energia — do consumidor ao gerador.
            </p>
          </ScrollReveal>
        </div>

        {/* ── BENTO GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {/* ─── Card 1: Desconto ─── */}
          <ScrollReveal delay={0.05}>
            <Link href="#contato" className="block h-full">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group relative h-full rounded-2xl border border-dark-border bg-dark-card p-8 md:p-10 overflow-hidden transition-colors duration-500 hover:border-brand-green/30"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-green/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center mb-6 text-brand-green group-hover:scale-110 transition-transform duration-300">
                    <Zap size={24} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-brand-green transition-colors duration-300">
                    Desconto na Conta de Luz
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-6">
                    Você recebe créditos de energia limpa direto na sua fatura e
                    paga até <strong className="text-white/70">30% menos</strong>{" "}
                    — sem instalar nada, sem obra, sem fidelidade abusiva.
                  </p>

                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Simular economia
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.div>
            </Link>
          </ScrollReveal>

          {/* ─── Card 2: Rentabilidade ─── */}
          <ScrollReveal delay={0.12}>
            <Link href="/gerador" className="block h-full">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group relative h-full rounded-2xl border border-dark-border bg-dark-card p-8 md:p-10 overflow-hidden transition-colors duration-500 hover:border-[#3B82F6]/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center mb-6 text-[#3B82F6] group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp size={24} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-[#3B82F6] transition-colors duration-300">
                    Rentabilidade para Geradores
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-6">
                    Tem uma usina solar ou eólica? Nós conectamos você a
                    consumidores qualificados e cuidamos de toda a gestão para{" "}
                    <strong className="text-white/70">maximizar sua receita</strong>.
                  </p>

                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#3B82F6] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Cadastrar usina
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.div>
            </Link>
          </ScrollReveal>

          {/* ─── Card 3: Consultoria — DESTAQUE ─── */}
          <ScrollReveal delay={0.18} className="md:col-span-2">
            <Link href="#contato" className="block">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group relative rounded-2xl border border-brand-yellow/20 bg-dark-card overflow-hidden transition-colors duration-500 hover:border-brand-yellow/40"
              >
                {/* "NOVO" badge */}
                <div className="absolute top-5 right-5 z-20">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow/15 border border-brand-yellow/25 text-brand-yellow text-[10px] font-bold tracking-[0.15em] uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-pulse" />
                    Novo
                  </span>
                </div>

                {/* Subtle BG glow */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand-yellow/[0.04] rounded-full blur-[120px] pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row">
                  {/* Left content */}
                  <div className="flex-1 p-8 md:p-10 lg:p-12">
                    <div className="w-12 h-12 rounded-xl bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center mb-6 text-brand-yellow group-hover:scale-110 transition-transform duration-300">
                      <SearchCheck size={24} strokeWidth={1.5} />
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold font-display text-white mb-3 group-hover:text-brand-yellow transition-colors duration-300">
                      Consultoria Energética
                    </h3>
                    <p className="text-white/45 text-sm md:text-base leading-relaxed max-w-lg">
                      Identificamos falhas nas suas cobranças de energia,
                      verificamos se a sua usina está rendendo o que deveria e
                      auditamos se a cooperativa está pagando corretamente.{" "}
                      <strong className="text-white/70">
                        Muitos clientes descobrem que estão perdendo dinheiro
                        sem saber.
                      </strong>
                    </p>
                  </div>

                  {/* Right — highlights column */}
                  <div className="md:w-72 lg:w-80 p-8 md:p-10 lg:p-12 border-t md:border-t-0 md:border-l border-dark-border flex flex-col justify-center gap-5">
                    {[
                      "Auditoria de faturas e cobranças",
                      "Verificação de rendimento de usina",
                      "Conferência de pagamentos",
                      "Recuperação de valores",
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 text-white/50 text-sm"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0" />
                        {item}
                      </div>
                    ))}

                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-yellow mt-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      Solicitar consultoria
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          </ScrollReveal>

          {/* ─── Card 4: Newsletter — DESTAQUE ─── */}
          <ScrollReveal delay={0.24} className="md:col-span-2">
            <Link href="/newsletter" className="block">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group relative rounded-2xl border border-brand-green-light/15 bg-dark-card overflow-hidden transition-colors duration-500 hover:border-brand-green-light/30"
              >
                {/* "NOVO" badge */}
                <div className="absolute top-5 right-5 z-20">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green-light/15 border border-brand-green-light/25 text-brand-green-light text-[10px] font-bold tracking-[0.15em] uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green-light animate-pulse" />
                    Novo
                  </span>
                </div>

                {/* Subtle BG glow */}
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-green-light/[0.03] rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row items-center p-8 md:p-10 lg:p-12 gap-8">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-brand-green-light/10 border border-brand-green-light/20 flex items-center justify-center text-brand-green-light shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Newspaper size={30} strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-brand-green-light transition-colors duration-300">
                      Newsletter PagLuz
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed max-w-xl">
                      Receba direto no e-mail ou WhatsApp as novidades do mercado
                      de energia, alertas de mudanças regulatórias e dicas
                      exclusivas de economia.{" "}
                      <strong className="text-white/65">Grátis e sem spam.</strong>
                    </p>
                  </div>

                  {/* CTA */}
                  <span className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-green-light/10 border border-brand-green-light/20 text-brand-green-light text-sm font-semibold group-hover:bg-brand-green-light/20 transition-all duration-300">
                    Assinar grátis
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.div>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
