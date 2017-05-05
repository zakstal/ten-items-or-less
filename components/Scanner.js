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
import Camera from 'react-native-camera';

class Scanner extends Component {

  componentWillMount() {
    this.state = {
        showCamera: true,
        cameraType: Camera.constants.Type.back
    }
  }

  render() {
    return (
        <Camera
            ref={(cam) => {
              this.camera = cam;
            }}
            style={styles.camera}
            onBarCodeRead={this.props.onBarCodeRead}
            type={this.state.cameraType}>
            {this.props.children}
          </Camera>
    );
  }
}

const styles = StyleSheet.create({
    camera: {
    flex: 1,
    height: '10%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Scanner;