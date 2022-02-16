import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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
import NetWorkScreen from '../screens/Network';
import ApplicationScreen from '../screens/Application';
import EndpointScreen from '../screens/Endpoint';
import Animated, { AnimatedStyleProp } from 'react-native-reanimated';
import { StyleSheet } from 'react-native';

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
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};
const DashboardStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation:'fade_from_bottom'
      }}>
      <Stack.Screen
        name={NameScreen.DashBoardScreen}
        component={DashBoardScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NameScreen.NetWorkScreen}
        component={NetWorkScreen}
        options={({route}) => ({
          title: route.params?.title,
          headerShown: false,
        })}
      />
      <Stack.Screen
        name={NameScreen.HostingScreen}
        component={NetWorkScreen}
        options={({route}) => ({
          title: route.params?.title,
          headerShown: false,
        })}
      />
      <Stack.Screen
        name={NameScreen.ApplicationScreen}
        component={ApplicationScreen}
        options={({route}) => ({
          title: route.params?.title,
          headerShown: false,
        })}
      />
      <Stack.Screen
        name={NameScreen.EndpointScreen}
        component={EndpointScreen}
        options={({route}) => ({
          title: route.params?.title,
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};
const Screens = ({style}:any) =>{
  return(
    <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
      <Stack.Navigator>
      
      </Stack.Navigator>
    </Animated.View>
  )
}
const AppStack = () => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };
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
      }}
      >
        <Drawer.Screen
        name={NameScreen.StacksScreen.DashboardStack}
        component={DashboardStack}
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
const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    // overflow: 'scroll',
    // borderWidth: 1,
  },
  drawerStyles: { flex: 1, width: '50%', backgroundColor: 'transparent' },
  drawerItem: { alignItems: 'flex-start', marginVertical: 0 },
  drawerLabel: { color: 'white', marginLeft: -16 },
  avatar: {
    borderRadius: 60,
    marginBottom: 16,
    borderColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
  },
});