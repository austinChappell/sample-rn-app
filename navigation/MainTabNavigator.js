import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  createDrawerNavigator,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import DrawerOne from '../screens/DrawerOne';
import HomeScreen from '../screens/HomeScreen';
import DrawerTwo from '../screens/DrawerTwo';
import ScreenOne from '../screens/ScreenOne';
import ScreenTwo from '../screens/ScreenTwo';
import SettingsScreen from '../screens/SettingsScreen';

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
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LinksStack = createDrawerNavigator({
  DrawerOne: DrawerOne,
  DrawerTwo: DrawerTwo,
}, {
  drawerWidth: 300,
  drawerPosition: 'left',
  drawerBackgroundColor: 'black',
  contentOptions: {
    activeTintColor: 'yellow',
    inactiveTintColor: 'white',
  },
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
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
