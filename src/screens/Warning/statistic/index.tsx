import {Text, View} from 'native-base';
import React from 'react';
import HeaderBack from '../../../components/headerback';
import ViewBackGround from '../../../components/viewbackground';


export default function StatisticScreen() {
  return (
    <ViewBackGround>
      <View style={{flex: 1}}>
        <HeaderBack/>
        <Text style={{color: 'white'}}>Statistic Screen</Text>
      </View>
    </ViewBackGround>
  );
}
