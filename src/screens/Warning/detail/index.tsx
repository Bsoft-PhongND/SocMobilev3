import { View } from 'native-base';
import React from 'react';
import { ToolBar } from '../../../components/tools/ToolBar';
import ViewBackGround from '../../../components/viewbackground';


export default function DetailScreen() {
  return (
    <ViewBackGround>
      <View style={{flex: 1}}>
        <View style={{flex: 1,paddingHorizontal:10}}>
        <ToolBar/>
      </View>
      </View>
    </ViewBackGround>
  );
}
