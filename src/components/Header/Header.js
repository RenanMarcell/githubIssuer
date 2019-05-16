import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import styles from './styles';

const Header = ({ withReturn, title, returnPage, navigation }) => {
  const returnToLastPage = () => (
    navigation.navigate(returnPage)
  );

  return (
    <View style={styles.container}>
      { withReturn
        ? (
          <TouchableOpacity onPress={returnToLastPage}>
            <Icon style={styles.icon} name="left" size={20} />
          </TouchableOpacity>
        )
        : <Text />
      }
      <Text style={styles.title}>{ title }</Text>
      <Text />
    </View>
  )
};

Header.defaultProps = {
  withReturn: false,
  returnPage: 'Repos',
};

Header.propTypes = {
  withReturn: PropTypes.bool,
  returnPage: PropTypes.string,
  title: PropTypes.string.isRequired,
  navigation: PropTypes.shape(({
    navigate: PropTypes.func,
  })).isRequired,
};

export default withNavigation(Header);
