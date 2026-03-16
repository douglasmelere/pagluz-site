"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import VideoModal from "@/components/shared/VideoModal";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function VideoSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section
        className="py-24 bg-dark-bg relative overflow-hidden"
        id="video"
      >
        {/* Section border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-border to-transparent" />

        {/* Decorative glows */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/[0.02] blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
                Conheça a nossa{" "}
                <span className="text-gradient">história</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-white/40">
                Descubra como a PagLuz está transformando o mercado de energia
                no Brasil, gerando economia para todos de forma sustentável.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden border border-dark-border group cursor-pointer"
              onClick={() => setIsVideoOpen(true)}
            >
              {/* Video Cover */}
              <div className="aspect-video w-full bg-gradient-to-br from-dark-card via-brand-blue-900/30 to-dark-card flex items-center justify-center relative overflow-hidden">
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />

                {/* Grid pattern inside video */}
                <div
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                  }}
                />

                {/* Play Button — pushed up on mobile to avoid text overlap */}
                <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 mb-10 md:mb-0 bg-brand-green text-dark-bg rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_60px_rgba(53,204,32,0.5)]">
                  {/* Pulse ring */}
                  <span className="absolute inset-0 rounded-full animate-ping opacity-30 bg-brand-green/40" />
                  <Play size={32} className="ml-1.5 fill-dark-bg" />
                </div>
              </div>

              {/* Bottom gradient label */}
              <div className="absolute bottom-0 left-0 w-full px-4 py-4 md:p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                <p className="text-white/80 text-sm md:text-lg font-medium">
                  Assista ao vídeo e entenda como funciona
                </p>
              </div>

              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-2xl border border-brand-green/0 group-hover:border-brand-green/20 transition-colors duration-500 pointer-events-none" />
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Reusable Video Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoSrc="/videos/institucional.mp4"
      />
    </>
  );
}
