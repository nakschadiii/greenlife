import { motion } from 'framer-motion';
import { Badge as BadgeType } from '@/types';

interface BadgeProps extends BadgeType {
  className?: string;
}

export function Badge({ name, description, icon, unlocked, className = '' }: BadgeProps) {
  return (
    <motion.div 
      className={`badge ${unlocked ? 'unlocked' : 'locked'} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="badge-icon">{icon}</div>
      <div className="badge-content">
        <h4 className="badge-title">{name}</h4>
        <p className="badge-description">{description}</p>
      </div>
      {!unlocked && <div className="badge-lock" aria-label="Badge verrouillé">🔒</div>}
    </motion.div>
  );
} 