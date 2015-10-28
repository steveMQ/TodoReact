//example of an Observer Pattern
var EventEmitter = require('event-emitter');

var DataService = {};

var TodoItems = [
  {task: 'pidgeons'},
  {task: 'buddy is a cat'},
  {task: 'KILL THE WOODPECKER'},

];

function removeOrUpdate() {

}

DataService.addTodo = function(item) {
  TodoItems.push({task: item});
  this.emit('changed');
};

DataService.removeTodo = function(item) {
  for (var i = 0; i < TodoItems.length; i++) {
    if (TodoItems[i] == item) {
      console.log('removing', i, item);
      TodoItems.splice(i, 1);
      this.emit('changed');
      return;
      console.log('we found a match!');
    }
    else {
      console.log('we did not find a match');
    }
  }
};

DataService.editTodo = function(item, newText) {
  var newItem = {task: newText};
  for (var i = 0; i < TodoItems.length; i++) {
    if (TodoItems[i] == item) {
      console.log('removing', i, item);
      TodoItems.splice(i, 1, newItem);
      this.emit('changed');
      return;
      console.log('we found a match!');
    }
    else {
      console.log('we did not find a match');
    }
  }
};

DataService.returnTodoItems = function() {
  console.log('the todo items are...', TodoItems);
  return TodoItems;
};

DataService = EventEmitter(DataService);

//the public api
module.exports = DataService;
