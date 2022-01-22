import {
  VictoryBar,
  VictoryGroup,
  VictoryChart,
  VictoryLabel,
  VictoryTheme,
  VictoryLegend,
} from 'victory-native';
import React from 'react';
import {theme} from '../../theme/theme';
function GroupBarChart() {
  return (
    //     <VictoryChart width={350} theme={VictoryTheme.material}>
    //     <VictoryBar data={data} x="quarter" y="earnings" />
    //   </VictoryChart>
    <VictoryChart theme={VictoryTheme.material} domain={{y: [0.5, 5.5]}}>
      <VictoryGroup
        offset={24}
        style={{data: {width: 20}}}
        colorScale={[theme.colors.blue1, theme.colors.blue2, theme.colors.red1]}
        labelComponent={<VictoryLabel textAnchor="start" />}>
        <VictoryBar
          data={[
            {x: 1, y: 1, label: 'Alpha'},
            {x: 2, y: 2, label: 'Alpha'},
            {x: 3, y: 3, label: 'Alpha'},
          ]}
        />
        <VictoryBar
          data={[
            {x: 1, y: 2, label: 'Alpha'},
            {x: 2, y: 3, label: 'Alpha'},
            {x: 3, y: 4, label: 'Alpha'},
          ]}
        />
        <VictoryBar
          data={[
            {x: 1, y: 1, label: 'Alpha'},
            {x: 2, y: 2, label: 'Alpha'},
            {x: 3, y: 3, label: 'Alpha'},
          ]}
        />
      </VictoryGroup>
      <VictoryLegend
          x={0}
          y={10}
          centerTitle
          orientation="horizontal"
          gutter={20}
          style={{ title: {fontSize: 20}}}
          data={[
            {name: 'One', symbol: {fill: 'tomato', type: 'star'}},
            {name: 'Two', symbol: {fill: 'orange'}},
            {name: 'Three', symbol: {fill: 'gold'}},
          ]}
        />
    </VictoryChart>
  );
}
export default GroupBarChart;
