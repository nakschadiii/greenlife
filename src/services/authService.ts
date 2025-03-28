import { User } from '@/types';
import { AppError } from '@/utils/errorHandler';
import { API_CONFIG } from '@/config/api.config';
import supabase from '@/utils/supabase';
import CryptoJS from 'crypto-js';

interface UserCredentials {
  email: string;
  password: string;
}

interface StoredUser extends User {
  token: string;
}

// Données de test
const MOCK_CREDENTIALS = {
  email: 'demo@example.com',
  password: 'demo123'
};

const MOCK_USER: StoredUser = {
  id: '1',
  name: 'Utilisateur Demo',
  email: MOCK_CREDENTIALS.email,
  ecoScore: 85,
  token: 'mock_jwt_token'
};

class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_KEY = 'user_data';

  private validateCredentials(credentials: UserCredentials): void {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!credentials.email || !credentials.password) {
      throw new AppError(
        'Email et mot de passe requis',
        'VALIDATION_ERROR',
        400
      );
    }

    if (!emailRegex.test(credentials.email)) {
      throw new AppError(
        'Format d\'email invalide',
        'VALIDATION_ERROR',
        400
      );
    }

    if (credentials.password.length < 6) {
      throw new AppError(
        'Le mot de passe doit contenir au moins 6 caractères',
        'VALIDATION_ERROR',
        400
      );
    }
  }

  async login(email: string, password: string): Promise<User> {
    try {
      this.validateCredentials({ email, password });

      //if (API_CONFIG.IS_MOCK) {
        const { data: LOOKUP_EMAIL, error } = await supabase.from('clients').select().or(`email.eq.${email},name.eq.${email}`).maybeSingle();

        // Simuler un délai réseau
        await new Promise(resolve => setTimeout(resolve, API_CONFIG.MOCK_DELAY));

        if (error || !LOOKUP_EMAIL) throw error;

        if (CryptoJS.MD5(password).toString() === LOOKUP_EMAIL.password) {
          localStorage.setItem(this.TOKEN_KEY, JSON.stringify({ id: LOOKUP_EMAIL.id }));
          localStorage.setItem(this.USER_KEY, JSON.stringify(LOOKUP_EMAIL));
          
          return LOOKUP_EMAIL;
        }

        throw new AppError(
          'Identifiants invalides',
          'AUTH_ERROR',
          401
        );
      //}

      // Code pour l'API réelle (quand elle sera disponible)
      throw new AppError(
        'API non disponible',
        'API_ERROR',
        503
      );
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new AppError(
        'Erreur lors de la connexion',
        'AUTH_ERROR',
        500
      );
    }
  }

  async logout(): Promise<void> {
    if (API_CONFIG.IS_MOCK) {
      await new Promise(resolve => setTimeout(resolve, API_CONFIG.MOCK_DELAY));
    }

    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }

  async getCurrentUser(): Promise<User | null> {
    try {
      const userData = localStorage.getItem(this.USER_KEY);
      if (!userData) return null;

      if (API_CONFIG.IS_MOCK) {
        await new Promise(resolve => setTimeout(resolve, API_CONFIG.MOCK_DELAY));
        const { token, ...user } = JSON.parse(userData) as StoredUser;
        return user;
      }

      // Code pour l'API réelle
      throw new AppError(
        'API non disponible',
        'API_ERROR',
        503
      );
    } catch (error) {
      this.logout();
      return null;
    }
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }
}

export const authService = new AuthService(); 