import { AsyncStorage } from 'react-native';

export default class AsyncSetting {

  static async getValue(key: string) {
    try {
      return await AsyncStorage.getItem(key);
    } catch (err) {
      return null;
    }
  }

  static async getBoolean(key: string) {
    const value = await this.getValue(key);
    if (value) {
      return Boolean(value);
    }
    return false;
  }

  static async setValue(key: string, value: *) {
    await AsyncStorage.setItem(key, `${value}`);
    return value;
  }

  static async getGuestFlag() {
      return this.getBoolean('isGuest');
  }
  static setGuestFlag(flagname) {
    return this.setValue('isGuest', flagname);
  }

  static async getuthenticationUserFlag() {
    return this.getBoolean('isAuthenticateUser');
  }
  static setAuthenticationUserFlag(flag) {
    return this.setValue('isAuthenticateUser', flag);
  }

  static setId(id) {
    return this.setValue('id', id);
  }

  static async getId() {
    return this.getValue('id');

  }
  static setAppRunOnce() {
    return this.setValue('chilll.run.once', true);
  }
}
