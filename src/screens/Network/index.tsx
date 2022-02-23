import {useNavigation} from '@react-navigation/native';
import {FlatList, ScrollView} from 'native-base';
import React, { useContext } from 'react';
import {StyleSheet} from 'react-native';
import {CardContainer, CardGroupBar} from '../../components/cards';
import CardBar from '../../components/cards/cardBar';
import CardLineChart from '../../components/cards/cardLine';
import CardPieChart from '../../components/cards/cardPie';
import HeaderBack from '../../components/headerback';
import ViewBackGround from '../../components/viewbackground';
import {NameScreen} from '../../config';
import { LoadingContext } from '../../context/LoadingContext';
import helpers from '../../helpers/helpers';
import wordApp from '../../utils/word';
import {devicesStatus, unauthorizedAccess, violateByTime} from './data';
const groupsNetwork = [
  {
    title: wordApp.ddosWarning,
    component: <CardGroupBar />,
  },
  {
    title: wordApp.unauthorizedAccess,
    component: <CardBar dataSource={unauthorizedAccess} />,
  },
  {
    title: wordApp.devicesStatus,
    component: <CardPieChart dataSource={devicesStatus} />,
  },
  {
    title: wordApp.violateByTime,
    component: <CardLineChart dataSource={violateByTime} />,
  },
];
function NetWorkScreen(props: any) {
  const item = props.route?.params?.item;
  const navigation = useNavigation();
  const handleNavigation =async (item: any) => {
    navigation.navigate(NameScreen.DashboardHightScreen, {item});
  };
  return (
    <ViewBackGround>
      <HeaderBack title={item ? item.title : '--'} />
      <FlatList
        data={groupsNetwork}
        keyExtractor={item => item.title}
        renderItem={({item, index}) => {
          return (
            <CardContainer
              onPress={()=>handleNavigation(item)}
              styleContainer={styles.cardSpace}
              key={index}
              title={item.title}>
              {item.component}
            </CardContainer>
          );
        }}
      />
    </ViewBackGround>
  );
}
export default React.memo(NetWorkScreen);
const styles = StyleSheet.create({
  cardSpace: {
    marginVertical: 5,
    borderWidth: 0,
    paddingHorizontal: 10,
  },
});
// Render overlay in front of screen
