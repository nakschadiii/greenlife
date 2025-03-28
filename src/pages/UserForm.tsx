import { useState } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '@/context/AppContext';
import '@/styles/forms.css';

export function UserForm() {
  const { user } = useApp();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    householdSize: 2,
    homeType: 'apartment',
    hasWashingMachine: true,
    hasDishwasher: true,
    hasAirConditioning: false,
    transportationType: 'public',
    address: '',
    city: '',
    postalCode: '',
    phoneNumber: '',
    preferredContactMethod: 'email',
    energyProvider: '',
    heatingType: 'electric',
    homeSize: '',
    yearBuilt: '',
    occupationType: 'owner'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Profil mis à jour:', formData);
  };

  return (
    <motion.div
      className="profile-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1>Mon Profil</h1>
      
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-section">
          <h3>Informations Personnelles</h3>
          
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                name: e.target.value
              }))}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                email: e.target.value
              }))}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Téléphone</label>
            <input
              type="tel"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                phoneNumber: e.target.value
              }))}
            />
          </div>

          <div className="form-group">
            <label htmlFor="preferredContactMethod">Méthode de contact préférée</label>
            <select
              id="preferredContactMethod"
              value={formData.preferredContactMethod}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                preferredContactMethod: e.target.value
              }))}
            >
              <option value="email">Email</option>
              <option value="phone">Téléphone</option>
              <option value="sms">SMS</option>
            </select>
          </div>
        </div>

        <div className="form-section">
          <h3>Adresse</h3>
          
          <div className="form-group">
            <label htmlFor="address">Adresse</label>
            <input
              type="text"
              id="address"
              value={formData.address}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                address: e.target.value
              }))}
            />
          </div>

          <div className="form-group">
            <label htmlFor="city">Ville</label>
            <input
              type="text"
              id="city"
              value={formData.city}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                city: e.target.value
              }))}
            />
          </div>

          <div className="form-group">
            <label htmlFor="postalCode">Code postal</label>
            <input
              type="text"
              id="postalCode"
              value={formData.postalCode}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                postalCode: e.target.value
              }))}
            />
          </div>
        </div>

        <div className="form-section">
          <h3>Logement</h3>
          
          <div className="form-group">
            <label htmlFor="homeType">Type de logement</label>
            <select
              id="homeType"
              value={formData.homeType}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                homeType: e.target.value
              }))}
            >
              <option value="apartment">Appartement</option>
              <option value="house">Maison</option>
              <option value="studio">Studio</option>
              <option value="loft">Loft</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="occupationType">Type d'occupation</label>
            <select
              id="occupationType"
              value={formData.occupationType}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                occupationType: e.target.value
              }))}
            >
              <option value="owner">Propriétaire</option>
              <option value="tenant">Locataire</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="homeSize">Surface (m²)</label>
            <input
              type="number"
              id="homeSize"
              value={formData.homeSize}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                homeSize: e.target.value
              }))}
            />
          </div>

          <div className="form-group">
            <label htmlFor="yearBuilt">Année de construction</label>
            <input
              type="number"
              id="yearBuilt"
              value={formData.yearBuilt}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                yearBuilt: e.target.value
              }))}
            />
          </div>

          <div className="form-group">
            <label htmlFor="householdSize">Nombre de personnes</label>
            <input
              type="number"
              id="householdSize"
              min="1"
              value={formData.householdSize}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                householdSize: parseInt(e.target.value)
              }))}
            />
          </div>
        </div>

        <div className="form-section">
          <h3>Énergie</h3>

          <div className="form-group">
            <label htmlFor="energyProvider">Fournisseur d'énergie</label>
            <input
              type="text"
              id="energyProvider"
              value={formData.energyProvider}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                energyProvider: e.target.value
              }))}
            />
          </div>

          <div className="form-group">
            <label htmlFor="heatingType">Type de chauffage</label>
            <select
              id="heatingType"
              value={formData.heatingType}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                heatingType: e.target.value
              }))}
            >
              <option value="electric">Électrique</option>
              <option value="gas">Gaz</option>
              <option value="fuel">Fioul</option>
              <option value="wood">Bois</option>
              <option value="heatPump">Pompe à chaleur</option>
            </select>
          </div>
        </div>

        <div className="form-section">
          <h3>Équipements</h3>
          
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={formData.hasWashingMachine}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  hasWashingMachine: e.target.checked
                }))}
              />
              Machine à laver
            </label>
          </div>

          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={formData.hasDishwasher}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  hasDishwasher: e.target.checked
                }))}
              />
              Lave-vaisselle
            </label>
          </div>

          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={formData.hasAirConditioning}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  hasAirConditioning: e.target.checked
                }))}
              />
              Climatisation
            </label>
          </div>
        </div>

        <button type="submit" className="submit-button">
          Enregistrer les modifications
        </button>
      </form>
    </motion.div>
  );
} 