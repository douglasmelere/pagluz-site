'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { apiFetch } from '@/lib/api';
import { CheckCircle2, Zap, ArrowRight, Loader2 } from 'lucide-react';

const BENEFITS = [
  'Alertas em tempo real sobre bandeiras tarifárias.',
  'Análises de mercado: Preço da Energia (PLD) e tendências.',
  'Dicas de economia personalizadas baseadas no seu perfil.',
  'Notícias em primeira mão sobre a regulamentação do setor.',
  'Atendimento e resumos enviados via WhatsApp ou E-mail.',
];

export default function NewsletterLandingPage() {
  const router = useRouter();
  const { user, token, isLoading } = useAuth();
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = async () => {
    // 1. Se não estiver logado, direciona para o registro/login
    if (!token || !user) {
      router.push('/register/newsletter?redirect=/newsletter');
      return;
    }

    // 2. Se já estiver logado, cria a sessão de checkout
    try {
      setIsCheckoutLoading(true);
      setError('');
      
      const data = await apiFetch('/newsletter/checkout-session', {
        method: 'POST',
      });
      
      if (data.url) {
        window.location.href = data.url; // Redireciona para Stripe
      } else {
        throw new Error('URL de checkout não retornada pelo servidor.');
      }
    } catch (err: any) {
      setError(err.message || 'Erro ao iniciar checkout. Tente novamente mais tarde.');
      setIsCheckoutLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white pt-24 pb-16">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[-10%] w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green mb-8">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide uppercase">Inteligência Artificial PagLuz</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk mb-6 leading-tight">
            Assuma o controle da sua <span className="text-brand-green">Conta de Luz</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed">
            Nossa Newsletter Inteligente analisa o mercado de energia 24h por dia e envia resumos exclusivos direto no seu WhatsApp ou E-mail.
          </p>

          {error && (
            <div className="mb-8 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleSubscribe}
              disabled={isCheckoutLoading || isLoading}
              className="group relative w-full sm:w-auto px-8 py-4 bg-brand-green text-brand-blue-dark font-bold text-lg rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(206,255,26,0.5)] flex items-center justify-center disabled:opacity-70 disabled:hover:scale-100"
            >
              <div className="relative z-10 flex items-center justify-center gap-2">
                {isCheckoutLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Assinar Agora <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </div>
            </button>
            <p className="text-white/50 text-sm mt-3 sm:mt-0 sm:ml-4">
              Apenas <strong className="text-white">R$ 25,00/mês</strong>.<br />
              <span className="text-brand-green">7 dias grátis</span> para testar.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center bg-white/[0.02] border border-white/5 rounded-3xl p-8 lg:p-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-space-grotesk mb-6">Por que assinar?</h2>
            <ul className="space-y-4">
              {BENEFITS.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                  <span className="text-white/80 leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden relative border border-white/10 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center">
              <div className="absolute inset-0 bg-brand-green/5 animate-pulse" />
              {/* Fake UI for the newsletter preview */}
              <div className="w-[80%] max-w-sm bg-[#1A1A1A] rounded-2xl shadow-2xl border border-white/10 overflow-hidden relative z-10 transform rotate-[-2deg] transition-transform hover:rotate-0 duration-500">
                 <div className="bg-[#252525] p-4 flex items-center gap-3 border-b border-white/5">
                   <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center">
                     <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                   </div>
                   <div>
                     <p className="font-semibold text-white text-sm">IA PagLuz</p>
                     <p className="text-xs text-white/50">Resumo Diário</p>
                   </div>
                 </div>
                 <div className="p-4 space-y-4">
                   <div className="bg-[#2A2A2A] rounded-lg p-3 rounded-tl-none">
                     <p className="text-[13px] text-white/90 leading-relaxed">
                       ⚡ <strong className="text-brand-green">Alerta:</strong> A bandeira tarifária deste mês mudou para Amarela. A expectativa é um aumento de 2% no PLD.
                     </p>
                   </div>
                   <div className="bg-[#2A2A2A] rounded-lg p-3 rounded-tl-none">
                     <p className="text-[13px] text-white/90 leading-relaxed">
                       💡 <strong className="text-white">Dica:</strong> Deslocar o consumo das 18h às 21h pode gerar economia adicional na sua fatura.
                     </p>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
