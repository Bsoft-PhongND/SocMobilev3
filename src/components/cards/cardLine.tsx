import React from 'react';
import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryScatter,
} from 'victory-native';
import victoryCustum from '../victoryCustum';
import {theme} from '../../theme/theme';
import {windowWidth} from '../../utils/Dimensions';
const chartData = [
  {x: '01/2022', y: 100},
  {x: '02/2022', y: 600},
  {x: '03/2022', y: 700},
  {x: '04/2022', y: 400},
  {x: '05/2022', y: 900},
];
function CardLineChart() {
  return (
    <VictoryChart theme={victoryCustum} height={220} width={windowWidth * 0.9}>
      <VictoryLine
        style={{
          data: {
            stroke: theme.colors.border,
          }
        }}
        data={chartData}
      />
      <VictoryScatter
        data={chartData}
        size={7}
        style={{
          data: {
            fill: theme.colors.border,
          },
        }}
      />
      <VictoryAxis
       minDomain={100}
        style={{
          grid: {
            // stroke: 'transparent',
          },
        }}
      />
      <VictoryAxis
        dependentAxis
       minDomain={100}
        style={{
          grid: {
            stroke: 'gray',
          },
          axis: {
            stroke: 'transparent',
          },
        }}
      />
    </VictoryChart>
  );
}
export default CardLineChart;
