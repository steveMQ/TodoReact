'use strict';

var React = require('react-native');
var DataService = require('./DataService');
var EditTodoItem = require('./EditTodoItem');
var Button = require('react-native-button');

var {
  StyleSheet,
  Text,
  ListView,
  View,
  TouchableHighlight
} = React;

var styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 183, 255, 0.0)',
    padding:10,
    paddingTop:20,
    paddingBottom: 20

  },
  completedContainer: {
    backgroundColor:'lime'
  },
  separator: {
    height: 2,
    backgroundColor: '#fff'
  },
  listView: {
    backgroundColor: '#5a6773'
  },
  text: {
    color: '#fff',
    fontSize: 18,
    marginLeft:20
  },
  completeButton: {
    fontSize:28,
    color: '#fff',
    paddingLeft:20,
    paddingRight:20
  }

});

var ds = new ListView.DataSource({
  rowHasChanged: (row1, row2) => row1.id !== row2.id
});

var TodoList = React.createClass({

  getInitialState: function () {
    return {
      dataSource: ds
    };
  },

  refreshListView: function() {
    var todoData = DataService.returnTodoItems();
    this.state.dataSource = ds.cloneWithRows(todoData);
    this.setState(this.state);
  },

  componentDidMount: function() {
    DataService.on('changed', this.refreshListView);
    this.refreshListView();
  },
  showEditTodoItem: function(item) {
    this.props.navigator.push({
      title: 'Edit task',
      component: EditTodoItem,
      passProps: {
        theItem: item,
        origin: 'edit'
      }
    });
  },

  completeButtonWasPressed: function(item) {

    var editItem = Object.assign({}, item);
    editItem.isCompleted = !editItem.isCompleted;
    DataService.editTodo(item, editItem);
  },

  renderRow: function(item) {
    var completedStyle = {};
    if (item.isCompleted) {
      completedStyle = styles.completedContainer;
    }
    return(
      <TouchableHighlight
        underlayColor='rgba(0,0,0,0.3)'
        onPress={() => this.showEditTodoItem(item)}>
        <View>
            <View style={[styles.container, completedStyle]}>
              <Button
                style={styles.completeButton}
                onPress={() => this.completeButtonWasPressed(item)}
              >X</Button>
              <Text style={styles.text}>{item.task}</Text>
            </View>
            <View style={styles.separator}></View>
        </View>
      </TouchableHighlight>
    );
  },

  render: function() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        style={styles.listView}
      />
    );
  }
});

module.exports = TodoList;
