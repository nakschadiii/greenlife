import { motion, AnimatePresence } from 'framer-motion';

interface NotificationProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
}

export function Notification({ message, type, onClose }: NotificationProps) {
  return (
    <AnimatePresence>
      <motion.div
        className={`notification ${type}`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
      >
        <p>{message}</p>
        <button onClick={onClose} className="close-button">
          ×
        </button>
      </motion.div>
    </AnimatePresence>
  );
} 