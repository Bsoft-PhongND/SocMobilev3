import {
  Circle,
  Heading,
  HStack,
  Icon,
  ScrollView,
  Text,
  useDisclose,
  View,
} from 'native-base';
import {ILinearGradientProps} from 'native-base/lib/typescript/components/primitives/Box/types';
import {
  ColorType,
  ResponsiveValue,
} from 'native-base/lib/typescript/components/types';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ModalSheetComponent from '../../../components/actionsheet';
import BarChart from '../../../components/charts/barChart';
import GroupBarChart from '../../../components/charts/groupChart';
import CircularProgressBarComponent from '../../../components/circleprogress';
import {ToolBar} from '../../../components/tools/ToolBar';
import ViewBackGround from '../../../components/viewbackground';
import {theme} from '../../../theme/theme';
import wordApp from '../../../utils/word';

export default function StatisticScreen() {
  const {isOpen, onOpen, onClose} = useDisclose();
  const [state, setState] = React.useState({
    refreshing: false,
  });
  const waited = async () => {
    setState({...state, refreshing: true});
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 3000);
    }).then(d => {
      console.log(d);
      setState({...state, refreshing: false});
    });
  };
  return (
    <ViewBackGround>
      <View style={{flex: 1, paddingHorizontal: 10}}>
        <ToolBar filterClick={() => onOpen()} onRefresh={waited} loading={state.refreshing}/>
        <ScrollView>
          <View>
            <Heading size="xs" style={{color: theme.colors.text}}>
              {wordApp.warningLevel}
            </Heading>
            <HStack
              style={{
                justifyContent: 'space-between',
                paddingVertical: 10,
              }}>
              <CircularProgressBarComponent title={wordApp.hight} value={50} color={theme.colors.hight}/>
              <CircularProgressBarComponent
                title={wordApp.medium}
                value={120}
                color={theme.colors.medium}
              />
              <CircularProgressBarComponent title={wordApp.low} value={60} color={theme.colors.low} />
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
      <ModalSheetComponent isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </ViewBackGround>
  );
}
