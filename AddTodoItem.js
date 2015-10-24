'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  Compoenent,
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
  }

});

var AddTodoItem = React.createClass({

  render() {
    return(
      <View>
        <TextInput
          style={styles.textInput}
        />
      <Text style={styles.text}>Hello world!</Text>
      </View>
    );
  }

});

module.exports = AddTodoItem;
