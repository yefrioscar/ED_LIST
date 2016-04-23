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
        list.tasks[i].name = listItems[i].querySelector('span').textContent;
        console.table(list.tasks);
      })
    }
}

function completeTask(list = inbox) {
    var listItems = taskList.children;
    for(let i = 0; i<listItems.length; i++){
      listItems[i].querySelector('input').addEventListener('change', () => {
        if (listItems[i].querySelector('input').checked) {
          list.tasks[i].isComplete = true;
          listItems[i].classList.add('complete');
        }
        console.table(list.tasks);
      })
    }
}



newTaskEl.addEventListener('keyup', addTask);
