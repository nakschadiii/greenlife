import { useState } from 'react';
import { motion } from 'framer-motion';

interface SavingsSimulatorProps {
  baseConsumption: number;
  potentialSavings: number;
}

export function SavingsSimulator({ baseConsumption, potentialSavings }: SavingsSimulatorProps) {
  const [months, setMonths] = useState(12);
  const annualSavings = potentialSavings;
  const monthlySavings = annualSavings / 12;
  const totalSavings = (monthlySavings * months).toFixed(2);

  return (
    <div className="savings-simulator">
      <h3>Simulateur d'économies</h3>
      
      <div className="simulator-controls">
        <label htmlFor="months">Période (mois)</label>
        <input
          type="range"
          id="months"
          min="1"
          max="60"
          value={months}
          onChange={(e) => setMonths(parseInt(e.target.value))}
        />
        <span>{months} mois</span>
      </div>

      <motion.div 
        className="savings-result"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        key={totalSavings}
      >
        <p>Économies estimées :</p>
        <h2>{totalSavings}€</h2>
      </motion.div>

      <div className="savings-details">
        <div className="detail-item">
          <span>Consommation actuelle</span>
          <span>{baseConsumption}€/mois</span>
        </div>
        <div className="detail-item">
          <span>Économies mensuelles</span>
          <span>{monthlySavings.toFixed(2)}€</span>
        </div>
      </div>
    </div>
  );
} 