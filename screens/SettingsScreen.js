import React from 'react';
import { DeviceEventEmitter, StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';

import styles from '../assets/styles';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  state = {
    backgroundColor: 'plum',
  }

  componentDidMount() {
    DeviceEventEmitter.addListener('CHANGE_BG_COLOR', () => {
      this.changeColor();
    })
  }

  changeColor = () => {
    const { backgroundColor } = this.state;
    const newBG = backgroundColor === 'plum' ? 'skyblue' : 'plum';
    this.setState({ backgroundColor: newBG });
  }

  render() {
    const { backgroundColor } = this.state;
    const { navigate } = this.props.navigation;

    return (
      <View style={[StyleSheet.absoluteFill, styles.container, { backgroundColor }]}>
        <Text>Settings Screen</Text>

        <Button
          style={styles.button}
          block
          onPress={() => navigate('ScreenOne',
            { title: 'Screen One', message: 'Button One Pressed' }
          )}
          success
        >
          <Text>Button One</Text>
        </Button>

        <Button
          style={styles.button}
          block
          onPress={() => navigate('ScreenOne',
            { title: 'Screen Two', message: 'Button Two Pressed' }
          )}
          warning
        >
          <Text>Button Two</Text>
        </Button>

        <Button
          style={styles.button}
          block
          onPress={() => navigate('ScreenOne',
            { message: 'Button Three Pressed' }
          )}
          info
        >
          <Text>Button Three</Text>
        </Button>
      </View>
    )
  }
}
