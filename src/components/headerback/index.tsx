import React from 'react';
import {Flex, Icon, Text, View} from 'native-base';
import {theme} from '../../theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {position} from 'native-base/lib/typescript/theme/styled-system';
import wordApp from '../../utils/word';
interface PropsTypes {
  title?: string;
}
function HeaderBack(props: PropsTypes) {
  const navigation = useNavigation();
  const handleGoBack = () => {
    console.log('back');

    navigation.goBack();
  };
  return (
    <Flex
      flexDirection="row"
      style={{alignItems: 'center'}}>
      <View>
        <Icon
          as={<Ionicons name={'arrow-back'} />}
          zIndex={200}
          size={'md'}
          ml="2"
          color="muted.100"
          onPress={handleGoBack}
        />
      </View>
      <Text
        style={{
          ...theme.fontSize.h2,
          color: theme.colors.text,
          textAlign: 'center',
          fontWeight: '500',
          flex: 1,
          paddingRight:40
        }}>
        {props.title || wordApp.securityNetWork}
      </Text>
    </Flex>
  );
}
export default HeaderBack;
