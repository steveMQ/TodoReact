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
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 3,
    marginLeft:20,
    marginRight:20,
    paddingLeft:20,
    paddingRight:20,
    textAlign:'center',
    color: '#fff',
    fontFamily:'SFNS Display',
    fontSize: 18,
  },
  container: {
    flex: 1,
    paddingTop:150,
    alignItems: 'center',
    backgroundColor: '#5a6773'

  },
  button: {
    marginTop:40,
    color: '#fff',
    flex: 2,
    fontFamily:'SFNS Display',
    fontSize: 20,
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
    DataService.addTodo(this.state.text);
    this.props.navigator.pop();
  },

});

module.exports = AddTodoItem;
