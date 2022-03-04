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
import { StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ModalSheetComponent from '../../../components/actionsheet';
import {CardContainer, CardGroupBar, CardGroupPieChart} from '../../../components/cards';
import CardBar from '../../../components/cards/cardBar';
import BarChart from '../../../components/charts/barChart';
import GroupBarChart from '../../../components/charts/groupChart';
import CircularProgressBarComponent from '../../../components/circleprogress';
import {ToolBar} from '../../../components/tools/ToolBar';
import ViewBackTabview from '../../../components/viewbackground/viewbackTabview';
import {theme} from '../../../theme/theme';
import wordApp from '../../../utils/word';

function StatisticScreen() {
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
    <ViewBackTabview safeArea={false}>
      <View style={{flex: 1, paddingHorizontal: 10}}>
        <ToolBar
          filterClick={() => onOpen()}
          onRefresh={waited}
          loading={state.refreshing}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <CardContainer
            title={wordApp.warningLevel}
            styleContainer={styles.cardSpace}>
            <CardGroupPieChart />
          </CardContainer>
          <CardContainer
            title={wordApp.correctationLevel}
            styleContainer={styles.cardSpace}>
            <CardGroupBar />
          </CardContainer>
          <CardContainer
            title={wordApp.warningStatus}
            styleContainer={styles.cardSpace}>
            <CardBar />
          </CardContainer>
        </ScrollView>
      </View>
      <ModalSheetComponent isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </ViewBackTabview>
  );
}
export default React.memo(StatisticScreen);
const styles = StyleSheet.create({
  cardSpace: {
    marginVertical:5,
    borderWidth:0
  }
})