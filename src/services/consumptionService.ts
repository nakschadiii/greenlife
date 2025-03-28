import { apiService } from './apiService';
import { ConsumptionRequest, ConsumptionResponse } from '@/types/consumption';
import { API_CONFIG } from '@/api/config';

class ConsumptionService {
  async calculateConsumption(data: ConsumptionRequest): Promise<ConsumptionResponse> {
    try {
      const response = await apiService.post<ConsumptionResponse>(
        API_CONFIG.ENDPOINTS.PREDICT,
        data
      );
      return response;
    } catch (error) {
      console.error('Erreur lors du calcul de la consommation:', error);
      throw new Error('Impossible de calculer la consommation. Veuillez réessayer.');
    }
  }
}

export const consumptionService = new ConsumptionService(); 