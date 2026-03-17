'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { apiFetch } from '@/lib/api';
import { Loader2 } from 'lucide-react';

function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectParams = searchParams.get('redirect') || '/newsletter/checkout';
  const { login } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Máscara simples para celular (XX) XXXXX-XXXX
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length > 2) value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    if (value.length > 9) value = `${value.slice(0, 10)}-${value.slice(10)}`;
    setPhone(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await apiFetch('/auth/register', {
        data: { name, email, password, phone: phone.replace(/\D/g, '') },
        requireAuth: false,
      });

      // Se a API não logar automaticamente, logamos forçada.
      // Assumindo que o back-end devolva access_token ou façamos /login novamente:
      const token = response.access_token || response.token; 
      if (token) {
        login(token, response.user);
      } else {
        // Fallback: se o backend não retornar token no registro, tentar /login
        const loginRes = await apiFetch('/auth/login', {
          data: { email, password },
          requireAuth: false,
        });
        login(loginRes.access_token, loginRes.user);
      }

      // Redireciona imediatamente para o checkout da Stripe
      router.push(redirectParams);
    } catch (err: any) {
      setError(err.message || 'Erro ao criar conta. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-lg text-sm bg-opacity-20 animate-in fade-in slide-in-from-top-2">
          {error}
        </div>
      )}
            
            <div>
              <label className="block text-sm font-medium text-white/90 mb-1.5" htmlFor="name">
                Nome completo
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-green"
                placeholder="Seu nome"
                required
              />
            </div>

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
                minLength={6}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/90 mb-1.5" htmlFor="phone">
                WhatsApp
              </label>
              <input
                id="phone"
                type="text"
                value={phone}
                onChange={handlePhoneChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-green"
                placeholder="(00) 00000-0000"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-green text-brand-blue-dark font-semibold py-3 rounded-lg hover:bg-brand-green-hover transition-all duration-300 disabled:opacity-70 flex items-center justify-center shadow-lg shadow-brand-green/20"
            >
              {loading ? <Loader2 className="animate-spin w-5 h-5 mr-2" /> : 'Criar Conta e Continuar'}
            </button>
            <p className="text-xs text-center text-white/50 mt-2">Você será redirecionado para o pagamento seguro na Stripe.</p>

            <div className="text-center mt-6 text-white/60 text-sm">
              Já tem uma conta?{' '}
              <Link
                href={`/login?redirect=${encodeURIComponent(redirectParams)}`}
                className="text-brand-green hover:underline cursor-pointer"
              >
                Faça login
              </Link>
      </div>
    </form>
  );
}

export default function RegisterNewsletterPage() {
  return (
    <div className="min-h-screen bg-dark-bg flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-brand-green/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white font-space-grotesk">
          Criar conta para a <br className="hidden sm:block" />
          <span className="text-brand-green">Newsletter Premium</span>
        </h2>
        <p className="mt-2 text-center text-sm text-white/70">
          Receba dicas exclusivas e análises sobre o mercado de energia.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 py-8 px-4 shadow sm:rounded-2xl sm:px-10">
          <Suspense fallback={<div className="flex justify-center py-8"><Loader2 className="animate-spin text-brand-green w-8 h-8" /></div>}>
            <RegisterForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
