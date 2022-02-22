import {Box, Heading, Pressable, Text} from 'native-base';
import React from 'react';
import {TextStyle, ViewStyle} from 'react-native';
import {theme} from '../../theme/theme';
interface PropsTypes {
  children: React.ReactNode;
  title?: string;
  styleContainer?: ViewStyle;
  styleTitle?: TextStyle;
  onPress?: any;
}
function CardContainer(props: PropsTypes) {
  const {children, title, styleContainer, styleTitle, onPress} = props;

  return (
    <Pressable onPress={() => (onPress ? onPress() : null)}>
      <Box
        style={{
          borderWidth: 1,
          borderColor: theme.colors.border,
          borderRadius: 10,
          paddingVertical: 10,
          ...styleContainer,
        }}>
        {title && (
          <Heading size="xs" style={{color: theme.colors.text,...styleTitle}}>
            {title}
          </Heading>
        )}
        {children}
      </Box>
    </Pressable>
  );
}
export default CardContainer;
