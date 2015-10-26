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

var FAKE_DATA = [
  {title: 'hello'},
  {title: 'foobar'},
  {title: 'last'},
  {title: 'last'}
];

var TodoData = DataService.returnTodoItems();

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
      dataSource: ds.cloneWithRows(TodoData)
    };
  },

  renderRow: function(theData) {
    return(
      <TouchableHighlight underlayColor='#dddddd'>
        <View>
            <View style={styles.container}>
              <Text style={styles.text}>{TodoData}</Text>
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
