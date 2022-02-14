import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Animated,
} from 'react-native';
import {Box} from 'native-base';
import data from './data';

const {width} = Dimensions.get('window');
const DOT_SIZE = 20;
const TICKER_HEIGHT = 20;
const CIRCLE_SIZE = width * 0.6;

const Circle = ({scrollX}) => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.circleContainer]}>
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

const Ticker = ({scrollX}) => {
  const inputRange = [-width, 0, width];
  const translateY = scrollX.interpolate({
    inputRange,
    outputRange: [TICKER_HEIGHT, 0, -TICKER_HEIGHT],
  });
  return (
    <View style={styles.tickerContainer}>
      <Animated.View style={{transform: [{translateY}]}}>
        {data.map(({type}, index) => {
          return (
            <Text key={index} style={styles.tickerText}>
              {type}
            </Text>
          );
        })}
      </Animated.View>
    </View>
  );
};

const Item = ({imageUri, heading, description, color, index, scrollX}) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });

  return (
    <View style={[styles.itemStyle]}>
      <Animated.View
        style={[
          styles.imageStyle,
          // {
          //   transform: [{ scale }],
          // },
        ]}>
        <Box flex={1} style={{backgroundColor: color,borderRadius:10}}></Box>
      </Animated.View>
    </View>
  );
};

const Pagination = ({scrollX}) => {
  const inputRange = [-width, 0, width];
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: [-DOT_SIZE, 0, DOT_SIZE],
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

export default function Carousel() {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <Circle scrollX={scrollX} />
      <Animated.FlatList
        keyExtractor={item => item.key}
        data={data}
        renderItem={({item, index}) => (
          <Item {...item} index={index} scrollX={scrollX} />
        )}
        pagingEnabled
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
      {/* <Pagination scrollX={scrollX} /> */}
      {/* <Ticker scrollX={scrollX} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  itemStyle: {
    width: width - DOT_SIZE,
  },
  imageStyle: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
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
    top: 0,
    left: 20,
    overflow: 'hidden',
    height: TICKER_HEIGHT,
  },
  tickerText: {
    fontSize: TICKER_HEIGHT,
    lineHeight: TICKER_HEIGHT,
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
