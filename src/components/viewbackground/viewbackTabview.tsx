import { Box, StatusBar } from 'native-base';
import React from 'react';
import { theme } from '../../theme/theme';
interface PropsTypes {
  children: React.ReactNode;
  safeArea?: boolean;
}
function Container(props: PropsTypes) {
  return <ViewBackGround {...props} />;
}
function ViewBackGround({children, safeArea = true}: PropsTypes) {
  return (
    <Box
      flex={1}
      bg={{
        linearGradient: {
          colors: [
            theme.colors.purplebackground,
            theme.colors.background,
            theme.colors.purplebackground,
          ],
          start: [0, 0.5, 1],
          end: [1, 0.5, 0],
        },
      }}>
      <StatusBar
        barStyle={'light-content'}
        translucent={true}
        backgroundColor={'transparent'}
      />
      <Box style={{flex: 1}}>{children}</Box>
    </Box>
  );
}
export default Container;
