"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function LivePanel() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    // Configura tamanho do canvas adaptável
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        // Multiplicador de pixel ratio para telas retina (mais nítido)
        const dpr = window.devicePixelRatio || 1;
        canvas.width = parent.clientWidth * dpr;
        canvas.height = parent.clientHeight * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = `${parent.clientWidth}px`;
        canvas.style.height = `${parent.clientHeight}px`;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Sistema de partículas representando "energia" fluindo
    const particles: { x: number; y: number; speed: number; size: number; alpha: number }[] = [];
    const createParticle = () => {
      const rectWidth = canvas.clientWidth;
      const rectHeight = canvas.clientHeight;
      return {
        x: Math.random() * rectWidth,
        y: rectHeight + 10,
        speed: 0.5 + Math.random() * 1.5,
        size: 1 + Math.random() * 2,
        alpha: Math.random() * 0.8 + 0.2,
      };
    };

    for (let i = 0; i < 40; i++) {
      particles.push(createParticle());
      particles[i].y = Math.random() * canvas.clientHeight; // inicializa espalhado
    }

    // Desenho do gráfico/conexões
    let offset = 0;
    const draw = () => {
      const cw = canvas.clientWidth;
      const ch = canvas.clientHeight;

      // Limpa frame
      ctx.clearRect(0, 0, cw, ch);

      // Desenha grade de fundo (sutil)
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.lineWidth = 1;
      const gridSize = 30;
      
      ctx.beginPath();
      for (let x = (offset * 0.5) % gridSize; x < cw; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, ch);
      }
      for (let y = (offset * 0.5) % gridSize; y < ch; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(cw, y);
      }
      ctx.stroke();

      // Atualiza e desenha partículas (flutuando de baixo para cima)
      particles.forEach((p, i) => {
        p.y -= p.speed;
        
        // Se saiu da tela, recria lá embaixo
        if (p.y < -10) {
          particles[i] = createParticle();
        }

        // Desenha a partícula
        ctx.beginPath();
        ctx.fillStyle = `rgba(53, 204, 32, ${p.alpha})`; // brand-green
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Conecta partículas próximas (efeito de malha)
        particles.forEach((p2, j) => {
          if (i !== j) {
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < 60) {
              ctx.beginPath();
              // Aumenta opacidade com base na proximidade
              const lineAlpha = (1 - dist / 60) * 0.3 * Math.min(p.alpha, p2.alpha);
              ctx.strokeStyle = `rgba(53, 204, 32, ${lineAlpha})`;
              ctx.lineWidth = 1;
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        });
      });

      // Linha de "pulsos de rede" subindo
      ctx.beginPath();
      ctx.strokeStyle = "rgba(53, 204, 32, 0.4)";
      ctx.lineWidth = 2;
      for (let x = 0; x < cw; x += 5) {
        // Onda senoidal movendo-se
        const y = ch / 2 + Math.sin(x * 0.02 - offset * 0.05) * 30 + Math.sin(x * 0.05 + offset * 0.02) * 15;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      offset++;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full rounded-2xl border border-white/10 bg-brand-blue-dark/40 backdrop-blur-xl shadow-2xl overflow-hidden p-6 lg:p-8">
      {/* Container do Canvas ao fundo */}
      <div className="absolute inset-0 z-0 opacity-60">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      {/* Conteúdo sobreposto */}
      <div className="relative z-10 flex flex-col h-full justify-between gap-8">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-green"></span>
              </span>
              <span className="text-white/80 text-sm font-medium tracking-wider uppercase">
                Rede em Tempo Real
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white font-display">
              Gestão Inteligente
            </h3>
          </div>
          
          <div className="px-3 py-1 bg-brand-green/10 border border-brand-green/20 rounded-full">
            <span className="text-brand-green text-sm font-bold tracking-widest">
              ON
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-12 md:mt-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-brand-blue-dark/50 p-4 rounded-xl border border-white/5"
          >
            <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Status da Geração</p>
            <p className="text-brand-green font-bold text-lg">Excelente</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-brand-blue-dark/50 p-4 rounded-xl border border-white/5"
          >
            <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Economia Média</p>
            <p className="text-brand-green font-bold text-lg">Até 30%</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
