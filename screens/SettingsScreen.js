import React from 'react';
import { DeviceEventEmitter, StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';
import { Button as RNEButton } from 'react-native-elements';
import { withNavigationFocus } from 'react-navigation';

import styles from '../assets/styles';

class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  state = {
    backgroundColor: 'plum',
    loading: false,
  }

  componentDidMount() {
    DeviceEventEmitter.addListener('CHANGE_BG_COLOR', () => {
      this.changeColor();
    });
  }

  componentWillReceiveProps = (nextProps) => {
    const wasFocused = this.props.isFocused;
    const { isFocused } = nextProps;
    if (!wasFocused && isFocused) {
      this.onFocus();
    }
  }

  changeColor = () => {
    const { backgroundColor } = this.state;
    const newBG = backgroundColor === 'plum' ? 'skyblue' : 'plum';
    this.setState({ backgroundColor: newBG });
  }

  delayNav = (message) => {
    this.setState({ loading: true }, () => {
      setTimeout(() => {
        this.props.navigation.navigate(
          'ScreenOne',
          { message },
        );
      }, 2000);
    });
  }

  onFocus = () => {
    this.setState({ loading: false });
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
          onPress={() => navigate(
            'ScreenOne',
            { title: 'Screen One', message: 'Button One Pressed' },
          )}
          success
        >
          <Text>Button One</Text>
        </Button>

        <Button
          style={styles.button}
          block
          onPress={() => navigate(
            'ScreenOne',
            { title: 'Screen Two', message: 'Button Two Pressed' },
          )}
          warning
        >
          <Text>Button Two</Text>
        </Button>

        <RNEButton
          buttonStyle={{
            backgroundColor: 'rgba(92, 99,216, 1)',
            width: 300,
            height: 45,
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 5,
          }}
          disabled={this.state.loading}
          loading={this.state.loading}
          onPress={() => this.delayNav('Button Three Pressed')}
          title="Button Three"
        />
      </View>
    );
  }
}

export default withNavigationFocus(SettingsScreen);
