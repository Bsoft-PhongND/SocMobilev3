import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Button,
  Center,
  Flex,
  FormControl,
  Icon,
  Pressable,
  Stack,
  Text,
  View,
} from 'native-base';
import {SvgXml} from 'react-native-svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {svgs} from '../../assets';
import CheckBoxComponent from '../../components/checkbox';
import TextInputComponent from '../../components/input';
import ViewBackGround from '../../components/viewbackground';
import {theme} from '../../theme/theme';
import wordApp from '../../utils/word';
import styles from './style';
import {NameScreen} from '../../config';
import {AuthContext} from '../../context/AuthContext';
const LoginScreen = () => {
  const navigation = useNavigation();
  const {handleSaveToken, token} = useContext(AuthContext);
  const [state, setSate] = React.useState({
    showPassword: false,
  });
  const handleTogglePassword = (value: boolean) => {
    setSate({
      ...state,
      showPassword: value,
    });
  };
  const handleGoSetting = () => {
    navigation.navigate(NameScreen.SecurityNetWorkScreen);
  };
  const handleLogin = () => {
    handleSaveToken('avb');
    console.log(token);
  };
  return (
    <ViewBackGround>
      <View style={styles.container}>
        <SvgXml xml={svgs.SvgEyeLogo} height={120} width={120} />
        <View style={{alignItems: 'center'}}>
          <Text style={styles.nameApp}>{wordApp.nameApp}</Text>
          <Text style={styles.title}>Mobile</Text>
        </View>
        <Center style={{marginTop: 20, marginBottom: 60}}>
          <FormControl isRequired>
            <Stack space={4} w="100%">
              <TextInputComponent
                label={wordApp.username}
                LeftElement={
                  <Icon
                    as={<Ionicons name="ios-person-circle-outline" />}
                    size={5}
                    ml="2"
                    color="muted.400"
                  />
                }
                placeholder={wordApp.username}
              />
              <TextInputComponent
                label={wordApp.password}
                RightElement={
                  <Icon
                    as={
                      <Ionicons
                        name={
                          state.showPassword ? 'eye-outline' : 'eye-off-outline'
                        }
                      />
                    }
                    size={5}
                    ml="2"
                    color="muted.400"
                    onPress={() => handleTogglePassword(!state.showPassword)}
                  />
                }
                placeholder={wordApp.password}
                type={state.showPassword ? 'password' : 'text'}
              />
              <CheckBoxComponent
                label={wordApp.remember}
                defaultIsChecked={true}
              />
              <Button height={'1/5'} onPress={handleLogin}>
                {wordApp.login}
              </Button>
            </Stack>
          </FormControl>
        </Center>

        <Flex flexDirection="row" style={{position: 'absolute', bottom: '5%'}}>
          <Pressable onPress={handleGoSetting} style={{flexDirection: 'row'}}>
            <Icon
              as={<Ionicons name="md-settings" />}
              size={5}
              ml="2"
              color="muted.100"
            />
            <Text style={{marginLeft: 20, color: theme.colors.text}}>
              {wordApp.securityNetWork}
            </Text>
          </Pressable>
        </Flex>
      </View>
    </ViewBackGround>
  );
};

export default LoginScreen;
