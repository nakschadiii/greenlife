import { useState, useCallback } from 'react';
import { getErrorMessage } from '@/utils/errorHandler';

export function useError() {
  const [error, setError] = useState<string | null>(null);

  const handleError = useCallback((err: unknown) => {
    const message = getErrorMessage(err);
    setError(message);
    
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
    clearError
  };
} 