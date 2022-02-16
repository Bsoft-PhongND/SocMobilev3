import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {Box, FlatList, Image, Pressable, Text, View} from 'native-base';
import React, {useState} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import Carousel from '../../components/carousel';
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
  const [autoPlay, setAutoPlay] = useState(false);
  const navigation = useNavigation();
  useFocusEffect(() => {
    setAutoPlay(true);
    return () => {
      setAutoPlay(false);
    };
  });
  const handleNavigate = (navigate: any) => {
    if (navigate) {
      navigation.navigate(navigate);
    }
  };
  return (
    <ViewBackGround>
      <View style={{flex: 1}}>
        <HeaderMenu title="Dashboard" />
        <View style={{paddingHorizontal: 10}}>
          <ImageBackground
            source={require('../../assets/images/world.png')}
            style={{width: '100%', height: 220}}
            imageStyle={{opacity: 0.5}}>
            <Carousel autoPlay={autoPlay} />
          </ImageBackground>
          <Box
            h={400}
            style={{backgroundColor: theme.colors.card, borderRadius: 20}}
            >
            <ImageBackground source={require('../../assets/giff/273610384_652321456012718_4833755231786264808_n.gif')} style={{flex: 1}}>
              <Text style={styles.title}>{wordApp.function}</Text>
              <FlatList
                data={dataFunctions}
                contentContainerStyle={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                keyExtractor={item => item.id + ''}
                renderItem={({item, index}) => {
                  return (
                    <Pressable
                      style={styles.itemF}
                      onPress={() => handleNavigate(item.navigation)}>
                      <Box style={styles.icon}>
                        <Image
                          resizeMode="contain"
                          style={{width: '100%', height: '100%'}}
                          source={item.icon}
                          alt={item.title}
                        />
                      </Box>
                      <Text style={styles.titleF}>{item.title}</Text>
                    </Pressable>
                  );
                }}
                numColumns={2}
              />
            </ImageBackground>
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
    paddingVertical: 5,
    ...theme.fontSize.h4,
  },
  itemF: {
    backgroundColor: theme.colors.purple,
    height: 130,
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
