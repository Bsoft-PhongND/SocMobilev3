import {useNavigation} from '@react-navigation/native';
import {Box, Button, Modal, Spinner, StatusBar, Text, View} from 'native-base';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {NameScreen} from '../../config';
import {AuthContext} from '../../context/AuthContext';
import {LoadingContext} from '../../context/LoadingContext';
import {backgroundLinear, rotateBg, theme} from '../../theme/theme';
import {
  statusbarHeight,
  STATUSBAR_HEIGHT,
  windowHeight,
  windowWidth,
} from '../../utils/Dimensions';
import wordApp from '../../utils/word';
interface PropsTypes {
  children: React.ReactNode;
  safeArea?: boolean;
  bgColors?: string[];
  rotateLnBg?: {
    start?: number[];
    end?: number[];
  };
}
function Container(props: PropsTypes) {
  return <ViewBackGround {...props} />;
}
function ViewBackGround({
  children,
  safeArea = true,
  bgColors = backgroundLinear,
  rotateLnBg = rotateBg,
}: PropsTypes) {
  const {loading} = React.useContext(LoadingContext);
  const navigation = useNavigation();
  const {invalidToken, setInvalidToken} = React.useContext(AuthContext);
  const handleOffModal = () => {
    setInvalidToken(false);
  };
  return (
    <Box
      flex={1}
      bg={{
        linearGradient: {
          colors: bgColors,
          start: rotateLnBg.start,
          end: rotateLnBg.end,
        },
      }}
      safeAreaTop={safeArea}>
      <StatusBar
        barStyle={'light-content'}
        translucent={true}
        backgroundColor={'transparent'}
      />
      <Box style={{flex: 1}}>{children}</Box>
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
      {invalidToken && (
        <Box
          position={'absolute'}
          w={windowWidth}
          h={windowHeight}
          style={{
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}>
          <Modal isOpen={invalidToken} onClose={handleOffModal}>
            <Modal.Content maxWidth="400px">
              <Modal.CloseButton />
              <Modal.Header>{wordApp.invalidToken}</Modal.Header>
              <Modal.Body>
                <Button onPress={handleOffModal}>
                  <Text style={{...theme.fontSize.h3, paddingVertical: 8}}>
                    {wordApp.loginAgaint}
                  </Text>
                </Button>
              </Modal.Body>
              <Modal.Footer></Modal.Footer>
            </Modal.Content>
          </Modal>
        </Box>
      )}
    </Box>
  );
}
export default Container;
