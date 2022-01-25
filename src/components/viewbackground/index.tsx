import { Box, Spinner, StatusBar } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native';
import {
  LoadingContext
} from '../../context/LoadingContext';
import { theme } from '../../theme/theme';
import { windowHeight, windowWidth } from '../../utils/Dimensions';
interface PropsTypes {
  children: React.ReactNode;
}
function Container(props: PropsTypes) {
  return <ViewBackGround {...props} />;
}
function ViewBackGround({children}: {children: React.ReactNode}) {
  const {loading} = React.useContext(LoadingContext);
  return (
    <Box
      flex={1}
      bg={{
        linearGradient: {
          colors: [
            theme.colors.background,
            theme.colors.secondary,
            theme.colors.background,
          ],
          start: [0, 0.5, 1],
          end: [1, 0.5, 0],
        },
      }}>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView style={{flex: 1}}>{children}</SafeAreaView>
      {loading && (
        <Box
          position={'absolute'}
          w={windowWidth}
          h={windowHeight}
          style={{
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}>
          <Spinner size="lg" color="lime.300" />
        </Box>
      )}
    </Box>
  );
}
export default Container;
