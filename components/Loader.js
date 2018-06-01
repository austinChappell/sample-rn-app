import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import styles from '../assets/styles';

const Loader = () => (
  <View style={styles.container}>
    <ActivityIndicator
      color="#0000ff"
      size="large"
    />
  </View>
);

export default Loader;
