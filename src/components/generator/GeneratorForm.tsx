"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { sendGeneratorEmail } from "@/lib/email";
import ScrollReveal from "@/components/ui/ScrollReveal";

const ESTADOS = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", 
  "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
];

export default function GeneratorForm() {
  const [formData, setFormData] = useState({
    nome: "", email: "", telefone: "", cargo: "", nome_usina: "",
    tipo_energia: "", capacidade_kw: "", distribuidora_energia: "",
    estado_usina: "", cidade_usina: "", mensagem_adicional: "",
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === "telefone") {
      let v = value.replace(/\D/g, "");
      if (v.length > 11) v = v.slice(0, 11);
      if (v.length > 2) v = `(${v.slice(0, 2)}) ` + v.slice(2);
      if (v.length > 10) v = v.slice(0, 10) + "-" + v.slice(10);
      setFormData(prev => ({ ...prev, [name]: v }));
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const success = await sendGeneratorEmail(formData);

    if (success) {
      setStatus("success");
      setFormData({
        nome: "", email: "", telefone: "", cargo: "", nome_usina: "",
        tipo_energia: "", capacidade_kw: "", distribuidora_energia: "",
        estado_usina: "", cidade_usina: "", mensagem_adicional: "",
      });
      setTimeout(() => setStatus("idle"), 5000);
    } else {
      setStatus("error");
    }
  };

  return (
    <section className="py-20 md:py-28 bg-dark-bg relative" id="cadastro">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-border to-transparent" />

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
              Cadastre sua <span className="text-gradient">Usina</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-base text-white/40 leading-relaxed">
              Preencha o formulário abaixo para iniciar o processo de análise e cadastro da sua usina geradora em nossa plataforma.
            </p>
          </ScrollReveal>
        </div>
        
        <ScrollReveal delay={0.2}>
          <div className="max-w-4xl mx-auto bg-dark-card p-8 md:p-12 rounded-2xl border border-dark-border">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
              <div className="md:col-span-2">
                <h3 className="text-lg font-bold text-white border-b border-dark-border pb-3 mb-2">Dados do Responsável</h3>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Nome Completo</label>
                <input type="text" name="nome" value={formData.nome} onChange={handleChange} required placeholder="Seu nome completo" className="w-full px-5 py-3 bg-dark-bg border border-dark-border rounded-xl text-white placeholder-white/20 outline-none transition-all focus:border-brand-green focus:shadow-[0_0_0_4px_rgba(53,204,32,0.1)]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">E-mail</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="seu.email@dominio.com" className="w-full px-5 py-3 bg-dark-bg border border-dark-border rounded-xl text-white placeholder-white/20 outline-none transition-all focus:border-brand-green focus:shadow-[0_0_0_4px_rgba(53,204,32,0.1)]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Telefone</label>
                <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} required placeholder="(XX) XXXXX-XXXX" maxLength={15} className="w-full px-5 py-3 bg-dark-bg border border-dark-border rounded-xl text-white placeholder-white/20 outline-none transition-all focus:border-brand-green focus:shadow-[0_0_0_4px_rgba(53,204,32,0.1)]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Cargo / Posição</label>
                <input type="text" name="cargo" value={formData.cargo} onChange={handleChange} required placeholder="Ex: Proprietário, Gerente" className="w-full px-5 py-3 bg-dark-bg border border-dark-border rounded-xl text-white placeholder-white/20 outline-none transition-all focus:border-brand-green focus:shadow-[0_0_0_4px_rgba(53,204,32,0.1)]" />
              </div>
              
              <div className="md:col-span-2 mt-4">
                <h3 className="text-lg font-bold text-white border-b border-dark-border pb-3 mb-2">Dados da Usina</h3>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Nome da Usina <span className="text-white/30 font-normal">(Opcional)</span></label>
                <input type="text" name="nome_usina" value={formData.nome_usina} onChange={handleChange} placeholder="Ex: Usina Solar Alegria" className="w-full px-5 py-3 bg-dark-bg border border-dark-border rounded-xl text-white placeholder-white/20 outline-none transition-all focus:border-brand-green focus:shadow-[0_0_0_4px_rgba(53,204,32,0.1)]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Tipo de Energia Gerada</label>
                <select name="tipo_energia" value={formData.tipo_energia} onChange={handleChange} required className="w-full px-5 py-3 bg-dark-bg border border-dark-border rounded-xl text-white outline-none transition-all focus:border-brand-green focus:shadow-[0_0_0_4px_rgba(53,204,32,0.1)] appearance-none">
                  <option value="" disabled className="text-white/20">Selecione o tipo...</option>
                  <option value="Solar Fotovoltaica">Solar Fotovoltaica</option>
                  <option value="Eólica">Eólica</option>
                  <option value="Biomassa">Biomassa</option>
                  <option value="CGH / PCH">CGH / PCH (Hidrelétrica)</option>
                  <option value="Outra">Outra</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Capacidade Instalada (kWp ou kW)</label>
                <input type="number" name="capacidade_kw" value={formData.capacidade_kw} onChange={handleChange} required placeholder="Ex: 75" className="w-full px-5 py-3 bg-dark-bg border border-dark-border rounded-xl text-white placeholder-white/20 outline-none transition-all focus:border-brand-green focus:shadow-[0_0_0_4px_rgba(53,204,32,0.1)]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Distribuidora de Energia Local</label>
                <input type="text" name="distribuidora_energia" value={formData.distribuidora_energia} onChange={handleChange} required placeholder="Ex: Celesc, Copel" className="w-full px-5 py-3 bg-dark-bg border border-dark-border rounded-xl text-white placeholder-white/20 outline-none transition-all focus:border-brand-green focus:shadow-[0_0_0_4px_rgba(53,204,32,0.1)]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Estado da Usina</label>
                <select name="estado_usina" value={formData.estado_usina} onChange={handleChange} required className="w-full px-5 py-3 bg-dark-bg border border-dark-border rounded-xl text-white outline-none transition-all focus:border-brand-green focus:shadow-[0_0_0_4px_rgba(53,204,32,0.1)] appearance-none">
                  <option value="" disabled className="text-white/20">Selecione o estado...</option>
                  {ESTADOS.map(uf => <option key={uf} value={uf}>{uf}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Cidade da Usina</label>
                <input type="text" name="cidade_usina" value={formData.cidade_usina} onChange={handleChange} required placeholder="Nome da cidade" className="w-full px-5 py-3 bg-dark-bg border border-dark-border rounded-xl text-white placeholder-white/20 outline-none transition-all focus:border-brand-green focus:shadow-[0_0_0_4px_rgba(53,204,32,0.1)]" />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-white/60 mb-2">Informações Adicionais <span className="text-white/30 font-normal">(Opcional)</span></label>
                <textarea name="mensagem_adicional" value={formData.mensagem_adicional} onChange={handleChange} placeholder="Alguma observação ou dúvida?" className="w-full px-5 py-3 bg-dark-bg border border-dark-border rounded-xl text-white placeholder-white/20 outline-none transition-all focus:border-brand-green focus:shadow-[0_0_0_4px_rgba(53,204,32,0.1)] h-28 resize-y" />
              </div>
              
              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-brand-green text-dark-bg font-bold text-base rounded-xl transition-all duration-300 hover:bg-brand-green-hover hover:shadow-[0_0_40px_rgba(53,204,32,0.25)] disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {status === "loading" ? (
                    <span className="w-5 h-5 border-2 border-dark-bg border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Enviar Cadastro da Usina</span>
                      <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>

               {/* Status Messages */}
               <div className="md:col-span-2">
                  {status === "success" && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-brand-green/10 border border-brand-green/30 text-brand-green rounded-xl flex items-center gap-3">
                      <CheckCircle2 size={20} className="shrink-0" />
                      <p className="font-medium text-sm">Cadastro enviado com sucesso! Nossa equipe entrará em contato em breve.</p>
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-red-500/10 border border-red-500/30 text-red-500 rounded-xl flex items-center gap-3">
                      <AlertCircle size={20} className="shrink-0" />
                      <p className="font-medium text-sm">Erro inesperado ao enviar o cadastro. Verifique sua conexão e tente novamente ou entre em contato pelo WhatsApp.</p>
                    </motion.div>
                  )}
               </div>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
