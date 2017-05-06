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
import Camera from 'react-native-camera';
import Item from '../components/Item';
import CheckoutFooter from '../components/CheckoutFooter';
import Scanner from '../components/Scanner';

var inventory = {
  '0099482414221': {
    name: 'Black beans',
    brand: '360',
    price: 1.19,
    imgSrc: 'https://d2lnr5mha7bycj.cloudfront.net/product-image/file/primary_72efbac3-1c5f-49af-aec3-243cd1994a90.jpg'
  },
  '0073124008955': {
    name: 'Smart Bagel',
    brand: 'Toufayan',
    price: 2.99,
    imgSrc: 'http://www.theluxuryspot.com/wp-content/uploads/2014/12/smart_bagel.png'
  },
  1235: {
    name: '',
    price: 0,
    imgSrc: ''
  }
}


class ReactProject extends Component {

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
        <View style={styles.cameraContainer}>
          <Scanner
            onBarCodeRead={(e) => this.onBarCodeRead(e)}
          >
            <View style={styles.bracketLeft}></View>
            <View style={styles.bracketRight}></View>
          </Scanner>
        </View>
        <ScrollView style={styles.items}>
         {  this.state.items && this.state.items.length 
            ? this.state.items.map((item, i) =>  <Item key={item.name + i}{...item}/>)
            : <Text style={styles.noItems}>No items scanned</Text>
         }
        </ScrollView>
        <CheckoutFooter total={this.state.total}/>
      </View>
    );
  }

  onBarCodeRead(e) {
    let item = inventory[e.data];
    if (!this.state.canScan) {
      return;
    }

    if (item) {
      let items = this.state.items;
      let total = this.state.total + item.price;
      items.push(item)
      this.setState({items, total})
    } else {
      AlertIOS.alert(
          "Barcode Found! but item does not exist in inventory. Please contanct store manager",
          "Type: " + e.type + "\nData: " + e.data
      );
    }

    this.setState({canScan: false});
    const timeout = setTimeout(() => {
        this.setState({canScan: true});
    }, 2000);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
    bracketLeft: {
    borderColor: '#555555',
    borderTopWidth: 1,  
    borderLeftWidth: 1,  
    borderBottomWidth: 1,  
    borderRightWidth: 0,  
    height: '60%',
    width: 30,
  },
  bracketRight: {
    borderColor: '#555555',
    borderTopWidth: 1,  
    borderLeftWidth: 0,  
    borderBottomWidth: 1,  
    borderRightWidth: 1, 
    height: '60%',
    width: 30,
  },
  items: {
    height: 500,
  },
  cameraContainer: {
    height: 170,
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  },
  noItems: {
    padding: 20,
    textAlign: 'center',
    // font-family: "LeagueGothic","Lucida Sans","Lucida Grande",sans-serif;
  }
});

// AppRegistry.registerComponent('ReactProject', () => ReactProject);

export default ReactProject;