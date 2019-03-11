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
  Text,
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import * as src from './src';

const tests = Object.keys(src).map(key => ({ key }));

class TestItem extends React.PureComponent {
  render() {
    const { test } = this.props;
    const Test = src[test];
    return (
      <View style={styles.flatTest} testID={test + 'View'}>
        <Test width="100%" height="100%" />
      </View>
    );
  }
}

class ListItem extends React.PureComponent {
  onPress = () => {
    const { onPress, test } = this.props;
    onPress(test);
  };
  render() {
    const { test } = this.props;
    return (
      <TouchableOpacity testID={test} onPress={this.onPress}>
        <Text>{test}</Text>
      </TouchableOpacity>
    );
  }
}

const ALL = {};

const toggleAll = ({ test }) => ({ test: test === null ? ALL : null });

export default class App extends Component {
  state = {
    test: null,
  };
  onAll = () => this.setState(toggleAll);
  onTest = test => this.setState({ test });
  renderTest = ({ item }) => <TestItem test={item.key} />;
  renderItem = ({ item }) => <ListItem test={item.key} onPress={this.onTest} />;
  render() {
    const { test } = this.state;
    const Test = test && src[test];
    return (
      <View style={styles.container} testID="container">
        <TouchableOpacity style={styles.button} onPress={this.onAll}>
          <Text>{test === null ? 'All' : 'Back'}</Text>
        </TouchableOpacity>
        {Test ? (
          <View style={styles.test} testID={test + 'View'}>
            <Test width="100%" height="100%" />
          </View>
        ) : (
          <FlatList
            data={tests}
            extraData={test}
            renderItem={test === ALL ? this.renderTest : this.renderItem}
          />
        )}
      </View>
    );
  }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 40,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  test: {
    padding: 5,
    width: '98%',
    flex: 1,
    borderWidth: 1,
  },
  flatTest: {
    padding: 5,
    borderWidth: 1,
    marginBottom: 5,
    width: width * 0.98,
    height: width * 0.98,
  },
  button: {
    width: 50,
    height: 40,
    borderWidth: 1,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
