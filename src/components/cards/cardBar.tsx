import React from 'react';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryLegend,
  VictoryTheme,
} from 'victory-native';
import barChartModel, {labelBarChartModel} from '../../model/barChart';
import {theme} from '../../theme/theme';
interface PropsTypes {
  dataSource?: {x: string; y: string | number; colorScale?: string}[];
  height?: number;
  lablesOptions?: {
    x?: number;
    y?: number;
  };
  horizontal?: boolean;
}
function CardBar(props: PropsTypes) {
  const {
    dataSource = barChartModel,
    height = 350,
    lablesOptions = {x: 0, y: 10},
    horizontal=false
  } = props;
  const lables = dataSource.map((type, index) => {
    return {
      name: type.x || type?.lable,
      symbol: {fill: type.colorScale},
      labels: {fill: theme.colors.text},
    };
  });
  return (
    <VictoryChart
      theme={VictoryTheme.material}
      domainPadding={20}
      height={height}>
      <VictoryAxis
        // theme={VictoryTheme.material}
        standalone={false}
        style={{tickLabels: {fill: theme.colors.text}, grid:{
          stroke: theme.colors.hidden
        }}}
      />
      <VictoryAxis
        dependentAxis
        crossAxis
        // theme={VictoryTheme.material}
        standalone={false}
        style={{tickLabels: {fill: theme.colors.text}, grid:{
          stroke: theme.colors.hidden
        }}}
      />
      <VictoryBar
        horizontal={horizontal}
        style={{data: {fill: d => d.datum.colorScale}}}
        data={dataSource}
        labelComponent={<VictoryLabel/>}
      />
      <VictoryLegend
        x={lablesOptions.x || 0}
        y={lablesOptions.y || 10}
        centerTitle
        orientation="horizontal"
        style={{title: {fontSize: 20, color: theme.colors.text}}}
        data={lables || labelBarChartModel}
      />
    </VictoryChart>
  );
}
export default React.memo(CardBar);
