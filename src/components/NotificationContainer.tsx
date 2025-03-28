import { motion, AnimatePresence } from 'framer-motion';
import { useNotification } from '@/hooks/useNotification';

export function NotificationContainer() {
  const { notifications, removeNotification } = useNotification();

  return (
    <div className="notification-container">
      <AnimatePresence>
        {notifications.map(notification => (
          <motion.div
            key={notification.id}
            className={`notification notification-${notification.type}`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
            <div className="notification-content">
              <span className="notification-message">{notification.message}</span>
              <button
                className="notification-close"
                onClick={() => removeNotification(notification.id)}
              >
                ×
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      <style jsx>{`
        .notification-container {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1000;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .notification {
          padding: var(--spacing-md);
          border-radius: var(--radius-md);
          background: var(--bg-primary);
          box-shadow: var(--shadow-md);
          min-width: 300px;
        }

        .notification-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--spacing-md);
        }

        .notification-close {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1.5rem;
          color: var(--text-secondary);
        }

        .notification-success { border-left: 4px solid var(--success); }
        .notification-error { border-left: 4px solid var(--error); }
        .notification-warning { border-left: 4px solid var(--warning); }
        .notification-info { border-left: 4px solid var(--info); }
      `}</style>
    </div>
  );
} 