'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { apiFetch } from '@/lib/api';
import { Loader2, Settings2, CreditCard, Mail, MessageCircle, Save, ExternalLink, LogOut } from 'lucide-react';

type DeliveryChannel = 'EMAIL' | 'WHATSAPP' | 'BOTH';

export default function NewsletterDashboardPage() {
  const router = useRouter();
  const { user, token, isLoading: authLoading, login, logout } = useAuth();
  
  const [activeTab, setActiveTab] = useState<'PREFERENCES' | 'BILLING'>('PREFERENCES');
  
  // States for Preferences
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [deliveryChannel, setDeliveryChannel] = useState<DeliveryChannel>('EMAIL');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  // States for Billing
  const [isPortalLoading, setIsPortalLoading] = useState(false);

  const AVAILABLE_TAGS = [
    { id: 'SOLAR', label: 'Energia Solar' },
    { id: 'MERCADO_LIVRE', label: 'Mercado Livre' },
    { id: 'REGULAMENTACAO', label: 'Regulamentação e Leis' },
    { id: 'DICAS', label: 'Dicas de Economia' },
    { id: 'TENDENCIAS', label: 'Tendências do Mercado' },
  ];

  useEffect(() => {
    if (!authLoading && !token) {
      router.push('/login?redirect=/dashboard/newsletter');
    }
  }, [token, authLoading, router]);

  useEffect(() => {
    if (token) {
      loadPreferences();
    }
  }, [token]);

  const loadPreferences = async () => {
    try {
      setIsDataLoading(true);
      const data = await apiFetch('/newsletter/preferences');
      setDeliveryChannel(data.deliveryChannel || 'EMAIL');
      setPhone(formatPhone(data.phone || user?.phone || ''));
      setEmail(data.email || user?.email || '');
      setTags(data.tags || []);
    } catch (err: any) {
      console.error('Erro ao carregar preferências', err);
      // Pode ser que o usuário não assinou ainda, ou deu erro. 
      // Por enquanto, ignora ou exibe um toast (mas não bloqueia a tela).
    } finally {
      setIsDataLoading(false);
    }
  };

  const formatPhone = (val: string) => {
    let value = val.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length > 2) value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    if (value.length > 9) value = `${value.slice(0, 10)}-${value.slice(10)}`;
    return value;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
  };

  const toggleTag = (tagId: string) => {
    setTags(prev => 
      prev.includes(tagId) ? prev.filter(t => t !== tagId) : [...prev, tagId]
    );
  };

  const savePreferences = async () => {
    try {
      setIsSaving(true);
      setMessage(null);
      await apiFetch('/newsletter/preferences', {
        method: 'PUT',
        data: {
          deliveryChannel,
          phone: phone.replace(/\D/g, ''),
          email,
          tags
        }
      });
      if (user && token) {
        login(token, { ...user, phone: phone.replace(/\D/g, ''), email });
      }
      setMessage({ type: 'success', text: 'Preferências salvas com sucesso!' });
      setTimeout(() => setMessage(null), 3000);
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message || 'Erro ao salvar preferências.' });
    } finally {
      setIsSaving(false);
    }
  };

  const handleOpenCustomerPortal = async () => {
    try {
      setIsPortalLoading(true);
      const data = await apiFetch('/newsletter/customer-portal', {
        method: 'POST'
      });
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('URL não retornada. Você já possui uma assinatura ativa?');
      }
    } catch (err: any) {
      alert(err.message || 'Erro ao acessar o portal.');
    } finally {
      setIsPortalLoading(false);
    }
  };

  if (authLoading || !token) {
    return <div className="min-h-screen bg-dark-bg flex items-center justify-center"><Loader2 className="w-10 h-10 animate-spin text-brand-green" /></div>;
  }

  return (
    <div className="min-h-screen bg-dark-bg text-white pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold font-space-grotesk mb-2">Minha Newsletter</h1>
        <p className="text-white/60 mb-8">Gerencie suas preferências de IA e seu plano detalhado.</p>

        {/* Tabs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex space-x-2 bg-white/5 p-1 rounded-xl w-fit border border-white/10 overflow-x-auto">
            <button
              onClick={() => setActiveTab('PREFERENCES')}
              className={`flex shrink-0 items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'PREFERENCES' ? 'bg-brand-green text-brand-blue-dark shadow' : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <Settings2 className="w-4 h-4" /> Preferências da IA
            </button>
            <button
              onClick={() => setActiveTab('BILLING')}
              className={`flex shrink-0 items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'BILLING' ? 'bg-brand-green text-brand-blue-dark shadow' : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <CreditCard className="w-4 h-4" /> Faturamento
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => router.push('/dashboard/newsletter/feed')}
              className="flex items-center gap-2 justify-center px-6 py-3 border border-brand-green/30 text-brand-green hover:bg-brand-green/10 rounded-xl transition-all font-semibold text-sm h-fit"
            >
              Intelligence Hub <ExternalLink className="w-4 h-4" />
            </button>
            <button
              onClick={logout}
              className="flex items-center gap-2 justify-center px-4 py-3 border border-red-500/30 text-red-500 hover:bg-red-500/10 rounded-xl transition-all font-semibold text-sm h-fit"
              title="Sair da conta"
            >
              Sair <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Conteúdo Aba A: Preferências */}
        {activeTab === 'PREFERENCES' && (
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8">
            {isDataLoading ? (
              <div className="py-12 flex justify-center"><Loader2 className="w-8 h-8 animate-spin text-brand-green" /></div>
            ) : (
              <div className="space-y-8">
                
                {/* Canal de Entrega */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 border-b border-white/10 pb-2">Onde deseja receber a newsletter?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <label className={`cursor-pointer flex items-center gap-3 p-4 rounded-xl border transition-colors ${deliveryChannel === 'EMAIL' ? 'border-brand-green bg-brand-green/10' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}>
                      <input type="radio" name="channel" value="EMAIL" checked={deliveryChannel === 'EMAIL'} onChange={() => setDeliveryChannel('EMAIL')} className="hidden" />
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${deliveryChannel === 'EMAIL' ? 'border-brand-green' : 'border-white/40'}`}>
                        {deliveryChannel === 'EMAIL' && <div className="w-2.5 h-2.5 bg-brand-green rounded-full" />}
                      </div>
                      <Mail className="w-5 h-5 text-white/70" />
                      <span>Apenas E-mail</span>
                    </label>

                    <label className={`cursor-pointer flex items-center gap-3 p-4 rounded-xl border transition-colors ${deliveryChannel === 'WHATSAPP' ? 'border-brand-green bg-brand-green/10' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}>
                      <input type="radio" name="channel" value="WHATSAPP" checked={deliveryChannel === 'WHATSAPP'} onChange={() => setDeliveryChannel('WHATSAPP')} className="hidden" />
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${deliveryChannel === 'WHATSAPP' ? 'border-brand-green' : 'border-white/40'}`}>
                        {deliveryChannel === 'WHATSAPP' && <div className="w-2.5 h-2.5 bg-brand-green rounded-full" />}
                      </div>
                      <MessageCircle className="w-5 h-5 text-white/70" />
                      <span>Apenas WhatsApp</span>
                    </label>

                    <label className={`cursor-pointer flex items-center gap-3 p-4 rounded-xl border transition-colors ${deliveryChannel === 'BOTH' ? 'border-brand-green bg-brand-green/10' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}>
                      <input type="radio" name="channel" value="BOTH" checked={deliveryChannel === 'BOTH'} onChange={() => setDeliveryChannel('BOTH')} className="hidden" />
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${deliveryChannel === 'BOTH' ? 'border-brand-green' : 'border-white/40'}`}>
                        {deliveryChannel === 'BOTH' && <div className="w-2.5 h-2.5 bg-brand-green rounded-full" />}
                      </div>
                      <div className="flex -space-x-1.5 opacity-80">
                        <Mail className="w-5 h-5 text-white z-10 bg-dark-bg/50 rounded-full" />
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                      <span>Ambos os Canais</span>
                    </label>
                  </div>
                </div>

                {/* E-mail (Condicional) */}
                {(deliveryChannel === 'EMAIL' || deliveryChannel === 'BOTH') && (
                  <div className="animate-in fade-in slide-in-from-top-4">
                    <label className="block text-sm font-medium text-white/90 mb-1.5" htmlFor="email">E-mail</label>
                    <input
                      id="email"
                      type="email"
                      className="w-full md:w-1/2 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-green transition-all"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                )}

                {/* Telefone (Condicional) */}
                {(deliveryChannel === 'WHATSAPP' || deliveryChannel === 'BOTH') && (
                  <div className="animate-in fade-in slide-in-from-top-4">
                    <label className="block text-sm font-medium text-white/90 mb-1.5" htmlFor="phone">Número do WhatsApp</label>
                    <input
                      id="phone"
                      type="text"
                      className="w-full md:w-1/2 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-green transition-all"
                      placeholder="(00) 00000-0000"
                      value={phone}
                      onChange={handlePhoneChange}
                    />
                  </div>
                )}

                {/* Filtros de Assunto */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 border-b border-white/10 pb-2">Quais assuntos te interessam mais?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {AVAILABLE_TAGS.map(tag => {
                      const isSelected = tags.includes(tag.id);
                      return (
                        <button
                          key={tag.id}
                          onClick={() => toggleTag(tag.id)}
                          className={`px-4 py-3 rounded-xl border text-left text-sm transition-all focus:outline-none ${isSelected ? 'border-brand-green bg-brand-green/10 text-white' : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10'}`}
                        >
                          <div className="flex items-center justify-between">
                            {tag.label}
                            {isSelected && <div className="w-2 h-2 rounded-full bg-brand-green" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Salvar */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  {message ? (
                    <span className={`text-sm ${message.type === 'success' ? 'text-brand-green' : 'text-red-400'}`}>
                      {message.text}
                    </span>
                  ) : <span />}
                  <button
                    onClick={savePreferences}
                    disabled={isSaving}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-green text-brand-blue-dark font-semibold px-8 py-3 rounded-lg hover:bg-brand-green-hover transition-colors disabled:opacity-70"
                  >
                    {isSaving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                    Salvar Preferências
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Conteúdo Aba B: Faturamento */}
        {activeTab === 'BILLING' && (
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
             <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mb-6">
                <CreditCard className="w-8 h-8 text-brand-green" />
             </div>
             <h3 className="text-xl font-bold mb-2">Gerenciamento Seguro</h3>
             <p className="text-white/60 mb-8 max-w-sm">
               Para garantir sua segurança, todas as alterações de cartão, downgrade ou cancelamento são feitas diretamente no ambiente criptografado da Stripe.
             </p>

             <button
                onClick={handleOpenCustomerPortal}
                disabled={isPortalLoading}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all disabled:opacity-70 group"
              >
                {isPortalLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <ExternalLink className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />}
                Gerenciar Assinatura ou Faturas
             </button>
          </div>
        )}

      </div>
    </div>
  );
}
