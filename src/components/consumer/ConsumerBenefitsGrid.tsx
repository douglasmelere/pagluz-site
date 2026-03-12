"use client";

import { motion, Variants } from "framer-motion";
import { PiggyBank, Wrench, Leaf, FileCheck, LineChart, HeadphonesIcon } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const BENEFITS = [
  { icon: PiggyBank, title: "Economize até 30%", description: "Reduza o valor da sua conta de luz em até 30% todos os meses, sem investimento inicial ou custos ocultos.", badge: "Economia garantida" },
  { icon: Wrench, title: "Sem instalação", description: "Não é necessário instalar painéis solares ou equipamento. Continue recebendo energia da mesma forma.", badge: "Zero obras" },
  { icon: Leaf, title: "Energia 100% limpa", description: "Contribua para um planeta mais sustentável utilizando energia renovável sem mudar sua rotina diária.", badge: "Sustentabilidade" },
  { icon: FileCheck, title: "Sem burocracia", description: "Processo simplificado e descomplicado. Nós cuidamos de toda a documentação e requisitos legais.", badge: "Processo simples" },
  { icon: LineChart, title: "Relatórios detalhados", description: "Acompanhe sua economia e consumo através de relatórios claros e transparentes em nossa plataforma.", badge: "Transparência total" },
  { icon: HeadphonesIcon, title: "Suporte dedicado", description: "Conte com nossa equipe de especialistas para esclarecer dúvidas e auxiliar em qualquer momento.", badge: "Atendimento premium" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 80, damping: 20 } },
};

export default function ConsumerBenefitsGrid() {
  return (
    <section className="py-20 md:py-28 bg-dark-bg overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-border to-transparent" />

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
              Benefícios para <span className="text-gradient">Consumidores</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-base text-white/40">
              Descubra como a PagLuz oferece uma solução simples, econômica e sustentável para reduzir o valor da sua conta de energia.
            </p>
          </ScrollReveal>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {BENEFITS.map((benefit, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className="group bg-dark-card rounded-2xl p-8 border border-dark-border transition-all duration-300 hover:border-dark-border-hover hover:bg-dark-card-hover"
            >
              <div className="w-14 h-14 bg-brand-green/[0.08] rounded-xl flex items-center justify-center mx-auto mb-6 text-brand-green transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-green/15">
                <benefit.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-center text-white mb-3">{benefit.title}</h3>
              <p className="text-white/35 text-center text-sm mb-6 leading-relaxed">{benefit.description}</p>
              <div className="flex justify-center mt-auto">
                <span className="inline-flex items-center bg-brand-green/[0.08] text-brand-green font-medium px-3 py-1.5 rounded-full text-xs">
                  {benefit.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
