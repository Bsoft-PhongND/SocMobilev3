import React, {useCallback} from 'react';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryLabel,
  VictoryLegend,
  VictoryTheme,
} from 'victory-native';
import {
  groupBarChartModel,
  lableGroupBarChart,
} from '../../model/groupBarChart';
import {theme} from '../../theme/theme';

interface GroupType {
  x: string;
  y: number | string;
  label?: string;
}
interface PropsTypes {
  dataSource?: GroupType[][];
}
function CardGroupBar(props: PropsTypes) {
  const dataSource = props.dataSource || groupBarChartModel;
  const renderGroups = () => {
    return dataSource.map((group: any, index: number) => {
      console.log('render group', index);
      return <VictoryBar data={group} key={index} />;
    });
  };
  const memorizedGroups = useCallback(
    () => renderGroups(),
    [dataSource],
  );
  return (
    <VictoryChart theme={VictoryTheme.material} domain={{y: [0.5, 5.5]}}>
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
      <VictoryGroup
        offset={24}
        style={{data: {width: 20}}}
        animate={{
          onLoad: {duration: 500},
        }}
        colorScale={[theme.colors.low, theme.colors.medium, theme.colors.hight]}
        labelComponent={
          <VictoryLabel textAnchor="middle" style={{fill: theme.colors.text}} />
        }>
        {memorizedGroups()}
      </VictoryGroup>
      <VictoryLegend
        x={0}
        y={10}
        centerTitle
        orientation="horizontal"
        gutter={20}
        style={{
          title: {fontSize: 20},
        }}
        data={lableGroupBarChart}
      />
    </VictoryChart>
  );
}
export default CardGroupBar;
