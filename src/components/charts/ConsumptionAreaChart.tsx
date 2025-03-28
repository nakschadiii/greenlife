import { useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { ConsumptionResponse } from '@/types/consumption';

interface ConsumptionAreaChartProps {
  data: ConsumptionResponse;
}

export function ConsumptionAreaChart({ data }: ConsumptionAreaChartProps) {
  const chartData = useMemo(() => {
    return [
      {
        month: 'Actuel',
        transport: data.details.transport_kg_mois,
        equipements: data.details.equipements_kg_mois,
        logement: data.details.logement_total_kg_mois
      }
    ];
  }, [data]);

  return (
    <motion.div 
      className="chart-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={chartData}>
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
              dataKey="transport"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
              name="Transport"
            />
            <Area
              type="monotone"
              dataKey="equipements"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
              name="Équipements"
            />
            <Area
              type="monotone"
              dataKey="logement"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
              name="Logement"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
} 