import "./styles.css";
import { eventListeners } from "./dom";

const app = [];

class Task {
    constructor(title, description, dueDate, priority, note) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.note = note || "No note";
    }
}

class Project {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.tasks = [];
    }
}

function createId(array) {
    array.forEach((item, index) => item.id = index);
}

function addTask(array, title, description, dueDate, priority, note) {
    array.push(new Task(title, description, dueDate, priority, note))
    createId(array);
}

function addProject(title, description) {
    app.push(new Project(title, description));
    createId(app);
}

function deleteProject(id) {
    app.splice(id, 1);
    createId(app);
}

function deleteTask(projectId, taskId) {
    app[projectId].tasks.splice(taskId, 1);
    createId(app[projectId].tasks);
}

let currentProject;

addProject("Default", "The Default Tasks");
currentProject = app[0];
addTask(currentProject.tasks, "Todo List", "Complete the Todo list project from the Odin project", new Date(2025, 1, 10), "Low", "Take a water bottle");
console.log(currentProject);

eventListeners(addProject, deleteProject, addTask, deleteTask, app);