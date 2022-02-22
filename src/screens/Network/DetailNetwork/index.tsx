import {Box, ScrollView, View} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import {
  SharedElement,
  SharedElementTransition,
  nodeFromRef,
} from 'react-native-shared-element';
import {
  CardContainer,
  CardGroupPieChart,
  CardLineChart,
  CardPieChart,
} from '../../../components/cards';
import HeaderBack from '../../../components/headerback';
import ViewBackGround from '../../../components/viewbackground';
import wordApp from '../../../utils/word';
function DetailNetworkScreen(props:any) {
  let endAncestor;
  let endNode;
  const item = props.route?.params?.item;

  return (
    <ViewBackGround>
      <HeaderBack title={item?item.title:'--'} />
      <ScrollView>
        <View ref={ref => (endAncestor = nodeFromRef(ref))}>
          <SharedElement onNode={node => (endNode = node)}>
            <CardContainer
              title={'Luu luong mang truy cap'}
              styleContainer={styles.cardSpace}>
              <CardGroupPieChart />
            </CardContainer>
          </SharedElement>
        </View>
      </ScrollView>
    </ViewBackGround>
  );
}
export default DetailNetworkScreen;
const styles = StyleSheet.create({
  cardSpace: {marginVertical: 5},
});
