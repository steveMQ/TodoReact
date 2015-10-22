/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var WelcomeView = require('./WelcomeView');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;


var TodoReact = React.createClass({
  render: function() {
    var name = 'steve';
    return (
      <View style={styles.container}>
        <WelcomeView message={name}></WelcomeView>
        <WelcomeView message="Atticus"></WelcomeView>

        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TodoReact', () => TodoReact);
