document.getElementById("newTaskFormButton").addEventListener("submit", function() {
  
    console.log('Working!');
    event.preventDefault();
        newTaskVar.addTask();
        newTaskVar.render();
    });
   
    