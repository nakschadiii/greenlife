import { useState } from 'react';

export function AppliancesSection() {
  const [appliancesData, setAppliancesData] = useState({
    hasWashingMachine: false,
    hasDishwasher: false,
    hasAirConditioning: false,
    lightBulbsCount: 0
  });

  return (
    <div className="form-section">
      <h3>Vos Équipements</h3>
      
      <div className="form-group">
        <label>
          <input 
            type="checkbox"
            checked={appliancesData.hasWashingMachine}
            onChange={(e) => setAppliancesData(prev => ({
              ...prev,
              hasWashingMachine: e.target.checked
            }))}
          />
          Machine à laver
        </label>
      </div>

      <div className="form-group">
        <label>Nombre d'ampoules</label>
        <input 
          type="number"
          value={appliancesData.lightBulbsCount}
          onChange={(e) => setAppliancesData(prev => ({
            ...prev,
            lightBulbsCount: parseInt(e.target.value)
          }))}
        />
      </div>
    </div>
  );
} 