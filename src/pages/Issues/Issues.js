import React, { Component } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import Header from '~/components/Header';
import Card from '~/components/Card';
import { api } from '~/services';
import styles from './style';

class Issues extends Component {
  state = {
    issues: [],
    selectedFilter: 'all',
    loading: true,
  };

  async componentDidMount() {
    await this.fetchIssues('all');
  }

  fetchIssues = async (filter) => {
    const { navigation } = this.props;
    this.setState({ loading: true });
    const name = navigation.getParam('name');
    const organization = navigation.getParam('organization');
    try {
      const { data } = await api.get(`/repos/${organization}/${name}/issues?state=${filter}`);
      const issuesData = data.map(issue => ({
        id: issue.id,
        name: issue.title,
        organization: issue.user.login,
        avatar: issue.user.avatar_url,
        url: issue.html_url,
      }));
      this.setState({ issues: issuesData, selectedFilter: filter });
    } catch (err) {
      console.log(err);
    }
    this.setState({ loading: false });
  };

  renderIssueList = () => {
    const { issues } = this.state;
    return (
      <FlatList
        data={issues}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Card repo={item} />}
      />
    );
  };

  render() {
    const { navigation } = this.props;
    const { loading, selectedFilter } = this.state;
    return (
      <View>
        <Header
          withReturn={true}
          title={navigation.getParam('name')}
          returnPage={navigation.getParam('returnPage')}
        />
        <View style={styles.filterContainer}>
          <TouchableOpacity
            style={styles.filterItem}
            onPress={() => this.fetchIssues('all')}
          >
            <Text style={selectedFilter === 'all' && styles.selectedFilter}>Todas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filterItem}
            onPress={() => this.fetchIssues('open')}
          >
            <Text style={selectedFilter === 'open' && styles.selectedFilter}>Abertas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filterItem}
            onPress={() => this.fetchIssues('closed')}
          >
            <Text style={selectedFilter === 'closed' && styles.selectedFilter}>Fechadas</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {loading
            ? <ActivityIndicator style={styles.loading} />
            : this.renderIssueList()
          }
        </ScrollView>
      </View>
    )
  }
};

Issues.propTypes = {
  navigation: PropTypes.shape(({
    navigate: PropTypes.func,
  })).isRequired,
};

export default Issues;
