'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text
} = React;

var WelcomeView = React.createClass({
  render: function() {
    console.log('MY PROPS', this.props);
    return (
      <Text style={styles.welcome}>
        Welcome to {this.props.message}!
      </Text>
    );
  }
});

var styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

module.exports = WelcomeView;
