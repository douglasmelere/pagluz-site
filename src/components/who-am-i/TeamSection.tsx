"use client";

import Image from "next/image";
import { Linkedin, Github } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const TEAM_MEMBERS = [
  {
    name: "Eduardo Trevisan",
    role: "CEO & Co-Fundador",
    description: "Líder visionário responsável pela estratégia e crescimento da PagLuz no mercado de energia renovável.",
    photo: "/assets/images/eduardo.png",
    color: "from-brand-green to-emerald-500",
    socials: [],
  },
  {
    name: "Mateus Vanin",
    role: "COO & Co-Fundador",
    description: "Especialista em operações, gestão de créditos de energia e relacionamento com usinas parceiras.",
    photo: "/assets/images/mateus.png",
    color: "from-[#3B82F6] to-cyan-400",
    socials: [],
  },
  {
    name: "Douglas Melere",
    role: "CTO & Co-Fundador",
    description: "Responsável pela tecnologia, inovação e desenvolvimento da plataforma digital PagLuz.",
    photo: "/assets/images/douglas.png",
    color: "from-brand-yellow to-amber-400",
    socials: [
      { icon: Linkedin, url: "https://www.linkedin.com/in/douglasmelere" },
      { icon: Github, url: "https://github.com/douglasmelere" },
    ],
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 md:py-28 bg-dark-bg relative overflow-hidden">
      {/* Section border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-border to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
              Quem <span className="text-gradient">Faz Acontecer</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              Conheça as pessoas por trás da PagLuz — apaixonados por energia limpa e inovação.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {TEAM_MEMBERS.map((member, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="group relative rounded-2xl bg-[#0d0d0d] border border-white/[0.08] p-8 text-center transition-all duration-500 hover:border-white/15 hover:bg-[#111111] overflow-hidden h-full flex flex-col items-center">
                {/* Hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-b ${member.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`} />
                
                {/* Photo */}
                <div className="relative mb-6 mx-auto">
                  <div className={`w-28 h-28 rounded-full bg-gradient-to-br ${member.color} p-[3px] group-hover:scale-105 transition-transform duration-300 shadow-lg`}>
                    <div className="w-full h-full rounded-full overflow-hidden bg-[#0d0d0d]">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        width={112}
                        height={112}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                  {/* Status dot */}
                  <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-brand-green border-4 border-[#0d0d0d]" />
                </div>

                <h3 className="text-xl font-bold font-display text-white mb-1 group-hover:text-brand-green transition-colors">
                  {member.name}
                </h3>
                <p className="text-brand-green text-sm font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-white/35 text-sm leading-relaxed mb-6">
                  {member.description}
                </p>

                {/* Social links */}
                {member.socials.length > 0 && (
                  <div className="flex justify-center gap-2 mt-auto">
                    {member.socials.map((social, si) => {
                      const SocialIcon = social.icon;
                      return (
                        <a
                          key={si}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/30 hover:text-white/60 hover:border-white/15 transition-all"
                        >
                          <SocialIcon size={16} />
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <p className="text-center text-white/20 text-sm mt-10">
            Quer fazer parte do time? Entre em contato conosco!
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
