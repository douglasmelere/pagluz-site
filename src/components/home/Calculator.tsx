"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, DollarSign, Wallet2, CheckCircle2, Home, Building2, Tractor, Factory, TrendingDown, Sparkles } from "lucide-react";
import {
  ConsumerType,
  calculateSavings,
  formatCurrency,
  formatInputAsCurrency,
  parseCurrencyString,
} from "@/lib/calculator";
import ScrollReveal from "@/components/ui/ScrollReveal";

const CONSUMER_TYPES = [
  { id: "residencial", label: "Residencial", icon: Home, color: "text-brand-green" },
  { id: "comercial", label: "Comercial", icon: Building2, color: "text-[#3B82F6]" },
  { id: "rural", label: "Rural", icon: Tractor, color: "text-brand-yellow" },
  { id: "industrial", label: "Industrial", icon: Factory, color: "text-white/60" },
] as const;

export default function Calculator() {
  const [billValueStr, setBillValueStr] = useState("R$ 500,00");
  const [consumerType, setConsumerType] = useState<ConsumerType>("residencial");
  const [isCalculated, setIsCalculated] = useState(false);

  const billValue = parseCurrencyString(billValueStr);
  const result = calculateSavings(billValue, consumerType);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatInputAsCurrency(e.target.value);
    setBillValueStr(formatted);
    setIsCalculated(false);
  };

  return (
    <section
      className="py-24 md:py-32 bg-dark-bg relative overflow-hidden"
      id="calculadora"
    >
      {/* Section border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-border to-transparent" />

      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-green/[0.02] blur-[150px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Text & Instructions */}
          <div>
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/[0.06] border border-brand-green/20 text-brand-green mb-6">
                <Sparkles size={14} className="fill-brand-green" />
                <span className="text-xs font-semibold tracking-widest uppercase">
                  Simulador Gratuito
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
                Descubra sua{" "}
                <span className="text-gradient">Economia</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-white/40 mb-10">
                Sem compromisso, sem obras, sem complicações. Calcule agora e
                veja quanto dinheiro a mais você terá no bolso com a PagLuz.
              </p>
            </ScrollReveal>

            <div className="space-y-5">
              {[
                { text: "100% Gratuito", sub: "Sem taxas de adesão." },
                { text: "Zero Obras", sub: "A energia continua chegando pela mesma distribuidora." },
                { text: "Sustentável", sub: "Energia injetada é 100% de fontes renováveis." },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={0.15 + i * 0.08}>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0d0d0d] border border-white/[0.06] hover:border-white/10 transition-colors">
                    <CheckCircle2
                      className="text-brand-green shrink-0 mt-0.5"
                      size={20}
                    />
                    <div>
                      <p className="text-white font-semibold text-sm">{item.text}</p>
                      <p className="text-white/35 text-sm">{item.sub}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right: Calculator Card */}
          <ScrollReveal delay={0.15} direction="right">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl shadow-brand-green/[0.03]">
              {/* Card Header */}
              <div className="px-8 md:px-10 pt-8 md:pt-10 pb-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-green flex items-center justify-center">
                    <TrendingDown size={20} className="text-dark-bg" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold font-display text-lg">Simulador de Economia</h3>
                    <p className="text-white/30 text-xs">Preencha os dados e veja sua economia</p>
                  </div>
                </div>
              </div>

              {/* Input Form Area */}
              <div className="px-8 md:px-10 pb-8 md:pb-10">
                {/* Profile Type Selection */}
                <div className="mb-8">
                  <label className="flex items-center gap-2 text-xs font-medium text-white/30 uppercase tracking-widest mb-4">
                    <span className="w-5 h-5 rounded-md bg-brand-green/10 text-brand-green flex items-center justify-center text-[10px] font-bold">1</span>
                    Qual o seu perfil?
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {CONSUMER_TYPES.map((type) => {
                      const TypeIcon = type.icon;
                      return (
                        <button
                          key={type.id}
                          onClick={() => {
                            setConsumerType(type.id);
                            setIsCalculated(false);
                          }}
                          className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all duration-300 ${
                            consumerType === type.id
                              ? "border-brand-green/40 bg-brand-green/[0.08] scale-[1.03] shadow-[0_0_20px_rgba(53,204,32,0.08)]"
                              : "border-white/[0.06] bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] text-white/40"
                          }`}
                        >
                          <TypeIcon 
                            size={28} 
                            className={consumerType === type.id ? "text-brand-green" : type.color}
                            strokeWidth={1.5}
                          />
                          <span
                            className={`text-xs font-semibold ${
                              consumerType === type.id
                                ? "text-brand-green"
                                : "text-white/40"
                            }`}
                          >
                            {type.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Bill Value Input */}
                <div>
                  <label className="flex items-center gap-2 text-xs font-medium text-white/30 uppercase tracking-widest mb-4">
                    <span className="w-5 h-5 rounded-md bg-brand-green/10 text-brand-green flex items-center justify-center text-[10px] font-bold">2</span>
                    Valor médio da sua conta de luz
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-5 text-white/20">
                      <DollarSign size={22} />
                    </span>
                    <input
                      type="text"
                      value={billValueStr}
                      onChange={handleInputChange}
                      placeholder="R$ 0,00"
                      onFocus={(e) => {
                        if (
                          e.target.value === "R$ 0,00" ||
                          e.target.value === ""
                        ) {
                          setBillValueStr("");
                        }
                      }}
                      onBlur={(e) => {
                        if (!e.target.value) setBillValueStr("R$ 0,00");
                        setIsCalculated(true);
                      }}
                      className="w-full pl-14 pr-6 py-5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-2xl font-bold text-white outline-none transition-all focus:border-brand-green/50 focus:bg-white/[0.05] focus:shadow-[0_0_0_4px_rgba(53,204,32,0.06)] placeholder:text-white/15"
                    />
                  </div>
                  {billValue > 0 && billValue < 50 && (
                    <p className="mt-3 text-sm text-red-400 flex items-center gap-2 opacity-90">
                      <span className="bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold shrink-0">
                        !
                      </span>
                      O valor mínimo da conta para obter desconto é R$ 50,00
                    </p>
                  )}
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

              {/* Results Area */}
              <div className="p-8 md:p-10 bg-gradient-to-b from-[#0a0a0a] to-[#070707] relative overflow-hidden">
                {/* Background Glows */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/[0.04] blur-[100px] rounded-full pointer-events-none" />

                <AnimatePresence mode="wait">
                  {!isCalculated || !result ? (
                    <motion.div
                      key="prompt"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="relative z-10 flex flex-col items-center justify-center text-center py-4"
                    >
                      <button
                        onClick={() => setIsCalculated(true)}
                        disabled={billValue < 50}
                        className="group w-full px-8 py-5 bg-brand-green text-dark-bg font-bold text-base rounded-xl transition-all duration-300 hover:bg-brand-green-hover hover:shadow-[0_0_40px_rgba(53,204,32,0.3)] hover:-translate-y-0.5 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                      >
                        <Sparkles size={18} className="fill-dark-bg" />
                        <span>Calcular Economia</span>
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                      </button>
                      {billValue === 0 && (
                        <p className="text-white/25 mt-4 text-sm">
                          Insira um valor acima (Mínimo R$ 50)
                        </p>
                      )}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative z-10 flex flex-col space-y-6"
                    >
                      {/* Main savings */}
                      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex flex-col md:w-1/2">
                          <span className="text-white/30 text-xs font-medium tracking-widest uppercase mb-2">
                            Economia Anual Estimada
                          </span>
                          <div className="text-4xl md:text-5xl font-bold text-gradient font-display">
                            {formatCurrency(result.yearlySavings)}
                          </div>
                          <span className="text-white/20 text-sm mt-1">por ano</span>
                        </div>

                        <div className="w-full md:w-px h-px md:h-20 bg-white/[0.06]" />

                        {/* Monthly savings */}
                        <div className="flex items-center gap-4 md:w-1/2 md:justify-end">
                          <div className="p-3 bg-brand-green/10 rounded-xl border border-brand-green/20">
                            <Wallet2
                              size={22}
                              className="text-brand-green"
                            />
                          </div>
                          <div>
                            <span className="block text-white/30 text-xs uppercase tracking-wider mb-1">
                              Desconto Mensal
                            </span>
                            <span className="text-2xl font-bold text-white">
                              {formatCurrency(result.monthlySavings)}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

                      {/* New bill comparison */}
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                        <div>
                          <span className="block text-white/30 text-xs tracking-wider mb-1">
                            Novo valor da conta:
                          </span>
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-white/25 line-through">
                              {formatCurrency(billValue)}
                            </span>
                            <ArrowRight size={14} className="text-white/20" />
                            <span className="text-2xl font-bold text-brand-green">
                              {formatCurrency(result.newBillAmount)}
                            </span>
                          </div>
                        </div>
                        <div className="px-3 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/20">
                          <span className="text-brand-green text-xs font-bold">
                            -{result.discountPercentage}% OFF
                          </span>
                        </div>
                      </div>

                      <a
                        href={`https://wa.me/5549998376140?text=Olá, simulei minha economia no site e o valor estimado é de ${formatCurrency(result.yearlySavings)} por ano. Quero validar minha proposta.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 mt-2 bg-brand-green text-dark-bg font-bold rounded-xl text-center transition-all duration-300 hover:bg-brand-green-hover hover:shadow-[0_0_30px_rgba(53,204,32,0.2)] hover:-translate-y-0.5 flex items-center justify-center gap-2"
                      >
                        <span>Garantir esse desconto</span>
                        <ArrowRight size={18} />
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom accent line */}
              <div className="h-[2px] w-full bg-gradient-to-r from-brand-green/60 via-brand-yellow/40 to-brand-green/60" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
