var newTaskEl = document.getElementById('new-task');
var taskList = document.getElementById('task-list');
var inbox = new List('inbox');

function addTask(e, list = inbox) {
  e.preventDefault();
  if(e.which === 13) {
    var newTask = new Task(this.value);
    printTask(this.value);
    list.addTask(newTask);
    this.value = "";
    console.table(list.tasks);

  }
}

function editTask(list = inbox) {
    var listItems = taskList.children;
    for(let i = 0; i<listItems.length; i++){
      listItems[i].querySelector('span').addEventListener('blur', () => {
        list.tasks[i].edit(listItems[i].querySelector('span').textContent);
        console.table(list.tasks);
      })
    }
}

function completeTask(list = inbox) {
    var listItems = taskList.children;
    for(let i = 0; i<listItems.length; i++){
      listItems[i].querySelector('input').addEventListener('change', () => {
        if (listItems[i].querySelector('input').checked) {
          list.tasks[i].complete();
          listItems[i].classList.add('complete');
        }
        console.table(list.tasks);
      })
    }
}

function removeTask(list = inbox) {
    var listItems = taskList.children;
    for(let i = 0; i<listItems.length; i++){
      listItems[i].querySelector('a').addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          var _i = i;
          list.removeTask(_i);
          this.parentElement.remove();
          console.log(_i);
          console.table(list.tasks);
          completeTask();
      })
    }
}



newTaskEl.addEventListener('keyup', addTask);
