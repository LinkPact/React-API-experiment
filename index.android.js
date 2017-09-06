/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// import APITest from './App';
// AppRegistry.registerComponent('APIExample', () => APITest);

import StackNavigator from './App';

const Realm = require('realm');

//class <project-name> extends Component {
//  constructor(props) {
//    super(props);
//    this.state = { realm: null };
//  }
//
//  componentWillMount() {
//    Realm.open({
//      schema: [{name: 'Dog', properties: {name: 'string'}}]
//    }).then(realm => {
//      realm.write(() => {
//        realm.create('Dog', {name: 'Rex'});
//      });
//      this.setState({ realm });
//    });
//  }
//
//  render() {
//    const info = this.state.realm
//      ? 'Number of dogs in this Realm: ' + this.state.realm.objects('Dog').length
//      : 'Loading...';
//
//    return (
//      <View style={styles.container}>
//        <Text style={styles.welcome}>
//          {info}
//        </Text>
//      </View>
//    );
//  }
//}

AppRegistry.registerComponent('APIExample', () => StackNavigator);
