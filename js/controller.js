'use strict';

var newTaskEl = document.getElementById('new-task');
var taskList = document.getElementById('task-list');
var inbox = new List('inbox');

function addTask(e) {
  var list = arguments.length <= 1 || arguments[1] === undefined ? inbox : arguments[1];

  e.preventDefault();
  if (e.which === 13) {
    var newTask = new Task(this.value);
    printTask(this.value);
    list.addTask(newTask);
    this.value = "";
    console.table(list.tasks);
  }
}

function editTask() {
  var list = arguments.length <= 0 || arguments[0] === undefined ? inbox : arguments[0];

  var listItems = taskList.children;

  var _loop = function _loop(i) {
    listItems[i].querySelector('span').addEventListener('blur', function () {
      list.tasks[i].name = listItems[i].querySelector('span').textContent;
      console.table(list.tasks);
    });
  };

  for (var i = 0; i < listItems.length; i++) {
    _loop(i);
  }
}

function completeTask() {
  var list = arguments.length <= 0 || arguments[0] === undefined ? inbox : arguments[0];

  var listItems = taskList.children;

  var _loop2 = function _loop2(i) {
    listItems[i].querySelector('input').addEventListener('change', function () {
      if (listItems[i].querySelector('input').checked) {
        list.tasks[i].isComplete = true;
        listItems[i].classList.add('complete');
      }
      console.table(list.tasks);
    });
  };

  for (var i = 0; i < listItems.length; i++) {
    _loop2(i);
  }
}

newTaskEl.addEventListener('keyup', addTask);