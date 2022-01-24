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
  body3: 16,
  body4: 14,
  body5: 12,

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
    hight:'#d55858',
    medium: '#3395c6',
    low:"#99ef9a"
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
