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
  Image
} from 'react-native';

class Item extends Component {
  render() {
    const { imgSrc, name, price } = this.props;
    return (
      <View style={styles.item}>
        <Image style={styles.img} source={{uri: imgSrc}}/>
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>${price}</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    // border: 1px solid #eee,   
    borderColor: '#eeeeee',
    borderWidth: 1,   
    height: 100, 
    backgroundColor: '#fff',
    marginTop: 20,
    flexDirection: 'row',
    padding: 10,
    shadowColor: '#1B1F23',
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 6,
    shadowOpacity: 0.10,
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  price: {
    color: '#81C22D',
    marginTop: 6,
    marginLeft: 20,
    fontSize: 40,
    // font-family: "LeagueGothic","Lucida Sans","Lucida Grande",sans-serif,
  },
  name: {
      marginTop: 3,
      marginLeft: 20,
      fontSize: 15,
      // font-family: 'Lucida Sans','Lucida Grande',sans-serif,
  },
  img: {
    width: 80,
    height: 80
    // border: 1px solid #eee;    
  }
});

// AppRegistry.registerComponent('Item', () => Item);
export default Item;