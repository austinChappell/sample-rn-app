import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import {
  Button,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Body,
} from 'native-base';

import styles from '../assets/styles';

import mainAPI from '../api/main';
import urls from '../api/urls';
import Loader from '../components/Loader';

const { get } = mainAPI;
const { getUsers } = urls;

class Users extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Users',
    headerLeft: (
      <Icon
        name="menu"
        onPress={() => navigation.openDrawer()}
      />
    ),
  });

  state = {
    dataLoaded: false,
    users: []
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    get(getUsers(), this.setUsers);
  };

  setUsers = (data) => {
    const users = data.results;
    this.setState({ dataLoaded: true, users });
  };

  render() {
    const { dataLoaded, users } = this.state;

    const { navigate } = this.props.navigation;

    if (!dataLoaded) {
      return <Loader />;
    }

    return (
      <View style={styles.paddingTop}>
        <DeckSwiper
          dataSource={users}
          renderItem={(user) => {
            const { name } = user;
            const fullName = `${name.first} ${name.last}`.toUpperCase();

            return (
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={{ uri: user.picture.thumbnail }} />
                    <Body>
                      <Text>{fullName}</Text>
                      <Text note>{user.email}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image
                    style={{ height: 300, flex: 1 }}
                    source={{ uri: user.picture.large }}
                  />
                </CardItem>
                <CardItem>
                  <Button
                    style={styles.button}
                    onPress={() =>
                      navigate("UserProfile", {
                        title: fullName,
                        user
                      })
                    }
                    block
                    success
                  >
                    <Text>View Profile</Text>
                  </Button>
                </CardItem>
              </Card>
            );
          }}
        />
      </View>
    );
  }
}

export default Users;
