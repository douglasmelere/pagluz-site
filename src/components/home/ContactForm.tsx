"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { sendSimulationEmail } from "@/lib/email";
import { formatInputAsCurrency } from "@/lib/calculator";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    consumption: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Auto-format currency
    if (name === "consumption") {
      setFormData((prev) => ({
        ...prev,
        [name]: formatInputAsCurrency(value),
      }));
      return;
    }

    // Auto-format phone (basic pattern: (99) 99999-9999)
    if (name === "phone") {
      let v = value.replace(/\D/g, "");
      if (v.length > 11) v = v.slice(0, 11);
      if (v.length > 2) v = `(${v.slice(0, 2)}) ` + v.slice(2);
      if (v.length > 10) v = v.slice(0, 10) + "-" + v.slice(10);
      setFormData((prev) => ({ ...prev, [name]: v }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const success = await sendSimulationEmail({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      consumption: formData.consumption,
    });

    if (success) {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", consumption: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } else {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full px-5 py-4 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder-white/20 outline-none transition-all duration-300 focus:border-brand-green/50 focus:bg-white/[0.05] focus:shadow-[0_0_0_4px_rgba(53,204,32,0.06)]";

  return (
    <section className="py-24 bg-dark-bg relative" id="contato">
      {/* Section border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-border to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl border border-dark-border bg-dark-card overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Left: Content & Branding */}
              <div className="lg:w-1/2 p-10 lg:p-16 relative overflow-hidden flex flex-col justify-center">
                {/* BG Glows */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/[0.06] blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/20 blur-[100px] rounded-full pointer-events-none" />

                <div className="relative z-10">
                  <ScrollReveal>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white mb-6">
                      Pronto para pagar menos na{" "}
                      <span className="text-gradient">conta de luz</span>?
                    </h2>
                  </ScrollReveal>
                  <ScrollReveal delay={0.1}>
                    <p className="text-white/40 text-base mb-8 leading-relaxed">
                      Deixe seus dados e nossa equipe entrará em contato com uma
                      proposta de economia feita sob medida para a sua casa ou
                      empresa.
                    </p>
                  </ScrollReveal>

                  <ul className="space-y-4">
                    {[
                      "Análise 100% gratuita",
                      "Atendimento personalizado",
                      "Sem compromisso ou fidelidade abusiva",
                    ].map((item, idx) => (
                      <ScrollReveal key={idx} delay={0.2 + idx * 0.08}>
                        <li className="flex items-center gap-3 text-white/60 text-sm">
                          <CheckCircle2
                            size={16}
                            className="text-brand-green shrink-0"
                          />
                          <span>{item}</span>
                        </li>
                      </ScrollReveal>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: Form */}
              <div className="lg:w-1/2 p-10 lg:p-16 border-t lg:border-t-0 lg:border-l border-dark-border">
                <h3 className="text-xl font-semibold text-white mb-8">
                  Meus Dados
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-medium text-white/30 mb-2 uppercase tracking-wider">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Ex: João Silva"
                      className={inputClasses}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-white/30 mb-2 uppercase tracking-wider">
                        Seu E-mail
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="joao@exemplo.com"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-white/30 mb-2 uppercase tracking-wider">
                        Telefone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        maxLength={15}
                        placeholder="(00) 00000-0000"
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/30 mb-2 uppercase tracking-wider">
                      Consumo Médio (R$)
                    </label>
                    <input
                      type="text"
                      name="consumption"
                      value={formData.consumption}
                      onChange={handleChange}
                      required
                      placeholder="R$ 0,00"
                      className={inputClasses}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full mt-2 flex items-center justify-center gap-3 px-8 py-4 bg-brand-green text-dark-bg font-bold text-base rounded-xl transition-all duration-300 hover:bg-brand-green-hover hover:shadow-[0_0_40px_rgba(53,204,32,0.25)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <span className="w-5 h-5 border-2 border-dark-bg border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Receber Proposta Gratuita</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-brand-green/10 border border-brand-green/20 text-brand-green rounded-xl flex items-center gap-3"
                    >
                      <CheckCircle2 size={20} />
                      <p className="font-medium text-sm">
                        Pronto! Recebemos sua solicitação. Em breve nossa equipe
                        entrará em contato!
                      </p>
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl flex items-center gap-3"
                    >
                      <AlertCircle size={20} />
                      <p className="font-medium text-sm">
                        Ocorreu um erro ao enviar. Por favor, tente novamente ou
                        nos chame no WhatsApp.
                      </p>
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
