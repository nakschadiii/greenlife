import { useState } from 'react';

export function TransportSection() {
  const [transportData, setTransportData] = useState({
    mainTransport: '',
    kmPerWeek: '',
    hasElectricVehicle: false
  });

  return (
    <div className="form-section">
      <h3>Vos Transports</h3>
      
      <div className="form-group">
        <label>Mode de transport principal</label>
        <select 
          value={transportData.mainTransport}
          onChange={(e) => setTransportData(prev => ({
            ...prev,
            mainTransport: e.target.value
          }))}
        >
          <option value="">Sélectionnez...</option>
          <option value="car">Voiture</option>
          <option value="public">Transport en commun</option>
          <option value="bike">Vélo</option>
          <option value="walk">Marche</option>
        </select>
      </div>

      <div className="form-group">
        <label>Kilomètres par semaine</label>
        <input 
          type="number"
          value={transportData.kmPerWeek}
          onChange={(e) => setTransportData(prev => ({
            ...prev,
            kmPerWeek: e.target.value
          }))}
        />
      </div>
    </div>
  );
} 