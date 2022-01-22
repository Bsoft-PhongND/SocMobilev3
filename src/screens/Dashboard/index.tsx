import { Text, View } from 'native-base';
import React from 'react';
import {
  SafeAreaView
} from 'react-native';
import ViewBackGround from '../../components/viewbackground';



export default function HomeScreen({navigation}) {

  return (
    <ViewBackGround>
       <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{color:'white'}}>Cart Screen</Text>
      </View>
    </ViewBackGround>
  );
}
