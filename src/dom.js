import createElement from "./createElement";

const showProjectDialog = document.querySelector("#show-project-dialog");
const projectDialog = document.querySelector("#project-dialog");
const addProjectBtn = document.querySelector("#add-project-btn");
const projectNav = document.querySelector("#project-nav");
let deleteProjectBtns;
let projectContainer;

export function eventListeners(addProjectFn, deleteProjectFn, switchProjectFn, getProjectFn, addTaskFn, deleteTaskFn, arr){

    showProjectDialog.addEventListener("click", function() {
        projectDialog.showModal();
    })

    addProjectBtn.addEventListener("click", function(event) {
        event.preventDefault();
        const title = document.querySelector("#project-title");
        const description = document.querySelector("#project-description");
        addProjectFn(title.value, description.value);
        console.log(arr);
        title.value = "";
        description.value = "";
        renderProjectNav(arr, updateProjectElements);
        projectDialog.close();
    })

    renderProjectNav(arr, updateProjectElements);
    renderTasks(arr[0]);

    function deleteProject(event) {
        const index = +event.target.dataset.deleteProject;
        deleteProjectFn(index);
        renderProjectNav(arr, updateProjectElements);
    }

    function updateProjectElements() {
        deleteProjectBtns = Array.from(document.querySelectorAll(".project-delete-btn"));
        projectContainer = Array.from(document.querySelectorAll(".project-container"));
        deleteProjectBtns.forEach(item => item.addEventListener("click", deleteProject));
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
    console.log(deleteProjectBtns);
}

function renderTasks(obj) {
    const projectHeader = document.querySelector("#project-header-display");
    const projectDecription = document.querySelector("#project-description-display");
    const taskCardsContainer = document.querySelector("#task-cards-container");

    projectHeader.textContent = "";
    projectDecription.textContent = "";

    projectHeader.textContent = obj.title;
    projectDecription.textContent = obj.description;

    const taskArr = obj.tasks;

    for(let i = 0; i < taskArr.length; i++) {
        const div =  createElement("div", "class", "task-cards", "");
        div.appendChild(createElement("h4", "class", "task-title", "Title: " + taskArr[0].title));
        div.appendChild(createElement("p", "class", "task-description","Description: " + taskArr[0].description));
        div.appendChild(createElement("p", "class", "task-due-date", "Due Date: " + taskArr[0].dueDate));
        div.appendChild(createElement("p", "class", "task-priority", "Priority: " + taskArr[0].priority));
        div.appendChild(createElement("hp", "class", "task-note", "Note: " + taskArr[0].note));
        taskCardsContainer.appendChild(div);
    }
}

// function Tasks(event) {
//     const index = +event.target.dataset.projectDiv;
// }
