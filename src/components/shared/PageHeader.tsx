"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PageHeaderProps {
  title: string;
  highlight: string;
  description: string;
  bgImage?: string;
  children?: React.ReactNode;
}

export default function PageHeader({ title, highlight, description, bgImage, children }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-dark-bg overflow-hidden">
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage}
            alt="Hero Background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={90}
          />
        </div>
      )}
      {/* Background */}
      <div className={`absolute inset-0 z-0 ${bgImage ? 'bg-dark-bg/85' : ''}`} />

      {/* Decorative glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-green/[0.03] rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Animated background children */}
      {children}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-6"
          >
            {title} <span className="text-gradient">{highlight}</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-lg md:text-xl text-white/50 leading-relaxed font-light"
          >
            {description}
          </motion.p>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-dark-bg to-transparent pointer-events-none" />
    </section>
  );
}
