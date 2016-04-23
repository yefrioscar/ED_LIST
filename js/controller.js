'use strict';

var newTaskEl = document.getElementById('new-task');
var taskList = document.getElementById('task-list');
var inbox = new List('inbox');

function addTask(e) {
  var list = arguments.length <= 1 || arguments[1] === undefined ? inbox : arguments[1];

  e.preventDefault();
  if (e.which === 13) {
    var newTask = new Task(this.value);
    this.value = "";
    list.addTask(newTask);
    console.table(list.tasks);
  }
}

newTaskEl.addEventListener('keyup', addTask);