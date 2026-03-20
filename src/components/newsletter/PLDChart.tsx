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
  BarChart,
  Bar,
  Cell,
} from 'recharts';
import { Zap } from 'lucide-react';

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

  const dayLabel = history.length === 1 ? 'dia' : 'dias';
  const isSinglePoint = history.length <= 2;

  // With only 1-2 data points, use bar chart for better visualization
  if (isSinglePoint) {
    // Build bar data from the single/double point with all regions
    const barData: { region: string; value: number; fill: string }[] = [];
    const latest = history[history.length - 1];

    if (latest.pldSeCo != null) barData.push({ region: 'SE/CO', value: latest.pldSeCo, fill: '#22c55e' });
    if (latest.pldSul != null) barData.push({ region: 'Sul', value: latest.pldSul, fill: '#f59e0b' });
    if (latest.pldNe != null) barData.push({ region: 'NE', value: latest.pldNe, fill: '#f97316' });
    if (latest.pldNorte != null) barData.push({ region: 'Norte', value: latest.pldNorte, fill: '#3b82f6' });

    const dateStr = new Date(latest.date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

    return (
      <div className="p-5 md:p-6 bg-white/[0.02] border border-white/10 rounded-2xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Zap className="w-4 h-4 text-brand-green" />
            PLD por Submercado
          </h3>
          <span className="text-xs text-white/40">{dateStr}</span>
        </div>

        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={barData} margin={{ top: 10, right: 10, left: -10, bottom: 5 }}>
            <CartesianGrid stroke="rgba(255,255,255,0.04)" strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="region"
              stroke="#6b7280"
              fontSize={12}
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
              formatter={(value: any) => [`R$ ${Number(value)?.toFixed(2)}/MWh`, 'PLD']}
            />
            <Bar
              dataKey="value"
              radius={[6, 6, 0, 0]}
              maxBarSize={48}
            >
              {barData.map((entry, index) => (
                <Cell key={index} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        <div className="text-xs text-white/30 text-center mt-2">
          O gráfico de evolução aparecerá com mais dias de dados coletados.
        </div>
      </div>
    );
  }

  return (
    <div className="p-5 md:p-6 bg-white/[0.02] border border-white/10 rounded-2xl">
      <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
        📈 Evolução PLD ({history.length} {dayLabel})
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
            dot={{ r: 3, fill: '#22c55e' }}
            activeDot={{ r: 5, fill: '#22c55e' }}
          />
          <Line
            type="monotone"
            dataKey="PLD Sul"
            stroke="#f59e0b"
            strokeWidth={2}
            dot={{ r: 3, fill: '#f59e0b' }}
            activeDot={{ r: 5, fill: '#f59e0b' }}
          />
          <Line
            type="monotone"
            dataKey="PLD NE"
            stroke="#f97316"
            strokeWidth={1.5}
            dot={{ r: 2, fill: '#f97316' }}
            strokeDasharray="4 2"
          />
          <Line
            type="monotone"
            dataKey="PLD Norte"
            stroke="#3b82f6"
            strokeWidth={1.5}
            dot={{ r: 2, fill: '#3b82f6' }}
            strokeDasharray="4 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
