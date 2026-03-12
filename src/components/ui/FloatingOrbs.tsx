"use client";

import { motion } from "framer-motion";

interface OrbConfig {
  size: number;
  x: string;
  y: string;
  color: string;
  duration: number;
  delay: number;
}

interface FloatingOrbsProps {
  variant?: "green" | "blue" | "warm" | "mixed";
  intensity?: "subtle" | "normal" | "vibrant";
}

const ORB_PRESETS: Record<string, OrbConfig[]> = {
  green: [
    { size: 400, x: "15%", y: "20%", color: "rgba(53, 204, 32, 0.06)", duration: 20, delay: 0 },
    { size: 300, x: "75%", y: "60%", color: "rgba(53, 204, 32, 0.04)", duration: 25, delay: 2 },
    { size: 200, x: "50%", y: "80%", color: "rgba(53, 204, 32, 0.05)", duration: 18, delay: 4 },
    { size: 350, x: "85%", y: "15%", color: "rgba(245, 197, 24, 0.03)", duration: 22, delay: 1 },
  ],
  blue: [
    { size: 420, x: "20%", y: "25%", color: "rgba(0, 100, 255, 0.05)", duration: 22, delay: 0 },
    { size: 280, x: "70%", y: "55%", color: "rgba(0, 100, 255, 0.04)", duration: 26, delay: 3 },
    { size: 320, x: "45%", y: "75%", color: "rgba(53, 204, 32, 0.03)", duration: 19, delay: 1 },
    { size: 250, x: "90%", y: "10%", color: "rgba(0, 100, 255, 0.04)", duration: 24, delay: 2 },
  ],
  warm: [
    { size: 380, x: "10%", y: "30%", color: "rgba(53, 204, 32, 0.05)", duration: 21, delay: 0 },
    { size: 300, x: "80%", y: "50%", color: "rgba(245, 197, 24, 0.04)", duration: 24, delay: 2 },
    { size: 260, x: "55%", y: "15%", color: "rgba(53, 204, 32, 0.04)", duration: 18, delay: 3 },
    { size: 340, x: "30%", y: "70%", color: "rgba(245, 197, 24, 0.03)", duration: 23, delay: 1 },
  ],
  mixed: [
    { size: 400, x: "12%", y: "22%", color: "rgba(53, 204, 32, 0.05)", duration: 20, delay: 0 },
    { size: 320, x: "78%", y: "45%", color: "rgba(0, 100, 255, 0.04)", duration: 25, delay: 2 },
    { size: 280, x: "45%", y: "70%", color: "rgba(245, 197, 24, 0.03)", duration: 22, delay: 1 },
    { size: 360, x: "88%", y: "12%", color: "rgba(53, 204, 32, 0.04)", duration: 23, delay: 3 },
    { size: 200, x: "60%", y: "30%", color: "rgba(0, 100, 255, 0.03)", duration: 19, delay: 4 },
  ],
};

export default function FloatingOrbs({ variant = "green", intensity = "normal" }: FloatingOrbsProps) {
  const orbs = ORB_PRESETS[variant] || ORB_PRESETS.green;
  
  const opacityMultiplier = intensity === "subtle" ? 0.6 : intensity === "vibrant" ? 1.4 : 1;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: orb.color,
            filter: `blur(${orb.size * 0.4}px)`,
            opacity: opacityMultiplier,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            x: [0, 30, -20, 15, 0],
            y: [0, -25, 15, -10, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
