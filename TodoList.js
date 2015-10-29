'use strict';

var React = require('react-native');
var DataService = require('./DataService');
var EditTodoItem = require('./EditTodoItem');

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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 183, 255, 0.0)',
    padding:10,
    paddingTop:20,
    paddingBottom: 20

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
    fontFamily:'SFNS Display',

  },

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


  renderRow: function(item) {
    return(
      <TouchableHighlight
        underlayColor='rgba(0,0,0,0.3)'
        onPress={() => this.showEditTodoItem(item)}>
        <View>
            <View style={styles.container}>
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
