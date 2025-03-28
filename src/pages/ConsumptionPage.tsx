import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { ConsumptionCalculator } from '@/components/ConsumptionCalculator';
import { useNavigate } from 'react-router-dom';
import { ConsumptionAreaChart } from '@/components/charts/ConsumptionAreaChart';

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: var(--spacing-lg);
`;

const PageHeader = styled.header`
  text-align: center;
  margin-bottom: var(--spacing-xl);
`;

const PageTitle = styled.h1`
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
`;

const PageDescription = styled.p`
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
`;

const NavigationBar = styled.nav`
  margin-bottom: var(--spacing-xl);
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
`;

const NavButton = styled.button`
  background: var(--bg-secondary);
  color: var(--text-primary);
  border: none;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: var(--primary-color);
    color: white;
  }
`;

export function ConsumptionPage() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageContainer>
        <PageHeader>
          <PageTitle>Calculateur d'Empreinte Carbone</PageTitle>
          <PageDescription>
            Estimez votre impact environnemental et découvrez des recommandations personnalisées
            pour réduire votre empreinte carbone.
          </PageDescription>
        </PageHeader>

        <NavigationBar>
          <NavButton onClick={() => navigate('/dashboard')}>
            Tableau de bord
          </NavButton>
          <NavButton onClick={() => navigate('/recommendations')}>
            Recommandations
          </NavButton>
          <NavButton onClick={() => navigate('/history')}>
            Historique
          </NavButton>
        </NavigationBar>

        <ConsumptionCalculator />
      </PageContainer>
    </motion.div>
  );
}

export default ConsumptionPage; 