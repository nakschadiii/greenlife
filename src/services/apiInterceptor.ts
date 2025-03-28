import axios, { AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { authService } from './authService';
import { AppError } from '@/utils/errorHandler';
import { ENV } from '@/config/env';

const api = axios.create({
  baseURL: ENV.API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

interface CustomAxiosError extends AxiosError {
  handled?: boolean;
}

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = authService.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: CustomAxiosError) => {
    if (error.handled) return Promise.reject(error);
    
    error.handled = true;
    return Promise.reject(new AppError(
      'Erreur de requête',
      'REQUEST_ERROR',
      error.response?.status || 500
    ));
  }
);

api.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  async (error: CustomAxiosError) => {
    if (error.handled) return Promise.reject(error);
    
    error.handled = true;

    if (error.response?.status === 401) {
      await authService.logout();
      window.location.href = '/login';
      throw new AppError('Session expirée', 'AUTH_ERROR', 401);
    }

    throw new AppError(
      error.response?.data?.message || 'Erreur serveur',
      error.response?.data?.code || 'SERVER_ERROR',
      error.response?.status || 500
    );
  }
);

export const apiRequest = api;