import { theme as T, useTheme } from 'native-base';
import React from 'react';
import {
    VictoryAxis,
    VictoryBar,
    VictoryBoxPlot,
    VictoryChart,
    VictoryLabel,
    VictoryLegend,
    VictoryTheme,
} from 'victory-native';
import { theme } from '../../theme/theme';

function BoxPlotChart() {
    return (
        <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
            <VictoryAxis
                theme={VictoryTheme.material}
                standalone={false}
                style={{ tickLabels: { fill: theme.colors.text } }}
            />
            <VictoryAxis
                dependentAxis
                crossAxis
                theme={VictoryTheme.material}
                standalone={false}
                style={{ tickLabels: { fill: theme.colors.text } }}
            />
            <VictoryBoxPlot
                horizontal
                data={[
                    { x: 1, y: [1, 2, 3, 5] },
                    { x: 2, y: [3, 2, 8, 10] },
                    { x: 3, y: [2, 8, 6, 5] },
                    { x: 4, y: [1, 3, 2, 9] }
                ]}
                style={{
                    min: { stroke: "tomato" },
                    max: { stroke: "orange" },
                    q1: { fill: "tomato" },
                    q3: { fill: "orange" },
                    median: { stroke: "white", strokeWidth: 2 },
                    minLabels: { fill: "tomato" },
                    maxLabels: { fill: "orange" }
                  }}
            />
            <VictoryLegend
                x={0}
                y={10}
                centerTitle
                orientation="horizontal"
                style={{ title: { fontSize: 20, color: theme.colors.text } }}
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
export default BoxPlotChart;
