import {
  Circle,
  Heading,
  HStack,
  Icon,
  ScrollView,
  Text,
  View,
} from 'native-base';
import { ILinearGradientProps } from 'native-base/lib/typescript/components/primitives/Box/types';
import { ColorType, ResponsiveValue } from 'native-base/lib/typescript/components/types';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BarChart from '../../../components/charts/barChart';
import GroupBarChart from '../../../components/charts/groupChart';
import {ToolBar} from '../../../components/tools/ToolBar';
import ViewBackGround from '../../../components/viewbackground';
import {theme} from '../../../theme/theme';
import wordApp from '../../../utils/word';

export default function StatisticScreen() {
  return (
    <ViewBackGround>
      <View style={{flex: 1, paddingHorizontal: 10}}>
        <ToolBar />
        <ScrollView>
          <View>
            <Heading size="xs" style={{color: theme.colors.text}}>
              {wordApp.warningLevel}
            </Heading>
            <HStack
              style={{
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}>
              <CircleChart color="red.800" number={100} title={wordApp.hight}/>
              <CircleChart color="green.400" number={100} title={wordApp.medium}/>
              <CircleChart color="blue.300" number={100} title={wordApp.low}/>
            </HStack>
          </View>
          <View>
            <Heading size="xs" style={{color: theme.colors.text}}>
              {wordApp.correctationLevel}
            </Heading>
            <GroupBarChart />
          </View>
          <View>
            <Heading size="xs" style={{color: theme.colors.text}}>
              {wordApp.warningStatus}
            </Heading>
            <BarChart />
          </View>
        </ScrollView>
      </View>
    </ViewBackGround>
  );
}
const CircleChart = (props: {color?: ResponsiveValue<ColorType | (string & {}) | ILinearGradientProps>,number?: number,title?:string}) => {
  return (
    <Circle size={98} bg={props.color}>
      <Text style={{...theme.fontSize.h3,color: theme.colors.text, fontWeight: 'bold'}}>
        {props.title}
      </Text>
      <Text style={{...theme.fontSize.h3,color: theme.colors.text, fontWeight: 'bold'}}>
        {props.number}
      </Text>
    </Circle>
  );
};