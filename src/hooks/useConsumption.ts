import { useState, useEffect } from 'react';
import { ConsumptionData } from '@/types';
import { MOCK_DATA } from '@/services/mockData';
import { useGlobalError } from './useGlobalError';

export function useConsumption() {
  const [data, setData] = useState<ConsumptionData[]>([]);
  const [loading, setLoading] = useState(true);
  const { handleError } = useGlobalError();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simuler un appel API
        await new Promise(resolve => setTimeout(resolve, 1000));
        setData(MOCK_DATA.consumption);
      } catch (err) {
        handleError(err, fetchData);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [handleError]);

  return { data, loading };
} 