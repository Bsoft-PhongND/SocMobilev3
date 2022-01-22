import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';
import {NativeBaseProvider} from 'native-base';

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {/* <AppStack /> */}
        <AuthStack />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
