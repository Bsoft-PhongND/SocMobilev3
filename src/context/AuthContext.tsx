import React, {createContext, useState} from 'react';
import {AppSettings} from '../config';

export const AuthContext = createContext<any>(null);
const AuthContextProvider = ({children}: any) => {
  const [state, setState] = useState<any>({
    currentUser: AppSettings.getDefaultUser(),
    token: null,
    account: {
      username: null,
      password: null,
      remember: false,
    }
  });
  const handleSaveToken = (token: string) => {
    setState({
      ...state,
      token,
    });
  };
  const handleGetAccount = async () => {
    const account = await AppSettings.getAccount();
    setState({...state,account});
  }
  const dataContext = {
    ...state,
    handleSaveToken,
    handleGetAccount
  };

  return (
    <AuthContext.Provider value={dataContext}>{children}</AuthContext.Provider>
  );
};
export default AuthContextProvider;
