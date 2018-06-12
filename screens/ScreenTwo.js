import React from 'react';
import PropTypes from 'prop-types';
import { DeviceEventEmitter, Text, View } from 'react-native';
import { Button } from 'native-base';

import styles from '../assets/styles';

const propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

const ScreenTwo = (props) => {
  const { goBack } = props.navigation;
  return (
    <View style={styles.container}>
      <Text>This is screen two</Text>

      <Button
        style={styles.button}
        onPress={() => goBack()}
        block
        success
      >
        <Text>Go Back</Text>
      </Button>

      <Button
        style={styles.button}
        onPress={() => {
          DeviceEventEmitter.emit('CHANGE_BG_COLOR');
        }}
        block
        info
      >
        <Text>Change BG Color</Text>
      </Button>
    </View>
  );
};

ScreenTwo.propTypes = propTypes;

export default ScreenTwo;
