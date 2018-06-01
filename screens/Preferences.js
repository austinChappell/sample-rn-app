import React from 'react';
import { Text, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

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

export default props => (
  <ScrollView>
    <List
      style={{ backgroundColor: '#ffffff' }}
    >
      {preferences.map(p => (
        <ListItem
          key={p.id}
          onPress={() => props.navigation.navigate(
            'Preference',
            { preference: p },
          )}
          leftIcon={{ name: p.icon }}
          title={p.label}
        />
      ))}
    </List>
  </ScrollView>
);
