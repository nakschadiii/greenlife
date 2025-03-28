import { useState, useCallback } from 'react';
import { logService } from '@/services/logService';

interface Notification {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

export function useNotification() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = useCallback((message: string, type: 'success' | 'error' | 'info') => {
    const id = Date.now().toString();
    const notification: Notification = {
      id,
      message,
      type
    };

    setNotifications(prev => [...prev, notification]);
    logService.info('Nouvelle notification:', notification);

    setTimeout(() => removeNotification(id), 5000);

    return id;
  }, []);

  const removeNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  }, []);

  const clearNotifications = useCallback(() => {
    setNotifications([]);
  }, []);

  return {
    notifications,
    addNotification,
    removeNotification,
    clearNotifications
  };
} 