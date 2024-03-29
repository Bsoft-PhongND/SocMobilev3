import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet } from 'react-native';
import {
  MaterialIcons,
  Ionicons,
  FontAwesome,
  Feather,
  AntDesign,
} from '../assets/icons';
import CustomDrawer from '../components/CustomDrawer';
import { AppSettings, NameScreen } from '../config';
import ContactScreen from '../screens/Contact';
import ResponseScreen from '../screens/Response';
import NotFoundScreen from '../screens/NotFound';
import NewsScreen from '../screens/News';
import { DashboardStack, WarningStack } from './routers';
import TabNavigator from './TabNavigator';
import alertService from '../redux/services/alertService';
import { useDispatch } from 'react-redux';
import { AuthContext } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { useToast } from 'native-base';
import App from '../config/appSetting';

const Drawer = createDrawerNavigator();

/* custum drawer*/
// const Screens = () => {
//   const progress: any = React.useState(new Animated.Value(useDrawerProgress().value));
//   const scale = Animated.interpolateNode(progress.value, {
//     inputRange: [0, 1],
//     outputRange: [1, 0.8],
//   });
//   const borderRadius = Animated.interpolateNode(progress, {
//     inputRange: [0, 1],
//     outputRange: [0, 16],
//   });

//   const style = {borderRadius, transform: [{scale}]};
//   React.useEffect(() => {
//     console.log(progress);
//   }, [progress]);
//   return (
//     <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
//       <Stack.Navigator screenOptions={{headerShown: false}}>
//         <Drawer.Screen
//           name={NameScreen.StacksScreen.DashboardStack}
//           component={DashboardStack}
//           options={{
//             drawerIcon: ({color}) => (
//               <AntDesign name="dashboard" size={22} color={color} />
//             ),
//             title: NameScreen.DrawerScreen.DashboardScreen,
//           }}
//         />
//         <Drawer.Screen
//           name={NameScreen.StacksScreen.WarningStack}
//           component={WarningStack}
//           options={{
//             drawerIcon: ({color}) => (
//               <Feather name="alert-triangle" size={22} color={color} />
//             ),
//             title: NameScreen.DrawerScreen.WarningScreen,
//           }}
//         />
//         <Drawer.Screen
//           name={NameScreen.ResponseScreen}
//           component={ResponseScreen}
//           options={{
//             drawerIcon: ({color}) => (
//               <FontAwesome name="gears" size={22} color={color} />
//             ),
//             title: NameScreen.DrawerScreen.ResponseScreen,
//           }}
//         />
//         <Drawer.Screen
//           name={NameScreen.StacksScreen.TabBarBottom}
//           component={TabNavigator}
//           options={{
//             drawerIcon: ({color}) => (
//               <Ionicons name="newspaper-outline" size={22} color={color} />
//             ),
//             title: NameScreen.DrawerScreen.NewsScreen,
//           }}
//         />
//         <Drawer.Screen
//           name={NameScreen.ContactScreen}
//           component={ContactScreen}
//           options={{
//             drawerIcon: ({color}) => (
//               <AntDesign name="contacts" size={22} color={color} />
//             ),
//             title: NameScreen.DrawerScreen.ContactScreen,
//           }}
//         />
//       </Stack.Navigator>
//     </Animated.View>
//   );
// };
const AppStack = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const toast = useToast();
  const { setInvalidToken, invalidToken } = React.useContext(AuthContext);
  React.useEffect(() => {
    let timer: any = null;
    if (AppSettings.autoUpdate) {
      timer = setInterval(async () => {
        console.log("reload")
        await Promise.all([
          alertService.ruleSeverity(dispatch, setInvalidToken, timer),
          alertService.alertOverTime(dispatch),
          alertService.alertSent(dispatch),
        ])
          .catch(error => {
            toast.show(error.message);
          })
      }, AppSettings.timeUpdate*1000)
    }
    return () => clearInterval(timer);
  }, []);
  React.useEffect(() => {
    invalidToken && navigation.reset({
      index: 0,
      routes: [{ name: NameScreen.LoginScreen }],
    });
  }, [invalidToken]);
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
        drawerType: 'slide',
      }}

      defaultScreenOptions={{
        sceneContainerStyle: { backgroundColor: 'transparent' },
        drawerActiveBackgroundColor: 'transparent',
        drawerInactiveBackgroundColor: 'transparent',
        drawerActiveTintColor: 'green',
        drawerInactiveTintColor: 'green',
      }}>
      {/* <Drawer.Screen name="defaultScreen">{() => <Screens />}</Drawer.Screen> */}
      <Drawer.Screen
        name={NameScreen.StacksScreen.DashboardStack}
        component={DashboardStack}
        options={{
          drawerIcon: ({ color }) => (
            <AntDesign name="dashboard" size={22} color={color} />
          ),
          title: NameScreen.DrawerScreen.DashboardScreen,
        }}
      />
      <Drawer.Screen
        name={NameScreen.StacksScreen.WarningStack}
        component={WarningStack}
        options={{
          drawerIcon: ({ color }) => (
            <Feather name="alert-triangle" size={22} color={color} />
          ),
          title: NameScreen.DrawerScreen.WarningScreen,
        }}
      />
      <Drawer.Screen
        name={NameScreen.ResponseScreen}
        component={ResponseScreen}
        options={{
          drawerIcon: ({ color }) => (
            <FontAwesome name="gears" size={22} color={color} />
          ),
          title: NameScreen.DrawerScreen.ResponseScreen,
        }}
      />
      <Drawer.Screen
        name={NameScreen.StacksScreen.TabBarBottom}
        component={NewsScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="newspaper-outline" size={22} color={color} />
          ),
          title: NameScreen.DrawerScreen.NewsScreen,
        }}
      />
      <Drawer.Screen
        name={NameScreen.ContactScreen}
        component={ContactScreen}
        options={{
          drawerIcon: ({ color }) => (
            <AntDesign name="contacts" size={22} color={color} />
          ),
          title: NameScreen.DrawerScreen.ContactScreen,
        }}
      />
      {/* <Drawer.Screen
        name={NameScreen.NotFoundScreen}
        component={NotFoundScreen}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="error-outline" size={22} color={color} />
          ),
          title: 'Not Found',
        }}
      /> */}
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
  },
});
