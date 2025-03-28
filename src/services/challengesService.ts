import { API_CONFIG } from '../api/config';
import { Challenge } from '../types';

export const challengesService = {
  async getChallenges(): Promise<Challenge[]> {
    const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CHALLENGES}`);
    if (!response.ok) throw new Error('Erreur lors du chargement des défis');
    return response.json();
  },

  async updateChallengeProgress(challengeId: string, progress: number): Promise<void> {
    const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CHALLENGES}/${challengeId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ progress }),
    });
    if (!response.ok) throw new Error('Erreur lors de la mise à jour du défi');
  }
}; 