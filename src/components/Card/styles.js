import { StyleSheet } from 'react-native';
import { colors } from '~/styles';

const styles = StyleSheet.create({
  itemContainer: {
    height: 65,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginVertical: 15,
  },
  repoInfoContainer: {
    flexDirection: 'row',
  },
  avatar: {
    height: 50,
    width: 50,
  },
  repoInfo: {
    marginLeft: 20,
  },
  repoName: {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.black,
    maxWidth: 300,
  },
  repoOrganization: {
    color: colors.darkTransparent,
    fontSize: 14,
  },
});

export default styles;
