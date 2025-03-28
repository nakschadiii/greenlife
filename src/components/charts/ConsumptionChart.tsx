import { useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useConsumption } from '@/hooks/useConsumption';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { motion } from 'framer-motion';

export function ConsumptionChart() {
  const { data, loading, error } = useConsumption();

  const totalConsumption = useMemo(() => {
    if (!data.length) return 0;
    return data.reduce((acc, curr) => 
      acc + curr.electricity + curr.transport + curr.house, 0
    );
  }, [data]);

  const averageConsumption = totalConsumption / (data.length || 1);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <motion.div 
      className="chart-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="chart-header">
        <h3>Consommation Énergétique</h3>
        <div className="chart-stats">
          <div className="stat-item">
            <span className="stat-label">Moyenne mensuelle</span>
            <span className="stat-value">{averageConsumption.toFixed(0)} kWh</span>
          </div>
        </div>
      </div>

      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip 
              contentStyle={{ 
                background: 'var(--card-bg)',
                border: '1px solid var(--border-color)'
              }}
            />
            <Area
              type="monotone"
              dataKey="electricity"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
              name="Électricité"
            />
            <Area
              type="monotone"
              dataKey="transport"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
              name="Transport"
            />
            <Area
              type="monotone"
              dataKey="house"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
              name="Maison"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-legend">
        <div className="legend-item">
          <span className="legend-color" style={{ background: '#8884d8' }}></span>
          <span>Électricité</span>
        </div>
        <div className="legend-item">
          <span className="legend-color" style={{ background: '#82ca9d' }}></span>
          <span>Transport</span>
        </div>
        <div className="legend-item">
          <span className="legend-color" style={{ background: '#ffc658' }}></span>
          <span>Maison</span>
        </div>
      </div>
    </motion.div>
  );
} 