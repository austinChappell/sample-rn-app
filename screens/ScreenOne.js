import React from 'react';
import { Text, View } from 'react-native';

const ScreenOne = props => {
  const { getParam } = props.navigation;
  const message = getParam('message');
  return (
    <View>
      <Text>{message}</Text>
    </View>
  )
}

export default ScreenOne;
