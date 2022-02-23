import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NameScreen} from '../../config';
import DashBoardScreen from '../../screens/Dashboard';
import NetWorkScreen from '../../screens/Network';
import ApplicationScreen from '../../screens/Application';
import EndpointScreen from '../../screens/Endpoint';
import HostingScreen from '../../screens/Hosts';
import NotFoundError from '../../screens/NotFound';
import ViewBackGround from '../../components/viewbackground';
import HeaderBack from '../../components/headerback';
import TableListView from '../../components/TableList';
import InfoWarning from '../../components/infoWarning';
import wordApp from '../../utils/word';
const Stack = createNativeStackNavigator();

const DashboardStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'fade_from_bottom',
      }}>
      <Stack.Screen
        name={NameScreen.DashBoardScreen}
        component={DashBoardScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NameScreen.DashboardElementaryScreen}
        component={DashboardElementaryScreen}
        options={({route}) => ({
          title: route.params?.title,
          headerShown: false,
        })}
      />
      <Stack.Screen
        name={NameScreen.DashboardHightScreen}
        component={DashboardHightScreen}
        options={({route}) => ({
          // title: route.params?.title,
          headerShown: false,
        })}
      />
       <Stack.Screen
        name={NameScreen.DashboardUniversityScreen}
        component={DashboardUniversityScreen}
        options={({route}) => ({
          // title: route.params?.title,
          headerShown: false,
        })}
      />
      <Stack.Screen
        name={NameScreen.NotFoundScreen}
        component={NotFoundError}
        options={({route}) => ({
          title: route.params?.title,
          headerShown: false,
        })}
      />
      {/* <Stack.Screen
        name={NameScreen.DetailNetworkScreen}
        component={DetailNetworkScreen}
        options={({route}) => ({
          headerShown: false,
          title: route.params?.title,
        })}
      />
      <Stack.Screen
        name={NameScreen.HostingScreen}
        component={HostingScreen}
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
      /> */}
      {/* <Stack.Screen
        name={NameScreen.EndpointScreen}
        component={EndpointScreen}
        options={({route}) => ({
          title: route.params?.title,
          headerShown: false,
        })}
      /> */}
    </Stack.Navigator>
  );
};
const DashboardElementaryScreen = (props: any) => {
  const item = props.route?.params?.item;
  switch (item.navigation) {
    case NameScreen.NetWorkScreen:
      return <NetWorkScreen {...props} />;
    case NameScreen.ApplicationScreen:
      return <ApplicationScreen {...props} />;
    case NameScreen.EndpointScreen:
      return <EndpointScreen {...props} />;
    case NameScreen.HostingScreen:
      return <HostingScreen {...props} />;
    default:
      return <NotFoundError />;
  }
};
const DashboardHightScreen = (props: any) => {
  const item = props.route?.params?.item;
  // console.log(item);
  // switch (item.navigation) {
  //   case NameScreen.DetailNetworkScreen:
  //     return <DetailNetworkScreen {...props} />;
  //   default:
  //     return <NotFoundError />;
  // }
  return (
    <ViewBackGround>
      <HeaderBack title={item.title || '--'}/>
      {item.component}
      <TableListView/>
    </ViewBackGround>
  );
  return <NotFoundError />;
};
const DashboardUniversityScreen = (props: any) => {
  const item = props.route?.params?.item;
  return (
    <ViewBackGround>
      <HeaderBack title={wordApp.infoWarning || '--'}/>
      <InfoWarning item={item}/>
    </ViewBackGround>
  );
  return <NotFoundError />;
};
export default DashboardStack;
