let taskList = document.getElementById("taskList");

window.onload = function () {
    let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(task => addTaskToList(task.text, task.completed));
};

function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    addTaskToList(taskText, false);
    saveTasks();
    input.value = "";
}

function addTaskToList(text, completed) {
    let li = document.createElement("li");
    li.textContent = text;

    if (completed) {
        li.classList.add("completed");
    }

    li.onclick = function () {
        li.classList.toggle("completed");
        saveTasks();
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";

    deleteBtn.onclick = function (event) {
        event.stopPropagation();
        li.remove();
        saveTasks();
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push({
            text: li.firstChild.textContent,
            completed: li.classList.contains("completed")
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}