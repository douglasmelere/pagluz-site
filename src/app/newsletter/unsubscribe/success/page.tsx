'use client';

import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, RotateCcw, Settings } from 'lucide-react';

function UnsubscribeSuccessContent() {
  const searchParams = useSearchParams();
  const emailParam = searchParams.get('email') || '';
  const nameParam = searchParams.get('name') || '';

  const email = decodeURIComponent(emailParam);
  const name = decodeURIComponent(nameParam);

  return (
    <div className="relative z-10 bg-white/5 border border-white/10 p-10 rounded-3xl max-w-lg w-full text-center shadow-2xl backdrop-blur-sm animate-in zoom-in-95 duration-500">
      <div className="w-20 h-20 bg-brand-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 className="w-10 h-10 text-brand-green" />
      </div>
      
      <h1 className="text-3xl font-bold font-space-grotesk mb-4">Inscrição Cancelada</h1>
      <p className="text-white/80 mb-8 leading-relaxed text-lg">
        Pronto{name ? `, ${name}` : ''}! O e-mail <strong>{email || 'informado'}</strong> foi removido da nossa lista.
      </p>

      <div className="flex flex-col gap-4">
        <Link 
          href="/newsletter"
          className="w-full bg-brand-green text-brand-blue-dark font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(206,255,26,0.3)]"
        >
          <RotateCcw className="w-5 h-5" /> Me arrependi — quero voltar
        </Link>
        <Link 
          href="/newsletter"
          className="w-full bg-white/5 text-white border border-white/10 font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:bg-white/10 hover:border-white/20"
        >
          <Settings className="w-5 h-5" /> Gerenciar preferências
        </Link>
      </div>
    </div>
  );
}

export default function UnsubscribeSuccessPage() {
  return (
    <div className="min-h-screen bg-dark-bg text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute w-[800px] h-[800px] bg-brand-green/10 rounded-full blur-[150px] pointer-events-none" />

      <Suspense fallback={<div className="text-white">Carregando...</div>}>
        <UnsubscribeSuccessContent />
      </Suspense>
    </div>
  );
}
