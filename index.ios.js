import React from 'react'
import Moment from 'moment'
// import Checkin from './components/Checkin';
import ScannerPage from './pages/ScannerPage';
import CheckoutPage from './pages/CheckoutPage';
import ItemsList from './pages/ItemsList';
import {
    StackNavigator,
} from 'react-navigation';

import {
  AppRegistry,
} from 'react-native';

export default App = StackNavigator({
                               Main: {screen: ScannerPage},
                               Checkout: {screen: CheckoutPage},
                               ItemsList: {screen: ItemsList}
                           });

AppRegistry.registerComponent('ReactProject', () => App);