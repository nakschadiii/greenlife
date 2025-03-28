import { motion } from 'framer-motion';
import { MOCK_DATA } from '../services/mockData';

export default function EcoChallenges() {
  return (
    <motion.div
      className="challenges-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1>Défis Écologiques</h1>
      
      <div className="challenges-grid">
        {MOCK_DATA.challenges.map(challenge => (
          <motion.div
            key={challenge.id}
            className="challenge-card"
            whileHover={{ scale: 1.02 }}
          >
            <h3>{challenge.title}</h3>
            <p>{challenge.description}</p>
            <div className="progress-bar">
              <div 
                className="progress" 
                style={{ width: `${challenge.progress}%` }}
              />
            </div>
            <div className="challenge-info">
              <span>Récompense: {challenge.reward}</span>
              <span>Durée: {challenge.duration}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
} 