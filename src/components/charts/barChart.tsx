import React from 'react';
import {
    VictoryBar,
    VictoryChart,
    VictoryLabel,
    VictoryLegend,
    VictoryTheme
} from 'victory-native';
import { theme } from '../../theme/theme';

function BarChart() {
  return (
    //     <VictoryChart width={350} theme={VictoryTheme.material}>
    //     <VictoryBar data={data} x="quarter" y="earnings" />
    //   </VictoryChart>
    <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
      <VictoryBar
        style={{data: {fill: d => d.datum.colorScale}}}
        data={[
          {x: 1, y: 3, label: 'Alpha', colorScale: '#9167f1'},
          {x: 2, y: 4, label: 'Bravo', colorScale: '#f26893'},
          {x: 3, y: 6, label: 'Charlie', colorScale: '#99cfef'},
          {x: 4, y: 3, label: 'Delta', colorScale: '#99ef9a'},
        ]}
        labelComponent={<VictoryLabel textAnchor="start" />}
      />
      <VictoryLegend
          x={0}
          y={10}
          centerTitle
          orientation="horizontal"
          style={{title: {fontSize: 20,color: theme.colors.text}}}
          data={[
            {name: 'One', symbol: {fill: 'tomato', type: 'star'}},
            {name: 'Two', symbol: {fill: 'orange'}},
            {name: 'Three', symbol: {fill: 'gold'}},
          ]}
        />
    </VictoryChart>
  );
}
export default BarChart;
