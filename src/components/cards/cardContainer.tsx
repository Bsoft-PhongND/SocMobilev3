import { useNavigation } from '@react-navigation/native';
import {Box, Pressable, Text} from 'native-base';
import React from 'react';
import {TextStyle, ViewStyle} from 'react-native';
import { NameScreen } from '../../config';
import {theme} from '../../theme/theme';
interface PropsTypes {
  children: React.ReactNode;
  title?: string;
  styleContainer?: ViewStyle;
  styleTitle?: TextStyle;
}
function CardContainer(props: PropsTypes) {
  const {children, title, styleContainer, styleTitle} = props;
  const navigation = useNavigation();
  const handleNavigation = ()=>{
    navigation.navigate(NameScreen.DetailNetworkScreen);
  }
  return (
    <Pressable onPress={handleNavigation}>
      <Box
        style={{
          borderWidth: 1,
          borderColor: theme.colors.border,
          borderRadius: 10,
          paddingVertical: 10,
          ...styleContainer,
        }}>
        {title && (
          <Text
            style={{
              ...theme.fontSize.h3,
              color: theme.colors.text,
              paddingLeft: 20,
              fontWeight: 'bold',
              marginBottom: 5,
              ...styleTitle,
            }}>
            {title}
          </Text>
        )}
        {children}
      </Box>
    </Pressable>
  );
}
export default CardContainer;
