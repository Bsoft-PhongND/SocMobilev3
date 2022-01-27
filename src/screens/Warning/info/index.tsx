import {Button, HStack, ScrollView, Text, View} from 'native-base';
import React from 'react';
import {StyleSheet, TouchableOpacity, Animated} from 'react-native';
import {TabBar, TabView} from 'react-native-tab-view';
import HeaderBack from '../../../components/headerback';
import ViewBackGround from '../../../components/viewbackground';
import {NameScreen} from '../../../config';
import {theme} from '../../../theme/theme';
import {windowWidth} from '../../../utils/Dimensions';
import wordApp from '../../../utils/word';
import TabDetailWarning from './TabDetail';
import TabPolicyWarning from './TabPolicy';
import TabProcessWarning from './TabProcess';

const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};
function Container(props: any) {
  return <InfoWarningScreen {...props} />;
}
function InfoWarningScreen({route}: any) {
  const {item} = route.params;
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: NameScreen.WarningTabs.InForDetailTab, title: 'Chi tiết'},
    {key: NameScreen.WarningTabs.InForPolicyTab, title: 'Chính sách'},
    {key: NameScreen.WarningTabs.InfoProcessTab, title: 'Trạng thái xử lý'},
  ]);
  const renderScene = ({route, focused}: any) => {
    switch (route.key) {
      case NameScreen.WarningTabs.InForDetailTab:
        return <TabDetailWarning />;
      case NameScreen.WarningTabs.InForPolicyTab:
        return <TabPolicyWarning />;
      case NameScreen.WarningTabs.InForPolicyTab:
        return <TabProcessWarning />;
      default:
        return <TabDetailWarning />;
    }
  };
  const renderTabBar = (props?: any) => {
    const inputRange = props.navigationState.routes.map(
      (x: any, i: number) => i,
    );
    return (
      <HStack>
        <ScrollView horizontal={true}>
          {props.navigationState.routes.map((route: any, i: number) => {
            const opacity = props.position.interpolate({
              inputRange,
              outputRange: inputRange.map((inputIndex: number) =>
                inputIndex === i ? 1 : 0.5,
              ),
            });
            const indicator = props.position.interpolate({
              inputRange,
              outputRange: inputRange.map((inputIndex: number) =>
                inputIndex === i ? 0 : 50,
              ),
            });
            return (
              <TouchableOpacity
                style={styles.tabItem}
                onPress={() => setIndex(i)}>
                <Animated.View style={{opacity}}>
                  <Text style={{...theme.fontSize.h3}} color="amber.300">
                    {route.title}
                  </Text>
                </Animated.View>
                <Animated.View />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </HStack>
    );
  };
  const onChangetab = (index: number) => {
    setIndex(index);
  };
  return (
    <ViewBackGround safeArea={false}>
      <View style={{flex: 1}}>
        <HeaderBack title={NameScreen.DrawerScreen.WarningScreen} />
        <View style={{flex: 1, paddingHorizontal: 10}}>
          <Text
            style={{
              ...theme.fontSize.h3,
              color: theme.colors.text,
              fontWeight: 'bold',
            }}>
            {item.alert || '---'}
          </Text>
          <Text style={{...theme.fontSize.h3, color: theme.colors.text}}>
            {wordApp.number}:{item.number || '---'}
          </Text>
          <Text style={{...theme.fontSize.h3, color: theme.colors.text}}>
            {wordApp.status}:{item.status || '---'}
          </Text>
          <TabView
            renderTabBar={renderTabBar}
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={onChangetab}
            initialLayout={{width: windowWidth}}
            style={{padding: 0}}
          />
        </View>
      </View>
    </ViewBackGround>
  );
}

export default React.memo(Container);
const styles = StyleSheet.create({
  tabItem: {
    alignItems: 'center',
    padding: 5,
  },
});
