import {
    VictoryBar,
    VictoryGroup,
    VictoryChart,
    VictoryLabel,
    VictoryTheme,
    VictoryLegend,
    VictoryAxis,
    VictoryArea,
} from 'victory-native';
import React from 'react';
import { theme } from '../../theme/theme';
function DomainChart() {
    const data = [
        { x: "June", y: 8 },
        { x: "Thu-3", y: 10 },
        { x: "Mon7", y: 7 },
        { x: "Wed09", y: 4 },
        { x:"Fri11", y: 6 },
        { x: "Sat12", y: 3 },
        { x: "Sun123", y: 7 },
        { x: "Mon15", y: 9 },
        { x: "Thu16", y: 6 }
    ];
    return (

        <VictoryChart  theme={VictoryTheme.material}>
            {/* <VictoryAxis
          theme={VictoryTheme.material}
          standalone={false}
          style={{tickLabels: {fill: theme.colors.text}}}
        /> */}
            <VictoryArea
                data={data}
                style={{ data: { fill: 'lightblue', stroke: 'teal' } }}
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
export default DomainChart;
