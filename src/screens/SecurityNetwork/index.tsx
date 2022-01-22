import React from 'react';
import {View} from 'native-base';
import ViewBackGround from '../../components/viewbackground';
import styles from './style';
import HeaderBack from '../../components/headerback';

function SecurityNetWorkScreen() {
  return <SecurityNetWork />;
}
function SecurityNetWork() {
  return (
    <ViewBackGround>
        <HeaderBack/>
      <View style={styles.container}>
          
      </View>
    </ViewBackGround>
  );
}
export default SecurityNetWorkScreen;
