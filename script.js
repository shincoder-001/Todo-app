function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.textContent = task;
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";

    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(deleteBtn);

    let list = document.getElementById("taskList");
    list.appendChild(li);

    input.value = "";
}