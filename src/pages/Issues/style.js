import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: colors.lighter,
    padding: metrics.basePadding,
  },
  filterContainer: {
    backgroundColor: colors.light,
    height: 50,
    borderRadius: metrics.baseRadius,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: metrics.baseMargin,
  },
  filterItem: {
    color: colors.regular,
  },
  selectedFilter: {
    fontFamily: 'sans-serif',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;
