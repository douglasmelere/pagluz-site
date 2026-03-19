'use client';

export default function ScoreBadge({ score }: { score: number | null }) {
  if (!score) return null;

  const config = score >= 8
    ? { emoji: '🔴', color: '#ef4444', bg: 'rgba(239,68,68,0.12)', label: 'Crítico' }
    : score >= 5
    ? { emoji: '🟡', color: '#f59e0b', bg: 'rgba(245,158,11,0.12)', label: 'Médio' }
    : { emoji: '🟢', color: '#22c55e', bg: 'rgba(34,197,94,0.12)', label: 'Baixo' };

  return (
    <span
      className="inline-flex items-center gap-1 text-xs font-extrabold px-2.5 py-1 rounded-md whitespace-nowrap"
      style={{
        background: config.bg,
        border: `1px solid ${config.color}40`,
        color: config.color,
      }}
    >
      {config.emoji} Score {score}/10
    </span>
  );
}
