import { motion } from 'framer-motion';
import { Badge } from '@/components/Badge';
import { MOCK_DATA } from '@/services/mockData';

export function EcoScore() {
  const score = 85; // Score fictif pour la démo
  const badges = MOCK_DATA.badges;

  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const badgeContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const badgeVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="eco-score-container">
      <motion.div 
        className="score-circle"
        variants={circleVariants}
        initial="hidden"
        animate="visible"
      >
        <h2>{score}</h2>
        <p>Éco-score</p>
        <svg className="score-ring" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="var(--primary-color)"
            strokeWidth="5"
            strokeDasharray={`${score * 2.83} 283`}
            transform="rotate(-90 50 50)"
          />
        </svg>
      </motion.div>

      <motion.div 
        className="badges-grid"
        variants={badgeContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {badges.map(badge => (
          <motion.div key={badge.id} variants={badgeVariants}>
            <Badge {...badge} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 