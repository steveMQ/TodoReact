'use strict';

var React = require('react-native');
var Button = require('react-native-button');

var {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} = React;

var styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft:20,
    marginRight:20,
    paddingLeft:20,
    paddingRight:20,
    textAlign:'center'
  },
  text: {
    marginTop: 50,
    color: 'black'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  button: {
    marginTop:50
  }

});

var AddTodoItem = React.createClass({

  render: function() {
    console.log('this is aactually happening');
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput} />
        <Button style={styles.button}>Add Task</Button>
      </View>
    );
  }

});

module.exports = AddTodoItem;
