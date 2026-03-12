"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const BENEFITS = [
  {
    title: "Economia Garantida",
    description: "Redução de até 30% na conta de luz todos os meses, previsível e garantida.",
    iconPath: "/assets/icons/piggy-bank.svg",
  },
  {
    title: "Sem Burocracia",
    description: "Cuidamos de tudo para você. Assinatura digital e integração direta com a concessionária local.",
    iconPath: "/assets/icons/bureaucratic.svg",
  },
  {
    title: "Zero Obras ou Gastos Iniciais",
    description: "Não instale nenhum equipamento. Receba energia descontada pela mesma rede de sempre sem pagar nada agora.",
    iconPath: "/assets/icons/checkmark.svg",
  },
  {
    title: "Gestão de Créditos",
    description: "Acompanhe tudo por relatórios claros ou pelo aplicativo, com controle total na sua mão.",
    iconPath: "/assets/icons/credit-management.svg",
  },
  {
    title: "Sustentabilidade",
    description: "A energia injetada na rede é 100% fruto de fontes limpas. Você economiza ajudando o planeta.",
    iconPath: "/assets/icons/leaf-alt.svg",
  },
  {
    title: "Transparência Total",
    description: "Relatórios mensais de economia fáceis de ler. Sem taxas ocultas, pegadinhas ou fidelidades abusivas.",
    iconPath: "/assets/icons/reports.svg",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
};

export default function BenefitsGrid() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden" id="quem-somos">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-bold font-display text-brand-blue-dark mb-6"
          >
            Por que escolher a <span className="text-gradient">PagLuz</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Nós conectamos quem produz energia limpa com quem quer economizar de forma simples e descomplicada.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {BENEFITS.map((benefit, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-brand-green/10 hover:-translate-y-2 group"
            >
              {/* Icon Container with hover effects */}
              <div className="w-16 h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-brand-green p-3">
                <Image 
                   src={benefit.iconPath} 
                   alt={benefit.title} 
                   width={40} 
                   height={40} 
                   className="w-full h-full object-contain filter-brand-green group-hover:brightness-0 group-hover:invert transition-all duration-300"
                />
              </div>
              
              <h3 className="text-xl font-bold font-display text-brand-blue-dark mb-4 transition-colors group-hover:text-brand-green">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-green/5 blur-[120px] pointer-events-none rounded-full" />
    </section>
  );
}
