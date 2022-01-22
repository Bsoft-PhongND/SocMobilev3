import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import SecurityNetWorkScreen from '../screens/SecurityNetwork';
import { NameScreen } from '../config';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={NameScreen.OnboardingScreen} component={OnboardingScreen} />
      <Stack.Screen name={NameScreen.LoginScreen} component={LoginScreen} />
      <Stack.Screen name={NameScreen.SecurityNetWorkScreen} component={SecurityNetWorkScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
