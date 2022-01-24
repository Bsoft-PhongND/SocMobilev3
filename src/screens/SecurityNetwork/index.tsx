import {
  ScrollView
} from 'native-base';
import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import HeaderBack from '../../components/headerback';
import ViewBackGround from '../../components/viewbackground';
import ListFunction from './ListFunction';
import FabFunction from './FabFunction';


function SecurityNetWorkScreen() {
  return <SecurityNetWork />;
}
function SecurityNetWork() {
  return (
    <ViewBackGround>
      <HeaderBack />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
        }}
        showsVerticalScrollIndicator={false}>
        <ListFunction />
      </ScrollView>
      <FabFunction/>
    </ViewBackGround>
  );
}
export default SecurityNetWorkScreen;
