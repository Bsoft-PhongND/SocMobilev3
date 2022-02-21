import { HStack, VStack } from 'native-base';
import React from 'react';
import { theme } from '../../theme/theme';
import wordApp from '../../utils/word';
import CircularProgressBarComponent from '../circleprogress';

interface PropsTypes {
  title?: string;
}
function CardGroupPieChart(props: PropsTypes) {
  return (
    <VStack space={5} flex={1} justifyContent="center">
      <HStack
        style={{
          justifyContent: 'center',
          paddingVertical: 0,
        }}>
        <CircularProgressBarComponent
          title={wordApp.hight}
          value={50}
          color={theme.colors.hight}
        />
        <CircularProgressBarComponent
          title={wordApp.medium}
          value={120}
          color={theme.colors.medium}
        />
        <CircularProgressBarComponent
          title={wordApp.low}
          value={60}
          color={theme.colors.low}
        />
      </HStack>
    </VStack>
  );
}
export default CardGroupPieChart;
