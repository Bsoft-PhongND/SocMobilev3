import { Circle, HStack, Text, VStack } from 'native-base';
import React from 'react';
import { VictoryPie } from 'victory-native';
import { theme } from '../../theme/theme';
import { windowWidth } from '../../utils/Dimensions';
const mock = [
  {label: 'Cats', y: 35, color: theme.colors.hight},
  {label: 'Dogs', y: 40, color: theme.colors.medium},
  {label: 'Birds', y: 55, color: theme.colors.low},
];
interface PieItem {
  label: string;
  y: number | string;
  color: string;
}
interface PropsTypes {
  data?: Array<PieItem>;
  showLables?: boolean;
  title?:string;
}
function CardPieChart(props: PropsTypes) {
  const data = props.data || mock;
  const labels = data.map(item => item.label || '---');
  const colors = data.map(item => item.color || 'black');
  const {showLables} = props;
  return (
    <HStack alignItems="center" flex={1} justifyContent="flex-start" mt={2}>
      <VictoryPie
        width={windowWidth * 0.5}
        height={150}
        padding={0}
        padAngle={5}
        animate={{
          duration: 2000,
        }}
        data={data}
        innerRadius={25}
        labels={labels}
        colorScale={colors}
        style={{
          labels: {
            fill: theme.colors.text,
            MozMarginStart: 100,
            display: showLables ? 'block' : 'none',
          },
          data: {
            stroke: 'rgba(255,255,255)',
            strokeWidth: 2,
          },
        }}
        labelRadius={({innerRadius}) => {
          return innerRadius + 10;
        }}
      />
    
      <VStack space={1} marginLeft={5}>
      <Text style={{marginLeft: 20, ...theme.fontSize.h4,color: theme.colors.text}}>
                Legends
      </Text>
        {data.map((item,index) => {
          return (
            <HStack justifyContent="flex-start" alignItems={'center'} key={index}>
              <Circle
                size="15px"
                style={{
                  backgroundColor: item.color || 'black',
                  borderWidth: 1,
                  borderColor: theme.colors.text,
                }}
              />
              <Text style={{marginLeft: 20, ...theme.fontSize.h4,color: theme.colors.text}}>
                {item.label || '---'}
              </Text>
            </HStack>
          );
        })}
      </VStack>
    </HStack>
  );
}
export default CardPieChart;
