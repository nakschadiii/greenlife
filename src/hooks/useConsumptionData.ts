import { useState, useEffect, useMemo } from 'react';
import { ConsumptionData } from '@/types';
import { MOCK_DATA } from '@/services/mockData';
import { useGlobalError } from './useGlobalError';

export function useConsumptionData() {
  const [data, setData] = useState<ConsumptionData[]>([]);
  const [loading, setLoading] = useState(true);
  const { handleError } = useGlobalError();

  useEffect(() => {
    const fetchData = async () => {
      try {
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

  const stats = useMemo(() => {
    if (!data.length) return null;

    const totalElectricity = data.reduce((acc, curr) => acc + curr.electricity, 0);
    const totalTransport = data.reduce((acc, curr) => acc + curr.transport, 0);
    const totalHouse = data.reduce((acc, curr) => acc + curr.house, 0);
    const total = totalElectricity + totalTransport + totalHouse;

    return {
      total,
      averageMonthly: total / data.length,
      percentages: {
        electricity: (totalElectricity / total) * 100,
        transport: (totalTransport / total) * 100,
        house: (totalHouse / total) * 100
      }
    };
  }, [data]);

  return { data, loading, stats };
} 