'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  ListView,
  View
} = React;

var FAKE_DATA = [
  {title: 'hello', foo: 'bar'},
  {title: 'foobar'},
  {title: 'last'},
  {title: 'last'}
];

var TodoList = React.createClass({
  getInitialState: function () {
    var ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
    return {
      dataSource: ds.cloneWithRows(FAKE_DATA)
    };
  },

  renderRow: function(theData) {
    return <Text>{theData.title}</Text>
  },

  render: function() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      ></ListView>
    );
  }
});

var styles = StyleSheet.create({});

module.exports = TodoList;
