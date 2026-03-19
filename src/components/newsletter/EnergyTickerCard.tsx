'use client';

import { EnergyTicker } from '@/types/newsletter';
import { Zap, DollarSign, Sun, TrendingUp, Gauge, Droplets } from 'lucide-react';

interface TickerItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  accent?: string;
}

function TickerItem({ icon, label, value, accent = 'text-white' }: TickerItemProps) {
  return (
    <div className="flex items-center gap-3 p-3 bg-white/[0.03] rounded-xl border border-white/[0.06] hover:border-white/10 transition-colors">
      <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-[11px] text-white/40 uppercase tracking-wider font-medium truncate">{label}</div>
        <div className={`text-sm font-bold ${accent} truncate`}>{value}</div>
      </div>
    </div>
  );
}

function getBandeiraColor(bandeira: string | null): string {
  if (!bandeira) return 'text-white/50';
  const lower = bandeira.toLowerCase();
  if (lower === 'verde') return 'text-green-400';
  if (lower === 'amarela') return 'text-yellow-400';
  if (lower.includes('vermelha')) return 'text-red-400';
  return 'text-white';
}

export default function EnergyTickerCard({ ticker }: { ticker: EnergyTicker | null }) {
  if (!ticker) {
    return (
      <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl">
        <div className="flex items-center gap-2 text-white/40">
          <Zap className="w-5 h-5" />
          <span className="text-sm">Cotação do dia ainda não disponível.</span>
        </div>
      </div>
    );
  }

  const dateFormatted = new Date(ticker.date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="p-5 md:p-6 bg-white/[0.02] border border-white/10 rounded-2xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <Zap className="w-5 h-5 text-brand-green" />
          Cotação do Dia
        </h3>
        <span className="text-xs text-white/40">{dateFormatted}</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
        {ticker.pldSeCo != null && (
          <TickerItem
            icon={<Zap className="w-4 h-4 text-green-400" />}
            label="PLD SE/CO"
            value={`R$ ${ticker.pldSeCo.toFixed(2)}/MWh`}
            accent="text-green-400"
          />
        )}
        {ticker.pldSul != null && (
          <TickerItem
            icon={<Zap className="w-4 h-4 text-yellow-400" />}
            label="PLD Sul"
            value={`R$ ${ticker.pldSul.toFixed(2)}/MWh`}
            accent="text-yellow-400"
          />
        )}
        {ticker.pldNe != null && (
          <TickerItem
            icon={<Zap className="w-4 h-4 text-orange-400" />}
            label="PLD NE"
            value={`R$ ${ticker.pldNe.toFixed(2)}/MWh`}
            accent="text-orange-400"
          />
        )}
        {ticker.pldNorte != null && (
          <TickerItem
            icon={<Zap className="w-4 h-4 text-blue-400" />}
            label="PLD Norte"
            value={`R$ ${ticker.pldNorte.toFixed(2)}/MWh`}
            accent="text-blue-400"
          />
        )}
        {ticker.tarifaBandeira && (
          <TickerItem
            icon={<Gauge className="w-4 h-4 text-white/60" />}
            label="Bandeira"
            value={ticker.tarifaBandeira}
            accent={getBandeiraColor(ticker.tarifaBandeira)}
          />
        )}
        {ticker.usdBrl != null && (
          <TickerItem
            icon={<DollarSign className="w-4 h-4 text-yellow-400" />}
            label="Câmbio"
            value={`R$ ${ticker.usdBrl.toFixed(2)}`}
            accent="text-yellow-400"
          />
        )}
        {ticker.selic != null && (
          <TickerItem
            icon={<TrendingUp className="w-4 h-4 text-purple-400" />}
            label="Selic"
            value={`${ticker.selic.toFixed(2)}%`}
            accent="text-purple-400"
          />
        )}
        {ticker.gsfRisk != null && (
          <TickerItem
            icon={<Droplets className="w-4 h-4 text-cyan-400" />}
            label="GSF Risk"
            value={ticker.gsfRisk.toFixed(2)}
            accent="text-cyan-400"
          />
        )}
        {ticker.solarIrradiance != null && (
          <TickerItem
            icon={<Sun className="w-4 h-4 text-amber-400" />}
            label="Irradiação"
            value={`${ticker.solarIrradiance} kWh/m²`}
            accent="text-amber-400"
          />
        )}
      </div>

      {ticker.notes && (
        <div className="mt-4 text-xs text-white/40 italic border-t border-white/5 pt-3">
          📌 {ticker.notes}
        </div>
      )}
    </div>
  );
}
