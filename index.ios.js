/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var WelcomeView = require('./WelcomeView');
var TodoList = require('./TodoList');
var AddTodoItem = require('./AddTodoItem');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} = React;

var TodoReact = React.createClass({

  showAddTodoItem: function() {
    this.refs.nav.push({
      title: 'Add new task',
      component: AddTodoItem,
      passProps: {
        origin: 'add'
      }
    });
  },

  render: function() {
    var name = function (param) {
      return 'Steve ' + param;
    }
    return (
      <NavigatorIOS
        style={styles.container}
        ref='nav'
        initialRoute={{
          title: 'Task List!',
          component: TodoList,
          rightButtonTitle: '+',
          onRightButtonPress: () => {
            this.showAddTodoItem();
          },
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
