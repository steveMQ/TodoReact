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
      return 'Steve ' + param;
    }
    return (
      <View style={styles.container}>

        <WelcomeView message={name} />


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

});

AppRegistry.registerComponent('TodoReact', () => TodoReact);
