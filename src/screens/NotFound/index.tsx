import {Image, View} from 'native-base';
import React from 'react';
import HeaderBack from '../../components/headerback';
import ViewBackGround from '../../components/viewbackground';
function NotFoundError() {
  return (
    <ViewBackGround>
      <HeaderBack title={'Not Found'} />
      <View
        flex={1}
        bg={'amber.900'}
        justifyContent="center"
        alignItems="center">
        <Image
          source={require('../../assets/images/error404.png')}
          resizeMode="contain"
          alt="Error"
          width="300"
          height="300"
        />
      </View>
    </ViewBackGround>
  );
}
export default NotFoundError;
