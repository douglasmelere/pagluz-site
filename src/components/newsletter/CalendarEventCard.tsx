'use client';

import { CalendarEvent, CATEGORY_COLORS } from '@/types/newsletter';
import { API_URL } from '@/lib/api';
import { Calendar, ExternalLink } from 'lucide-react';

interface CalendarEventCardProps {
  event: CalendarEvent;
  compact?: boolean;
}

export default function CalendarEventCard({ event, compact = false }: CalendarEventCardProps) {
  const addToCalendar = () => {
    const token = localStorage.getItem('pagluz_token');
    window.open(
      `${API_URL}/newsletter/calendar/ics?eventId=${event.id}`,
      '_blank'
    );
  };

  const categoryColor = CATEGORY_COLORS[event.category] || '#6b7280';

  const dateStr = new Date(event.eventDate).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  const timeStr = new Date(event.eventDate).toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  if (compact) {
    return (
      <div className="flex items-center gap-3 py-3 border-b border-white/[0.05] last:border-0 group">
        <div
          className="w-1.5 h-8 rounded-full shrink-0"
          style={{ background: categoryColor }}
        />
        <div className="min-w-0 flex-1">
          <div className="text-sm font-medium text-white truncate">{event.title}</div>
          <div className="text-xs text-white/40">{dateStr} · {timeStr}</div>
        </div>
        <button
          onClick={addToCalendar}
          className="shrink-0 p-1.5 text-white/30 hover:text-brand-green transition-colors opacity-0 group-hover:opacity-100"
          title="Adicionar ao calendário"
        >
          <Calendar className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white/[0.02] border border-white/[0.08] rounded-xl hover:border-white/15 transition-colors group">
      <div className="flex items-start gap-3">
        <div
          className="w-1 h-full min-h-[3rem] rounded-full shrink-0"
          style={{ background: categoryColor }}
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span
              className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded"
              style={{
                background: `${categoryColor}20`,
                color: categoryColor,
              }}
            >
              {event.category.replace('_', ' ')}
            </span>
            {event.source && (
              <span className="text-[10px] text-white/30">{event.source}</span>
            )}
          </div>
          <h4 className="text-sm font-semibold text-white mb-1">{event.title}</h4>
          {event.description && (
            <p className="text-xs text-white/50 mb-2 line-clamp-2">{event.description}</p>
          )}
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/40">📅 {dateStr} às {timeStr}</span>
            <button
              onClick={addToCalendar}
              className="text-xs text-brand-green hover:text-brand-green-light transition-colors flex items-center gap-1 font-medium"
            >
              <Calendar className="w-3 h-3" /> Adicionar
            </button>
            {event.url && (
              <a
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/40 hover:text-white transition-colors flex items-center gap-1"
              >
                <ExternalLink className="w-3 h-3" /> Link
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
