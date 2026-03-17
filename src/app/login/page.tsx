'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { apiFetch } from '@/lib/api';
import { Loader2 } from 'lucide-react';

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectParams = searchParams.get('redirect');
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await apiFetch('/auth/login', {
        data: { email, password },
        requireAuth: false,
      });

      login(response.access_token, response.user);

      if (redirectParams) {
        router.push(redirectParams);
      } else {
        router.push('/dashboard/newsletter'); // Default fallback redirect
      }
    } catch (err: any) {
      setError(err.message || 'Erro ao realizar login. Verifique suas credenciais.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-lg text-sm">
          {error}
        </div>
      )}
      
      <div>
        <label className="block text-sm font-medium text-white/90 mb-1.5" htmlFor="email">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-green"
          placeholder="seu@email.com"
          required
          autoComplete="email"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white/90 mb-1.5" htmlFor="password">
          Senha
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-green"
          placeholder="••••••••"
          required
          autoComplete="current-password"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-brand-green text-brand-blue-dark font-semibold py-3 rounded-lg hover:bg-brand-green-hover transition-all duration-300 disabled:opacity-70 flex items-center justify-center"
      >
        {loading ? <Loader2 className="animate-spin w-5 h-5 mr-2" /> : 'Entrar'}
      </button>

      <div className="text-center mt-6 text-white/60 text-sm">
        Não tem uma conta?{' '}
        <Link
          href={`/register/newsletter${redirectParams ? `?redirect=${encodeURIComponent(redirectParams)}` : ''}`}
          className="text-brand-green hover:underline cursor-pointer"
        >
          Cadastre-se para assinar a Newsletter
        </Link>
      </div>
    </form>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-dark-bg flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Orbs reused from other pages */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-brand-green/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white font-space-grotesk">
          Acesse sua <span className="text-brand-green">conta</span>
        </h2>
        <p className="mt-2 text-center text-sm text-white/70">
          Gerencie sua energia inteligente e suas assinaturas.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 py-8 px-4 shadow sm:rounded-2xl sm:px-10">
          <Suspense fallback={<div className="flex justify-center py-8"><Loader2 className="animate-spin text-brand-green w-8 h-8" /></div>}>
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
