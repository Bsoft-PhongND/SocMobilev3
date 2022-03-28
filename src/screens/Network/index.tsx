import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'native-base';
import React, { useContext } from 'react';
import {StyleSheet} from 'react-native';
import {CardContainer, CardGroupBar} from '../../components/cards';
import CardBar from '../../components/cards/cardBar';
import CardLineChart from '../../components/cards/cardLine';
import CardPieChart from '../../components/cards/cardPie';
import BoxPlotChart from '../../components/charts/boxPlotChart';
import DomainChart from '../../components/charts/domainChart';
import MultiLineChart from '../../components/charts/multiLineChart';
import PolarAxisChart from '../../components/charts/polarAxisChart';
import PolarChart from '../../components/charts/polarChart';
import RadarChart from '../../components/charts/radarChart';
import HeaderBack from '../../components/headerback';
import {TableListStatus, TableListView} from '../../components/TableList';
import ViewBackGround from '../../components/viewbackground';
import {NameScreen} from '../../config';
import { LoadingContext } from '../../context/LoadingContext';
import helpers from '../../helpers/helpers';
import {PropsHightScreen} from '../../navigation/routers/RouterDashboard';
import wordApp from '../../utils/word';
import {devicesStatus, unauthorizedAccess, violateByTime} from './data';
const groupsNetwork: Array<PropsHightScreen> = [
  {
    title: wordApp.ddosWarning,
    component: <CardGroupBar />,
    tableList: <TableListView />,
  },
  {
    title: wordApp.unauthorizedAccess,
    component: <CardBar dataSource={unauthorizedAccess} horizontal={true}/>,
    tableList: <TableListView />,
  },
  {
    title: wordApp.devicesStatus,
    component: <CardPieChart dataSource={devicesStatus} />,
    tableList: <TableListStatus />,
  },
  {
    title: wordApp.violateByTime,
    component: <CardLineChart dataSource={violateByTime} />,
    tableList: <TableListView />,
  },
  {
    title: "PolarChart",
    component: <PolarChart />,
    tableList: <TableListView />,
  },
  {
    title: "AreaChart",
    component: <DomainChart />,
    tableList: <TableListView />,
  },
  {
    title: "MultiLine",
    component: <MultiLineChart />,
    tableList: <TableListView />,
  },
  {
    title: "boxPlotChart",
    component: <BoxPlotChart />,
    tableList: <TableListView />,
  },
  {
    title: "polarAxisChart",
    component: <PolarAxisChart />,
    tableList: <TableListView />,
  },
  // {
  //   title: "RadarChart",
  //   component: <RadarChart />,
  //   tableList: <TableListView />,
  // },
  
];
const Container= (props:any)=>{
  const {loading, setLoading} = useContext(LoadingContext);
  return(<NetWorkScreen {...props} setLoading={setLoading} /> );
}
function NetWorkScreen(props: any) {
  const item = props.route?.params?.item;
  const {setLoading} = props;
  const navigation = useNavigation();

  const handleNavigation = async (item: any) => {
    setLoading(true);
    await helpers.waited(500).then(async () => {
      navigation.navigate(NameScreen.DashboardHightScreen, {item});
      helpers.waited(1000).then(() => {
        setLoading(false);
      });
    });
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
              onPress={() => handleNavigation(item)}
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

export default Container;
const styles = StyleSheet.create({
  cardSpace: {
    marginVertical: 5,
    borderWidth: 0,
    paddingHorizontal: 10,
  },
});
// Render overlay in front of screen
