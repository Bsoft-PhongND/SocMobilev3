import React from 'react';
import {Icon, Text} from 'native-base';
import {theme} from '../../theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

function HeaderBack() {
    const navigation = useNavigation();
  return (
    <>
      <Icon
        as={
          <Ionicons
            name={'arrow-back'}
          />
        }
        size={"md"}
        ml="2"
        color="muted.100"
        onPress={() => navigation.goBack()}
      />
      <Text style={{color: theme.colors.text}}>Hello</Text>
    </>
  );
}
export default HeaderBack;
