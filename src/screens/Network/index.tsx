import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { CardContainer, CardGroupBar } from '../../components/cards';
import CardBar from '../../components/cards/cardBar';
import CardLineChart from '../../components/cards/cardLine';
import CardPieChart from '../../components/cards/cardPie';
import HeaderBack from '../../components/headerback';
import ViewBackGround from '../../components/viewbackground';
import { NameScreen } from '../../config';
import wordApp from '../../utils/word';

function NetWorkScreen(props: any) {
  const item = props.route?.params?.item;
  const navigation = useNavigation();
  const handleNavigation = (item: any) => {
    navigation.navigate(NameScreen.DetailNetworkScreen, {item});
  };
  return (
    <ViewBackGround>
      <HeaderBack title={item ? item.title : '--'} />
      <ScrollView>
        <CardContainer
          title={wordApp.unauthorizedAccess}
          styleContainer={styles.cardSpace}
          styleTitle={styles.title}>
          <CardBar />
        </CardContainer>
        <CardContainer
          title={wordApp.devicesStatus}
          styleContainer={styles.cardSpace}>
          <CardPieChart />
        </CardContainer>
        <CardContainer
          title={wordApp.violateByTime}
          styleContainer={styles.cardSpace}>
          <CardLineChart />
        </CardContainer>
        <CardContainer
          title={wordApp.ddosWarning}
          styleContainer={styles.cardSpace}>
          <CardGroupBar />
        </CardContainer>
      </ScrollView>
    </ViewBackGround>
  );
}
export default NetWorkScreen;
const styles = StyleSheet.create({
  cardSpace: {
    marginVertical: 5,
    borderWidth: 0,
    paddingHorizontal: 10,
  },
});
// Render overlay in front of screen
