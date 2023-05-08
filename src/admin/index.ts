class Task {
  static async dsiplayTasks() {
    const response = await fetch("http://localhost:3000/tasks");
    const tasks = await response.json();
    console.log(tasks);

    const taskContainer = document.getElementById("tasks") as HTMLElement;

    for (let task of tasks) {
      let taskContent = `
      <div id="task">
      <div>
        <h1>Task Name</h1>
        <p id="taskname">${task.taskName}</p>
      </div>
  
      <div>
        <h2>End Date</h2>
        <p id="enddate">${task.endDate}</p>
      </div>
  
      <div>
        <h3>Assigned to</h3>
        <p id="assignedto">${task.assignedTo}</p>
      </div>

      <button class="deletebutton" onclick=Task.deleteTask(${task.id})>
            <ion-icon name="trash"></ion-icon>
      </button>
    </div>
      `;

      taskContainer.innerHTML += taskContent;
    }
  }

  static async deleteTask(id: number) {
     await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
      headers:{
        'content-type':'application/json',

      }
    });
    console.log('task deleted');
  }

  static async addTask() {
    const taskNameInput = document.getElementById('projectname') as HTMLInputElement;
    const endDateInput = document.getElementById('enddate') as HTMLInputElement;
    const assignedToInput = document.getElementById('assignperson') as HTMLInputElement;

    const taskName = taskNameInput.value;
    const endDate = endDateInput.value;
    const assignedTo = assignedToInput.value;

    const newTask = {
      taskName: taskName,
      endDate: endDate,
      assignedTo: assignedTo,
    };

    try {
      const response = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });

      if (response.ok) {
      
        console.log('Task submitted successfully!');
      } else {
      
        console.error('Task submission failed!');
      }
    } catch (error) {
     
      console.error('Error:', error);
    }
  }

}
const submitButton = document.getElementById('submit');
submitButton?.addEventListener('click', Task.addTask);

Task.dsiplayTasks();
