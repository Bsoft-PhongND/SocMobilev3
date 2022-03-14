import AsyncStorage from '@react-native-community/async-storage';

class AppSettings {
  defaultUser = {
    name: 'Nguyễn Anh Phan',
    subName: 'Trưởng Phòng',
    token: null,
  };
  remember: boolean = false;
  username: string = '';
  password: string = '';
  splash: boolean = true;
  token: string = '';
  domainServer: string = 'http://localhost:3101';
  getDefaultUser() {
    return this.defaultUser;
  }

  async setRemember(remember: boolean) {
    await AsyncStorage.setItem(configAsync.remember, remember + '');
    return this.getAllItemsAsyncStorage();
  }
  async setSplash(value: boolean) {
    await AsyncStorage.setItem(configAsync.splash, value + '');
    return this.getAllItemsAsyncStorage();
  }
  async getSplash() {
    const result = await AsyncStorage.getItem(configAsync.splash);
    return result;
  }
  async setDomain(domain: string) {
    await AsyncStorage.setItem(configAsync.domain, domain);
    return this.getAllItemsAsyncStorage();
  }
  async setAccount(username: string, password: string,remember:boolean) {
    if(remember){
      Promise.all([
        await AsyncStorage.setItem(configAsync.username, username),
        await AsyncStorage.setItem(configAsync.password, password),
      ]);
      return this.getAllItemsAsyncStorage();
    }
  }
  async getAccount() {
    const result = await Promise.all([
      await AsyncStorage.getItem(configAsync.username),
      await AsyncStorage.getItem(configAsync.password),
      await AsyncStorage.getItem(configAsync.remember),
    ]);
    return {
      username: result[0],
      password: result[1],
      remember: result[2]
    }
  }
  async getAllItemsAsyncStorage() {
    const result = await Promise.all([
      AsyncStorage.getItem(configAsync.remember),
      AsyncStorage.getItem(configAsync.splash),
      AsyncStorage.getItem(configAsync.domain),
      AsyncStorage.getItem(configAsync.username),
      AsyncStorage.getItem(configAsync.password),
    ]);
    console.log(`result`, result);
    if (result[0]) {
      this.remember = result[0] == 'true' ? true : false;
    }
    if (result[1]) {
      this.splash = result[1] == 'true' ? true : false;
    }
    if (result[2]) this.domainServer = result[2];
    if (result[3]) this.username = result[3];
    if (result[4]) this.password = result[4];
  }
}
const App =  new AppSettings;
export default App;
export const configAsync = {
  remember: 'remember',
  splash: 'splash',
  domain: 'domain',
  username: 'username',
  password: 'password',
};
