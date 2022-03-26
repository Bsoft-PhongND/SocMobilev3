import {
    VictoryBar,
    VictoryGroup,
    VictoryChart,
    VictoryLabel,
    VictoryTheme,
    VictoryLegend,
    VictoryAxis,
} from 'victory-native';
import React from 'react';
import { theme } from '../../theme/theme';
function PolarChart() {
    return (
        //     <VictoryChart width={350} theme={VictoryTheme.material}>
        //     <VictoryBar data={data} x="quarter" y="earnings" />
        //   </VictoryChart>
        <VictoryChart polar theme={VictoryTheme.material} domain={{ x: [0, 360] }}>
            {/* <VictoryAxis
          theme={VictoryTheme.material}
          standalone={false}
          style={{tickLabels: {fill: theme.colors.text}}}
        /> */}
            <VictoryBar
            animate={{
                duration: 2000,
                easing: "bounce"
              }}
                data={[
                    { x: 90, y: 50, colorScale: theme.colors.hight },
                    { x:120, y: 120, colorScale: theme.colors.medium },
                    { x:180, y: 100, colorScale: theme.colors.medium },
                    { x: 270, y: 70, colorScale: theme.colors.low},
                    { x: 360, y: 100, colorScale: theme.colors.low}
                ]}
                style={{ data: { fill: "#c43a31", stroke: "black", strokeWidth: 2 } }}
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
export default PolarChart;
