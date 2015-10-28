//example of an Observer Pattern
var EventEmitter = require('event-emitter');

var DataService = {};

var TodoItems = [];

DataService.addTodo = function(item) {
  TodoItems.push({task: item});
  this.emit('changed');
};

DataService.removeTodo = function(item) {
  // TodoItems.splice(index: 0);
};

DataService.editTodo = function(item) {
  //edit code goes here
};

DataService.returnTodoItems = function() {
  console.log('the todo items are...', TodoItems);
  return TodoItems;
};

DataService = EventEmitter(DataService);

//the public api
module.exports = DataService;
