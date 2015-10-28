'use strict';

var React = require('react-native');
var Button = require('react-native-button');
var DataService = require('./DataService');


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
  getInitialState: function () {
    return {text: ''};
  },
  render: function() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={this.state.text}
          onChangeText={(value) => this.setState({text: value})}
         />
        <Button
          style={styles.button}
          onPress={this._buttonWasPressed}>
            Add Task
        </Button>
      </View>
    );
  },
  _buttonWasPressed: function() {
    console.log('I pressed the add task button!', this.state.text);
    DataService.addTodo(this.state.text);
    this.props.navigator.pop();
  },

});

module.exports = AddTodoItem;
