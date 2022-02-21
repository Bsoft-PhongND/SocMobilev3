import {Box, ScrollView, Text, View} from 'native-base';
import {StyleSheet} from 'react-native';
import React from 'react';
import {
  SharedElement,
  SharedElementTransition,
  nodeFromRef,
} from 'react-native-shared-element';
import ViewBackGround from '../../components/viewbackground';
import {theme} from '../../theme/theme';
import HeaderBack from '../../components/headerback';
import wordApp from '../../utils/word';
import CardGroupPieChart from '../../components/cards/cardGroupPie';
import CardPieChart from '../../components/cards/cardPie';
import CardLineChart from '../../components/cards/cardLine';
import {CardContainer} from '../../components/cards';
import Animated from 'react-native-reanimated';

function NetWorkScreen() {
  let startAncestor;
  let startNode;

  return (
    <ViewBackGround>
      <HeaderBack title={wordApp.functions.netWork} />
      <ScrollView>
        <View ref={ref => (startAncestor = nodeFromRef(ref))}>
          <SharedElement onNode={node => (startNode = node)}>
            <CardContainer
              title={'Luu luong mang truy cap'}
              styleContainer={styles.cardSpace}>
              <CardGroupPieChart />
            </CardContainer>
          </SharedElement>
        </View>
        <CardContainer
          title={'Truy cap trai phep'}
          styleContainer={styles.cardSpace}>
          <CardPieChart />
        </CardContainer>
        <CardContainer
          title={'Vi pham theo thoi gian'}
          styleContainer={styles.cardSpace}>
          <CardLineChart />
        </CardContainer>
      </ScrollView>
    </ViewBackGround>
  );
}
export default NetWorkScreen;
const styles = StyleSheet.create({
  cardSpace: {marginVertical: 5},
});
// Render overlay in front of screen
