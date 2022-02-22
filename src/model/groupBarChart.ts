import {theme} from '../theme/theme';

const groupBarChartModel: {
    x: string;
    y: number | string;
    label?: string;
  }[][] = [
  [
    {x: 'Hight', y: 1},
    {x: 'Medium', y: 2},
    {x: 'Low', y: 3},
  ],
  [
    {x: 'Hight', y: 2, label: 'Alpha'},
    {x: 'Medium', y: 3, label: 'Alpha'},
    {x: 'Low', y: 4, label: 'Alpha'},
  ],
  [
    {x: 'Hight', y: 1, label: 'Alpha'},
    {x: 'Medium', y: 2, label: 'Alpha'},
    {x: 'Low', y: 3, label: 'Alpha'},
  ],
];
const lableGroupBarChart = [
  {
    name: 'One',
    symbol: {fill: 'tomato', type: 'star'},
    labels: {fill: theme.colors.text},
  },
  {
    name: 'Two',
    symbol: {fill: 'orange'},
    labels: {fill: theme.colors.text},
  },
  {
    name: 'Three',
    symbol: {fill: 'gold'},
    labels: {fill: theme.colors.text},
  },
];
export {groupBarChartModel, lableGroupBarChart};
