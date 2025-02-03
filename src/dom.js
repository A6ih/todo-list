import createElement from "./createElement";

const showProjectDialog = document.querySelector("#show-project-dialog");
const projectDialog = document.querySelector("#project-dialog");
const addProjectBtn = document.querySelector("#add-project-btn");
const projectNav = document.querySelector("#project-nav");

export function showProjectModal() {
    showProjectDialog.addEventListener("click", function() {
    projectDialog.showModal();
    })
}

export function addProjectDom(fn, arr) {
    addProjectBtn.addEventListener("click", function(event) {
        event.preventDefault();
        const title = document.querySelector("#project-title");
        const description = document.querySelector("#project-description");
        fn(title.value, description.value);
        console.log(arr);
        title.value = "";
        description.value = "";
        addToNav(arr);
        projectDialog.close();
    })
}

export function addToNav(arr) {
    projectNav.textContent = ""
    for (let i = 0; i < arr.length; i++) {
        const div = createElement("div", "class", "project-container", "");
        const title = createElement("h3", "class", "project-title", arr[i].title);
        const deleteBtn = createElement("button", "data-delete-project", arr[i].id, "🗑");
        div.appendChild(title);
        div.appendChild(deleteBtn);
        projectNav.appendChild(div);
    }
}
