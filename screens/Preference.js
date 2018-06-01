import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Preference extends Component {
  constructor(props) {
    super(props);

    const { getParam } = props.navigation;

    this.state = {
      preference: getParam('preference'),
    };
  }

  render() {
    const { preference } = this.state;
    return (
      <View>
        <Text>{preference.label}</Text>
      </View>
    );
  }
}

export default Preference;
