//example of an Observer Pattern
var EventEmitter = require('event-emitter');

var DataService = {};

var TodoItems = [
  {task: 'Learn React-Native'},
  {task: 'Play w/ Buddy. Good kitty.'},
  {task: 'KILL THE WOODPECKER'},
  {task: 'Buy a 2013 Mazda Mx-5'},

];

function removeOrUpdate() {

}

DataService.addTodo = function(item) {
  var newItem = {task: item}
  TodoItems.push(newItem);
  console.log('added', newItem);
  this.emit('changed');
};

DataService.removeTodo = function(item) {
  for (var i = 0; i < TodoItems.length; i++) {
    if (TodoItems[i] == item) {
      console.log('removed', item);
      TodoItems.splice(i, 1);
      this.emit('changed');
      return;
    }
  }
};

DataService.editTodo = function(item, newText) {
  var newItem = {task: newText};
  for (var i = 0; i < TodoItems.length; i++) {
    if (TodoItems[i] == item) {
      console.log('removed', item);
      TodoItems.splice(i, 1, newItem);
      console.log('added', newItem);
      this.emit('changed');
      return;
    }
  }
};

DataService.returnTodoItems = function() {
  // console.log('the todo items are...', TodoItems);
  return TodoItems;
};

DataService = EventEmitter(DataService);

//the public api
module.exports = DataService;
