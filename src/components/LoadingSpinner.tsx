import { motion } from 'framer-motion';

export function LoadingSpinner() {
  return (
    <div className="loading-container">
      <motion.div
        className="loading-spinner"
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <p>Chargement...</p>
    </div>
  );
} 