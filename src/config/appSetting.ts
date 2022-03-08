import AsyncStorage from '@react-native-community/async-storage';

class AppSettings {
  defaultUser = {
    name: 'Nguyễn Anh Phan',
    subName: 'Trưởng Phòng',
    token: null,
  };
  remember: boolean = false;
  splash: boolean = true;
  getDefaultUser() {
    return this.defaultUser;
  }
  async getAllItemsAsyncStorage() {
    const result = await Promise.all([
      AsyncStorage.getItem(configAsync.remember),
      AsyncStorage.getItem(configAsync.splash),
    ]);
    if (result[0]) {
      this.remember = result[0] == 'true' ? true : false;
    }
  }
}
export default new AppSettings();
export const configAsync = {
  remember: 'remember',
  splash: 'splash',
};
