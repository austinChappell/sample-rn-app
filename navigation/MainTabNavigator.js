import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  createDrawerNavigator,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import Preference from '../screens/Preference';
import Preferences from '../screens/Preferences';
import HomeScreen from '../screens/HomeScreen';
import Users from '../screens/Users';
import ScreenOne from '../screens/ScreenOne';
import ScreenTwo from '../screens/ScreenTwo';
import SettingsScreen from '../screens/SettingsScreen';
import UserProfile from '../screens/UserProfile';

const navigationOptions = ({ navigation }) => {
  const { goBack } = navigation;
  const { params } = navigation.state;
  const title = params ? params.title : null;
  return {
    title,
  };
};

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

const UserStack = createStackNavigator({
  Users: Users,
  UserProfile: UserProfile,
});

const PreferencesStack = createStackNavigator({
  Preferences,
  Preference,
}, {
  navigationOptions,
});

const LinksStack = createDrawerNavigator(
  {
    'All Users': UserStack,
    Preferences: PreferencesStack,
  },
  {
    drawerWidth: 300,
    drawerPosition: 'left',
    drawerBackgroundColor: 'black',
    contentOptions: {
      activeTintColor: 'yellow',
      inactiveTintColor: 'white'
    },
  },
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-contacts${focused ? '' : '-outline'}` : 'md-contacts'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  ScreenOne: ScreenOne,
  ScreenTwo: ScreenTwo,
}, {
  // navigationOptions: {
  //   title: 'Something',
  // },
  navigationOptions,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});
