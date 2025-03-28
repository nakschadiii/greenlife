import { motion } from 'framer-motion';
import { MOCK_DATA } from '../services/mockData';

export function Recommendations() {
  return (
    <motion.div
      className="recommendations-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1>Recommandations</h1>
      
      <div className="recommendations-grid">
        {MOCK_DATA.recommendations.map(recommendation => (
          <motion.div
            key={recommendation.id}
            className={`recommendation-card difficulty-${recommendation.difficulty}`}
            whileHover={{ scale: 1.05 }}
          >
            <h3>{recommendation.title}</h3>
            <p>{recommendation.description}</p>
            <div className="savings">
              Économies potentielles: {recommendation.potentialSavings}€/an
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
} 