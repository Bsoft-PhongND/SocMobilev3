import AsyncStorage from '@react-native-community/async-storage';

class AppSettings {
  defaultUser = {
    name: 'Nguyễn Anh Phan',
    subName: 'Trưởng Phòng',
    token: null,
  };
  remember: boolean = false;
  splash: boolean = true;
  domainServer:string = "http://localhost:3101"
  getDefaultUser() {
    return this.defaultUser;
  }

  async setRemember(remember: boolean) {
    await AsyncStorage.setItem(configAsync.remember,remember+"");
    return this.getAllItemsAsyncStorage();
  }
  async setSplash(value: boolean) {
    await AsyncStorage.setItem(configAsync.splash,value+"");
    return this.getAllItemsAsyncStorage();
  }
  async getSplash() {
    const result = await AsyncStorage.getItem(configAsync.splash);
    return result;
  }
  async setDomain(domain: string) {
    await AsyncStorage.setItem(configAsync.domain,domain);
    return this.getAllItemsAsyncStorage();
  }

  async getAllItemsAsyncStorage() {
    const result = await Promise.all([
      AsyncStorage.getItem(configAsync.remember),
      AsyncStorage.getItem(configAsync.splash),
      AsyncStorage.getItem(configAsync.domain),
    ]);
    console.log(`result`, result);
    if (result[0]) {
      this.remember = result[0] == 'true' ? true : false;
    }
    if (result[1]) {
      this.splash = result[1] == 'true' ? true : false;
    }
    if (result[2]) this.domainServer = result[2];
    
  }
  
}
 const App = new AppSettings();
 export default App
export const configAsync = {
  remember: 'remember',
  splash: 'splash',
  domain: 'domain',
};
