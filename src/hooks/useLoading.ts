import { useState, useCallback } from 'react';
import { API_CONFIG } from '@/config/api.config';

interface UseLoadingOptions {
  initialState?: boolean;
  minDuration?: number;
}

export function useLoading({ 
  initialState = false, 
  minDuration = API_CONFIG.MOCK_DELAY 
}: UseLoadingOptions = {}) {
  const [isLoading, setIsLoading] = useState(initialState);
  const [startTime, setStartTime] = useState<number | null>(null);

  const startLoading = useCallback(() => {
    setIsLoading(true);
    setStartTime(Date.now());
  }, []);

  const stopLoading = useCallback(async () => {
    if (startTime && minDuration) {
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime < minDuration) {
        await new Promise(resolve => 
          setTimeout(resolve, minDuration - elapsedTime)
        );
      }
    }
    setIsLoading(false);
    setStartTime(null);
  }, [minDuration, startTime]);

  const withLoading = useCallback(async <T>(
    promise: Promise<T>
  ): Promise<T> => {
    startLoading();
    try {
      const result = await promise;
      await stopLoading();
      return result;
    } catch (error) {
      await stopLoading();
      throw error;
    }
  }, [startLoading, stopLoading]);

  return {
    isLoading,
    startLoading,
    stopLoading,
    withLoading
  };
} 