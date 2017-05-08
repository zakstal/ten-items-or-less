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
import fetch from 'superagent';
import Item from '../components/Item';
import CheckoutFooter from '../components/CheckoutFooter';
import Scanner from '../components/Scanner';
import Items from '../models/Items';
import Total from '../models/Total';

const items = new Items();
const total = new Total();

class ReactProject extends Component {
    static navigationOptions = {
        title: 'Scanner',
    };

  componentWillMount() {
    this.canScan = true;
    this.state = {
      canScan: true,
      items,
      total: total.amount(),
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
            ? this.state.items.map((item, i) =>  
              <Item 
                key={item.name + i}
                onPressDelete={() => {
                  items.remove(item.id)
                  total.subtract(item.price)
                  this.setState({items, total: total.amount()})
                  }
                }
                {...item}
                
              />).reverse()
            : <Text style={styles.noItems}>No items scanned</Text>
         }
        </ScrollView>
        <CheckoutFooter 
            total={this.state.total}
            onSubmit={() => this.navigateTOCheckout()}
        />
      </View>
    );
  }

  getInfo(id) {
    return fetch.get(`https://mf1psu4xh1.execute-api.us-east-1.amazonaws.com/dev/users/get-url?code=${id}`)
    .catch(error => {
      console.error('error', error)
      AlertIOS.alert('error ' + error)
    })
  }

  onBarCodeRead(e) {

    // let item = inventory[e.data];
    if (!this.state.canScan || !this.canScan) {
      return;
    }

    this.canScan = false
    this.getInfo(e.data).then(res => {
      const { body } = res;
      let item = null;
      if (body) {
        item = body;
        items.add(item)
             .then(() => {
                item = items.last();
                total.add(item.price)
                this.setState({total: total.amount()})
                // AlertIOS.alert(`Scanned! ${item.name}`)
             })
              .catch(err => {
                AlertIOS.alert(
                    "Barcode Found! but item does not exist in inventory. Please contanct store manager",
                    "error " + err,
                    "Type: " + e.type + "\nData: " + e.data
                );
              })
      } else {
        AlertIOS.alert("No Item found");
      }

      this.setState({canScan: false});
    
      const timeout = setTimeout(() => {
          this.setState({canScan: true});
          this.canScan = true
      }, 2000);

    })
  }

    navigateTOCheckout() {
        const { navigate } = this.props.navigation;
        navigate('Checkout');
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