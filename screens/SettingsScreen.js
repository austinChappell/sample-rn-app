import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text>Settings Screen</Text>

          <Button
            style={styles.button}
            block
            onPress={() => navigate('ScreenOne', { title: 'One', message: 'Button One Pressed' })}
            success
          >
            <Text>Button One</Text>
          </Button>

          <Button
            style={styles.button}
            block
            onPress={() => navigate('ScreenOne', { title: 'Two', message: 'Button Two Pressed' })}
            warning
          >
            <Text>Button Two</Text>
          </Button>

          <Button
            style={styles.button}
            block
            onPress={() => navigate('ScreenOne', { message: 'Button Three Pressed' })}
            info
          >
            <Text>Button Three</Text>
          </Button>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
  },
  wrapper: {
    width: '95%',
  },
})