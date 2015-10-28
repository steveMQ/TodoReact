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

var EditTodoItem = React.createClass({
  getInitialState: function () {
    var currentItem = this.props.route.passProps.theItem;
    return {text: currentItem.task};
  },
  componentDidMount: function() {
    console.log('from the previous view..', this.props.route.passProps.task);
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
            Save Task
        </Button>
        <Button
          style={styles.button}
          onPress={this.removeButtonPressed}>
            Remove
        </Button>
      </View>
    );
  },
  _buttonWasPressed: function() {
    var currentItem = this.props.route.passProps.theItem;
    var newText = this.state.text;
    DataService.editTodo(currentItem, newText);

    this.props.navigator.pop();
  },
  removeButtonPressed: function() {
    var currentItem = this.props.route.passProps.theItem;
    DataService.removeTodo(currentItem);
    this.props.navigator.pop();
  }

});

module.exports = EditTodoItem;
