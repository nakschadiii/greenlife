import { motion } from 'framer-motion';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <motion.div
      className="error-message"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
    >
      <div className="error-content">
        <span className="error-icon">⚠️</span>
        <p>{message}</p>
      </div>
      {onRetry && (
        <button 
          onClick={onRetry}
          className="retry-button"
        >
          Réessayer
        </button>
      )}
    </motion.div>
  );
} 