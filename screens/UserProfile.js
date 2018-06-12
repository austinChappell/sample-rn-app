import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import moment from 'moment';

import styles from '../assets/styles';

const propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

class UserProfile extends Component {
  constructor(props) {
    super(props);
    const { getParam } = props.navigation;

    this.state = {
      user: getParam('user'),
    };
  }

  render() {
    const { user } = this.state;
    const { location } = user;

    return (
      <View style={[StyleSheet.absoluteFill, styles.container]}>

        <Text style={[styles.subTitle, styles.marginY]}>{user.email}</Text>
        <View
          style={styles.marginY}
        >
          <Avatar
            xlarge
            rounded
            source={{ uri: user.picture.large }}
            activeOpacity={0.7}
          />
        </View>

        {/* address */}
        <Text>
          {`${location.street} ${location.city}`}
        </Text>
        <Text>
          {`${location.state} ${location.postcode}`}
        </Text>

        {/* birthday */}
        <Text>
          {`DOB: ${moment(user.dob).format('MM-DD-YYYY')}`}
        </Text>

        {/* member since */}
        <Text>
          {`Member Since ${moment(user.registered).format('YYYY')}`}
        </Text>

      </View>
    );
  }
}

UserProfile.propTypes = propTypes;

export default UserProfile;
