import {Text, View} from 'native-base';
import React from 'react';
import HeaderMenu from '../../components/headermenu';
import ViewBackGround from '../../components/viewbackground';

export default function Container() {
  return <HomeScreen />;
}
function HomeScreen() {
  return (
    <ViewBackGround>
      <View style={{flex: 1}}>
        <HeaderMenu title="Home" />
        <Text style={{color: 'white'}}>Cart Screen</Text>
      </View>
    </ViewBackGround>
  );
}
