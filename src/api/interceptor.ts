import { API_CONFIG } from './config';
import { handleAPIError } from './errorHandler';
import { authService } from '@/services/authService';

interface RequestConfig extends RequestInit {
  requiresAuth?: boolean;
}

export async function apiRequest<T>(
  endpoint: string, 
  config: RequestConfig = {}
): Promise<T> {
  try {
    if (API_CONFIG.IS_MOCK) {
      throw new Error('API mock not implemented');
    }

    const { requiresAuth = true, ...requestConfig } = config;
    
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...config.headers,
    };

    if (requiresAuth) {
      const token = authService.getToken();
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
    }

    const response = await fetch(`${API_CONFIG.BASE_URL}${endpoint}`, {
      ...requestConfig,
      headers,
    });

    if (!response.ok) {
      await handleAPIError(response);
    }

    return response.json();
  } catch (error) {
    throw handleAPIError(error);
  }
} 