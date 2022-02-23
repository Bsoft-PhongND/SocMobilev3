import {
  Checkbox,
  HStack,
  Icon,
  Pressable,
  ScrollView,
  Text,
  View,
  VStack,
} from 'native-base';
import React from 'react';
import {Animated, StyleSheet} from 'react-native';
import {TabView} from 'react-native-tab-view';
import {theme} from '../../theme/theme';
import {windowWidth} from '../../utils/Dimensions';
import {Ionicons} from '../../assets/icons';
function InfoWarning(props: any) {
  const {item} = props;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Nguồn'},
    {key: '2', title: 'Đích'},
  ]);
  const renderScene = ({route, focused}: any) => {
    switch (route.key) {
      case '1':
        return <TabItems items={item.source || {}} />;
      case '2':
        return <TabItems items={item.destination || {}} />;
      default:
        return <View></View>;
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
            return (
              <Pressable
                key={i}
                style={styles.tabItem}
                onPress={() => setIndex(i)}>
                <Animated.View style={{opacity}}>
                  <Text style={{...theme.fontSize.h3}} color="muted.100">
                    {route.title}
                  </Text>
                </Animated.View>
              </Pressable>
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
    <View flex={1}>
      <View>
        <HStack>
          <Text style={styles.index}>Name:</Text>
          <Text style={styles.contentIndex}>{item.name || '--'}</Text>
        </HStack>
        <HStack>
          <Text style={styles.index}>City:</Text>
          <Text style={styles.contentIndex}>{item.cityName || '--'}</Text>
        </HStack>
        <HStack>
          <Text style={styles.index}>Country:</Text>
          <Text style={styles.contentIndex}>{item.country || '--'}</Text>
        </HStack>
        <HStack>
          <Text style={styles.index}>Time:</Text>
          <Text style={styles.contentIndex}>
            {`${new Date(item.timeStamp).toLocaleDateString()} - ${new Date(
              item.timeStamp,
            ).toLocaleTimeString()} ` || '--'}
          </Text>
        </HStack>
        <HStack>
          <Text style={styles.index}>TimeZone:</Text>
          <Text style={styles.contentIndex}> {item.timeZone || '--'}</Text>
        </HStack>
        <HStack>
          <Text style={styles.index}>Transport:</Text>
          <Text style={styles.contentIndex}>
            {' '}
            {item.networkTransport || '--'}
          </Text>
        </HStack>
        <HStack>
          <Text style={styles.index}>Event Application:</Text>
          <Text style={styles.contentIndex}> {item.eventAppId || '--'}</Text>
        </HStack>
        <HStack>
          <Text style={styles.index}>Event Modules:</Text>
          <Text style={styles.contentIndex}> {item.eventModule || '--'}</Text>
        </HStack>
      </View>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        renderScene={props => {
          return (
            <View
              style={{
                backgroundColor: theme.colors.text,
                borderRadius: 10,
                overflow: 'hidden',
              }}
              flex={1}>
              {renderScene(props)}
            </View>
          );
        }}
        onIndexChange={onChangetab}
        initialLayout={{width: windowWidth}}
        style={{padding: 0}}
      />
    </View>
  );
}
export default InfoWarning;
const TabItems = ({items}: any) => {
  const keys = Object.keys(items);

  return (
    <View>
      {keys.map((key, index) => {
        return (
          <View p={2} key={index} style={styles.item}>
            <HStack alignItems="center" mt={3}>
              <Checkbox
                isChecked
                value="true"
                accessibilityLabel="This is a dummy checkbox"
              />
              <VStack paddingLeft={5}>
                <Text
                  style={{
                    ...theme.fontSize.h3,
                    color: theme.colors.medium,
                    fontWeight: 'bold',
                  }}>
                  {`${key[0] ? key[0].toUpperCase() : '--'}${
                    key[1] ? key.slice(1) : '--'
                  }` || '---'}
                </Text>
                <Text
                  style={{...theme.fontSize.h4, color: theme.colors.medium}}>
                  {items[`${key}`] || '---'}
                </Text>
              </VStack>
            </HStack>
          </View>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  tabItem: {
    alignItems: 'center',
    padding: 5,
  },
  index: {
    color: theme.colors.text,
    fontWeight: 'bold',
    ...theme.fontSize.h3,
  },
  contentIndex: {
    paddingLeft: 10,
    color: theme.colors.text,
    ...theme.fontSize.h3,
  },
  item: {},
});
