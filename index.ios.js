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

  showAddTodoItem() {
    this.props.navigator.push({
      title: 'Add New Task',
      component: AddTodoItem,
    });
  },

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
            this.showAddTodoItem;
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
