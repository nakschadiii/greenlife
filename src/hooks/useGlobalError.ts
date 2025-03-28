import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppError } from '@/utils/errorHandler';

interface ErrorState {
  message: string;
  code?: string;
  retry?: () => void;
}

export function useGlobalError() {
  const [error, setError] = useState<ErrorState | null>(null);
  const navigate = useNavigate();

  const handleError = useCallback((err: unknown, retry?: () => void) => {
    if (err instanceof AppError) {
      setError({
        message: err.message,
        code: err.code,
        retry
      });

      // Redirection en cas d'erreur d'authentification
      if (err.code === 'AUTH_ERROR') {
        navigate('/login');
      }
    } else {
      setError({
        message: 'Une erreur inattendue est survenue',
        retry
      });
    }
  }, [navigate]);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    error,
    handleError,
    clearError
  };
} 