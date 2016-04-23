'use strict';

function printTask(name) {
  var taskLi = document.createElement('li');
  taskLi.classList.add('task-item');
  var taskCheckbox = document.createElement('input');
  taskCheckbox.type = "checkbox";
  var taskEl = document.createElement('span');
  taskEl.setAttribute('contenteditable', '');
  taskEl.textContent = name;
  var taskRemove = document.createElement('a');
  taskRemove.textContent = 'x';
  taskRemove.href = "";
  taskLi.appendChild(taskCheckbox);
  taskLi.appendChild(taskEl);
  taskLi.appendChild(taskRemove);
  taskList.appendChild(taskLi);
  editTask();
  completeTask();
  removeTask();
}