import { Box, StatusBar } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { theme } from '../../theme/theme';

function ViewBackGround({children}: {children: React.ReactNode}) {
  return (
    <Box
      flex={1}
      bg={{
        linearGradient: {
          colors: [theme.colors.background, theme.colors.secondary,theme.colors.background],
          start: [0, 0.5, 1],
          end: [1, 0.5, 0],
        },
      }}>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView style={{flex: 1}}>{children}</SafeAreaView>
    </Box>
  );
}
export default ViewBackGround;
