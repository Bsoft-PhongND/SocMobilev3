import React from 'react';
import {NameScreen} from '../../config';
import wordApp from '../../utils/word';
import {MaterialCommunityIcons, Entypo, Feather} from '../../assets/icons';
const dataFunctions = [
  {
    id: 1,
    title: wordApp.functions.netWork,
    // icon: require('../../assets/icons/png/network.png'),
    icon: <Entypo name="network"/>,
    navigation: NameScreen.NetWorkScreen,
  },
  {
    id: 2,
    title: wordApp.functions.server,
    // icon: require('../../assets/icons/png/network2.png'),
    icon: <Feather name="server"/>,
    navigation: NameScreen.HostingScreen,
  },
  {
    id: 3,

    title: wordApp.functions.Application,
    // icon: require('../../assets/icons/png/application.png'),
    icon: <MaterialCommunityIcons name="application-braces-outline"/>,
    navigation: NameScreen.ApplicationScreen,
  },
  {
    id: 6,

    title: wordApp.functions.endpoint,
    // icon: require('../../assets/icons/png/database.png'),
    navigation: NameScreen.EndpointScreen,
    icon: <MaterialCommunityIcons name="devices"/>
  },
];
export {dataFunctions};
