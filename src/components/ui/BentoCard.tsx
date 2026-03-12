"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export default function BentoCard({
  children,
  className = "",
  glowColor = "rgba(53, 204, 32, 0.4)",
}: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setGlowPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-2xl overflow-hidden group ${className}`}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Animated border glow that follows mouse */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
        style={{
          background: isHovered
            ? `radial-gradient(300px circle at ${glowPosition.x}px ${glowPosition.y}px, ${glowColor}, transparent 60%)`
            : "none",
        }}
      />

      {/* Inner content container with border */}
      <div className="absolute inset-[1px] rounded-2xl bg-dark-card z-20" />

      {/* Resting border */}
      <div className="absolute inset-0 rounded-2xl border border-dark-border group-hover:border-transparent transition-colors duration-500" />

      {/* Content */}
      <div className="relative z-30 p-6 md:p-8">
        {children}
      </div>
    </motion.div>
  );
}
