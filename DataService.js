'use strict';

var React = require('react-native');

var {

} = React;

var DataService = ({

  var todoItems = [
    {title: 'item1'},
    {title: 'item2'},
    {title: 'item3'},
    {title: 'item4'}
  ];

  addTodo: function(data){
    todoItems.push(data);
  },

  removeTodo: function(){

  },

  editTodo: function(){

  }

});
