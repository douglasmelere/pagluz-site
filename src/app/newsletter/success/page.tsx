'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function NewsletterSuccessPage() {
  useEffect(() => {
    // Dispara confetes ao carregar a página
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#CEFF1A', '#0F172A', '#FFFFFF']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#CEFF1A', '#0F172A', '#FFFFFF']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute w-[800px] h-[800px] bg-brand-green/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 bg-white/5 border border-white/10 p-10 rounded-3xl max-w-lg w-full text-center shadow-2xl backdrop-blur-sm animate-in zoom-in-95 duration-500">
        <div className="w-20 h-20 bg-brand-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-brand-green" />
        </div>
        
        <h1 className="text-3xl font-bold font-space-grotesk mb-4">Assinatura Ativada!</h1>
        <p className="text-white/80 mb-8 leading-relaxed text-lg">
          Sua inteligência artificial energética começa a trabalhar amanhã cedo. Fique de olho no seu E-mail e WhatsApp!
        </p>

        <div className="bg-white/5 rounded-xl p-4 mb-8 text-left border border-white/5">
          <p className="text-sm text-white/60 mb-2 font-semibold">PRÓXIMO PASSO:</p>
          <div className="flex items-start gap-3">
            <Zap className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
            <p className="text-white/80 text-sm">
              Acesse o seu Dashboard para configurar os assuntos que mais importam para você e para o seu negócio.
            </p>
          </div>
        </div>

        <Link 
          href="/dashboard/newsletter"
          className="w-full bg-brand-green text-brand-blue-dark font-bold text-lg py-4 rounded-xl flex items-center justify-center transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(206,255,26,0.3)]"
        >
          Ir para o Dashboard
        </Link>
      </div>
    </div>
  );
}
