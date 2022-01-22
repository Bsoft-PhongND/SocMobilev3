import {
  Button,
  Center,
  Flex,
  FormControl,
  Icon,
  Stack,
  Text,
  View,
} from 'native-base';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {svgs} from '../../assets';
import CheckBoxComponent from '../../components/checkbox';
import TextInputComponent from '../../components/input';
import ViewBackGround from '../../components/viewbackground';
import { theme } from '../../theme/theme';
import wordApp from '../../utils/word';
import styles from './style';
const LoginScreen = () => {
  const [state, setSate] = React.useState({
    showPassword: false,
  });
  const handleTogglePassword = (value: boolean) => {
    setSate({
      ...state,
      showPassword: value,
    });
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
            <Button height={'1/5'}>{wordApp.login}</Button>
          </Stack>
        </FormControl>
      </Center>
      <Flex flexDirection="row" style={{position: 'absolute', bottom: 50}}>
        <Icon
          as={<Ionicons name="md-settings" />}
          size={5}
          ml="2"
          color="muted.100"
        />
        <Text style={{marginLeft: 20,color: theme.colors.text}}>{wordApp.securityNetWork}</Text>
      </Flex>
    </View>
   </ViewBackGround>
  );
};

export default LoginScreen;
