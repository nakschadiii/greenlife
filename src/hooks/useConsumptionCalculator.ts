import { useState } from 'react';
import { ConsumptionRequest, ConsumptionResponse } from '@/types/consumption';
import { consumptionService } from '@/services/consumptionService';
import { useNotification } from './useNotification';

export function useConsumptionCalculator() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ConsumptionResponse | null>(null);
  const { addNotification } = useNotification();

  const calculate = async (data: ConsumptionRequest) => {
    try {
      setLoading(true);
      setError(null);
      const response = await consumptionService.calculateConsumption(data);
      setResult(response);
      addNotification('Calcul effectué avec succès', 'success');
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Une erreur est survenue';
      setError(message);
      addNotification(message, 'error');
    } finally {
      setLoading(false);
    }
  };

  return { result, calculate, loading, error };
} 