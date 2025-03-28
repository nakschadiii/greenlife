import { createContext, useState, useEffect, ReactNode } from 'react';
import { User } from '@/types';
import { authService } from '@/services/authService';
import { useNotification } from '@/hooks/useNotification';

interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  loading: boolean;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { addNotification } = useNotification();

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const currentUser = await authService.getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        addNotification('Erreur lors de la récupération du profil', 'error');
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, [addNotification]);

  return (
    <AppContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AppContext.Provider>
  );
} 
//test
