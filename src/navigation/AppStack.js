import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomDrawer from '../components/CustomDrawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import WarningScreen from '../screens/Warning';
import ResponseScreen from '../screens/Response/detail';
import NewsScreen from '../screens/News';
import ContactScreen from '../screens/Contact';
import InfoWarningScreen from '../screens/Warning/info';
import TabNavigator from './TabNavigator';
import {NameScreen} from '../config';
import DashBoardScreen from '../screens/Dashboard';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const WarningStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NameScreen.WarningScreen}
        component={WarningScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NameScreen.InfoWarningScreen}
        component={InfoWarningScreen}
        options={({route}) => ({
          title: route.params?.title,
          headerShown: false
        })}
      />
    </Stack.Navigator>
  );
};
const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
        animationEnabled: true,
        animation: 'slide_from_right',
      }}>
      <Drawer.Screen
        name={NameScreen.DashBoardScreen}
        component={DashBoardScreen}
        options={{
          drawerIcon: ({color}) => (
            <AntDesign name="dashboard" size={22} color={color} />
          ),
          title: NameScreen.DrawerScreen.DashboardScreen,
        }}
      />
      <Drawer.Screen
        name={NameScreen.StacksScreen.WarningStack}
        component={WarningStack}
        options={{
          drawerIcon: ({color}) => (
            <Feather name="alert-triangle" size={22} color={color} />
          ),
          title: NameScreen.DrawerScreen.WarningScreen,
        }}
      />
      <Drawer.Screen
        name={NameScreen.ResponseScreen}
        component={ResponseScreen}
        options={{
          drawerIcon: ({color}) => (
            <FontAwesome name="gears" size={22} color={color} />
          ),
          title: NameScreen.DrawerScreen.ResponseScreen,
        }}
      />
      <Drawer.Screen
        name={NameScreen.StacksScreen.TabBarBottom}
        component={TabNavigator}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="newspaper-outline" size={22} color={color} />
          ),
          title: NameScreen.DrawerScreen.NewsScreen,
        }}
      />
      <Drawer.Screen
        name={NameScreen.ContactScreen}
        component={ContactScreen}
        options={{
          drawerIcon: ({color}) => (
            <AntDesign name="contacts" size={22} color={color} />
          ),
          title: NameScreen.DrawerScreen.ContactScreen,
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
