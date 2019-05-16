import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Header from '~/components/Header';
import Card from '~/components/Card';
import Repoinput from '~/components/Repoinput';
import { api } from '~/services';
import styles from './styles';

class Repos extends Component {
  state = {
    repos: [],
    loading: true,
    inputValue: '',
    error: '',
    refreshing: false,
  };

  async componentDidMount() {
    const repos = await AsyncStorage.getItem('@repos');
    if (repos) this.setState({ repos: JSON.parse(repos) });
    this.setState({ loading: false });
  }

  fetchRepository = async () => {
    this.setState({ loading: true, error: '' });
    const { inputValue, repos } = this.state;
    try {
      const { data } = await api.get(`/repos/${inputValue}`);
      if (repos.find(repo => repo.id === data.id)) {
        return this.setState({ error: 'O repositório ja foi adicionado', loading: false });
      }
      const repoData = {
        id: data.id,
        name: data.name,
        organization: data.owner.login,
        avatar: data.owner.avatar_url,
        url: false,
      };

      this.setState({ repos: [...repos, repoData], inputValue: '' });
      await AsyncStorage.setItem('@repos', JSON.stringify([...repos, repoData]));
    } catch (err) {
      this.setState({ error: 'O repositório não foi encontrado' });
    }
    this.setState({ loading: false });
  };

  handleChangeInput = text => this.setState({ inputValue: text });

  refreshList = async () => {
    this.setState({ refreshing: true });
    await AsyncStorage.clear();

    this.setState({ repos: [], loading: false, refreshing: false });
  };

  render() {
    const {
      error,
      loading,
      inputValue,
      repos,
      refreshing,
    } = this.state;
    return (
      <React.Fragment>
        <Header title="GitIssues" />
        <View style={styles.container}>
          {!!error && <Text style={styles.error}>{ error }</Text>}
          <Repoinput
            loading={loading}
            inputValue={inputValue}
            handleChangeInput={this.handleChangeInput}
            handleFetchRepository={this.fetchRepository}
          />
          <ScrollView>
            <FlatList
              data={repos}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => <Card repo={item} />}
              onRefresh={this.refreshList}
              refreshing={refreshing}
            />
          </ScrollView>
        </View>
      </React.Fragment>
    );
  }
}

export default Repos;
