import React from 'react';
import {NameScreen} from '../../config';
import wordApp from '../../utils/word';
import CardBar from '../cards/cardBar';
import CardGroupPieChart, { ItemProps } from '../cards/cardGroupPie';
import CardLineChart from '../cards/cardLine';
import CardPieChart from '../cards/cardPie';
export default [
  {
    id: 1,
    type: 'Top cảnh báo',
    component: <CardGroupPieChart />,
    color: '#a1e3a1',
    navigation: NameScreen.StacksScreen.WarningStack,
  },
  {
    id: 2,
    type: 'Lượng cảnh báo theo thời gian',
    component: <CardLineChart />,
    color: '#db9efa',
    navigation: NameScreen.StacksScreen.WarningStack,
  },
  {
    id: 3,
    type: 'Tiến trình phản ứng',
    component: <CardPieChart flex={1} />,
    color: '#999',
    navigation: NameScreen.ResponseScreen,
  },
];
export function setDataSourceCarolsel(dataSources:[[ItemProps,ItemProps,ItemProps],any,any]) {
  return [
    {
      id: 1,
      type: 'Top cảnh báo',
      component: <CardGroupPieChart dataSource={dataSources[0]}/>,
      color: '#a1e3a1',
      navigation: NameScreen.StacksScreen.WarningStack,
    },
    {
      id: 2,
      type: wordApp.alertsOverTime,
      component: <CardLineChart dataSource={dataSources[1]}/>,
      color: '#db9efa',
      navigation: NameScreen.StacksScreen.WarningStack,
    },
    {
      id: 3,
      type: wordApp.logBySensor,
      component: <CardBar dataSource={dataSources[2]} height={220} lablesOptions={{x:0,y:30}}/>,
      color: '#999',
      navigation: NameScreen.StacksScreen.WarningStack,
    },
  ];
}
