import {
  DrawerContentScrollView, DrawerItemList, useDrawerProgress
} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import {
  Image, ImageBackground, Text, TouchableOpacity, View
} from 'react-native';
import Animated from 'react-native-reanimated';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppSettings, NameScreen } from '../config';
import { AuthContext } from '../context/AuthContext';
import wordApp from '../utils/word';
const CustomDrawer = props => {
  const {handleSaveToken} = useContext(AuthContext);
  const navigation = useNavigation();

  const handleLogout = ()=>{
    handleSaveToken(null);
    navigation.reset({
      index: 0,
      routes: [{name: NameScreen.LoginScreen}],
    });
  }

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#8200d6'}}>
        <ImageBackground
          source={require('../assets/images/menu-bg.jpeg')}
          style={{padding: 20}}>
          <Image
            source={require('../assets/images/user-profile.jpg')}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontFamily: 'Roboto-Medium',
              marginBottom: 5,
            }}>
            {AppSettings.defaultUser.fullName}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Roboto-Regular',
                marginRight: 5,
              }}>
              {AppSettings.defaultUser.description}
            </Text>
            <FontAwesome5 name="coins" size={14} color="#fff" />
          </View>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={handleLogout} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              {wordApp.logout}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
