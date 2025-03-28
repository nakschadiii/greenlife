import { ConsumptionChart } from '@/components/charts/ConsumptionChart';
import { EcoScore } from '@/components/gamification/EcoScore';
import { AlertsList } from '@/components/alerts/AlertsList';
import { AnimatedTransition } from '@/components/AnimatedTransition';

export default function Dashboard() {
  return (
    <AnimatedTransition>
      <div className="dashboard">
        <div className="dashboard-grid">
          <section className="dashboard-section">
            <ConsumptionChart />
          </section>
          <section className="dashboard-section">
            <EcoScore />
          </section>
          <section className="dashboard-section">
            <AlertsList />
          </section>
        </div>
      </div>
    </AnimatedTransition>
  );
} 