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
import Item from './components/Item';
import CheckoutFooter from './components/CheckoutFooter';

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
      showCamera: true,
      cameraType: Camera.constants.Type.back
  }
}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cameraContainer}>
          <Camera
            ref={(cam) => {
              this.camera = cam;
            }}
            style={styles.camera}
            onBarCodeRead={this._onBarCodeRead}
            type={this.state.cameraType}>
            <View style={styles.bracketLeft}></View>
            <View style={styles.bracketRight}></View>
          </Camera>
        </View>
        <ScrollView style={styles.items}>
          <Item {...inventory['0099482414221']}/>
          <Item {...inventory['0073124008955']}/>
          <Item {...inventory['0073124008955']}/>
          <Item {...inventory['0099482414221']}/>
          <Item {...inventory['0099482414221']}/>
          <Item {...inventory['0099482414221']}/>
        </ScrollView>
        <CheckoutFooter/>
      </View>
    );
  }

   _onBarCodeRead(e) {
        // this.setState({showCamera: false});
        AlertIOS.alert(
            "Barcode Found!",
            "Type: " + e.type + "\nData: " + e.data
        );
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
  camera: {
    flex: 1,
    height: '10%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

AppRegistry.registerComponent('ReactProject', () => ReactProject);