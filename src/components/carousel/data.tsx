import React from 'react';
import CardGroupPieChart from '../cards/cardGroupPie';
import CardLineChart from '../cards/cardLine';
import CardPieChart from '../cards/cardPie';
export default [
    {
      type: 'Top cảnh báo',
      component: <CardGroupPieChart/>,
      color: '#a1e3a1',
    },
    {
      type: 'Lượng cảnh báo theo thời gian',
      component: <CardLineChart/>,
      color: '#db9efa',
    },
    {
      type: 'Tiến trình phản ứng',
      component: <CardPieChart/>,
      color: '#999',
    }
  ];