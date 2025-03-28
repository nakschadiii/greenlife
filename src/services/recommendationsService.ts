import { API_CONFIG } from '../api/config';
import { Recommendation } from '../types';

export const recommendationsService = {
  async getRecommendations(): Promise<Recommendation[]> {
    const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.RECOMMENDATIONS}`);
    if (!response.ok) throw new Error('Erreur lors du chargement des recommandations');
    return response.json();
  },

  async simulateSavings(currentConsumption: number): Promise<number> {
    const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.RECOMMENDATIONS}/simulate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ currentConsumption }),
    });
    if (!response.ok) throw new Error('Erreur lors de la simulation');
    const data = await response.json();
    return data.potentialSavings;
  }
}; 