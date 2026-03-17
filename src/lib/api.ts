export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

interface RequestOptions extends RequestInit {
  data?: any;
  requireAuth?: boolean;
}

export async function apiFetch(endpoint: string, options: RequestOptions = {}) {
  const { data, requireAuth = true, ...customConfig } = options;
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (requireAuth) {
    const token = typeof window !== 'undefined' ? localStorage.getItem('pagluz_token') : null;
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }

  const config: RequestInit = {
    method: data ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (data) {
    config.body = JSON.stringify(data);
  }

  const response = await fetch(`${API_URL}${endpoint}`, config);

  if (!response.ok) {
    let errorMessage = 'Ocorreu um erro na requisição.';
    try {
      const errorData = await response.json();
      errorMessage = errorData.message || errorMessage;
    } catch (e) {
      // Falha ao parsear JSON de erro
    }
    throw new Error(errorMessage);
  }

  return response.json();
}
