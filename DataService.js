//example of an Observer Pattern
var EventEmitter = require('event-emitter');

var DataService = {};

var TodoItems = [
  {task: 'Learn React-Native', isCompleted:false},
  {task: 'Play w/ Buddy. Good kitty.', isCompleted:false},
  {task: 'KILL THE WOODPECKER', isCompleted:false},
  {task: 'Buy a 2013 Mazda Mx-5', isCompleted:false},

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
