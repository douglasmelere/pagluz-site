"use client";

import { motion, Variants } from "framer-motion";
import { TrendingUp, FileCheck, ShieldCheck, Users, PieChart, HeadphonesIcon } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const BENEFITS = [
  { icon: TrendingUp, title: "Maior rentabilidade", description: "Aumente o retorno sobre seu investimento com a gestão otimizada dos seus créditos de energia.", badge: "Rendimento maximizado" },
  { icon: FileCheck, title: "Gestão completa", description: "Cuidamos de toda a burocracia, documentação e processos regulatórios para a transferência dos créditos.", badge: "Zero burocracia" },
  { icon: ShieldCheck, title: "Contratos seguros", description: "Garantimos a segurança jurídica e financeira com contratos transparentes e pagamentos pontuais.", badge: "Segurança garantida" },
  { icon: Users, title: "Ampla base de consumidores", description: "Acesse uma base crescente de consumidores pré-qualificados interessados em energia renovável.", badge: "Demanda garantida" },
  { icon: PieChart, title: "Relatórios detalhados", description: "Acompanhe em tempo real a distribuição e monetização dos seus créditos através de dashboards intuitivos.", badge: "Transparência total" },
  { icon: HeadphonesIcon, title: "Suporte especializado", description: "Conte com um time dedicado de especialistas em energia renovável para resolver qualquer dúvida.", badge: "Atendimento premium" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 80, damping: 20 } },
};

export default function GeneratorBenefitsGrid() {
  return (
    <section className="py-20 md:py-28 bg-dark-bg overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-border to-transparent" />

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
              Benefícios para <span className="text-gradient">Geradores</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-base text-white/40">
              Descubra como a PagLuz pode ajudar a maximizar o retorno do seu investimento em energia renovável.
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
