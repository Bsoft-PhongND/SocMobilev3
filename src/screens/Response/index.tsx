import {
  Box, FlatList,
  Flex, Icon, Pressable,
  Text,
  View
} from 'native-base';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Commingsoon from '../../components/commingsoon';
import HeaderMenu from '../../components/headermenu';
import { ToolBar } from '../../components/tools/ToolBar';
import ViewBackGround from '../../components/viewbackground';
import { NameScreen } from '../../config';
import Helpers from '../../helpers/helpers';
import { listWarnings } from '../../model/data';
import { theme } from '../../theme/theme';
import wordApp from '../../utils/word';
function ResponseScreen() {
  const [state, setState] = React.useState({
    refreshing: false,
  });
  const waited = async () => {
    setState({...state, refreshing: true});
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 3000);
    }).then(d => {
      setState({...state, refreshing: false});
    });
  };

  return (
    <ViewBackGround safeArea={false}>
      <View style={{flex: 1}}>
        <View style={{flex: 1, paddingHorizontal: 10}}>
          <HeaderMenu title={NameScreen.DrawerScreen.ResponseScreen} />
          <Commingsoon/>
        </View>
      </View>
    </ViewBackGround>
  );
}

export default React.memo(ResponseScreen);
