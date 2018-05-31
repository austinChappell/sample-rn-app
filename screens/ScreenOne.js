import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';

import styles from '../assets/styles';

const ScreenOne = props => {
  const {
    getParam,
    navigate,
  } = props.navigation;
  
  const message = getParam('message');
  
  return (
    <View style={styles.container}>
      <Text>{message}</Text>

      <Button
        style={styles.button}
        onPress={() => navigate('ScreenTwo', { title: 'Screen Two' })}
        block
        danger
      >
        <Text>Screen Two</Text>
      </Button>
    </View>
  )
}

export default ScreenOne;
