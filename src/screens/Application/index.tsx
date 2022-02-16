import {Text} from 'native-base';
import ViewBackGround from '../../components/viewbackground';
import React from 'react';
import {theme} from '../../theme/theme';
import HeaderBack from '../../components/headerback';

function ApplicationScreen() {
  return (
    <ViewBackGround>
      <HeaderBack title="Back" />
      <Text style={{color: theme.colors.text}}>NetworkWorkScreen</Text>
    </ViewBackGround>
  );
}
export default ApplicationScreen;
