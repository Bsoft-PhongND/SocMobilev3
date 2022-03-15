import {Dimensions} from 'react-native';
import {DefaultTheme} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 18,
  body4: 16,
  body5: 14,
  body6: 12,

  // app dimensions
  width,
  height,
};
export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#fff',
    primary: '#560CCE',
    secondary: '#414757',
    error: '#f13a59',
    background: '#19173e',
    blue1: '#99cfef',
    hight: '#9f1239',
    medium: '#c026d3',
    low: '#fb923c',
    black: '#000',
    card: 'rgba(20,20,60,.7)',
    purple: 'rgba(15,23,42,.8)',
    lightBlue800:'rgba(0,40,81,1)',
    darkBlue8000:'rgba(3,32,61,.9)',
    red: 'rgba(254,101,92,1)',
    blue: 'rgba(68,162,249,1)',
    green:'#fed7aa',
    coolGray:'#d1d5db',
    purplebackground: 'rgba(15,17,25,1)',
  },
  fontSize: {
    h1: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h1, lineHeight: 36},
    h2: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30},
    h3: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, lineHeight: 22},
    h4: {fontFamily: 'Roboto-Regular', fontSize: SIZES.h4, lineHeight: 20},
    body1: {
      fontFamily: 'Roboto-Regular',
      fontSize: SIZES.body1,
      lineHeight: 36,
    },
    body2: {
      fontFamily: 'Roboto-Regular',
      fontSize: SIZES.body2,
      lineHeight: 30,
    },
    body3: {
      fontFamily: 'Roboto-Regular',
      fontSize: SIZES.body3,
      lineHeight: 22,
    },
    body4: {
      fontFamily: 'Roboto-Regular',
      fontSize: SIZES.body4,
      lineHeight: 22,
    },
    body5: {
      fontFamily: 'Roboto-Regular',
      fontSize: SIZES.body5,
      lineHeight: 22,
    },
  },
  size: {
    ...SIZES,
  },
};
export const backgroundLinear = [
  theme.colors.purplebackground,
  theme.colors.background,
  theme.colors.purplebackground,
];
export const rotateBg = {
  start: [1, 0],
  end: [0, 1],
};

export const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];