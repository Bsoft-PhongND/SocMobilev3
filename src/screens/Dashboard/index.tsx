import {
  Box,
  FlatList,
  HStack,
  Icon,
  Image,
  ScrollView,
  Text,
  View,
  VStack,
} from 'native-base';
import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import Carousel from '../../components/carousel';
import PieChart from '../../components/charts/VictoryPie';
import CircularProgressBarComponent from '../../components/circleprogress';
import HeaderMenu from '../../components/headermenu';
import ViewBackGround from '../../components/viewbackground';
import {theme} from '../../theme/theme';
import {windowWidth} from '../../utils/Dimensions';
import wordApp from '../../utils/word';
import {dataFunctions} from './data';

export default function Container() {
  return <HomeScreen />;
}
function HomeScreen() {
  return (
    <ViewBackGround>
      <View style={{flex: 1}}>
        <HeaderMenu title="Dashboard" />
        <View style={{paddingHorizontal: 10}}>
          <ImageBackground
            source={require('../../assets/images/world.png')}
            style={{width: '100%', height: 220}}
            imageStyle={{opacity: 0.5}}>
            <Carousel autoPlay={true} />
          </ImageBackground>
          <Box h={400} style={{backgroundColor: theme.colors.card, borderRadius:20}} p={4}>
            <Text style={styles.title}>{wordApp.function}</Text>
            <FlatList
              data={dataFunctions}
              contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
              keyExtractor={item => item.id+""}
              renderItem={({item, index}) => {
                return (
                  <Box style={styles.itemF}>
                    <Box style={styles.icon}>
                      <Image
                        resizeMode="contain"
                        style={{width: '100%', height: '100%'}}
                        source={item.icon}
                        alt={item.title}
                      />
                    </Box>
                    <Text style={styles.titleF}>{item.title}</Text>
                  </Box>
                );
              }}
              numColumns={2}
            />
          </Box>
        </View>
      </View>
    </ViewBackGround>
  );
}
const styles = StyleSheet.create({
  title: {
    color: theme.colors.text,
    fontWeight: 'bold',
    ...theme.fontSize.body3,
  },
  titleF: {
    color: theme.colors.text,
    fontWeight: 'bold',
    textAlign: 'center',
    ...theme.fontSize.h4,
  },
  itemF: {
    backgroundColor: theme.colors.purple,
    height: 100,
    width: windowWidth / 2 - 50,
    margin: 5,
    borderRadius: 20,
    shadowColor: 'rgba(255,255,255,.9)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {width: 60, height: 60},
});
