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
  NavigatorIOS
} = React;


var TodoReact = React.createClass({
  render: function() {
    var name = function (param) {
      return 'Steve ' + param;
    }
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Task List!',
          component: TodoList,
          rightButtonTitle: '+',
          onRightButtonPress: () => {
            console.log('Doth hath worketh!');
          }
        }}
        />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex:1,
  }

});

AppRegistry.registerComponent('TodoReact', () => TodoReact);
