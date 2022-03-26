import {
    VictoryBar,
    VictoryGroup,
    VictoryChart,
    VictoryLabel,
    VictoryTheme,
    VictoryLegend,
    VictoryAxis,
    VictoryLine,
} from 'victory-native';
import React from 'react';
import { theme } from '../../theme/theme';
function MultiLineChart() {
    const dataSin = [
        {x:0,y:1},
        {x:1,y:0},
        {x:2,y:-1},
        {x:3,y:-1},
    ];
    const dataCos = [
        {x:0,y:0},
        {x:1,y:1},
        {x:2,y:0},


    ]
    return (

        <VictoryChart theme={VictoryTheme.material} >
            <VictoryLine
                samples={50}
                style={{
                    data:
                        { stroke: "red", strokeWidth: 4 }
                }}
                y={(data) => Math.sin(2 * Math.PI * data.x)}

            />

            <VictoryLine
                samples={10}
                style={{
                    data:
                        { stroke: "blue", strokeWidth: 4 }
                }}
                y={(data) => Math.cos(2 * Math.PI * data.x)}
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
export default MultiLineChart;
