'use client';

import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, LogIn } from 'lucide-react';
import confetti from 'canvas-confetti';

function ResubscribeSuccessContent() {
  const searchParams = useSearchParams();
  const emailParam = searchParams.get('email') || '';

  const email = decodeURIComponent(emailParam);

  useEffect(() => {
    // Dispara confetes ao carregar a página
    const duration = 2500;
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
    <div className="relative z-10 bg-white/5 border border-white/10 p-10 rounded-3xl max-w-lg w-full text-center shadow-2xl backdrop-blur-sm animate-in zoom-in-95 duration-500">
      <div className="w-20 h-20 bg-brand-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="w-10 h-10 text-brand-green" />
      </div>
      
      <h1 className="text-3xl font-bold font-space-grotesk mb-4">Bem-vindo(a) de volta!</h1>
      <p className="text-white/80 mb-8 leading-relaxed text-lg">
        Que bom! Você voltou para a lista. O e-mail <strong>{email || 'informado'}</strong> receberá as próximas edições.
      </p>

      <Link 
        href="/newsletter"
        className="w-full bg-brand-green text-brand-blue-dark font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(206,255,26,0.3)]"
      >
        <LogIn className="w-5 h-5" /> Acessar minha conta
      </Link>
    </div>
  );
}

export default function ResubscribeSuccessPage() {
  return (
    <div className="min-h-screen bg-dark-bg text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute w-[800px] h-[800px] bg-brand-green/10 rounded-full blur-[150px] pointer-events-none" />

      <Suspense fallback={<div className="text-white">Carregando...</div>}>
        <ResubscribeSuccessContent />
      </Suspense>
    </div>
  );
}
