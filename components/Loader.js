import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import styles from '../assets/styles';

const Loader = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);

export default Loader;
