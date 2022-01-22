import {Text, View} from 'native-base';
import React from 'react';
import HeaderBack from '../../../components/headerback';
import ViewBackGround from '../../../components/viewbackground';


export default function DetailScreen() {
  return (
    <ViewBackGround>
      <View style={{flex: 1}}>
        <HeaderBack/>
        <Text style={{color: 'white'}}>Detail Screen</Text>
      </View>
    </ViewBackGround>
  );
}
