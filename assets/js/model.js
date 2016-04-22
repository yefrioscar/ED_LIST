
class Task {
    constructor(name){
      this.name = name;
      this.isComplete = false;
    }

    edit(newName){
      this.name = newName;
    }

    complete(){
      this.isComplete = true;
    }

    remove(){

    }
}

class List {
  constructor(name){
    this.name = name;
    this.tasks = [];
  }

  addTask(task){
    this.tasks.push(task);
  }
}
