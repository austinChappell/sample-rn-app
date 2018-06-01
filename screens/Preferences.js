import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Icon, List, ListItem } from 'react-native-elements';

import styles from '../assets/styles';

const preferences = [
  {
    id: 1,
    label: 'Settings',
    icon: 'settings',
  },
  {
    id: 2,
    label: 'Notifications',
    icon: 'notifications',
  },
  {
    id: 3,
    label: 'Your Subscriptions',
    icon: 'book',
  },
];

class Preferences extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Preferences',
    headerLeft: (
      <Icon
        name="menu"
        onPress={() => navigation.openDrawer()}
      />
    ),
  });

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <List style={{ backgroundColor: "#ffffff" }}>
          {preferences.map(p => (
            <ListItem
              key={p.id}
              onPress={() => navigate("Preference", { preference: p })}
              leftIcon={{ name: p.icon }}
              title={p.label}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

export default Preferences;
