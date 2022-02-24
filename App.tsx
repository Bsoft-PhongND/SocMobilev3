import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';
import {extendTheme, NativeBaseProvider} from 'native-base';
import AuthContextProvider, {AuthContext} from './src/context/AuthContext';
import customTheme from './src/theme/customTheme';
import LoadingContextProvider from './src/context/LoadingContext';
import NotFoundError from './src/screens/NotFound';
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
  try {
    const theme = extendTheme({customTheme});
    return (
      <NativeBaseProvider config={config} theme={theme}>
          <LoadingContextProvider>
            <AuthContextProvider>
              <NavigationContainer>
                {/* <AppStack /> */}
                <AuthStack />
                {/* <Authenticate /> */}
              </NavigationContainer>
            </AuthContextProvider>
          </LoadingContextProvider>
      </NativeBaseProvider>
    );
  } catch (error:any) {
    return <NotFoundError message={error.message} />;
  }
 
}

export default App;
