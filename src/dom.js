import createElement from "./createElement";

const showProjectDialog = document.querySelector("#show-project-dialog");
const projectDialog = document.querySelector("#project-dialog");
const addProjectBtn = document.querySelector("#add-project-btn");
const projectNav = document.querySelector("#project-nav");
let deleteProjectBtns;
let projectContainer;

export function eventListeners(addProjectFn, deleteProjectFn, addTaskFn, deleteTaskFn, arr){

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

export function renderProjectNav(arr, fn) {
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


function displayTasks(event) {
    const index = +event.target.dataset.projectDiv;
}
