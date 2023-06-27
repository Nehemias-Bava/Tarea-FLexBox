var taskId = 1;

// Función para agregar una tarea
function addTask() {
    var taskInput = document.getElementById("task");

    var taskText = taskInput.value.trim();
    


    if (taskText === "") {
        alert("Por favor, ingrese una tarea válida.");
        return;
    }

    var listItem = document.createElement("li");
    listItem.setAttribute("id", "task-" + taskId);
    listItem.classList.add("task");
    listItem.classList.add("new");
    listItem.innerHTML = `<span class="task-text">${taskText}</span>
                            <select class="task-status">
                                <option value="new">Nueva</option>
                                <option value="in-progress">En Desarrollo</option>
                                <option value="completed">Completada</option>
                                <option value="cancelled">Cancelada</option>
                            </select>`;

    document.getElementById("list").appendChild(listItem);
    taskInput.value = "";
    taskId++;
}

// Función para cambiar el estado de una tarea
function changeStatus(event) {
    var taskItem = event.target.parentNode;
    console.log(taskItem);
    // var taskId = taskItem.getAttribute("id");
    
    var taskStatus = event.target.value;
    console.log("taskStatus:", taskStatus)

    taskItem.classList.remove("new", "in-progress", "completed", "cancelled");
    taskItem.classList.add(taskStatus);
}

// Agregar evento de clic al botón para agregar tarea
document.getElementById("add-task").addEventListener("click", addTask);

// Agregar evento de cambio al selector de estado para cambiar el estado de la tarea
document.getElementById("list").addEventListener("change", changeStatus);