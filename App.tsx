import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';
import {NativeBaseProvider} from 'native-base';
import AuthContextProvider, {AuthContext} from './src/context/AuthContext';
const Authenticate = () => {
  const {token} = React.useContext(AuthContext);
  if (token) return <AppStack />;
  else return <AuthStack />;
};
function App() {
  return (
    <NativeBaseProvider>
      <AuthContextProvider>
        <NavigationContainer>
          <Authenticate />
        </NavigationContainer>
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}

export default App;
