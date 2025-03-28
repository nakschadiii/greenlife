import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/context/AppContext';

export function useAuthGuard(requireAuth: boolean = true) {
  const { user } = useApp();
  const navigate = useNavigate();

  useEffect(() => {
    if (requireAuth && !user) {
      navigate('/login', { replace: true });
    } else if (!requireAuth && user) {
      navigate('/', { replace: true });
    }
  }, [user, navigate, requireAuth]);

  return { isAuthenticated: !!user };
} 