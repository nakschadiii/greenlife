import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { useNotification } from '@/hooks/useNotification';

const Container = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
`;

const NotificationItem = styled(motion.div)<{ type: 'success' | 'error' | 'info' }>`
  background: ${({ type }) => 
    type === 'success' ? 'var(--success)' : 
    type === 'error' ? 'var(--error)' : 
    'var(--info)'};
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
  margin-bottom: 8px;
  min-width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export function NotificationContainer() {
  const { notifications, removeNotification } = useNotification();

  return (
    <Container>
      <AnimatePresence>
        {notifications.map(({ id, message, type }) => (
          <NotificationItem
            key={id}
            type={type}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            onClick={() => removeNotification(id)}
          >
            {message}
          </NotificationItem>
        ))}
      </AnimatePresence>
    </Container>
  );
} 