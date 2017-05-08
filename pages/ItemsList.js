'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  AlertIOS,
  ScrollView,
  Image,
} from 'react-native';
import Item from '../components/Item';
import Items from '../models/Items';
import Total from '../models/Total';

const items = new Items();
const total = new Total();

class CheckoutPage extends Component {
    static navigationOptions = {
        title: 'Bought items',
    };

  componentWillMount() {
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.container}>
       <Text>items list</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
  },
});

export default CheckoutPage;