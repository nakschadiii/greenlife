export interface User {
  id: string;
  name: string;
  email: string;
  ecoScore: number;
}

export interface ConsumptionData {
  month: string;
  electricity: number;
  transport: number;
  house: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  reward: string;
  duration: string;
  progress: number;
}

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  potentialSavings: number;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

export interface Alert {
  id: string;
  type: 'warning' | 'success' | 'info';
  message: string;
  timestamp: Date;
} 