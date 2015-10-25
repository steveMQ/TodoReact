'use strict';

var React = require('react-native');
var AddTodoItem = require('./AddTodoItem')
var DataService = require('./DataService');

var {
  StyleSheet,
  Text,
  ListView,
  View,
  TouchableHighlight
} = React;

var FAKE_DATA = [
  {title: 'hello'},
  {title: 'foobar'},
  {title: 'last'},
  {title: 'last'}
];

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
      dataSource: ds.cloneWithRows(FAKE_DATA)
    };
  },

  renderRow: function(theData) {
    return(
      <TouchableHighlight underlayColor='#dddddd'>
        <View>
            <View style={styles.container}>
              <Text style={styles.text}>{theData.title}</Text>
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
