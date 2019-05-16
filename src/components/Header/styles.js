import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  container: {
    height: 54 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: metrics.basePadding,
    backgroundColor: colors.white,
  },
  title: {
    fontFamily: 'sans-serif',
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.darker,
  },
  icon: {
    color: colors.darker,
    fontWeight: 'bold',
  },
});

export default styles;
