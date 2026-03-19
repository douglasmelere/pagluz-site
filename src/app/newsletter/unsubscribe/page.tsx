'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { AlertCircle, ArrowLeft } from 'lucide-react';

function UnsubscribeContent() {
  const searchParams = useSearchParams();
  const errorParam = searchParams.get('error') || '';

  let errorMessage = 'Ocorreu um erro ao processar seu cancelamento.';

  if (errorParam === 'token_missing') {
    errorMessage = 'Link inválido. Tente clicar novamente no e-mail.';
  } else if (errorParam.includes('expir') || errorParam.includes('invalid')) {
    errorMessage = 'Este link expirou ou é inválido. Links são válidos por 30 dias.';
  }

  return (
    <div className="relative z-10 bg-white/5 border border-white/10 p-10 rounded-3xl max-w-lg w-full text-center shadow-2xl backdrop-blur-sm animate-in zoom-in-95 duration-500">
      <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
        <AlertCircle className="w-10 h-10 text-red-500" />
      </div>
      
      <h1 className="text-3xl font-bold font-space-grotesk mb-4">Erro no Cancelamento</h1>
      <p className="text-white/80 mb-8 leading-relaxed text-lg">
        {errorMessage}
      </p>

      <Link 
        href="/newsletter"
        className="w-full bg-white/10 text-white border border-white/20 font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:bg-white/20 hover:scale-[1.02]"
      >
        <ArrowLeft className="w-5 h-5" /> Voltar para a newsletter
      </Link>
    </div>
  );
}

export default function UnsubscribePage() {
  return (
    <div className="min-h-screen bg-dark-bg text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[150px] pointer-events-none" />

      <Suspense fallback={<div className="text-white">Carregando...</div>}>
        <UnsubscribeContent />
      </Suspense>
    </div>
  );
}
