import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NameScreen } from '../config';
import LoginScreen from '../screens/Login/LoginScreen';
import OnboardingScreen from '../screens/OnBoarding/OnboardingScreen';
import SecurityNetWorkScreen from '../screens/SecurityNetwork';
import ImportVPNScreen from '../screens/SecurityNetwork/import';
import AppStack from './AppStack';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
     initialRouteName={NameScreen.OnboardingScreen}
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen
        name={NameScreen.OnboardingScreen}
        component={OnboardingScreen}
      />
      <Stack.Screen name={NameScreen.LoginScreen} component={LoginScreen} />
      <Stack.Screen
        name={NameScreen.SecurityNetWorkScreen}
        component={SecurityNetWorkScreen}
      />
      <Stack.Screen
        name={NameScreen.ImportVPNScreen}
        component={ImportVPNScreen}
      />
      <Stack.Screen
        name={NameScreen.StacksScreen.AppStack}
        component={AppStack}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
