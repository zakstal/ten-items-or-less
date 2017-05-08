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
        <Text>Please show to a representative</Text>
         <ScrollView style={styles.items}>
         {  items.map((item, i) =>  
              <Item 
                key={item.name + i}
                {...item}
                
              />)
         }
        </ScrollView>
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

export default CheckoutPage;