const MAX_HOURS = 100;

class Project {

  constructor(tasks)
  {
    this.tasks = tasks;
  }
  
  getTaskHours() {
    let result = 0;
    
    for(let i = 0; i < this.tasks.length; i++)
    {
      result = result+this.tasks[i].hours;
    }

    return result;
  }
  
  splitProject() {
    let runningTotal = 0;
    let newProject, newTasks;

    if(this.tasks[0].hours > MAX_HOURS)
    {
      return null;
    }
    
    for(let i = 0; i < this.tasks.length; i++)
    {
      runningTotal = runningTotal+this.tasks[i].hours;
      
      if(runningTotal > MAX_HOURS)
      {
        newTasks = this.tasks.slice(i);
        newProject = new Project(newTasks);
        this.tasks = this.tasks.slice(0, i);
        return newProject;
      }
    }
    
    return null;
  }
}

class Task {

  constructor(hours)
  {
    this.hours = hours;
  }
}
