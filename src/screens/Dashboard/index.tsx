import {HStack, Image, ScrollView, Text, View, VStack} from 'native-base';
import React from 'react';
import {ImageBackground} from 'react-native';
import Carousel from '../../components/carousel';
import PieChart from '../../components/charts/VictoryPie';
import CircularProgressBarComponent from '../../components/circleprogress';
import HeaderMenu from '../../components/headermenu';
import ViewBackGround from '../../components/viewbackground';
import {theme} from '../../theme/theme';
import wordApp from '../../utils/word';

export default function Container() {
  return <HomeScreen />;
}
function HomeScreen() {
  return (
    <ViewBackGround>
      <View style={{flex: 1}}>
        <HeaderMenu title="Dashboard" />
       
        <ScrollView style={{paddingHorizontal: 10}}>
        <ImageBackground
          source={require('../../assets/images/world.png')}
          style={{width: '100%', height: 220}}
          imageStyle={{opacity: 0.5}}>
          <Carousel autoPlay={false}/>
        </ImageBackground>
        </ScrollView>
      </View>
    </ViewBackGround>
  );
}
