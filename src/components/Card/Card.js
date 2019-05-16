import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import styles from './styles';

const Card = ({ repo, navigation }) => {
  const handleNavigation = () => (
    navigation.navigate('Issues', {
      ...repo,
      returnPage: navigation.state.routeName,
    })
  );

  const handleOpenUrl = () => Linking.openURL(repo.url);

  return (
    <View style={styles.itemContainer}>
      <View style={styles.repoInfoContainer}>
        <Image style={styles.avatar} source={{ uri: repo.avatar }} />
        <View style={styles.repoInfo}>
          <Text style={styles.repoName} numberOfLines={1}>{repo.name}</Text>
          <Text style={styles.repoOrganization}>{repo.organization}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={repo.url ? handleOpenUrl : handleNavigation}>
        <Icon name="arrow-right" size={20} />
      </TouchableOpacity>
    </View>
  );
};

Card.propTypes = {
  navigation: PropTypes.shape(({
    navigate: PropTypes.func,
  })).isRequired,
  repo: PropTypes.shape({
    uri: PropTypes.string,
    avatar: PropTypes.string,
    name: PropTypes.string,
    organization: PropTypes.string,
    url: PropTypes.oneOfType(PropTypes.bool, PropTypes.string),
  }).isRequired,
};

export default withNavigation(Card);
