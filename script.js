var tasks = [];

function addTask() {
  var taskInput = document.getElementById("taskInput");
  var task = taskInput.value;

  if (task === "") {
    alert("Please enter a task!");
    return;
  }

  tasks.push({ text: task, completed: false });
  renderTasks();
  taskInput.value = ""; // Clear input field
}

function renderTasks() {
  var taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  for (var i = 0; i < tasks.length; i++) {
    var li = document.createElement("li");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tasks[i].completed;
    checkbox.setAttribute("onclick", "toggleTask(" + i + ")");
    li.appendChild(checkbox);

    var taskText = document.createElement("span");
    taskText.textContent = tasks[i].text;
    if (tasks[i].completed) {
      taskText.classList.add("completed");
    }
    li.appendChild(taskText);

    var editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.className = "edit-button";
    editButton.setAttribute("onclick", "editTask(" + i + ")");
    li.appendChild(editButton);

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.setAttribute("onclick", "deleteTask(" + i + ")");
    li.appendChild(deleteButton);

    taskList.appendChild(li);
  }
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function editTask(index) {
  var newTask = prompt("Edit task:", tasks[index].text);
  
  if (newTask !== null) {
    tasks[index].text = newTask;
    renderTasks();
  }
}

function deleteTask(index) {
  var confirmDelete = confirm("Are you sure you want to delete this task?");
  
  if (confirmDelete) {
    tasks.splice(index, 1);
    renderTasks();
  }
}

renderTasks();
