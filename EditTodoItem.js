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
    marginBottom:50,
    paddingLeft:20,
    paddingRight:20,
    textAlign:'center',
    color: '#fff',
    fontSize: 18,
  },
  container: {
    flex: 1,
    paddingTop:150,
    alignItems: 'center',
    backgroundColor: '#5a6773'
  },
  buttonHolder: {
    alignItems:'center',
    flexDirection:'row',
    flex:0
  },
  leftButton: {
    padding:20,
    paddingRight:40,
    color: '#fff',
    fontSize: 20,
  },
  rightButton: {
    padding:20,
    paddingLeft:40,
    color:'#fff',
    fontSize: 20,
  },
});

var EditTodoItem = React.createClass({
  getInitialState: function () {
    var currentItem = this.props.route.passProps.theItem;
    return Object.assign({}, currentItem);
  },
  render: function() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={this.state.task}
          onChangeText={(value) => {
            this.state.task = value
            this.setState(this.state)
          }}
         />
       <View style={styles.buttonHolder}>
         <Button
             style={styles.leftButton}
             onPress={this._buttonWasPressed}>
               Save Task
           </Button>
           <Button
             style={styles.rightButton}
             onPress={this.removeButtonPressed}>
               Remove
          </Button>
       </View>
      </View>
    );
  },
  _buttonWasPressed: function() {
    var currentItem = this.props.route.passProps.theItem;
    DataService.editTodo(currentItem, this.state);
    this.props.navigator.pop();
  },
  removeButtonPressed: function() {
    var currentItem = this.props.route.passProps.theItem;
    DataService.removeTodo(currentItem);
    this.props.navigator.pop();
  }

});

module.exports = EditTodoItem;
