import { ConsumptionData, Badge, Challenge, Recommendation } from '@/types';

export const MOCK_DATA = {
  consumption: [
    { month: 'Jan', electricity: 150, transport: 80, house: 100 },
    { month: 'Fév', electricity: 140, transport: 75, house: 95 },
    { month: 'Mar', electricity: 160, transport: 85, house: 110 },
    { month: 'Avr', electricity: 130, transport: 70, house: 90 },
    { month: 'Mai', electricity: 120, transport: 65, house: 85 },
    { month: 'Juin', electricity: 145, transport: 78, house: 98 }
  ] as ConsumptionData[],

  badges: [
    {
      id: '1',
      name: 'Éco-débutant',
      description: 'Premier pas vers un mode de vie durable',
      icon: '🌱',
      unlocked: true
    },
    {
      id: '2',
      name: 'Champion du tri',
      description: 'Expert en recyclage',
      icon: '♻️',
      unlocked: true
    },
    {
      id: '3',
      name: 'Économe en énergie',
      description: 'Réduction significative de la consommation',
      icon: '⚡',
      unlocked: false
    }
  ] as Badge[],

  challenges: [
    {
      id: '1',
      title: 'Zéro déchet une semaine',
      description: 'Ne produisez aucun déchet non recyclable pendant 7 jours',
      reward: '500 points',
      duration: '7 jours',
      progress: 70
    },
    {
      id: '2',
      title: 'Transport écologique',
      description: 'Utilisez uniquement des transports durables pendant un mois',
      reward: '1000 points',
      duration: '30 jours',
      progress: 45
    }
  ] as Challenge[],

  recommendations: [
    {
      id: '1',
      title: 'Installation de LED',
      description: 'Remplacez vos ampoules par des LED',
      potentialSavings: 120,
      difficulty: 'easy',
      category: 'electricity'
    },
    {
      id: '2',
      title: 'Isolation des fenêtres',
      description: "Améliorez l'isolation de vos fenêtres",
      potentialSavings: 250,
      difficulty: 'medium',
      category: 'house'
    }
  ] as Recommendation[]
}; 