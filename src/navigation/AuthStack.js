import React from 'react';
import {createNativeStackNavigator,CardStyleInterpolators} from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnBoarding/OnboardingScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import SecurityNetWorkScreen from '../screens/SecurityNetwork';
import { NameScreen } from '../config';
import AppStack from './AppStack';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator 
    screenOptions={{
      headerShown: false,
      animationEnabled:true,
      animation:'slide_from_right'
      }}>
      <Stack.Screen name={NameScreen.OnboardingScreen} component={OnboardingScreen} />
      <Stack.Screen name={NameScreen.LoginScreen} component={LoginScreen} />
      <Stack.Screen name={NameScreen.SecurityNetWorkScreen} component={SecurityNetWorkScreen} />
      <Stack.Screen name={NameScreen.StacksScreen.AppStack} component={AppStack} />
    </Stack.Navigator>
  );
};

export default AuthStack;
