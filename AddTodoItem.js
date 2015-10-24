'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  TextInput
} = React;

var styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  text: {
    color: 'blue'
  },
  container: {
    flex: 1
  }

});

var AddTodoItem = React.createClass({

  render: function() {
    return(
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
        />
      <Text style={styles.text}>Hello world!</Text>
      </View>
    );
  }

});

module.exports = AddTodoItem;
