import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 15,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
  },
  loadingIcon: {
    marginLeft: 15,
  },
});

export default styles;
