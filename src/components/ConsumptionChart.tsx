import { ResponsivePie } from '@nivo/pie';
import styled from '@emotion/styled';
import { ConsumptionResponse } from '@/types/consumption';

const ChartContainer = styled.div`
  height: 300px;
  margin: var(--spacing-lg) 0;
`;

interface ConsumptionChartProps {
  data: ConsumptionResponse;
}

export function ConsumptionChart({ data }: ConsumptionChartProps) {
  const chartData = [
    {
      id: 'Transport',
      label: 'Transport',
      value: data.details.transport_kg_mois,
    },
    {
      id: 'Équipements',
      label: 'Équipements',
      value: data.details.equipements_kg_mois,
    },
    {
      id: 'Logement',
      label: 'Logement',
      value: data.details.logement_total_kg_mois,
    },
  ];

  return (
    <ChartContainer>
      <ResponsivePie
        data={chartData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'nivo' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="var(--text-primary)"
        arcLinkLabelsThickness={2}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: 'var(--text-primary)',
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: 'circle',
          },
        ]}
      />
    </ChartContainer>
  );
} 