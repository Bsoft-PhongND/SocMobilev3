import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Button,
  Center,
  Flex,
  FormControl,
  Icon,
  KeyboardAvoidingView,
  Pressable,
  Stack,
  Text,
  useToast,
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
import {AppSettings, NameScreen} from '../../config';
import {AuthContext} from '../../context/AuthContext';
import {LoadingContext} from '../../context/LoadingContext';
import helpers from '../../helpers/helpers';
import {Platform} from 'react-native';
import Validate from '../../utils/validate';
import userService from '../../redux/services/userService';
import {useDispatch} from 'react-redux';
const LoginScreen = () => {
  const navigation = useNavigation();
  const toast = useToast();
  const dispatch = useDispatch();
  const {handleSaveToken, handleGetAccount, account} = useContext(AuthContext);
  const {setLoading} = useContext(LoadingContext);
  const [state, setSate] = React.useState(() => ({
    showPassword: false,
    username: account?.username,
    password: account?.password,
  }));
  const [remember, setRemember] = React.useState(account.remember);
  const handleTogglePassword = (value: boolean) => {
    setSate({
      ...state,
      showPassword: value,
    });
  };
  const handleInputUsername = (username: string) => {
    setSate({
      ...state,
      username,
    });
  };
  const handleInputPassword = (password: string) => {
    setSate({
      ...state,
      password,
    });
  };
  const handleCheckBox = () => {
    setRemember(!remember);
  };
  const handleGoSetting = () => {
    navigation.navigate(NameScreen.SecurityNetWorkScreen);
  };
  const handleLogin = async () => {
    console.log(state.username, state.password, remember);
    try {
      setLoading(true);
      Validate.validateLogin(state.username, state.password);
      await userService
        .login(dispatch, {username: state.username, password: state.password})
        .then(token => {
          handleSaveToken(token);
          AppSettings.token = token;
          AppSettings.setAccount(state.username, state.password, remember);
          navigation.reset({
            index: 0,
            routes: [{name: NameScreen.StacksScreen.AppStack}],
          });
        })
        .finally(() => setLoading(false));
    } catch (error: any) {
      setLoading(false);
      toast.show({
        title: error.message || error,
      });
    }
  };
  React.useEffect(() => {
    handleGetAccount();
  }, []);
  React.useEffect(() => {
    setSate({...state, username: account.username, password: account.password});
    setRemember(account.remember);
  }, [account]);
  return (
    <ViewBackGround>
      <KeyboardAvoidingView
        flex={1}
        h={{
          base: '400px',
        }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Center style={styles.container}>
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
                  value={state.username}
                  placeholder={wordApp.username}
                  onChangeText={handleInputUsername}
                />
                <TextInputComponent
                  label={wordApp.password}
                  value={state.password}
                  RightElement={
                    <Icon
                      as={
                        <Ionicons
                          name={
                            state.showPassword
                              ? 'eye-outline'
                              : 'eye-off-outline'
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
                  type={state.showPassword ? 'text' : 'password'}
                  onChangeText={handleInputPassword}
                />
                <CheckBoxComponent
                  label={wordApp.remember}
                  defaultIsChecked={remember}
                  onChangeChecked={handleCheckBox}
                />
                <Button
                  height={'1/5'}
                  onPress={handleLogin}
                  style={styles.button}>
                  {wordApp.login}
                </Button>
              </Stack>
            </FormControl>
          </Center>

          <Flex
            flexDirection="row"
            style={{position: 'absolute', bottom: '5%'}}>
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
        </Center>
      </KeyboardAvoidingView>
    </ViewBackGround>
  );
};

export default LoginScreen;
