/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  Svg,
  Rect
} from 'react-native-svg';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} testID="welcome">
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Svg width="100" height="100" viewBox="0 0 100 100">
          <Rect fill="black" width="100" height="100" />
        </Svg>
        <TouchableOpacity
          testID="hello_button"
          onPress={() => this.setState({ hello: true })}
        >
          <Text style={styles.button}>Hello</Text>
        </TouchableOpacity>
        {this.state.hello ? <Text>Hello!!!</Text> : null}
        <TouchableOpacity
          testID="world_button"
          onPress={() => this.setState({ world: true })}
        >
          <Text style={styles.button}>World</Text>
        </TouchableOpacity>
        {this.state.world ? <Text>World!!!</Text> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
