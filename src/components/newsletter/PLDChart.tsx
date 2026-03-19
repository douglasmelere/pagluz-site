'use client';

import { EnergyTicker } from '@/types/newsletter';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from 'recharts';

interface PLDChartProps {
  history: EnergyTicker[];
}

export default function PLDChart({ history }: PLDChartProps) {
  if (!history || history.length === 0) {
    return (
      <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl flex items-center justify-center min-h-[200px]">
        <span className="text-white/40 text-sm">Sem dados históricos disponíveis.</span>
      </div>
    );
  }

  const data = history
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .map((t) => ({
      date: new Date(t.date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
      }),
      'PLD SE/CO': t.pldSeCo,
      'PLD Sul': t.pldSul,
      'PLD NE': t.pldNe,
      'PLD Norte': t.pldNorte,
    }));

  return (
    <div className="p-5 md:p-6 bg-white/[0.02] border border-white/10 rounded-2xl">
      <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
        📈 Evolução PLD ({history.length} dias)
      </h3>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={data} margin={{ top: 5, right: 10, left: -15, bottom: 5 }}>
          <CartesianGrid stroke="rgba(255,255,255,0.04)" strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            stroke="#6b7280"
            fontSize={11}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#6b7280"
            fontSize={11}
            tickLine={false}
            axisLine={false}
            tickFormatter={(v) => `${v}`}
          />
          <Tooltip
            contentStyle={{
              background: '#1a1a2a',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px',
              fontSize: '12px',
              color: '#fff',
            }}
            labelStyle={{ color: '#9ca3af' }}
            formatter={(value: any) => [`R$ ${Number(value)?.toFixed(2)}/MWh`, undefined]}
          />
          <Legend
            wrapperStyle={{ fontSize: '11px', color: '#9ca3af' }}
          />
          <Line
            type="monotone"
            dataKey="PLD SE/CO"
            stroke="#22c55e"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, fill: '#22c55e' }}
          />
          <Line
            type="monotone"
            dataKey="PLD Sul"
            stroke="#f59e0b"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, fill: '#f59e0b' }}
          />
          <Line
            type="monotone"
            dataKey="PLD NE"
            stroke="#f97316"
            strokeWidth={1.5}
            dot={false}
            strokeDasharray="4 2"
          />
          <Line
            type="monotone"
            dataKey="PLD Norte"
            stroke="#3b82f6"
            strokeWidth={1.5}
            dot={false}
            strokeDasharray="4 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
