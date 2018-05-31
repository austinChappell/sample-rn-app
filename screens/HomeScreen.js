import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Home Screen</Text>
      </View>
    );

    // return (
    //   <View style={styles.fullContainer}>
    //     <Text style={styles.header}>Home Screen</Text>
    //   </View>
    // );

    // return (
    //   <View style={[styles.full, styles.container]}>
    //     <Text style={styles.header}>Home Screen</Text>
    //   </View>
    // );

    // return (
    //   <View style={styles.spreadContainer}>  
    //     <Text style={styles.header}>Home Screen</Text>
    //   </View>
    // );

    // return (
    //   <View style={[StyleSheet.absoluteFill, styles.container]}>
    //     <Text style={styles.header}>Home Screen</Text>
    //   </View>
    // );

  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#425928',
    justifyContent: 'center',
  },
  full: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  fullContainer: {
    backgroundColor: '#425928',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  spreadContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#425928',
    justifyContent: 'center',
  },
  header: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
  }
});
