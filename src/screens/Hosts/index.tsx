import {Text} from 'native-base';
import React from 'react';
import ViewBackGround from '../../components/viewbackground';
import HeaderBack from '../../components/headerback';
import {theme} from '../../theme/theme';

function HostingScreen(props:any) {
  const item = props.route?.params?.item;
  return (
    <ViewBackGround>
      <HeaderBack title={item.title || '--'} />
      <Text style={{color: theme.colors.text}}>NetworkWorkScreen</Text>
    </ViewBackGround>
  );
}
export default HostingScreen;
