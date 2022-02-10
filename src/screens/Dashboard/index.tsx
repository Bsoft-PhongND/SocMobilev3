import {
  Center,
  HStack,
  Image,
  ScrollView,
  Skeleton,
  Text,
  useMediaQuery,
  View,
  VStack,
} from 'native-base';
import React from 'react';
import Carousel from '../../components/carousel';
import CircularProgressBarComponent from '../../components/circleprogress';
import HeaderMenu from '../../components/headermenu';
import SkeletonControl from '../../components/skeleton';
import ViewBackGround from '../../components/viewbackground';
import { theme } from '../../theme/theme';
import wordApp from '../../utils/word';

export default function Container() {
  return <HomeScreen />;
}
function HomeScreen() {
  return (
    <ViewBackGround>
      <View style={{flex: 1}}>
        <HeaderMenu title="Dashboard" />
        <ScrollView style={{paddingHorizontal:10}}>
          <VStack space={5}>
            <Image
              source={require('../../assets/images/world.png')}
              style={{width: '100%', height: 200}}
              alt="World"
            />
             <Text style={{...theme.fontSize .h3,color: 'white' }}>Top canh bao</Text>
            <HStack
              style={{
                justifyContent: 'space-between',
                paddingVertical: 0,
              }}>
              <CircularProgressBarComponent title={wordApp.hight} value={50} color={theme.colors.hight}/>
              <CircularProgressBarComponent
                title={wordApp.medium}
                value={120}
                color={theme.colors.medium}
              />
              <CircularProgressBarComponent title={wordApp.low} value={60} color={theme.colors.low} />
            </HStack>
            <Carousel/>
          </VStack>
        </ScrollView>
      </View>
    </ViewBackGround>
  );
}
