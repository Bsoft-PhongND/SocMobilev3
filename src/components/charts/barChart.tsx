import React from 'react';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryLegend,
  VictoryTheme,
} from 'victory-native';
import {theme} from '../../theme/theme';

function BarChart() {
  return (
    //     <VictoryChart width={350} theme={VictoryTheme.material}>
    //     <VictoryBar data={data} x="quarter" y="earnings" />
    //   </VictoryChart>
    <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
      <VictoryAxis
        theme={VictoryTheme.material}
        standalone={false}
        style={{tickLabels: {fill: theme.colors.text}}}
      />
      <VictoryAxis
        dependentAxis
        crossAxis
        theme={VictoryTheme.material}
        standalone={false}
        style={{tickLabels: {fill: theme.colors.text}}}
      />
      <VictoryBar
        style={{data: {fill: d => d.datum.colorScale}}}
        data={[
          {x: 'Pending', y: 3, colorScale: '#9167f1'},
          {x: 'Verified', y: 4, colorScale: '#f26893'},
          {x: 'Waiting', y: 6, colorScale: '#99cfef'},
          {x: 'Notified', y: 3, colorScale: '#99ef9a'},
        ]}
        labelComponent={<VictoryLabel textAnchor="start" />}
      />
      <VictoryLegend
        x={0}
        y={10}
        centerTitle
        orientation="horizontal"
        style={{title: {fontSize: 20, color: theme.colors.text}}}
        data={[
          {
            name: 'One',
            symbol: {fill: 'tomato', type: 'star'},
            labels: {fill: theme.colors.text},
          },
          {
            name: 'Two',
            symbol: {fill: 'orange'},
            labels: {fill: theme.colors.text},
          },
          {
            name: 'Three',
            symbol: {fill: 'gold'},
            labels: {fill: theme.colors.text},
          },
        ]}
      />
    </VictoryChart>
  );
}
export default BarChart;
