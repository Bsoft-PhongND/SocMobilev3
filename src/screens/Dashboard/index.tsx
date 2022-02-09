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
import HeaderMenu from '../../components/headermenu';
import SkeletonControl from '../../components/skeleton';
import ViewBackGround from '../../components/viewbackground';

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
          </VStack>
        </ScrollView>
      </View>
    </ViewBackGround>
  );
}
