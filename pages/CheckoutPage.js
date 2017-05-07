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
  ScrollView
} from 'react-native';
import Item from '../components/Item';

class CheckoutPage extends Component {
    static navigationOptions = {
        title: 'Checkout',
    };

  componentWillMount() {
    this.state = {
      canScan: true,
      items: [],
      total: 0,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Checkout view</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

// AppRegistry.registerComponent('ReactProject', () => ReactProject);

export default CheckoutPage;