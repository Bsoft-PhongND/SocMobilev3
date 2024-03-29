import { useFocusEffect } from '@react-navigation/native';
import { useToast } from 'native-base';
import React from 'react';
import { View, Text } from 'react-native';
import { TabBar, TabView } from 'react-native-tab-view';
import { useDispatch } from 'react-redux';
import HeaderMenu from '../../components/headermenu';
import ViewBackGround from '../../components/viewbackground';
import { NameScreen } from '../../config';
import { LoadingContext } from '../../context/LoadingContext';
import alertService from '../../redux/services/alertService';
import { theme } from '../../theme/theme';
import { windowWidth } from '../../utils/Dimensions';
import DetailScreen from './detail';
import StatisticScreen from './statistic';
const Container = () => {
  return <WarningScreen />;
};
const WarningScreen = () => {
  const [index, setIndex] = React.useState(0);
  const toast = useToast();
  const dispatch = useDispatch();
  const { setLoading } = React.useContext(LoadingContext);

  const [routes] = React.useState([
    { key: NameScreen.StatisticScreen, title: 'Thống kê' },
    { key: NameScreen.DetailWarningScreen, title: 'Chi tiết' }
  ]);
  const renderScene = ({ route, focused }: any) => {
    switch (route.key) {
      case NameScreen.StatisticScreen:
        return <StatisticScreen />;
      case NameScreen.DetailWarningScreen:
        return <DetailScreen />;
      default:
        return <StatisticScreen />;
    }
  };
  const renderTabBar = (props?: any) => (
    <TabBar
      {...props}
      getLabelText={({ route }) => route.title}
      // inactiveColor={'black'}
      activeColor={'white'}
      indicatorStyle={{
        // backgroundColor: 'transparent',
        borderBottomWidth: 3,
        borderColor: 'white',
        marginHorizontal: 10,
        width: windowWidth / 2 - 24,
      }}
      style={{ backgroundColor: 'transparent' }}
      pressColor={'#ccc'}
      labelStyle={{ ...theme.fontSize.h4 }}
    />
  );
  const onChangetab = (index: number) => {
    setIndex(index);
  };
  React.useEffect(() => {
    setLoading(true);
    Promise.all([
      alertService.alertSent(dispatch),
      alertService.ruleCategory(dispatch),
    ]).catch(err => {
      toast.show({
        title: err.message || err,
      });
    })
      .finally(() => {
        setLoading(false);
      })
  }, []);
  return (
    <ViewBackGround>
      <View style={{ flex: 1 }}>
        <HeaderMenu title={NameScreen.DrawerScreen.WarningScreen} />
        <TabView
          renderTabBar={renderTabBar}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={onChangetab}
          initialLayout={{ width: windowWidth }}
          style={{ padding: 0 }}
          lazy={true}
        />
      </View>
    </ViewBackGround>
  );
};

export default Container;
