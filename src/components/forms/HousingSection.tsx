import { useState } from 'react';

export function HousingSection() {
  const [housingData, setHousingData] = useState({
    type: '',
    size: '',
    heatingType: '',
    residents: 1
  });

  return (
    <div className="form-section">
      <h3>Votre Logement</h3>
      
      <div className="form-group">
        <label>Type de logement</label>
        <select 
          value={housingData.type}
          onChange={(e) => setHousingData(prev => ({
            ...prev,
            type: e.target.value
          }))}
        >
          <option value="">Sélectionnez...</option>
          <option value="apartment">Appartement</option>
          <option value="house">Maison</option>
        </select>
      </div>

      <div className="form-group">
        <label>Surface (m²)</label>
        <input 
          type="number"
          value={housingData.size}
          onChange={(e) => setHousingData(prev => ({
            ...prev,
            size: e.target.value
          }))}
        />
      </div>

      <div className="form-group">
        <label>Type de chauffage</label>
        <select 
          value={housingData.heatingType}
          onChange={(e) => setHousingData(prev => ({
            ...prev,
            heatingType: e.target.value
          }))}
        >
          <option value="">Sélectionnez...</option>
          <option value="electric">Électrique</option>
          <option value="gas">Gaz</option>
          <option value="heat_pump">Pompe à chaleur</option>
        </select>
      </div>
    </div>
  );
} 