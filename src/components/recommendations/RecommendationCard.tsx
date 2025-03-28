import { motion } from 'framer-motion';
import { Recommendation } from '@/types';

interface RecommendationCardProps {
  recommendation: Recommendation;
  onSelect?: (recommendation: Recommendation) => void;
}

export function RecommendationCard({ recommendation, onSelect }: RecommendationCardProps) {
  const difficultyColors = {
    easy: 'var(--success-color)',
    medium: 'var(--warning-color)',
    hard: 'var(--danger-color)'
  };

  return (
    <motion.div
      className="recommendation-card"
      whileHover={{ scale: 1.02 }}
      onClick={() => onSelect?.(recommendation)}
    >
      <div className="recommendation-header">
        <h3>{recommendation.title}</h3>
        <span 
          className="difficulty-badge"
          style={{ backgroundColor: difficultyColors[recommendation.difficulty] }}
        >
          {recommendation.difficulty}
        </span>
      </div>
      <p>{recommendation.description}</p>
      <div className="recommendation-footer">
        <span className="savings">
          Économies potentielles: {recommendation.potentialSavings}€/an
        </span>
        <span className="category-tag">
          {recommendation.category}
        </span>
      </div>
    </motion.div>
  );
} 