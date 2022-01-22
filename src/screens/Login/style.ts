import {StyleSheet} from 'react-native';
import {SIZES, theme} from '../../theme/theme';

const styles = StyleSheet.create({
  nameApp: {
    ...theme.fontSize.h1,
    fontWeight: 'bold',
    color: theme.colors.text
  },
  title: {
    ...theme.fontSize.h2,
    fontWeight: '500',
    color: theme.colors.text
  },
  container: {flex: 1, justifyContent: 'center', alignItems: 'center',paddingBottom:'20%'},
});
export default styles;
