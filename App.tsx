import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';
import {extendTheme, NativeBaseProvider} from 'native-base';
import AuthContextProvider, {AuthContext} from './src/context/AuthContext';
import customTheme from './src/theme/customTheme';
import LoadingContextProvider from './src/context/LoadingContext';
const Authenticate = () => {
  const {token} = React.useContext(AuthContext);
  if (token) return <AppStack />;
  else return <AuthStack />;
};
const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};
function App() {
  const theme = extendTheme({customTheme});
  return (
    <NativeBaseProvider config={config} theme={theme}>
      <LoadingContextProvider>
        <AuthContextProvider>
          <NavigationContainer>
            <Authenticate />
          </NavigationContainer>
        </AuthContextProvider>
      </LoadingContextProvider>
    </NativeBaseProvider>
  );
}

export default App;
