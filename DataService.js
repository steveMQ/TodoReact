//example of an Observer Pattern
var EventEmitter = require('event-emitter');

var DataService = {};

var TodoItems = [{task: 'pidgeons'}];

DataService.addTodo = function(item) {
  TodoItems.push({task: item});
  this.emit('changed');
};

DataService.removeTodo = function(item) {
  for (var i = 0; i < TodoItems.length; i++) {
    if (TodoItems[i] == item) {
      TodoItems.splice(i, 1);
      console.log('we found a match!');
    }
    else {
      console.log('we did not find a match');
    }
  }
  this.emit('changed');
};

DataService.editTodo = function(item) {

};

DataService.returnTodoItems = function() {
  console.log('the todo items are...', TodoItems);
  return TodoItems;
};

DataService = EventEmitter(DataService);

//the public api
module.exports = DataService;
