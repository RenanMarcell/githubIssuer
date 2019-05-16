import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const RepoInput = ({ loading, handleChangeInput, inputValue, handleFetchRepository }) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      autoCapitalize="none"
      autoCorrect={false}
      placeholder="Adicionar novo repositório"
      underlineColorAndroid="transparent"
      value={inputValue}
      onChangeText={handleChangeInput}
    />
    <TouchableOpacity style={styles.button} onPress={ handleFetchRepository }>
      {loading
        ? <ActivityIndicator style={styles.loadingIcon} />
        : <Icon style={styles.loadingIcon} name="plus" size={20} />}
    </TouchableOpacity>
  </View>
);

export default RepoInput;
