import createElement from "./createElement";

const projectDialog = document.querySelector("#project-dialog");
const projectNav = document.querySelector("#project-nav");
const taskDialog = document.querySelector("#task-dialog");
const selectProject = document.querySelector("#select-project");
let deleteProjectBtns;
let projectContainers;
let deleteTaskBtns;
let taskContainers;

export function eventListeners(addProjectFn, deleteProjectFn, switchProjectFn, getProjectFn, addTaskFn, deleteTaskFn, arr){

    document.querySelector("#show-project-dialog").addEventListener("click", function() {
        projectDialog.showModal();
    })

    document.querySelector("#project-cancel-btn").addEventListener("click", function(event) {
        event.preventDefault();
        projectDialog.close();
    })

    document.querySelector("#show-task-dialog").addEventListener("click", function() {
        taskDialog.showModal();
        renderProjectOptions(arr);
    })

    document.querySelector("#task-cancel-btn").addEventListener("click", function(event) {
        event.preventDefault();
        taskDialog.close();
    })

    document.querySelector("#add-project-btn").addEventListener("click", function(event) {
        event.preventDefault();
        const title = document.querySelector("#project-title");
        const description = document.querySelector("#project-description");
        addProjectFn(title.value, description.value);
        clearInputs( [title, description] );
        renderProjectNav(arr, updateProjectElements);
        projectDialog.close();
        renderTasks(arr[arr.length - 1], updateTaskElements);
    })

    document.querySelector("#add-task-btn").addEventListener("click", function(event) {
        event.preventDefault();
        const title = document.querySelector("#task-title");
        const description = document.querySelector("#task-description");
        const dueDate = document.querySelector("#task-due-date");
        const priority = document.querySelector("input[name='priority']:checked");
        const note = document.querySelector("#task-note");
        const index = +selectProject.selectedIndex;
        console.log(index);
        addTaskFn(arr[index].tasks, title.value, description.value, dueDate.value, priority.value, note.value);
        renderTasks(arr[index], updateTaskElements);
        clearInputs( [title, description, dueDate, note] );
        document.querySelector("#medium").checked = "true";
        taskDialog.close();
        console.log(arr);
    })

    renderProjectNav(arr, updateProjectElements);
    renderTasks(arr[0], updateTaskElements);

    function deleteProject(event) {
        const index = +event.target.dataset.deleteProject;
        deleteProjectFn(index);
        renderProjectNav(arr, updateProjectElements);
        renderTasks(arr[arr.length - 1], updateTaskElements);
    }

    function updateProjectElements() {
        deleteProjectBtns = Array.from(document.querySelectorAll(".project-delete-btn"));
        projectContainers = Array.from(document.querySelectorAll(".project-container"));
        deleteProjectBtns.forEach(item => item.addEventListener("click", deleteProject));
    }

    function deleteTask(event) {
        const projectIndex = +event.target.dataset.taskDeleteProject;
        const index = +event.target.dataset.taskDelete;
        deleteTaskFn(projectIndex, index);
        renderTasks(arr[projectIndex], updateTaskElements);
    }

    function updateTaskElements() {
        deleteTaskBtns = Array.from(document.querySelectorAll(".task-delete-btn"));
        taskContainers = Array.from(document.querySelectorAll(".task-cards"));
        deleteTaskBtns.forEach(item => item.addEventListener("click", deleteTask));
    }
}

function renderProjectNav(arr, fn) {
    projectNav.textContent = ""
    for (let i = 0; i < arr.length; i++) {
        const div = createElement("div", "class", "project-container", "");
        div.setAttribute("data-project-div", `${i}`);
        const title = createElement("h4", "class", "project-title", arr[i].title);
        const deleteBtn = createElement("button", "data-delete-project", arr[i].id, "🗑");
        deleteBtn.setAttribute("class", "project-delete-btn");
        div.appendChild(title);
        div.appendChild(deleteBtn);
        projectNav.appendChild(div);
    }
    fn();
    console.log(arr);
}

function renderTasks(obj, fn) {
    const projectHeader = document.querySelector("#project-header-display");
    const projectDecription = document.querySelector("#project-description-display");
    const taskCardsContainer = document.querySelector("#task-cards-container");

    projectHeader.textContent = "";
    projectDecription.textContent = "";
    taskCardsContainer.textContent = "";

    if(obj === undefined) {
        projectHeader.textContent = "No Projects";
        projectDecription.textContent = "Make a new project to start adding tasks";
        return;
    }

    projectHeader.textContent = obj.title;
    projectDecription.textContent = obj.description;

    const taskArr = obj.tasks;

    for(let i = 0; i < taskArr.length; i++) {
        const div =  createElement("div", "class", "task-cards", "");
        const btnsDiv = createElement("div", "class", "task-btn-container", "");
        const deleteBtn = createElement("button", "data-task-delete", taskArr[i].id, "X");
        deleteBtn.setAttribute("data-task-delete-project", taskArr[i].projectId);
        deleteBtn.setAttribute("class", "task-delete-btn");
        btnsDiv.appendChild(deleteBtn);
        div.appendChild(createElement("h4", "class", "task-title", "Title: " + taskArr[i].title));
        div.appendChild(createElement("p", "class", "task-description","Description: " + taskArr[i].description));
        div.appendChild(createElement("p", "class", "task-due-date", "Due Date: " + taskArr[i].dueDate));
        div.appendChild(createElement("p", "class", "task-priority", "Priority: " + taskArr[i].priority));
        div.appendChild(createElement("hp", "class", "task-note", "Note: " + taskArr[i].note));
        div.appendChild(btnsDiv);
        taskCardsContainer.appendChild(div);
    }
    fn();
    console.log(obj);
}

function renderProjectOptions(arr) {
    selectProject.textContent = "";
    for (let i = 0; i < arr.length; i++) {
        const option = createElement("option", "value", i, arr[i].title);
        selectProject.appendChild(option);
    }
}

function clearInputs(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].value = "";
    }
}
