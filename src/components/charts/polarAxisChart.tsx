import {
    VictoryBar,
    VictoryGroup,
    VictoryChart,
    VictoryLabel,
    VictoryTheme,
    VictoryLegend,
    VictoryAxis,
    VictoryPolarAxis,
} from 'victory-native';
import React from 'react';
import { theme } from '../../theme/theme';
function PolarAxisChart() {
    return (

        <VictoryChart polar theme={VictoryTheme.material} startAngle={90}
            endAngle={450}>
            <VictoryPolarAxis
                tickValues={[0, 45, 90, 135, 180, 225, 270, 315]}
                labelPlacement="vertical"
            />
            <VictoryBar style={{ data: { fill: "tomato", width: 30 } }}
                data={[
                    { x: 0, y: 2 },
                    { x: 60, y: 3 },
                    { x: 120, y: 5 },
                    { x: 180, y: 4 },
                    { x: 240, y: 4 },
                    { x: 300, y: 4 }
                ]}
            />
            <VictoryLegend
                x={0}
                y={10}
                centerTitle
                orientation="horizontal"
                gutter={20}
                style={{
                    title: { fontSize: 20 },
                }}
                data={[
                    {
                        name: 'One',
                        symbol: { fill: 'tomato', type: 'star' },
                        labels: { fill: theme.colors.text },
                    },
                    {
                        name: 'Two',
                        symbol: { fill: 'orange' },
                        labels: { fill: theme.colors.text },
                    },
                    {
                        name: 'Three',
                        symbol: { fill: 'gold' },
                        labels: { fill: theme.colors.text },
                    },
                ]}
            />
        </VictoryChart>
    );
}
export default PolarAxisChart;
