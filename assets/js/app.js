console.log("JS loaded");

const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const addButton = document.querySelector("#addTaskBtn");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks(){
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => removeTask(index);

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask(){
    const value = taskInput.value.trim();
    if (!value) return;

    tasks.push(value);
    taskInput.value = "";
    renderTasks();
}

function removeTask(index){
    tasks.splice(index, 1);
    renderTasks();
}

addButton.addEventListener("click", addTask);
renderTasks();
