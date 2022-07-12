createTaskHtml = (name, description, assignedTo, dueDate, status) => {
    const html = `
  <div class="card" style="width: 18rem";>
     <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${description}</p>
      <p class="card-text">
        <p class="card-text">
        <div class="dropdown">
            ${status}
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Done</a>
                <a class="dropdown-item" href="#">Stuck</a>
                <a class="dropdown-item" href="#">In progress</a>
            </div>
        </div>
     </p>
      </p>
      <p class="card-text">Assigned to: ${assignedTo}</p>
      <p class="card-text">Due to: ${dueDate}</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <a href="#" class="btn btn-success">Button</a>
    </div>
  </div>
`
return html;
// //testing
//   document.querySelector('#demo').innerHTML = html;

}
// createTaskHTML("pick up ", "go pick up something", "Cathy", "July 12, 2022", "to-do")

class TaskManager {
    constructor(currentId) {
        this.tasks = [];
        this.currentId = 0;
    }
    addTask(name, description, assignedTo, dueDate, status) {
        const task = {
            id: this.currentId++,
            name: document.querySelector("#name").value ,
            description: document.querySelector("#description").value,
            assignedTo: document.querySelector("#assignedTo").value,
            dueDate: document.querySelector("#dueDate").value,
            status: document.querySelector("#status").value
        };
            
            this.tasks.push(task);
            this.render();
            
        }
        render() {
          var tasksHtmlList = [];
          var tasksHtmlVar = tasksHtmlList;
          for(let i = 0; i < this.tasks.length; i++){
               var currentTask = this.tasks[i];
              const newDate = new Date(currentTask.dueDate);
              // due to time zones, date is ahead by one day
               const formattedDate = (newDate.getMonth() + 1) + '/' + newDate.getDate() + '/' + newDate.getFullYear();
              var taskHtml = createTaskHtml(currentTask.name, currentTask.description, currentTask.assignedTo, formattedDate, currentTask.status);
              tasksHtmlList.push(taskHtml);
              console.log(taskHtml);
              console.log(tasksHtmlList);
                for(let i = 0; i < tasksHtmlList.length; i++);{
              document.getElementById("taskList").innerHTML = tasksHtmlList;
                }
              }
            }
      }
    
        
        
        var newTaskVar = new TaskManager();
        


