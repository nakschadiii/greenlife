import { useState, useCallback } from 'react';
import { APIError } from '@/api/errorHandler';

export function useHTTPError() {
  const [error, setError] = useState<APIError | null>(null);

  const handleError = useCallback((err: unknown) => {
    if (err instanceof APIError) {
      setError(err);
    } else if (err instanceof Error) {
      setError(new APIError(err.message, 500));
    } else {
      setError(new APIError('Une erreur inattendue est survenue', 500));
    }

    // Effacer l'erreur après 5 secondes
    setTimeout(() => {
      setError(null);
    }, 5000);
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    error,
    handleError,
    clearError,
    isError: error !== null
  };
} 