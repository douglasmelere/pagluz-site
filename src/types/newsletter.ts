// ===========================
// Newsletter v2.0 Types
// ===========================

export interface EnergyTicker {
  id: string;
  date: string;
  pldSeCo: number | null;
  pldSul: number | null;
  pldNe: number | null;
  pldNorte: number | null;
  tarifaBandeira: string | null; // "Verde" | "Amarela" | "Vermelha P1" | "Vermelha P2"
  usdBrl: number | null;
  selic: number | null;
  gsfRisk: number | null;
  solarIrradiance: number | null;
  notes: string | null;
}

export interface ProcessedNews {
  id: string;
  originalUrl: string;
  title: string;
  tags: string[];
  executiveSummary: string;
  marketImpact: string;
  impactScore: number | null;
  publishedAt: string;
  processedAt: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  description: string | null;
  eventDate: string;
  endDate: string | null;
  category: 'LEILAO' | 'REGULACAO' | 'TARIFA' | 'MERCADO_LIVRE' | 'PRAZO';
  source: string | null;
  isRecurring: boolean;
  url: string | null;
}

export interface DashboardData {
  ticker: EnergyTicker | null;
  tickerHistory: EnergyTicker[];
  todayNews: ProcessedNews[];
  stats: {
    totalNews: number;
    totalSubscribers: number;
    todayNewsCount: number;
    avgImpactScore: number;
  };
  upcomingEvents: CalendarEvent[];
}

export interface TagsResponse {
  tags: string[];
  descriptions: Record<string, string>;
}

export const TAG_ICONS: Record<string, string> = {
  SOLAR: '☀️',
  EOLICA: '💨',
  MERCADO_LIVRE: '⚡',
  REGULACAO: '📋',
  TARIFAS: '💰',
  GRANDES_CONSUMIDORES: '🏢',
  ESG: '🌱',
  HIDRO: '💧',
  BIOMASSA: '🌿',
  PROJECAO_MACRO: '📈',
};

export const CATEGORY_COLORS: Record<string, string> = {
  LEILAO: '#f59e0b',
  REGULACAO: '#8b5cf6',
  TARIFA: '#ef4444',
  MERCADO_LIVRE: '#22c55e',
  PRAZO: '#3b82f6',
};
