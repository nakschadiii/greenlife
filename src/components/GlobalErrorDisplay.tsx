import { motion, AnimatePresence } from 'framer-motion';
import { useGlobalError } from '@/hooks/useGlobalError';

export function GlobalErrorDisplay() {
  const { error, clearError } = useGlobalError();

  if (!error) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="global-error"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
      >
        <div className="error-content">
          <span className="error-icon">⚠️</span>
          <div className="error-details">
            <h4>Erreur</h4>
            <p>{error.message}</p>
            {error.code && (
              <small className="error-code">Code: {error.code}</small>
            )}
          </div>
        </div>
        <div className="error-actions">
          {error.retry && (
            <button 
              className="retry-button"
              onClick={() => {
                error.retry();
                clearError();
              }}
            >
              Réessayer
            </button>
          )}
          <button 
            className="close-button"
            onClick={clearError}
          >
            Fermer
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
} 