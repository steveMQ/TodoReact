/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var WelcomeView = require('./WelcomeView');
var TodoList = require('./TodoList');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;


var TodoReact = React.createClass({
  render: function() {
    var name = function (param) {
      return 'steve ' + param;
    }
    return (
      <View style={styles.container}>
        <WelcomeView message={name}></WelcomeView>

        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>

        <TodoList></TodoList>
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
