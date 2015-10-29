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
    fontFamily:'SFNS Display',
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
    fontFamily:'SFNS Display',
    fontSize: 20,

  },
  rightButton: {
    padding:20,
    paddingLeft:40,
    color:'#fff',
    fontFamily:'SFNS Display',
    fontSize: 20,
  },
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
