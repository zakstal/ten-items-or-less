import React from 'react'
import Moment from 'moment'
// import Checkin from './components/Checkin';
import ScannerPage from './pages/ScannerPage';
import {
    StackNavigator,
} from 'react-navigation';

import {
  AppRegistry,
} from 'react-native';

export default App = StackNavigator({
                               Main: {screen: ScannerPage},
                              //  Checkin: {screen: Checkin},
                           });

AppRegistry.registerComponent('ReactProject', () => App);