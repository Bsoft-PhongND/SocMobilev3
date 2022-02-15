import React from 'react';
import { NameScreen } from '../../config';
import CardGroupPieChart from '../cards/cardGroupPie';
import CardLineChart from '../cards/cardLine';
import CardPieChart from '../cards/cardPie';
export default [
    {
      type: 'Top cảnh báo',
      component: <CardGroupPieChart/>,
      color: '#a1e3a1',
      navigation: NameScreen.StacksScreen.WarningStack
    },
    {
      type: 'Lượng cảnh báo theo thời gian',
      component: <CardLineChart/>,
      color: '#db9efa',
      navigation: NameScreen.StacksScreen.WarningStack
    },
    {
      type: 'Tiến trình phản ứng',
      component: <CardPieChart/>,
      color: '#999',
      navigation: NameScreen.ResponseScreen
    }
  ];