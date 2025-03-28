import { motion } from 'framer-motion';
import { ConsumptionResponse } from '@/types/consumption';
import styled from '@emotion/styled';
import { ConsumptionAreaChart } from './charts/ConsumptionAreaChart';

const ResultsContainer = styled.div`
  margin-top: 24px;
  padding: 24px;
  background: var(--bg-secondary);
  border-radius: 8px;
  box-shadow: var(--shadow-md);
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Value = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
`;

const ResultSection = styled.div`
  margin-bottom: var(--spacing-md);

  h3 {
    color: var(--text-primary);
    margin-bottom: var(--spacing-sm);
  }
`;

const ResultValue = styled.div<{ color?: string }>`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${props => props.color || 'var(--text-primary)'};
`;

const DetailsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const DetailItem = styled.li`
  margin-bottom: var(--spacing-xs);
`;

const DetailLabel = styled.span`
  font-weight: bold;
`;

const DetailValue = styled.span`
  margin-left: var(--spacing-sm);
`;

interface ConsumptionResultsProps {
  results: ConsumptionResponse;
}

export function ConsumptionResults({ results }: ConsumptionResultsProps) {
  const getRecommendations = () => {
    const recommendations = [];
    
    if (results.details.transport_kg_mois > 100) {
      recommendations.push("Votre impact transport est élevé. Privilégiez les transports en commun ou le vélo quand c'est possible.");
    }
    
    if (results.details.equipements_kg_mois > 50) {
      recommendations.push("Vos équipements consomment beaucoup. Pensez à les éteindre quand ils ne sont pas utilisés.");
    }
    
    if (results.details.logement_total_kg_mois > 100) {
      recommendations.push("La consommation de votre logement est importante. Vérifiez votre isolation et votre système de chauffage.");
    }
    
    return recommendations;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <ResultsContainer>
        <Section>
          <h3>Émissions totales</h3>
          <Value>{results.consommation_totale.toFixed(2)} kg CO2/mois</Value>
        </Section>

        <Section>
          <h3>Détails</h3>
          <p>Transport: {results.details.transport_kg_mois.toFixed(2)} kg CO2/mois</p>
          <p>Équipements: {results.details.equipements_kg_mois.toFixed(2)} kg CO2/mois</p>
          <p>Logement: {results.details.logement_total_kg_mois.toFixed(2)} kg CO2/mois</p>
        </Section>

        <ConsumptionAreaChart data={results} />

        <ResultSection>
          <h3>Détails par catégorie</h3>
          <DetailsList>
            <DetailItem>
              <DetailLabel>Transport</DetailLabel>
              <DetailValue>{results.details.transport_kg_mois.toFixed(2)} kg CO2/mois</DetailValue>
            </DetailItem>
            <DetailItem>
              <DetailLabel>Équipements</DetailLabel>
              <DetailValue>{results.details.equipements_kg_mois.toFixed(2)} kg CO2/mois</DetailValue>
            </DetailItem>
            <DetailItem>
              <DetailLabel>Logement</DetailLabel>
              <DetailValue>{results.details.logement_total_kg_mois.toFixed(2)} kg CO2/mois</DetailValue>
            </DetailItem>
          </DetailsList>
        </ResultSection>

        <ResultSection>
          <h3>Recommandations</h3>
          <ul>
            {getRecommendations().map((recommendation, index) => (
              <li key={index}>{recommendation}</li>
            ))}
          </ul>
        </ResultSection>
      </ResultsContainer>
    </motion.div>
  );
} 