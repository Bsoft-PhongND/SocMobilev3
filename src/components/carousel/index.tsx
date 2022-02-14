import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Animated,
  FlatList,
} from 'react-native';
import {Box, VStack} from 'native-base';
import data from './data';
import CardPieChart from '../cards/cardPie';
import {theme} from '../../theme/theme';
import {PropsCarosel} from './props';

const {width} = Dimensions.get('window');
const DOT_SIZE = 20;
const TICKER_HEIGHT = 18;
const CIRCLE_SIZE = width * 0.6;

const Circle = ({scrollX}: any) => {
  return (
    <View style={[styles.circleContainer]}>
      {data.map(({color}, index) => {
        const inputRange = [
          (index - 0.55) * width,
          index * width,
          (index + 0.55) * width,
        ];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0, 0.2, 0],
        });
        return (
          <Animated.View
            key={index}
            style={[
              styles.circle,
              {
                backgroundColor: color,
                opacity,
                transform: [{scale}],
              },
            ]}
          />
        );
      })}
    </View>
  );
};

const Ticker = ({scrollX}: any) => {
  const inputRange = [-width, 0, width];
  const translateY = scrollX.interpolate({
    inputRange,
    outputRange: [TICKER_HEIGHT + 4, 0, -TICKER_HEIGHT - 4],
  });
  return (
    <View style={[styles.tickerContainer, {overflow: 'hidden'}]}>
      <Animated.View style={{transform: [{translateY}]}}>
        <VStack space={'4px'}>
          {data.map(({type}, index) => {
            return (
              <Text key={index} style={styles.tickerText}>
                {type}
              </Text>
            );
          })}
        </VStack>
      </Animated.View>
    </View>
  );
};

const Item = ({index, scrollX}: any) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

  return (
    <View style={[styles.itemStyle]}>
      <Animated.View
        style={[
          styles.imageStyle,
          // {
          //   transform: [{ scale }],
          // },
        ]}>
        <Box
          flex={1}
          style={{backgroundColor: theme.colors.card, borderRadius: 10}}>
          <CardPieChart />
        </Box>
      </Animated.View>
    </View>
  );
};

const Pagination = ({scrollX}: any) => {
  const inputRange = [-width, 0, width];
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: [-DOT_SIZE + 1, 0, DOT_SIZE + 1],
  });
  return (
    <View style={[styles.pagination]}>
      <Animated.View
        style={[
          styles.paginationIndicator,
          {
            position: 'absolute',
            transform: [{translateX}],
          },
        ]}
      />
      {data.map(item => {
        return (
          <View key={item.key} style={styles.paginationDotContainer}>
            <View
              style={[styles.paginationDot, {backgroundColor: item.color}]}
            />
          </View>
        );
      })}
    </View>
  );
};

export default function Carousel(props: PropsCarosel) {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const flastList = React.useRef<FlatList>(null);
  const {autoPlay} = props;
  const offset = React.useRef(0);
  const handleGoNext = () => {};
  
  useEffect(() => {
    const timer = setInterval(() => {
  console.log(scrollX);
      if (offset.current >= data.length - 1) {
        offset.current = 0;
      } else {
        offset.current++;
      }
      if (flastList.current) {
        flastList?.current.scrollToIndex({animated:true, index: offset.current});
      }
    }, 2000);
    return () => {
      clearInterval(timer)
      console.log(`clearInterval(timer)`);
    };
  }, []);
  return (
    <View style={styles.container}>
      <Circle scrollX={scrollX} />
      <Animated.FlatList
        ref={flastList}
        keyExtractor={item => item.key}
        data={data}
        renderItem={({item, index}) => (
          <Item {...item} index={index} scrollX={scrollX} />
        )}
        pagingEnabled
        legacyImplementation={false}
        showsHorizontalScrollIndicator={false}
        horizontal
        bounces
        contentContainerStyle={{justifyContent: 'center'}}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}
      />
      <Pagination scrollX={scrollX} />
      <Ticker scrollX={scrollX} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemStyle: {
    width: width - DOT_SIZE,
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  imageStyle: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    maxWidth: 400,
  },
  pagination: {
    position: 'absolute',
    right: 20,
    bottom: 40,
    flexDirection: 'row',
    height: DOT_SIZE,
  },
  paginationDot: {
    width: DOT_SIZE * 0.3,
    height: DOT_SIZE * 0.3,
    borderRadius: DOT_SIZE * 0.15,
  },
  paginationDotContainer: {
    width: DOT_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationIndicator: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  tickerContainer: {
    position: 'absolute',
    top: 10,
    left: 20,
    overflow: 'hidden',
    height: TICKER_HEIGHT + 2,
  },
  tickerText: {
    fontSize: TICKER_HEIGHT,
    lineHeight: TICKER_HEIGHT,
    color: theme.colors.text,
    fontWeight: '800',
  },

  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    position: 'absolute',
    top: '15%',
  },
});
