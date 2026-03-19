import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-dark-bg">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto flex flex-col items-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-dark-surface border border-dark-border mb-8 shadow-[0_0_30px_rgba(53,204,32,0.1)]">
          <span className="text-4xl">🔌</span>
        </div>
        
        <h1 className="text-8xl md:text-9xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-br from-white to-white/20 mb-6 drop-shadow-sm">
          404
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
          Página não encontrada
        </h2>
        
        <p className="text-white/60 text-lg md:text-xl mb-10 max-w-lg mx-auto">
          Parece que o link que você acessou está quebrado ou a página foi movida para outro endereço.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-green text-brand-blue-dark font-bold rounded-xl text-lg transition-all duration-300 hover:bg-brand-green-hover hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(53,204,32,0.5)]"
          >
            <Home className="w-5 h-5" />
            Voltar para o Início
          </Link>
          
          <Link
            href="/contato"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-dark-surface border border-dark-border text-white font-medium rounded-xl text-lg transition-all duration-300 hover:bg-dark-card-hover hover:border-brand-green/30"
          >
            Falar com Suporte
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
