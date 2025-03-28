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
  points: number;
  difficulty: 'easy' | 'medium' | 'hard';
  completed?: boolean;
}

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  potentialSavings: number;
  difficulty: 'easy' | 'medium' | 'hard';
  category: 'electricity' | 'water' | 'heating' | 'transport';
}

export type AlertType = 'success' | 'warning' | 'info' | 'error';

export interface Alert {
  id: string;
  type: AlertType;
  message: string;
  timestamp: Date;
} 