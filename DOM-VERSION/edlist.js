var newtask = document.getElementById('new-task');
var tasklist = document.getElementById('task-list');

function addTask(e) {
  e.preventDefault();
  if (e.which === 13) {
    var newtaskEl = document.createElement('li');
    var newtask = document.createElement('span');
    var newtaskCheckbox = document.createElement('input');
    newtaskCheckbox.type = "checkbox";
    newtask.textContent = this.value;
    newtaskEl.appendChild(newtaskCheckbox);
    newtaskEl.appendChild(newtask);
    tasklist.appendChild(newtaskEl);
    this.value = "";
    completetask();
  }
}

function completetask() {
 for(var i=0 ; i<tasklist.children.length ; i++){
   var check = tasklist.children[i].querySelector('input');
   check.addEventListener('change', function(){
     if(this.checked) {
       this.parentElement.classList.add('completed');
     } else {
       this.parentElement.classList.remove();
     }
   });
 }
}


newtask.addEventListener('keyup', addTask);
