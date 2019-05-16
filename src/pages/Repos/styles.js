import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
    padding: metrics.basePadding,
  },
  error: {
    color: colors.danger,
    fontWeight: 'bold',
  },
});

export default styles;
