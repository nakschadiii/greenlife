import { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { ConsumptionRequest } from '@/types/consumption';
import { useConsumptionCalculator } from '@/hooks/useConsumptionCalculator';
import { FormField } from './FormField';
import { ConsumptionResults } from './ConsumptionResults';
import { LoadingSpinner } from './LoadingSpinner';
import { ErrorMessage } from './ErrorMessage';
import { useNotification } from '@/contexts/NotificationContext';

const Form = styled.form`
  background: var(--bg-secondary);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
`;

const SubmitButton = styled.button`
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const initialValues: ConsumptionRequest = {
  logement: 'maison',
  surface_m2: 90,
  chauffage: 'electrique',
  ampoules: 15,
  lave_linge: 1,
  lave_vaisselle: 1,
  four: 1,
  climatisation: 0,
  nb_personnes: 3,
  transport_mode: 'voiture',
  transport_km_semaine: 120
};

export function ConsumptionCalculator() {
  const [formData, setFormData] = useState<ConsumptionRequest>(initialValues);
  const { result, calculate, loading, error } = useConsumptionCalculator();
  const { addNotification } = useNotification();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await calculate(formData);
      addNotification('Calcul effectué avec succès', 'success');
    } catch (error) {
      addNotification('Erreur lors du calcul', 'error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value
    }));
  };

  if (error) {
    return <ErrorMessage message={error} onRetry={() => calculate(formData)} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Form onSubmit={handleSubmit}>
        <FormField
          label="Type de logement"
          name="logement"
          type="select"
          value={formData.logement}
          onChange={handleChange}
          options={[
            { value: 'maison', label: 'Maison' },
            { value: 'appartement', label: 'Appartement' }
          ]}
        />
        
        <FormField
          label="Surface (m²)"
          name="surface_m2"
          type="number"
          value={formData.surface_m2}
          onChange={handleChange}
          min={0}
        />

        <FormField
          label="Type de chauffage"
          name="chauffage"
          type="select"
          value={formData.chauffage}
          onChange={handleChange}
          options={[
            { value: 'electrique', label: 'Électrique' },
            { value: 'gaz', label: 'Gaz' },
            { value: 'pompe à chaleur', label: 'Pompe à chaleur' }
          ]}
        />

        <FormField
          label="Nombre de personnes"
          name="nb_personnes"
          type="number"
          value={formData.nb_personnes}
          onChange={handleChange}
          min={1}
        />

        <FormField
          label="Mode de transport principal"
          name="transport_mode"
          type="select"
          value={formData.transport_mode}
          onChange={handleChange}
          options={[
            { value: 'voiture', label: 'Voiture' },
            { value: 'velo', label: 'Vélo' },
            { value: 'marche', label: 'Marche' }
          ]}
        />

        <FormField
          label="Kilomètres par semaine"
          name="transport_km_semaine"
          type="number"
          value={formData.transport_km_semaine}
          onChange={handleChange}
          min={0}
        />

        <h3>Équipements</h3>
        
        <FormField
          label="Nombre d'ampoules"
          name="ampoules"
          type="number"
          value={formData.ampoules}
          onChange={handleChange}
          min={0}
        />

        <FormField
          label="Lave-linge"
          name="lave_linge"
          type="number"
          value={formData.lave_linge}
          onChange={handleChange}
          min={0}
        />

        <FormField
          label="Lave-vaisselle"
          name="lave_vaisselle"
          type="number"
          value={formData.lave_vaisselle}
          onChange={handleChange}
          min={0}
        />

        <FormField
          label="Four"
          name="four"
          type="number"
          value={formData.four}
          onChange={handleChange}
          min={0}
        />

        <FormField
          label="Climatisation"
          name="climatisation"
          type="number"
          value={formData.climatisation}
          onChange={handleChange}
          min={0}
        />

        <SubmitButton type="submit" disabled={loading}>
          {loading ? <LoadingSpinner /> : 'Calculer'}
        </SubmitButton>
      </Form>

      {result && <ConsumptionResults results={result} />}
    </motion.div>
  );
}