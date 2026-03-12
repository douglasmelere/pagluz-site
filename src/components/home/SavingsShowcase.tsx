"use client";

import { motion, Variants } from "framer-motion";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { DollarSign, Users, CheckCircle, Activity } from "lucide-react";

const STATS = [
  {
    icon: DollarSign,
    value: 100,
    prefix: "R$ ",
    suffix: "M+",
    label: "Economia Gerada",
    color: "text-brand-green",
    glowColor: "rgba(53, 204, 32, 0.15)",
  },
  {
    icon: Users,
    value: 5000,
    suffix: "+",
    label: "Clientes Ativos",
    color: "text-brand-blue",
    glowColor: "rgba(12, 58, 89, 0.25)",
  },
  {
    icon: CheckCircle,
    value: 100,
    suffix: "%",
    label: "Energia Renovável",
    color: "text-brand-yellow",
    glowColor: "rgba(245, 197, 24, 0.12)",
  },
  {
    icon: Activity,
    value: 63.5,
    decimals: 1,
    suffix: "K+",
    label: "Ton. CO₂ Evitadas",
    color: "text-brand-green-light",
    glowColor: "rgba(110, 220, 95, 0.12)",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 80, damping: 20 },
  },
};

export default function SavingsShowcase() {
  return (
    <section className="py-24 bg-dark-bg relative overflow-hidden" id="resultados">
      {/* Subtle top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-border to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
              Nossos Resultados Falam{" "}
              <span className="text-gradient">por Si</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg md:text-xl text-white/40">
              Números que comprovam nosso impacto na vida dos brasileiros e no
              meio ambiente.
            </p>
          </ScrollReveal>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group relative flex flex-col items-center p-8 rounded-2xl bg-dark-card border border-dark-border transition-all duration-500 hover:border-dark-border-hover hover:bg-dark-card-hover"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at center, ${stat.glowColor}, transparent 70%)`,
                  }}
                />

                <div className="relative z-10 flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-xl bg-white/[0.04] flex items-center justify-center mb-5 ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <p className="text-brand-green font-display font-bold text-4xl md:text-5xl mb-2 flex items-baseline gap-1">
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                    />
                  </p>
                  <p className="text-white/40 font-medium text-sm text-center">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-green/[0.02] blur-[120px] pointer-events-none rounded-full" />
    </section>
  );
}
