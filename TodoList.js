'use strict';

var React = require('react-native');
var DataService = require('./DataService');

var {
  StyleSheet,
  Text,
  ListView,
  View,
  TouchableHighlight
} = React;

var styles = StyleSheet.create({

  offset: {
    height: 100,
    backgroundColor: 'lime'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding:10,

  },
  separator: {
    height: 1,
    backgroundColor: 'slategray'
  },
  listView: {
    backgroundColor: '#F5FCFF'
  },
  text: {
    color: '#000'
  },

});

var TodoList = React.createClass({

  getInitialState: function () {
    var ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
    return {
      dataSource: ds
    };
  },

  refreshListView: function() {
    var todoData = DataService.returnTodoItems();
    this.state.dataSource = this.state.dataSource.cloneWithRows(todoData);
    this.setState(this.state);
  },

  componentDidMount: function() {
    DataService.on('changed', this.refreshListView);
    this.refreshListView();
  },

  renderRow: function(item) {
    return(
      <TouchableHighlight underlayColor='#dddddd'>
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
