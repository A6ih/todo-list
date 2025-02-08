import createElement from "./createElement";

const projectDialog = document.querySelector("#project-dialog");
const projectNav = document.querySelector("#project-nav");
const taskDialog = document.querySelector("#task-dialog");
const selectProject = document.querySelector("#select-project");
let deleteProjectBtns;
let projectTitleClick;
let deleteTaskBtns;
let taskExpandBtn;

export function eventListeners(addProjectFn, deleteProjectFn, addTaskFn, deleteTaskFn, arr, editTaskFn){

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
        
        addTaskFn(arr[index].tasks, title.value, description.value, dueDate.value, priority.value, note.value);
        renderTasks(arr[index], updateTaskElements);
        clearInputs( [title, description, dueDate, note] );
        document.querySelector("#medium").checked = "true";
        taskDialog.close();

    })

    renderProjectNav(arr, updateProjectElements);
    renderTasks(arr[0], updateTaskElements);

    function deleteProject(event) {
        const index = +event.target.dataset.deleteProject;
        deleteProjectFn(index);
        renderProjectNav(arr, updateProjectElements);
        renderTasks(arr[arr.length - 1], updateTaskElements);
    }

    function switchProject(event) {
        const index = +event.target.dataset.projectTitle;
        renderTasks(arr[index], updateTaskElements);
    }

    function updateProjectElements() {
        deleteProjectBtns = Array.from(document.querySelectorAll(".project-delete-btn"));
        projectTitleClick = Array.from(document.querySelectorAll(".project-title"));
        deleteProjectBtns.forEach(item => item.addEventListener("click", deleteProject));
        projectTitleClick.forEach(item => item.addEventListener("click", switchProject));
    }

    function deleteTask(event) {
        const projectIndex = +event.target.dataset.taskDeleteProject;
        const index = +event.target.dataset.taskDelete;
        deleteTaskFn(projectIndex, index);
        renderTasks(arr[projectIndex], updateTaskElements);
    }

    function updateTaskElements() {
        deleteTaskBtns = Array.from(document.querySelectorAll(".task-delete-btn"));
        taskExpandBtn = Array.from(document.querySelectorAll(".task-expand-btn"));
        deleteTaskBtns.forEach(item => item.addEventListener("click", deleteTask));
        taskExpandBtn.forEach(item => item.addEventListener("click", taskToggleView));
    }

    function taskToggleView(event) {
        const index = +event.target.dataset.expandIndex; 
        if(event.target.textContent === "▼") {
            showTaskElements(index);
            event.target.textContent = "⏏"
            return;
        }
        else {
            hideTaskElements(index);
            event.target.textContent = "▼"
        }
    }
}

function renderProjectNav(arr, fn) {
    projectNav.textContent = ""
    for (let i = 0; i < arr.length; i++) {
        const div = createElement("div", "class", "project-container", "");
        const title = createElement("h4", "class", "project-title", arr[i].title);
        title.setAttribute("data-project-title", `${i}`);
        const deleteBtn = createElement("button", "data-delete-project", arr[i].id, "x");
        deleteBtn.setAttribute("class", "project-delete-btn");
        div.appendChild(deleteBtn);
        div.appendChild(title);
        projectNav.appendChild(div);
    }
    fn();
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

    if(taskArr.length === 0) {
        taskCardsContainer.textContent = "Add task to view";
        return;
    }

    for(let i = 0; i < taskArr.length; i++) {
        const div =  createElement("div", "class", "task-cards", "");
        const btnsDiv = createElement("div", "class", "task-btn-container", "");
        const deleteBtn = createElement("button", "data-task-delete", taskArr[i].id, "x");
        const editBtn = createElement("button", "data-task-edit", taskArr[i].id, "✎")
        deleteBtn.setAttribute("data-task-delete-project", taskArr[i].projectId);
        deleteBtn.setAttribute("class", "task-delete-btn");
        editBtn.setAttribute("data-task-edit-project", taskArr[i].projectId);
        editBtn.setAttribute("class", "task-edit-btn");
        btnsDiv.appendChild(deleteBtn);
        btnsDiv.appendChild(editBtn);
        const titleDiv = createElement("div", "class", "task-title-div", "");
        const expandBtn = createElement("button", "class", "task-expand-btn", "▼");
        expandBtn.setAttribute("data-expand-index", taskArr[i].id);
        titleDiv.appendChild(expandBtn);
        titleDiv.appendChild(createElement("h4", "class", "task-title", taskArr[i].title));
        div.appendChild(titleDiv);
        div.appendChild(createElement("p", "class", "task-description", taskArr[i].description));
        div.appendChild(createElement("p", "class", "task-due-date", "Due Date: " + taskArr[i].dueDate));
        div.appendChild(createElement("p", "class", "task-priority", "Priority: " + taskArr[i].priority));
        div.appendChild(createElement("hp", "class", "task-note", "Note: " + taskArr[i].note));
        div.appendChild(btnsDiv);
        taskCardsContainer.appendChild(div);
    }
    fn();
    hideAllTaskElements()
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

function hideAllTaskElements() {
    Array.from(document.querySelectorAll(".task-description")).
        forEach(item => item.style.display = "none");
    Array.from(document.querySelectorAll(".task-note")).
        forEach(item => item.style.display = "none");
    Array.from(document.querySelectorAll(".task-btn-container")).
        forEach(item => item.style.display = "none");
}

function showTaskElements(index) { 
    const description = document.querySelectorAll(".task-description");
    const notes = document.querySelectorAll(".task-note");
    const BtnContainer = document.querySelectorAll(".task-btn-container");
    description[index].style.display = "block";
    notes[index].style.display = "block";
    BtnContainer[index].style.display = "block";
}

function hideTaskElements(index) {
    const description = document.querySelectorAll(".task-description");
    const notes = document.querySelectorAll(".task-note");
    const BtnContainer = document.querySelectorAll(".task-btn-container");
    description[index].style.display = "none";
    notes[index].style.display = "none";
    BtnContainer[index].style.display = "none";
}